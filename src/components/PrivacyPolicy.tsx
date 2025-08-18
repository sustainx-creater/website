'use client';

import React from 'react';
import { Shield, Cookie, Eye, Database, Download, Trash2 } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            At EZMove, we are committed to protecting your privacy and ensuring transparency about how we collect, 
            use, and protect your personal information. This privacy policy explains how we handle your data in 
            compliance with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
          </p>
        </section>

        {/* Data Collection */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Data We Collect</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Essential Data</h3>
              <p className="text-sm text-gray-600 mb-3">
                Required for the website to function properly
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Session information</li>
                <li>• Browser type and language</li>
                <li>• Basic technical data</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Optional Data</h3>
              <p className="text-sm text-gray-600 mb-3">
                Collected only with your explicit consent
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Analytics and usage data</li>
                <li>• Marketing preferences</li>
                <li>• Form submissions</li>
                <li>• User preferences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookie Policy */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Cookie Policy</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your experience. You have full control over 
            which cookies you accept through our cookie consent banner.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">
                <Shield className="w-4 h-4 inline mr-2" />
                Necessary Cookies (Always Active)
              </h3>
              <p className="text-sm text-green-800">
                Essential for website functionality, security, and basic features. Cannot be disabled.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                <Eye className="w-4 h-4 inline mr-2" />
                Analytics Cookies (Optional)
              </h3>
              <p className="text-sm text-blue-800">
                Help us understand how visitors use our website to improve user experience.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                <Cookie className="w-4 h-4 inline mr-2" />
                Marketing Cookies (Optional)
              </h3>
              <p className="text-sm text-purple-800">
                Used to track visitors across websites for advertising and marketing purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Consent:</strong> For optional cookies and data collection (analytics, marketing, preferences)
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Legitimate Interest:</strong> For necessary website functionality and security
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Contract Performance:</strong> When you submit forms or use our services
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
          <p className="text-gray-700 mb-4">
            Under GDPR and other privacy laws, you have the following rights:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Right to Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Right to Data Portability</span>
              </div>
              <div className="flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Right to Erasure</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Right to Rectification</span>
              </div>
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Right to Withdraw Consent</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Right to Object</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              You can exercise these rights at any time through our Privacy Center or by contacting us directly.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction. All data is stored securely and access 
            is limited to authorized personnel only.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Session Data:</strong> Deleted when you close your browser
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Consent Records:</strong> Kept for 3 years for legal compliance
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Form Submissions:</strong> Retained for the duration necessary to provide requested services
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this privacy policy or want to exercise your rights, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Email:</strong> privacy@ezmove.com<br />
              <strong>Address:</strong> [Your Company Address]<br />
              <strong>Data Protection Officer:</strong> dpo@ezmove.com
            </p>
          </div>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any material changes 
            by posting the new policy on this page and updating the "Last updated" date. We encourage you to 
            review this policy periodically.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
