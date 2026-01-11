import React, { Fragment, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Check, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Animations ---

interface RevealProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn: React.FC<RevealProps> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Before/After Slider ---
interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  // Global mouse up to catch drags that leave the container
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl cursor-ew-resize select-none group touch-none"
      onMouseMove={(e) => isDragging && handleMove(e)}
      onTouchMove={(e) => handleMove(e)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute top-4 right-4 bg-secondary-900/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
        After
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur text-secondary-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
           <div className="flex gap-0.5">
             <ArrowLeft size={12} className="text-secondary-900" />
             <ArrowRight size={12} className="text-secondary-900" />
           </div>
        </div>
      </div>

      {label && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white z-10">
          <p className="font-heading font-medium text-lg">{label}</p>
        </div>
      )}
    </div>
  );
};

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-secondary-900 text-white hover:bg-secondary-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 rounded-full',
      secondary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md rounded-full',
      outline: 'border border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white rounded-full',
      ghost: 'text-secondary-900 hover:bg-primary-100 rounded-lg',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-xs font-bold uppercase tracking-wider',
      md: 'px-8 py-4 text-xs font-bold uppercase tracking-widest',
      lg: 'px-10 py-5 text-sm font-bold uppercase tracking-widest',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// --- Modal ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-secondary-900/40 backdrop-blur-md"
          />
          {/* Modal Content */}
          <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl bg-white rounded-t-3xl md:rounded-3xl shadow-2xl pointer-events-auto flex flex-col max-h-[85vh] md:max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary-100 bg-primary-50/50 shrink-0">
                <h3 className="text-2xl font-heading font-medium text-secondary-900">{title}</h3>
                <button onClick={onClose} className="p-2 rounded-full bg-white hover:bg-primary-100 transition-colors shadow-sm border border-slate-100">
                  <X className="w-5 h-5 text-secondary-800" />
                </button>
              </div>
              
              {/* Scrollable Content */}
              <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                {children}
              </div>

              {/* Fixed Footer */}
              {footer && (
                <div className="p-6 border-t border-stone-100 bg-white shrink-0 flex justify-end">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

// --- Input & Form Elements ---
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-14 w-full rounded-none border-b border-secondary-900/20 bg-transparent px-0 py-2 text-base placeholder:text-slate-400 focus:outline-none focus:border-secondary-900 transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full rounded-none border-b border-secondary-900/20 bg-transparent px-0 py-2 text-base placeholder:text-slate-400 focus:outline-none focus:border-secondary-900 transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// --- Section Heading ---
interface SectionHeadingProps {
  children?: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle, align = 'center' }) => (
  <Reveal className={cn("mb-20", align === 'center' ? "mx-auto text-center max-w-3xl" : "text-left max-w-xl")}>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-secondary-900 mb-6 leading-tight">
      {children}
    </h2>
    {subtitle && <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">{subtitle}</p>}
  </Reveal>
);

// --- Accordion ---
interface AccordionItemProps {
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-secondary-900/10 mb-2">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-heading text-xl md:text-2xl text-secondary-900 group-hover:text-primary-600 transition-colors">{title}</span>
        <ChevronDown className={cn("w-6 h-6 text-secondary-400 transition-transform duration-300", isOpen && "transform rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-slate-600 font-light leading-relaxed text-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};