import React from 'react';
import { gallery } from '../data';
import { motion } from 'framer-motion';

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150 } }
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Galerie d'Images
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {gallery.map(image => (
          <motion.div 
            key={image.id} 
            variants={itemVariants}
            className="overflow-hidden rounded-xl shadow-xl bg-white/60 backdrop-blur-md border border-white/30"
          >
            <motion.img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;