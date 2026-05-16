import { team } from '@/data/team';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="w-full bg-dominion-dark py-20 px-6 md:px-12 lg:px-20">
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
            The Global Creative Consortium
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto mb-6"></div>
          <p className="text-dominion-silver max-w-3xl mx-auto font-editorial text-lg">
            Dominion is guided by an executive team of international literary experts, editors, and cultural strategists committed to publishing excellence and global creative collaboration.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dominion-black p-8 rounded-lg border border-dominion-gold/20 hover:border-dominion-gold/50 smooth-transition"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dominion-gold to-dominion-silver mb-6"></div>
              <h3 className="font-elegant text-xl font-bold text-dominion-ivory mb-2">
                {member.name}
              </h3>
              <p className="text-dominion-gold text-sm font-semibold mb-4">
                {member.title}
              </p>
              <p className="text-dominion-silver text-sm leading-relaxed font-editorial">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
