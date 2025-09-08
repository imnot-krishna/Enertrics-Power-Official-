'use client';

import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  Battery,
  Car,
  Globe,
  ArrowRight,
  CheckCircle,
  Microscope,
  TestTube,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

const researchAreas = [
  {
    icon: Battery,
    title: 'Advanced Battery Technology',
    description: 'Next-generation solid-state batteries with higher energy density and faster charging capabilities.',
    innovations: ['Solid-state electrolytes', 'Silicon anodes', 'Thermal management systems'],
    status: 'In Development'
  },
  {
    icon: Car,
    title: 'Electric Vehicle Systems',
    description: 'Integrated powertrain solutions and intelligent energy management systems.',
    innovations: ['Smart charging algorithms', 'Regenerative braking', 'Vehicle-to-grid integration'],
    status: 'Prototype Phase'
  },
  {
    icon: Zap,
    title: 'Charging Infrastructure',
    description: 'Ultra-fast charging networks and wireless charging technology.',
    innovations: ['350kW charging stations', 'Inductive charging', 'Bidirectional power flow'],
    status: 'Field Testing'
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems for battery optimization and predictive maintenance.',
    innovations: ['Predictive analytics', 'Battery health monitoring', 'Autonomous optimization'],
    status: 'Research Phase'
  }
];

const innovations = [
  {
    title: 'Solid-State Battery Breakthrough',
    description: 'Achieved 40% higher energy density with improved safety and cycle life.',
    impact: 'Revolutionary',
    year: '2024'
  },
  {
    title: 'Smart Charging Network',
    description: 'AI-powered charging optimization reducing grid load by 30%.',
    impact: 'High',
    year: '2023'
  },
  {
    title: 'Thermal Management System',
    description: 'Advanced cooling technology extending battery life by 50%.',
    impact: 'Significant',
    year: '2023'
  },
  {
    title: 'Wireless Charging Pad',
    description: 'Contactless charging with 95% efficiency for residential use.',
    impact: 'Innovative',
    year: '2024'
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'Battery Chemistry & Materials Science',
    image: '/images/team/sarah-chen.jpg'
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Head of R&D',
    expertise: 'Electric Vehicle Systems',
    image: '/images/team/michael-rodriguez.jpg'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Senior Research Scientist',
    expertise: 'AI & Machine Learning',
    image: '/images/team/emily-watson.jpg'
  },
  {
    name: 'Dr. James Kim',
    role: 'Materials Engineer',
    expertise: 'Advanced Materials & Nanotechnology',
    image: '/images/team/james-kim.jpg'
  }
];

const partnerships = [
  {
    name: 'MIT Energy Initiative',
    description: 'Collaborative research on next-generation battery technologies',
    type: 'Academic Partnership'
  },
  {
    name: 'Tesla Motors',
    description: 'Joint development of advanced charging infrastructure',
    type: 'Industry Partnership'
  },
  {
    name: 'Stanford University',
    description: 'AI and machine learning for energy optimization',
    type: 'Research Collaboration'
  },
  {
    name: 'Department of Energy',
    description: 'Government-funded research on sustainable energy solutions',
    type: 'Government Grant'
  }
];

const stats = [
  { metric: '50+', label: 'Patents Filed', description: 'Innovative technologies protected' },
  { metric: '$25M', label: 'R&D Investment', description: 'Annual research and development budget' },
  { metric: '15+', label: 'Research Partners', description: 'Academic and industry collaborations' },
  { metric: '100+', label: 'Research Papers', description: 'Published in leading journals' }
];

export default function RDPage() {
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
              Research & Development
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Pioneering the future of electric mobility through cutting-edge innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Collaborate with Us
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Meet Our Team
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

      {/* Research Areas */}
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
              Research <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary research teams work across four key areas to advance electric mobility technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-8 h-8 text-brand-500" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {area.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {area.status}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="space-y-2">
                      {area.innovations.map((innovation, innovationIndex) => (
                        <div key={innovationIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-500 mr-2 flex-shrink-0" />
                          {innovation}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Innovations */}
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
              Key <span className="text-gradient">Innovations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Breakthrough technologies that are reshaping the electric mobility landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {innovation.title}
                  </h3>
                  <span className="px-3 py-1 bg-brand-500/10 text-brand-500 text-sm font-medium rounded-full">
                    {innovation.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {innovation.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">
                    Impact: {innovation.impact}
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-50 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-4 h-4 text-brand-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
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
              Our <span className="text-gradient">Research Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              World-class scientists and engineers driving innovation in electric mobility technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-gray-400" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>

                <p className="text-brand-500 font-medium mb-2">
                  {member.role}
                </p>

                <p className="text-sm text-gray-600">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
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
              Research <span className="text-gradient">Partnerships</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading institutions and companies to accelerate innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-brand-500" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {partnership.name}
                      </h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {partnership.type}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {partnership.description}
                    </p>
                  </div>
                </div>
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
              Join Our Research Mission
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with us to shape the future of electric mobility through groundbreaking research and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Collaborate with Us
              </Link>
              <Link href="/manufacturing" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                View Manufacturing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
