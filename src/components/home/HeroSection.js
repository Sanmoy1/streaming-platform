import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl font-bold mb-6 font-inter">
            Your World of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Music & Podcasts
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover, stream, and share a constantly expanding mix of music and podcasts. 
            Start listening for free.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/explore" 
              className="btn-primary text-lg px-8 py-3 flex items-center gap-2"
            >
              Start Listening
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
            <Link 
              to="/signup" 
              className="btn-secondary text-lg px-8 py-3"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Music Notes Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30 text-4xl"
            initial={{ 
              top: '100%',
              left: `${Math.random() * 100}%`,
              rotate: 0 
            }}
            animate={{ 
              top: '-10%',
              rotate: 360 
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
