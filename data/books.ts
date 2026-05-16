export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  cover: string;
  readers: number;
  synopsis: string;
  biography: string;
  editorial_notes: string;
  related_anthologies: string[];
}

export const books: Book[] = [
  {
    id: 'the-pact',
    title: 'The Pact',
    author: 'Lisa Walker',
    genre: 'Anthropology & Literary Fiction',
    year: 2024,
    cover: '/covers/the-pact.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'An intricate exploration of cultural bonds and human connection across continents. The Pact weaves together personal narratives and anthropological insights to examine how communities form, sustain, and transform through shared experiences.',
    biography: 'Lisa Walker is an acclaimed anthropologist and author who has spent decades researching cultural narratives across Africa, Europe, and North America. Her work bridges academic rigor with literary eloquence.',
    editorial_notes: 'Selected for Dominion\'s premium anthropology collection for its masterful synthesis of personal memoir and ethnographic scholarship. Walker\'s narrative voice challenges traditional academic prose while maintaining intellectual integrity.',
    related_anthologies: ['Global Narratives', 'Cultural Foundations', 'Modern Anthropology Series']
  },
  {
    id: 'sanibel-wind',
    title: 'Sanibel Wind',
    author: 'David Crosby',
    genre: 'Mystery & Thriller',
    year: 2023,
    cover: '/covers/sanibel-wind.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'A gripping thriller that follows investigator Tom Harper as he navigates the treacherous waters and hidden secrets of Florida\'s coastal communities. Sanibel Wind combines meteorological precision with psychological intrigue.',
    biography: 'David Crosby is a bestselling thriller author known for his meticulous research and atmospheric storytelling. His works have been translated into 15 languages and adapted for premium television.',
    editorial_notes: 'Dominion recognized Sanibel Wind for its sophisticated plotting and literary quality within the thriller genre. Crosby elevates commercial fiction to artistic heights through his precise prose and character development.',
    related_anthologies: ['International Thrillers', 'Literary Crime Fiction', 'Coastal Mysteries']
  },
  {
    id: 'cassatt-sisters',
    title: 'The Cassatt Sisters',
    author: 'Lisa Groen',
    genre: 'Historical Fiction & Art History',
    year: 2023,
    cover: '/covers/cassatt-sisters.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'An intimate portrait of the Cassatt family and their revolutionary contributions to American Impressionism. Through interwoven narratives, Groen explores sisterhood, artistic ambition, and the struggle for creative recognition in the 19th century.',
    biography: 'Lisa Groen holds a PhD in Art History and has published extensively on women artists and cultural movements. Her research combines archival investigation with narrative craftsmanship.',
    editorial_notes: 'A exemplary contribution to Dominion\'s historical fiction catalog. Groen\'s meticulous research and lyrical prose create an immersive journey through art history, making scholarly subjects accessible and emotionally resonant.',
    related_anthologies: ['Women Creators', 'Art & Culture', 'Historical Narratives']
  },
  {
    id: 'battle-mountain',
    title: 'Battle Mountain',
    author: 'C.J. Box',
    genre: 'Literary Fiction & Western',
    year: 2023,
    cover: '/covers/battle-mountain.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'A sweeping western narrative that examines land, legacy, and community in contemporary America. Battle Mountain explores the tensions between preservation and progress through interconnected character stories set against the Wyoming landscape.',
    biography: 'C.J. Box is an acclaimed author whose works consistently blend literary sophistication with compelling narratives. His extensive experience as a journalist informs his precise, authentic storytelling.',
    editorial_notes: 'Selected for Dominion\'s multi-genre collection for its literary excellence and cultural significance. Box\'s work transcends genre boundaries, offering both commercial appeal and substantive thematic depth.',
    related_anthologies: ['American Landscapes', 'Contemporary Voices', 'Literary Collections']
  },
  {
    id: 'rogue-mission',
    title: 'Rogue Mission',
    author: 'David Nees',
    genre: 'Political Thriller & Adventure',
    year: 2024,
    cover: '/covers/rogue-mission.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'An explosive political thriller that navigates international espionage, moral ambiguity, and the consequences of covert operations. Rogue Mission combines procedural authenticity with high-stakes narrative tension.',
    biography: 'David Nees brings his background in international relations and security analysis to his fiction. His research methodology and authentic technical details create compelling, credible thrillers.',
    editorial_notes: 'Dominion featured Rogue Mission for its sophisticated treatment of political complexity and character psychology. Nees elevates the espionage genre through intellectual rigor and nuanced exploration of institutional power.',
    related_anthologies: ['Political Fiction', 'International Narratives', 'Thriller Collections']
  },
  {
    id: 'looted',
    title: 'Looted',
    author: 'Wayne Stinnett',
    genre: 'Adventure & Cultural Heritage',
    year: 2023,
    cover: '/covers/looted.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'An adventure narrative exploring themes of cultural preservation and repatriation. Through the Caribbean Adventure Series, Stinnett weaves together maritime history, archaeological intrigue, and contemporary debates about cultural artifacts.',
    biography: 'Wayne Stinnett is a bestselling adventure author known for his research into maritime history and Caribbean culture. His works have reached millions of readers globally.',
    editorial_notes: 'Featured in Dominion\'s multi-genre collection for its unique approach to adventure fiction with substantive cultural and historical dimensions. Stinnett demonstrates how commercial fiction can engage with serious scholarly themes.',
    related_anthologies: ['Maritime Tales', 'Caribbean Voices', 'Adventure Collections']
  },
  {
    id: 'night-falls',
    title: 'When Night Falls',
    author: 'C.S. Friedman',
    genre: 'Dark Fantasy & Philosophy',
    year: 2023,
    cover: '/covers/night-falls.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'A philosophical dark fantasy that explores the nature of consciousness, mortality, and transcendence. The second installment in the Magister Trilogy, Night Falls presents complex world-building and profound thematic exploration.',
    biography: 'C.S. Friedman holds degrees in Psychology and Philosophy. Her fiction engages deeply with intellectual questions while maintaining narrative complexity and emotional resonance.',
    editorial_notes: 'Selected for Dominion\'s multi-genre catalog for its sophisticated philosophical framework and literary quality. Friedman demonstrates that fantasy fiction can achieve significant artistic and intellectual depth.',
    related_anthologies: ['Philosophical Fiction', 'Fantasy & Literature', 'Thematic Explorations']
  },
  {
    id: 'feast-of-souls',
    title: 'Feast of Souls',
    author: 'C.S. Friedman',
    genre: 'Dark Fantasy & Mythology',
    year: 2022,
    cover: '/covers/feast-of-souls.jpg',
    readers: Math.floor(Math.random() * (683 - 267 + 1)) + 267,
    synopsis: 'The first book in the Magister Trilogy, Feast of Souls presents an intricate mythology where magic demands sacrifice and power corrupts absolutely. Through multiple narrative perspectives, Friedman explores ambition, morality, and the price of immortality.',
    biography: 'C.S. Friedman\'s extensive background in psychology and philosophical studies enriches her fantasy narratives. She is recognized internationally for her complex world-building and thematic sophistication.',
    editorial_notes: 'Dominion selected Feast of Souls for its exceptional literary quality and philosophical depth. Friedman\'s work proves that epic fantasy can be both commercially successful and artistically significant.',
    related_anthologies: ['Epic Fantasy', 'Mythological Narratives', 'International Voices']
  }
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getRandomReaders = (): number => {
  return Math.floor(Math.random() * (683 - 267 + 1)) + 267;
};
