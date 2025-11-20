import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Utensils, Calendar, BookOpen, GlassWater } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Private Chef Dining",
    description: "Multi-course meals cooked in your home. Perfect for romantic dates or family dinners.",
    icon: <Utensils className="w-8 h-8 text-white" />,
    color: "bg-orange-500"
  },
  {
    id: 2,
    title: "Weekly Meal Prep",
    description: "Healthy, fresh meals for busy professionals delivered or prepared in your kitchen.",
    icon: <Calendar className="w-8 h-8 text-white" />,
    color: "bg-green-600"
  },
  {
    id: 3,
    title: "Cooking Classes",
    description: "Hands-on lessons for individuals or groups. Learn the secrets behind my signature dishes.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: "bg-blue-500"
  },
  {
    id: 4,
    title: "Event Catering",
    description: "Birthdays, anniversaries, intimate celebrations. Full service catering for up to 50 guests.",
    icon: <GlassWater className="w-8 h-8 text-white" />,
    color: "bg-rose-500"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="What I Offer" 
          subtitle="Tailored culinary services designed to fit your lifestyle and taste."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="bg-stone-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-stone-100 hover:border-stone-200">
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};