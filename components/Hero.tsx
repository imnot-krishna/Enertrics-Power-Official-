'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Battery, Car } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>Powering the Future of Electric Mobility</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Powering the Future of{' '}
              <span className="text-gradient">Electric Mobility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Designing, manufacturing, and delivering high-performance EV solutions — from batteries to full vehicles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn-primary group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/ecommerce" className="btn-secondary">
                Explore Solutions
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-500 mb-1">500+</div>
                <div className="text-sm text-gray-600">Components Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-500 mb-1">50M+</div>
                <div className="text-sm text-gray-600">Miles Powered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-500 mb-1">95%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main EV Illustration */}
              <div className="relative w-full h-[500px] bg-gradient-to-br from-brand-500/10 to-accent/10 rounded-3xl p-8">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-64 h-40 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <Car className="w-16 h-16 text-brand-500" />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center"
                >
                  <Battery className="w-8 h-8 text-accent" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-8 right-8 w-20 h-20 bg-brand-400/20 rounded-full flex items-center justify-center"
                >
                  <Zap className="w-10 h-10 text-brand-400" />
                </motion.div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-400/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
