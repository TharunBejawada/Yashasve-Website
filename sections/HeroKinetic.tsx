import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Star, Medal as Award } from '@phosphor-icons/react';
import { DOCTOR_PROFILE } from '@/constants';

interface HeroKineticProps {
  onBook: () => void;
}

const ACCENT_WORDS = ['medical', 'personal', 'serious'];

export const HeroKinetic: React.FC<HeroKineticProps> = ({ onBook }) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 60]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const [accentIndex, setAccentIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setAccentIndex((i) => (i + 1) % ACCENT_WORDS.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative min-h-[100dvh] bg-primary-50/40 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Header blend: scrim under the fixed navbar so it dissolves into the hero
          instead of sitting on it as a hard band. Covers full width. */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-50/80 via-primary-50/40 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      <div className="relative min-h-[100dvh] lg:grid lg:grid-cols-12 flex flex-col">
        {/* ═══════════ IMAGE COLUMN ═══════════ */}
        <div className="relative lg:col-span-5 h-[58vh] sm:h-[62vh] lg:h-screen order-1 lg:order-none overflow-hidden bg-stone-200">
          <motion.div
            style={prefersReducedMotion ? {} : { y: imageY, scale: imageScale }}
            className="absolute inset-0"
          >
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.25, 0.4, 0.25, 1] }}
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1400&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* Warm color wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-secondary-900/20 mix-blend-multiply pointer-events-none" aria-hidden="true" />

          {/* Top scrim on image — helps the nav bar sit naturally over the photo */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-secondary-900/50 to-transparent pointer-events-none" aria-hidden="true" />

          {/* Edition mark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute left-6 sm:left-8 bottom-8 z-10 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-white/70" />
            <span className="font-heading italic text-white/90 text-sm tracking-wide">No. 01</span>
          </motion.div>

          {/* Vertical section marker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-white/60 text-[10px] font-bold uppercase tracking-[0.5em]"
            style={{ writingMode: 'vertical-rl' }}
          >
            Dermatology
          </motion.div>
        </div>

        {/* ═══════════ TEXT COLUMN ═══════════ */}
        <div className="relative lg:col-span-7 flex items-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 pt-28 pb-14 lg:py-0 order-2 lg:order-none">
          <div className="hidden lg:block absolute top-14 right-14 w-20 h-20 border-t border-r border-stone-300" aria-hidden="true" />

          <div className="w-full max-w-2xl relative z-[2]">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-3 mb-10 lg:mb-14"
            >
              <div className="h-px w-8 bg-stone-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                A Dermatology Practice
              </span>
            </motion.div>

            {/* Manifesto */}
            <h1
              id="hero-heading"
              className="font-heading font-normal text-secondary-900 leading-[1.02] tracking-[-0.01em] mb-10 lg:mb-12"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 5rem)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Clear skin
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                is not cosmetic&thinsp;&mdash;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                it is{' '}
                <span className="relative inline-block align-baseline">
                  {/* Invisible width-reserver: sizes the container to the widest word so
                      the sentence never reflows when the accent swaps. */}
                  <span className="invisible italic font-light" aria-hidden="true">
                    {ACCENT_WORDS.reduce((a, b) => (a.length >= b.length ? a : b))}.
                  </span>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={accentIndex}
                      initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 italic text-primary-600 font-light whitespace-nowrap"
                    >
                      {ACCENT_WORDS[accentIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.span>
            </h1>

            {/* Byline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-8 lg:mb-10"
            >
              <div className="h-px w-14 bg-stone-400 mb-5" />
              <p className="text-stone-500 text-sm tracking-wide leading-relaxed">
                <span className="text-secondary-900 font-medium">Suseela Hospital</span>
                <span className="mx-2.5 text-stone-300">—</span>
                RK&nbsp;Puram, Hyderabad
              </p>
            </motion.div>

            {/* ═══ CREDIBILITY ROW ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 lg:mb-12 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-500"
            >
              <span className="flex items-center gap-1.5">
                <Star size={13} className="fill-primary-500 text-primary-500" aria-hidden="true" />
                <span className="text-secondary-900 font-bold">{DOCTOR_PROFILE.googleRating.score}</span>
                <span>Google Reviews</span>
              </span>
              <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <Award size={13} className="text-primary-600" aria-hidden="true" />
                <span className="text-secondary-900 font-bold">{DOCTOR_PROFILE.heroHighlight.value}</span>
                <span>{DOCTOR_PROFILE.heroHighlight.label}</span>
              </span>
              <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
              <span>Est.&nbsp;{DOCTOR_PROFILE.established}</span>
            </motion.div>

            {/* ═══ CTA — primary button + ghost link ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
            >
              <button
                onClick={onBook}
                className="group inline-flex items-center gap-3 bg-secondary-900 text-white hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-50 transition-colors px-7 py-4 rounded-full"
              >
                <span className="font-heading text-base md:text-lg">Book Consultation</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-focus:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href={`tel:${DOCTOR_PROFILE.phone}`}
                className="group inline-flex items-center gap-2 text-secondary-900 hover:text-primary-700 focus:outline-none focus:text-primary-700 transition-colors py-2"
              >
                <span className="text-sm font-medium tracking-wide relative">
                  Or call the clinic
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-current" aria-hidden="true" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 pointer-events-none z-20"
        aria-hidden="true"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">
          Scroll
        </span>
        <div className="relative h-10 w-px bg-stone-300 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-0 h-4 bg-primary-600"
          />
        </div>
      </motion.div>
    </section>
  );
};

HeroKinetic.displayName = 'HeroKinetic';
