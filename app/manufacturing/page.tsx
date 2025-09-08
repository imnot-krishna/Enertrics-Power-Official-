'use client';

import { motion } from 'framer-motion';
import { 
  Factory, 
  Settings, 
  Shield, 
  Award, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const facilities = [
  {
    icon: Factory,
    title: 'Advanced Manufacturing Facility',
    description: 'State-of-the-art production lines with automated assembly and quality control systems.',
    specs: ['50,000 sq ft facility', '24/7 production capacity', 'ISO 9001 certified']
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Cutting-edge CNC machining and robotic assembly for consistent quality.',
    specs: ['±0.01mm precision', 'Automated testing', 'Real-time monitoring']
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Comprehensive testing protocols ensuring every component meets industry standards.',
    specs: ['100% component testing', 'Environmental stress testing', 'Safety compliance']
  }
];

const processes = [
  {
    step: '01',
    title: 'Design & Prototyping',
    description: 'Advanced CAD/CAM systems with rapid prototyping capabilities for quick iteration.',
    icon: Settings
  },
  {
    step: '02',
    title: 'Material Selection',
    description: 'Premium-grade materials sourced from certified suppliers with full traceability.',
    icon: CheckCircle
  },
  {
    step: '03',
    title: 'Precision Manufacturing',
    description: 'Automated production lines with real-time quality monitoring and control.',
    icon: Factory
  },
  {
    step: '04',
    title: 'Quality Testing',
    description: 'Comprehensive testing including performance, safety, and environmental stress tests.',
    icon: Shield
  },
  {
    step: '05',
    title: 'Packaging & Shipping',
    description: 'Secure packaging with tracking and logistics optimization for global delivery.',
    icon: Globe
  }
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management Systems',
    icon: Award
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    icon: Award
  },
  {
    name: 'IATF 16949:2016',
    description: 'Automotive Quality Management',
    icon: Award
  },
  {
    name: 'UL Certification',
    description: 'Safety Standards Compliance',
    icon: Shield
  }
];

const stats = [
  { metric: '50,000+', label: 'Components Produced', description: 'High-quality EV components manufactured annually' },
  { metric: '99.8%', label: 'Quality Rate', description: 'Consistent quality across all production batches' },
  { metric: '24/7', label: 'Production Capacity', description: 'Round-the-clock manufacturing operations' },
  { metric: '15+', label: 'Years Experience', description: 'Decades of manufacturing expertise in EV technology' }
];

export default function ManufacturingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-400 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Manufacturing Excellence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              State-of-the-art facilities and processes delivering world-class EV components
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Get Quote
              </Link>
              <Link href="/ecommerce" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class <span className="text-gradient">Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced manufacturing facilities combine cutting-edge technology with proven processes
              to deliver exceptional quality and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <facility.icon className="w-8 h-8 text-brand-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {facility.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {facility.description}
                </p>

                <ul className="space-y-2">
                  {facility.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-500 mr-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Manufacturing Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive 5-step process ensuring quality, efficiency, and innovation at every stage.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {process.step}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-50 to-accent/10 rounded-2xl flex items-center justify-center">
                    <process.icon className="w-12 h-12 text-brand-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and safety is validated by leading industry certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-brand-500" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>

                <p className="text-gray-600">
                  {cert.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss your manufacturing requirements and how we can help bring your EV projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Get Manufacturing Quote
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
