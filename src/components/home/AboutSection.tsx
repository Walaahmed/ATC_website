import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Star, Target, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutTeam from '@/assets/about-team.jpg';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const stats = [
    { icon: Users, value: '5000+', label: t('about.stat1') },
    { icon: Award, value: '500+', label: t('about.stat2') },
    { icon: Star, value: '98%', label: t('about.stat3') },
    { icon: Target, value: '25+', label: t('about.stat4') },
  ];

  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3'),
    t('about.feature4'),
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
         <motion.div
  initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="relative">
    {/* Main Image */}
    <div className="relative rounded-2xl overflow-hidden shadow-strong">
      <img
        src={aboutTeam}
        alt="ATC Consulting Team"
        className="w-full h-[350px] md:h-[450px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
    </div>
    
    {/* Experience Badge فقط - إحذف الإطار الأصفر */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`absolute -bottom-8 ${isRTL ? '-left-8' : '-right-8'} bg-primary rounded-xl shadow-strong p-5 hidden md:block`}
    >
      <div className="text-center text-primary-foreground">
        <div className="text-3xl font-bold">25+</div>
        <div className="text-sm opacity-80">{t('about.yearsExcellence')}</div>
      </div>
    </motion.div>
  </div>
</motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium text-accent">{t('about.badge')}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {t('about.title')}
              <span className="block text-accent mt-2">{t('about.subtitle')}</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
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
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-accent/5 transition-colors border border-border/50"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;