import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAudio } from '../../context/AudioContext';

const PlaylistCard = ({ playlist, onOptionsClick }) => {
  const { playPlaylist } = useAudio();

  const handlePlay = (e) => {
    e.preventDefault();
    playPlaylist(playlist.songs);
  };

  return (
    <Link to={`/playlist/${playlist.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/5 rounded-xl overflow-hidden group"
      >
        <div className="relative aspect-square">
          <div className="grid grid-cols-2 h-full">
            {playlist.songs.slice(0, 4).map((song, index) => (
              <div key={index} className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlay}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary
                     flex items-center justify-center opacity-0 group-hover:opacity-100
                     transition-opacity"
          >
            <FaPlay className="text-white ml-1" />
          </motion.button>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold line-clamp-1">{playlist.name}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                {playlist.description}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                onOptionsClick(playlist);
              }}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaEllipsisH />
            </motion.button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
            <span>{playlist.songs.length} songs</span>
            <span>•</span>
            <span>{playlist.duration}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PlaylistCard;
