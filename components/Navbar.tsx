import React, { useEffect, useState, useRef } from 'react';
import { List as Menu, X, CaretDown as ChevronDown } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui';
import { ServicesMegaMenu } from '@/components/ServicesMegaMenu';
import { SERVICES } from '@/constants';
import type { ServiceCategory } from '@/types';

interface NavbarProps {
  isMenuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
  onNavigate: (id: string) => void;
}

const NAV_ITEMS = ['Home', 'About', 'Services', 'Results', 'Voices', 'Contact'];
const MOBILE_NAV_ITEMS = [...NAV_ITEMS];

// Items that navigate to their own routes instead of scrolling
const ROUTE_NAV_ITEMS: Record<string, string> = {
  'Home': '/',
  'About': '/about',
  'Results': '/results',
  'Contact': '/contact',
};
const TOPBAR_HEIGHT = 40;
const CATEGORY_ORDER: ServiceCategory[] = ['Skin', 'Hair', 'Body', 'Wellness'];

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, onMenuOpen, onMenuClose, onNavigate }) => {
  const routerNavigate = useNavigate();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [topOffset, setTopOffset] = useState(TOPBAR_HEIGHT);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const megaMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const updateOffset = () => {
      const y = window.scrollY;
      const isMd = window.matchMedia('(min-width: 768px)').matches;
      if (!isMd) { setTopOffset(0); return; }
      setTopOffset(Math.max(0, TOPBAR_HEIGHT - y));
    };
    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    window.addEventListener('resize', updateOffset, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onMenuClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isMenuOpen, onMenuClose]);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  const handleServiceHoverIn = () => {
    if (megaMenuTimer.current) clearTimeout(megaMenuTimer.current);
    setIsMegaMenuOpen(true);
  };
  const handleServiceHoverOut = () => {
    megaMenuTimer.current = setTimeout(() => setIsMegaMenuOpen(false), 200);
  };

  const handleNavClick = (item: string) => {
    // Route-based navigation for pages with their own routes
    if (ROUTE_NAV_ITEMS[item]) {
      routerNavigate(ROUTE_NAV_ITEMS[item]);
      return;
    }
    // Services scrolls to services section on homepage
    if (item === 'Services') {
      onNavigate('services');
    } else {
      // Voices → scrolls to testimonials section on homepage
      onNavigate(item.toLowerCase() === 'voices' ? 'voices' : item.toLowerCase());
    }
  };

  const servicesByCategory = CATEGORY_ORDER.map(cat => ({
    category: cat,
    services: SERVICES.filter(s => s.category === cat),
  }));

  return (
    <>
      <header
        className="fixed left-0 right-0 z-50 transition-[top] duration-100"
        style={{ top: topOffset }}
        role="banner"
      >
        <motion.div
          style={{ opacity: location.pathname === '/' ? headerOpacity : 1 }}
          className="absolute inset-0 bg-stone-50/90 backdrop-blur-md border-b border-stone-200"
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 py-4 flex items-center">
          {/* Logo — left */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="focus:outline-none focus:text-primary-600 rounded-xl shrink-0"
          >
            <Logo />
          </Link>

          {/* Nav links — centered in remaining space */}
          <nav className="hidden xl:flex items-center justify-center gap-8 2xl:gap-10 flex-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              item === 'Services' ? (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={handleServiceHoverIn}
                  onMouseLeave={handleServiceHoverOut}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    onFocus={handleServiceHoverIn}
                    className="text-xs font-bold uppercase tracking-widest text-secondary-900 hover:text-primary-600 transition-colors relative group py-2 focus:outline-none focus:text-primary-600 flex items-center gap-1"
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                  >
                    {item}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-full group-focus:w-full" />
                  </button>
                </div>
              ) : (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-xs font-bold uppercase tracking-widest text-secondary-900 hover:text-primary-600 transition-colors relative group py-2 focus:outline-none focus:text-primary-600"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-full group-focus:w-full" />
                </button>
              )
            ))}
          </nav>

          {/* Book Appointment — right */}
          <div className="hidden xl:block shrink-0">
            <Button size="md" onClick={() => routerNavigate('/contact')}>Book Appointment</Button>
          </div>

          <button
            className="xl:hidden p-3 rounded-full bg-secondary-900 text-white z-50 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop Mega Menu */}
        <div
          onMouseEnter={handleServiceHoverIn}
          onMouseLeave={handleServiceHoverOut}
        >
          <ServicesMegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 bg-secondary-900 z-[60] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <Logo variant="light" />
              <button
                onClick={onMenuClose}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 md:px-12 flex flex-col" aria-label="Mobile navigation">
              <div className="flex flex-col gap-4 my-auto">
                {MOBILE_NAV_ITEMS.map((item, i) => (
                  <React.Fragment key={item}>
                    {item === 'Services' ? (
                      <div>
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                          className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-light text-stone-200 hover:text-white transition-all flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white/50 rounded w-full"
                          aria-expanded={mobileServicesExpanded}
                        >
                          Services
                          <ChevronDown size={24} className={`transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                        </motion.button>

                        <AnimatePresence>
                          {mobileServicesExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-4 pb-2 space-y-6">
                                {servicesByCategory.map(({ category, services }) => (
                                  <div key={category}>
                                    <p className="text-xs font-bold text-primary-400 uppercase tracking-[0.2em] mb-2">{category}</p>
                                    <div className="space-y-1.5">
                                      {services.map(s => (
                                        <Link
                                          key={s.id}
                                          to={`/services/${s.id}`}
                                          onClick={onMenuClose}
                                          className="block text-lg text-stone-400 hover:text-white hover:pl-2 transition-all"
                                        >
                                          {s.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                        onClick={() => {
                          onMenuClose();
                          if (ROUTE_NAV_ITEMS[item]) {
                            routerNavigate(ROUTE_NAV_ITEMS[item]);
                          } else {
                            onNavigate(item.toLowerCase());
                          }
                        }}
                        className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-light text-stone-200 hover:text-white hover:pl-4 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                      >
                        {item}
                      </motion.button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/10 shrink-0"
              >
                <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Locate Us</p>
                <p className="text-white text-lg">Suseela Hospital, SRK Puram, Kothapet, LB Nagar</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Navbar.displayName = 'Navbar';
