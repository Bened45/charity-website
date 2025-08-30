import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects as mockProjects } from '../data';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        // Simulate a potential error (uncomment to test error state)
        // if (Math.random() < 0.3) {
        //   throw new Error("Failed to fetch projects.");
        // }

        setProjects(mockProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-primary">
        <h1 className="text-4xl font-bold mb-12">{t('projects.loading')}</h1>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-red-600">
        <h1 className="text-4xl font-bold mb-12">{t('projects.errorTitle')}</h1>
        <p className="text-lg">{t('projects.errorMessage', { error })}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-8 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300"
        >
          {t('projects.retryButton')}
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 font-sans">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t('projects.title')}
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(project => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-xl overflow-hidden flex flex-col transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <Link to={`/projects/${project.id}`} className="block h-full">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" loading="lazy"/>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-secondary">{project.title}</h2>
                <p className="text-text-primary mb-4 flex-grow">{project.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <motion.div 
                    className="bg-accent h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(project.raised / project.goal) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <div className="flex justify-between text-sm text-text-primary mb-4">
                  <span>{t('projects.raised', { raised: project.raised.toLocaleString() })}</span>
                  <span>{t('projects.goal', { goal: project.goal.toLocaleString() })}</span>
                </div>
                <div className={`text-sm font-bold ${project.status === 'En cours' ? 'text-yellow-500' : 'text-accent'}`}>
                  {t('projects.status', { status: project.status })}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;