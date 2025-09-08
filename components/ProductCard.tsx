'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  specs?: Record<string, string>;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  price: number;
  currency: string;
  images: string[];
  categories: string[];
  specs: Record<string, string>;
  variants?: ProductVariant[];
  inStock: boolean;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants?.[0] || null
  );
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const currentPrice = selectedVariant?.price || product.price;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      title: product.title,
      price: currentPrice,
      quantity: 1,
      image: product.images[0],
      variant: selectedVariant || undefined,
    });
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="card h-full overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
          <Image
            src={product.images[currentImageIndex] || 'https://via.placeholder.com/800x800?text=Product+Image'}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Image Navigation Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <Link
              href={`/ecommerce/${product.slug}`}
              className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <Eye className="w-4 h-4 text-gray-600" />
            </Link>
          </div>

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Stock Status */}
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col h-full p-6">
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

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Variant:
              </label>
              <select
                value={selectedVariant?.id || ''}
                onChange={(e) => {
                  const variant = product.variants?.find(v => v.id === e.target.value);
                  setSelectedVariant(variant || null);
                }}
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name} - {formatPrice(variant.price, product.currency)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Price and Actions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-brand-500">
                {formatPrice(currentPrice, product.currency)}
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
                onClick={handleAddToCart}
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
  );
}
