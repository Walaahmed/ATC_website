import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import heroMeeting from '@/assets/hero.jpg';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-secondary to-blue-50 overflow-hidden pt-28 lg:pt-32">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]"
        />
        <motion.div
          animate={{ 
            y: [30, -30, 30],
            x: [20, -20, 20],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"
        />
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`order-2 ${isRTL ? 'lg:order-1' : 'lg:order-1'}`}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 text-accent border border-accent/25 font-medium backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 animate-pulse-soft" />
                <span className="text-sm">{t('hero.badge')}</span>
              </span>
            </motion.div>

            {/* Main Heading */}
          <motion.h1
  variants={itemVariants}
  className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight mb-6"
>
  {t('hero.title1')}{' '}
  <span className="relative inline-block">
    <span className="text-accent">{t('hero.titleHighlight')}</span>
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      className={`absolute -bottom-2 ${isRTL ? 'right-0 origin-right' : 'left-0 origin-left'} w-full h-1.5 bg-gradient-gold rounded-full`}
    />
  </span>
  <br />
  <span className="text-foreground/80">{t('hero.title2')}</span>
</motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
                <Link to="/book-consultation">
                  <span>{t('hero.bookConsultation')}</span>
                  <ArrowIcon className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/services">
                  <span>{t('hero.exploreServices')}</span>
                  <motion.span
                    animate={{ x: isRTL ? [0, -5, 0] : [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowIcon className="w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
       <motion.div
  initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className={`order-1 ${isRTL ? 'lg:order-2' : 'lg:order-2'}`}
>
  <div className="relative">
    {/* Main Image */}
    <div className="relative rounded-2xl overflow-hidden shadow-strong">
      <img
        src={heroMeeting}
        alt="ATC Consulting - Professional Meeting"
        className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
    
    {/* Stats Badge فقط - إحذف الدوائر التانية */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} bg-white rounded-xl shadow-strong p-4 hidden md:block border border-border`}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">25+</div>
        <div className="text-sm text-muted-foreground">{t('hero.yearsExperience')}</div>
      </div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;