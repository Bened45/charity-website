import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data';

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto p-8 font-sans text-text-primary">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        À Propos de Nous
      </motion.h1>

      <motion.div 
        className="bg-white/60 backdrop-blur-md border border-white/30 p-10 rounded-xl shadow-xl mb-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-secondary">Notre Histoire</h2>
        <p className="text-lg text-text-primary">Blockchain BENIN Charity est la branche caritative du projet Blockchain BENIN. Née de la volonté de mettre la technologie au service de l'humanitaire, notre organisation utilise la blockchain pour garantir des actions transparentes, traçables et véritablement impactantes. Nous croyons que la confiance est le pilier de la générosité, et nous nous engageons à la renforcer à chaque projet.</p>
      </motion.div>

      <motion.div 
        className="bg-white/60 backdrop-blur-md border border-white/30 p-10 rounded-xl shadow-xl mb-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-secondary">Notre Vision</h2>
        <p className="text-lg text-text-primary">Notre vision est double : d'une part, apporter une aide concrète et efficace aux populations vulnérables du Bénin, et d'autre part, devenir un acteur clé dans la vulgarisation de la technologie blockchain, en démontrant son potentiel pour le bien social. Nous aspirons à un futur où chaque donateur peut suivre son don et en constater l'impact direct, renforçant ainsi le lien entre la générosité et l'action.</p>
      </motion.div>

      <motion.div 
        className="bg-white/60 backdrop-blur-md border border-white/30 p-10 rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Notre Équipe Dévouée</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map(member => (
            <motion.div key={member.id} variants={itemVariants} className="flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover shadow-md mb-4" loading="lazy"/>
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-text-primary">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;