import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, Calendar, MapPin, 
  ArrowRight, Shield, Clock, Star, 
  Instagram, Facebook, CheckCircle2,
  Stethoscope, Microscope, Sparkles, Droplet, Zap, Syringe, ScanFace, ShieldCheck,
  User, ArrowDown, ExternalLink, ChevronDown, MoveRight, Award, BookOpen, GraduationCap,
  ClipboardList, Search, Activity, Heart, MessageCircle, Plus, Mail, Gem, Settings
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { DOCTOR_PROFILE, SERVICES, FAQS, TESTIMONIALS } from './constants';
import { Button, Modal, SectionHeading, AccordionItem, Input, Textarea, cn, Reveal, FadeIn, BeforeAfterSlider } from './components/ui';
import { Service } from './types';

// Map icon string names to actual components
const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Microscope, Sparkles, Droplet, Zap, Syringe, ScanFace, ShieldCheck
};

// --- Brand Logo Component ---
const Logo = ({ className, showSubtext = true, variant = 'dark' }: { className?: string, showSubtext?: boolean, variant?: 'dark' | 'light' }) => (
  <div className={cn("flex items-center gap-3", className)}>
    {/* Monogram Icon */}
    <div className={cn(
      "relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl shadow-lg shrink-0 group hover:scale-105 transition-transform duration-300",
      variant === 'dark' 
        ? "bg-secondary-900 text-primary-400 border border-primary-900/10" 
        : "bg-white text-secondary-900 border border-white/10"
    )}>
      <span className={cn(
        "font-heading font-bold text-xl md:text-2xl italic pt-1 pr-0.5 transition-colors",
        variant === 'dark' ? "text-white group-hover:text-primary-400" : "text-secondary-900"
      )}>Y</span>
      {/* Precision Dot Accent Removed */}
    </div>
    
    {/* Typography */}
    <div className="flex flex-col justify-center">
      <h1 className={cn(
        "text-lg md:text-2xl font-heading font-bold leading-none tracking-tight",
        variant === 'dark' ? "text-secondary-900" : "text-white"
      )}>
        Dr. Yashasve
      </h1>
      {showSubtext && (
        <p className={cn(
          "text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold mt-1.5 border-l-2 pl-2 leading-none",
          variant === 'dark' ? "text-stone-500 border-primary-400" : "text-stone-400 border-white"
        )}>
          Suseela Hospital
        </p>
      )}
    </div>
  </div>
);

// Process Steps Data with Details
const PROCESS_STEPS = [
  { 
    step: "01", 
    title: "Consultation", 
    desc: "Detailed history taking and skin analysis.",
    icon: ClipboardList,
    fullDetails: {
      what: "A 20-30 minute in-depth session where Dr. Yashasve listens to your history, lifestyle factors, and skin concerns.",
      action: "We use Digital Dermoscopy to look beneath the skin surface.",
      outcome: "A clear understanding of your skin type and triggers."
    }
  },
  { 
    step: "02", 
    title: "Diagnosis", 
    desc: "Root cause analysis of your condition.",
    icon: Search,
    fullDetails: {
      what: "Clinical evaluation backed by science. We don't guess; we diagnose.",
      action: "If needed, minimal lab tests or skin scrapings are performed instantly.",
      outcome: "A definitive diagnosis explaining 'Why' this is happening."
    }
  },
  { 
    step: "03", 
    title: "Treatment", 
    desc: "Customized plan tailored to your lifestyle.",
    icon: Activity,
    fullDetails: {
      what: "A personalized prescription combining medical management and/or procedures.",
      action: "Prescriptions are kept minimal and effective. Procedures are scheduled if necessary.",
      outcome: "A roadmap to recovery with clear timelines on when to expect results."
    }
  },
  { 
    step: "04", 
    title: "Maintenance", 
    desc: "Long-term care and follow-up plan.",
    icon: Heart,
    fullDetails: {
      what: "Skin health is a journey, not a destination.",
      action: "We design a simplified skincare routine for you to maintain results at home.",
      outcome: "Sustainable, healthy skin without lifelong dependency on medicines."
    }
  }
];

// Content for the Marquee
const MARQUEE_ITEMS = [
  "Clinical Dermatology", "Acne Scar Revision", "Laser Hair Reduction", 
  "Anti-Aging & Fillers", "Pediatric Skin Care", "Hair Restoration"
];

// Duplicate testimonials for smoother infinite scroll
const SCROLLING_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

