"use client";

import Link from "next/link";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SolidCore Engineering
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Delivering cutting-edge engineering solutions with unmatched precision, 
              innovation, and reliability. Your trusted partner in industrial excellence 
              since 2010.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Products & Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={16} className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  123 Industrial Boulevard<br />
                  Tech District, City 12345<br />
                  Country
                </span>
              </li>
              <li className="flex items-center group">
                <Mail size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@solidcoreengineering.com"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  info@solidcoreengineering.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone size={16} className="text-cyan-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </li>
            </ul>

            {/* Certifications Badge */}
            <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-1">Certified & Compliant</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">ISO 9001</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">CE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} SolidCore Engineering. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link
                href="/components/Privacy"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/components/Terms"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}