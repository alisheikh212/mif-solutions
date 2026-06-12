import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Search, ChevronDown, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products', 
    href: '/products',
    dropdown: [
      { name: 'Cash Handling Equipment', href: '/products?category=cash-handling' },
      { name: 'UPS & Batteries', href: '/products?category=infrastructure' },
      { name: 'Parcel Lockers', href: '/products?category=lockers' },
      { name: 'Thermal & Label Printers', href: '/products?category=printers' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Product Consultation', href: '/services#consultation' },
      { name: 'Site Survey', href: '/services#site-survey' },
      { name: 'Power Survey', href: '/services#power-survey' },
      { name: 'Installation & Commissioning', href: '/services#installation' },
      { name: 'Maintenance & Service Contracts', href: '/services#maintenance' },
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-0" : "bg-white py-0"
      )}
    >
      {/* Top Bar - Hidden on scroll to save space */}
      <div 
        className={cn(
          "bg-slate-900 text-slate-300 py-2 text-xs md:text-sm transition-all duration-300 transform origin-top",
          scrolled ? "h-0 overflow-hidden py-0 opacity-0" : "h-auto opacity-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8">
          <a href="mailto:info@mifsolutions.com" className="flex items-center hover:text-white transition-colors">
            <Mail className="h-3.5 w-3.5 mr-2 shrink-0" />
            <span>info@mifsolutions.com</span>
          </a>
          <a href="tel:+922135894466" className="flex items-center hover:text-white transition-colors text-center">
            <Phone className="h-3.5 w-3.5 mr-2 shrink-0" />
            <span>+92-21-35894466-7 & 70-2</span>
          </a>
          <div className="flex items-center text-center">
            <MapPin className="h-3.5 w-3.5 mr-2 shrink-0" />
            <span>Suite 14/1-2-3,W.B.C., DHA-Phase 1,Karachi.</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
        <div className={cn("flex w-full items-center justify-between transition-all duration-300", scrolled ? "py-3" : "py-5")}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
                MIF
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Solutions</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navigation.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm xl:text-base font-semibold transition-colors flex items-center gap-1 py-4",
                    location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href)) ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-center group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden py-2 mt-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-400 hover:text-slate-600 transition-colors p-2" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Request a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <button className="text-slate-500 hover:text-slate-700 p-2 min-h-[44px] min-w-[44px]">
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search - Only visible when menu is open */}
        {mobileMenuOpen && (
           <div className="lg:hidden px-2 pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products, equipment, or services..." 
                  className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 min-h-[48px]"
                />
              </div>
           </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-semibold min-h-[48px] flex items-center",
                    location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  )}
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {/* Mobile Dropdown Sub-items */}
                {item.dropdown && (
                  <div className="pl-6 space-y-1 mt-1 mb-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 min-h-[44px] flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></div>
                         {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                to="/contact"
                className="block w-full text-center rounded-lg px-3 py-3 text-base font-bold bg-blue-600 text-white hover:bg-blue-700 min-h-[48px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
