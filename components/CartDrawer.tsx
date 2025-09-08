'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

export default function CartDrawer() {
  const { state, dispatch, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleClose = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    // Close cart and redirect to checkout
    dispatch({ type: 'CLOSE_CART' });
    // In a real app, you would redirect to checkout page
    window.location.href = '/checkout';
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-6 h-6 text-brand-500" />
                <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
                {state.items.length > 0 && (
                  <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">
                    {state.items.length}
                  </span>
                )}
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some products to get started!</p>
                  <Link
                    href="/ecommerce"
                    onClick={handleClose}
                    className="btn-primary"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex space-x-4 p-4 bg-gray-50 rounded-xl"
                    >
                      {/* Item Image */}
                      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg overflow-hidden">
                        <img
                          src={item.image || 'https://via.placeholder.com/64x64?text=Product'}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </h4>
                        {item.variant && (
                          <p className="text-xs text-gray-500 mt-1">
                            Variant: {item.variant.name}
                          </p>
                        )}
                        <p className="text-sm font-semibold text-brand-500 mt-1">
                          {formatPrice(item.variant?.price || item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-3 h-3 text-gray-600" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-3 h-3 text-gray-600" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-gray-200 p-6 space-y-4"
              >
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Subtotal</span>
                  <span className="text-xl font-bold text-brand-500">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                {/* Shipping Info */}
                <div className="text-sm text-gray-500 text-center">
                  Free shipping on orders over $1,000
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary py-4 text-lg font-semibold"
                >
                  Proceed to Checkout
                </button>

                {/* Continue Shopping */}
                <Link
                  href="/ecommerce"
                  onClick={handleClose}
                  className="block text-center text-brand-500 hover:text-brand-700 font-medium transition-colors"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
