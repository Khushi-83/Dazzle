import Image from "next/image";

interface Article {
  id: number;
  date: string;
  category: string;
  author: string;
  title: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    date: "DEC 5, 2024",
    category: "TIPS",
    author: "RYAN MILFORD",
    title: "How to turn 'cozy' into 'wow': 5 Pro Tips for Making the Most of Small Spaces",
    image: "/images/gallery4.png",
  },
  {
    id: 2,
    date: "DEC 5, 2024",
    category: "DESIGN & INSPIRATION",
    author: "JAMES MILLER",
    title: "Turning Spaces into Stories: How We Create Meaningful Architecture",
    image: "/images/gallery4.png",
  },
  {
    id: 3,
    date: "SEP 24, 2024",
    category: "INDUSTRY INSIGHTS",
    author: "JAMES MILLER",
    title: "Retail Revolution: How Architecture Is Transforming Shopping Experiences",
    image: "/images/gallery4.png",
  },
  {
    id: 4,
    date: "DEC 5, 2024",
    category: "TIPS",
    author: "RYAN MILFORD",
    title: "Tiny but Mighty: 7 Genius Design Hacks for Compact Living",
    image: "/images/gallery4.png",
  },
  {
    id: 5,
    date: "DEC 5, 2024",
    category: "TIPS",
    author: "RYAN MILFORD",
    title: "From Chaos to Cozy: Tips to Turn Your Cramped Space into a Stylish Sanctuary",
    image: "/images/gallery4.png",
  },
  {
    id: 6,
    date: "SEP 24, 2024",
    category: "INDUSTRY INSIGHTS",
    author: "JAMES MILLER",
    title: "Skyline Trends: How Skyscrapers Are Redefining Urban Workspaces",
    image: "/images/gallery4.png",
  },
  {
    id: 7,
    date: "DEC 5, 2024",
    category: "INDUSTRY INSIGHTS",
    author: "JAMES MILLER",
    title: "Retail Spaces Reimagined: The Art of Creating Memorable Shopping Experiences",
    image: "/images/gallery4.png",
  },
  {
    id: 8,
    date: "JUL 5, 2024",
    category: "INDUSTRY INSIGHTS",
    author: "JAMES MILLER",
    title: "The Future of Office Design: Trends Shaping Workspaces of Tomorrow",
    image: "/images/gallery4.png",
  },
  {
    id: 9,
    date: "DEC 5, 2024",
    category: "DESIGN & INSPIRATION",
    author: "JAMES MILLER",
    title: "Beyond the Blueprint: Creative Ideas That Spark Architectural Magic",
    image: "/images/gallery4.png",
  },
  {
    id: 10,
    date: "DEC 5, 2024",
    category: "TIPS",
    author: "RYAN MILFORD",
    title: "Oops-Proof Your Dream Home: 6 Mistakes to Dodge in Architecture Design",
    image: "/images/gallery4.png",
  },
  {
    id: 11,
    date: "DEC 5, 2024",
    category: "DESIGN & INSPIRATION",
    author: "JAMES MILLER",
    title: "The Art of Balance: Mixing Modern and Timeless in Architecture",
    image: "/images/gallery4.png",
  },
  {
    id: 12,
    date: "DEC 16, 2024",
    category: "DESIGN & INSPIRATION",
    author: "JAMES MILLER",
    title: "The Art of Turning Dreams into Blueprints: How Inspiration Shapes Modern Architecture",
    image: "/images/gallery4.png",
  },
];

function GalleryCard({ article }: { article: Article }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={article.image}
        alt={article.title}
        width={600}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="text-xs text-gray-600 flex flex-wrap items-center gap-2 mb-2">
          <span>{article.date}</span>
          <span className="uppercase bg-gray-200 px-2 py-0.5 rounded text-gray-800">
            {article.category}
          </span>
          <span className="text-gray-700">{article.author}</span>
        </div>
        <h3 className="text-lg text-gray-900 leading-snug">
          {article.title}
        </h3>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl text-center mb-12">Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <GalleryCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}