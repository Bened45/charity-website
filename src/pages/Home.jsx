import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { motion } from 'framer-motion';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import backgroundImage from '../assets/background.webp';
import heroIllustration from '../assets/hero_illustration.svg'; // Import the illustration

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[550px] text-white flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${backgroundImage})` }}
      >
        <div className="relative z-10 text-center p-4 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0"> {/* Added md:pr-8 */}
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight" // Added leading-tight
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Blockchain BENIN Charity
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl mb-8 drop-shadow-md leading-relaxed" // Removed max-w-4xl, added leading-relaxed
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
            >
              Des actions humanitaires transparentes, traçables et impactantes grâce à la technologie blockchain.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="/donate" className="bg-accent hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full text-xl transform hover:scale-105 transition-transform duration-300 shadow-lg">Faire un don</Link>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <motion.img 
              src={heroIllustration} 
              alt="Hero Illustration" 
              className="w-full max-w-md h-auto"
              animate={{ y: [0, -10, 0] }} // Subtle float animation
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">Nos Objectifs</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={itemVariants} className="p-8 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
              {/* Removed icon */}
              <h3 className="text-2xl font-bold mb-3 text-secondary">Aide Sociale</h3>
              <p className="text-text-primary">Soutenir les populations défavorisées à travers des projets sociaux concrets et mesurables.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-3 text-secondary">Promotion Blockchain</h3>
              <p className="text-text-primary">Promouvoir l’usage de la blockchain pour garantir la transparence et la confiance dans les œuvres sociales.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-3 text-secondary">Mobilisation</h3>
              <p className="text-text-primary">Mobiliser les communautés Web3 et Web2 pour contribuer ensemble au bien commun.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">Nos Projets Récents</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.slice(0, 3).map(project => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 overflow-hidden transform hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" loading="lazy"/>
                <div className="p-6 text-left flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-secondary">{project.title}</h3>
                  <p className="text-text-primary mb-4 flex-grow">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="text-accent hover:text-green-700 font-bold self-start">En savoir plus</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <Link to="/projects" className="mt-12 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-10 rounded-full text-xl transform hover:scale-105 transition-transform duration-300 shadow-lg">Voir tous les projets</Link>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

    </div>
  );
};

export default Home;
