import { books } from '@/data/books';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function FeaturedBooks() {
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);

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
            Featured Literary Works
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-dominion-gold to-transparent mx-auto mb-6"></div>
          <p className="text-dominion-silver max-w-2xl mx-auto font-editorial text-lg">
            Discover the exceptional contributions from our global network of authors and storytellers across multiple genres and cultures.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              className="group"
            >
              <Link href={`/books/${book.id}`}>
                <div className="relative overflow-hidden rounded-lg bg-dominion-charcoal aspect-[2/3] cursor-pointer">
                  {/* Book Cover Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-dominion-gold/20 to-dominion-charcoal flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="h-full flex flex-col items-center justify-center">
                        <h3 className="font-elegant text-xl font-bold text-dominion-ivory mb-2 text-center">
                          {book.title}
                        </h3>
                        <p className="text-dominion-silver text-sm mb-4">{book.author}</p>
                        <p className="text-dominion-gold text-xs">{book.genre}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredBook === book.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-dominion-black/80 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <p className="text-dominion-gold font-bold mb-4">
                          {book.readers} readers
                        </p>
                        <button className="px-6 py-2 bg-dominion-gold text-dominion-black font-semibold rounded hover:shadow-premium">
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </Link>

              {/* Book Info */}
              <div className="mt-4">
                <h3 className="font-elegant text-lg font-bold text-dominion-ivory mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-dominion-silver text-sm mb-2">{book.author}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-dominion-gold">{book.genre}</span>
                  <span className="text-dominion-silver">{book.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
