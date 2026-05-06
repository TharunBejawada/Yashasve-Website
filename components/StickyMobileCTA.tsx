import React from 'react';
import { DOCTOR_PROFILE } from '@/constants';
import { Button } from '@/components/ui';

interface StickyMobileCTAProps {
  onBookClick: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onBookClick }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-stone-200 px-4 pt-3 pb-4 md:hidden z-40 flex items-center gap-4 safe-area-pb">
    <a href={`tel:${DOCTOR_PROFILE.phone}`} className="flex-1" aria-label={`Call ${DOCTOR_PROFILE.hospital}`}>
      <Button variant="outline" className="w-full text-xs py-4 border-secondary-900 text-secondary-900">Call Now</Button>
    </a>
    <Button onClick={onBookClick} className="flex-1 text-xs py-4">
      Book Appointment
    </Button>
  </div>
);

StickyMobileCTA.displayName = 'StickyMobileCTA';
