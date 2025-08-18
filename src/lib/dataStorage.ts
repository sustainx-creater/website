// /src/lib/dataStorage.ts
'use client';

export interface UserConsentData {
  userId?: string;
  timestamp: string;
  consent: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  };
  session?: {
    sessionId: string;
    userAgent: string;
    language: string;
    ipAddress?: string;
  };
  analytics?: {
    pageViews: Array<{
      url: string;
      timestamp: string;
      referrer: string;
    }>;
    timeOnSite: number;
    referrer: string;
    screenResolution: string;
    interactions?: Array<{
      action: string;
      details: any;
      timestamp: string;
      url: string;
    }>;
  };
  marketing?: {
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    utm_content: string | null;
    utm_term: string | null;
  };
  preferences?: {
    theme: string;
    language: string;
    timezone: string;
    userSettings?: Record<string, any>;
  };
  formSubmissions?: Array<{
    type: string;
    formType: string;
    timestamp: string;
    data: any;
  }>;
}

const USER_DATA_KEY = 'user-data';
const CONSENT_COOKIE_NAME = 'cookie-consent';

// Enhanced data storage with backend integration
export class DataStorageManager {
  private apiEndpoint: string;
  
  constructor(apiEndpoint: string = '/api/user-data') {
    this.apiEndpoint = apiEndpoint;
  }

  // Store data both locally and on backend
  async storeUserData(data: UserConsentData): Promise<void> {
    try {
      // Store locally first (for immediate access)
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
      
      // Send to backend if user consented to necessary cookies
      if (data.consent.necessary) {
        await this.sendToBackend(data);
      }
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  }

  // Send data to your backend
  private async sendToBackend(data: UserConsentData): Promise<void> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          // Add additional metadata
          browserInfo: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            doNotTrack: navigator.doNotTrack,
          },
          pageInfo: {
            url: window.location.href,
            title: document.title,
            referrer: document.referrer,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Data successfully sent to backend:', result);
    } catch (error) {
      console.error('Failed to send data to backend:', error);
      // Data is still stored locally, so not a critical failure
    }
  }

  // Get user data from localStorage
  getUserData(): UserConsentData | null {
    try {
      const data = localStorage.getItem(USER_DATA_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  }

  // Update existing user data
  async updateUserData(updates: Partial<UserConsentData>): Promise<void> {
    const existingData = this.getUserData();
    if (existingData) {
      const updatedData = { ...existingData, ...updates };
      await this.storeUserData(updatedData);
    }
  }

  // Add form submission data
  async addFormSubmission(formData: any, formType: string): Promise<void> {
    const userData = this.getUserData();
    if (userData) {
      userData.formSubmissions = userData.formSubmissions || [];
      userData.formSubmissions.push({
        type: 'form_submission',
        formType,
        timestamp: new Date().toISOString(),
        data: formData
      });
      await this.storeUserData(userData);
    }
  }

  // Add analytics interaction
  async addInteraction(action: string, details: any): Promise<void> {
    const userData = this.getUserData();
    if (userData?.consent.analytics && userData.analytics) {
      userData.analytics.interactions = userData.analytics.interactions || [];
      userData.analytics.interactions.push({
        action,
        details,
        timestamp: new Date().toISOString(),
        url: window.location.pathname
      });
      await this.storeUserData(userData);
    }
  }

  // Export user data (GDPR compliance)
  exportUserData(): void {
    const data = this.getUserData();
    if (!data) return;

    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `user-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Delete all user data (GDPR compliance)
  async deleteAllUserData(): Promise<void> {
    try {
      // Delete from backend if possible
      const userData = this.getUserData();
      if (userData?.userId) {
        await fetch(`${this.apiEndpoint}/${userData.userId}`, {
          method: 'DELETE'
        });
      }
    } catch (error) {
      console.error('Error deleting data from backend:', error);
    }

    // Delete from localStorage
    localStorage.removeItem(USER_DATA_KEY);
    localStorage.removeItem(CONSENT_COOKIE_NAME);
    
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      const eqPos = c.indexOf("=");
      const name = eqPos > -1 ? c.substr(0, eqPos) : c;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });

    // Reload page to reset consent state
    window.location.reload();
  }
}

// Export singleton instance
export const dataStorage = new DataStorageManager();

export default dataStorage;
