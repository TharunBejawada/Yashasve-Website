import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { Footer } from '@/sections/Footer';
import type { Service } from '@/types';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change — must be instant and run after render
  const prevPathRef = React.useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      // Use requestAnimationFrame to ensure DOM has updated before scrolling
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      });
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    setIsMenuOpen(false);
    // If we're on the homepage, scroll directly
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      // Navigate to homepage then scroll (hash will be handled)
      navigate('/', { state: { scrollTo: id } });
    }
  }, [location.pathname, navigate]);

  // Handle scroll-to from navigation state (coming from another page)
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo && location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const goToService = useCallback((service: Service) => {
    navigate(`/services/${service.id}`);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-secondary-900 selection:text-white overflow-x-hidden text-stone-600">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:p-4 focus:text-secondary-900 focus:font-bold focus:shadow-lg focus:rounded"
      >
        Skip to main content
      </a>

      <TopBar />
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer onNavigate={scrollToSection} onSelectService={goToService} />
      <StickyMobileCTA onBookClick={() => scrollToSection('contact')} />
      <WhatsAppFAB />
    </div>
  );
};

Layout.displayName = 'Layout';
