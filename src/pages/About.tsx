import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import Partners3DSlider from '@/components/partners/Partners3DSlider';
import { Users, BookOpen, Award, Star, MessageCircle } from 'lucide-react';
import heroMeeting from '@/assets/about-team.jpg';

// Counter animation component
const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const stats = [
    { icon: Users, value: 5000, suffix: '+', label: t('aboutPage.stat1Label') },
    { icon: BookOpen, value: 500, suffix: '+', label: t('aboutPage.stat2Label') },
    { icon: Award, value: 100, suffix: '+', label: t('aboutPage.stat3Label') },
    { icon: Star, value: 98, suffix: '%', label: t('aboutPage.stat4Label') },
  ];

  const pills = [
    t('aboutPage.pill1'),
    t('aboutPage.pill2'),
    t('aboutPage.pill3'),
    t('aboutPage.pill4'),
  ];

  return (
    <Layout>
      {/* Hero Section - Same as Home Page */}
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${isRTL ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 text-accent border border-accent/25 font-medium backdrop-blur-sm mb-8">
                  <Award className="w-4 h-4 animate-pulse" />
                  <span className="text-sm">{t('aboutPage.badge')}</span>
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6"
              >
                {t('aboutPage.title1')}{' '}
                <span className="relative inline-block">
                  <span className="text-accent">{t('aboutPage.titleHighlight')}</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className={`absolute -bottom-2 ${isRTL ? 'right-0 origin-right' : 'left-0 origin-left'} w-full h-1.5 bg-gradient-gold rounded-full`}
                  />
                </span>
                {' '}{t('aboutPage.title2')}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-primary font-medium mb-4"
              >
                {t('aboutPage.companyName')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
              >
                {t('aboutPage.description')}
              </motion.p>

              {/* Features Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {pills.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium border border-primary/20 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className={`${isRTL ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
>
  <div className="relative">
    {/* Main Image */}
    <div className="relative rounded-2xl overflow-hidden shadow-strong">
      <img
        src={heroMeeting}
        alt="ATC Consulting Team"
        className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
    
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

      {/* Stats Section */}
      <section className="py-20 bg-background -mt-10 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-soft"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutPage.visionTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('aboutPage.visionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-soft"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutPage.missionTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('aboutPage.missionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
         {/* WhatsApp Floating Icon */}
             <motion.a
               href={`https://wa.me/971504267486?text=${encodeURIComponent(
                 isRTL 
                   ? 'السلام عليكم، أود الاستفسار عن خدماتكم '
                   : 'Hello, I would like to inquire about  services'
               )}`}
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5, duration: 0.3 }}
               className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
             >
               <MessageCircle className="w-6 h-6 text-white" />
               <span className="sr-only">{isRTL ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</span>
             </motion.a>
        {/* Background decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-40 h-40 border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-60 h-60 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20"
            >
              {t('aboutPage.partnersBadge')}
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('aboutPage.partnersTitle')} <span className="text-gradient-gold">{t('aboutPage.partnersTitleHighlight')}</span>
            </h2>
            {/* <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('aboutPage.partnersDescription')}
            </p> */}
          </motion.div>

          <Partners3DSlider />
        </div>
      </section>
    </Layout>
  );
};

export default About;
