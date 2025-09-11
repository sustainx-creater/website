import Link from 'next/link'

export default function AccountDeletionConfirmed() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Account Deletion Confirmed
          </h1>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Your EZMove account has been successfully scheduled for deletion.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-blue-800 mb-2">What happens next:</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Your account has been immediately deactivated</li>
                <li>• Personal data will be deleted within 7 days</li>
                <li>• All backups will be cleared within 30 days</li>
                <li>• You'll receive a final confirmation email when complete</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-yellow-800 mb-2">Important Note:</h3>
              <p className="text-sm text-yellow-700">
                If you change your mind within the next 7 days, contact our support team at{' '}
                <a href="mailto:support@ez-move.app" className="underline font-medium">
                  support@ez-move.app
                </a>{' '}
                to potentially restore your account.
              </p>
            </div>
            
            <p className="text-sm">
              We're sorry to see you go. Thank you for using EZMove!
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <Link 
              href="/"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Return to Homepage
            </Link>
            
            <Link 
              href="/support"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Deletion Reference: DEL-{Date.now()}<br />
            {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  )
}
