"use client";

import React from "react";

/**
 * Global Presence Section
 * Displays Solidcore Engineering's shipping capabilities across major regions
 */
export default function MapSection() {
  const regions = [
    {
      name: "United Arab Emirates",
      icon: "🇦🇪",
      highlight: "Dubai HQ"
    },
    {
      name: "United States",
      icon: "🇺🇸",
      highlight: "Full Coverage"
    },
    {
      name: "Canada",
      icon: "🇨🇦",
      highlight: "Nationwide"
    },
    {
      name: "Australia",
      icon: "🇦🇺",
      highlight: "Major Cities"
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Global Shipping Network
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Solidcore Engineering delivers precision-manufactured components worldwide.
            Trusted by clients across four continents.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200"
            >
              <div className="text-5xl mb-4 text-center">{region.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
                {region.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium text-center">
                {region.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                Countries Served
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                Shipping Support
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">
                Quality Assurance
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-slate-700 text-lg">
            Need international shipping? <span className="font-semibold text-blue-600">We've got you covered.</span>
          </p>
        </div>
      </div>
    </section>
  );
}