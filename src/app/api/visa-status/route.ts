import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl!, supabaseKey!)

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is properly configured
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase configuration missing')
      return NextResponse.json(
        { error: 'Service configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    const { application_number } = await request.json()

    if (!application_number) {
      return NextResponse.json(
        { error: 'Application Number is required' },
        { status: 400 }
      )
    }

    // Clean and extract the application number
    // Remove IRL/irl prefix and any spaces, keep only numbers
    const cleanApplicationNumber = application_number
      .toString()
      .replace(/^(irl|IRL)/i, '') // Remove IRL prefix (case insensitive)
      .replace(/\s+/g, '') // Remove all spaces
      .replace(/[^0-9]/g, '') // Keep only numbers

    if (!cleanApplicationNumber || cleanApplicationNumber.length < 5) {
      return NextResponse.json(
        { error: 'Please enter a valid application number (at least 5 digits)' },
        { status: 400 }
      )
    }

    console.log('Original application number:', application_number)
    console.log('Cleaned application number:', cleanApplicationNumber)

    // Query the visa_decisions table
    const { data, error } = await supabase
      .from('visa_decisions')
      .select('*')
      .eq('application_number', cleanApplicationNumber)
      .single()

    if (error) {
      console.error('Supabase query error:', error)
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { 
            error: `No application found with number ${cleanApplicationNumber}. Please check your application number and try again.`,
            suggestion: 'Make sure to enter only the numbers from your application reference (e.g., 57268902)'
          },
          { status: 404 }
        )
      }
      return NextResponse.json(
        { error: 'Database error. Please try again later.' },
        { status: 500 }
      )
    }

    if (!data) {
      return NextResponse.json(
        { 
          error: `Application number ${cleanApplicationNumber} not found in our records.`,
          suggestion: 'Please verify your application number. It should be the numeric part of your reference (e.g., 57268902)'
        },
        { status: 404 }
      )
    }

    console.log('Found data:', data)

    // Return the data in the format the frontend expects
    const visaStatus = {
      application_number: data.application_number.toString(),
      decision: data.decision,
      last_updated: data.last_updated
    }

    return NextResponse.json({ status: visaStatus })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}