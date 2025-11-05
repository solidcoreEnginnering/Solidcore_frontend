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
  image?: string | null; 
  category?: Category | null;
};

export default function ProductsSection({ product }: { product?: Product | null }) {
 
  if (!product) return null;

  const imgSrc = product?.image ?? "/images/placeholder.png"; 
  const title = product?.name ?? "Unnamed product";
  const desc = product?.description ?? "";

  return (
    <>
      <div
        className="bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
      >
        <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            
          />
        </div>
        <div className="p-6 text-left">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{desc}</p>
        </div>
      </div>
    </>
  );
}
