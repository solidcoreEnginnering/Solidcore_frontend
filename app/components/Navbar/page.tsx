"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon, ChevronDown } from "lucide-react";
import Image from "next/image";
import img from "@/public/images/products/logowithText.png";

type Child = { name: string; href: string };
type NavItem = { name: string; href?: string; children?: Child[] };

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/components/ProductPage" },
  { name: "Contact", href: "/components/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [mobileAccordionIndex, setMobileAccordionIndex] = useState<number | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories from API (client-only)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
        const res = await fetch(`${apiUrl}/api/categories/`);
        const data = await res.json();
        const categoryNames = ["All", ...data.map((cat: any) => cat.name)];
        setCategories(categoryNames);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories(["All"]); // fallback
      }
    };

    fetchCategories();
  }, []);

  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const closeTimeout = useRef<Record<number, NodeJS.Timeout | null>>({});

  const openAt = (idx: number) => {
    if (closeTimeout.current[idx]) {
      clearTimeout(closeTimeout.current[idx]!);
      closeTimeout.current[idx] = null;
    }
    setOpenDropdownIndex(idx);
  };

  const scheduleCloseAt = (idx: number, delay = 150) => {
    if (closeTimeout.current[idx]) {
      clearTimeout(closeTimeout.current[idx]!);
      closeTimeout.current[idx] = null;
    }
    closeTimeout.current[idx] = setTimeout(() => {
      setOpenDropdownIndex((cur) => (cur === idx ? null : cur));
      closeTimeout.current[idx] = null;
    }, delay);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdownIndex(null);
        setMobileOpen(false);
        setMobileAccordionIndex(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-indigo-600">
          <Image src={img.src} alt="Site logo" width={200} height={200} />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item, idx) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => openAt(idx)}
                onMouseLeave={() => scheduleCloseAt(idx, 150)}
              >
                <button
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition"
                  aria-haspopup="true"
                  aria-expanded={openDropdownIndex === idx}
                  onClick={() => setOpenDropdownIndex((cur) => (cur === idx ? null : idx))}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openDropdownIndex === idx ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  role="menu"
                  aria-label={`${item.name} submenu`}
                  onMouseEnter={() => openAt(idx)}
                  onMouseLeave={() => scheduleCloseAt(idx, 150)}
                  className={`absolute right-0 mt-3 w-56 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 origin-top-right transition-all duration-150 z-50
                    ${openDropdownIndex === idx ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
                >
                  <div className="py-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/category/${encodeURIComponent(cat)}`}
                        onClick={() => setOpenDropdownIndex(null)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href || "#"}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden text-gray-700 hover:text-indigo-600 transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-md ${mobileOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-4 pb-6">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item, idx) =>
              item.children ? (
                <li key={item.name}>
                  <button
                    onClick={() => setMobileAccordionIndex((cur) => (cur === idx ? null : idx))}
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-700 hover:text-indigo-600 font-medium rounded-md transition"
                    aria-expanded={mobileAccordionIndex === idx}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileAccordionIndex === idx ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  <div
                    className={`mt-2 ml-3 overflow-hidden transition-[max-height] duration-200 ${
                      mobileAccordionIndex === idx ? "max-h-96" : "max-h-0"
                    }`}
                    aria-hidden={mobileAccordionIndex !== idx}
                  >
                    <ul className="space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileAccordionIndex(null);
                            }}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    href={item.href || "#"}
                    className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
