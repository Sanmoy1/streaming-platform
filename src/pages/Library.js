import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import PlaylistCard from '../components/library/PlaylistCard';
import CreatePlaylistModal from '../components/library/CreatePlaylistModal';
import { userPlaylists } from '../data/library';

const Library = () => {
  const [playlists, setPlaylists] = useState(userPlaylists);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreatePlaylist = (newPlaylist) => {
    setPlaylists(prev => [
      {
        ...newPlaylist,
        id: Math.max(...prev.map(p => p.id)) + 1
      },
      ...prev
    ]);
  };

  const handleOptionsClick = (playlist) => {
    // Implement playlist options menu (edit, delete, etc.)
    console.log('Options clicked for playlist:', playlist.name);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Your Library</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg
                       hover:bg-primary/90 transition-colors"
            >
              <FaPlus />
              Create Playlist
            </motion.button>
          </div>
        </div>
      </div>

      {/* Playlists Grid */}
      <div className="container mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onOptionsClick={handleOptionsClick}
            />
          ))}
        </div>

        {playlists.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-400">
              No playlists yet
            </h3>
            <p className="text-gray-500 mt-2">
              Create your first playlist to start organizing your music
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCreateModalOpen(true)}
              className="mt-6 flex items-center gap-2 bg-primary px-6 py-3 rounded-lg
                       hover:bg-primary/90 transition-colors mx-auto"
            >
              <FaPlus />
              Create Playlist
            </motion.button>
          </div>
        )}
      </div>

      {/* Create Playlist Modal */}
      <CreatePlaylistModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreatePlaylist={handleCreatePlaylist}
      />
    </div>
  );
};

export default Library;
