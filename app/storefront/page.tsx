import StorefrontGrid from "../components/ui/StorefrontGrid"

export default function StorefrontPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-5xl font-serif text-center">Storefront</h1>
      <p className="text-center text-gray-600 mt-4">
        Shop our curated collection of staging & design pieces now available
        for you to take home
      </p>

      {/* Products */}
      <StorefrontGrid />
    </main>
  );
}
