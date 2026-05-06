import React from 'react';
import { MARQUEE_ITEMS } from '@/constants';

export const Marquee: React.FC = () => (
  <div className="bg-secondary-900 text-stone-100 py-6 overflow-hidden whitespace-nowrap border-y border-white/5" aria-hidden="true">
    <div className="inline-block animate-marquee will-change-transform">
      {[0, 1, 2, 3].map((groupIndex) => (
        <React.Fragment key={groupIndex}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`${groupIndex}-${i}`} className="mx-12 text-sm font-heading italic text-stone-300">
              {item} <span className="mx-4 not-italic font-sans text-[10px] text-primary-500 opacity-60">●</span>
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
);

Marquee.displayName = 'Marquee';
