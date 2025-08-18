'use client';

import React, { useState } from 'react';
import { Shield, Download, Trash2, Settings, Eye, Cookie } from 'lucide-react';
import { useCookieConsent } from './CookieConsent';
import { useUserDataCollection } from './useUserDataCollection';

export const PrivacyCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { consent, openPreferences, getUserData } = useCookieConsent();
  const { getAllUserData, exportUserData, deleteAllUserData } = useUserDataCollection();

  const userData = getAllUserData();

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Eye },
    { id: 'cookies', name: 'Cookie Settings', icon: Cookie },
    { id: 'data', name: 'My Data', icon: Shield },
    { id: 'preferences', name: 'Preferences', icon: Settings }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 px-8 py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Privacy Center</h1>
              <p className="text-emerald-100 text-lg">
                Take control of your data and privacy settings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-8">
          <nav className="flex space-x-8 -mb-px">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-6 px-1 border-b-3 font-medium text-sm flex items-center gap-3 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600 bg-emerald-50/50 rounded-t-xl -mb-[1px]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-8">
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Your Privacy Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  consent?.necessary ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Essential</p>
                <p className="text-xs text-gray-600">Always Active</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  consent?.analytics ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <Eye className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Analytics</p>
                <p className="text-xs text-gray-600">{consent?.analytics ? 'Active' : 'Disabled'}</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  consent?.marketing ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <Cookie className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Marketing</p>
                <p className="text-xs text-gray-600">{consent?.marketing ? 'Active' : 'Disabled'}</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  consent?.preferences ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <Settings className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Preferences</p>
                <p className="text-xs text-gray-600">{consent?.preferences ? 'Active' : 'Disabled'}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-600 mb-4">
                We collect data to improve your experience and provide better services.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Session information (when necessary)
                </li>
                {consent?.analytics && (
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Usage analytics and page views
                  </li>
                )}
                {consent?.marketing && (
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Marketing and advertising data
                  </li>
                )}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
              <p className="text-gray-600 mb-4">
                You have full control over your personal data.
              </p>
              <div className="space-y-2">
                <button
                  onClick={exportUserData}
                  className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download your data
                </button>
                <button
                  onClick={openPreferences}
                  className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center gap-2 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  Manage cookie preferences
                </button>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
                      deleteAllUserData();
                    }
                  }}
                  className="w-full text-left p-2 hover:bg-red-50 rounded flex items-center gap-2 text-sm text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete all data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cookies' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Cookie Settings</h2>
            <p className="text-gray-600 mb-6">
              Manage which cookies and data collection methods you're comfortable with.
            </p>
            <button
              onClick={openPreferences}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Manage Cookie Preferences
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Current Settings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">Required for the website to function</p>
                </div>
                <span className="text-green-600 font-medium">Always Active</span>
              </div>
              <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand website usage</p>
                </div>
                <span className={`font-medium ${consent?.analytics ? 'text-green-600' : 'text-gray-400'}`}>
                  {consent?.analytics ? 'Active' : 'Disabled'}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Used for advertising and marketing</p>
                </div>
                <span className={`font-medium ${consent?.marketing ? 'text-green-600' : 'text-gray-400'}`}>
                  {consent?.marketing ? 'Active' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'data' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Data</h2>
            <p className="text-gray-600 mb-6">
              Here's an overview of the data we've collected based on your consent preferences.
            </p>
          </div>

          {userData ? (
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Consent Record</h3>
                <p className="text-sm text-gray-600 mb-2">Last updated: {new Date(userData.timestamp).toLocaleDateString()}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div>Necessary: <span className="text-green-600">✓</span></div>
                  <div>Analytics: <span className={userData.consent.analytics ? 'text-green-600' : 'text-red-600'}>{userData.consent.analytics ? '✓' : '✗'}</span></div>
                  <div>Marketing: <span className={userData.consent.marketing ? 'text-green-600' : 'text-red-600'}>{userData.consent.marketing ? '✓' : '✗'}</span></div>
                  <div>Preferences: <span className={userData.consent.preferences ? 'text-green-600' : 'text-red-600'}>{userData.consent.preferences ? '✓' : '✗'}</span></div>
                </div>
              </div>

              {userData.analytics?.pageViews && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Page Views</h3>
                  <p className="text-sm text-gray-600">Total pages viewed: {userData.analytics.pageViews.length}</p>
                </div>
              )}

              {userData.formSubmissions && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Form Submissions</h3>
                  <p className="text-sm text-gray-600">Total forms submitted: {userData.formSubmissions.length}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={exportUserData}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Export Data
                </button>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
                      deleteAllUserData();
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete All Data
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Collected</h3>
              <p className="text-gray-600">We haven't collected any personal data yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PrivacyCenter;
