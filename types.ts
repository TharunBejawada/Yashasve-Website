export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  candidates: string;
  procedure: string;
  downtime: string;
  iconName: string;
  detailedContent?: ServiceDetailContent;
}

export type ServiceCategory = 'Skin' | 'Hair' | 'Body' | 'Wellness';
export type ServiceFilter = ServiceCategory | 'All';

export const SERVICE_FILTERS: readonly ServiceFilter[] = ['All', 'Skin', 'Hair', 'Body', 'Wellness'] as const;

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  text: string;
  rating: number;
  date?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface EducationEntry {
  year: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface GoogleRating {
  score: number;
  count: number;
}

export interface ProcessStepDetails {
  what: string;
  action: string;
  outcome: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  iconName: string;
  fullDetails: ProcessStepDetails;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string;
  regNumber: string;
  bio: string;
  hospital: string;
  location: string;
  phone: string;
  whatsapp: string;
  mapLink: string;
  email: string;
  hours: string[];
  philosophy: string;
  education: EducationEntry[];
  memberships: string[];
  googleRating: GoogleRating;
  stats: StatItem[];
  heroHighlight: { value: string; label: string };
  established: string;
}

export interface ServiceSessionInfo {
  duration: string;
  sessions: string;
  frequency: string;
  resultsIn: string;
}

export interface ServiceDetailContent {
  overview: string[];
  howItWorks: string;
  benefits: string[];
  sideEffects: string;
  sessionInfo: ServiceSessionInfo;
  preCare: string[];
  postCare: string[];
  faqs: { question: string; answer: string }[];
}

export interface TrustSignal {
  label: string;
  value: string;
  iconName: string;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  serviceId: string;
  size: 'large' | 'medium' | 'small';
}

export interface WhyUsCard {
  number: string;
  title: string;
  description: string;
  variant: 'featured' | 'dark' | 'light' | 'accent';
}

export interface ClinicPhoto {
  src: string;
  alt: string;
  caption: string;
  span: 'tall' | 'wide' | 'square';
}

export type ModalState =
  | { type: 'service'; service: Service }
  | { type: 'bio' }
  | { type: 'gallery' }
  | { type: 'process'; step: ProcessStep }
  | null;
