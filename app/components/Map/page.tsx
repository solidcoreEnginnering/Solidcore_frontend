"use client";

import React from "react";

/**
 * A temporary placeholder component to replace the complex MapSection.
 * This ensures the Next.js build can complete without the "window is not defined" error.
 */
export default function MapSection() {
  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Map Section Placeholder</h2>
        <p className="mt-2 text-lg text-gray-600">
          Hello World! The map component has been temporarily removed to fix the build error.
        </p>
        <div className="w-full h-96 mt-4 bg-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 font-semibold">Map Content Will Go Here</p>
        </div>
      </div>
    </section>
  );
}