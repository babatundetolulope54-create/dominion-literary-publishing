export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 'rebecca-skylar',
    name: 'Rebecca Skylar',
    title: 'Executive Literary Director & Global Partnerships Curator',
    bio: 'Rebecca brings 20+ years of international publishing experience. She has curated literary anthologies across 40+ countries and established Dominion\'s foundational vision for global literary excellence.',
    image: '/team/rebecca-skylar.jpg'
  },
  {
    id: 'alessandro-moretti',
    name: 'Alessandro Moretti',
    title: 'International Editorial Strategist',
    bio: 'Alessandro is a renowned editor from Milan with expertise in contemporary literary fiction and cultural translation. He oversees editorial standards and contributor development across all Dominion projects.',
    image: '/team/alessandro-moretti.jpg'
  },
  {
    id: 'genevieve-laurent',
    name: 'Geneviève Laurent',
    title: 'Director of Literary Affairs & Contributor Relations',
    bio: 'Geneviève manages Dominion\'s global contributor network. Her diplomatic approach and deep understanding of diverse literary traditions ensure authentic, respectful collaboration across cultures.',
    image: '/team/genevieve-laurent.jpg'
  },
  {
    id: 'sebastian-reinhardt',
    name: 'Sebastian Reinhardt',
    title: 'Senior Publishing Consultant',
    bio: 'Sebastian combines academic rigor with practical publishing expertise. He guides authors through the publication process while maintaining Dominion\'s commitment to literary excellence and ethical publishing practices.',
    image: '/team/sebastian-reinhardt.jpg'
  },
  {
    id: 'amelia-kensington',
    name: 'Amelia Kensington',
    title: 'Creative Development & Anthology Programs Director',
    bio: 'Amelia conceptualizes and develops Dominion\'s innovative anthology projects. Her creative vision shapes how diverse voices collaborate within thematic collections of global significance.',
    image: '/team/amelia-kensington.jpg'
  },
  {
    id: 'elias-navarro',
    name: 'Elias Navarro',
    title: 'Global Editorial Communications Coordinator',
    bio: 'Elias coordinates communications across Dominion\'s international network. His fluency in seven languages and understanding of cultural nuance ensure clear, respectful dialogue among all stakeholders.',
    image: '/team/elias-navarro.jpg'
  }
];
