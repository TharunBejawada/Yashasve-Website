import React from 'react';
import { Phone, EnvelopeSimple as Mail, Clock, InstagramLogo as Instagram, FacebookLogo as Facebook, ChatCircle as MessageCircle } from '@phosphor-icons/react';
import { DOCTOR_PROFILE } from '@/constants';

export const TopBar: React.FC = () => (
  <div className="hidden md:block bg-secondary-900 text-stone-300 relative z-[51] border-b border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex items-center justify-between h-10">

        {/* Left — Contact info */}
        <div className="flex items-center gap-6 text-[11px] font-medium tracking-wide">
          <a
            href={`tel:${DOCTOR_PROFILE.phone}`}
            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
          >
            <Phone size={12} className="text-primary-400" aria-hidden="true" />
            <span>{DOCTOR_PROFILE.phone}</span>
          </a>

          <span className="w-px h-3.5 bg-white/15" aria-hidden="true" />

          <a
            href={`mailto:${DOCTOR_PROFILE.email}`}
            className="flex items-center gap-2 hover:text-primary-400 transition-colors"
          >
            <Mail size={12} className="text-primary-400" aria-hidden="true" />
            <span>{DOCTOR_PROFILE.email}</span>
          </a>

          <span className="w-px h-3.5 bg-white/15" aria-hidden="true" />

          <div className="flex items-center gap-2">
            <Clock size={12} className="text-primary-400" aria-hidden="true" />
            <span>Mon – Sat: 4 PM – 10 PM</span>
          </div>
        </div>

        {/* Right — Social icons */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-stone-500 font-medium tracking-wide mr-2">Follow Us:</span>
          {/* PLACEHOLDER: Replace # with real social media URLs */}
          <a href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all text-stone-400" aria-label="Instagram">
            <Instagram size={13} />
          </a>
          <a href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all text-stone-400" aria-label="Facebook">
            <Facebook size={13} />
          </a>
          <a href={`https://wa.me/${DOCTOR_PROFILE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all text-stone-400" aria-label="WhatsApp">
            <MessageCircle size={13} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

TopBar.displayName = 'TopBar';
