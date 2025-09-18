'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Modern Accent Chair",
    price: 899,
    image: "/api/placeholder/300/300",
    category: "Furniture",
    description: "Elegant modern chair perfect for any contemporary space"
  },
  {
    id: 2,
    name: "Marble Coffee Table",
    price: 1299,
    image: "/api/placeholder/300/300",
    category: "Furniture",
    description: "Luxurious marble coffee table with brass accents"
  },
  {
    id: 3,
    name: "Abstract Wall Art",
    price: 349,
    image: "/api/placeholder/300/300",
    category: "Decor",
    description: "Contemporary abstract painting for modern interiors"
  },
  {
    id: 4,
    name: "Designer Table Lamp",
    price: 459,
    image: "/api/placeholder/300/300",
    category: "Lighting",
    description: "Sophisticated brass table lamp with linen shade"
  },
  {
    id: 5,
    name: "Velvet Ottoman",
    price: 699,
    image: "/api/placeholder/300/300",
    category: "Furniture",
    description: "Plush velvet ottoman in rich emerald green"
  },
  {
    id: 6,
    name: "Ceramic Vase Set",
    price: 189,
    image: "/api/placeholder/300/300",
    category: "Decor",
    description: "Set of three handcrafted ceramic vases"
  }
];

export default function StorefrontGrid() {
  return (
    <div className="mt-12">
      {/* Filter Categories */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4 bg-gray-100 rounded-lg p-1">
          {['All', 'Furniture', 'Decor', 'Lighting'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white hover:shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              
              {/* Quick View Button */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-white text-gray-800 hover:bg-gray-100"
                >
                  Quick View
                </Button>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="font-semibold text-gray-900">${product.price}</p>
              </div>
              
              {product.description && (
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              )}
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-3 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="px-8">
          Load More Products
        </Button>
      </div>
    </div>
  );
}