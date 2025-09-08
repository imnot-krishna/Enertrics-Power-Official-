'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';

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
  variants?: any[];
  inStock: boolean;
  featured?: boolean;
}

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'batteries', name: 'Batteries' },
  { id: 'motors', name: 'Motors' },
  { id: 'charging', name: 'Charging' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'cooling', name: 'Cooling' },
  { id: 'wireless', name: 'Wireless' },
  { id: 'displays', name: 'Displays' },
];

const sortOptions = [
  { id: 'newest', name: 'Newest First' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'name', name: 'Name A-Z' },
];

export default function EcommercePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchTerm, selectedCategory, sortBy]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(term) ||
        product.shortDesc.toLowerCase().includes(term) ||
        product.categories.some(cat => cat.toLowerCase().includes(term))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.categories.includes(selectedCategory)
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep original order (newest first from API)
        break;
    }

    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-brand-500 to-brand-400 text-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                EV Components & Solutions
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Discover our comprehensive range of high-performance electric vehicle components, 
                from advanced battery systems to cutting-edge charging infrastructure.
              </p>
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
                  placeholder="Search products..."
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
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-300 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 ${viewMode === 'grid' ? 'bg-brand-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 ${viewMode === 'list' ? 'bg-brand-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container-custom">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
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
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <CartDrawer />
    </>
  );
}
