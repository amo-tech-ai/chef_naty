
import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "A creamy and spiced Indian dish cooked to perfection with tender chicken breast and aromatic herbs.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&h=400",
    tags: ["Indian", "Spicy", "Creamy"]
  },
  {
    id: 2,
    name: "Shawarma Wrap",
    description: "Marinated meat grilled on a spit, wrapped in warm pita with tahini sauce and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1561651881-d3f002185837?auto=format&fit=crop&w=600&h=400",
    tags: ["Middle Eastern", "Grilled", "Signature"]
  },
  {
    id: 3,
    name: "Salmon Mango Glaze",
    description: "Pan-seared salmon topped with a tropical mango reduction, served with asparagus and quinoa.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&h=400",
    tags: ["Seafood", "Healthy", "Tropical"]
  }
];

export const FeaturedDishes: React.FC = () => {
  return (
    <section id="menus" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Signature Creations" 
          subtitle="A curated selection of my most requested dishes, blending tradition with modern flair."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {dishes.map((dish) => (
            <div key={dish.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-sm">
                  {dish.tags[0]}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-stone-600 mb-6 line-clamp-3">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-400">Course: Main</span>
                  <button className="text-gold-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="secondary" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
