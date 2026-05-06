import React from 'react';
import { User, Clock } from '@phosphor-icons/react';
import { Modal, Button } from '@/components/ui';
import type { Service } from '@/types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onBook: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <Modal
      isOpen
      onClose={onClose}
      title={service.title}
      footer={
        <div className="flex justify-end w-full">
          <Button onClick={onBook} className="w-full md:w-auto shadow-lg">
            Schedule Consultation
          </Button>
        </div>
      }
    >
      <div className="space-y-8">
        <div className="aspect-video w-full rounded-sm bg-stone-100 mb-6 overflow-hidden relative">
          {/* PLACEHOLDER: Replace with real per-service images */}
          <img
            src="https://images.unsplash.com/photo-1607613009820-a29f7bb6dc2d?q=80&w=800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt={`${service.title} treatment at Suseela Hospital`}
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-3">Overview</p>
          <p className="text-stone-600 font-light leading-relaxed text-lg">{service.fullDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-stone-50 p-6 border border-stone-100">
            <p className="font-bold text-secondary-900 mb-3 flex items-center gap-2">
              <User size={18} aria-hidden="true" /> Ideal Candidate
            </p>
            <p className="text-base text-stone-600 font-light">{service.candidates}</p>
          </div>
          <div className="bg-stone-50 p-6 border border-stone-100">
            <p className="font-bold text-secondary-900 mb-3 flex items-center gap-2">
              <Clock size={18} aria-hidden="true" /> Downtime
            </p>
            <p className="text-base text-stone-600 font-light">{service.downtime}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ServiceModal.displayName = 'ServiceModal';
