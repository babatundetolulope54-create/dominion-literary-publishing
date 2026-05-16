import { motion } from 'framer-motion';

export default function WhyTrustDominion() {
  const reasons = [
    {
      title: 'Editorial Excellence',
      description: 'Rigorous editorial standards ensuring the highest quality literary output and artistic integrity.',
      icon: '✎',
    },
    {
      title: 'International Visibility',
      description: 'Global reach and recognition within the international literary and publishing community.',
      icon: '◆',
    },
    {
      title: 'Contributor Network',
      description: 'Access to a sophisticated global network of writers, editors, and cultural professionals.',
      icon: '∞',
    },
    {
      title: 'Professional Production',
      description: 'Premium production standards including design, formatting, and distribution excellence.',
      icon: '⬢',
    },
    {
      title: 'Literary Integrity',
      description: 'Commitment to authentic storytelling, cultural respect, and artistic authenticity.',
      icon: '◆',
    },
    {
      title: 'Long-term Partnerships',
      description: 'Ongoing creative collaboration and support throughout the author\'s publishing journey.',
      icon: '✦',
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
            Why Authors Trust Dominion
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-dominion-dark p-8 rounded-lg border border-dominion-gold/20 hover:border-dominion-gold/50 smooth-transition h-full">
                <div className="text-4xl text-dominion-gold mb-4 group-hover:scale-110 smooth-transition">
                  {reason.icon}
                </div>
                <h3 className="font-elegant text-lg font-bold text-dominion-ivory mb-3">
                  {reason.title}
                </h3>
                <p className="text-dominion-silver text-sm leading-relaxed font-editorial">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
