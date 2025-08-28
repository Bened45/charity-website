import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logoFooter from '../assets/logo_footer.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
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
            <img src={logoFooter} alt="Blockchain BENIN Charity Logo" className="h-16 mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Blockchain BENIN Charity</h3>
            <p className="text-gray-300">Utilise la technologie blockchain pour des actions humanitaires transparentes et impactantes au Bénin.</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/projects" className="hover:text-white transition-colors duration-300">Projets</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="/about" className="hover:text-white transition-colors duration-300">À propos</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="/donate" className="hover:text-white transition-colors duration-300">Faire un don</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Abonnez-vous à notre Newsletter</h3>
            {submitted ? (
              <div className="p-4 bg-accent/20 text-accent-dark rounded-lg text-center">
                <p>Merci de votre inscription !</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse e-mail" 
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
                  S'abonner
                </motion.button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 Blockchain BENIN Charity. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
