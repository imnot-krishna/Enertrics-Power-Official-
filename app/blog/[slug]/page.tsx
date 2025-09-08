'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  authorTitle: string;
  date: string;
  featuredImage: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${params.slug}`);
      const data = await response.json();

      if (data.success) {
        setPost(data.data);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
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
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center space-x-4 text-sm mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={post.featuredImage || 'https://via.placeholder.com/1200x600?text=Blog+Post+Image'}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.body.replace(/\n/g, '<br>') }}
                />
              </div>

              {/* Author Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {post.author}
                    </h3>
                    <p className="text-gray-600">
                      {post.authorTitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-500 to-brand-400">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Power Your Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover our cutting-edge EV solutions and join the electric mobility revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Get Started
              </Link>
              <Link href="/ecommerce" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
