export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-8" style={{backgroundColor: '#FFFFFF'}}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#000000'}}>Our Gallery</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#000000'}}>
            ✨ Welcome to our stunning design gallery! Browse our latest projects and transformations.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder gallery items */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{backgroundColor: '#D1C7BD'}}>
              <div className="aspect-square flex items-center justify-center" style={{backgroundColor: '#D1C7BD'}}>
                <div className="text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <span className="text-lg font-medium" style={{color: '#000000'}}>Project {item}</span>
                </div>
              </div>
              <div className="p-6" style={{backgroundColor: '#D1C7BD'}}>
                <h3 className="text-xl font-bold mb-3" style={{color: '#000000'}}>
                  Amazing Design Project {item}
                </h3>
                <p className="text-sm leading-relaxed" style={{color: '#000000'}}>
                  Stunning transformation showcasing our expertise in modern design and exceptional craftsmanship. Each project tells a unique story.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-sm" style={{color: '#000000'}}>Completed 2024</span>
                  <button className="transition-colors" style={{color: '#000000'}}>
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-xl" style={{backgroundColor: '#D1C7BD'}}>
          <h2 className="text-2xl font-bold mb-4" style={{color: '#000000'}}>Ready to Start Your Project?</h2>
          <p className="mb-6" style={{color: '#000000'}}>Let us help you create something beautiful</p>
          <button className="text-white px-8 py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#3A2D28'}}>
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}
