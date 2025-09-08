'use client';

import { Suspense } from 'react';
import Hero from '@/components/Hero';
import BenefitsGrid from '@/components/BenefitsGrid';
import StatsRow from '@/components/StatsRow';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Battery, Car, Users, Award, Heart, Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';

// Import data
import productsData from '@/data/products.json';
import statsData from '@/data/stats.json';
import partnersData from '@/data/partners.json';

export default function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = productsData.filter(product => product.featured).slice(0, 4);
  const displayStats = statsData.slice(0, 8);

  return (
    <>
      <Hero />
      
      <BenefitsGrid />

      <StatsRow 
        stats={displayStats}
        title="Our Impact in Numbers"
        subtitle="Delivering exceptional results across the electric mobility industry"
      />

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
              Premium Selection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge EV components and solutions designed for performance, reliability, and sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0] || 'https://via.placeholder.com/400x400?text=Product+Image'}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                        <Heart className="w-5 h-5 text-gray-700" />
                      </button>
                      <Link
                        href={`/ecommerce/${product.slug}`}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                      >
                        <Eye className="w-5 h-5 text-gray-700" />
                      </Link>
                    </div>

                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-accent to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          ⭐ Featured
                        </span>
                      </div>
                    )}

                    {/* Stock Status */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${
                        product.inStock 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-red-500/90 text-white'
                      }`}>
                        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.categories.slice(0, 2).map((category) => (
                        <span
                          key={category}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <Link href={`/ecommerce/${product.slug}`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brand-500 transition-colors line-clamp-2 group-hover:text-brand-500">
                        {product.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.shortDesc}
                    </p>

                    {/* Key Specs */}
                    <div className="mb-4 flex-grow">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(product.specs)
                          .slice(0, 2)
                          .map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-500 font-medium">{key}:</span>
                              <span className="font-bold text-gray-900">{value}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-brand-500">
                          {formatPrice(product.price, product.currency)}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href={`/ecommerce/${product.slug}`}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-3 rounded-xl transition-colors duration-200 text-sm text-center"
                        >
                          View Details
                        </Link>
                        <button
                          onClick={() => {
                            addToCart({
                              productId: product.id,
                              title: product.title,
                              price: product.price,
                              quantity: 1,
                              image: product.images[0],
                            });
                          }}
                          disabled={!product.inStock}
                          className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/ecommerce" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-400 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading automotive manufacturers and technology companies worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            {partnersData.slice(0, 6).map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    {partner.name.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-500 to-brand-400">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Power Your Electric Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the electric mobility revolution with our innovative solutions. 
              Get in touch to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Get Started
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CartDrawer />
    </>
  );
}
