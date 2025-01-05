import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <motion.div
          animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
          className="relative"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for songs, artists, or podcasts..."
            className="w-full px-6 py-4 pl-12 pr-10 rounded-full bg-white/10 backdrop-blur-lg 
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-primary/50 transition-all duration-300"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </motion.div>

        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              type="submit"
              className="absolute top-2 right-2 transform
                       bg-primary px-6 py-2.5 rounded-full text-sm font-medium
                       hover:bg-primary/90 transition-colors duration-300"
            >
              Search
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default SearchBar;
