'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/career' },
    { name: 'Press', href: '/press' },
  ],
  solutions: [
    { name: 'Battery Systems', href: '/ecommerce?category=batteries' },
    { name: 'Charging Infrastructure', href: '/ecommerce?category=charging' },
    { name: 'Power Electronics', href: '/ecommerce?category=electronics' },
    { name: 'Thermal Management', href: '/ecommerce?category=cooling' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Technical Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Warranty', href: '/warranty' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/enertricspower' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/enertricspower' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/enertricspower' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/enertricspower' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <span className="text-2xl font-bold">Enertrics Power</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Powering the future of electric mobility with innovative battery technology, 
              charging infrastructure, and sustainable energy solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>enertricspower@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+91 9311745193</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Sunderpur,Varanasi-221106 Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on electric mobility technology and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">
                © 2024 Enertrics Power. All rights reserved.
              </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                className="w-10 h-10 bg-gray-800 hover:bg-brand-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
