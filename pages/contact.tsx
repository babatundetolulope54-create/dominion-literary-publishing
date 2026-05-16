import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact Dominion - Get in Touch</title>
        <meta name="description" content="Contact the Dominion Literary Publishing team." />
      </Head>

      <Header />

      <main className="min-h-screen bg-dominion-black pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-elegant text-5xl font-bold text-dominion-ivory mb-4">
              Get in Touch
            </h1>
            <p className="text-dominion-silver text-lg font-editorial max-w-2xl mx-auto">
              Have questions about submissions, anthologies, or partnership opportunities? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Submissions',
                email: 'submissions@dominion-literary.com',
              },
              {
                title: 'Partnerships',
                email: 'partnerships@dominion-literary.com',
              },
              {
                title: 'General Inquiries',
                email: 'hello@dominion-literary.com',
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dominion-dark p-6 rounded-lg border border-dominion-gold/20 text-center"
              >
                <h3 className="font-elegant text-xl font-bold text-dominion-ivory mb-2">
                  {contact.title}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-dominion-gold hover:text-dominion-silver smooth-transition"
                >
                  {contact.email}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-dominion-dark p-8 md:p-12 rounded-lg border border-dominion-gold/20 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-dominion-ivory font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
                />
              </div>
              <div>
                <label className="block text-dominion-ivory font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-dominion-ivory font-semibold mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
              />
            </div>

            <div>
              <label className="block text-dominion-ivory font-semibold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-dominion-gold text-dominion-black font-semibold rounded-lg hover:shadow-premium smooth-transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </main>

      <Footer />
    </>
  );
}
