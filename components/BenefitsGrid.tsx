'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Shield, 
  TrendingUp, 
  Globe, 
  Clock,
  Award,
  Users
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Advanced battery technology delivering exceptional power and efficiency for electric vehicles.',
    color: 'text-accent'
  },
  {
    icon: Battery,
    title: 'Long Range',
    description: 'Extended battery life and range capabilities for worry-free long-distance travel.',
    color: 'text-brand-500'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Built-in safety systems and thermal management ensuring reliable operation.',
    color: 'text-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Optimized solutions that reduce total cost of ownership and operational expenses.',
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    title: 'Sustainable',
    description: 'Environmentally friendly solutions contributing to a cleaner, greener future.',
    color: 'text-emerald-600'
  },
  {
    icon: Clock,
    title: 'Fast Charging',
    description: 'Rapid charging capabilities minimizing downtime and maximizing productivity.',
    color: 'text-purple-600'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control processes ensuring top-tier reliability.',
    color: 'text-orange-600'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 technical support and maintenance services from our experienced team.',
    color: 'text-indigo-600'
  }
];

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

export default function BenefitsGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Enertrics Power</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive EV solutions deliver unmatched performance, reliability, and sustainability for the future of electric mobility.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="card h-full text-center hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-500 to-brand-400 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Power Your Future?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join leading automotive manufacturers who trust Enertrics Power for their electric vehicle solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-colors duration-200">
                Get Started
              </a>
              <a href="/ecommerce" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-3 px-8 rounded-2xl transition-colors duration-200">
                View Products
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
