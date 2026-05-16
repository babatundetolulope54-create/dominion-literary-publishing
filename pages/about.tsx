import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import WhyTrustDominion from '@/components/WhyTrustDominion';
import EditorialPrinciples from '@/components/EditorialPrinciples';

export default function About() {
  return (
    <>
      <Head>
        <title>About Dominion - Literary Publishing Institution</title>
        <meta name="description" content="Learn about Dominion's mission, values, and leadership in international literary publishing." />
      </Head>

      <Header />

      <main className="min-h-screen bg-dominion-black">
        {/* Hero Section */}
        <section className="w-full h-96 bg-cinematic-gradient flex items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="font-elegant text-5xl md:text-6xl font-bold text-dominion-ivory mb-4">
              About Dominion
            </h1>
            <p className="text-dominion-silver text-xl font-editorial max-w-2xl mx-auto">
              An international literary publishing institution dedicated to excellence, authenticity, and global creative collaboration.
            </p>
          </motion.div>
        </section>

        {/* Mission Statement */}
        <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-dominion-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-elegant text-4xl font-bold text-dominion-ivory mb-6">
                Our Mission
              </h2>
              <p className="text-dominion-silver text-lg leading-relaxed font-editorial mb-8">
                Dominion exists to amplify exceptional literary voices from across the globe, creating a sophisticated international publishing platform that celebrates artistic integrity, cultural authenticity, and creative innovation. We believe literature transcends borders and unites humanity through shared storytelling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-dominion-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-elegant text-4xl font-bold text-dominion-ivory text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Literary Excellence',
                  description: 'We maintain rigorous editorial standards ensuring only the highest quality literary work reaches our readers.'
                },
                {
                  title: 'Cultural Authenticity',
                  description: 'We respect diverse voices, cultural perspectives, and artistic traditions from around the world.'
                },
                {
                  title: 'Artistic Integrity',
                  description: 'We support creative freedom and honor the authentic vision of every contributor.'
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dominion-dark p-8 rounded-lg border border-dominion-gold/20"
                >
                  <h3 className="font-elegant text-2xl font-bold text-dominion-gold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dominion-silver font-editorial">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <AboutSection />

        {/* Trust Section */}
        <WhyTrustDominion />

        {/* Principles Section */}
        <EditorialPrinciples />
      </main>

      <Footer />
    </>
  );
}
