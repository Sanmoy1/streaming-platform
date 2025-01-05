import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useAudio } from '../../context/AudioContext';
import NowPlaying from './NowPlaying';

const Player = () => {
  const audioRef = useRef(null);
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    previousTrack
  } = useAudio();

  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showVolumePopup, setShowVolumePopup] = useState(false);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          setIsLoading(true);
          playPromise
            .then(() => {
              setIsLoading(false);
            })
            .catch(error => {
              console.error("Playback error:", error);
              setIsLoading(false);
            });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Handle track change
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      setIsLoading(true);
      setProgress(0);
      setCurrentTime(0);
      audioRef.current.src = currentTrack.audio || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
      
      // Wait for audio to be loaded before playing
      const handleCanPlay = () => {
        setIsLoading(false);
        if (isPlaying) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Playback error:", error);
            });
          }
        }
      };

      const handleError = () => {
        console.error("Error loading audio");
        setIsLoading(false);
      };

      audioRef.current.addEventListener('canplay', handleCanPlay);
      audioRef.current.addEventListener('error', handleError);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplay', handleCanPlay);
          audioRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [currentTrack, isPlaying]);

  // Update progress bar
  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      const current = audioRef.current.currentTime;
      setCurrentTime(current);
      setProgress((current / currentTrack.duration) * 100);
    }
  };

  // Handle seeking start
  const handleSeekStart = () => {
    setIsDragging(true);
  };

  // Handle seeking
  const handleSeek = (e) => {
    const value = parseFloat(e.target.value);
    setProgress(value);
    if (!isDragging) {
      const time = (value / 100) * currentTrack.duration;
      setCurrentTime(time);
    }
  };

  // Handle seeking end
  const handleSeekEnd = (e) => {
    const value = parseFloat(e.target.value);
    const time = (value / 100) * currentTrack.duration;
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
    setIsDragging(false);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  // Toggle mute
  const handleMuteToggle = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Format time
  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-3 md:px-6 md:py-4">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between">
          {/* Now Playing Info */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            <NowPlaying />
          </div>

          {/* Player Controls */}
          <div className="w-full md:flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={previousTrack}
                className="p-2 hover:text-primary transition-colors"
                disabled={isLoading}
              >
                <FaStepBackward className="text-lg" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className={`w-10 h-10 rounded-full flex items-center justify-center
                          ${isLoading ? 'bg-primary/50' : 'bg-primary'}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <FaPause className="text-lg" />
                ) : (
                  <FaPlay className="text-lg ml-1" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTrack}
                className="p-2 hover:text-primary transition-colors"
                disabled={isLoading}
              >
                <FaStepForward className="text-lg" />
              </motion.button>

              {/* Mobile Volume Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVolumePopup(true)}
                className="p-2 hover:text-primary transition-colors md:hidden"
                disabled={isLoading}
              >
                {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
              </motion.button>
            </div>

            <div className="w-full max-w-2xl flex items-center gap-2 px-2">
              <span className="text-[10px] md:text-xs text-gray-400 w-8 md:w-12 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                onMouseDown={handleSeekStart}
                onMouseUp={handleSeekEnd}
                onTouchStart={handleSeekStart}
                onTouchEnd={handleSeekEnd}
                disabled={isLoading}
                className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3
                         [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-primary
                         disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <span className="text-[10px] md:text-xs text-gray-400 w-8 md:w-12">
                {formatTime(currentTrack.duration)}
              </span>
            </div>
          </div>

          {/* Desktop Volume Control */}
          <div className="hidden md:flex w-1/4 justify-end items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMuteToggle}
              className="p-2 hover:text-primary transition-colors"
              disabled={isLoading}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </motion.button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              disabled={isLoading}
              className="w-24 h-1 bg-white/10 rounded-full appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3
                       [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-primary
                       disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      {/* Mobile Volume Popup */}
      <AnimatePresence>
        {showVolumePopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVolumePopup(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-24 left-4 right-4 bg-background/95 backdrop-blur-lg
                       p-4 rounded-lg shadow-xl z-50 mx-auto
                       border border-white/10 max-w-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Volume Control</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleMuteToggle}
                  className="p-1.5 hover:text-primary transition-colors"
                >
                  {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
                </motion.button>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4
                         [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-primary
                         [&::-webkit-slider-thumb]:mt-[-6px]"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
        onLoadedMetadata={(e) => {
          setDuration(currentTrack.duration);
          setProgress(0);
          setCurrentTime(0);
        }}
        preload="auto"
      />
    </div>
  );
};

export default Player;
