"use client";

import { useEffect } from 'react';

export default function ResetPasswordPage() {
  useEffect(() => {
    // Redirect to app immediately
    window.location.href = 'ezmove://reset-password';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">EZMove</h1>
          <p className="text-gray-600">Redirecting to App...</p>
        </div>
        
        <div className="mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm">Opening the EZMove app to reset your password.</p>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>If the app doesn't open automatically, please ensure you have the EZMove app installed.</p>
        </div>
      </div>
    </div>
  );
}
