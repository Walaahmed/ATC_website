import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Building2, Fuel, Landmark, Briefcase, Factory, Target, Users, BarChart3, Cpu, Shield, MessageCircle } from 'lucide-react';

const Sectors = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sectors = [
    {
      icon: Building2,
      title: isRTL ? 'الجهات الحكومية والهيئات العامة' : 'Government Entities & Public Authorities',
      description: isRTL 
        ? 'نعمل مع الوزارات والهيئات الحكومية لتطوير السياسات، وتعزيز الحوكمة، وتحسين تقديم الخدمات العامة عبر التحول الرقمي والذكاء الاصطناعي.'
        : 'We work with ministries and government entities to develop policies, enhance governance, and improve public service delivery through digital transformation and artificial intelligence.',
      color: 'from-blue-500 to-blue-600',
      features: [
        isRTL ? 'تطوير السياسات والاستراتيجيات الحكومية' : 'Government policy and strategy development',
        isRTL ? 'تحسين تقديم الخدمات العامة رقمياً' : 'Improving digital public service delivery',
        isRTL ? 'تعزيز الحوكمة والشفافية' : 'Enhancing governance and transparency'
      ]
    },
    {
      icon: Fuel,
      title: isRTL ? 'الطاقة والبترول' : 'Energy & Petroleum',
      description: isRTL 
        ? 'ندعم شركات الطاقة في تحسين الكفاءة التشغيلية، وإدارة الأصول الرقمية، وبناء التوأم الرقمي، وتعزيز أمن البنية التحتية الحيوية.'
        : 'We support energy companies in improving operational efficiency, digital asset management, building digital twins, and enhancing critical infrastructure security.',
      color: 'from-amber-500 to-amber-600',
      features: [
        isRTL ? 'التوأم الرقمي للمنشآت النفطية' : 'Digital twin for oil facilities',
        isRTL ? 'تحسين الكفاءة التشغيلية' : 'Operational efficiency improvement',
        isRTL ? 'أمن البنية التحتية الحيوية' : 'Critical infrastructure security'
      ]
    },
    {
      icon: Landmark,
      title: isRTL ? 'البنوك والمؤسسات المالية' : 'Banks & Financial Institutions',
      description: isRTL 
        ? 'نساعد البنوك والمؤسسات المالية على تبني الذكاء الاصطناعي، وتحسين إدارة المخاطر، وتعزيز الأمن السيبراني، وتسريع الابتكار الرقمي.'
        : 'We help banks and financial institutions adopt AI, improve risk management, enhance cybersecurity, and accelerate digital innovation.',
      color: 'from-emerald-500 to-emerald-600',
      features: [
        isRTL ? 'الذكاء الاصطناعي في الخدمات المالية' : 'AI in financial services',
        isRTL ? 'تعزيز الأمن السيبراني' : 'Cybersecurity enhancement',
        isRTL ? 'الابتكار الرقمي والتحول البنكي' : 'Digital innovation and banking transformation'
      ]
    },
    {
      icon: Briefcase,
      title: isRTL ? 'القطاع الخاص والشركات الوطنية' : 'Private Sector & National Companies',
      description: isRTL 
        ? 'نرافق الشركات الوطنية في بناء استراتيجيات النمو، وتحسين نماذج التشغيل، وتمكين التحول الرقمي لتحقيق ميزة تنافسية مستدامة.'
        : 'We accompany national companies in building growth strategies, improving operating models, and enabling digital transformation for sustainable competitive advantage.',
      color: 'from-purple-500 to-purple-600',
      features: [
        isRTL ? 'استراتيجيات النمو والتوسع' : 'Growth and expansion strategies',
        isRTL ? 'تحسين نماذج التشغيل' : 'Operating model improvement',
        isRTL ? 'التحول الرقمي للشركات' : 'Corporate digital transformation'
      ]
    },
    {
      icon: Factory,
      title: isRTL ? 'الصناعة والتصنيع' : 'Industry & Manufacturing',
      description: isRTL 
        ? 'نعمل مع المصانع والشركات الصناعية على أتمتة العمليات، واعتماد المصانع الذكية، واستخدام البيانات لتحسين الإنتاج وتقليل التكاليف.'
        : 'We work with factories and industrial companies on process automation, smart factory adoption, and using data to improve production and reduce costs.',
      color: 'from-slate-500 to-slate-600',
      features: [
        isRTL ? 'المصانع الذكية وأتمتة العمليات' : 'Smart factories and process automation',
        isRTL ? 'تحسين الإنتاج باستخدام البيانات' : 'Production improvement using data',
        isRTL ? 'تحسين سلسلة التوريد' : 'Supply chain improvement'
      ]
    },
    {
      icon: Cpu,
      title: isRTL ? 'التكنولوجيا والاتصالات' : 'Technology & Telecommunications',
      description: isRTL 
        ? 'ندعم شركات التكنولوجيا والاتصالات في تطوير الحلول المتقدمة، وبناء المنصات الرقمية، وتبني التقنيات الناشئة لقيادة الابتكار.'
        : 'We support technology and telecommunications companies in developing advanced solutions, building digital platforms, and adopting emerging technologies to lead innovation.',
      color: 'from-indigo-500 to-indigo-600',
      features: [
        isRTL ? 'تطوير الحلول التقنية المتقدمة' : 'Advanced technical solution development',
        isRTL ? 'بناء المنصات الرقمية' : 'Digital platform building',
        isRTL ? 'تبني التقنيات الناشئة' : 'Adoption of emerging technologies'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            >
              {isRTL ? 'القطاعات التي نخدمها' : 'Sectors We Serve'}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              {isRTL 
                ? 'تعمل ATC للاستشارات بالشراكة مع جهات حكومية ومؤسسات خاصة في القطاعات الأكثر تأثيرًا، لدعمها في صياغة الاستراتيجيات، وتسريع التحول الرقمي، وتعزيز الأداء المؤسسي، وبناء القدرات القيادية المستقبلية عبر حلول عملية قائمة على البيانات والذكاء الاصطناعي.'
                : 'ATC Consulting works in partnership with government entities and private institutions in the most impactful sectors, supporting them in strategy formulation, accelerating digital transformation, enhancing institutional performance, and building future leadership capabilities through practical data-driven and AI-based solutions.'
              }
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.floor(index / 2) * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 h-full border border-border/50">
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-br ${sector.color} p-8 flex items-center justify-center`}>
                    <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <sector.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {sector.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {sector.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {sector.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-br ${sector.color}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Border */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'أثرنا عبر القطاعات' : 'Our Impact Across Sectors'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'أرقام تعكس تأثير خدماتنا في مختلف القطاعات الحيوية'
                : 'Numbers reflecting the impact of our services across various vital sectors'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: isRTL ? 'مشروع ناجح' : 'Successful Projects', icon: Target },
              { value: '25+', label: isRTL ? 'جهة حكومية' : 'Government Entities', icon: Building2 },
              { value: '30+', label: isRTL ? 'شركة خاصة' : 'Private Companies', icon: Briefcase },
              { value: '98%', label: isRTL ? 'رضا العملاء' : 'Client Satisfaction', icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-white via-blue-50/40 to-white">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-600 shadow-strong p-10 md:p-16 text-center"
    >
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-white">
        <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {isRTL ? 'شريكك الاستراتيجي في جميع القطاعات' : 'Your Strategic Partner Across All Sectors'}
        </h2>

        <p className="text-lg text-blue-100 mb-10 leading-relaxed">
          {isRTL 
            ? 'مهما كان قطاعك، لدينا الخبرة والحلول المناسبة لدعم نجاحك'
            : 'Whatever your sector, we have the expertise and solutions to support your success'
          }
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"  // تغيير من Link إلى a tag
            className="
              bg-white text-blue-600 font-semibold
              px-8 py-4 rounded-xl
              shadow-[0_10px_30px_rgba(255,255,255,0.3)]
              hover:bg-blue-50 hover:scale-[1.03]
              transition-all duration-300
              inline-flex items-center gap-2
            "
          >
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </a>
          
          <a
            href="/services"  // تغيير من Link إلى a tag
            className="
              bg-transparent border-2 border-white text-white font-semibold
              px-8 py-4 rounded-xl
              hover:bg-white/10 hover:scale-[1.03]
              transition-all duration-300
              inline-flex items-center gap-2
            "
          >
            {isRTL ? 'استكشف خدماتنا' : 'Explore Our Services'}
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section> */}
    </Layout>
  );
};

export default Sectors;