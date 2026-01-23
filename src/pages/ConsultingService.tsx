import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Target, BarChart3, Cpu, Users, CheckCircle, Clock, Map, TrendingUp, Shield, Building2, Briefcase } from 'lucide-react';
import heroConsulting from '@/assets/hero-consulting.jpg';

const ConsultingService = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const valueProps = [
    {
      icon: Target,
      title: isRTL ? 'صياغة استراتيجية واضحة' : 'Clear Strategy Formulation',
      description: isRTL 
        ? 'تحليل معمّق، تحديد الأولويات، وبناء خرائط طريق تنفيذية قابلة للتطبيق.' 
        : 'In-depth analysis, priority identification, and building actionable implementation roadmaps.'
    },
    {
      icon: BarChart3,
      title: isRTL ? 'حوكمة وأداء مؤسسي' : 'Governance & Institutional Performance',
      description: isRTL 
        ? 'تصميم أطر الحوكمة، مؤشرات الأداء، وآليات المتابعة والتحسين المستمر.' 
        : 'Designing governance frameworks, performance indicators, and continuous improvement mechanisms.'
    },
    {
      icon: Cpu,
      title: isRTL ? 'تمكين اتخاذ القرار' : 'Decision Making Empowerment',
      description: isRTL 
        ? 'استخدام البيانات، التحليلات المتقدمة، والذكاء الاصطناعي لدعم القرارات القيادية.' 
        : 'Using data, advanced analytics, and AI to support leadership decisions.'
    }
  ];

  const servicesGrid = [
    {
      title: isRTL ? 'الاستشارات الاستراتيجية والمؤسسية' : 'Strategic & Institutional Consulting',
      items: [
        isRTL ? 'صياغة الرؤى والاستراتيجيات' : 'Vision & Strategy Formulation',
        isRTL ? 'مواءمة الأهداف المؤسسية' : 'Institutional Goal Alignment',
        isRTL ? 'تصميم نماذج التشغيل' : 'Operating Model Design'
      ]
    },
    {
      title: isRTL ? 'الحوكمة وإدارة الأداء' : 'Governance & Performance Management',
      items: [
        isRTL ? 'بناء أطر الحوكمة' : 'Governance Framework Building',
        isRTL ? 'مؤشرات الأداء (KPIs)' : 'Performance Indicators (KPIs)',
        isRTL ? 'أنظمة المتابعة والتقارير' : 'Monitoring & Reporting Systems'
      ]
    },
    {
      title: isRTL ? 'دعم اتخاذ القرار' : 'Decision Support',
      items: [
        isRTL ? 'تحليل البيانات' : 'Data Analysis',
        isRTL ? 'نماذج السيناريوهات' : 'Scenario Modeling',
        isRTL ? 'توصيات تنفيذية للقيادة' : 'Executive Recommendations'
      ]
    },
    {
      title: isRTL ? 'التطوير التنظيمي' : 'Organizational Development',
      items: [
        isRTL ? 'إعادة هيكلة العمليات' : 'Process Reengineering',
        isRTL ? 'تحسين الهياكل التنظيمية' : 'Organizational Structure Optimization',
        isRTL ? 'بناء القدرات المؤسسية' : 'Institutional Capacity Building'
      ]
    }
  ];

  const approachSteps = [
    {
      number: '1️⃣',
      title: isRTL ? 'التشخيص والتقييم' : 'Diagnosis & Assessment',
      description: isRTL 
        ? 'فهم الوضع الحالي، جمع البيانات، وتحديد الفجوات.' 
        : 'Understanding current state, data collection, and gap identification.'
    },
    {
      number: '2️⃣',
      title: isRTL ? 'التصميم الاستراتيجي' : 'Strategic Design',
      description: isRTL 
        ? 'بناء الحلول وخارطة الطريق التنفيذية.' 
        : 'Building solutions and implementation roadmap.'
    },
    {
      number: '3️⃣',
      title: isRTL ? 'التنفيذ والدعم' : 'Implementation & Support',
      description: isRTL 
        ? 'مرافقة العميل خلال التطبيق العملي.' 
        : 'Accompanying the client during practical application.'
    },
    {
      number: '4️⃣',
      title: isRTL ? 'التحسين المستمر' : 'Continuous Improvement',
      description: isRTL 
        ? 'قياس النتائج، التعلم، والتطوير المستدام.' 
        : 'Measuring results, learning, and sustainable development.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent" />
        
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
  className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl  /* أصغر */
    font-bold 
    text-gray-900  /* تغيير اللون للوضوح */
    mb-6
    leading-tight  /* تقليل المسافة بين الأسطر */
    tracking-tight  /* تقليل المسافة بين الحروف */
  "
>
  {isRTL ? 'الاستشارات المؤسسية والاستراتيجية' : 'Institutional & Strategic Consulting'}
</motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              >
                {isRTL 
                  ? 'نساعد المؤسسات الحكومية والخاصة على صياغة الاستراتيجيات، وتعزيز الحوكمة، وتحسين الأداء، وبناء قدرات مستدامة ترتكز على البيانات والذكاء الاصطناعي.'
                  : 'We help government and private institutions formulate strategies, enhance governance, improve performance, and build sustainable capabilities based on data and artificial intelligence.'
                }
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
                  <Link to="/book-consultation" className="flex items-center gap-2">
                    <span>{isRTL ? 'طلب استشارة' : 'Request Consultation'}</span>
                    <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild className="group border-primary/30 text-primary hover:bg-primary/5">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{isRTL ? 'تواصل معنا' : 'Contact Us'}</span>
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
                  src={heroConsulting} 
                  alt={isRTL ? 'الاستشارات المؤسسية' : 'Institutional Consulting'}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'كيف نصنع القيمة لعملائنا' : 'How We Create Value for Our Clients'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/30 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'نطاق خدمات الاستشارات لدينا' : 'Our Consulting Services Scope'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {servicesGrid.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {index === 0 && <Target className="w-6 h-6 text-primary" />}
                    {index === 1 && <BarChart3 className="w-6 h-6 text-primary" />}
                    {index === 2 && <Cpu className="w-6 h-6 text-primary" />}
                    {index === 3 && <Users className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
<Link to="/book-consultation?source=consulting" className="flex items-center gap-2">                <span>{isRTL ? 'اطلب استشارة' : 'Request Consultation'}</span>
                <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-white">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        {isRTL ? 'منهجيتنا في العمل' : 'Our Work Methodology'}
      </h2>
    </motion.div>

    <div className="relative">
      {/* Timeline line */}
      <div className="
        absolute left-1/2 top-0 bottom-0 w-1 
        bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 
        hidden md:block
        transform -translate-x-1/2
        rounded-full
      " />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
        {approachSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={
              isRTL
                ? `relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`
                : `relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`
            }
          >
            {/* Card */}
            <div className="
              group
              bg-white
              rounded-3xl
              p-8
              shadow-soft
              hover:shadow-strong
              border border-gray-200
              hover:border-blue-200
              transition-all duration-300
              hover:-translate-y-2
              h-full
            ">
<div className="flex items-center gap-6 mb-6">
  <div className="
    text-6xl md:text-7xl
    font-bold
    text-blue-600/30
    flex-shrink-0
    leading-none
  ">
    {step.number.replace('️⃣', '')}
  </div>

  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
    {step.title}
  </h3>
</div>

              {/* الوصف فقط */}
              <p className="
                text-gray-600
                leading-relaxed
                text-base md:text-lg
                mt-4
              ">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
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
                {isRTL ? 'هل ترغب في مناقشة احتياجات مؤسستك؟' : 'Would you like to discuss your organization\'s needs?'}
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {isRTL 
                  ? 'تواصل معنا الآن لحجز استشارة استراتيجية مع فريق خبرائنا'
                  : 'Contact us now to book a strategic consultation with our expert team'
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
                  to="/book-consultation"
                  className="group inline-flex items-center gap-2"
                >
                  {isRTL ? 'طلب استشارة' : 'Request Consultation'}
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

export default ConsultingService;