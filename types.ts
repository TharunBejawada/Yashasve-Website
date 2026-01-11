export interface Service {
  id: string;
  title: string;
  category: 'Skin' | 'Hair' | 'Aesthetic' | 'Medical';
  shortDescription: string;
  fullDescription: string;
  candidates: string;
  procedure: string;
  downtime: string;
  iconName: string; // Mapping to Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string; // e.g., "Acne Treatment"
  text: string;
  rating: number;
  date?: string; // e.g. "2 months ago"
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
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
}