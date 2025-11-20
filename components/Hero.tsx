import React from 'react';
import { Button } from './ui/Button';
import { Star, Play, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full bg-stone-50 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-visible">
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="space-y-10 relative z-10">
            <div>
              <span className="font-handwriting text-3xl text-orange-500 mb-2 block">Chef Naty</span>
              <h1 className="text-5xl lg:text-7xl font-sans font-bold text-stone-900 leading-[1.1] tracking-tight">
                Deliciously Personal, <br />
                <span className="text-stone-500">Delightfully Yours</span>
              </h1>
            </div>
            
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              Elevate your everyday with customized gourmet meals designed to satisfy your palate and bring restaurant-quality cuisine to your kitchen table.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Private Chef
              </button>
              <button 
                className="px-8 py-4 bg-transparent border-2 border-stone-200 text-stone-600 hover:border-stone-800 hover:text-stone-900 rounded-full font-medium flex items-center gap-2 transition-all"
                onClick={() => document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={18} className="fill-current" />
                See Signature Dishes
              </button>
            </div>

            <div className="flex items-center gap-16 pt-4">
              <div>
                <div className="text-4xl font-bold text-stone-900">12+</div>
                <div className="text-stone-500 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-stone-900">200+</div>
                <div className="text-stone-500 mt-1">Dinners Served</div>
              </div>
            </div>
          </div>

          {/* Right Column: Arch Image */}
          <div className="relative flex justify-center lg:justify-end h-full min-h-[500px] lg:min-h-[700px]">
             {/* Arch Shape Background */}
             <div className="absolute bottom-0 right-0 lg:right-10 w-[90%] lg:w-[80%] h-[90%] border-[1px] border-stone-200 rounded-t-full"></div>
             
             <div className="relative z-10 w-[85%] lg:w-[75%] h-full flex items-end justify-center lg:mr-16">
                <div className="relative w-full h-[95%] rounded-t-[200px] overflow-hidden bg-stone-100">
                  <img 
                    src="https://res.cloudinary.com/dzqy2ixl0/image/upload/v1763597791/1_n_a5bcwe.jpg" 
                    alt="Chef Naty" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Badge floating on image like reference if needed, but we use the bottom bar */}
                  <div className="absolute top-10 right-4 bg-white px-4 py-2 rounded-full shadow-md text-sm font-bold text-stone-800 hidden md:block">
                    Awarded
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Floating Card Section */}
        <div className="relative z-20 mt-12 lg:-mt-24 lg:ml-10 max-w-6xl">
          <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-6 md:p-10 grid lg:grid-cols-[auto_1fr] gap-10 items-center">
            
            {/* Award Badge Area */}
            <div className="flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-100 pb-8 lg:pb-0 lg:pr-10">
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Rotating Text SVG */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="11.5" fill="#44403c" fontWeight="bold" letterSpacing="1.2">
                    <textPath href="#circle">
                      AWARD WINNING CHEF • GLOBALLY RECOGNIZED •
                    </textPath>
                  </text>
                </svg>
                <Star className="w-10 h-10 text-stone-800 fill-current" />
              </div>
            </div>

            {/* Featured Dishes Preview */}
            <div className="flex flex-col md:flex-row gap-6 w-full overflow-x-auto pb-2 md:pb-0">
              {/* Dish 1 */}
              <div className="flex items-center gap-4 min-w-[280px]">
                <img src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=150&h=150" alt="Butter Chicken" className="w-20 h-20 rounded-full object-cover shadow-md" />
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Butter Chicken</h4>
                  <p className="text-sm text-stone-500 line-clamp-2">A creamy, spiced Indian curry made with marinated grilled chicken.</p>
                </div>
              </div>

              {/* Dish 2 */}
              <div className="flex items-center gap-4 min-w-[280px]">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=150&h=150" alt="Shawarma Wrap" className="w-20 h-20 rounded-full object-cover shadow-md" />
                  <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Shawarma Wrap</h4>
                  <p className="text-sm text-stone-500 line-clamp-2">Thin slices of marinated meat, grilled on a spit, wrapped in pita.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Stats Badge (4.9/5) from screenshot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:left-[45%] lg:top-[60%] bg-white py-3 px-6 rounded-full shadow-lg z-20 flex items-center gap-2 animate-pulse hidden lg:flex">
           <span className="font-bold text-stone-900 text-xl">4.9/5</span>
           <Star className="w-5 h-5 text-orange-400 fill-current" />
        </div>

      </div>
    </section>
  );
};