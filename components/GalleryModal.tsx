import React from 'react';
import { Modal, BeforeAfterSlider } from '@/components/ui';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// PLACEHOLDER: Replace all Unsplash URLs with real consented patient before/after photos.
// Do NOT present stock photos as real patient results.
const GALLERY_ITEMS = [
  {
    before: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=800&auto=format&fit=crop",
    label: "Acne Scar Revision",
    duration: "4 Months",
  },
  {
    before: "https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    label: "Skin Rejuvenation",
    duration: "6 Weeks",
  },
  {
    before: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=800&auto=format&fit=crop",
    label: "Pigmentation Correction",
    duration: "3 Months",
  },
  {
    before: "https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    label: "Anti-Aging Treatment",
    duration: "8 Weeks",
  },
];

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Treatment Gallery">
    <div className="space-y-12">
      <p className="text-stone-500 text-sm italic">
        Illustrative images. Individual results may vary. Replace with real consented patient photos before launch.
      </p>
      {GALLERY_ITEMS.map((item) => (
        <div key={item.label}>
          <BeforeAfterSlider
            beforeImage={item.before}
            afterImage={item.after}
            label={item.label}
          />
          <div className="mt-4 flex justify-between items-center border-t border-stone-100 pt-3">
            <p className="text-lg font-heading text-secondary-900">{item.label}</p>
            <span className="text-xs uppercase tracking-widest text-primary-600">{item.duration}</span>
          </div>
        </div>
      ))}
    </div>
  </Modal>
);

GalleryModal.displayName = 'GalleryModal';
