import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dominion-dark border-t border-dominion-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-elegant text-xl font-bold text-dominion-gold mb-4">
              DOMINION
            </h3>
            <p className="text-dominion-silver font-editorial text-sm leading-relaxed">
              An international literary publishing institution uniting visionary authors and cultural voices through globally curated anthology initiatives.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-dominion-ivory mb-4 uppercase text-sm tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-dominion-silver text-sm font-editorial">
              <li><Link href="/" className="hover:text-dominion-gold smooth-transition">Home</Link></li>
              <li><Link href="/anthologies" className="hover:text-dominion-gold smooth-transition">Anthologies</Link></li>
              <li><Link href="/about" className="hover:text-dominion-gold smooth-transition">About</Link></li>
              <li><Link href="/submit" className="hover:text-dominion-gold smooth-transition">Submit</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-dominion-ivory mb-4 uppercase text-sm tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-dominion-silver text-sm font-editorial">
              <li><Link href="/guidelines" className="hover:text-dominion-gold smooth-transition">Submission Guidelines</Link></li>
              <li><Link href="/privacy" className="hover:text-dominion-gold smooth-transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-dominion-gold smooth-transition">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-dominion-gold smooth-transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-dominion-ivory mb-4 uppercase text-sm tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-dominion-silver text-sm font-editorial">
              <li><a href="#" className="hover:text-dominion-gold smooth-transition">Instagram</a></li>
              <li><a href="#" className="hover:text-dominion-gold smooth-transition">Twitter</a></li>
              <li><a href="#" className="hover:text-dominion-gold smooth-transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-dominion-gold smooth-transition">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-dominion-gold/20 pt-8">
          <p className="text-center text-dominion-silver text-sm font-editorial">
            © {currentYear} Dominion Literary Publishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
