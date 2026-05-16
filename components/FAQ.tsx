import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Dominion?',
      a: 'Dominion is an international literary publishing institution dedicated to showcasing exceptional literary work from visionary authors and cultural voices across the globe.',
    },
    {
      q: 'Who can contribute to Dominion?',
      a: 'Any writer with original literary work is welcome to submit. We welcome contributions from emerging and established authors across all backgrounds and cultures.',
    },
    {
      q: 'What genres do you accept?',
      a: 'We accept submissions across all literary genres including historical fiction, literary fiction, fantasy, science fiction, poetry, memoir, romance, mystery, and more.',
    },
    {
      q: 'Is Dominion truly international?',
      a: 'Yes. We work with contributors from 30+ countries and our anthologies feature voices and perspectives from diverse cultures and literary traditions worldwide.',
    },
    {
      q: 'How are contributors selected?',
      a: 'Our editorial committee reviews all submissions based on literary merit, artistic authenticity, cultural significance, and alignment with anthology themes.',
    },
    {
      q: 'What publishing support is provided?',
      a: 'We offer editorial development, professional formatting, cover design, global distribution, and promotional support through our international network.',
    },
    {
      q: 'How are anthology projects distributed?',
      a: 'Our anthologies are distributed through multiple channels including independent booksellers, digital platforms, and our direct distribution network globally.',
    },
    {
      q: 'What is the editorial process?',
      a: 'After submission, work is reviewed by our editorial committee, feedback is provided, revisions may be requested, and selected works are then prepared for publication.',
    },
  ];

  return (
    <section className="w-full bg-dominion-dark py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-dominion-ivory mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-dominion-black rounded-lg border border-dominion-gold/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-dominion-charcoal smooth-transition"
              >
                <h3 className="font-elegant text-lg font-bold text-dominion-ivory text-left">
                  {faq.q}
                </h3>
                <span className="text-dominion-gold text-2xl flex-shrink-0 ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 border-t border-dominion-gold/20"
                >
                  <p className="text-dominion-silver font-editorial leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
