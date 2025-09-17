'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, Cookie, Settings, Shield, BarChart3, Target } from 'lucide-react';
import { dataStorage, UserConsentData } from '@/lib/dataStorage';

// Types for cookie categories and consent
export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  icon: React.ReactNode;
}

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  showPreferences: boolean;
  updateConsent: (consent: CookieConsent) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  hasConsent: (category: keyof CookieConsent) => boolean;
  getUserData: () => UserConsentData | null;
}

// Cookie categories configuration
const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Necessary Cookies',
    description: 'Essential for the website to function properly. Cannot be disabled.',
    required: true,
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    required: false,
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Used to track visitors across websites for advertising purposes.',
    required: false,
    icon: <Target className="w-5 h-5" />
  },
  {
    id: 'preferences',
    name: 'Preference Cookies',
    description: 'Remember your settings and preferences for a better experience.',
    required: false,
    icon: <Settings className="w-5 h-5" />
  }
];

// Create context
const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

// Cookie utilities
const CONSENT_COOKIE_NAME = 'cookie-consent';
const USER_DATA_KEY = 'user-data';
const CONSENT_EXPIRY_DAYS = 365;

const setCookie = (name: string, value: string, days: number) => {
  if (typeof window === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const removeCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

// User data management based on consent
const collectUserData = async (consent: CookieConsent) => {
  if (typeof window === 'undefined') return null;
  
  const userData: UserConsentData = {
    timestamp: new Date().toISOString(),
    consent: consent
  };

  if (consent.necessary) {
    userData.session = {
      sessionId: Math.random().toString(36).substr(2, 9),
      userAgent: navigator.userAgent,
      language: navigator.language
    };
  }

  if (consent.analytics) {
    userData.analytics = {
      pageViews: [],
      timeOnSite: 0,
      referrer: document.referrer,
      screenResolution: `${screen.width}x${screen.height}`
    };
  }

  if (consent.marketing) {
    userData.marketing = {
      utm_source: new URLSearchParams(window.location.search).get('utm_source'),
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
      utm_content: new URLSearchParams(window.location.search).get('utm_content'),
      utm_term: new URLSearchParams(window.location.search).get('utm_term')
    };
  }

  if (consent.preferences) {
    userData.preferences = {
      theme: 'default',
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }

  // Store using the new data storage manager (handles both local and backend)
  await dataStorage.storeUserData(userData);
  
  return userData;
};

// Cookie Consent Provider
export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after first render to prevent hydration mismatch
    setMounted(true);
    
    // Check for existing consent on mount
    const existingConsent = getCookie(CONSENT_COOKIE_NAME);
    if (existingConsent) {
      try {
        const parsedConsent = JSON.parse(existingConsent);
        setConsent(parsedConsent);
      } catch (error) {
        console.error('Error parsing consent cookie:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const updateConsent = async (newConsent: CookieConsent) => {
    setConsent(newConsent);
    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(newConsent), CONSENT_EXPIRY_DAYS);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Collect user data based on consent
    await collectUserData(newConsent);
    
    // Clean up cookies that are no longer consented to
    if (!newConsent.analytics) {
      removeCookie('_ga');
      removeCookie('_ga_*');
    }
    if (!newConsent.marketing) {
      removeCookie('_fbp');
      removeCookie('_fbc');
    }
  };

  const acceptAll = async () => {
    const allConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    await updateConsent(allConsent);
  };

  const rejectAll = async () => {
    const minimalConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    await updateConsent(minimalConsent);
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  const hasConsent = (category: keyof CookieConsent): boolean => {
    return consent?.[category] ?? false;
  };

  const getUserData = () => {
    const data = localStorage.getItem(USER_DATA_KEY);
    return data ? JSON.parse(data) : null;
  };

  return (
    <CookieConsentContext.Provider value={{
      consent,
      showBanner,
      showPreferences,
      updateConsent,
      acceptAll,
      rejectAll,
      openPreferences,
      closePreferences,
      hasConsent,
      getUserData
    }}>
      {children}
      {showBanner && <CookieBanner />}
      {showPreferences && <CookiePreferences />}
    </CookieConsentContext.Provider>
  );
};

// Hook to use cookie consent
export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

// Cookie Banner Component
const CookieBanner: React.FC = () => {
  const { acceptAll, rejectAll, openPreferences } = useCookieConsent();

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 md:p-8 transform transition-all duration-500 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Icon and Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  🍪 We value your privacy
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
                  <button 
                    onClick={openPreferences}
                    className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                  >
                    Learn more
                  </button>
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={openPreferences}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105 border border-gray-200 hover:shadow-md"
              >
                Customize
              </button>
              <button
                onClick={rejectAll}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 hover:scale-105 border border-gray-300 hover:shadow-md"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cookie Preferences Modal
const CookiePreferences: React.FC = () => {
  const { consent, updateConsent, closePreferences } = useCookieConsent();
  const [tempConsent, setTempConsent] = useState<CookieConsent>(
    consent || { necessary: true, analytics: false, marketing: false, preferences: false }
  );

  const handleToggle = (category: keyof CookieConsent) => {
    if (category === 'necessary') return; // Can't disable necessary cookies
    
    setTempConsent(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = async () => {
    await updateConsent(tempConsent);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-6 text-white relative">
          <button
            onClick={closePreferences}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cookie Preferences</h2>
              <p className="text-emerald-100 mt-1">Customize your privacy settings</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <p className="text-gray-600 mb-8 text-center">
            Choose which cookies you want to accept. You can change these settings at any time.
          </p>

          <div className="space-y-6">
            {COOKIE_CATEGORIES.map((category) => (
              <div key={category.id} className="group">
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-200 border-2 border-transparent hover:border-emerald-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        category.required 
                          ? 'bg-emerald-100 text-emerald-600' 
                          : tempConsent[category.id as keyof CookieConsent]
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-gray-200 text-gray-500'
                      }`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{category.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {category.required ? (
                        <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-medium">
                          Always Active
                        </div>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={tempConsent[category.id as keyof CookieConsent]}
                            onChange={() => handleToggle(category.id as keyof CookieConsent)}
                          />
                          <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-teal-600 shadow-lg"></div>
                        </label>
                      )}
                    </div>
                  </div>
                  
                  {/* Additional info for each category */}
                  <div className="text-xs text-gray-500 bg-white rounded-xl p-4 border border-gray-200">
                    {category.id === 'necessary' && "Required for website security, authentication, and basic functionality."}
                    {category.id === 'analytics' && "Helps us understand visitor behavior to improve our website experience."}
                    {category.id === 'marketing' && "Enables personalized advertising and marketing communications."}
                    {category.id === 'preferences' && "Remembers your settings and preferences for future visits."}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 flex gap-4 border-t border-gray-200">
          <button
            onClick={closePreferences}
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-colors font-medium text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium shadow-lg hover:shadow-emerald-500/25"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

// Hook for tracking page views (only if analytics consent is given)
export const usePageTracking = () => {
  const { hasConsent, getUserData } = useCookieConsent();

  useEffect(() => {
    if (hasConsent('analytics')) {
      const userData = getUserData();
      if (userData?.analytics) {
        const pageView = {
          url: window.location.pathname,
          timestamp: new Date().toISOString(),
          referrer: document.referrer
        };
        
        userData.analytics.pageViews.push(pageView);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
        
        // Here you could send this data to your analytics service
        console.log('Page view tracked:', pageView);
      }
    }
  }, [hasConsent, getUserData]);
};

export default CookieConsentProvider;
