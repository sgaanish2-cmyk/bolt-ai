import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Server, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      label: 'VPS',
      href: '/vps',
    },
    {
      label: 'Dedicated',
      href: '/dedicated',
    },
    {
      label: 'Game Servers',
      href: '/game-servers',
    },
    {
      label: 'More',
      dropdown: [
        { label: 'Colocation', href: '/colocation' },
        { label: 'Data Center', href: '/data-center' },
        { label: 'About Us', href: '/about' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-blue-500/20 shadow-lg shadow-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Server className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Power Down Hosting
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-1 relative group">
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                  </button>

                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg rounded-lg border border-blue-500/20 shadow-xl animate-slideDown overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                    location.pathname === link.href ? 'text-white' : ''
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${
                      location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-300 hover:text-white transition-colors duration-300">
              Client Area
            </button>
            <Link
              to="/#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-blue-500/20 animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="space-y-2">
                  <div className="text-gray-300 font-semibold">{link.label}</div>
                  <div className="pl-4 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block text-gray-300 hover:text-white transition-colors duration-300 py-2 ${
                    location.pathname === link.href ? 'text-white' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3">
              <button className="w-full px-4 py-2 text-blue-300 hover:text-white transition-colors duration-300 border border-blue-500/30 rounded-lg">
                Client Area
              </button>
              <Link
                to="/#contact"
                className="block w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
