"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Solid Core Engineering</h3>
          <p className="text-gray-400 text-sm">
            Providing high-quality engineering products and solutions with innovation, precision, and reliability.
          </p>
        </div>

        {/* Products Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/components/Privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/components/Terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">123 Industrial Street, City, Country</p>
          <p className="text-gray-400 text-sm mt-1">Email: info@mybrandengineering.com</p>
          <p className="text-gray-400 text-sm mt-1">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyBrand Engineering. All rights reserved.
      </div>
    </footer>
  );
}
