import { motion } from 'framer-motion';

export default function EditorialPrinciples() {
  const principles = [
    'Literary Excellence',
    'Artistic Integrity',
    'Cultural Depth',
    'International Collaboration',
    'Submission Ethics',
    'Contributor Respect',
    'Publishing Transparency',
    'Creative Freedom',
  ];

  return (
    <section className="w-full bg-dominion-dark py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-dominion-ivory mb-6">
            Our Editorial Principles
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-dominion-silver leading-relaxed font-editorial mb-8">
            Dominion is guided by principles of literary excellence, artistic integrity, cultural depth, and international creative collaboration.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-dominion-black p-6 rounded-lg border border-dominion-gold/20 text-center hover:border-dominion-gold/50 smooth-transition"
            >
              <p className="text-dominion-gold font-elegant font-bold text-sm">{principle}</p>
            </motion.div>
          ))}
        </div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dominion-black p-8 md:p-12 rounded-lg border border-dominion-gold/20"
        >
          <h3 className="font-elegant text-2xl font-bold text-dominion-ivory mb-6">
            Editorial Standards & Policies
          </h3>
          <div className="space-y-4 text-dominion-silver font-editorial">
            <p>
              <strong className="text-dominion-gold">Submission Review:</strong> All submissions are reviewed by our editorial committee for artistic merit, cultural authenticity, and literary quality.
            </p>
            <p>
              <strong className="text-dominion-gold">Ethical Publishing:</strong> We maintain transparent submission processes, fair compensation practices, and respect intellectual property rights.
            </p>
            <p>
              <strong className="text-dominion-gold">Contributor Respect:</strong> We honor contributor voices, maintain confidentiality during review, and provide constructive feedback.
            </p>
            <p>
              <strong className="text-dominion-gold">Publishing Philosophy:</strong> We believe literature should transcend commercial interests, celebrating cultural authenticity and artistic innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
