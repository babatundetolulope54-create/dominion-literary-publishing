import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { books } from '@/data/books';
import Link from 'next/link';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-dominion-black flex items-center justify-center">
          <p className="text-dominion-gold text-2xl font-elegant">Book not found</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{book.title} - Dominion Literary Publishing</title>
        <meta name="description" content={book.synopsis} />
      </Head>

      <Header />

      <main className="min-h-screen bg-dominion-black pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <Link href="/">
            <span className="text-dominion-gold hover:text-dominion-silver smooth-transition text-sm mb-8 inline-block">← Back Home</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <div className="bg-gradient-to-br from-dominion-gold/20 to-dominion-charcoal rounded-lg aspect-[2/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-elegant text-2xl font-bold text-dominion-ivory mb-2">
                    {book.title}
                  </h3>
                  <p className="text-dominion-silver mb-4">{book.author}</p>
                  <p className="text-dominion-gold">{book.genre}</p>
                </div>
              </div>
              <div className="mt-6 bg-dominion-dark p-6 rounded-lg border border-dominion-gold/20">
                <p className="text-dominion-gold font-bold text-lg mb-2">{book.readers} Readers</p>
                <p className="text-dominion-silver text-sm">Community Participation</p>
              </div>
            </motion.div>

            {/* Book Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 space-y-8"
            >
              {/* Title & Meta */}
              <div>
                <h1 className="font-elegant text-4xl md:text-5xl font-bold text-dominion-ivory mb-4">
                  {book.title}
                </h1>
                <div className="flex gap-6 text-sm">
                  <span className="text-dominion-gold font-semibold">{book.author}</span>
                  <span className="text-dominion-silver">{book.genre}</span>
                  <span className="text-dominion-silver">{book.year}</span>
                </div>
              </div>

              {/* Synopsis */}
              <div>
                <h2 className="font-elegant text-2xl font-bold text-dominion-ivory mb-4">
                  Synopsis
                </h2>
                <p className="text-dominion-silver font-editorial leading-relaxed text-lg">
                  {book.synopsis}
                </p>
              </div>

              {/* Biography */}
              <div>
                <h2 className="font-elegant text-2xl font-bold text-dominion-ivory mb-4">
                  About the Author
                </h2>
                <p className="text-dominion-silver font-editorial leading-relaxed">
                  {book.biography}
                </p>
              </div>

              {/* Editorial Notes */}
              <div className="bg-dominion-dark p-8 rounded-lg border border-dominion-gold/20">
                <h2 className="font-elegant text-xl font-bold text-dominion-ivory mb-4">
                  Editorial Notes
                </h2>
                <p className="text-dominion-silver font-editorial leading-relaxed">
                  {book.editorial_notes}
                </p>
              </div>

              {/* Related Collections */}
              {book.related_anthologies.length > 0 && (
                <div>
                  <h2 className="font-elegant text-xl font-bold text-dominion-ivory mb-4">
                    Related Anthologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {book.related_anthologies.map((anthology, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-dominion-dark border border-dominion-gold/30 text-dominion-gold rounded-full text-sm font-editorial"
                      >
                        {anthology}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
