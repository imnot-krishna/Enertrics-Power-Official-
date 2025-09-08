import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/contexts/CartContext';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
}));

const renderWithCartProvider = (component: React.ReactElement) => {
  return render(
    <CartProvider>
      {component}
    </CartProvider>
  );
};

describe('Navbar', () => {
  it('renders the logo and company name', () => {
    renderWithCartProvider(<Navbar />);
    
    expect(screen.getByText('Enertrics Power')).toBeInTheDocument();
    expect(screen.getByText('EP')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithCartProvider(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Ecommerce')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders cart icon', () => {
    renderWithCartProvider(<Navbar />);
    
    const cartButton = screen.getByLabelText('Shopping cart');
    expect(cartButton).toBeInTheDocument();
  });

  it('renders login link', () => {
    renderWithCartProvider(<Navbar />);
    
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders get started button', () => {
    renderWithCartProvider(<Navbar />);
    
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', () => {
    renderWithCartProvider(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    
    // Check if mobile menu items are visible
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Ecommerce')).toBeInTheDocument();
  });
});
