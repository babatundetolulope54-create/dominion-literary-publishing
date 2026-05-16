import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Dominion provided the international platform my work deserved. The editorial excellence and cultural respect were unparalleled.',
      author: 'Sofia García',
      role: 'Contributor, Literary Fiction',
    },
    {
      quote: 'Publishing with Dominion connected me to a global literary community. The experience elevated my craft and expanded my readership significantly.',
      author: 'Amara Okonkwo',
      role: 'Contributor, Poetry & Essays',
    },
    {
      quote: 'The professionalism, attention to detail, and global reach of Dominion is unmatched in contemporary publishing.',
      author: 'David Chen',
      role: 'Contributor, Literary Fiction',
    },
    {
      quote: 'Working with Dominion\'s editorial team transformed my manuscript. They understood my vision and elevated it beyond my expectations.',
      author: 'Isabelle Moreau',
      role: 'Contributor, Memoir & Essays',
    },
  ];

  return (
    <section className="w-full bg-dominion-black py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-dominion-ivory mb-4">
            Contributor Testimonials
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dominion-dark p-8 rounded-lg border border-dominion-gold/20 hover:border-dominion-gold/50 smooth-transition"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-dominion-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-dominion-silver text-lg italic font-editorial mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-elegant font-bold text-dominion-ivory">
                  {testimonial.author}
                </p>
                <p className="text-dominion-gold text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
