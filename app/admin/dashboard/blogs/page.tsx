'use client';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, Edit, Eye, Trash2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  authorInitials: string;
  location: string;
  year: string;
  excerpt: string;
  publishedDate: string;
  status: 'published' | 'draft';
  image?: string;
}

const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Transform Your Downtown Condo: Modern Staging Success Story",
    category: "Commercial - Office",
    author: "Emily Rodriguez",
    authorInitials: "ER",
    location: "Downtown Toronto",
    year: "2024",
    excerpt: "See how we transformed this 2-bedroom downtown condo into a buyer's dream with strategic staging and modern design elements.",
    publishedDate: "Sep 15, 2024",
    status: "published"
  },
  {
    id: "2",
    title: "5 Essential Tips for Staging Small Spaces",
    category: "Residential - Tips",
    author: "Sarah Kim",
    authorInitials: "SK",
    location: "Various",
    year: "2024",
    excerpt: "Learn the secrets to making small spaces feel larger and more inviting with these proven staging techniques.",
    publishedDate: "Sep 10, 2024",
    status: "published"
  },
  {
    id: "3",
    title: "Before & After: Victorian Home Restoration",
    category: "Residential - Renovation",
    author: "Marcus Johnson",
    authorInitials: "MJ",
    location: "Cabbagetown",
    year: "2024",
    excerpt: "A stunning transformation of a century-old Victorian home that sold 40% above asking price.",
    publishedDate: "Sep 5, 2024",
    status: "published"
  },
  {
    id: "4",
    title: "Luxury Penthouse Staging: A Case Study",
    category: "Commercial - Luxury",
    author: "Emily Rodriguez",
    authorInitials: "ER",
    location: "Yorkville",
    year: "2024",
    excerpt: "How we staged a $2M penthouse to appeal to high-end buyers in Toronto's luxury market.",
    publishedDate: "Aug 28, 2024",
    status: "draft"
  }
];

// Fixed: Component name must start with uppercase letter
const BlogsPage = () => {
  const [selectedTab, setSelectedTab] = useState("published");
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    return status === 'published' ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
    ) : (
      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">Draft</Badge>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Commercial - Office': 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100',
      'Commercial - Luxury': 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-100',
      'Residential - Tips': 'bg-green-100 text-green-800 border-green-200 hover:bg-green-100',
      'Residential - Renovation': 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-100'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-100';
  };

  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = selectedTab === 'all' || blog.status === selectedTab;
    return matchesSearch && matchesTab;
  });

  // Fixed: Removed onOpenForm reference that doesn't exist
  const handleAddNewBlog = () => {
    // Handle add new blog logic here
    console.log("Add new blog clicked");
  };

  return (
    <div className="space-y-6">
      {/* Blog Management Card */}
      <Card>
        <CardHeader>
          <CardTitle>Blog Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950">
              <h4 className="font-medium text-green-800 dark:text-green-200">Published Posts</h4>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">12</p>
              <p className="text-sm text-green-600 dark:text-green-400">+2 this month</p>
            </div>
            <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Draft Posts</h4>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">5</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">Ready to publish</p>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Total Views</h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2,847</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">+18% this month</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Blogs & Insights</h1>
          <p className="text-muted-foreground">Share your staging success stories and expertise</p>
        </div>
        <Button onClick={handleAddNewBlog}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Blog
        </Button>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="all">All Posts</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Left Panel - Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 flex-wrap">
                        <Badge variant="outline" className={getCategoryColor(blog.category)}>
                          {blog.category}
                        </Badge>
                        {getStatusBadge(blog.status)}
                      </div>

                      <h3 className="font-bold leading-tight text-base">{blog.title}</h3>

                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{blog.authorInitials}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{blog.author}</p>
                          <p className="text-muted-foreground">{blog.location} • {blog.year}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {blog.publishedDate}
                        </span>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Featured Image */}
                  <div className="relative bg-muted rounded-r-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-r-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Eye className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">Featured Image</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {blog.category.includes('Commercial') ? 'Office Space' : 'Home Interior'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-2">No blog posts found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm ? 'Try adjusting your search terms' : 'Create your first blog post to get started'}
                </p>
                <Button onClick={handleAddNewBlog}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Blog
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogsPage;