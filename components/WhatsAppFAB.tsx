import React from 'react';
import { ChatCircle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { DOCTOR_PROFILE } from '@/constants';

export const WhatsAppFAB: React.FC = () => (
  <motion.a
    href={`https://wa.me/${DOCTOR_PROFILE.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring" }}
    className="fixed bottom-[5.5rem] md:bottom-8 right-4 sm:right-6 z-50 bg-secondary-900 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group ring-2 ring-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
    aria-label="Chat with us on WhatsApp"
  >
    <ChatCircle size={24} weight="fill" className="text-white md:w-7 md:h-7" />
    <span className="absolute right-full mr-4 bg-white text-secondary-900 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block" aria-hidden="true">
      Chat with us
    </span>
  </motion.a>
);

WhatsAppFAB.displayName = 'WhatsAppFAB';
