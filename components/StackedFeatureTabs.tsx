"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tabsData = [
  {
    number: "1/5",
    title: "Fast Capital",
    gradient: "from-[#1B3B6F] to-[#dc2626]",
    features: [
      {
        title: "Instant Approvals",
        description: "Get capital decisions in minutes, not days, with our AI-driven process."
      },
      {
        title: "Flexible Repayment",
        description: "Choose repayment terms that fit your business cash flow."
      },
      {
        title: "No Hidden Fees",
        description: "Transparent pricing with zero surprises or hidden charges."
      }
    ]
  },
  {
    number: "2/5",
    title: "Smart Logistics",
    gradient: "from-[#dc2626] to-[#fecaca]",
    features: [
      {
        title: "Real-Time Tracking",
        description: "Monitor your shipments with live updates and smart notifications."
      },
      {
        title: "Optimized Routing",
        description: "AI-powered route planning for faster, greener deliveries."
      },
      {
        title: "Seamless Integrations",
        description: "Connect with your favorite e-commerce platforms in one click."
      }
    ]
  },
  {
    number: "3/5",
    title: "Secure Payments",
    gradient: "from-[#1B3B6F] to-[#fecaca]",
    features: [
      {
        title: "Multi-Layer Security",
        description: "Your transactions are protected with bank-grade encryption."
      },
      {
        title: "Instant Settlements",
        description: "Receive your funds instantly, 24/7, with no delays."
      },
      {
        title: "Global Reach",
        description: "Accept payments from customers worldwide, hassle-free."
      }
    ]
  },
  {
    number: "4/5",
    title: "Powerful Analytics",
    gradient: "from-[#dc2626] to-[#1B3B6F]",
    features: [
      {
        title: "Actionable Insights",
        description: "Visualize sales, returns, and customer trends in real time."
      },
      {
        title: "Custom Reports",
        description: "Build and export reports tailored to your business needs."
      },
      {
        title: "Growth Forecasts",
        description: "AI-driven predictions to help you plan and scale."
      }
    ]
  },
  {
    number: "5/5",
    title: "Enertrics Support",
    gradient: "from-[#1B3B6F] to-[#dc2626]",
    features: [
      {
        title: "24/7 Assistance",
        description: "Our experts are always available to help you succeed."
      },
      {
        title: "Onboarding Guidance",
        description: "Step-by-step support to get you started quickly."
      },
      {
        title: "Dedicated Manager",
        description: "A single point of contact for all your business needs."
      }
    ]
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function StackedFeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabsData[activeTab];

  return (
    <motion.section
      className={`w-full py-16 px-4 md:px-0`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 w-full h-full z-0 pointer-events-none transition-colors duration-500`} 
        aria-hidden="true"
      >
        <div
          className={`w-full h-full bg-gradient-to-r ${tab.gradient} opacity-90`} 
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
          {tabsData.map((t, idx) => (
            <button
              key={t.number}
              className={`flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-accent/60
                ${activeTab === idx
                  ? "bg-white/90 shadow text-[#1B3B6F] scale-105"
                  : "bg-white/60 text-gray-500 hover:bg-white/80 hover:scale-105"}
              `}
              onClick={() => setActiveTab(idx)}
              aria-selected={activeTab === idx}
              aria-controls={`tab-panel-${idx}`}
            >
              <span className="text-4xl font-bold leading-none tracking-tight">
                {t.number}
              </span>
              <span className="text-lg md:text-xl font-semibold">
                {t.title}
              </span>
              {idx < tabsData.length - 1 && (
                <span className="hidden md:inline-block mx-4 h-8 w-px bg-gray-300" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {tab.features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 p-8 flex flex-col gap-3 cursor-pointer hover:-translate-y-1"
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 8px 32px 0 rgba(27,59,111,0.10)" }}
            >
              <div className="text-[#1B3B6F] text-2xl font-semibold mb-1">
                {feature.title}
              </div>
              <div className="text-base text-gray-600">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
