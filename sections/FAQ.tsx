import React, { useState } from 'react';
import { FAQS } from '@/constants';
import { SectionHeading, AccordionItem, Reveal } from '@/components/ui';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-stone-50 to-primary-50/20" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <SectionHeading subtitle="Everything you need to know." id="faq-heading">
          Common Questions
        </SectionHeading>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.id} delay={index * 0.1}>
              <AccordionItem
                title={faq.question}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                <p className="text-lg">{faq.answer}</p>
              </AccordionItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

FAQ.displayName = 'FAQ';
