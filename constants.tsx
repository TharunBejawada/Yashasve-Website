import { DoctorProfile, Service, FAQ, Testimonial } from './types';
import { 
  Stethoscope, 
  Sparkles, 
  User, 
  ShieldCheck, 
  Microscope, 
  Zap, 
  Droplet,
  Syringe,
  ScanFace
} from 'lucide-react';

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Yashasve",
  title: "Consultant Dermatologist & Cosmetologist",
  qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
  regNumber: "TSMC-12345", // Placeholder
  bio: "Dr. Yashasve is a leading dermatologist known for his ethical, evidence-based approach to skin and hair care. With a focus on sustainable results, he specializes in treating chronic skin conditions and performing advanced aesthetic procedures with precision and safety.",
  hospital: "Suseela Hospital",
  location: "RK Puram, Hyderabad, Telangana",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "contact@dryashasve.com",
  mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.463376789!2d78.53!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae1!2sSuseela%20Hospital!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  hours: ["Mon - Sat: 10:00 AM - 01:00 PM", "Mon - Sat: 05:00 PM - 09:00 PM", "Sunday: By Appointment Only"]
};

export const SERVICES: Service[] = [
  {
    id: 'acne-scars',
    title: 'Acne & Scar Treatment',
    category: 'Skin',
    shortDescription: 'Comprehensive management of active acne and post-acne scarring.',
    fullDescription: 'We utilize a multi-modal approach to tackle acne at its root cause. From medical management to advanced procedural therapies like chemical peels and lasers for scars, our goal is clear, blemish-free skin.',
    candidates: 'Individuals with active acne, hormonal breakouts, or residual scarring.',
    procedure: 'Consultation followed by topical/oral medication. Procedures like peels or microneedling may be suggested.',
    downtime: 'Minimal to 2-3 days redness depending on procedure.',
    iconName: 'Microscope'
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Melasma',
    category: 'Skin',
    shortDescription: 'Targeted therapies for melasma, sun spots, and uneven skin tone.',
    fullDescription: 'Stubborn pigmentation requires patience and the right science. We use safe, dermatologist-approved treatments including Q-switched lasers and medical-grade peels to reduce melanin deposits.',
    candidates: 'Patients dealing with melasma, sun damage, or post-inflammatory hyperpigmentation.',
    procedure: 'Topical regimen combined with laser toning or chemical exfoliation.',
    downtime: 'None to mild flaking.',
    iconName: 'Sparkles'
  },
  {
    id: 'hair-loss',
    title: 'Hair Fall & PRP/GFC',
    category: 'Hair',
    shortDescription: 'Advanced hair restoration using Growth Factor Concentrate (GFC) & PRP.',
    fullDescription: 'Early intervention is key to saving hair. We diagnose the type of alopecia and offer treatments ranging from medical management to injectable therapies using your body’s own growth factors.',
    candidates: 'Men and women experiencing thinning hair, pattern baldness, or telogen effluvium.',
    procedure: 'Blood draw followed by separation of growth factors, injected into the scalp.',
    downtime: 'Zero downtime. Resume normal activities immediately.',
    iconName: 'Droplet'
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Aesthetics',
    category: 'Aesthetic',
    shortDescription: 'Botox, fillers, and skin tightening for natural-looking rejuvenation.',
    fullDescription: 'Our aesthetic philosophy is "less is more". We aim to refresh your look, not change it. Treatments are customized to soften lines and restore volume loss safely.',
    candidates: 'Individuals looking to reduce fine lines, wrinkles, or volume loss.',
    procedure: 'Injectable treatments performed with high precision and numbing cream.',
    downtime: '24-48 hours of mild swelling or bruising may occur.',
    iconName: 'Syringe'
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Reduction',
    category: 'Aesthetic',
    shortDescription: 'Painless, long-term hair reduction using US-FDA approved diode lasers.',
    fullDescription: 'Say goodbye to waxing and shaving. Our medical-grade lasers target hair follicles safely for all skin types, offering significant reduction in hair growth over sessions.',
    candidates: 'Anyone seeking long-term reduction of unwanted body or facial hair.',
    procedure: 'Laser energy pulses target hair roots. Cooling technology ensures comfort.',
    downtime: 'None. Sun protection is mandatory.',
    iconName: 'Zap'
  },
  {
    id: 'medical-derm',
    title: 'Clinical Dermatology',
    category: 'Medical',
    shortDescription: 'Expert diagnosis for eczema, psoriasis, fungal infections, and allergies.',
    fullDescription: 'Chronic skin conditions affect quality of life. We provide compassionate, long-term management plans for eczema, psoriasis, vitiligo, and other dermatological disorders.',
    candidates: 'Patients with rashes, itching, chronic skin diseases, or infections.',
    procedure: 'Thorough clinical examination and biopsy if needed.',
    downtime: 'Not applicable.',
    iconName: 'Stethoscope'
  },
  {
    id: 'hydrafacial',
    title: 'Medifacials & Hydration',
    category: 'Aesthetic',
    shortDescription: 'Medical-grade facials for deep cleansing and instant glow.',
    fullDescription: 'Unlike salon facials, medifacials use active ingredients to deeply cleanse, exfoliate, and hydrate the skin, improving texture and tone clinically.',
    candidates: 'Great for event prep or routine skin maintenance.',
    procedure: 'Multi-step process involving cleansing, exfoliation, extraction, and hydration.',
    downtime: 'None. Instant radiance.',
    iconName: 'ScanFace'
  },
  {
    id: 'skin-surgery',
    title: 'Skin Surgery',
    category: 'Medical',
    shortDescription: 'Removal of moles, warts, skin tags, and cysts.',
    fullDescription: 'Safe, sterile removal of benign skin growths using radiofrequency or excision techniques with minimal scarring.',
    candidates: 'Patients with bothersome moles, skin tags, or cysts.',
    procedure: 'Local anesthesia followed by removal.',
    downtime: '5-7 days for small scab healing.',
    iconName: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "S. Reddy",
    treatment: "Acne Treatment",
    text: "I struggled with severe acne for years. Dr. Yashasve's approach was patient and scientific. He didn't just give creams but explained the cause. My skin is clear for the first time in 5 years. Highly recommend this clinic!",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: '2',
    name: "Anjali K.",
    treatment: "Laser Hair Reduction",
    text: "The clinic at Suseela Hospital is very hygienic. I was nervous about laser, but the doctor made me feel very comfortable. Excellent results after just 3 sessions.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: '3',
    name: "Mohammed F.",
    treatment: "Hair Fall Therapy",
    text: "Honest advice. Dr. Yashasve told me exactly what to expect from PRP and didn't make false promises. I'm seeing good density improvement now. Best dermatologist in RK Puram.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: '4',
    name: "Priya Sharma",
    treatment: "General Consultation",
    text: "Very professional and detailed consultation. The doctor takes time to listen to your concerns unlike others who rush. Medicines prescribed were affordable and effective.",
    rating: 5,
    date: "4 months ago"
  },
  {
    id: '5',
    name: "Karthik R.",
    treatment: "Skin Surgery",
    text: "Had a mole removal procedure here. It was painless and healed beautifully without any scar. Dr. Yashasve has very steady hands.",
    rating: 5,
    date: "5 months ago"
  }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: "Do I need a consultation before a procedure?",
    answer: "Yes. Every skin type is unique. Dr. Yashasve assesses your skin condition and medical history to ensure safety and effectiveness before recommending any procedural treatment."
  },
  {
    id: '2',
    question: "Are the aesthetic treatments safe?",
    answer: "Absolutely. We use only US-FDA approved technologies and high-quality consumables. All procedures are performed or supervised directly by the doctor following strict sterilization protocols."
  },
  {
    id: '3',
    question: "How soon will I see results?",
    answer: "This varies by condition. For medical issues like acne, 4-6 weeks is typical for visible improvement. Aesthetic procedures like fillers show instant results, while lasers require multiple sessions."
  },
  {
    id: '4',
    question: "What is the cost of consultation?",
    answer: "We believe in transparent pricing. Please contact the clinic via WhatsApp or call us for the current consultation fee and procedure price list."
  },
  {
    id: '5',
    question: "Is there downtime after laser treatments?",
    answer: "Most modern lasers we use have zero to minimal downtime (mild redness for a few hours). You can typically return to work immediately, provided you use sunscreen."
  }
];