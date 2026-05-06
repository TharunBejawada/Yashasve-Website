// PARKED — alternative hero variant. Not imported anywhere.
// To restore: strip the leading '// ' from every line below and re-import in pages/HomePage.tsx.
export {};

// import React, { useState, useEffect } from 'react';
// import { CheckCircle2, Star } from 'lucide-react';
// import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
// import { DOCTOR_PROFILE } from '@/constants';
// import { Button, Reveal } from '@/components/ui';
// 
// interface HeroProps {
//   onBook: () => void;
// }
// 
// const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isMobile, setIsMobile] = useState(false);
// 
//   useEffect(() => {
//     const mq = window.matchMedia('(max-width: 767px)');
//     setIsMobile(mq.matches);
//     const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
//     mq.addEventListener('change', handler);
//     return () => mq.removeEventListener('change', handler);
//   }, []);
// 
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
//   const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
//   const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
// 
//   if (isMobile) {
//     return <div className="w-full h-full">{children}</div>;
//   }
// 
//   return (
//     <motion.div
//       onMouseMove={({ currentTarget, clientX, clientY }: React.MouseEvent) => {
//         const { left, top, width, height } = currentTarget.getBoundingClientRect();
//         x.set((clientX - left) / width - 0.5);
//         y.set((clientY - top) / height - 0.5);
//       }}
//       onMouseLeave={() => { x.set(0); y.set(0); }}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       className="relative w-full h-full"
//     >
//       {children}
//     </motion.div>
//   );
// };
// 
// export const Hero: React.FC<HeroProps> = ({ onBook }) => (
//   <section className="relative min-h-[100dvh] flex items-center pt-36 md:pt-40 pb-12 overflow-hidden bg-primary-50/40" aria-labelledby="hero-heading">
//     {/* Giant Watermark */}
//     <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20rem] sm:text-[30rem] md:text-[40rem] font-heading font-bold text-stone-200/40 pointer-events-none select-none z-0" aria-hidden="true">
//       Y
//     </div>
// 
//     {/* Ambient Blobs */}
//     <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
//       <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
//       <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-stone-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }} />
//       <div className="absolute bottom-[-10%] left-[10%] w-96 h-96 bg-primary-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }} />
//     </div>
// 
//     <div className="container mx-auto px-6 md:px-12 relative z-10">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
// 
//         {/* Left Content */}
//         <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative">
//           <Reveal delay={0.2}>
//             <div className="flex items-center gap-3 mb-8">
//               <span className="h-px w-12 bg-secondary-900" />
//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-900">
//                 Est. {DOCTOR_PROFILE.established}
//               </span>
//             </div>
//           </Reveal>
// 
//           <Reveal delay={0.4}>
//             <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-medium text-secondary-900 leading-[0.9] mb-8 tracking-tight">
//               Precision <br />
//               <span className="italic font-light text-primary-600 block pl-4">in every</span>
//               Detail.
//             </h1>
//           </Reveal>
// 
//           <Reveal delay={0.6}>
//             <p className="text-xl text-stone-600 font-light leading-relaxed mb-10 border-l border-primary-300 pl-6 max-w-md">
//               Your skin tells a story. At{' '}
//               <a href={DOCTOR_PROFILE.mapLink} target="_blank" rel="noopener noreferrer" className="font-bold text-secondary-900 underline decoration-primary-400 underline-offset-4 hover:text-primary-600 transition-colors">
//                 {DOCTOR_PROFILE.hospital}
//               </a>
//               , {DOCTOR_PROFILE.name} listens. Gentle, empathetic care combined with precise medical expertise to help you feel confident in your own skin.
//             </p>
//           </Reveal>
// 
//           <Reveal delay={0.8} className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
//             <Button size="lg" onClick={onBook} className="w-full sm:w-auto shadow-2xl shadow-secondary-900/20">
//               Book Consultation
//             </Button>
//             <div className="flex items-center gap-4 pl-4">
//               <div className="flex -space-x-3" aria-hidden="true">
//                 {['Y', 'S', 'P'].map((initial, i) => (
//                   <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-50 bg-stone-200 overflow-hidden flex items-center justify-center text-sm font-bold text-stone-500">
//                     {initial}
//                   </div>
//                 ))}
//               </div>
//               <div className="text-xs font-bold text-secondary-900">
//                 <div className="flex items-center gap-1">
//                   <Star size={12} className="fill-secondary-900" aria-hidden="true" /> {DOCTOR_PROFILE.googleRating.score}/5
//                 </div>
//                 <span className="font-normal text-stone-500">Trusted by {DOCTOR_PROFILE.stats[1]?.value} Patients</span>
//               </div>
//             </div>
//           </Reveal>
//         </div>
// 
//         {/* Right Content (3D Tilt Image) */}
//         <div className="lg:col-span-7 order-1 lg:order-2 h-[50vh] md:h-[70vh] w-full flex justify-center items-center perspective-1000">
//           <TiltCard>
//             <div className="relative w-full h-full max-w-lg mx-auto">
//               <div className="absolute inset-0 bg-stone-200 rounded-[2rem] transform translate-x-4 translate-y-4 shadow-none border border-stone-300" aria-hidden="true" />
//               <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-stone-100">
//                 {/* PLACEHOLDER: Replace with real doctor/clinic photo */}
//                 <img
//                   src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
//                   alt="Dermatology consultation room"
//                   className="w-full h-full object-cover"
//                   width={800}
//                   height={600}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </div>
// 
//               {/* Floating Card — Certified */}
//               <motion.div
//                 className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/50 max-w-[200px] animate-float"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 style={{ transform: "translateZ(50px)" }}
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
//                     <CheckCircle2 size={16} aria-hidden="true" />
//                   </div>
//                   <span className="font-bold text-sm text-secondary-900">Certified</span>
//                 </div>
//                 <p className="text-xs text-stone-600 leading-tight">Clinically Validated Technologies</p>
//               </motion.div>
// 
//               {/* Floating Card — Highlight Stat */}
//               <motion.div
//                 className="absolute top-10 -right-6 md:-right-12 bg-secondary-900 text-white p-4 rounded-xl shadow-2xl border border-white/10 animate-float"
//                 style={{ transform: "translateZ(30px)", animationDelay: '2s' }}
//                 initial={{ x: 20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 1.2 }}
//               >
//                 <div className="text-center">
//                   <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold">{DOCTOR_PROFILE.heroHighlight.value}</p>
//                   <p className="text-[10px] uppercase tracking-widest text-stone-300">{DOCTOR_PROFILE.heroHighlight.label}</p>
//                 </div>
//               </motion.div>
//             </div>
//           </TiltCard>
//         </div>
//       </div>
//     </div>
//   </section>
// );
// 
// Hero.displayName = 'Hero';
