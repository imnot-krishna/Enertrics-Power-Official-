'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  id: string;
  metric: string;
  label: string;
  description: string;
}

interface StatsRowProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export default function StatsRow({ stats, title, subtitle }: StatsRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-brand-500 to-brand-400">
      <div className="container-custom" ref={ref}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                >
                  {stat.metric}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-white/80 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
