import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Briefcase, Monitor, GraduationCap, CheckCircle } from 'lucide-react';
import heroMeeting from '@/assets/hero-meeting.jpg';

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Briefcase,
      slug: 'consulting',
      title: t('servicesPage.consulting.title'),
      description: t('servicesPage.consulting.description'),
      features: [
        t('servicesPage.consulting.feature1'),
        t('servicesPage.consulting.feature2'),
        t('servicesPage.consulting.feature3'),
        t('servicesPage.consulting.feature4'),
      ],
      cta: t('servicesPage.consulting.cta'),
    },
    {
      icon: Monitor,
      slug: 'digital-transformation',
      title: t('servicesPage.digital.title'),
      description: t('servicesPage.digital.description'),
      features: [
        t('servicesPage.digital.feature1'),
        t('servicesPage.digital.feature2'),
        t('servicesPage.digital.feature3'),
        t('servicesPage.digital.feature4'),
      ],
      cta: t('servicesPage.digital.cta'),
    },
    {
      icon: GraduationCap,
      slug: 'training',
      title: t('servicesPage.training.title'),
      description: t('servicesPage.training.description'),
      features: [
        t('servicesPage.training.feature1'),
        t('servicesPage.training.feature2'),
        t('servicesPage.training.feature3'),
        t('servicesPage.training.feature4'),
      ],
      cta: t('servicesPage.training.cta'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={isRTL ? '' : 'order-1'}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
              >
                {t('servicesPage.badge')}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              >
                {t('servicesPage.title')}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {t('servicesPage.description')}
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`relative ${isRTL ? '' : 'order-2'}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img 
                  src={heroMeeting} 
                  alt={t('servicesPage.title')} 
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} bg-white rounded-2xl p-4 shadow-medium border border-border`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">+50</p>
                    <p className="text-sm text-muted-foreground">{t('servicesPage.successfulProjects')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col border border-border/50">
                  {/* Title Header with Blue Background */}
                  <div className="bg-primary p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-white to-blue-50/50">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300 group"
                    >
                      <span>{service.cta}</span>
                      <ArrowIcon className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
<section className="section-padding bg-gradient-to-br from-white via-blue-50/40 to-white">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl bg-white shadow-strong p-10 md:p-16 text-center"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d6ad55]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {t('servicesPage.customServiceTitle')}
        </h2>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {t('servicesPage.customServiceDesc')}
        </p>

        <Button
          size="xl"
          asChild
          className="
            bg-gradient-to-b from-[#d6ad55] to-[#b6892e]
            text-white font-semibold
            px-10 py-6 rounded-xl
            shadow-[0_10px_30px_rgba(182,137,46,0.35)]
            hover:brightness-110 hover:scale-[1.03]
            transition-all duration-300
          "
        >
          <Link to="/contact" className="group inline-flex items-center gap-2">
            {t('servicesPage.contactUs')}
            <ArrowIcon
              className={`w-5 h-5 transition-transform duration-300 ${
                isRTL
                  ? 'group-hover:-translate-x-1'
                  : 'group-hover:translate-x-1'
              }`}
            />
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
</section>

    </Layout>
  );
};

export default Services;
