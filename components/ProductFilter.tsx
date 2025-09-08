'use client';

import { useState } from 'react';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';

interface ProductFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  categories: Array<{ id: string; name: string }>;
  sortOptions: Array<{ id: string; name: string }>;
}

export default function ProductFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  categories,
  sortOptions,
}: ProductFilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
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
                onChange={(e) => onSortChange(e.target.value)}
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
                onClick={() => onViewModeChange('grid')}
                className={`p-3 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-3 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden p-3 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors"
              aria-label="Toggle filters"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  View Mode
                </label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => onViewModeChange('grid')}
                    className={`flex-1 py-2 text-sm transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-brand-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => onViewModeChange('list')}
                    className={`flex-1 py-2 text-sm transition-colors ${
                      viewMode === 'list'
                        ? 'bg-brand-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
