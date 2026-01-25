import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Cpu, Brain, Shield, Users, Target, BarChart3, RefreshCw, Cloud, Database, Zap, Globe, Smartphone, Lock, TrendingUp, CheckCircle } from 'lucide-react';
import digitalHero from '@/assets/digital-hero.jpg';

const DigitalTransformation = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Target,
      title: isRTL ? 'تقييم النضج الرقمي' : 'Digital Maturity Assessment',
      items: [
        isRTL ? 'تقييم جاهزية المؤسسة رقمياً' : 'Assess organizational digital readiness',
        isRTL ? 'قياس الفجوات التقنية والتنظيمية' : 'Measure technical and organizational gaps',
        isRTL ? 'مقارنة الأداء مع أفضل الممارسات العالمية' : 'Compare performance with global best practices'
      ]
    },
    {
      icon: BarChart3,
      title: isRTL ? 'بناء استراتيجية التحول الرقمي' : 'Digital Transformation Strategy Building',
      items: [
        isRTL ? 'صياغة رؤية رقمية واضحة' : 'Formulate clear digital vision',
        isRTL ? 'خارطة طريق تنفيذية 12–24 شهرًا' : '12-24 month implementation roadmap',
        isRTL ? 'تحديد مؤشرات الأداء (KPIs) والعائد على الاستثمار' : 'Define KPIs and ROI indicators'
      ]
    },
    {
      icon: Brain,
      title: isRTL ? 'الذكاء الاصطناعي وأتمتة العمليات' : 'AI & Process Automation',
      items: [
        isRTL ? 'تصميم حلول الذكاء الاصطناعي المؤسسية' : 'Design enterprise AI solutions',
        isRTL ? 'أتمتة الإجراءات الحكومية والتشغيلية' : 'Automate government and operational procedures',
        isRTL ? 'تحليل البيانات واتخاذ القرار الذكي' : 'Data analysis and intelligent decision making'
      ]
    },
    {
      icon: Globe,
      title: isRTL ? 'الميتافيرس والتوأم الرقمي' : 'Metaverse & Digital Twin',
      items: [
        isRTL ? 'تصميم بيئات ميتافيرس مؤسسية' : 'Design enterprise metaverse environments',
        isRTL ? 'التوأم الرقمي للمدن والمرافق' : 'Digital twin for cities and facilities',
        isRTL ? 'التدريب الافتراضي والمحاكاة الرقمية' : 'Virtual training and digital simulation',
        isRTL ? 'حلول الواقع المعزز والافتراضي (AR/VR)' : 'AR/VR solutions'
      ]
    },
    {
      icon: Shield,
      title: isRTL ? 'الأمن السيبراني والتحصين الرقمي' : 'Cybersecurity & Digital Fortification',
      items: [
        isRTL ? 'تقييم المخاطر السيبرانية' : 'Cybersecurity risk assessment',
        isRTL ? 'حماية البيانات والأنظمة الحيوية' : 'Protect data and critical systems',
        isRTL ? 'أمن المنصات السحابية' : 'Cloud platform security',
        isRTL ? 'الامتثال للمعايير الدولية للأمن الرقمي' : 'Compliance with international digital security standards'
      ]
    },
    {
      icon: Users,
      title: isRTL ? 'إدارة التغيير وبناء القدرات' : 'Change Management & Capacity Building',
      items: [
        isRTL ? 'تدريب القيادات الرقمية' : 'Digital leadership training',
        isRTL ? 'إدارة مقاومة التغيير' : 'Change resistance management',
        isRTL ? 'تمكين فرق العمل بالتقنيات الحديثة' : 'Empower teams with modern technologies'
      ]
    },
    {
      icon: Database,
      title: isRTL ? 'حوكمة البيانات والتحول المؤسسي' : 'Data Governance & Institutional Transformation',
      items: [
        isRTL ? 'سياسات إدارة البيانات' : 'Data management policies',
        isRTL ? 'حوكمة الذكاء الاصطناعي' : 'AI governance',
        isRTL ? 'الامتثال والرقابة الرقمية' : 'Digital compliance and oversight',
        isRTL ? 'بناء نماذج تشغيل حديثة' : 'Build modern operating models'
      ]
    },
    {
      icon: Zap,
      title: isRTL ? 'الحلول السحابية والتقنيات الناشئة' : 'Cloud Solutions & Emerging Technologies',
      items: [
        isRTL ? 'هجرة وتطوير الحلول السحابية' : 'Cloud migration and development',
        isRTL ? 'تقنيات بلوك تشين وسلسلة الكتل' : 'Blockchain technologies',
        isRTL ? 'إنترنت الأشياء (IoT)' : 'Internet of Things (IoT)',
        isRTL ? 'الحوسبة المتطورة' : 'Edge computing'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={isRTL ? '' : 'order-1'}
            >
       <motion.h1 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-relaxed"
>
  {isRTL ? (
    <>
      التحول الرقمي
      <br />
            <br />

      والاستشارات التقنية المتقدمة
    </>
  ) : (
    <>
      Digital Transformation
      <br />
      & Advanced Technical Consulting
    </>
  )}
</motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              >
                {isRTL 
                  ? 'نقود رحلة التحول الرقمي للمؤسسات الحكومية والخاصة من خلال حلول متكاملة تشمل الذكاء الاصطناعي، الميتافيرس، الأمن السيبراني، والبنية التحتية المتطورة.'
                  : 'We lead the digital transformation journey for government and private institutions through integrated solutions including AI, metaverse, cybersecurity, and advanced infrastructure.'
                }
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {/* <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{isRTL ? '👉 تحدث مع مستشار التحول الرقمي' : '👉 Talk to a Digital Transformation Consultant'}</span>
                    <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button> */}
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
                  src={digitalHero} 
                  alt={isRTL ? 'التحول الرقمي' : 'Digital Transformation'}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} bg-white rounded-2xl p-4 shadow-medium border border-border`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">AI + Metaverse</p>
                    <p className="text-sm text-gray-500">{isRTL ? 'حلول متكاملة' : 'Integrated Solutions'}</p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'خدمات التحول الرقمي المتكاملة' : 'Integrated Digital Transformation Services'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isRTL 
                ? 'نقدم مجموعة شاملة من خدمات التحول الرقمي المصممة خصيصًا لاحتياجات المؤسسات الحديثة'
                : 'We provide a comprehensive range of digital transformation services tailored to modern institutions\' needs'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.floor(index / 2) * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
                <Link to="/book-consultation?source=digital" className="flex items-center gap-2">
                <span>{isRTL ? 'ابدأ رحلة التحول الرقمي' : 'Start Your Digital Transformation Journey'}</span>
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {isRTL ? 'لماذا التحول الرقمي مع ATC؟' : 'Why Digital Transformation with ATC?'}
              </h2>
              <ul className="space-y-4">
                {[
                  isRTL ? 'خبرة في التحول الرقمي للحكومات والمؤسسات الكبرى' : 'Expertise in digital transformation for governments and large institutions',
                  isRTL ? 'حلول مخصصة تناسب احتياجات كل قطاع' : 'Customized solutions tailored to each sector\'s needs',
                  isRTL ? 'نهج شامل يشمل التقنية والإدارة والتغيير المؤسسي' : 'Comprehensive approach including technology, management, and institutional change',
                  isRTL ? 'مرافقة كاملة من التخطيط إلى التنفيذ' : 'Full accompaniment from planning to implementation',
                  isRTL ? 'استخدام أحدث التقنيات (AI، ميتافيرس، توأم رقمي)' : 'Use of latest technologies (AI, metaverse, digital twin)'
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {isRTL ? 'مؤشرات النجاح' : 'Success Indicators'}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '40%', label: isRTL ? 'تحسين الكفاءة' : 'Efficiency Improvement' },
                    { value: '60%', label: isRTL ? 'تخفيض التكاليف' : 'Cost Reduction' },
                    { value: '85%', label: isRTL ? 'رضا العملاء' : 'Customer Satisfaction' },
                    { value: '3x', label: isRTL ? 'سرعة التنفيذ' : 'Implementation Speed' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/40 to-white">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isRTL ? 'جاهز للتحول الرقمي؟' : 'Ready for Digital Transformation?'}
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {isRTL 
                  ? 'تواصل مع خبرائنا لبدء رحلة التحول الرقمي لمؤسستك'
                  : 'Contact our experts to start your organization\'s digital transformation journey'
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
                <Link to="/book-consultation?source=digital" className="flex items-center gap-2">
                  {isRTL ? ' طلب استشارة في التحول الرقمي' : ' Request Consultation in Digital Transformation Expert'}
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

export default DigitalTransformation;