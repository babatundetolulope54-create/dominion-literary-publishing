# Dominion Literary Publishing - Premium International Literary Institution

## Project Overview

Dominion is a premium international literary and publishing organization website featuring:

- **16 Complete Sections**: Hero, Featured Works, About, Global Reach, Genres, Why Trust, Editorial Principles, Contributor Opportunities, FAQ, Testimonials, Contact, and Footer
- **Premium Design**: Black/Gold/Ivory luxury aesthetic with cinematic animations
- **Full Functionality**: Submission portal, contact forms, book showcase with individual pages
- **Responsive Design**: Mobile, tablet, and desktop optimization
- **8 Featured Books**: With reader participation metrics (267-683 readers)
- **6 Leadership Team Members**: International editorial expertise
- **16+ Literary Genres**: Comprehensive genre support
- **Global Network**: 30+ countries represented with regional statistics

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Playfair Display (elegant titles), Lora (editorial body), Inter (sans-serif)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── components/          # React components (Header, Hero, Books, etc.)
├── pages/              # Next.js pages (index, books, submit, about, contact)
├── data/               # Data files (books.ts, team.ts, genres.ts)
├── styles/             # Global CSS and Tailwind configuration
├── public/             # Static assets and book covers
└── package.json        # Dependencies and scripts
```

## Pages

- `/` - Homepage with all 16 sections
- `/books/[id]` - Individual book detail pages
- `/submit` - Submission portal for contributors
- `/about` - About Dominion, mission, team, and values
- `/contact` - Contact form and inquiry portal
- `/anthologies` - Anthology collection showcase
- `/featured-works` - Featured literary works

## Featured Books

1. **The Pact** - Lisa Walker (Anthropology & Literary Fiction)
2. **Sanibel Wind** - David Crosby (Mystery & Thriller)
3. **The Cassatt Sisters** - Lisa Groen (Historical Fiction & Art History)
4. **Battle Mountain** - C.J. Box (Literary Fiction & Western)
5. **Rogue Mission** - David Nees (Political Thriller & Adventure)
6. **Looted** - Wayne Stinnett (Adventure & Cultural Heritage)
7. **When Night Falls** - C.S. Friedman (Dark Fantasy & Philosophy)
8. **Feast of Souls** - C.S. Friedman (Dark Fantasy & Mythology)

## Leadership Team

- Rebecca Skylar - Executive Literary Director & Global Partnerships Curator
- Alessandro Moretti - International Editorial Strategist
- Geneviève Laurent - Director of Literary Affairs & Contributor Relations
- Sebastian Reinhardt - Senior Publishing Consultant
- Amelia Kensington - Creative Development & Anthology Programs Director
- Elias Navarro - Global Editorial Communications Coordinator

## Features

### Visual Design
- Premium black cinematic luxury aesthetic
- Gold accents (#d4af37) with ivory typography (#f5f1e8)
- Smooth animations and transitions
- Responsive grid layouts
- Cinematic gradients and atmospheric lighting

### Interactive Elements
- Animated hero section with particle effects
- Smooth page transitions
- Hover effects on book cards
- Expandable FAQ items
- Form submissions (contact & submit work)
- Smooth scrolling navigation

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Mobile-responsive design
- Clear typography hierarchy

## Customization

### Color Palette
Edit colors in `tailwind.config.js`:
- Primary Gold: #d4af37
- Black: #0a0a0a
- Ivory: #f5f1e8
- Silver: #c0c0c0

### Fonts
Modify font imports in `styles/globals.css`:
- Elegant Headers: Playfair Display
- Body Text: Lora
- UI Elements: Inter

### Data
Update book covers and information in `data/books.ts`
Update team information in `data/team.ts`
Update genres in `data/genres.ts`

## Deployment

### Free Hosting Options

1. **Vercel** (Recommended for Next.js)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **GitHub Pages**
   - Export as static site
   - Deploy from `gh-pages` branch

## Maintenance

- Update book covers in `/public/covers/`
- Modify team member images in `/public/team/`
- Update submission guidelines in `/pages/guidelines.tsx`
- Manage form submissions through backend integration

## License

All rights reserved © 2026 Dominion Literary Publishing

## Support

For questions or support, contact: hello@dominion-literary.com
