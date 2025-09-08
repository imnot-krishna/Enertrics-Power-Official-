'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Globe } from 'lucide-react';
import teamData from '@/data/team.json';

export default function AboutPage() {
  return (
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
              About Enertrics Power
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Pioneering the future of electric mobility with innovative battery technology, 
              charging infrastructure, and sustainable energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To accelerate the global transition to sustainable transportation by developing 
                cutting-edge electric vehicle technologies that are accessible, reliable, and 
                environmentally responsible.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that electric mobility is not just the future—it's the present. 
                Our team of experts is dedicated to creating solutions that make electric 
                vehicles more efficient, affordable, and practical for everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <Target className="w-8 h-8 text-brand-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Pushing the boundaries of EV technology</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <Globe className="w-8 h-8 text-brand-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-600">Committed to environmental responsibility</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-500/10 to-accent/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-16 h-16 text-brand-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Leader</h3>
                  <p className="text-gray-600">
                    Trusted by leading automotive manufacturers worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering exceptional results and driving innovation across the electric mobility industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Components Delivered', icon: Award },
              { metric: '50M+', label: 'Miles Powered', icon: Globe },
              { metric: '95%', label: 'Customer Satisfaction', icon: Users },
              { metric: '25+', label: 'Global Partners', icon: Target },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-500" />
                </div>
                <div className="text-3xl font-bold text-brand-500 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white" id="team">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in electric vehicle 
              technology, manufacturing, and sustainable energy solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.slice(0, 8).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="card h-full">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-500 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-500 to-brand-400">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Powering the Future
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to be part of the electric mobility revolution? 
              Let's work together to create a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-brand-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                Get in Touch
              </a>
              <a href="/ecommerce" className="border-2 border-white text-white hover:bg-white hover:text-brand-500 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200">
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