// --- 3D Tilt Card Component for Hero ---
const TiltCard = ({ children }: { children?: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <>
      {/* Mobile View: No Motion/Tilt to prevent layout bugs */}
      <div className="md:hidden w-full h-full block">
         {children}
      </div>

      {/* Desktop View: Full Tilt Interaction */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full hidden md:block"
      >
        {children}
      </motion.div>
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'All' | 'Skin' | 'Hair' | 'Aesthetic' | 'Medical'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedProcessStep, setSelectedProcessStep] = useState<typeof PROCESS_STEPS[0] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  // Scroll handler for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if(isMenuOpen || isBioOpen || isGalleryOpen || selectedService || selectedProcessStep) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen, isBioOpen, isGalleryOpen, selectedService, selectedProcessStep]);

  // Form handling
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your appointment request has been simulated.");
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-secondary-900 selection:text-white overflow-x-hidden text-stone-600">
      
      {/* --- Navigation --- */}
      <header className="fixed top-0 left-0 right-0 z-50">
         <motion.div 
           style={{ opacity: headerOpacity }}
           className="absolute inset-0 bg-stone-50/90 backdrop-blur-md border-b border-stone-200"
         />
         
         <div className="container mx-auto px-6 md:px-12 relative z-10 py-4 flex items-center justify-between">
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo />
            </div>

            {/* Changed from md:flex to xl:flex to prevent cramping on medium screens */}
            <nav className="hidden xl:flex items-center gap-8 2xl:gap-12">
              {['About', 'Services', 'Process', 'Results', 'Voices', 'FAQ'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xs font-bold uppercase tracking-widest text-secondary-900 hover:text-primary-600 transition-colors relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button size="md" onClick={() => scrollToSection('contact')}>Book Appointment</Button>
            </nav>

            {/* Hamburger (Only Open) Visible until xl */}
            <button 
              className="xl:hidden p-3 rounded-full bg-secondary-900 text-white z-50 hover:scale-105 transition-transform" 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
         </div>
      </header>

      {/* --- Mobile Menu (Full Screen Overlay) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 bg-secondary-900 z-[60] flex flex-col"
          >
             {/* Menu Header with Logo and Close */}
             <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
                <Logo variant="light" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                   <X size={20} />
                </button>
             </div>

             {/* Scrollable Content */}
             <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 flex flex-col">
                <div className="flex flex-col gap-6 my-auto">
                  {['About', 'Services', 'Process', 'Results', 'Voices', 'FAQ', 'Contact'].map((item, i) => (
                    <motion.button 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      key={item} 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-left text-5xl font-heading font-light text-stone-200 hover:text-white hover:pl-4 transition-all"
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="mt-12 pt-12 border-t border-white/10 shrink-0"
                 >
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Locate Us</p>
                    <p className="text-white text-lg">Suseela Hospital, RK Puram</p>
                 </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Editorial Hero Section (Premium 3D Tilt) --- */}
      <section className="relative min-h-[100dvh] flex items-center pt-32 pb-12 overflow-hidden bg-[#faf9f6]">
        
        {/* Giant Watermark Letter */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[40rem] font-heading font-bold text-stone-200/40 pointer-events-none select-none z-0">
          Y
        </div>

        {/* Ambient Background Blobs (New) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
           <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-stone-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
           <div className="absolute bottom-[-10%] left-[10%] w-96 h-96 bg-primary-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative">
              <Reveal delay={0.2}>
                 <div className="flex items-center gap-3 mb-8">
                    <span className="h-px w-12 bg-secondary-900"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-900">Est. 2016</span>
                 </div>
              </Reveal>
              
              <Reveal delay={0.4}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-medium text-secondary-900 leading-[0.9] mb-8 tracking-tight">
                  Precision <br /> 
                  <span className="italic font-light text-primary-600 block pl-4">in every</span>
                  Detail.
                </h1>
              </Reveal>

              <Reveal delay={0.6}>
                {/* Updated Hero Text with Hyperlink and Humane Tone */}
                <p className="text-xl text-stone-600 font-light leading-relaxed mb-10 border-l border-primary-300 pl-6 max-w-md">
                   Your skin tells a story. At <a href={DOCTOR_PROFILE.mapLink} target="_blank" rel="noreferrer" className="font-bold text-secondary-900 underline decoration-primary-400 underline-offset-4 hover:text-primary-600 transition-colors">Suseela Hospital</a>, Dr. Yashasve listens. We combine gentle, empathetic care with precise medical expertise to help you feel comfortable and confident in your own skin.
                </p>
              </Reveal>

              <Reveal delay={0.8} className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto shadow-2xl shadow-secondary-900/20">
                  Book Consultation
                </Button>
                
                <div className="flex items-center gap-4 pl-4">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-50 bg-stone-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                        </div>
                      ))}
                   </div>
                   <div className="text-xs font-bold text-secondary-900">
                      <div className="flex items-center gap-1">
                        <Star size={12} className="fill-secondary-900" /> 4.9/5
                      </div>
                      <span className="font-normal text-stone-500">Trusted by 5k+ Patients</span>
                   </div>
                </div>
              </Reveal>
            </div>

            {/* Right Content (3D Tilt Image) */}
            <div className="lg:col-span-7 order-1 lg:order-2 h-[50vh] md:h-[70vh] w-full flex justify-center items-center perspective-1000">
               <TiltCard>
                 <div className="relative w-full h-full max-w-lg mx-auto">
                    {/* Main Image Frame */}
                    <div className="absolute inset-0 bg-stone-200 rounded-[2rem] transform translate-x-4 translate-y-4 shadow-none border border-stone-300"></div>
                    <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-stone-100">
                       <img 
                          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                          alt="Precision Dermatology" 
                          className="w-full h-full object-cover"
                       />
                       {/* Overlay Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Floating Glass Card 1 - Added Float Animation */}
                    <motion.div 
                      className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/50 max-w-[200px] animate-float"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      style={{ transform: "translateZ(50px)" }}
                    >
                       <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                             <CheckCircle2 size={16} />
                          </div>
                          <span className="font-bold text-sm text-secondary-900">Certified</span>
                       </div>
                       <p className="text-xs text-stone-600 leading-tight">US-FDA Approved Technologies</p>
                    </motion.div>

                    {/* Floating Glass Card 2 (Top Right) - Added Float Animation with Delay */}
                    <motion.div 
                      className="absolute top-10 -right-6 md:-right-12 bg-secondary-900 text-white p-4 rounded-xl shadow-2xl border border-white/10 animate-float"
                      style={{ transform: "translateZ(30px)", animationDelay: '2s' }}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                       <div className="text-center">
                          <p className="text-2xl font-heading font-bold">15+</p>
                          <p className="text-[10px] uppercase tracking-widest text-stone-400">Awards</p>
                       </div>
                    </motion.div>
                 </div>
               </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- Marquee (Updated with Content Relevant Text) --- */}
      <div className="bg-secondary-900 text-stone-100 py-6 overflow-hidden whitespace-nowrap border-y border-white/5">
        <div className="inline-block animate-[marquee_25s_linear_infinite]">
          {[...Array(4)].map((_, groupIndex) => (
             <React.Fragment key={groupIndex}>
               {MARQUEE_ITEMS.map((item, i) => (
                  <span key={`${groupIndex}-${i}`} className="mx-12 text-sm font-heading italic text-stone-400">
                    {item} <span className="mx-4 not-italic font-sans text-[10px] text-primary-500 opacity-60">●</span> 
                  </span>
               ))}
             </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      {/* --- About Section (Glassmorphism Badge) --- */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Image Column */}
            <div className="relative order-2 lg:order-1 lg:sticky lg:top-32">
               <Reveal>
                 {/* Doctor Image - Full Color */}
                 <div className="aspect-[4/5] rounded-lg overflow-hidden relative group shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                      alt="Dr. Yashasve" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* MD Badge - Transparent Glassmorphism */}
                    <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-xl p-5 shadow-2xl max-w-[240px] border border-white/40 rounded-sm">
                       <div className="absolute left-0 top-4 bottom-4 w-1 bg-secondary-900"></div>
                       <div className="pl-4">
                         <h5 className="font-heading font-bold text-xl text-secondary-900 leading-tight">MD Dermatology</h5>
                         <p className="text-[10px] text-secondary-800 uppercase tracking-widest mt-1 font-bold">Gold Medalist (DVL)</p>
                       </div>
                    </div>
                 </div>

                 {/* Stats Grid - Moved Below Image */}
                 <div className="grid grid-cols-2 gap-3 mt-6">
                    {/* Experience */}
                    <div className="p-4 bg-stone-50 border border-stone-200 text-center rounded-lg hover:border-secondary-900 transition-all group hover:shadow-lg">
                      <div className="flex justify-center mb-3 text-primary-600 group-hover:scale-110 transition-transform">
                        <Award size={24} strokeWidth={1.5} />
                      </div>
                      <h5 className="font-heading font-bold text-2xl lg:text-3xl text-secondary-900 mb-1">8+</h5>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Years Exp.</p>
                    </div>
                    
                    {/* Happy Patients */}
                    <div className="p-4 bg-stone-50 border border-stone-200 text-center rounded-lg hover:border-secondary-900 transition-all group hover:shadow-lg">
                      <div className="flex justify-center mb-3 text-primary-600 group-hover:scale-110 transition-transform">
                        <User size={24} strokeWidth={1.5} />
                      </div>
                      <h5 className="font-heading font-bold text-2xl lg:text-3xl text-secondary-900 mb-1">5k+</h5>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Happy Patients</p>
                    </div>

                    {/* Procedures */}
                    <div className="p-4 bg-stone-50 border border-stone-200 text-center rounded-lg hover:border-secondary-900 transition-all group hover:shadow-lg">
                      <div className="flex justify-center mb-3 text-primary-600 group-hover:scale-110 transition-transform">
                         <Settings size={24} strokeWidth={1.5} />
                      </div>
                      <h5 className="font-heading font-bold text-2xl lg:text-3xl text-secondary-900 mb-1">6,000+</h5>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Procedures</p>
                    </div>

                    {/* Treatments Done */}
                    <div className="p-4 bg-stone-50 border border-stone-200 text-center rounded-lg hover:border-secondary-900 transition-all group hover:shadow-lg">
                       <div className="flex justify-center mb-3 text-primary-600 group-hover:scale-110 transition-transform">
                         <Gem size={24} strokeWidth={1.5} />
                      </div>
                       <h5 className="font-heading font-bold text-2xl lg:text-3xl text-secondary-900 mb-1">30k+</h5>
                       <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Treatments</p>
                    </div>
                 </div>
               </Reveal>
            </div>
            
            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-px w-10 bg-secondary-900"></div>
                   <h4 className="text-xs font-bold text-secondary-900 uppercase tracking-widest">The Doctor</h4>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-heading text-secondary-900 mb-8 leading-tight">
                  Restoring confidence through <span className="italic text-primary-600">healthy skin.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6 text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-10">
                  <p>{DOCTOR_PROFILE.bio}</p>
                  <p>Unlike quick fixes, Dr. Yashasve believes in a holistic, medical-first approach. Whether it's chronic acne or aesthetic refinement, the goal is always sustainable, natural-looking results.</p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" onClick={() => scrollToSection('contact')}>Schedule Consultation</Button>
                  <button 
                    onClick={() => setIsBioOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-secondary-900 hover:text-primary-600 transition-colors"
                  >
                     Read Full Bio <MoveRight size={16} />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section (Warm Cards) --- */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading subtitle="Curated treatments for every skin concern.">
            Our Expertise
          </SectionHeading>

          {/* Filter Tabs */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {['All', 'Skin', 'Hair', 'Aesthetic', 'Medical'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-full border",
                    activeTab === tab 
                      ? "bg-secondary-900 text-white border-secondary-900 shadow-xl" 
                      : "bg-white text-stone-400 border-stone-200 hover:border-secondary-900 hover:text-secondary-900"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.filter(s => activeTab === 'All' || s.category === activeTab).map((service, index) => {
              const Icon = iconMap[service.iconName] || Sparkles;
              return (
                <Reveal key={service.id} delay={index * 0.1}>
                  <div
                    className="group bg-white p-8 hover:bg-secondary-900 hover:text-white transition-all duration-500 cursor-pointer h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-2xl border border-stone-100 hover:border-secondary-900"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-secondary-900 mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    
                    <div className="z-10 relative">
                      <h3 className="text-lg font-heading font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                      {/* Increased text size for readability */}
                      <p className="text-stone-500 text-base font-light leading-relaxed group-hover:text-stone-400 mb-8 line-clamp-3">{service.shortDescription}</p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-stone-100 group-hover:border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-secondary-900 group-hover:text-primary-400 z-10">
                      <span>View</span>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Process Section (Interactive Modal - Cleaned Up) --- */}
      <section id="process" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading subtitle="A transparent, science-backed approach. Click to explore details.">
            Your Journey
          </SectionHeading>

          <div className="relative mt-16">
             {/* Connection Line (Desktop) */}
             <div className="absolute top-8 left-0 w-full h-px border-t-2 border-dashed border-stone-200 hidden md:block -z-0"></div>

             <div className="grid md:grid-cols-4 gap-8">
                 {PROCESS_STEPS.map((s, i) => (
                   <Reveal key={i} delay={i * 0.1}>
                      <button 
                        onClick={() => setSelectedProcessStep(s)}
                        className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm relative z-10 hover:-translate-y-2 transition-all duration-300 group w-full text-left hover:shadow-xl hover:border-primary-200 flex flex-col h-full"
                      >
                        {/* Interactive Plus Icon (Top Right) */}
                        <div className="absolute top-3 right-3 text-stone-300 group-hover:text-primary-500 transition-colors">
                           <Plus size={20} />
                        </div>

                        {/* Step Number */}
                        <div className="w-16 h-16 bg-stone-50 rounded-full border border-stone-200 flex items-center justify-center text-xl font-heading font-bold text-secondary-900 mb-6 mx-auto md:mx-0 group-hover:bg-secondary-900 group-hover:text-white transition-colors relative">
                          {s.step}
                        </div>
                        
                        <h4 className="text-xl font-heading font-medium text-secondary-900 mb-3 text-center md:text-left">{s.title}</h4>
                        {/* Increased Text Size */}
                        <p className="text-stone-500 text-base font-light leading-relaxed text-center md:text-left mb-6">{s.desc}</p>
                        
                        {/* Action affordance for better UX */}
                        <div className="mt-auto pt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:text-primary-800 transition-colors">
                           <span>Read Details</span>
                           <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                        </div>
                        
                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary-500 transition-all duration-300 group-hover:w-full rounded-b-lg"></div>
                      </button>
                   </Reveal>
                 ))}
             </div>
             
             <div className="mt-12 text-center">
               <Button onClick={() => scrollToSection('contact')}>Start Your Journey</Button>
             </div>
          </div>
        </div>
      </section>

      {/* --- Results Section (Dark Mode - Warm Charcoal) --- */}
      <section id="results" className="py-24 bg-secondary-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
             <div className="max-w-xl">
               <h2 className="text-4xl md:text-5xl font-heading font-normal mb-6">Clinical Results</h2>
               <p className="text-stone-400 font-light text-xl">Swipe to see the transformation. Real patients, real science.</p>
             </div>
             {/* Updated View All Button */}
             <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary-900" onClick={() => setIsGalleryOpen(true)}>
                View All Gallery
             </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             <Reveal>
                <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=2070&auto=format&fit=crop"
                  label="Acne Scar Revision"
                />
                <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
                   <h4 className="text-xl font-heading">Acne Scar Treatment</h4>
                   <span className="text-xs uppercase tracking-widest text-primary-400">4 Months</span>
                </div>
             </Reveal>

             <Reveal delay={0.2}>
                <BeforeAfterSlider 
                   beforeImage="https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=1974&auto=format&fit=crop"
                   afterImage="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop"
                   label="Skin Rejuvenation"
                />
                <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
                   <h4 className="text-xl font-heading">Hydration & Glow</h4>
                   <span className="text-xs uppercase tracking-widest text-primary-400">6 Weeks</span>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* --- Voices Section (Google Reviews UI - Updated) --- */}
      <section id="voices" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <SectionHeading subtitle="Trusted by thousands of patients.">
            Google Reviews
          </SectionHeading>
          
          {/* Google Summary Badge */}
          <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-4 bg-white shadow-lg border border-stone-100 rounded-full px-8 py-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                      <div className="flex gap-1 text-yellow-400">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                      </div>
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mt-0.5">5.0 Rating based on 54 reviews</span>
                  </div>
              </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="relative w-full overflow-hidden mask-linear-fade py-12">
           <div className="flex gap-6 w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] pl-6 md:pl-12">
             {SCROLLING_TESTIMONIALS.map((t, i) => (
                <div key={`${t.id}-${i}`} className="w-[350px] md:w-[400px] shrink-0 bg-white p-6 h-full flex flex-col border border-stone-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 rounded-xl relative">
                   <div className="flex items-start justify-between mb-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-400 text-lg uppercase">
                              {t.name.charAt(0)}
                          </div>
                          <div>
                              <div className="font-bold text-sm text-secondary-900">{t.name}</div>
                              <div className="text-[10px] text-stone-400">2 reviews</div>
                          </div>
                       </div>
                       <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-5 h-5 opacity-50 grayscale" />
                   </div>
                   
                   <div className="flex items-center gap-2 mb-3">
                       <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                       </div>
                       <span className="text-xs text-stone-400">{t.date || "1 month ago"}</span>
                   </div>

                   <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-4">
                      {t.text}
                   </p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <SectionHeading subtitle="Everything you need to know.">
             Common Questions
          </SectionHeading>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <Reveal key={faq.id} delay={index * 0.1}>
                <AccordionItem
                  title={faq.question}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(index === openFaqIndex ? null : index)}
                >
                  <p className="text-lg">{faq.answer}</p>
                </AccordionItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact & Location Section (Refined Layout) --- */}
      <section id="contact" className="py-24 bg-stone-100/50">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Left: Map Card */}
            <Reveal className="h-full min-h-[500px] w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 order-2 lg:order-1">
              <iframe 
                width="100%" 
                height="100%" 
                className="absolute inset-0 w-full h-full grayscale-[20%]"
                frameBorder="0" 
                style={{ border: 0 }}
                src={DOCTOR_PROFILE.mapLink}
                allowFullScreen
              ></iframe>
              
              {/* Floating Location Card Overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs border border-stone-200">
                 <h4 className="font-bold text-secondary-900 text-lg mb-1">{DOCTOR_PROFILE.hospital}</h4>
                 <p className="text-sm text-stone-500 mb-3">{DOCTOR_PROFILE.location}</p>
                 <div className="flex items-center gap-1 mb-4">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-secondary-900 ml-2">5.0 (54 Reviews)</span>
                 </div>
                 <a 
                   href={DOCTOR_PROFILE.mapLink} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="text-xs font-bold text-primary-600 hover:text-primary-800 uppercase tracking-widest flex items-center gap-2"
                 >
                   View Larger Map <ExternalLink size={12} />
                 </a>
              </div>
            </Reveal>

            {/* Right: Appointment Form */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
               <Reveal>
                  <div className="flex items-center gap-2 mb-6">
                     <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                     <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Book An Appointment</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading text-secondary-900 mb-6 leading-tight">
                    Reach out to <span className="text-primary-600 italic">us today!</span>
                  </h2>
                  <p className="text-stone-600 text-lg mb-10 font-light">
                    It's time to take control of your skin health! Booking your appointment is easy and fast. Choose a time that works for you.
                  </p>
               </Reveal>

               <Reveal delay={0.2}>
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <Input required placeholder="Full Name Here" />
                       <Input required type="tel" placeholder="Phone Number" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       <Input required type="email" placeholder="Email Address" />
                       <div className="relative">
                          <select className="flex h-14 w-full rounded-none border-b border-secondary-900/20 bg-transparent px-0 py-2 text-base text-stone-600 focus:outline-none focus:border-secondary-900 appearance-none cursor-pointer">
                            <option value="" disabled selected>Select Service</option>
                            <option>General Dermatology</option>
                            <option>Acne & Scars</option>
                            <option>Hair Loss Treatment</option>
                            <option>Aesthetics / Anti-Aging</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="relative">
                         <Input required type="date" className="uppercase text-stone-500" />
                         <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} />
                       </div>
                       <div className="relative">
                         <Input required type="time" className="text-stone-500" />
                         <Clock className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} />
                       </div>
                    </div>

                    <Textarea placeholder="Description here about service or your problem..." />

                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                       <Button type="submit" size="lg" className="w-full sm:w-auto">Book Appointment</Button>
                       <a href={`https://wa.me/${DOCTOR_PROFILE.whatsapp}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                          <Button type="button" variant="secondary" size="lg" className="w-full flex items-center gap-2 bg-secondary-900 text-white hover:bg-secondary-800">
                             <MessageCircle size={18} /> Chat on WhatsApp
                          </Button>
                       </a>
                    </div>
                 </form>
               </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer (Updated) --- */}
      <footer className="bg-secondary-900 text-stone-300 py-20 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
             
             {/* Brand Column */}
             <div className="space-y-6">
               <Logo variant="dark" showSubtext={false} />
               <p className="text-stone-400 font-light leading-relaxed">
                 Evidence-based dermatological care in the heart of Hyderabad. Restoring confidence through science and empathy.
               </p>
               <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <Instagram size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <Facebook size={18} />
                 </a>
                 <a href={`mailto:${DOCTOR_PROFILE.email}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <Mail size={18} />
                 </a>
               </div>
             </div>

             {/* Quick Links */}
             <div>
                <h4 className="text-white font-heading text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm font-light">
                   {['About Doctor', 'Our Services', 'Patient Results', 'Testimonials', 'Book Appointment'].map((item) => (
                      <li key={item}>
                        <button onClick={() => scrollToSection(item.toLowerCase().split(' ')[0])} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                           <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           {item}
                        </button>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Services */}
             <div>
                <h4 className="text-white font-heading text-lg mb-6">Treatments</h4>
                <ul className="space-y-3 text-sm font-light">
                   {SERVICES.slice(0, 5).map((s) => (
                      <li key={s.id}>
                         <button onClick={() => setSelectedService(s)} className="hover:text-primary-400 transition-colors text-left">
                            {s.title}
                         </button>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Contact */}
             <div>
                <h4 className="text-white font-heading text-lg mb-6">Contact Us</h4>
                <ul className="space-y-4 text-sm font-light">
                   <li className="flex gap-4">
                      <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                      <span>{DOCTOR_PROFILE.hospital},<br/>{DOCTOR_PROFILE.location}</span>
                   </li>
                   <li className="flex gap-4">
                      <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                      <a href={`tel:${DOCTOR_PROFILE.phone}`} className="hover:text-white transition-colors">{DOCTOR_PROFILE.phone}</a>
                   </li>
                   
                   {/* Google Review Badge */}
                   <li className="pt-4">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                         <div className="bg-white p-1.5 rounded text-secondary-900">
                            <span className="font-bold text-lg leading-none">G</span>
                         </div>
                         <div>
                            <div className="flex text-yellow-400 text-[10px] gap-0.5 mb-1">
                               <Star size={10} className="fill-current" />
                               <Star size={10} className="fill-current" />
                               <Star size={10} className="fill-current" />
                               <Star size={10} className="fill-current" />
                               <Star size={10} className="fill-current" />
                            </div>
                            <p className="text-xs text-stone-300 font-medium">4.9/5 Rating on Google</p>
                         </div>
                      </div>
                   </li>
                </ul>
             </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6 text-xs text-stone-500 uppercase tracking-wider">
            <p>© {new Date().getFullYear()} Dr. Yashasve. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Sticky Mobile CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-stone-200 p-4 md:hidden z-40 flex items-center gap-4 safe-area-pb">
        <a href={`tel:${DOCTOR_PROFILE.phone}`} className="flex-1">
          <Button variant="outline" className="w-full text-xs py-4 border-secondary-900 text-secondary-900">Call Now</Button>
        </a>
        <Button onClick={() => scrollToSection('contact')} className="flex-1 text-xs py-4">
          Book Appointment
        </Button>
      </div>

      {/* --- Floating WhatsApp CTA (Desktop/All) --- */}
      {/* Updated to match secondary-900 Brand Color */}
      <motion.a 
        href={`https://wa.me/${DOCTOR_PROFILE.whatsapp}`} 
        target="_blank" 
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-secondary-900 text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group ring-2 ring-white/20"
      >
        <MessageCircle size={24} className="text-white fill-white md:w-7 md:h-7" />
        <span className="absolute right-full mr-4 bg-white text-secondary-900 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
           Chat with us
        </span>
      </motion.a>

      {/* --- Service Modal (Fixed Padding) --- */}
      {selectedService && (
        <Modal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          title={selectedService.title}
          footer={
             <div className="flex justify-end w-full">
               <Button onClick={() => { setSelectedService(null); scrollToSection('contact'); }} className="w-full md:w-auto shadow-lg">
                 Schedule Consultation
               </Button>
             </div>
          }
        >
          {/* Content without sticky button overlap */}
          <div className="space-y-8">
            <div className="aspect-video w-full rounded-sm bg-stone-100 mb-6 overflow-hidden relative">
              <img 
                 src="https://images.unsplash.com/photo-1607613009820-a29f7bb6dc2d?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover" 
                 alt="Service Detail" 
              />
            </div>

            <div>
              <h4 className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-3">Overview</h4>
              <p className="text-stone-600 font-light leading-relaxed text-lg">{selectedService.fullDescription}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 border border-stone-100">
                <h4 className="font-bold text-secondary-900 mb-3 flex items-center gap-2">
                  <User size={18} /> Ideal Candidate
                </h4>
                <p className="text-base text-stone-600 font-light">{selectedService.candidates}</p>
              </div>
              <div className="bg-stone-50 p-6 border border-stone-100">
                <h4 className="font-bold text-secondary-900 mb-3 flex items-center gap-2">
                  <Clock size={18} /> Downtime
                </h4>
                <p className="text-base text-stone-600 font-light">{selectedService.downtime}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* --- Bio Modal --- */}
      <Modal 
        isOpen={isBioOpen} 
        onClose={() => setIsBioOpen(false)} 
        title="Dr. Yashasve"
      >
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
             <div className="w-24 h-24 shrink-0 bg-stone-100 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                  alt="Dr. Yashasve" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div>
                <p className="text-sm font-bold text-secondary-900 uppercase tracking-wide">Dermatologist & Cosmetologist</p>
                <p className="text-xs text-stone-500 mt-1 mb-3">MBBS, MD (DVL)</p>
                <p className="text-stone-600 font-light text-base italic">"My mission is to provide skin care that is as safe as it is effective, grounded in science and delivered with empathy."</p>
             </div>
          </div>

          <div className="border-t border-stone-100 pt-6">
            <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2"><GraduationCap size={18} /> Education</h4>
            <ul className="space-y-3 text-base text-stone-600 font-light">
               <li className="flex gap-3">
                 <span className="font-bold text-secondary-900 w-16 shrink-0">2016</span>
                 <span>MD Dermatology, Venereology & Leprosy (Gold Medalist)</span>
               </li>
               <li className="flex gap-3">
                 <span className="font-bold text-secondary-900 w-16 shrink-0">2013</span>
                 <span>MBBS, Osmania Medical College, Hyderabad</span>
               </li>
            </ul>
          </div>

          <div className="border-t border-stone-100 pt-6">
            <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2"><Award size={18} /> Memberships & Awards</h4>
            <ul className="list-disc pl-5 space-y-2 text-base text-stone-600 font-light">
               <li>Life Member, Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</li>
               <li>Member, Cosmetic Dermatology Society of India (CDSI)</li>
               <li>Awarded Best Paper Presentation at DERMACON 2015</li>
            </ul>
          </div>
          
          <div className="border-t border-stone-100 pt-6">
            <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2"><BookOpen size={18} /> Philosophy</h4>
            <p className="text-base text-stone-600 font-light leading-relaxed">
               Dr. Yashasve advocates for "Slow Dermatology" — focusing on restoring skin health over time rather than aggressive quick fixes that damage the skin barrier. He specializes in acne scar revision and anti-aging treatments that respect the natural anatomy of the face.
            </p>
          </div>
        </div>
      </Modal>

      {/* --- Process Step Detail Modal (NEW) --- */}
      <Modal
        isOpen={!!selectedProcessStep}
        onClose={() => setSelectedProcessStep(null)}
        title={selectedProcessStep ? `Step ${selectedProcessStep.step}: ${selectedProcessStep.title}` : ""}
      >
        {selectedProcessStep && (
          <div className="space-y-8">
             <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  {React.createElement(selectedProcessStep.icon, { size: 24, className: "text-primary-600" })}
                </div>
                <div>
                   <h4 className="font-bold text-secondary-900 mb-2 text-lg">What Happens Here?</h4>
                   <p className="text-stone-600 font-light text-base">{selectedProcessStep.fullDetails.what}</p>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-secondary-900 pl-6 py-2">
                   <h5 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">Our Action</h5>
                   <p className="text-secondary-900 text-lg">{selectedProcessStep.fullDetails.action}</p>
                </div>
                <div className="border-l-2 border-primary-500 pl-6 py-2">
                   <h5 className="font-bold text-xs uppercase tracking-widest text-stone-400 mb-2">Your Outcome</h5>
                   <p className="text-secondary-900 text-lg">{selectedProcessStep.fullDetails.outcome}</p>
                </div>
             </div>

             <div className="flex justify-end pt-8">
                <Button onClick={() => { setSelectedProcessStep(null); scrollToSection('contact'); }}>
                   Book This Step
                </Button>
             </div>
          </div>
        )}
      </Modal>

      {/* --- Gallery Modal --- */}
      <Modal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        title="Patient Transformation Gallery"
      >
        <div className="space-y-12">
           <p className="text-stone-500 font-light text-center max-w-2xl mx-auto mb-8 text-lg">
             Visual evidence of our clinical protocols. All results are from real patients at Suseela Hospital.
           </p>
           
           <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
             <div className="space-y-3">
               <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=2070&auto=format&fit=crop"
                  label="Severe Acne Treatment"
               />
               <div className="flex justify-between items-baseline">
                 <h5 className="font-bold text-secondary-900 text-lg">Active Acne</h5>
                 <span className="text-xs text-stone-500">6 Months Protocol</span>
               </div>
             </div>

             <div className="space-y-3">
               <BeforeAfterSlider 
                   beforeImage="https://images.unsplash.com/photo-1596704017254-9b1b18485b6f?q=80&w=1974&auto=format&fit=crop"
                   afterImage="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop"
                   label="Pigmentation Removal"
                />
                <div className="flex justify-between items-baseline">
                 <h5 className="font-bold text-secondary-900 text-lg">Melasma</h5>
                 <span className="text-xs text-stone-500">8 Sessions Laser</span>
               </div>
             </div>

             <div className="space-y-3">
               <BeforeAfterSlider 
                   beforeImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop"
                   afterImage="https://images.unsplash.com/photo-1504196606672-aef5c9cefcce?q=80&w=2070&auto=format&fit=crop"
                   label="Hair Restoration"
                />
                <div className="flex justify-between items-baseline">
                 <h5 className="font-bold text-secondary-900 text-lg">PRP Therapy</h5>
                 <span className="text-xs text-stone-500">6 Months</span>
               </div>
             </div>

             <div className="space-y-3">
               <BeforeAfterSlider 
                   beforeImage="https://images.unsplash.com/photo-1560932269-c603b5736730?q=80&w=1974&auto=format&fit=crop"
                   afterImage="https://images.unsplash.com/photo-1512258950269-e76550608796?q=80&w=1858&auto=format&fit=crop"
                   label="Anti-Aging"
                />
                <div className="flex justify-between items-baseline">
                 <h5 className="font-bold text-secondary-900 text-lg">Dermal Fillers</h5>
                 <span className="text-xs text-stone-500">Immediate Result</span>
               </div>
             </div>
           </div>
           
           <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 text-center">
              <p className="text-sm text-stone-500 font-light">
                 *Disclaimer: Results vary from person to person. Images are for educational purposes only.
              </p>
           </div>
        </div>
      </Modal>

    </div>
  );
}