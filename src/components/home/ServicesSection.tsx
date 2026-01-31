
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, Monitor, GraduationCap, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

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

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      icon: Building2,
      slug: 'consulting',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [
        t('services.consulting.feature1'),
        t('services.consulting.feature2'),
        t('services.consulting.feature3'),
      ],
      buttonText: isRTL ? 'استكشف الاستشارات' : 'Explore Consulting',
      color: 'from-emerald-500 to-emerald-600',
      bgGlow: 'bg-emerald-500/20',
    },
    {
      icon: Cpu,
      slug: 'digital-transformation',
      title: isRTL ? 'التحول الرقمي والاستشارات التقنية' : 'Digital Transformation & Tech Consulting',
      description: isRTL 
        ? 'نقود رحلة التحول الرقمي للمؤسسات باستخدام الذكاء الاصطناعي، الميتافيرس، الأمن السيبراني، والبنية التحتية المتطورة.'
        : 'We lead digital transformation journeys for institutions using AI, metaverse, cybersecurity, and advanced infrastructure.',
      features: [
        isRTL ? 'الذكاء الاصطناعي والميتافيرس' : 'AI & Metaverse',
        isRTL ? 'الأمن السيبراني والتوأم الرقمي' : 'Cybersecurity & Digital Twin',
        isRTL ? 'استراتيجيات التحول الرقمي' : 'Digital Transformation Strategies',
      ],
      buttonText: isRTL ? 'اكتشف التحول الرقمي' : 'Discover Digital Transformation',
      color: 'from-blue-500 to-blue-600',
      bgGlow: 'bg-blue-500/20',
    },
    {
      icon: GraduationCap,
      slug: 'training',
      title: t('services.training.title'),
      description: t('services.training.description'),
      features: [
        t('services.training.feature1'),
        t('services.training.feature2'),
        t('services.training.feature3'),
      ],
      buttonText: isRTL ? 'استعرض التدريب' : 'Browse Training',
      color: 'from-amber-500 to-amber-600',
      bgGlow: 'bg-amber-500/20',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden border-y border-border/30">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/15 text-accent text-sm font-medium mb-6 border border-accent/25"
          >
            <Sparkles className="w-4 h-4" />
            {t('services.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            {t('services.title')} <span className="text-accent">{t('services.titleHighlight')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-white border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-strong transition-all duration-500 h-full flex flex-col">
                {/* Title Header */}
                <div className="bg-primary p-6 flex items-center gap-4">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary-foreground">
                    {service.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col flex-1 p-6 bg-gradient-to-br from-white to-blue-50/50">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 mt-2">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300"
                  >
                    <span>{service.buttonText}</span>
                    <motion.div
                      animate={{ x: isRTL ? [0, -5, 0] : [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowIcon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold ${isRTL ? 'origin-right' : 'origin-left'}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" asChild className="shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
            <Link to="/services" className="group">
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              {isRTL ? 'اكتشف جميع خدماتنا' : 'Discover All Our Services'}
              <motion.div
                animate={{ x: isRTL ? [0, -5, 0] : [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowIcon className="w-4 h-4" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;