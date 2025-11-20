import React from 'react';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://res.cloudinary.com/dzqy2ixl0/image/upload/v1763597791/imgi_63_429246363_933036421465985_2575525623229077740_n_kisena.jpg" 
                alt="Chef Naty Pouring Coffee" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative backdrop */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-500 rounded-tr-[4rem] rounded-bl-[4rem] z-0"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-4 text-gold-600 font-handwriting text-3xl">Meet Chef Naty</div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6">
              Passion on a Plate, <br/> Served with Love.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              A passionate chef bringing restaurant-quality cuisine to intimate home settings. Blending Colombian flavors with international techniques, Chef Naty creates unforgettable culinary memories.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              My philosophy is simple: food brings people together. Whether it's a romantic dinner for two or a lively family gathering, every dish is crafted with the freshest ingredients and a personal touch that turns a meal into a memory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                View Full Bio
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-gold-500 pl-4">
                <p className="font-bold text-xl text-stone-800">Locally Sourced</p>
                <p className="text-sm text-stone-500">Fresh ingredients from local markets.</p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <p className="font-bold text-xl text-stone-800">Custom Menus</p>
                <p className="text-sm text-stone-500">Tailored to your dietary preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};