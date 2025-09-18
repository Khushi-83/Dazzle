"use client";

const ServicesInfoSection = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Home Staging</h3>
            <p className="text-gray-600">
              Professional staging to help your property sell faster and for better prices.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Interior Design</h3>
            <p className="text-gray-600">
              Complete interior design services to transform your space.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Furniture Sourcing</h3>
            <p className="text-gray-600">
              Curated furniture selection to match your style and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfoSection;