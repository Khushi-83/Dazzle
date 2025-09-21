"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import api from "@/lib/api";
import Image from "next/image";

interface ContentBlock {
  type: string;
  attrs?: {
    level?: number;
    src?: string;
    alt?: string;
  };
  content?: Array<{ text?: string }>;
}

interface BlogContent {
  type: string;
  content: ContentBlock[];
}

type Blog = {
  id: string;
  title: string;
  featuredImage: string;
  content: BlogContent;
  author: string;
  createdAt: string;
  updatedAt: string;
};

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/blogs/${params.id}`);
        setBlog(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 404) {
            setError('Blog not found');
          } else {
            setError(err.response?.data?.message || err.message || 'Failed to fetch blog');
          }
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to render content from JSON
  const renderContent = (content: BlogContent) => {
    if (!content || !content.content) return null;
    
    return content.content.map((block: ContentBlock, index: number) => {
      switch (block.type) {
        case 'heading':
          const level = block.attrs?.level || 2;
          const text = block.content?.[0]?.text || '';
          if (level === 1) {
            return <h1 key={index} className="text-3xl font-bold mb-4 text-gray-800">{text}</h1>;
          } else if (level === 2) {
            return <h2 key={index} className="text-2xl font-bold mb-4 text-gray-800">{text}</h2>;
          } else if (level === 3) {
            return <h3 key={index} className="text-xl font-bold mb-4 text-gray-800">{text}</h3>;
          } else {
            return <h4 key={index} className="text-lg font-bold mb-4 text-gray-800">{text}</h4>;
          }
        case 'paragraph':
          return (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {block.content?.[0]?.text || ''}
            </p>
          );
        case 'image':
          return (
            <div key={index} className="my-6">
              <Image
                src={block.attrs?.src || '/modern-minimalist-living-room-with-dark-wood-and-n.jpg'}
                alt={block.attrs?.alt || 'Blog image'}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/modern-minimalist-living-room-with-dark-wood-and-n.jpg";
                }}
              />
            </div>
          );
        default:
          return null;
      }
    });
  };

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center">
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center">
          <p className="text-red-600">Error: {error || 'Blog not found'}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Back to blogs link */}
      <div className="mb-6">
        <Link 
          href="/blogs" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/modern-minimalist-living-room-with-dark-wood-and-n.jpg";
          }}
        />
      </div>

      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span aria-hidden>👤</span>
            <span>By {blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden>📅</span>
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none">
        {renderContent(blog.content)}
      </article>
    </main>
  );
}