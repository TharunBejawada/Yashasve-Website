// PARKED — alternative hero variant. Not imported anywhere.
// To restore: strip the leading '// ' from every line below and re-import in pages/HomePage.tsx.
export {};

// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { DOCTOR_PROFILE } from '@/constants';
// 
// interface HeroEditorialProps {
//   onBook: () => void;
// }
// 
// // Editorial Print Magazine hero — alternative to Hero.tsx for comparison
// export const HeroEditorial: React.FC<HeroEditorialProps> = ({ onBook }) => (
//   <section
//     className="relative min-h-[100dvh] bg-stone-50 flex flex-col lg:grid lg:grid-cols-2"
//     aria-labelledby="hero-heading"
//   >
//     {/* IMAGE — full bleed, no frame, no tilt */}
//     <div className="relative h-[55vh] lg:h-screen lg:sticky lg:top-0 order-1 lg:order-none">
//       {/* PLACEHOLDER: Replace with real editorial portrait of Dr. Yashasve */}
//       <img
//         src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1600&auto=format&fit=crop"
//         alt=""
//         className="w-full h-full object-cover"
//       />
//       {/* Minimal bottom overlay so text doesn't compete */}
//       <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-50/40 to-transparent pointer-events-none" />
//     </div>
// 
//     {/* CONTENT — baseline-grid aligned, generous whitespace */}
//     <div className="order-2 lg:order-none flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-0">
//       <div className="w-full max-w-xl">
//         {/* Issue marker — like a magazine edition */}
//         <div className="flex items-baseline gap-4 mb-12 lg:mb-20">
//           <span className="font-heading italic text-xl text-primary-600">No. 01</span>
//           <span className="h-px flex-1 bg-stone-300" />
//           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
//             Dermatology
//           </span>
//         </div>
// 
//         {/* Doctor name — the hero */}
//         <h1
//           id="hero-heading"
//           className="font-heading font-normal text-secondary-900 leading-[0.95] mb-8"
//           style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
//         >
//           {DOCTOR_PROFILE.name.replace('Dr. ', '')}
//           <span className="block font-heading italic font-light text-stone-500 text-2xl md:text-3xl mt-3">
//             M.B.B.S., M.D.
//           </span>
//         </h1>
// 
//         {/* Role — quiet, descriptive */}
//         <div className="space-y-1 mb-12 text-stone-600">
//           <p className="text-lg font-light leading-relaxed">Consultant Dermatologist</p>
//           <p className="text-lg font-light leading-relaxed italic text-stone-500">&amp; Cosmetologist</p>
//         </div>
// 
//         {/* Location — like a byline */}
//         <div className="mb-14 pt-6 border-t border-stone-300 text-sm text-stone-500">
//           <p className="font-medium text-secondary-900 mb-0.5">{DOCTOR_PROFILE.hospital}</p>
//           <p>{DOCTOR_PROFILE.location} &middot; Est. {DOCTOR_PROFILE.established}</p>
//         </div>
// 
//         {/* One CTA — no second button, no stats, no avatars */}
//         <button
//           onClick={onBook}
//           className="group inline-flex items-baseline gap-3 text-secondary-900 border-b border-secondary-900 pb-1 hover:border-primary-600 hover:text-primary-600 transition-colors focus:outline-none focus:text-primary-600 focus:border-primary-600"
//         >
//           <span className="font-heading text-xl md:text-2xl">Book an appointment</span>
//           <ArrowRight
//             size={18}
//             className="transition-transform group-hover:translate-x-1"
//             aria-hidden="true"
//           />
//         </button>
//       </div>
//     </div>
//   </section>
// );
// 
// HeroEditorial.displayName = 'HeroEditorial';
