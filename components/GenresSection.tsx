import { genres } from '@/data/genres';
import { motion } from 'framer-motion';

export default function GenresSection() {
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
            Global Multi-Genre Anthology Publishing
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto mb-6"></div>
          <p className="text-dominion-silver max-w-2xl mx-auto font-editorial text-lg">
            Dominion curates international anthology projects spanning diverse literary genres, creative disciplines, and cultural perspectives.
          </p>
        </motion.div>

        {/* Genres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-dominion-black p-6 rounded-lg border border-dominion-gold/20 hover:border-dominion-gold/50 smooth-transition group cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-dominion-gold/30 to-dominion-silver/30 rounded-lg group-hover:from-dominion-gold/50 group-hover:to-dominion-silver/50 smooth-transition"></div>
              </div>
              <h3 className="font-elegant text-lg font-bold text-dominion-ivory mb-3">
                {genre.name}
              </h3>
              <p className="text-dominion-silver text-sm leading-relaxed font-editorial">
                {genre.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
