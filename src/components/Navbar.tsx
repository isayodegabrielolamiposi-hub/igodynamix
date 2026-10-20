import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/content';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Services', id: 'services' },
    { label: 'Our Portfolio', id: 'portfolio' },
    { label: 'Resources', id: 'resources' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05080F]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark with official emblem */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-[#D4AF37]/50 shadow-md group-hover:border-[#D4AF37] transition-all shrink-0 bg-[#07172D] p-0.5">
              <img
                src="/assets/aistudio/I.G.O._Dynamix_Author_Branding_Emblem__1__60ca4b6f.png"
                alt="I.G.O. DYNAMIX Logo Emblem"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <span className="font-brand-display text-lg sm:text-xl font-bold tracking-wider text-white whitespace-nowrap shrink-0 group-hover:text-[#F3D77A] transition-colors">
              {BRAND.name}
            </span>
          </button>

          {/* Zone 2: Nav links, 1-2 word labels, single line */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-sm tracking-wide transition-colors whitespace-nowrap shrink-0 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded ${
                    isActive
                      ? 'text-[#F3D77A] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient hover:opacity-95 transition-all shadow-md shadow-[#D4AF37]/20 whitespace-nowrap shrink-0 active:scale-95"
            >
              <span>Let&apos;s Market Your Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07172D] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#F3D77A] bg-white/5 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded text-xs font-semibold tracking-wider uppercase text-[#05080F] bg-gold-gradient shadow-md"
            >
              <span>Let&apos;s Market Your Book</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
