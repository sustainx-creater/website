import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Create a Supabase client with service role key for admin operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // You'll need to add this to your .env file
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json()

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    // Delete user data from your custom tables
    // Add your specific table deletions here based on your database schema
    const tablesToCleanup = [
      'user_profiles',
      'moving_history', 
      'saved_locations',
      'user_preferences',
      'user_documents',
      'reviews',
      'bookings'
    ]

    // Delete from each table (adjust table names based on your schema)
    for (const table of tablesToCleanup) {
      const { error: deleteError } = await supabaseAdmin
        .from(table)
        .delete()
        .eq('user_id', userId)
      
      // Log error but continue with other deletions
      if (deleteError) {
        console.error(`Error deleting from ${table}:`, deleteError)
      }
    }

    // Delete the user from auth
    const { error: authDeleteError } = await supabaseAdmin.auth.admin.deleteUser(userId)
    
    if (authDeleteError) {
      console.error('Error deleting user from auth:', authDeleteError)
      return NextResponse.json({ error: 'Failed to delete user account' }, { status: 500 })
    }

    // Log the deletion for compliance
    console.log(`User ${userId} account deleted successfully at ${new Date().toISOString()}`)

    return NextResponse.json({ 
      message: 'Account deletion initiated successfully',
      deletedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error('Account deletion error:', error)
    return NextResponse.json({ 
      error: 'An error occurred during account deletion' 
    }, { status: 500 })
  }
}
