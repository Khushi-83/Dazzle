"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  // For now, we're simulating an empty cart
  const cartItems = [];
  
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--button-primary)] flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6 sm:h-8 sm:w-8" />
            Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16 rounded-xl shadow-sm bg-white border border-gray-100 p-6 sm:p-8">
            <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm sm:text-base">
              Looks like you haven&apos;t added anything to your cart yet. Browse our storefront to discover our premium collection.
            </p>
            <Button asChild size="lg" className="bg-[var(--button-primary)] hover:bg-[var(--button-secondery)] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md transition-colors duration-300 text-sm sm:text-base">
              <Link href="/storefront">
                Browse Storefront
              </Link>
            </Button>
          </div>
        ) : (
          // This section would be implemented when we have actual cart functionality
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            <p className="text-gray-600">Cart items would be displayed here when implemented.</p>
          </div>
        )}
      </div>
    </div>
  );
}