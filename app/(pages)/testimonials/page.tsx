import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/modern-bakery-interior-with-warm-lighting-and-disp.jpg",
    rating: 5,
    text: "...better than anything I imagined...",
    fullText:
      "When I first walked into my new bakery, I was speechless. The design team turned my vague dreams into a reality that's better than anything I had imagined. The way they've captured the essence of the natural light streaming through the thoughtfully placed windows, every detail is perfection. I've had customers tell me they come back not just for the bread but for the warm, inviting atmosphere the space creates.",
    author: "Oliver Dempsey",
    location: "Artisan Baker from Portland",
    size: "large",
  },
  {
    id: 2,
    image: "/modern-minimalist-living-room-with-dark-wood-and-n.jpg",
    rating: 5,
    text: "...they gave me a sanctuary...",
    fullText:
      "My studio is now my favorite place on Earth, thanks to these brilliant designers. They took my scattered ideas and turned them into a cohesive space where creativity flows effortlessly. The use of natural light is insane—I barely even need my artificial lights for shoots anymore.",
    author: "Silas Hoffman",
    location: "Photographer in San Francisco",
    size: "medium",
  },
  {
    id: 3,
    image: "/modern-office-space-with-orange-accent-wall-and-la.jpg",
    rating: 5,
    text: "...It's vibrant, collaborative, and inspiring...",
    fullText:
      "The office space they created for my startup is nothing short of extraordinary. It's vibrant, collaborative, and inspiring—exactly the kind of environment where ideas come to life. Every detail, from the breakout areas to the ergonomic workstations, shows that they truly understand what modern teams need.",
    author: "Caleb Sutton",
    location: "Entrepreneur in Chicago",
    size: "medium",
  },
  {
    id: 4,
    image: "/modern-cafe-interior-with-exposed-brick-and-indust.jpg",
    rating: 5,
    text: "...they crafted a community hub...",
    fullText:
      "The team didn't just build a café for me; they crafted a community hub from the exposed brick walls that tell a story Brooklyn charm to the layout that encourages mingling, it's everything I envisioned and more. Customers often comment on how cozy yet spacious it feels, and I credit that entirely to the genius design work. If I had to sum it up, I'd say they didn't just create a space—they create an experience.",
    author: "Wyatt Kingsley",
    location: "Coffee Roaster from Brooklyn",
    size: "large",
  },
  {
    id: 5,
    image: "/luxury-hotel-bathroom-with-marble-and-gold-accents.jpg",
    rating: 5,
    text: "...the space feels like a slice of paradise...",
    fullText:
      "I needed a hotel design that felt luxurious but still approachable, and they absolutely nailed it. Each room feels like a personal retreat with a cohesive overall theme of coastal elegance. Guests constantly rave about how the space feels like a slice of paradise, and bookings have skyrocketed since the redesign. This team didn't just create a hotel—they created an experience that guests will remember forever.",
    author: "Google Review",
    location: "",
    size: "medium",
  },
  {
    id: 6,
    image: "/modern-tech-office-with-glass-walls-and-contempora.jpg",
    rating: 5,
    text: "...My condo now feels like a tech haven...",
    fullText:
      "I wanted a home that matched my personality: sleek, modern, and functional. These folks delivered that and more! My condo now feels like a tech haven with an elegant edge. The built-in smart home features, clean lines, and clever use of space blew me away.",
    author: "Finn Gallagher",
    location: "Software Developer in Austin",
    size: "medium",
  },
  {
    id: 7,
    image: "/retail-store-interior-with-modern-fixtures-and-cle.jpg",
    rating: 5,
    text: "...my customers now stay longer and shop more...",
    fullText:
      "The retail space design completely transformed my business. The space is visually stunning, and it's designed to guide customers effortlessly through every section. The layout has increased foot traffic and sales, and I'm thrilled to say my customers now stay longer and shop more. It's a game-changer!",
    author: "Levi Morgan",
    location: "Retailer in Denver",
    size: "medium",
  },
  {
    id: 8,
    image: "/modern-restaurant-interior-with-warm-lighting-and-.jpg",
    rating: 5,
    text: "...they come for the vibe...",
    fullText:
      "I wanted my restaurant to feel like an extension of myself—modern, inviting, and a little edgy. The design team captured that perfectly. From the moody lighting to the seamless blend of industrial and cozy touches, the space has become a local favorite. Customers don't just come for the food; they come for the vibe.",
    author: "Theo Hartman",
    location: "Restaurateur in Dallas",
    size: "medium",
  },
  {
    id: 9,
    image: "/modern-fitness-studio-with-mirrors-and-natural-lig.jpg",
    rating: 5,
    text: "...they redefined how education can happen...",
    fullText:
      "Our school's renovation was handled with such care and thoughtfulness. The team created classrooms and communal spaces that are bright, functional, and inspiring for students and teachers alike. The kids especially love the outdoor learning area they designed. They didn't just redesign our school; they redefined how education can happen.",
    author: "Rowan Blake",
    location: "Educator in Seattle",
    size: "large",
  },
  {
    id: 10,
    image: "/boutique-hotel-lobby-with-elegant-furniture-and-wa.jpg",
    rating: 5,
    text: "...they come for the vibe...",
    fullText:
      "I wanted my restaurant to feel like an extension of myself—modern, inviting, and a little edgy. The design team captured that perfectly. From the moody lighting to the seamless blend of industrial and cozy touches, the space has become a local favorite. Customers don't just come for the food; they come for the vibe.",
    author: "Elias Monroe",
    location: "Boutique Hotel Owner in Miami",
    size: "medium",
  },
  {
    id: 11,
    image: "/modern-residential-living-space-with-large-windows.jpg",
    rating: 5,
    text: "...they come for the vibe...",
    fullText:
      "I wanted my restaurant to feel like an extension of myself—modern, inviting, and a little edgy. The design team captured that perfectly. From the moody lighting to the seamless blend of industrial and cozy touches, the space has become a local favorite. Customers don't just come for the food; they come for the vibe.",
    author: "Hoffman F.",
    location: "Owner, Miami Beach",
    size: "medium",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const sizeClasses = {
    small: "row-span-1",
    medium: "row-span-2",
    large: "row-span-3",
  }

  return (
    <div
      className={`bg-[#F5F1ED] rounded-lg overflow-hidden shadow-sm border border-gray-200 ${sizeClasses[testimonial.size as keyof typeof sizeClasses]}`}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={testimonial.image || "/placeholder.svg"}
          alt="Interior design project"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <StarRating rating={testimonial.rating} />
        <blockquote className="text-gray-800 text-lg leading-relaxed mb-4 font-serif">{testimonial.text}</blockquote>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{testimonial.fullText}</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div>
            <div className="font-medium text-gray-800 text-sm">{testimonial.author}</div>
            <div className="text-gray-600 text-xs">{testimonial.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  const organizeIntoColumns = (items: typeof testimonials, itemsPerColumn: number) => {
    const columns = []
    for (let i = 0; i < items.length; i += itemsPerColumn) {
      columns.push(items.slice(i, i + itemsPerColumn))
    }
    return columns
  }

  const columns = organizeIntoColumns(testimonials.slice(0, 9), 3) // Use first 9 testimonials for 3 columns of 3

  return (
    <div className="min-h-screen bg-white pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-6 text-balance">Testimonials</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Our greatest achievements are not just our projects they are the relationships and trust we have built along the
            way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6">
              {column.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
