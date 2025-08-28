import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) => (
    `p-2 mx-2 rounded-md transition-colors duration-300 font-medium text-lg ${
      isActive 
        ? 'text-blue-600 font-semibold' 
        : 'text-gray-700 hover:text-blue-600'
    }`
  );

  const mobileNavLinkStyle = ({ isActive }) => (
    `block w-full text-left py-3 px-4 text-lg transition-colors duration-300 ${
      isActive 
        ? 'bg-blue-50 text-blue-600 font-semibold' 
        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
    }`
  );

  return (
    <header className="bg-white p-4 sticky top-0 z-50 font-sans shadow-md backdrop-blur-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src={logo} alt="Blockchain BENIN Charity Logo" className="h-12" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavLink to="/" className={navLinkStyle}>Accueil</NavLink>
          <NavLink to="/projects" className={navLinkStyle}>Projets</NavLink>
          <NavLink to="/gallery" className={navLinkStyle}>Galerie</NavLink>
          <NavLink to="/blog" className={navLinkStyle}>Blog</NavLink>
          <NavLink to="/about" className={navLinkStyle}>À propos</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          <motion.div whileHover={{ scale: 1.1 }} className="ml-4">
            <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-md">
              Faire un don
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            aria-label="Ouvrir le menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-blue-600 focus:outline-none"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d={isMobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute top-full left-0 w-full py-2 shadow-lg"
          >
            <NavLink to="/" className={mobileNavLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Accueil</NavLink>
            <NavLink to="/projects" className={mobileNavLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Projets</NavLink>
            <NavLink to="/gallery" className={mobileNavLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Galerie</NavLink>
            <NavLink to="/blog" className={mobileNavLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/about" className={mobileNavLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>À propos</NavLink>
            <NavLink to="/contact" className={mobileNavLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            <Link 
              to="/donate" 
              className="block w-full text-left py-3 px-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors duration-300 mt-2 shadow-md" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Faire un don
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
