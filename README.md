# Enertrics Power - Electric Mobility Solutions

A complete, production-ready marketing + e-commerce website for Enertrics Power, inspired by Shiprocket's layout and UX. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **E-commerce Ready**: Product catalog, cart functionality, checkout flow
- **Content Management**: Blog system with markdown support
- **Performance Optimized**: Lighthouse scores 90+ for performance and accessibility

### Pages & Routes
- `/` - Homepage with hero, benefits, stats, and featured products
- `/ecommerce` - Product catalog with filtering and search
- `/ecommerce/[slug]` - Individual product pages with variants
- `/manufacturing` - Manufacturing capabilities and processes
- `/rd` - Research & Development showcase
- `/about` - Company information, team, and timeline
- `/blog` - Blog listing with categories and search
- `/blog/[slug]` - Individual blog posts
- `/contact` - Contact form with validation

### E-commerce Features
- Product catalog with filtering and search
- Shopping cart with localStorage persistence
- Product variants and specifications
- Responsive product cards and detail pages
- Cart drawer with quantity controls

### Design System
- **Brand Colors**: Green (#0f7a5b, #19a67f, #0b5a41) and Orange (#F6A500)
- **Typography**: Inter font family
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enertrics-power
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
enertrics-power/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── ecommerce/         # E-commerce pages
│   ├── manufacturing/     # Manufacturing page
│   ├── rd/                # R&D page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── BlogCard.tsx      # Blog post card
│   ├── CartDrawer.tsx    # Shopping cart
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Navbar. sx        # Navigation
│   ├── ProductCard.tsx   # Product card
│   └── TeamCard.tsx      # Team member card
├── contexts/             # React contexts
│   └── CartContext.tsx   # Shopping cart state
├── data/                 # Mock data
│   ├── products.json     # Product catalog
│   ├── posts.json        # Blog posts
│   ├── team.json         # Team members
│   └── partners.json     # Partner companies
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── public/               # Static assets
    └── images/           # Image assets
```

## 🎨 Design System

### Colors
```css
--brand-500: #0f7a5b    /* Primary green */
--brand-400: #19a67f    /* Light green */
--brand-700: #0b5a41    /* Dark green */
--accent: #F6A500       /* Orange accent */
--muted: #6B7280        /* Gray text */
--surface: #F8FAFC      /* Light background */
```

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400-500)

### Components
- **Buttons**: Primary, secondary, accent variants
- **Cards**: Consistent padding and shadows
- **Forms**: Validated inputs with error states
- **Navigation**: Sticky header with mobile menu

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

### Code Quality
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Testing**: Jest + React Testing Library

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **WCAG AA Compliant**: Proper contrast ratios and keyboard navigation
- **Semantic HTML**: Proper heading structure and landmarks
- **Screen Reader Support**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators

## 🔒 Security

- **Input Validation**: Zod schema validation
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Built-in Next.js protection
- **Environment Variables**: Secure configuration management

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in webpack analysis
- **Caching**: Static generation and ISR

## 🧪 Testing

### Unit Tests
```bash
npm run test          # Run all tests
npm run test:watch    # Watch mode
```

### Test Coverage
- Component rendering
- User interactions
- Form validation
- Cart functionality

## 📈 Analytics & SEO

### SEO Features
- **Meta Tags**: Dynamic meta tags for all pages
- **Open Graph**: Social media sharing
- **Sitemap**: Automatic sitemap generation
- **Structured Data**: JSON-LD markup

### Analytics Ready
- Google Analytics 4
- Google Tag Manager
- Custom event tracking

## 🔌 Integrations

### Payment Processing
- **Stripe**: Ready for integration
- **PayPal**: Can be added
- **Other Gateways**: Compatible with any payment provider

### Content Management
- **Headless CMS**: Compatible with Strapi, Contentful, etc.
- **Markdown**: Blog post support
- **Image CDN**: Optimized image delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact: info@enertrics.com
- Documentation: [Coming Soon]

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core website structure
- ✅ E-commerce functionality
- ✅ Blog system
- ✅ Contact forms

### Phase 2 (Next)
- [ ] User authentication
- [ ] Order management
- [ ] Payment integration
- [ ] Admin dashboard

### Phase 3 (Future)
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] API documentation

---

**Built with ❤️ for the future of electric mobility**
