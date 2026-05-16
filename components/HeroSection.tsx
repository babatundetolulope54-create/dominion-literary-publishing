import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; duration: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen bg-cinematic-gradient overflow-hidden pt-20 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-dominion-gold rounded-full"
            initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-elegant text-5xl md:text-7xl font-bold text-dominion-ivory mb-6 leading-tight">
            Where Literature
            <span className="block text-dominion-gold">Transcends Borders</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-dominion-silver mb-12 leading-relaxed font-editorial"
        >
          Dominion is an international literary publishing institution uniting visionary authors, cultural voices, and creative thinkers through globally curated anthology and publishing initiatives.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <Link href="/anthologies">
            <button className="px-8 py-4 bg-dominion-gold text-dominion-black font-semibold rounded-lg hover:shadow-premium smooth-transition">
              Explore Anthologies
            </button>
          </Link>
          <Link href="/submit">
            <button className="px-8 py-4 border-2 border-dominion-gold text-dominion-gold font-semibold rounded-lg hover:bg-dominion-gold hover:text-dominion-black smooth-transition">
              Submit Your Work
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-4 border-2 border-dominion-silver text-dominion-silver font-semibold rounded-lg hover:bg-dominion-silver hover:text-dominion-black smooth-transition">
              Discover Our Mission
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dominion-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-dominion-gold rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
