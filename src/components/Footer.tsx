import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/atcae", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/atcae", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/atcae", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/atcae", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "خدماتنا", href: "/services" },
    { label: "المدونة", href: "/blog" },
    { label: "اتصل بنا", href: "/contact" },
  ];

  const services = [
    "التدريب المؤسسي",
    "الاستشارات الإدارية",
    "تقنيات الميتافيرس",
    "الذكاء الاصطناعي",
    "البلوكشين",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer ref={ref} className="relative bg-gradient-navy border-t border-border/50">
      {/* Decorative Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-primary/50 to-transparent origin-center"
      />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold"
              >
                <span className="text-primary-foreground font-bold text-xl">ATC</span>
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-foreground">آفاق التميز</h3>
                <p className="text-xs text-muted-foreground">للاستشارات والتدريب</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              نحن متخصصون في تقديم خدمات التدريب والاستشارات بخبرة تزيد عن 25 عامًا، 
              ملتزمون بتقديم التميز على مستوى العالم.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-foreground mb-6 relative">
              روابط سريعة
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-gold rounded-full origin-right"
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm inline-block"
                  >
                    <motion.span whileHover={{ x: -5 }} className="inline-block">
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-foreground mb-6 relative">
              خدماتنا
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-gold rounded-full origin-right"
              />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm inline-block"
                  >
                    <motion.span whileHover={{ x: -5 }} className="inline-block">
                      {service}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-foreground mb-6 relative">
              تواصل معنا
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-gold rounded-full origin-right"
              />
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <motion.div whileHover={{ scale: 1.2 }}>
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                </motion.div>
                <span className="text-muted-foreground text-sm">
                  دبي - الممزر - بناء AB Plaza8 - مكتب رقم 202
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <motion.a
                  href="tel:+971566613952"
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span dir="ltr">+971 56 661 3952</span>
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.9, duration: 0.3 }}
              >
                <motion.a
                  href="mailto:info@atc-ae.com"
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  info@atc-ae.com
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} آفاق التميز للاستشارات والتدريب. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  الشروط والأحكام
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
