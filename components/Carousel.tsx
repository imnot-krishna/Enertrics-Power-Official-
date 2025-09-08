'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export default function Carousel({
  items,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showIndicators = true,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Carousel Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
