import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContributorOpportunities() {
  const opportunities = [
    {
      title: 'Submit Your Work',
      description: 'Submit original literary contributions across all genres to our editorial team.',
      icon: '✍',
    },
    {
      title: 'Anthology Participation',
      description: 'Join curated anthology projects themed around cultural, philosophical, or artistic topics.',
      icon: '📚',
    },
    {
      title: 'Editorial Development',
      description: 'Receive professional editorial feedback and guidance to develop your craft.',
      icon: '▢',
    },
    {
      title: 'Global Distribution',
      description: 'Your work is promoted globally through our international publishing network.',
      icon: '◆',
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
            Contributor Opportunities
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto mb-6"></div>
          <p className="text-dominion-silver max-w-2xl mx-auto font-editorial text-lg">
            Join our global community of writers and creative thinkers. Multiple pathways exist for contributing to Dominion's literary ecosystem.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dominion-dark p-8 rounded-lg border border-dominion-gold/20 hover:border-dominion-gold/50 smooth-transition"
            >
              <div className="text-4xl text-dominion-gold mb-4">{opp.icon}</div>
              <h3 className="font-elegant text-xl font-bold text-dominion-ivory mb-3">
                {opp.title}
              </h3>
              <p className="text-dominion-silver font-editorial">{opp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <Link href="/submit">
            <button className="px-8 py-4 bg-dominion-gold text-dominion-black font-semibold rounded-lg hover:shadow-premium smooth-transition">
              Submit Your Work Today
            </button>
          </Link>
          <Link href="/guidelines">
            <button className="px-8 py-4 border-2 border-dominion-gold text-dominion-gold font-semibold rounded-lg hover:bg-dominion-gold hover:text-dominion-black smooth-transition">
              View Submission Guidelines
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
