'use client';

import { useCookieConsent } from './CookieConsent';
import { dataStorage } from '@/lib/dataStorage';

// User data collection utilities
export const useUserDataCollection = () => {
  const { hasConsent } = useCookieConsent();

  // Collect form data only if user has given consent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const collectFormData = async (formData: any, formType: string) => {
    if (!hasConsent('necessary')) return;

    try {
      await dataStorage.addFormSubmission(formData, formType);
      console.log('Form data collected:', { formType, timestamp: new Date().toISOString() });
    } catch (error) {
      console.error('Error collecting form data:', error);
    }
  };

  // Track user interactions (only if analytics consent is given)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trackInteraction = async (action: string, details?: any) => {
    if (!hasConsent('analytics')) return;

    try {
      await dataStorage.addInteraction(action, details);
      console.log('Interaction tracked:', { action, details });
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  };

  // Store user preferences (only if preferences consent is given)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveUserPreference = async (key: string, value: any) => {
    if (!hasConsent('preferences')) return;

    try {
      const userData = dataStorage.getUserData();
      if (userData?.preferences) {
        userData.preferences.userSettings = userData.preferences.userSettings || {};
        userData.preferences.userSettings[key] = value;
        await dataStorage.storeUserData(userData);
        console.log('User preference saved:', { key, value });
      }
    } catch (error) {
      console.error('Error saving user preference:', error);
    }
  };

  // Get all collected user data
  const getAllUserData = () => {
    return dataStorage.getUserData();
  };

  // Export data for GDPR compliance
  const exportUserData = () => {
    dataStorage.exportUserData();
  };

  // Delete all user data (GDPR right to be forgotten)
  const deleteAllUserData = async () => {
    try {
      await dataStorage.deleteAllUserData();
    } catch (error) {
      console.error('Error deleting user data:', error);
    }
  };

  return {
    collectFormData,
    trackInteraction,
    saveUserPreference,
    getAllUserData,
    exportUserData,
    deleteAllUserData,
    hasConsent
  };
};

// Analytics utility functions
export const useAnalytics = () => {
  const { hasConsent } = useCookieConsent();

  const trackPageView = (page?: string) => {
    if (!hasConsent('analytics')) return;
    
    // Here you would integrate with your analytics provider
    console.log('Page view tracked:', page || window.location.pathname);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trackEvent = (eventName: string, parameters?: any) => {
    if (!hasConsent('analytics')) return;
    
    // Here you would integrate with your analytics provider
    console.log('Event tracked:', eventName, parameters);
  };

  const trackConversion = (conversionType: string, value?: number) => {
    if (!hasConsent('marketing')) return;
    
    // Here you would integrate with your marketing/conversion tracking
    console.log('Conversion tracked:', conversionType, value);
  };

  return {
    trackPageView,
    trackEvent,
    trackConversion
  };
};

export default useUserDataCollection;
