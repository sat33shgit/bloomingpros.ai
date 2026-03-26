import { useState } from "react";
import { Link } from "wouter";
import { Navigation, Footer } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Calendar, User, Tag, ArrowRight } from "lucide-react";

/**
 * Blog Page
 * Modern Minimalism Design - Indigo & Teal Accents
 * Features: Article listing, filtering, search, categories
 */
export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "How AI Can Revolutionize Campus Placements and Internships",
      excerpt:
        "Discover how AI is transforming campus placements and internships, offering personalized job matching, automated screening, and insights for better outcomes.",
      author: "BloomingPros Team",
      date: "Dec 30, 2024",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      slug: "how-ai-can-revolutionize-campus-placements",
    },
    {
      id: 2,
      title: "Why Hiring Talented Freshers from Top Colleges Might Be Your Next Best Move",
      excerpt:
        "Discover why hiring talented freshers from top colleges can inject new ideas, innovation, and long-term value into your organization.",
      author: "BloomingPros Team",
      date: "Dec 24, 2024",
      category: "Recruitment",
      readTime: "6 min read",
      image: "bg-gradient-to-br from-teal-400 to-teal-600",
      slug: "hiring-talented-freshers",
    },
    {
      id: 3,
      title: "How College-Company Collaboration Shapes the Future",
      excerpt:
        "Explore how strategic partnerships between educational institutions and companies are creating better outcomes for students and organizations.",
      author: "BloomingPros Team",
      date: "Dec 22, 2024",
      category: "Industry Insights",
      readTime: "7 min read",
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      slug: "college-company-collaboration",
    },
    {
      id: 4,
      title: "The Future of Work: Skills That Matter Most",
      excerpt:
        "Learn about the most in-demand skills for tomorrow's workforce and how to prepare students and professionals for the evolving job market.",
      author: "BloomingPros Team",
      date: "Dec 18, 2024",
      category: "Skills & Development",
      readTime: "9 min read",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      slug: "future-of-work-skills",
    },
    {
      id: 5,
      title: "Building Authentic Portfolios: Beyond CGPA and Credentials",
      excerpt:
        "Understand why authentic portfolios matter more than ever and how students can build real evidence of their skills and capabilities.",
      author: "BloomingPros Team",
      date: "Dec 15, 2024",
      category: "Student Success",
      readTime: "6 min read",
      image: "bg-gradient-to-br from-pink-400 to-pink-600",
      slug: "authentic-portfolios",
    },
    {
      id: 6,
      title: "Bridging the Skills Gap: A Practical Approach",
      excerpt:
        "Explore practical strategies for closing the gap between academic learning and industry requirements in today's competitive market.",
      author: "BloomingPros Team",
      date: "Dec 10, 2024",
      category: "Industry Insights",
      readTime: "7 min read",
      image: "bg-gradient-to-br from-orange-400 to-orange-600",
      slug: "bridging-skills-gap",
    },
  ];

  const categories = [
    "all",
    "AI & Technology",
    "Recruitment",
    "Industry Insights",
    "Skills & Development",
    "Student Success",
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6"></div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Blog & Insights
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore articles, insights, and perspectives on how AI, education,
                and industry are shaping the future of talent and employability.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-y border-border">
          <div className="container">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-lg border border-border bg-white focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <span className="text-sm font-medium text-foreground">Filter by:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-[#1F2937] to-[#14B8A6] text-white"
                          : "bg-secondary text-foreground hover:bg-border"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <p className="text-sm text-muted-foreground">
                Showing {filteredArticles.length} article
                {filteredArticles.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.slug}`} className="group h-full">
                    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        {/* Article Image */}
                        <div
                          className={`h-48 ${article.image} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </div>

                        {/* Article Content */}
                        <div className="p-6 flex flex-col flex-1">
                          {/* Category Tag */}
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-accent text-xs font-semibold rounded-full">
                              {article.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                            {article.excerpt}
                          </p>

                          {/* Metadata */}
                          <div className="space-y-3 border-t border-border pt-4">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {article.readTime}
                              </span>
                              <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No articles found matching your search.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  variant="outline"
                  className="border-border hover:bg-secondary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-[#1F2937] to-[#14B8A6]">
          <div className="container max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-white/90 mb-8">
                Subscribe to our newsletter for the latest insights on employability,
                skills, and the future of work.
              </p>

              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 rounded-lg bg-white border-0 focus:ring-2 focus:ring-white"
                />
                <Button className="h-12 bg-white text-foreground hover:bg-gray-100 font-semibold rounded-lg">
                  Subscribe
                </Button>
              </form>

              <p className="text-xs text-white/70 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
