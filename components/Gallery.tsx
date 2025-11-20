
import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", alt: "Gourmet Plating", span: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80", alt: "Table Setting", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=600&q=80", alt: "Chef Preparation", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80", alt: "Fresh Ingredients", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80", alt: "Final Dish Presentation", span: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80", alt: "Culinary Details", span: "row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Culinary Gallery" subtitle="A visual feast of my recent work." />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-xl shadow-md ${img.span} ${idx === 0 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg border-b border-gold-500 pb-1">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">See Full Gallery</Button>
        </div>
      </div>
    </section>
  );
};
