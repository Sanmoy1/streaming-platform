import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import { trendingSongs, featuredPodcasts, newReleases } from '../data/featured';

const Home = () => {
  return (
    <div className="min-h-screen pb-20">
      <HeroSection />
      
      <div className="space-y-8 mt-8">
        <FeaturedSection title="Trending Songs" items={trendingSongs} />
        <FeaturedSection title="Featured Podcasts" items={featuredPodcasts} />
        <FeaturedSection title="New Releases" items={newReleases} />
      </div>
    </div>
  );
};

export default Home;
