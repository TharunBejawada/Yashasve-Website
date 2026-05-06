import React from 'react';
import { GraduationCap, Medal as Award, BookOpen } from '@phosphor-icons/react';
import { Modal } from '@/components/ui';
import { DOCTOR_PROFILE } from '@/constants';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={DOCTOR_PROFILE.name}>
    <div className="space-y-8">
      <div className="flex gap-6 items-start">
        <div className="w-24 h-24 shrink-0 bg-stone-100 rounded-sm overflow-hidden">
          {/* PLACEHOLDER: Replace with real doctor photo */}
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"
            alt={DOCTOR_PROFILE.name}
            className="w-full h-full object-cover"
            loading="lazy"
            width={96}
            height={96}
          />
        </div>
        <div>
          <p className="text-sm font-bold text-secondary-900 uppercase tracking-wide">Dermatologist & Cosmetologist</p>
          <p className="text-xs text-stone-500 mt-1 mb-3">MBBS, MD (DVL)</p>
          <p className="text-stone-600 font-light text-base italic">
            "My mission is to provide skin care that is as safe as it is effective, grounded in science and delivered with empathy."
          </p>
        </div>
      </div>

      <div className="border-t border-stone-100 pt-6">
        <p className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
          <GraduationCap size={18} aria-hidden="true" /> Education
        </p>
        <ul className="space-y-3 text-base text-stone-600 font-light">
          {DOCTOR_PROFILE.education.map((entry) => (
            <li key={entry.year} className="flex gap-3">
              <span className="font-bold text-secondary-900 w-16 shrink-0">{entry.year}</span>
              <span>{entry.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone-100 pt-6">
        <p className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
          <Award size={18} aria-hidden="true" /> Memberships & Awards
        </p>
        <ul className="list-disc pl-5 space-y-2 text-base text-stone-600 font-light">
          {DOCTOR_PROFILE.memberships.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone-100 pt-6">
        <p className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
          <BookOpen size={18} aria-hidden="true" /> Philosophy
        </p>
        <p className="text-base text-stone-600 font-light leading-relaxed">
          {DOCTOR_PROFILE.philosophy}
        </p>
      </div>
    </div>
  </Modal>
);

BioModal.displayName = 'BioModal';
