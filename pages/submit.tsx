import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Submit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    genre: '',
    wordCount: '',
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
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! Our editorial team will review your work.');
    setFormData({ name: '', email: '', title: '', genre: '', wordCount: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Submit Your Work - Dominion Literary Publishing</title>
        <meta name="description" content="Submit your literary work to Dominion for consideration." />
      </Head>

      <Header />

      <main className="min-h-screen bg-dominion-black pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-elegant text-5xl font-bold text-dominion-ivory mb-6 text-center">
              Submit Your Work
            </h1>
            <p className="text-dominion-silver text-center mb-12 font-editorial max-w-2xl mx-auto">
              We welcome submissions from writers across all genres and backgrounds. Please fill out the form below to begin your journey with Dominion.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-dominion-dark p-8 md:p-12 rounded-lg border border-dominion-gold/20 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-dominion-ivory font-semibold mb-2">Full Name *</label>
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
                <label className="block text-dominion-ivory font-semibold mb-2">Email Address *</label>
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
              <label className="block text-dominion-ivory font-semibold mb-2">Work Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-dominion-ivory font-semibold mb-2">Genre *</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
                >
                  <option value="">Select a genre</option>
                  <option value="literary-fiction">Literary Fiction</option>
                  <option value="poetry">Poetry</option>
                  <option value="memoir">Memoir</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="science-fiction">Science Fiction</option>
                  <option value="mystery">Mystery</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-dominion-ivory font-semibold mb-2">Word Count *</label>
                <input
                  type="number"
                  name="wordCount"
                  value={formData.wordCount}
                  onChange={handleChange}
                  required
                  className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-dominion-ivory font-semibold mb-2">Work Description / Excerpt *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-dominion-black border border-dominion-gold/30 text-dominion-ivory px-4 py-3 rounded focus:border-dominion-gold focus:outline-none smooth-transition"
                placeholder="Tell us about your work or share an excerpt..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-8 py-3 bg-dominion-gold text-dominion-black font-semibold rounded-lg hover:shadow-premium smooth-transition"
              >
                Submit Work
              </button>
              <button
                type="reset"
                className="px-8 py-3 border-2 border-dominion-gold text-dominion-gold font-semibold rounded-lg hover:bg-dominion-gold hover:text-dominion-black smooth-transition"
              >
                Clear Form
              </button>
            </div>
          </motion.form>
        </div>
      </main>

      <Footer />
    </>
  );
}
