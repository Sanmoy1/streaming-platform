import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaHeart, FaClock } from 'react-icons/fa';
import { userPlaylists } from '../data/library';
import { useAudio } from '../context/AudioContext';

const PlaylistDetail = () => {
  const { id } = useParams();
  const playlist = userPlaylists.find(p => p.id === parseInt(id));
  const { playPlaylist, playTrack, currentTrack, isPlaying } = useAudio();

  if (!playlist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-400">Playlist not found</h1>
      </div>
    );
  }

  const handlePlayPlaylist = () => {
    playPlaylist(playlist.songs);
  };

  const handlePlayTrack = (track, index) => {
    playPlaylist(playlist.songs, index);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="relative h-[400px]">
        {/* Playlist Cover */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-full opacity-50">
            {playlist.songs.slice(0, 4).map((song, index) => (
              <div key={index} className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 pt-20">
          <h1 className="text-5xl font-bold mb-4">{playlist.name}</h1>
          <p className="text-gray-400 mb-6">{playlist.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{playlist.songs.length} songs</span>
            <span>•</span>
            <span>{playlist.duration}</span>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayPlaylist}
              className="w-14 h-14 rounded-full bg-primary flex items-center justify-center"
            >
              <FaPlay className="text-white ml-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"
            >
              <FaHeart className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Songs List */}
      <div className="container mx-auto px-6 mt-8">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="pb-4 text-left font-medium w-16">#</th>
              <th className="pb-4 text-left font-medium">Title</th>
              <th className="pb-4 text-left font-medium">Artist</th>
              <th className="pb-4 text-left font-medium w-16">
                <FaClock />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.songs.map((song, index) => (
              <motion.tr
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handlePlayTrack(song, index)}
                className={`group hover:bg-white/5 transition-colors cursor-pointer
                          ${currentTrack?.id === song.id ? 'text-primary' : ''}`}
              >
                <td className="py-4 text-gray-400">
                  {currentTrack?.id === song.id ? (
                    <div className="w-4 h-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {isPlaying ? (
                          <div className="flex gap-0.5">
                            <div className="w-0.5 h-4 bg-primary animate-music-bar-1" />
                            <div className="w-0.5 h-4 bg-primary animate-music-bar-2" />
                            <div className="w-0.5 h-4 bg-primary animate-music-bar-3" />
                          </div>
                        ) : (
                          <FaPlay className="text-primary text-xs" />
                        )}
                      </div>
                    </div>
                  ) : (
                    index + 1
                  )}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-12 h-12 rounded"
                    />
                    <span className="font-medium">{song.title}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-400">{song.artist}</td>
                <td className="py-4 text-gray-400">3:45</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistDetail;
