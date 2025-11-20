import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'} max-w-3xl mx-auto px-4`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-stone-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className="flex justify-center items-center mb-4">
          <span className={`h-px w-16 ${light ? 'bg-gold-200' : 'bg-gold-500'}`}></span>
        </div>
      )}
      {subtitle && (
        <p className={`text-lg ${light ? 'text-stone-200' : 'text-stone-600'} max-w-2xl mx-auto font-light`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};