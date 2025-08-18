'use client';

import { useEffect } from 'react';
import { useCookieConsent } from './CookieConsent';

// Google Analytics Configuration
const GA_MEASUREMENT_ID = 'G-CTB2RNTK60';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    // Only load Google Analytics if user has consented to analytics cookies
    if (hasConsent('analytics')) {
      loadGoogleAnalytics();
    } else {
      // Remove Google Analytics if consent is withdrawn
      removeGoogleAnalytics();
    }
  }, [hasConsent]);

  const loadGoogleAnalytics = () => {
    // Check if already loaded
    if (window.gtag) {
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer?.push(arguments);
    };

    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onload = () => {
      // Initialize Google Analytics
      window.gtag?.('js', new Date());
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        // Respect privacy settings
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });

      console.log('✅ Google Analytics loaded with privacy settings');
    };
    
    document.head.appendChild(script);
  };

  const removeGoogleAnalytics = () => {
    // Remove Google Analytics scripts
    const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
    scripts.forEach(script => script.remove());

    // Clear dataLayer and gtag
    if (window.dataLayer) {
      window.dataLayer.length = 0;
    }
    window.gtag = undefined;

    // Remove Google Analytics cookies
    const gaCookies = document.cookie.split(';').filter(cookie => 
      cookie.trim().startsWith('_ga') || 
      cookie.trim().startsWith('_gid') ||
      cookie.trim().startsWith('_gat')
    );

    gaCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    });

    console.log('🗑️ Google Analytics removed and cookies cleared');
  };

  return null; // This component doesn't render anything
};

// Hook for tracking custom events
export const useGoogleAnalytics = () => {
  const { hasConsent } = useCookieConsent();

  const trackEvent = (eventName: string, parameters?: any) => {
    if (hasConsent('analytics') && window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        // Add privacy-conscious defaults
        send_to: GA_MEASUREMENT_ID,
      });
      console.log(`📊 GA Event tracked: ${eventName}`, parameters);
    }
  };

  const trackPageView = (pagePath?: string) => {
    if (hasConsent('analytics') && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath || window.location.pathname,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      console.log(`📊 GA Page view tracked: ${pagePath || window.location.pathname}`);
    }
  };

  const trackConversion = (conversionId: string, value?: number) => {
    if (hasConsent('analytics') && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: 'USD',
      });
      console.log(`📊 GA Conversion tracked: ${conversionId}`);
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    isTrackingEnabled: hasConsent('analytics')
  };
};

export default GoogleAnalytics;
