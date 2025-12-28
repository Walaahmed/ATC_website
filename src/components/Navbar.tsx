import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "خدماتنا" },
    { href: "/blog", label: "المدونة" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-primary/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-bold text-xl">ATC</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">آفاق التميز</h1>
              <p className="text-xs text-muted-foreground">للاستشارات والتدريب</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {link.label}
                  </motion.span>
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute -bottom-1 right-0 w-full h-0.5 bg-gradient-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gold" size="default">
                  ابدأ الآن
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden mt-4 py-4 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} variants={mobileItemVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive(link.href) ? "text-primary" : "text-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants}>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="gold" className="w-full mt-2">
                      ابدأ الآن
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
