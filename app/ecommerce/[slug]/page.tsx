'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  specs: Record<string, string>;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  currency: string;
  images: string[];
  categories: string[];
  specs: Record<string, string>;
  variants?: ProductVariant[];
  inStock: boolean;
  featured: boolean;
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
  }, [params.slug]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${params.slug}`);
      const data = await response.json();

      if (data.success) {
        setProduct(data.data);
        setSelectedVariant(data.data.variants?.[0] || null);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      productId: product.id,
      title: product.title,
      price: selectedVariant?.price || product.price,
      quantity,
      image: product.images[0],
      variant: selectedVariant || undefined,
    });
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentPrice = selectedVariant?.price || product?.price || 0;

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/ecommerce" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span>/</span>
            <Link href="/ecommerce" className="hover:text-brand-500">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={product.images[currentImageIndex] || 'https://via.placeholder.com/600x600?text=Product+Image'}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </div>
                  )}
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageChange(index)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                          currentImageIndex === index
                            ? 'border-brand-500'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image || 'https://via.placeholder.com/150x150?text=Product'}
                          alt={`${product.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(24 reviews)</span>
                </div>
                <p className="text-gray-600 text-lg">
                  {product.shortDesc}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-brand-500">
                  {formatPrice(currentPrice, product.currency)}
                </span>
                {selectedVariant && selectedVariant.price !== product.price && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.price, product.currency)}
                  </span>
                )}
              </div>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Variant</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-4 border-2 rounded-lg text-left transition-colors ${
                          selectedVariant?.id === variant.id
                            ? 'border-brand-500 bg-brand-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900">{variant.name}</div>
                        <div className="text-brand-500 font-semibold">
                          {formatPrice(variant.price, product.currency)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 btn-secondary">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-brand-500" />
                  <div>
                    <div className="font-medium text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $1,000</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-brand-500" />
                  <div>
                    <div className="font-medium text-gray-900">Warranty</div>
                    <div className="text-sm text-gray-600">8 years coverage</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-brand-500" />
                  <div>
                    <div className="font-medium text-gray-900">Quality</div>
                    <div className="text-sm text-gray-600">ISO certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Details</h2>
                
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.longDesc}
                  </p>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
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
              Discover our complete range of EV components and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ecommerce" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                View All Products
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
