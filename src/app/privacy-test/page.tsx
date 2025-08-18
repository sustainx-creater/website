'use client';

import { useState, useEffect } from 'react';
import { useCookieConsent } from '@/components/CookieConsent';
import { useGoogleAnalytics } from '@/components/GoogleAnalytics';

export default function PrivacyTestPage() {
  const { consent, hasConsent, getUserData } = useCookieConsent();
  const { trackEvent, trackPageView, isTrackingEnabled } = useGoogleAnalytics();
  const [userData, setUserData] = useState<any>(null);
  const [backendData, setBackendData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Track page view for this test page
    trackPageView('/privacy-test');
    
    // Get local storage data
    const localData = getUserData();
    setUserData(localData);
  }, [consent, getUserData, trackPageView]);

  const fetchBackendData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/user-data');
      if (response.ok) {
        const data = await response.json();
        setBackendData(data);
      } else {
        console.error('Failed to fetch backend data');
      }
    } catch (error) {
      console.error('Error fetching backend data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAllData = async () => {
    try {
      // Clear localStorage
      localStorage.removeItem('user-data');
      setUserData(null);

      // Clear backend data
      await fetch('/api/user-data', {
        method: 'DELETE'
      });
      setBackendData(null);

      alert('All data cleared successfully!');
    } catch (error) {
      console.error('Error clearing data:', error);
      alert('Error clearing data');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔒 GDPR Privacy Test Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Test your cookie consent and data storage implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Consent Status */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                🍪
              </span>
              Cookie Consent Status
            </h2>
            
            {consent ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(consent).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium capitalize text-gray-700">{key}:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        value 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {value ? '✅ Enabled' : '❌ Disabled'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No consent given yet. Accept cookies to see data collection.</p>
              </div>
            )}
          </div>

          {/* Local Storage Data */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                💾
              </span>
              Local Storage Data
            </h2>
            
            {userData ? (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Timestamp:</strong> {userData.timestamp}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Data Types Collected:</strong>
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {userData.session && <li>Session data (user agent, language)</li>}
                    {userData.analytics && <li>Analytics data (screen resolution, referrer)</li>}
                    {userData.marketing && <li>Marketing data (UTM parameters)</li>}
                    {userData.preferences && <li>Preferences data (theme, timezone)</li>}
                  </ul>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-auto max-h-64">
                  {JSON.stringify(userData, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No local data stored yet.</p>
              </div>
            )}
          </div>

          {/* Backend Data */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  🌐
                </span>
                Backend Data
              </h2>
              <button
                onClick={fetchBackendData}
                disabled={isLoading}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Fetch Data'}
              </button>
            </div>
            
            {backendData ? (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Total Records:</strong> {backendData.data?.length || 0}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Status:</strong> {backendData.success ? '✅ Connected' : '❌ Error'}
                  </p>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-auto max-h-64">
                  {JSON.stringify(backendData, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Click "Fetch Data" to load backend data.</p>
              </div>
            )}
          </div>

          {/* Google Analytics Testing */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                📊
              </span>
              Google Analytics Testing
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>GA Tracking Status:</strong> {isTrackingEnabled ? '✅ Active' : '❌ Disabled'}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Measurement ID:</strong> G-CTB2RNTK60
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => trackEvent('test_button_click', {
                    button_name: 'test_event',
                    event_category: 'testing',
                    event_label: 'privacy_dashboard_test'
                  })}
                  disabled={!isTrackingEnabled}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isTrackingEnabled 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Test GA Event
                </button>
                
                <button
                  onClick={() => trackPageView('/privacy-test-manual')}
                  disabled={!isTrackingEnabled}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isTrackingEnabled 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Test Page View
                </button>
              </div>
              
              <div className="text-xs text-gray-500 space-y-1">
                <p>✓ Only tracks when analytics consent is given</p>
                <p>✓ Automatically respects GDPR preferences</p>
                <p>✓ Removes GA scripts when consent withdrawn</p>
                <p>✓ Check browser console for tracking logs</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                🗑️
              </span>
              Data Management
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Test GDPR compliance by clearing all collected data.
              </p>
              
              <button
                onClick={clearAllData}
                className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Clear All Data (GDPR Right to be Forgotten)
              </button>
              
              <div className="text-xs text-gray-500 space-y-1">
                <p>✓ Clears localStorage data</p>
                <p>✓ Deletes backend records</p>
                <p>✓ Respects GDPR data deletion rights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Explanation */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🔄 Data Flow Architecture
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">User Consent</h3>
              <p className="text-sm text-gray-600">User accepts/rejects cookie categories</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Data Collection</h3>
              <p className="text-sm text-gray-600">Collect only consented data types</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Local Storage</h3>
              <p className="text-sm text-gray-600">Store in browser localStorage</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Backend Sync</h3>
              <p className="text-sm text-gray-600">Send to API for persistence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
