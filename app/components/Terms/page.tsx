"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TermsConditionsPage() {
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
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm">
            Please read these Terms & Conditions carefully and click{" "}
            <strong>Agree</strong> to continue.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-gray-800 space-y-4 bg-white shadow-inner rounded-xl">
          <h2 className="font-semibold text-blue-700">
            Last Updated: October 24, 2025
          </h2>

          <p>
            Welcome to <strong>SolidCore Engineering</strong>. By accessing or
            using our website, you agree to comply with and be bound by the
            following Terms and Conditions. Please review them carefully before
            using our services or information.
          </p>

          <h3 className="font-semibold text-blue-700">1. Introduction</h3>
          <p>
            SolidCore Engineering provides technical information, product
            details, and company updates related to engineering solutions and
            industrial systems. The content on this website is for informational
            purposes only and is subject to change without notice.
          </p>

          <h3 className="font-semibold text-blue-700">
            2. Use of the Website
          </h3>
          <p>
            You agree to use this website for lawful purposes only. Any misuse,
            unauthorized access, or activity that may disrupt the website’s
            functionality is strictly prohibited.
          </p>

          <h3 className="font-semibold text-blue-700">
            3. Intellectual Property
          </h3>
          <p>
            All content, including text, graphics, logos, images, and documents,
            is the intellectual property of <strong>SolidCore Engineering</strong> unless otherwise stated. Reproduction or redistribution without
            written consent is prohibited.
          </p>

          <h3 className="font-semibold text-blue-700">
            4. Technical Information Disclaimer
          </h3>
          <p>
            While we strive for accuracy in all product data and technical
            content, <strong>SolidCore Engineering</strong> does not guarantee
            that all information is free from error or suitable for every
            specific use case. Users should verify details before making
            engineering or procurement decisions.
          </p>

          <h3 className="font-semibold text-blue-700">5. Third-Party Links</h3>
          <p>
            Our website may include links to third-party resources for
            convenience. These links do not imply endorsement, and we are not
            responsible for the content or policies of external sites.
          </p>

          <h3 className="font-semibold text-blue-700">
            6. Limitation of Liability
          </h3>
          <p>
            <strong>SolidCore Engineering</strong> shall not be liable for any
            direct, indirect, or consequential damages arising from the use or
            inability to use this website, its content, or related materials.
          </p>

          <h3 className="font-semibold text-blue-700">7. Changes to Terms</h3>
          <p>
            We may update these Terms and Conditions from time to time without
            prior notice. Continued use of the site indicates acceptance of the
            revised terms.
          </p>

          <h3 className="font-semibold text-blue-700">8. Contact Us</h3>
          <p>
            For any questions or concerns regarding these Terms and Conditions,
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
