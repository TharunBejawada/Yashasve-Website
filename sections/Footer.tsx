import React from 'react';
import { MapPin, Phone, Clock, InstagramLogo as Instagram, FacebookLogo as Facebook, EnvelopeSimple as Mail, Star } from '@phosphor-icons/react';
import { DOCTOR_PROFILE, SERVICES } from '@/constants';
import { Logo } from '@/components/Logo';
import type { Service } from '@/types';

interface FooterProps {
  onNavigate: (id: string) => void;
  onSelectService: (service: Service) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => (
  <footer className="bg-secondary-900 text-stone-300 relative overflow-hidden" role="contentinfo">
    {/* Decorative watermark */}
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30rem] font-heading font-bold text-white/[0.02] pointer-events-none select-none leading-none" aria-hidden="true">
      Y
    </div>

    {/* Top accent line */}
    <div className="h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" aria-hidden="true" />

    <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 mb-16">

        {/* Brand — wider column */}
        <div className="lg:col-span-2 space-y-6">
          <Logo variant="dark" showSubtext={false} />
          <p className="text-stone-300 font-light leading-relaxed max-w-sm">
            Evidence-based dermatological care in the heart of Hyderabad. Restoring confidence through science and empathy.
          </p>
          <div className="flex gap-3">
            {/* PLACEHOLDER: Replace # with real social media URLs */}
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all text-white focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all text-white focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={`mailto:${DOCTOR_PROFILE.email}`} className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all text-white focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Email us">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-heading text-lg mb-6">Navigate</p>
          <ul className="space-y-3 text-sm font-light">
            {['About', 'Services', 'Why Us', 'Results', 'Voices', 'Contact'].map((item) => (
              <li key={item} className="min-h-[44px] flex items-center">
                <button onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))} className="hover:text-primary-400 transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  {item === 'Voices' ? 'Patient Stories' : item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <p className="text-white font-heading text-lg mb-6">Treatments</p>
          <ul className="space-y-3 text-sm font-light">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.id} className="min-h-[44px] flex items-center">
                <button onClick={() => onSelectService(s)} className="hover:text-primary-400 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <p className="text-white font-heading text-lg mb-6">Visit Us</p>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-1" aria-hidden="true" />
              <span>{DOCTOR_PROFILE.hospital},<br />{DOCTOR_PROFILE.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
              <a href={`tel:${DOCTOR_PROFILE.phone}`} className="hover:text-white transition-colors">{DOCTOR_PROFILE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                {DOCTOR_PROFILE.hours.map((h) => (
                  <p key={h} className="text-stone-400">{h}</p>
                ))}
              </div>
            </li>

            {/* Google Rating */}
            <li className="pt-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="bg-white p-1.5 rounded text-secondary-900" aria-hidden="true">
                  <span className="font-bold text-lg leading-none">G</span>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-[10px] gap-0.5 mb-1" role="img" aria-label={`${DOCTOR_PROFILE.googleRating.score} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={10} className="fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-300 font-medium">{DOCTOR_PROFILE.googleRating.score}/5 on Google</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6 text-xs text-stone-500 uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} {DOCTOR_PROFILE.name}. All rights reserved.</p>
        <div className="flex gap-8">
          {/* PLACEHOLDER: Create real legal pages and link them */}
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);

Footer.displayName = 'Footer';
