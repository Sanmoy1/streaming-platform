import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '../components/explore/SearchBar';
import FilterSection from '../components/explore/FilterSection';
import MusicCard from '../components/common/MusicCard';
import { exploreData } from '../data/explore';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    type: 'All',
    genre: 'All',
    mood: 'All'
  });
  const [filteredData, setFilteredData] = useState(exploreData);

  // Filter and search logic
  useEffect(() => {
    let results = exploreData;

    // Apply search filter
    if (searchTerm) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (activeFilters.type !== 'All') {
      results = results.filter(item => item.type === activeFilters.type);
    }

    // Apply genre filter
    if (activeFilters.genre !== 'All') {
      results = results.filter(item => item.genre === activeFilters.genre);
    }

    // Apply mood filter
    if (activeFilters.mood !== 'All') {
      results = results.filter(item => item.mood === activeFilters.mood);
    }

    setFilteredData(results);
  }, [searchTerm, activeFilters]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Search Section */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Explore</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="md:w-1/4">
            <div className="sticky top-20">
              <FilterSection
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Results */}
          <div className="md:w-3/4">
            <AnimatePresence mode="wait">
              {filteredData.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredData.map((item) => (
                    <MusicCard
                      key={item.id}
                      title={item.title}
                      artist={item.artist}
                      cover={item.cover}
                      type={item.type}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <h3 className="text-2xl font-semibold text-gray-400">
                    No results found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search or filters
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
