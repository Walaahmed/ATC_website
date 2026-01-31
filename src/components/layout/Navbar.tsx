import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isRTL = i18n?.dir?.() === 'rtl';

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: isRTL ? 'القطاعات' : 'Sectors', path: '/sectors' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-medium py-3 border-b border-border/50' 
          : 'bg-white/90 backdrop-blur-lg py-4 border-b border-border/30'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
         <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <img
      src="/atc-logo.png" 
      alt="ATC Logo"
      className="
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
        
        object-contain
        rounded-none 
        
        bg-transparent
        shadow-none
        border-none
        
        transition-all duration-300
        group-hover:brightness-110
        group-hover:scale-105
      "
      style={{
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    />
  </motion.div>

  {/* Company Name & Slogan - تكبير النص برضه */}
  <div className={isRTL ? 'text-right' : 'text-left'}>
    <motion.h1 
      whileHover={{ scale: 1.02 }}
      className="
        font-display font-bold 
        text-lg sm:text-xl md:text-2xl lg:text-3xl 
        text-gray-900
        leading-tight
        tracking-tight
      "
    >
      {t('nav.companyName')}
    </motion.h1>
    <p className="
      text-sm sm:text-base md:text-lg  
      text-gray-600 font-medium
      mt-1
      opacity-90
    ">
      {t('nav.companySlogan')}
    </p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  location.pathname === link.path || 
                  (link.path === '/services' && location.pathname.startsWith('/services'))
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                {link.name}
                {(location.pathname === link.path || 
                  (link.path === '/services' && location.pathname.startsWith('/services'))) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 right-2 left-2 h-0.5 bg-gradient-gold rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="default" size="lg" asChild className="group shadow-medium bg-primary hover:bg-primary/90">
              <Link to="/book-consultation">
                <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                <span>{t('nav.startNow')}</span>
              </Link>
            </Button>
          </div>

          {/* Mobile: Language Switcher & Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border"
          >
            <div className="container-custom py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
                      location.pathname === link.path ||
                      (link.path === '/services' && location.pathname.startsWith('/services'))
                        ? 'bg-gradient-primary text-primary-foreground shadow-medium'
                        : 'text-foreground hover:bg-accent/10 hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="pt-4"
              >
                <Button variant="default" className="w-full shadow-medium bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link to="/book-consultation">
                    <Sparkles className="w-4 h-4" />
                    {t('nav.startNow')}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;