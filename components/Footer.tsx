import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-4xl font-handwriting font-bold text-gold-500 mb-4 block">
              Chef Naty
            </a>
            <p className="text-stone-400 mb-6">
              Elevating home dining with passion, flavor, and elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-stone-200">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-stone-400 hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-gold-500 transition-colors">About</a></li>
              <li><a href="#menus" className="text-stone-400 hover:text-gold-500 transition-colors">Menus</a></li>
              <li><a href="#gallery" className="text-stone-400 hover:text-gold-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-stone-200">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-stone-400 hover:text-gold-500 transition-colors">Private Dining</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-gold-500 transition-colors">Meal Prep</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-gold-500 transition-colors">Cooking Classes</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-gold-500 transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-stone-200">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-gold-500 mt-1" size={18} />
                <span className="text-stone-400">hello@chefnaty.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-gold-500 mt-1" size={18} />
                <span className="text-stone-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Chef Naty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};