import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaHeart } from 'react-icons/fa';

const MusicCard = ({ title, artist, cover, type = 'song' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-lg overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold truncate">{title}</h3>
          <p className="text-sm text-gray-300 truncate">{artist}</p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
            >
              <FaPlay className="text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            >
              <FaHeart className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Type Badge */}
      {type && (
        <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium bg-primary/80">
          {type}
        </div>
      )}
    </motion.div>
  );
};

export default MusicCard;
