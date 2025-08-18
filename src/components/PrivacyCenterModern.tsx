'use client';

import React, { useState } from 'react';
import { Shield, Download, Trash2, Settings, Eye, Cookie } from 'lucide-react';
import { useCookieConsent } from './CookieConsent';
import { useUserDataCollection } from './useUserDataCollection';

export const PrivacyCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { consent, openPreferences } = useCookieConsent();
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
                  className={`py-6 px-4 border-b-3 font-medium text-sm flex items-center gap-3 transition-all duration-200 ${
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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/50">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7" />
                Your Privacy Status
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                    consent?.necessary ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Shield className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Essential</p>
                  <p className="text-xs text-emerald-600 font-medium">Always Active</p>
                </div>
                <div className="text-center group">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                    consent?.analytics ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Eye className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Analytics</p>
                  <p className={`text-xs font-medium ${consent?.analytics ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {consent?.analytics ? 'Active' : 'Disabled'}
                  </p>
                </div>
                <div className="text-center group">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                    consent?.marketing ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Cookie className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Marketing</p>
                  <p className={`text-xs font-medium ${consent?.marketing ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {consent?.marketing ? 'Active' : 'Disabled'}
                  </p>
                </div>
                <div className="text-center group">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                    consent?.preferences ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Settings className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">Preferences</p>
                  <p className={`text-xs font-medium ${consent?.preferences ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {consent?.preferences ? 'Active' : 'Disabled'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Data Collection</h3>
                <p className="text-gray-600 mb-6">
                  We collect data to improve your experience and provide better services.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Session information (when necessary)</span>
                  </li>
                  {consent?.analytics && (
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Usage analytics and page views</span>
                    </li>
                  )}
                  {consent?.marketing && (
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Marketing and advertising data</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Your Rights</h3>
                <p className="text-gray-600 mb-6">
                  You have full control over your personal data.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={exportUserData}
                    className="w-full text-left p-3 hover:bg-emerald-50 rounded-xl flex items-center gap-3 text-sm font-medium text-gray-900 hover:text-emerald-700 transition-colors duration-200 group"
                  >
                    <Download className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    Download your data
                  </button>
                  <button
                    onClick={openPreferences}
                    className="w-full text-left p-3 hover:bg-emerald-50 rounded-xl flex items-center gap-3 text-sm font-medium text-gray-900 hover:text-emerald-700 transition-colors duration-200 group"
                  >
                    <Settings className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    Manage cookie preferences
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
                        deleteAllUserData();
                      }
                    }}
                    className="w-full text-left p-3 hover:bg-red-50 rounded-xl flex items-center gap-3 text-sm font-medium text-red-600 transition-colors duration-200 group"
                  >
                    <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Delete all data
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cookies Tab */}
        {activeTab === 'cookies' && (
          <div className="space-y-8">
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Cookie className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookie Settings</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Manage which cookies and data collection methods you're comfortable with. 
                You can update these preferences at any time.
              </p>
              <button
                onClick={openPreferences}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                Manage Cookie Preferences
              </button>
            </div>

            <div className="grid gap-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900">Necessary Cookies</h4>
                      <p className="text-sm text-emerald-700">Required for the website to function</p>
                    </div>
                  </div>
                  <span className="text-emerald-700 font-bold text-sm bg-emerald-100 px-3 py-1 rounded-lg">Always Active</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      consent?.analytics ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Eye className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand website usage</p>
                    </div>
                  </div>
                  <span className={`font-bold text-sm px-3 py-1 rounded-lg ${
                    consent?.analytics 
                      ? 'text-emerald-700 bg-emerald-100' 
                      : 'text-gray-500 bg-gray-100'
                  }`}>
                    {consent?.analytics ? 'Active' : 'Disabled'}
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      consent?.marketing ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Cookie className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">Used for advertising and marketing</p>
                    </div>
                  </div>
                  <span className={`font-bold text-sm px-3 py-1 rounded-lg ${
                    consent?.marketing 
                      ? 'text-emerald-700 bg-emerald-100' 
                      : 'text-gray-500 bg-gray-100'
                  }`}>
                    {consent?.marketing ? 'Active' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Tab */}
        {activeTab === 'data' && (
          <div className="space-y-8">
            {userData ? (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">Consent Record</h3>
                  <p className="text-sm text-gray-600 mb-4">Last updated: {new Date(userData.timestamp).toLocaleDateString()}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-emerald-50 rounded-xl">
                      <div className="text-emerald-600 font-bold">✓</div>
                      <div className="text-xs text-gray-600 mt-1">Necessary</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className={userData.consent.analytics ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                        {userData.consent.analytics ? '✓' : '✗'}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Analytics</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className={userData.consent.marketing ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                        {userData.consent.marketing ? '✓' : '✗'}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Marketing</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className={userData.consent.preferences ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                        {userData.consent.preferences ? '✓' : '✗'}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Preferences</div>
                    </div>
                  </div>
                </div>

                {userData.analytics?.pageViews && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Page Views</h3>
                    <p className="text-gray-600">Total pages viewed: {userData.analytics.pageViews.length}</p>
                  </div>
                )}

                {userData.formSubmissions && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Form Submissions</h3>
                    <p className="text-gray-600">Total forms submitted: {userData.formSubmissions.length}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={exportUserData}
                    className="flex items-center gap-3 px-6 py-3 border-2 border-emerald-300 text-emerald-700 rounded-xl hover:bg-emerald-50 transition-colors font-medium"
                  >
                    <Download className="w-5 h-5" />
                    Export Data
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
                        deleteAllUserData();
                      }
                    }}
                    className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                  >
                    <Trash2 className="w-5 h-5" />
                    Delete All Data
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Data Collected</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We haven't collected any personal data yet. When you interact with our website, 
                  the data we collect (based on your consent) will appear here.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyCenter;
