import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(50);
  const [message, setMessage] = useState('');

  const handleDonate = (method) => {
    setMessage(t('donate.donationMessage', { amount, method }));
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t('donate.title')}
      </motion.h1>
      <motion.div 
        className="bg-white/60 backdrop-blur-md border border-white/30 p-10 rounded-xl shadow-xl max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-text-primary mb-8 text-center text-lg">{t('donate.subtitle')}</p>
        
        <div className="mb-6">
          <label htmlFor="amount" className="block text-lg font-medium text-text-primary mb-2">{t('donate.amountLabel')}</label>
          <input 
            type="number" 
            id="amount" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            placeholder={t('donate.amountPlaceholder')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleDonate(t('donate.mobileMoneyButton'))} className="bg-accent hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md">
            {t('donate.mobileMoneyButton')}
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleDonate(t('donate.cardButton'))} className="bg-secondary hover:bg-primary text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md">
            {t('donate.cardButton')}
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleDonate(t('donate.cryptoButton'))} className="bg-dark hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md">
            {t('donate.cryptoButton')}
          </motion.button>
        </div>

        {message && (
          <div className="mt-8 p-4 bg-yellow-100/80 backdrop-blur-sm border border-yellow-200/50 text-yellow-900 rounded-lg text-center">
            {message}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Donate;