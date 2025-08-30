import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t('contact.title')}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/30 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-secondary">{t('contact.formTitle')}</h2>
          {submitted ? (
            <div className="text-center p-4 bg-accent/20 text-accent-dark rounded-lg">
              <p>{t('contact.successMessage')}</p>
              <p className='text-sm'>{t('contact.simulationMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">{t('contact.formNameLabel')}</label>
                <input type="text" id="name" className="w-full p-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">{t('contact.formEmailLabel')}</label>
                <input type="email" id="email" className="w-full p-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">{t('contact.formMessageLabel')}</label>
                <textarea id="message" rows="5" className="w-full p-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition" required></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                {t('contact.formSubmitButton')}
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div
          className="bg-white/60 backdrop-blur-md border border-white/30 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-secondary">{t('contact.detailsTitle')}</h2>
          <div className="space-y-4 text-lg text-text-primary">
            <p><strong>{t('contact.addressLabel')}</strong> {t('contact.addressValue')}</p>
            <p><strong>{t('contact.phoneLabel')}</strong> {t('contact.phoneValue')}</p>
            <p><strong>{t('contact.emailLabel')}</strong> {t('contact.emailValue')}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-secondary">{t('contact.followUsTitle')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300"><FaFacebook size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300"><FaTwitter size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300"><FaInstagram size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300"><FaLinkedin size={28} /></a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
