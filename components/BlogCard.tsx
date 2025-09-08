'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
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

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card group overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-64 lg:h-full">
            <img
              src={post.featuredImage || 'https://via.placeholder.com/800x600?text=Featured+Post'}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {post.featured && (
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center p-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-500 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {post.author} • {post.authorTitle}
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="btn-primary group"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card group overflow-hidden"
    >
      {/* Post Image */}
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

      {/* Post Content */}
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
            className="text-brand-500 hover:text-brand-700 font-medium text-sm flex items-center group"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
