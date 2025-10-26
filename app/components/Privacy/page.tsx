"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 
      bg-gradient-to-r from-blue-100 via-white to-blue-200 
      relative overflow-hidden mt-20"
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div
        className="relative w-full max-w-3xl bg-white/95 backdrop-blur-md 
        rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm">
            Please read our Privacy Policy carefully and click{" "}
            <strong>Agree</strong> to continue.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-gray-800 space-y-4 bg-white shadow-inner rounded-xl">
          <h2 className="font-semibold text-blue-700">
            Last Updated: October 24, 2025
          </h2>

          <p>
            At <strong>SolidCore Engineering</strong>, we respect your privacy and
            are committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website.
          </p>

          <h3 className="font-semibold text-blue-700">1. Information We Collect</h3>
          <p>
            We may collect basic personal information that you voluntarily provide
            through forms, such as your name, email address, phone number, and
            company details when you contact us or request information about our
            engineering products and services.
          </p>

          <h3 className="font-semibold text-blue-700">2. How We Use Your Information</h3>
          <p>
            The information collected is used solely for legitimate business purposes,
            including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Responding to your inquiries or service requests.</li>
            <li>Providing relevant information about our products or technical solutions.</li>
            <li>Improving our website and service offerings.</li>
            <li>Maintaining internal records or compliance requirements.</li>
          </ul>

          <h3 className="font-semibold text-blue-700">3. Data Security</h3>
          <p>
            We use reasonable administrative, technical, and physical safeguards to
            protect your personal data from unauthorized access, misuse, or loss.
            However, please note that no data transmission over the internet can be
            guaranteed as completely secure.
          </p>

          <h3 className="font-semibold text-blue-700">4. Cookies and Analytics</h3>
          <p>
            Our website may use cookies or analytics tools to enhance user experience
            and analyze site traffic. These tools do not identify individual visitors
            and are used only to improve site functionality.
          </p>

          <h3 className="font-semibold text-blue-700">5. Sharing of Information</h3>
          <p>
            We do not sell, rent, or trade your personal information. Data may be
            shared only with trusted partners or service providers who assist in
            operating our website or providing requested services — and only under
            strict confidentiality.
          </p>

          <h3 className="font-semibold text-blue-700">6. External Links</h3>
          <p>
            Our website may contain links to external websites for reference. We are
            not responsible for the content or privacy practices of third-party sites.
          </p>

          <h3 className="font-semibold text-blue-700">7. Your Consent</h3>
          <p>
            By using our website, you consent to the collection and use of your
            information as described in this Privacy Policy.
          </p>

          <h3 className="font-semibold text-blue-700">8. Updates to This Policy</h3>
          <p>
            We may update or revise this Privacy Policy from time to time. The latest
            version will always be available on this page with an updated effective
            date.
          </p>

          <h3 className="font-semibold text-blue-700">9. Contact Us</h3>
          <p>
            For any questions or requests related to your personal data or this policy,
            please contact us at:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              📧 <strong>info@solidcoreengineering.com</strong>
            </li>
            <li>
              📞 <strong>+91-XXXXXXXXXX</strong>
            </li>
          </ul>
        </div>

        {/* Footer with Agree button */}
        <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex items-center justify-end">
          {agreed ? (
            <Link
              href="/"
              className="px-5 py-2 rounded-xl font-medium text-white bg-blue-700 hover:bg-blue-800 shadow-lg transition transform hover:scale-105"
            >
              Agree
            </Link>
          ) : (
            <button
              disabled
              className="px-5 py-2 rounded-xl font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              Agree
            </button>
          )}

          <label className="ml-4 flex items-center gap-2 text-sm text-gray-700 font-medium">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            I have read
          </label>
        </div>
      </div>
    </div>
  );
}
