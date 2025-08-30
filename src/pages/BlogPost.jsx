import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { blogPosts as mockBlogPosts } from '../data';

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        const foundPost = mockBlogPosts.find(p => p.id === parseInt(id));
        if (!foundPost) {
          throw new Error("Article not found.");
        }
        setPost(foundPost);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-primary">
        <h1 className="text-4xl font-bold mb-12">{t('blogPost.loading')}</h1>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 font-sans text-center text-red-600">
        <h1 className="text-4xl font-bold mb-12">{t('blogPost.errorTitle')}</h1>
        <p className="text-lg">{t('blogPost.errorMessage', { error: error })}</p>
        <Link to="/blog" className="mt-8 inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300">{t('blogPost.backToBlogButton')}</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 font-sans text-text-primary max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold text-center mb-4 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {post.title}
      </motion.h1>
      <p className="text-center text-text-primary mb-8">{t('blogPost.byAuthorOnDate', { author: post.author, date: post.date })}</p>

      <motion.div 
        className="bg-white/60 backdrop-blur-md border border-white/30 p-10 rounded-xl shadow-xl prose lg:prose-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-text-primary">{post.content}</p>
      </motion.div>

      <div className="text-center mt-12">
        <Link to="/blog" className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-transform duration-300 shadow-lg">{t('blogPost.backToBlogButton')}</Link>
      </div>
    </div>
  );
};

export default BlogPost;
