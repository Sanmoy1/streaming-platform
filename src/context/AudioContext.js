import React, { createContext, useContext, useState, useCallback } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);

  const playTrack = useCallback((track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  }, []);

  const playPlaylist = useCallback((playlist, startIndex = 0) => {
    setQueue(playlist);
    setQueueIndex(startIndex);
    setCurrentTrack(playlist[startIndex]);
    setIsPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const nextTrack = useCallback(() => {
    if (queue.length === 0) return;
    const nextIndex = (queueIndex + 1) % queue.length;
    setQueueIndex(nextIndex);
    setCurrentTrack(queue[nextIndex]);
  }, [queue, queueIndex]);

  const previousTrack = useCallback(() => {
    if (queue.length === 0) return;
    const prevIndex = queueIndex === 0 ? queue.length - 1 : queueIndex - 1;
    setQueueIndex(prevIndex);
    setCurrentTrack(queue[prevIndex]);
  }, [queue, queueIndex]);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        queue,
        queueIndex,
        playTrack,
        playPlaylist,
        togglePlay,
        nextTrack,
        previousTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
