import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import backgroundImage from '../assets/background.webp';
import heroIllustration from '../assets/hero_illustration.svg';
import { HeartHandshake, Blocks, Users } from "lucide-react"; // Icônes

const Home = () => {
  const { t } = useTranslation();
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
          {/* Texte gauche */}
          <div className="md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('home.title')}
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl mb-8 drop-shadow-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
            >
              {t('home.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="/donate"
                className="bg-accent hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full text-xl transform hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                {t('home.donate')}
              </Link>
            </motion.div>
          </div>

          {/* Illustration droite */}
          <motion.div
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <motion.img
              src={heroIllustration}
              alt={t('home.heroAlt')}
              className="w-full max-w-md h-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">{t('home.ourGoals')}</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Objectif 1 */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <HeartHandshake className="w-12 h-12 text-accent mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">{t('home.socialHelp')}</h3>
              <p className="text-text-primary">
                {t('home.socialHelpText')}
              </p>
            </motion.div>

            {/* Objectif 2 */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Blocks className="w-12 h-12 text-accent mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">{t('home.blockchainPromo')}</h3>
              <p className="text-text-primary">
                {t('home.blockchainPromoText')}
              </p>
            </motion.div>

            {/* Objectif 3 */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/30 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <Users className="w-12 h-12 text-accent mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">{t('home.mobilization')}</h3>
              <p className="text-text-primary">
                {t('home.mobilizationText')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary">{t('home.recentProjects')}</h2>
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
                  <Link to={`/projects/${project.id}`} className="text-accent hover:text-green-700 font-bold self-start">{t('home.learnMore')}</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <Link to="/projects" className="mt-12 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-10 rounded-full text-xl transform hover:scale-105 transition-transform duration-300 shadow-lg">{t('home.seeAllProjects')}</Link>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />
    </div>
  );
};

export default Home;
