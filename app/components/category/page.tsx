

"use client";
import { useEffect, useState } from "react";
import ProductsSection from '@/app/components/Products/page';
import { motion } from "framer-motion";

export default function Productlist() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🟢 Fetch categories from Django
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((res) => res.json())
      .then((data) => {
        // Add "All" at the beginning
        const categoryNames = ["All", ...data.map((cat: any) => cat.name)];
        setCategories(categoryNames);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // 🟣 Fetch products based on selected category
  useEffect(() => {
    let url = "http://127.0.0.1:8000/api/products/";
    if (selectedCategory !== "All") {
      url += `?category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [selectedCategory]);

  return (
    <main className="p-8">
     

     
     
      {/* Product List */}
      {/* <div className="flex flex-wrap gap-6">
        {products.length > 0 ? (
          products.map((product: any) => (
            <Productsview key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div> */}

 <section className="relative z-10 w-full bg-white text-gray-800 py-20 px-6 md:px-12">
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2 
        initial={{ y: -100, opacity: 0 }} // start above view, invisible
        animate={{ y: 0, opacity: 1 }}    // slide down into view
        transition={{ duration: 1, ease: "easeOut" }} // smooth animation
        className="text-4xl font-bold text-indigo-600 mb-4">Featured Products</motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover our best-selling Premium-quality products made with stainless steel and carbon steel options.
        </p>
      </div>

<div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
    <label
      htmlFor="category"
      className="text-lg font-semibold text-gray-800 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2H3V4zm0 6h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"
        />
      </svg>
      Filter by Category:
    </label>

    <div className="relative w-60">
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="appearance-none w-full bg-white border border-gray-300 text-gray-700 text-base rounded-lg px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition-all duration-200"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Dropdown arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>




       {/* Dropdown for categories */}
       {/* <div className="mb-6">
        <label htmlFor="category" className="mr-3 font-semibold">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div> */}


      {/* Product List */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      
        {products.length > 0 ? (
          products.map((product: any) => (
            <ProductsSection key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
        
      
    </section>


    </main>
  );
}

