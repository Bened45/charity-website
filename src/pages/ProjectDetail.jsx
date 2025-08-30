import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects as mockProjects } from '../data';

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        const foundProject = mockProjects.find(p => p.id === parseInt(id));
        if (!foundProject) {
          throw new Error("Project not found.");
        }
        setProject(foundProject);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-primary">
        <h1 className="text-4xl font-bold mb-12">{t('projectDetail.loading')}</h1>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-red-600">
        <h1 className="text-4xl font-bold mb-12">{t('projectDetail.errorTitle')}</h1>
        <p className="text-lg">{t('projectDetail.errorMessage', { error: error })}</p>
        <Link to="/projects" className="mt-8 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300">{t('projectDetail.backToProjectsButton')}</Link>
      </div>
    );
  }

  const progress = (project.raised / project.goal) * 100;

  return (
    <div className="container mx-auto p-8 font-sans text-text-primary max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold text-center mb-4 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {project.title}
      </motion.h1>
      <p className="text-center text-text-secondary mb-8">{t('projectDetail.status', { status: project.status })}</p>

      <motion.div 
        className="bg-white/60 backdrop-blur-md border border-white/30 p-10 rounded-xl shadow-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-lg mb-6" loading="lazy"/>
        <p className="text-lg mb-6">{project.description}</p>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <motion.div 
              className="bg-accent h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>
          <div className="flex justify-between text-sm text-text-primary">
            <span>{t('projectDetail.raised', { amount: project.raised.toLocaleString() })}</span>
            <span>{t('projectDetail.goal', { amount: project.goal.toLocaleString() })}</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/donate" className="inline-block bg-accent hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300 shadow-lg">{t('projectDetail.donateButton')}</Link>
        </div>
      </motion.div>

      <div className="text-center mt-12">
        <Link to="/projects" className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300 shadow-lg">{t('projectDetail.backToProjectsButton')}</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
