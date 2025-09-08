'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to power your electric future? Contact our team to discuss your project requirements 
              and discover how our solutions can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is ready to help you find the perfect electric mobility solutions 
                for your needs. Reach out to us today.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">enertricspower@gmail.com</p>
                    <p className="text-gray-600">hrmanagementenertrics@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9311745193</p>
                    <p className="text-gray-600">Mon-Sat: 10AM-5PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Flat No. 302 <br />
                      Sparsh Residency Brij Enclave Colony-Sunderpur, <br />
                      Varanasi - 221106, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why Choose Enertrics Power?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expert technical support</li>
                  <li>• Custom solutions for your needs</li>
                  <li>• Fast response times</li>
                  <li>• Comprehensive documentation</li>
                  <li>• Ongoing partnership support</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="card">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Send us a Message
                    </h3>

                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your.email@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          {...register('company')}
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
                          errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="What can we help you with?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your project requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
