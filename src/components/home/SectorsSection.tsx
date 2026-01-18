import { motion } from 'framer-motion';
import { Building2, Fuel, Landmark, Briefcase, Factory, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const SectorsSection = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      icon: Building2,
      title: t('sectors.sector1'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Fuel,
      title: t('sectors.sector2'),
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Landmark,
      title: t('sectors.sector3'),
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Briefcase,
      title: t('sectors.sector4'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Factory,
      title: t('sectors.sector5'),
      color: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            {t('sectors.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            {t('sectors.title')} <span className="text-primary">{t('sectors.titleHighlight')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
          >
            {t('sectors.subtitle')}
          </motion.p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-500 h-full text-center">
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <sector.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {sector.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsSection;