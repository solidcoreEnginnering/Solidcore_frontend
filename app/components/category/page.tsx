"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Professional ProductCard component
const ProductCard = ({ product }: { product: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            Inquire
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Productlist() {
  // Categories for metalwork products
  const industrialCategories = [
    "All Products",
    "Furniture",
    "Blades & Cutting",
    "Industrial Parts",
    "Piping & Fittings",
    "Engineering Components",
  ];

  const [categories] = useState<string[]>(industrialCategories);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Professional metalwork products with relevant images
  const metalworkProducts = [
    {
      id: 1,
      name: "Industrial Metal Chair Set",
      category: "Furniture",
      price: 299.99,
      description: "Powder-coated steel frame with ergonomic design for commercial use",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
    },
    {
      id: 2,
      name: "Custom Metal Table Base",
      category: "Furniture",
      price: 449.99,
      description: "Heavy-duty stainless steel base, suitable for restaurant and office use",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
    },
    {
      id: 3,
      name: "Precision Cutting Blades",
      category: "Blades & Cutting",
      price: 189.99,
      description: "High-carbon steel blades for industrial cutting applications",
      image: "https://images.unsplash.com/photo-1599696848652-f00a6ebfb45c?w=800&q=80",
    },
    {
      id: 4,
      name: "Marine Propeller - 4 Blade",
      category: "Industrial Parts",
      price: 1299.99,
      description: "Corrosion-resistant stainless steel marine propeller, custom sizing available",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    },
    {
      id: 5,
      name: "Industrial Pulley System",
      category: "Engineering Components",
      price: 349.99,
      description: "Cast iron construction with sealed bearings, 500kg load capacity",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      id: 6,
      name: "Stainless Steel Piping Kit",
      category: "Piping & Fittings",
      price: 599.99,
      description: "304 stainless steel pipes and fittings for industrial applications",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    },
    {
      id: 7,
      name: "Custom Metal Blade Set",
      category: "Blades & Cutting",
      price: 429.99,
      description: "CNC-machined blades with precision edges for specialized cutting tasks",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    },
    {
      id: 8,
      name: "Heavy-Duty Pipe Flanges",
      category: "Piping & Fittings",
      price: 279.99,
      description: "Carbon steel flanges with ANSI specifications, various sizes available",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    },
    {
      id: 9,
      name: "Precision Gear Assembly",
      category: "Engineering Components",
      price: 549.99,
      description: "CNC-machined steel gears for mechanical engineering applications",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80",
    },
    {
      id: 10,
      name: "Industrial Metal Shelving",
      category: "Furniture",
      price: 389.99,
      description: "Powder-coated steel shelving system, adjustable and modular design",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    },
    {
      id: 11,
      name: "Aircraft Propeller Blade",
      category: "Industrial Parts",
      price: 2499.99,
      description: "Aerospace-grade aluminum alloy, precision balanced for aviation use",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
    {
      id: 12,
      name: "Industrial Valve System",
      category: "Piping & Fittings",
      price: 459.99,
      description: "Brass and stainless steel valves for high-pressure industrial systems",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80",
    },
  ];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "All Products"
      ? metalworkProducts
      : metalworkProducts.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Precision Metal Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Industrial-grade metalwork solutions including custom furniture, blades, 
              propellers, piping systems, and engineering components
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-lg font-semibold text-gray-900">
              Filter by Category
            </span>
          </div>

          <div className="relative min-w-[280px]">
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full bg-white border-2 border-gray-300 text-gray-900 font-medium rounded px-4 py-3 focus:outline-none focus:border-gray-900 cursor-pointer transition-all duration-200"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-600">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
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

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          <p className="text-sm font-medium">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}