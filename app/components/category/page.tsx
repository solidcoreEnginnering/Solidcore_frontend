"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Simple ProductsSection component using <img>
const ProductsSection = ({ product }: { product: any }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-indigo-600 font-bold mb-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 text-sm">{product.category}</p>
    </div>
  );
};

export default function Productlist() {
  // Categories
  const sampleCategories = ["All", "Electronics", "Kitchen", "Fitness", "Books", "Home Decor"];
  const [categories] = useState<string[]>(sampleCategories);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Placeholder image for all products
  const placeholderImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFkRea-GyeWjSlr88zwu0ngFchRigG276wg&s";

  // Sample products
  const sampleProducts = [
    { id: 1, name: "Stainless Steel Knife Set", category: "Kitchen", price: 59.99, image: placeholderImage },
    { id: 2, name: "Yoga Mat with Carry Strap", category: "Fitness", price: 29.99, image: placeholderImage },
    { id: 3, name: "Bluetooth Over-Ear Headphones", category: "Electronics", price: 99.99, image: placeholderImage },
    { id: 4, name: "Non-Stick Cookware Set", category: "Kitchen", price: 149.99, image: placeholderImage },
    { id: 5, name: "Modern Table Lamp", category: "Home Decor", price: 45.99, image: placeholderImage },
    { id: 6, name: "Best-Selling Programming Book", category: "Books", price: 39.99, image: placeholderImage },
    { id: 7, name: "Adjustable Dumbbells", category: "Fitness", price: 199.99, image: placeholderImage },
    { id: 8, name: "Smartphone Wireless Charger", category: "Electronics", price: 25.99, image: placeholderImage },
    { id: 9, name: "Ceramic Vase Set", category: "Home Decor", price: 59.99, image: placeholderImage },
  ];

  // Filter products by category
  const products =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory);

  return (
    <main className="p-8">
      <section className="relative z-10 w-full bg-white text-gray-800 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-bold text-indigo-600 mb-4"
          >
            Featured Products
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our best-selling premium products made with stainless steel, carbon steel, and high-quality materials.
          </p>
        </div>

        {/* Category Filter */}
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
