
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menus', href: '#menus' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-3xl md:text-4xl font-handwriting font-bold text-stone-900 z-50 relative">
          Chef Naty
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-stone-800' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" className="!bg-stone-900 hover:!bg-stone-800" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Private Dinner
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-stone-800 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-serif text-stone-800 hover:text-orange-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            size="lg" 
            className="!bg-stone-900"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Private Dinner
          </Button>
        </div>
      </div>
    </header>
  );
};
