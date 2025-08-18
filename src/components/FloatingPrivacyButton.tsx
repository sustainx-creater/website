'use client';

import React, { useState } from 'react';
import { Settings, Shield, X, Cookie } from 'lucide-react';
import { useCookieConsent } from './CookieConsent';
import PrivacyCenter from './PrivacyCenterModern';

export const FloatingPrivacyButton: React.FC = () => {
  const [showPrivacyCenter, setShowPrivacyCenter] = useState(false);
  const { openPreferences } = useCookieConsent();

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Privacy Center Button */}
        <div className="relative group">
          <button
            onClick={() => setShowPrivacyCenter(true)}
            className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center group backdrop-blur-sm"
          >
            <Shield className="w-6 h-6" />
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg font-medium">
              Privacy Center
              <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Cookie Settings Button */}
        <div className="relative group">
          <button
            onClick={openPreferences}
            className="w-14 h-14 bg-white/90 backdrop-blur-xl text-gray-700 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <Cookie className="w-6 h-6" />
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-lg font-medium">
              Cookie Settings
              <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Center Modal */}
      {showPrivacyCenter && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden relative">
            <button
              onClick={() => setShowPrivacyCenter(false)}
              className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10 group"
            >
              <X className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </button>
            <div className="overflow-y-auto max-h-[95vh]">
              <PrivacyCenter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingPrivacyButton;
