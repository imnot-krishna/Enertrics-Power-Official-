'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, User, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Ecommerce', href: '/ecommerce' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'R&D', href: '/rd' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, dispatch, getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-brand-500 to-brand-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base">EP</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-brand-500">
              Enertrics Power
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-500 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-brand-500 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <Link
              href="/login"
              className="flex items-center space-x-2 text-gray-700 hover:text-brand-500 transition-colors duration-200"
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Login</span>
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm px-4 py-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-brand-500 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-brand-500 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-brand-500 font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-brand-500 transition-colors duration-200 py-2"
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">Login</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full mt-4 text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
