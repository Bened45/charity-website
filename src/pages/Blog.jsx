import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts as mockBlogPosts } from '../data';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 700)); // Simulate network delay
        setBlogPosts(mockBlogPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
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
        <h1 className="text-4xl font-bold mb-12">Chargement des articles...</h1>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-red-600">
        <h1 className="text-4xl font-bold mb-12">Erreur de chargement</h1>
        <p className="text-lg">Une erreur est survenue : {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-8 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300"
        >
          Réessayer
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
        Notre Blog
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogPosts.map(post => (
          <motion.div 
            key={post.id} 
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-xl overflow-hidden flex flex-col transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-secondary">{post.title}</h2>
              <p className="text-sm text-text-primary mb-4">Par {post.author} le {post.date}</p>
              <p className="text-text-primary mb-4 flex-grow">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-accent hover:text-green-700 font-bold self-start">Lire la suite</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
