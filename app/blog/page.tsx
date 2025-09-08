'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorTitle: string;
  date: string;
  featuredImage: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'technology', name: 'Technology' },
  { id: 'sustainability', name: 'Sustainability' },
  { id: 'industry', name: 'Industry News' },
  { id: 'innovation', name: 'Innovation' },
  { id: 'company', name: 'Company Updates' }
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, selectedCategory]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();

      if (data.success) {
        setPosts(data.data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = [...posts];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post =>
        post.tags.includes(selectedCategory)
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-400 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Stay informed about the latest developments in electric mobility technology and industry trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Subscribe to Newsletter
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                About Our Company
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container-custom">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {posts.length} articles
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          {/* Featured Post */}
          {currentPage === 1 && filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={filteredPosts[0].featuredImage || 'https://via.placeholder.com/800x600?text=Featured+Post'}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    {filteredPosts[0].featured && (
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(filteredPosts[0].date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {filteredPosts[0].author} • {filteredPosts[0].authorTitle}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${filteredPosts[0].slug}`}
                        className="btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {getCurrentPosts().slice(currentPage === 1 ? 1 : 0).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card group overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage || 'https://via.placeholder.com/400x300?text=Blog+Post'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {post.author}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-brand-500 hover:text-brand-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === page
                            ? 'bg-brand-500 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on electric mobility technology and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
