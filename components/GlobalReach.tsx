import { motion } from 'framer-motion';

export default function GlobalReach() {
  const regions = [
    { name: 'Africa', contributors: 45 },
    { name: 'Europe', contributors: 120 },
    { name: 'Asia', contributors: 85 },
    { name: 'North America', contributors: 95 },
    { name: 'South America', contributors: 60 },
    { name: 'Middle East', contributors: 35 },
  ];

  const stats = [
    { number: '30+', label: 'Countries' },
    { number: '450+', label: 'Contributors' },
    { number: '25+', label: 'Anthologies' },
    { number: '15', label: 'Languages' },
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
            Global Literary Network
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto mb-6"></div>
          <p className="text-dominion-silver max-w-2xl mx-auto font-editorial text-lg">
            Dominion connects visionary voices from across the world, creating a truly international publishing ecosystem.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-elegant text-4xl md:text-5xl font-bold text-dominion-gold mb-2">
                {stat.number}
              </h3>
              <p className="text-dominion-silver font-editorial">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Regional Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dominion-dark p-6 rounded-lg border border-dominion-gold/20"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-elegant text-lg font-bold text-dominion-ivory">
                  {region.name}
                </h3>
                <span className="text-dominion-gold font-bold">{region.contributors}+</span>
              </div>
              <div className="w-full bg-dominion-charcoal rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(region.contributors / 120) * 100}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-gradient-to-r from-dominion-gold to-dominion-silver h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
