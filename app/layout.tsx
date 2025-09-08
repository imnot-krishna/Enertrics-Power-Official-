import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Enertrics Power - Powering the Future of Electric Mobility',
    template: '%s | Enertrics Power',
  },
  description: 'Designing, manufacturing, and delivering high-performance EV solutions — from batteries to full vehicles.',
  keywords: ['electric vehicles', 'EV batteries', 'sustainable mobility', 'green energy', 'electric mobility'],
  authors: [{ name: 'Enertrics Power' }],
  creator: 'Enertrics Power',
  publisher: 'Enertrics Power',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://enertrics-power.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enertrics-power.com',
    title: 'Enertrics Power - Powering the Future of Electric Mobility',
    description: 'Designing, manufacturing, and delivering high-performance EV solutions — from batteries to full vehicles.',
    siteName: 'Enertrics Power',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enertrics Power - Electric Mobility Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enertrics Power - Powering the Future of Electric Mobility',
    description: 'Designing, manufacturing, and delivering high-performance EV solutions — from batteries to full vehicles.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
