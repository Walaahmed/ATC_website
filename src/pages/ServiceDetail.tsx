// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import Layout from '@/components/layout/Layout';
// import { Button } from '@/components/ui/button';
// import { ArrowLeft, ArrowRight, CheckCircle, Briefcase, Monitor, GraduationCap, Cpu, Sparkles } from 'lucide-react';
// import heroMeeting from '@/assets/hero-meeting.jpg';

// const getFeatureIcon = (title: string) => {
//   if (title.includes('التقنيات') || title.includes('Technologies')) return <Cpu className="w-6 h-6 text-primary-foreground" />;
//   return <CheckCircle className="w-6 h-6 text-primary-foreground" />;
// };

// const ServiceDetail = () => {
//   const { slug } = useParams();
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === 'ar';
//   const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

//   // Service data with translations
//   const servicesData: Record<string, {
//     icon: typeof Briefcase;
//     title: string;
//     description: string;
//     features: { title: string; items: string[] }[];
//     cta: string;
//     ctaLink: string;
//   }> = {
//     'consulting': {
//       icon: Briefcase,
//       title: t('servicesPage.consulting.title'),
//       description: t('servicesPage.consulting.description'),
//       features: [
//         {
//           title: t('serviceDetail.serviceAreas'),
//           items: [
//             t('servicesPage.consulting.feature1'),
//             t('servicesPage.consulting.feature2'),
//             t('servicesPage.consulting.feature3'),
//             t('servicesPage.consulting.feature4'),
//           ],
//         },
//       ],
//       cta: t('servicesPage.consulting.cta'),
//       ctaLink: '/book-consultation',
//     },
//     'digital-transformation': {
//       icon: Monitor,
//       title: t('servicesPage.digital.title'),
//       description: t('servicesPage.digital.description'),
//       features: [
//         {
//           title: t('serviceDetail.serviceAreas'),
//           items: [
//             t('servicesPage.digital.feature1'),
//             t('servicesPage.digital.feature2'),
//             t('servicesPage.digital.feature3'),
//             t('servicesPage.digital.feature4'),
//           ],
//         },
//         {
//           title: t('serviceDetail.advancedTech'),
//           items: isRTL ? [
//             'التوأم الرقمي والمدن الذكية',
//             'حلول الأمن السيبراني والتشفير',
//             'التطوير باستخدام تقنية الميتافيرس',
//           ] : [
//             'Digital Twin & Smart Cities',
//             'Cybersecurity & Encryption Solutions',
//             'Metaverse Technology Development',
//           ],
//         },
//       ],
//       cta: t('servicesPage.digital.cta'),
//       ctaLink: '/book-consultation',
//     },
//     'training': {
//       icon: GraduationCap,
//       title: t('servicesPage.training.title'),
//       description: t('servicesPage.training.description'),
//       features: [
//         {
//           title: t('serviceDetail.serviceAreas'),
//           items: [
//             t('servicesPage.training.feature1'),
//             t('servicesPage.training.feature2'),
//             t('servicesPage.training.feature3'),
//             t('servicesPage.training.feature4'),
//             isRTL ? 'برامج الكوتشينج' : 'Coaching Programs',
//           ],
//         },
//       ],
//       cta: t('servicesPage.training.cta'),
//       ctaLink: '/book-consultation',
//     },
//   };

//   const service = slug ? servicesData[slug] : null;

//   if (!service) {
//     return (
//       <Layout>
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-primary mb-4">{t('serviceDetail.notFound')}</h1>
//             <Button asChild className="bg-primary hover:bg-primary/90">
//               <Link to="/services">{t('serviceDetail.backToServices')}</Link>
//             </Button>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   const IconComponent = service.icon;

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
//         {/* Decorative Elements */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

