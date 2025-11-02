"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: Category;
};

interface ProductsSectionProps {
  product?: Product; // optional to prevent undefined errors
}

export default function ProductsSection({ product }: ProductsSectionProps) {
  if (!product) {
    return <div>No product data available</div>; // fallback UI
  }

  return (
    <div
      key={product.id}
      className="bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 text-left">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
    </div>
  );
}
