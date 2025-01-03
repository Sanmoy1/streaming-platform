import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../../context/AudioContext';

const NowPlaying = () => {
  const { currentTrack } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="flex items-center gap-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4"
      >
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-14 h-14 rounded-lg"
        />
        <div>
          <h3 className="font-medium text-sm line-clamp-1">{currentTrack.title}</h3>
          <p className="text-xs text-gray-400">{currentTrack.artist}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NowPlaying;