//         <div className="container-custom relative z-10">
//           {/* Breadcrumb */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-2 text-muted-foreground mb-8 ${isRTL ? '' : 'flex-row'}`}
//           >
//             <Link to="/" className="hover:text-primary transition-colors">{t('serviceDetail.home')}</Link>
//             <span>/</span>
//             <Link to="/services" className="hover:text-primary transition-colors">{t('serviceDetail.services')}</Link>
//             <span>/</span>
//             <span className="text-primary font-medium">{service.title}</span>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className={isRTL ? '' : 'order-1'}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-medium mb-6"
//               >
//                 <IconComponent className="w-10 h-10 text-primary-foreground" />
//               </motion.div>
              
//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
//               >
//                 {service.title}
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-lg md:text-xl text-muted-foreground leading-relaxed"
//               >
//                 {service.description}
//               </motion.p>
//             </motion.div>

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className={`relative ${isRTL ? '' : 'order-2'}`}
//             >
//               <div className="relative rounded-3xl overflow-hidden shadow-strong">
//                 <img 
//                   src={heroMeeting} 
//                   alt={service.title}
//                   className="w-full h-80 lg:h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//                 {t('serviceDetail.whatWeOffer')}
//               </h2>
//             </motion.div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {service.features.map((featureGroup, groupIndex) => (
//                 <motion.div
//                   key={featureGroup.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: groupIndex * 0.1 }}
//                   className="bg-white rounded-3xl overflow-hidden shadow-soft border border-border/50"
//                 >
//                   {/* Header */}
//                   <div className="bg-primary p-5 flex items-center gap-3">
//                     {getFeatureIcon(featureGroup.title)}
//                     <h3 className="text-lg font-bold text-primary-foreground">
//                       {featureGroup.title}
//                     </h3>
//                   </div>

//                   {/* Items */}
//                   <div className="p-6 bg-gradient-to-br from-white to-blue-50/50">
//                     <ul className="space-y-4">
//                       {featureGroup.items.map((item, index) => (
//                         <motion.li
//                           key={item}
//                           initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.1 }}
//                           className="flex items-start gap-3"
//                         >
//                           <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
//                           <span className="text-foreground/80">{item}</span>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//      <section className="section-padding bg-gradient-to-br from-white via-blue-50/40 to-white">
//   <div className="container-custom">
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className="relative overflow-hidden rounded-3xl bg-white shadow-strong p-10 md:p-16 text-center"
//     >
//       {/* Decorative background */}
//       <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d6ad55]/15 rounded-full blur-3xl" />
//       <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-2xl mx-auto">
//         <Sparkles className="w-12 h-12 text-[#d6ad55] mx-auto mb-6" />

//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//           {t('serviceDetail.interestedTitle')}
//         </h2>

//         <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//           {t('serviceDetail.interestedDesc')}
//         </p>

//         <Button
//           size="xl"
//           asChild
//           className="
//             bg-gradient-to-b from-[#d6ad55] to-[#b6892e]
//             text-white font-semibold
//             px-10 py-6 rounded-xl
//             shadow-[0_10px_30px_rgba(182,137,46,0.35)]
//             hover:brightness-110 hover:scale-[1.03]
//             transition-all duration-300
//           "
//         >
//           <Link
//             to={service.ctaLink}
//             className="group inline-flex items-center gap-2"
//           >
//             {service.cta}
//             <ArrowIcon
//               className={`w-5 h-5 transition-transform duration-300 ${
//                 isRTL
//                   ? 'group-hover:-translate-x-1'
//                   : 'group-hover:translate-x-1'
//               }`}
//             />
//           </Link>
//         </Button>
//       </div>
//     </motion.div>
//   </div>
// </section>

//     </Layout>
//   );
// };

// export default ServiceDetail;
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, Briefcase, Monitor, GraduationCap, Cpu, Sparkles, Building2, Users } from 'lucide-react';
import heroMeeting from '@/assets/hero-meeting.jpg';

