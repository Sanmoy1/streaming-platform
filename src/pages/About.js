import React from 'react';
import { motion } from 'framer-motion';
import { FiMusic, FiRadio, FiHeart, FiHeadphones, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white/5 p-6 rounded-xl"
  >
    <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const TeamMember = ({ name, role, image, socials }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-center"
  >
    <div className="relative mb-4 group">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mx-auto"
      />
      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
            <FiTwitter className="w-5 h-5" />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
            <FiLinkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </motion.div>
);

const About = () => {
  const features = [
    {
      icon: FiMusic,
      title: "Millions of Tracks",
      description: "Access a vast library of songs, albums, and podcasts from around the world."
    },
    {
      icon: FiRadio,
      title: "Personalized Radio",
      description: "Enjoy custom radio stations based on your music taste and listening history."
    },
    {
      icon: FiHeart,
      title: "Create & Share",
      description: "Build your own playlists and share your favorite music with friends and followers."
    },
    {
      icon: FiHeadphones,
      title: "High Quality Audio",
      description: "Experience crystal-clear sound with our high-definition audio streaming."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Michael Ross",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Emily Taylor",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary/20 to-background py-24 mb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Music for Everyone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            We're on a mission to bring the joy of music to everyone through
            seamless streaming, personalized experiences, and high-quality audio.
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/5 py-16 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">10M+</h3>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">50M+</h3>
              <p className="text-gray-400">Songs</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
              <p className="text-gray-400">Artists</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-gray-400">Playlists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white/5 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            To create the ultimate music streaming experience by combining cutting-edge
            technology with a deep love for music. We believe in the power of music
            to connect, inspire, and transform lives.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold"
          >
            Join Our Journey
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
