import React from 'react';
import {
  ClipboardText as ClipboardList, MagnifyingGlass as Search, Pulse, Heart,
} from '@phosphor-icons/react';
import { Modal, Button } from '@/components/ui';
import type { ProcessStep } from '@/types';

// 'Activity' in constants.tsx maps to Phosphor's Pulse (heartbeat line).
const processIconMap: Record<string, React.ElementType> = {
  ClipboardList, Search, Heart,
  Activity: Pulse,
};

interface ProcessStepModalProps {
  step: ProcessStep | null;
  onClose: () => void;
  onBook: () => void;
}

export const ProcessStepModal: React.FC<ProcessStepModalProps> = ({ step, onClose, onBook }) => {
  if (!step) return null;

  const Icon = processIconMap[step.iconName] || ClipboardList;

  return (
    <Modal
      isOpen
      onClose={onClose}
      title={`Step ${step.step}: ${step.title}`}
    >
      <div className="space-y-8">
        <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Icon size={24} className="text-primary-600" aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold text-secondary-900 mb-2 text-lg">What Happens Here?</p>
            <p className="text-stone-600 font-light text-base">{step.fullDetails.what}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-2 border-secondary-900 pl-6 py-2">
            <p className="font-bold text-xs uppercase tracking-widest text-stone-500 mb-2">Our Action</p>
            <p className="text-secondary-900 text-lg">{step.fullDetails.action}</p>
          </div>
          <div className="border-l-2 border-primary-500 pl-6 py-2">
            <p className="font-bold text-xs uppercase tracking-widest text-stone-500 mb-2">Your Outcome</p>
            <p className="text-secondary-900 text-lg">{step.fullDetails.outcome}</p>
          </div>
        </div>

        <div className="flex justify-end pt-8">
          <Button onClick={onBook}>Book This Step</Button>
        </div>
      </div>
    </Modal>
  );
};

ProcessStepModal.displayName = 'ProcessStepModal';
