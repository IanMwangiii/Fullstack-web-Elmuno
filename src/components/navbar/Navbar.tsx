import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Wine, Menu, X, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TopAnnouncement } from './TopAnnouncement';
import { CurrencySelector } from './CurrencySelector';
import { LanguageSelector } from './LanguageSelector';
import { SearchBar } from './SearchBar';
import { CartIndicator } from './CartIndicator';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      <TopAnnouncement />
      
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center gap-6">
              <LanguageSelector />
              <CurrencySelector />
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+254714117721" className="flex items-center gap-1 text-sm hover:text-amber-500 transition-colors">
                <Phone size={16} />
                <span>0714 11 77 21</span>
              </a>
              <Link to="/wishlist" className="flex items-center gap-1 text-sm hover:text-amber-500 transition-colors">
                <Heart size={16} />
                <span>Wishlist</span>
              </Link>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Wine className="h-10 w-10 text-amber-500" />
              <span className="font-bold text-2xl">ELMUNO LIQUOR</span>
            </Link>

            {/* Search Bar */}
            <SearchBar />

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <CartIndicator />
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="hidden lg:block border-t">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-8">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/products" className="nav-link">SHOP</Link>
                <Link to="/about" className="nav-link">ABOUT</Link>
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">Special Offer:</span>
                <span>Free Delivery on Orders Above KES 5000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu 
              isOpen={isMobileMenuOpen} 
              onClose={() => setIsMobileMenuOpen(false)} 
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}