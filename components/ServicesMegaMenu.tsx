import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/constants';
import type { ServiceCategory } from '@/types';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_ORDER: ServiceCategory[] = ['Skin', 'Hair', 'Body', 'Wellness'];

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    // Delay to avoid closing on the same click that opened it
    const timer = setTimeout(() => {
      document.addEventListener('click', handler);
    }, 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handler);
    };
  }, [isOpen, onClose]);

  const servicesByCategory = CATEGORY_ORDER.map(cat => ({
    category: cat,
    services: SERVICES.filter(s => s.category === cat),
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-stone-200 z-40"
          role="menu"
          aria-label="Services menu"
        >
          <div className="container mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {servicesByCategory.map(({ category, services }) => (
                <div key={category}>
                  {/* Category heading */}
                  <div className="mb-5">
                    <p className="text-sm font-bold text-secondary-900 uppercase tracking-widest">{category}</p>
                    <div className="w-8 h-0.5 bg-primary-500 mt-2" />
                  </div>

                  {/* Service links */}
                  <ul className="space-y-2.5">
                    {services.map(service => (
                      <li key={service.id}>
                        <Link
                          to={`/services/${service.id}`}
                          onClick={onClose}
                          className="text-sm text-stone-600 hover:text-secondary-900 hover:pl-1 transition-all duration-200 block py-1 focus:outline-none focus:text-primary-600 focus:ring-0"
                          role="menuitem"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
              <p className="text-xs text-stone-400 font-light">
                All treatments are performed by {SERVICES.length > 0 ? 'a qualified dermatologist' : ''} at Suseela Hospital.
              </p>
              <Link
                to="/"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="text-xs font-bold text-primary-600 hover:text-primary-800 uppercase tracking-widest"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ServicesMegaMenu.displayName = 'ServicesMegaMenu';
