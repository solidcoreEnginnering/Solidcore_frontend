"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { svg } from "framer-motion/client";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-cover bg-center" />

      {/* Content */}
      <motion.section 
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-6">
        <motion.h1 
        initial={{ y: -100, opacity: 0 }} // start above view, invisible
        animate={{ y: 0, opacity: 1 }}    // slide down into view
        transition={{ duration: 1, ease: "easeOut" }} // smooth animationng
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Welcome to <br/><span className="text-yellow-300"> SolidCore Engineering</span>
        </motion.h1>

        <motion.p 
        initial={{ opacity: 0 }}   // starting state
        animate={{ opacity: 1 }}   // end state
        transition={{ duration: 1 }} // animation timing
        className="max-w-xl mx-auto text-lg md:text-xl mb-10 opacity-90">
         High-quality engineering products built for performance, precision, and reliability. Explore our featured solutions designed for excellence.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">

          <motion.div
      initial={{ x: -200, opacity: 0 }} // start 200px to the left, invisible
      animate={{ x: 0, opacity: 1 }}    // slide to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
          <Link
            href="/components/ProductPage"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 hover:bg-indigo-50 transition-transform duration-200"
          >
            Explore Products
          </Link>
 </motion.div>

 <motion.div
      initial={{ x: 300, opacity: 0 }}  // start 300px to the right, invisible
      animate={{ x: 0, opacity: 1 }}    // slide to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
          <Link
            href="/components/contact"
            className="bg-transparent border border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-200"
          >
            Contact Us
          </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 92.83C906.67 72 823.78 31.17 743.84 14.6 661.6-2.63 580.09 4.27 502.48 27.81 422.54 52.27 346.79 92.66 266.32 108.91 179.38 126.69 92.02 114.79 0 97.39V120h1200V95.8C1111.27 114.93 1044.65 113.65 985.66 92.83z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </main>
  );
}
