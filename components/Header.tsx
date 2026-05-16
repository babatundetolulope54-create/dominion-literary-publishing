import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Anthologies', href: '/anthologies' },
    { label: 'Featured Works', href: '/featured-works' },
    { label: 'About', href: '/about' },
    { label: 'Submit', href: '/submit' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-dominion-black/95 backdrop-blur-sm z-50 border-b border-dominion-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="font-elegant text-dominion-gold text-3xl font-bold tracking-wider">DOMINION</h1>
          <span className="text-dominion-silver text-sm font-editorial italic">Literary Publishing</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <span className="text-dominion-ivory hover:text-dominion-gold smooth-transition font-editorial text-sm uppercase tracking-wide">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/submit">
            <button className="hidden md:block px-6 py-2 bg-dominion-gold text-dominion-black font-semibold rounded-lg hover:shadow-premium smooth-transition">
              Submit Work
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dominion-gold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dominion-dark border-t border-dominion-gold/20"
        >
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <span className="text-dominion-ivory hover:text-dominion-gold font-editorial">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
