import React from 'react';
import { Button, BeforeAfterSlider, Reveal } from '@/components/ui';

interface ResultsProps {
  onViewGallery: () => void;
}

export const Results: React.FC<ResultsProps> = ({ onViewGallery }) => (
  <section id="results" className="py-24 bg-secondary-900 text-white overflow-hidden relative" aria-labelledby="results-heading">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div className="max-w-xl">
          <h2 id="results-heading" className="text-4xl md:text-5xl font-heading font-normal mb-6">Clinical Results</h2>
          <p className="text-stone-300 font-light text-xl">Swipe to see the transformation. Individual results may vary.</p>
        </div>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary-900" onClick={onViewGallery}>
          View All Gallery
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Reveal>
          {/* PLACEHOLDER: Replace with real patient before/after photos */}
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=800&auto=format&fit=crop"
            label="Acne Scar Revision"
          />
          <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
            <h3 className="text-xl font-heading">Acne Scar Treatment</h3>
            <span className="text-xs uppercase tracking-widest text-primary-400">4 Months</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=800&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop"
            label="Skin Rejuvenation"
          />
          <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
            <h3 className="text-xl font-heading">Hydration & Glow</h3>
            <span className="text-xs uppercase tracking-widest text-primary-400">6 Weeks</span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

Results.displayName = 'Results';