const getFeatureIcon = (title: string) => {
  if (title.includes('التقنيات') || title.includes('Technologies')) return <Cpu className="w-6 h-6 text-primary-foreground" />;
  return <CheckCircle className="w-6 h-6 text-primary-foreground" />;
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Service data for all pages including new ones
  const servicesData: Record<string, {
    icon: typeof Briefcase;
    title: string;
    description: string;
    heroDescription: string;
    features: { title: string; items: string[] }[];
    cta: string;
    ctaLink: string;
    heroImage?: string;
  }> = {
    'consulting': {
      icon: Building2,
      title: isRTL ? 'الاستشارات المؤسسية والاستراتيجية' : 'Institutional & Strategic Consulting',
      description: isRTL 
        ? 'نساعد المؤسسات الحكومية والخاصة على صياغة الاستراتيجيات، وتعزيز الحوكمة، وتحسين الأداء، وبناء قدرات مستدامة.'
        : 'We help government and private institutions formulate strategies, enhance governance, improve performance, and build sustainable capabilities.',
      heroDescription: isRTL 
        ? 'نقدم حلولاً استشارية متكاملة تعتمد على أفضل الممارسات العالمية والأبحاث الميدانية لتحقيق أهداف مؤسستك.'
        : 'We provide integrated consulting solutions based on global best practices and field research to achieve your organization\'s goals.',
      features: [
        {
          title: isRTL ? 'مجالات الخدمة' : 'Service Areas',
          items: isRTL ? [
            'الاستشارات الاستراتيجية والمؤسسية',
            'الحوكمة وإدارة الأداء',
            'التطوير التنظيمي وإعادة الهيكلة',
            'دعم اتخاذ القرار القيادي'
          ] : [
            'Strategic & Institutional Consulting',
            'Governance & Performance Management',
            'Organizational Development & Restructuring',
            'Leadership Decision Support'
          ],
        },
        {
          title: isRTL ? 'منهجيتنا' : 'Our Methodology',
          items: isRTL ? [
            'تحليل شامل للوضع الحالي',
            'تصميم حلول مخصصة',
            'التنفيذ مع المرافقة',
            'قياس النتائج والتطوير'
          ] : [
            'Comprehensive current situation analysis',
            'Customized solution design',
            'Implementation with accompaniment',
            'Results measurement and development'
          ],
        },
      ],
      cta: isRTL ? 'اطلب استشارة' : 'Request Consultation',
      ctaLink: '/book-consultation',
    },
    'digital-transformation': {
      icon: Cpu,
      title: isRTL ? 'التحول الرقمي والاستشارات التقنية' : 'Digital Transformation & Tech Consulting',
      description: isRTL 
        ? 'نقود رحلة التحول الرقمي للمؤسسات باستخدام الذكاء الاصطناعي، الميتافيرس، الأمن السيبراني، والبنية التحتية المتطورة.'
        : 'We lead digital transformation journeys for institutions using AI, metaverse, cybersecurity, and advanced infrastructure.',
      heroDescription: isRTL 
        ? 'نحول المؤسسات التقليدية إلى مؤسسات رقمية ذكية قادرة على المنافسة في العصر الرقمي.'
        : 'We transform traditional institutions into smart digital entities capable of competing in the digital age.',
      features: [
        {
          title: isRTL ? 'خدماتنا الرقمية' : 'Our Digital Services',
          items: isRTL ? [
            'استراتيجيات التحول الرقمي',
            'الذكاء الاصطناعي والميتافيرس',
            'الأمن السيبراني والتوأم الرقمي',
            'الحلول السحابية والتقنيات الناشئة'
          ] : [
            'Digital Transformation Strategies',
            'AI & Metaverse Solutions',
            'Cybersecurity & Digital Twin',
            'Cloud Solutions & Emerging Technologies'
          ],
        },
        {
          title: isRTL ? 'التقنيات المتقدمة' : 'Advanced Technologies',
          items: isRTL ? [
            'التوأم الرقمي والمدن الذكية',
            'حلول الأمن السيبراني والتشفير',
            'التطوير باستخدام تقنية الميتافيرس',
            'الواقع المعزز والافتراضي (AR/VR)'
          ] : [
            'Digital Twin & Smart Cities',
            'Cybersecurity & Encryption Solutions',
            'Metaverse Technology Development',
            'Augmented & Virtual Reality (AR/VR)'
          ],
        },
      ],
      cta: isRTL ? 'تحدث مع خبير تقني' : 'Talk to a Tech Expert',
      ctaLink: '/contact',
    },
    'training': {
      icon: Users,
      title: isRTL ? 'التدريب التنفيذي وبناء القدرات' : 'Executive Training & Capacity Building',
      description: isRTL 
        ? 'نصمّم وننفّذ برامج تدريبية وتنفيذية موجهة لرفع جاهزية القيادات وبناء القدرات المؤسسية.'
        : 'We design and implement executive training programs aimed at enhancing leadership readiness and building institutional capabilities.',
      heroDescription: isRTL 
        ? 'نطور قدرات الأفراد والمؤسسات من خلال برامج تدريبية متخصصة تعتمد على أحدث منهجيات التعلم.'
        : 'We develop individual and institutional capabilities through specialized training programs based on the latest learning methodologies.',
      features: [
        {
          title: isRTL ? 'برامجنا التدريبية' : 'Our Training Programs',
          items: isRTL ? [
            'التدريب التنفيذي وتطوير القيادات',
            'بناء القدرات المؤسسية',
            'ورش العمل الاستشارية والتدريبية',
            'برامج تدريب مخصصة حسب الاحتياج'
          ] : [
            'Executive Training & Leadership Development',
            'Institutional Capacity Building',
            'Consulting & Training Workshops',
            'Customized Training Programs'
          ],
        },
        {
          title: isRTL ? 'منهجيات التدريب' : 'Training Methodologies',
          items: isRTL ? [
            'التدريب التفاعلي والتطبيقي',
            'حالات دراسية واقعية',
            'التدريب الافتراضي والمدمج',
            'المتابعة والتقييم المستمر'
          ] : [
            'Interactive & Applied Training',
            'Real Case Studies',
            'Virtual & Blended Training',
            'Continuous Follow-up & Evaluation'
          ],
        },
      ],
      cta: isRTL ? 'استعرض البرامج التدريبية' : 'Browse Training Programs',
      ctaLink: '/contact',
    },
  };

  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">{isRTL ? 'الخدمة غير موجودة' : 'Service Not Found'}</h1>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/services">{isRTL ? 'العودة للخدمات' : 'Back to Services'}</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 text-gray-500 mb-8 ${isRTL ? '' : 'flex-row'}`}
          >
            <Link to="/" className="hover:text-primary transition-colors">{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">{isRTL ? 'الخدمات' : 'Services'}</Link>
            <span>/</span>
            <span className="text-primary font-medium">{service.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={isRTL ? '' : 'order-1'}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-medium mb-6"
              >
                <IconComponent className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              >
                {service.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              >
                {service.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
                  <Link to={service.ctaLink} className="flex items-center gap-2">
                    <span>{service.cta}</span>
                    <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
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
                  alt={service.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {isRTL ? 'ماذا نقدم؟' : 'What We Offer?'}
              </h2>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((featureGroup, groupIndex) => (
                <motion.div
                  key={featureGroup.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-soft border border-border/50"
                >
                  {/* Header */}
                  <div className="bg-primary p-5 flex items-center gap-3">
                    {getFeatureIcon(featureGroup.title)}
                    <h3 className="text-lg font-bold text-white">
                      {featureGroup.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="p-6 bg-gradient-to-br from-white to-blue-50/50">
                    <ul className="space-y-4">
                      {featureGroup.items.map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d6ad55]/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-[#d6ad55] mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isRTL ? 'هل أنت مهتم بهذه الخدمة؟' : 'Interested in This Service?'}
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {isRTL 
                  ? 'تواصل معنا الآن للحصول على استشارة مجانية ومناقشة احتياجاتك'
                  : 'Contact us now for a free consultation and discuss your needs'
                }
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
                <Link
                  to={service.ctaLink}
                  className="group inline-flex items-center gap-2"
                >
                  {isRTL ? 'ابدأ الآن' : 'Get Started'}
                  <ArrowIcon
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

export default ServiceDetail;