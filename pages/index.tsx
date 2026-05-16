import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedBooks from '@/components/FeaturedBooks';
import AboutSection from '@/components/AboutSection';
import GlobalReach from '@/components/GlobalReach';
import GenresSection from '@/components/GenresSection';
import WhyTrustDominion from '@/components/WhyTrustDominion';
import EditorialPrinciples from '@/components/EditorialPrinciples';
import ContributorOpportunities from '@/components/ContributorOpportunities';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominion - International Literary Publishing</title>
        <meta name="description" content="A premium international literary publishing institution uniting visionary authors through global anthology initiatives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <HeroSection />
      <FeaturedBooks />
      <AboutSection />
      <GlobalReach />
      <GenresSection />
      <WhyTrustDominion />
      <EditorialPrinciples />
      <ContributorOpportunities />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
