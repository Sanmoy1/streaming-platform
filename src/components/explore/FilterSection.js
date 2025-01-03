import React from 'react';
import { motion } from 'framer-motion';

const FilterSection = ({ activeFilters, onFilterChange }) => {
  const genres = [
    'All', 'Pop', 'Rock', 'Hip Hop', 'Jazz', 'Classical', 'Electronic',
    'R&B', 'Country', 'Folk', 'Latin'
  ];

  const moods = [
    'Happy', 'Chill', 'Energetic', 'Romantic', 'Sad', 'Focus'
  ];

  const types = [
    'Songs', 'Albums', 'Podcasts', 'Artists'
  ];

  return (
    <div className="space-y-6">
      {/* Content Type Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Type</h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange('type', type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${activeFilters.type === type 
                  ? 'bg-primary text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'}`}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Genre Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Genres</h3>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <motion.button
              key={genre}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange('genre', genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${activeFilters.genre === genre 
                  ? 'bg-secondary text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'}`}
            >
              {genre}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mood Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Mood</h3>
        <div className="flex flex-wrap gap-2">
          {moods.map((mood) => (
            <motion.button
              key={mood}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange('mood', mood)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${activeFilters.mood === mood 
                  ? 'bg-accent text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'}`}
            >
              {mood}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
