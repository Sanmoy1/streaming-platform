import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2, FiSettings, FiUser, FiClock, FiMusic, FiHeart } from 'react-icons/fi';
import { userData } from '../data/user';

const StatCard = ({ icon: Icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/5 p-4 rounded-xl flex items-center gap-4"
  >
    <div className="p-3 bg-primary/20 rounded-lg">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </motion.div>
);

const PreferenceToggle = ({ label, enabled, onChange }) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-gray-300">{label}</span>
    <button
      onClick={() => onChange(!enabled)}
      className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
        enabled ? 'bg-primary' : 'bg-gray-600'
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out transform ${
          enabled ? 'translate-x-7' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

const Profile = () => {
  const [preferences, setPreferences] = useState(userData.preferences.notifications);

  const handleNotificationChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-6 py-8 min-h-screen">
      {/* Profile Header */}
      <div className="flex items-center gap-8 mb-12">
        <div className="relative">
          <img
            src={userData.avatar}
            alt={userData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
          />
          <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white">
            <FiEdit2 className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
          <p className="text-gray-400 mb-4">@{userData.username}</p>
          <p className="text-sm text-gray-500">
            Member since {formatDate(userData.joinDate)}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          icon={FiMusic}
          label="Playlists Created"
          value={userData.stats.playlistsCreated}
        />
        <StatCard
          icon={FiHeart}
          label="Tracks Liked"
          value={userData.stats.tracksLiked}
        />
        <StatCard
          icon={FiClock}
          label="Hours Listened"
          value={userData.stats.hoursListened}
        />
        <StatCard
          icon={FiUser}
          label="Followers"
          value={userData.stats.followers}
        />
      </div>

      {/* Recent Activity & Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white/5 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="space-y-4">
            {userData.recentlyPlayed.map(track => (
              <motion.div
                key={track.id}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5"
              >
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(track.playedAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white/5 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <FiSettings className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Preferences</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-gray-300">Email:</span> {userData.email}
              </p>
              <p className="text-gray-400">
                <span className="text-gray-300">Language:</span> {userData.preferences.language}
              </p>
              <p className="text-gray-400">
                <span className="text-gray-300">Audio Quality:</span> {userData.preferences.audioQuality}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <div className="space-y-2">
              <PreferenceToggle
                label="New Releases"
                enabled={preferences.newReleases}
                onChange={(value) => handleNotificationChange('newReleases', value)}
              />
              <PreferenceToggle
                label="Playlist Updates"
                enabled={preferences.playlistUpdates}
                onChange={(value) => handleNotificationChange('playlistUpdates', value)}
              />
              <PreferenceToggle
                label="Artist Updates"
                enabled={preferences.artistUpdates}
                onChange={(value) => handleNotificationChange('artistUpdates', value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
