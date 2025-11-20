
import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your request! Chef Naty will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
          
          {/* Form Section */}
          <div className="p-8 lg:p-16">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">Ready for an unforgettable meal?</h2>
              <p className="text-stone-600">Fill out the form below to inquire about availability and pricing.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-stone-700">Type of Service</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-white"
                  >
                    <option>Private Dinner</option>
                    <option>Meal Prep</option>
                    <option>Cooking Class</option>
                    <option>Catering</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-stone-700">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium text-stone-700">Special Requests / Allergies</label>
                <textarea 
                  id="notes" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" 
                  placeholder="Tell me about your event or dietary needs..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Book Now
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block h-full">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
              alt="Beautiful Dining Table" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/20"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <p className="font-serif text-stone-800 italic text-lg">
                "Food is not just eating energy. It's an experience."
              </p>
              <p className="text-gold-600 font-bold mt-2 text-sm uppercase tracking-wide">- Chef Naty</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
