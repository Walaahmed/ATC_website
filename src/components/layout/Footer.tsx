import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { name: t('footer.home'), path: '/' },
    { name: t('footer.about'), path: '/about' },
    { name: t('footer.services'), path: '/services' },
    { name: t('footer.contact'), path: '/contact' },
  ];

  // const socialLinks = [
  //   { 
  //     name: 'Facebook', 
  //     url: 'https://www.facebook.com/atcconsultancy', 
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  //       </svg>
  //     )
  //   },
  //   { 
  //     name: 'Twitter', 
  //     url: 'https://twitter.com/atcconsultancy', 
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  //       </svg>
  //     )
  //   },
  //   { 
  //     name: 'LinkedIn', 
  //     url: 'https://www.linkedin.com/company/atc-consulting-training', 
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  //       </svg>
  //     )
  //   },
  //   { 
  //     name: 'Instagram', 
  //     url: 'https://www.instagram.com/atcconsultancy', 
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  //       </svg>
  //     )
  //   },
  //   { 
  //     name: 'YouTube', 
  //     url: 'https://www.youtube.com/channel/UCatcconsultancy', 
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  //       </svg>
  //     )
  //   },
  //   { 
  //     name: 'WhatsApp', 
  //     url: 'https://wa.me/971566613952', 
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  //       </svg>
  //     )
  //   },
  // ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-[120px]" />
      </div>

    
      {/* Main Footer */}
      <div className="container-custom py-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
  {/* Logo مع كلمة Consulting */}
  <div className="flex items-center gap-3 mb-6">
    {/* اللوجو بدون خلفية - نفس تصميم النافبار */}
 <img
  src="/atc-logo.png"
  alt="ATC Logo"
  className="
    w-14 h-14
    sm:w-16 sm:h-16
    md:w-18 md:h-18
    lg:w-20 lg:h-20
    object-cover
    rounded-full
    bg-white
    p-1
    shadow-sm
    border border-white/20
    transition-all duration-300
    group-hover:brightness-110
    group-hover:scale-105
  "
  style={{
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  }}
/>
    <div className={isRTL ? 'text-right' : 'text-left'}>
      <h3 className="
        font-display font-bold 
        text-xl sm:text-2xl md:text-3xl
        text-white
        leading-tight
      ">
        {isRTL ? 'الاستشارات' : 'Consulting'}
      </h3>
      <p className="
        text-sm sm:text-base
        text-white/80
        font-medium
        mt-0.5
      ">
      </p>
    </div>
  </div>

  {/* وصف الشركة */}
  <p className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base">
    {t('footer.companyDescription')}
  </p>
  
  {/* Social Links (مش محتاجها دلوقتي) */}
</motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-display font-bold mb-8 relative inline-block">
              {t('footer.quickLinks')}
              <span className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-12 h-1 bg-gradient-gold rounded-full`} />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-display font-bold mb-8 relative inline-block">
              {t('footer.ourServices')}
              <span className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-12 h-1 bg-gradient-gold rounded-full`} />
            </h4>
            <ul className="space-y-4">
              {[t('footer.service1'), t('footer.service2'), t('footer.service3'), t('footer.service4')].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-display font-bold mb-8 relative inline-block">
              {t('footer.contactUs')}
              <span className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-12 h-1 bg-gradient-gold rounded-full`} />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-primary-foreground/70">
                  {i18n.language === 'ar' 
                    ? 'دبي - الخليج التجاري'
                    : 'Dubai - Business Bay'}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <a href="tel:+971566613952" className="text-primary-foreground/70 hover:text-accent transition-colors" dir="ltr">
                  +971 50 426 7486
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a href="mailto:info@atc-ae.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  info@atc-ae.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 relative">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
            <p className="text-primary-foreground/60 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;