import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logoFooter from '../assets/logo_footer.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate newsletter subscription
    console.log('Newsletter subscription for:', email);
    setSubmitted(true);
    setEmail(''); // Clear email field
  };

  return (
    <footer className="bg-primary text-gray-200 p-8 mt-8 font-sans">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <img src={logoFooter} alt={t('footer.logoAlt')} className="h-16 mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{t('footer.title')}</h3>
            <p className="text-gray-300">{t('footer.description')}</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61563160310976" className="text-gray-300 hover:text-white transition-colors duration-300"><FaFacebook size={24}/></a>
              <a href="https://x.com/BlockchainBENIN" className="text-gray-300 hover:text-white transition-colors duration-300"><FaTwitter size={24} / ></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/company/blockchain-benin/posts/?feedView=all" className="text-gray-300 hover:text-white transition-colors duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.quickLinksTitle')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/projects" className="hover:text-white transition-colors duration-300">{t('footer.projectsLink')}</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors duration-300">{t('footer.blogLink')}</a></li>
              <li><a href="/about" className="hover:text-white transition-colors duration-300">{t('footer.aboutLink')}</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-300">{t('footer.contactLink')}</a></li>
              <li><a href="/donate" className="hover:text-white transition-colors duration-300">{t('footer.donateLink')}</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.newsletterTitle')}</h3>
            {submitted ? (
              <div className="p-4 bg-accent/20 text-accent-dark rounded-lg text-center">
                <p>{t('footer.newsletterSuccess')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="p-3 rounded-lg border border-gray-600 bg-primary/50 focus:ring-2 focus:ring-secondary focus:border-transparent transition text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button 
                  type="submit" 
                  className="bg-accent hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  {t('footer.subscribeButton')}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;