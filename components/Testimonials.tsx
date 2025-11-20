
import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah & James",
    city: "New York",
    quote: "Chef Naty created the best anniversary dinner we’ve ever had. The attention to detail was immaculate, and the butter chicken was to die for!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "Michael T.",
    city: "Brooklyn",
    quote: "I hired Naty for a weekly meal prep, and it changed my life. Healthy, delicious, and so convenient. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    city: "Queens",
    quote: "Her cooking class was so much fun! We learned how to make empanadas from scratch. Naty is a wonderful teacher.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-overlay opacity-10 filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="What Clients Are Saying" 
          subtitle="Real stories from satisfied taste buds."
          light={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="mb-6">
                <Quote className="text-gold-500 w-10 h-10 opacity-50" />
              </div>
              <p className="text-stone-200 italic mb-6 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-stone-400">{t.city}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
