"use client";

import Image from "next/image";
import React from "react";

type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  image?: string; // make image optional
  category: Category;
};

export default function ProductsSection({ product }: { product?: Product }) {
  if (!product) return null; // handle undefined product

  return (
    <div
      key={product.id}
      className="bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
        <Image
          src={product.image ?? "/placeholder.png"} // fallback image
          alt={product.name ?? "Product"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
          {product.name ?? "Unknown Product"}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description ?? "No description available."}
        </p>
      </div>
    </div>
  );
}
