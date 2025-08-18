// /src/app/api/user-data/route.ts
import { NextRequest, NextResponse } from 'next/server';

// This is a basic example - you'd typically use a proper database
// like PostgreSQL, MongoDB, or Supabase for production

interface UserConsentData {
  userId?: string;
  timestamp: string;
  consent: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  };
  session?: any;
  analytics?: any;
  marketing?: any;
  preferences?: any;
  formSubmissions?: any[];
  browserInfo?: any;
  pageInfo?: any;
}

// In production, you'd use a proper database
// For demo purposes, we'll simulate storage
const userData: Map<string, UserConsentData> = new Map();

export async function POST(request: NextRequest) {
  try {
    const data: UserConsentData = await request.json();
    
    // Generate user ID if not provided
    if (!data.userId) {
      data.userId = generateUserId();
    }

    // Store user data (in production, save to your database)
    userData.set(data.userId, data);

    // Log for compliance (in production, use proper logging)
    console.log(`User consent recorded: ${data.userId}`, {
      timestamp: data.timestamp,
      consent: data.consent,
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    // Example: Send to analytics services based on consent
    if (data.consent.analytics) {
      // await sendToGoogleAnalytics(data);
      console.log('Analytics consent given - data sent to analytics');
    }

    if (data.consent.marketing) {
      // await sendToMarketingPlatforms(data);
      console.log('Marketing consent given - data sent to marketing platforms');
    }

    return NextResponse.json({ 
      success: true, 
      userId: data.userId,
      message: 'User data stored successfully' 
    });

  } catch (error) {
    console.error('Error storing user data:', error);
    return NextResponse.json(
      { error: 'Failed to store user data' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const data = userData.get(userId);
    
    if (!data) {
      return NextResponse.json(
        { error: 'User data not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Error retrieving user data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve user data' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Delete user data (GDPR compliance)
    const deleted = userData.delete(userId);

    if (!deleted) {
      return NextResponse.json(
        { error: 'User data not found' },
        { status: 404 }
      );
    }

    // Log deletion for compliance
    console.log(`User data deleted: ${userId}`, {
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'User data deleted successfully' 
    });

  } catch (error) {
    console.error('Error deleting user data:', error);
    return NextResponse.json(
      { error: 'Failed to delete user data' },
      { status: 500 }
    );
  }
}

// Helper functions

function generateUserId(): string {
  return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

// Example integrations (implement based on your needs)

async function sendToGoogleAnalytics(data: UserConsentData) {
  // Example: Send to Google Analytics 4
  // gtag('config', 'GA_MEASUREMENT_ID', {
  //   user_id: data.userId,
  //   custom_map: { 'custom_parameter': 'value' }
  // });
}

async function sendToMarketingPlatforms(data: UserConsentData) {
  // Example: Send to Facebook Pixel, LinkedIn, etc.
  // fbq('init', 'YOUR_PIXEL_ID');
  // fbq('track', 'PageView', { user_id: data.userId });
}

/* 
PRODUCTION DATABASE EXAMPLE with Prisma:

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  const savedData = await prisma.userConsent.create({
    data: {
      userId: data.userId || generateUserId(),
      timestamp: new Date(data.timestamp),
      consent: data.consent,
      sessionData: data.session,
      analyticsData: data.analytics,
      marketingData: data.marketing,
      preferencesData: data.preferences,
      browserInfo: data.browserInfo,
      pageInfo: data.pageInfo,
      ipAddress: request.ip,
    }
  });
  
  return NextResponse.json({ success: true, userId: savedData.userId });
}

*/
