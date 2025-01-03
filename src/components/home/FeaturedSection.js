import React from 'react';
import { motion } from 'framer-motion';
import MusicCard from '../common/MusicCard';

const FeaturedSection = ({ title, items }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MusicCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
