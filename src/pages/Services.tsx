
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Briefcase, Monitor, GraduationCap, CheckCircle, Cpu, Building2, Users, MessageCircle } from 'lucide-react';
import heroMeeting from '@/assets/hero-meeting.jpg';

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Building2,
      slug: 'consulting',
      title: isRTL ? 'الاستشارات المؤسسية والاستراتيجية' : 'Institutional & Strategic Consulting',
      description: isRTL 
        ? 'نساعد المؤسسات الحكومية والخاصة على صياغة الاستراتيجيات، وتعزيز الحوكمة، وتحسين الأداء، وبناء قدرات مستدامة.'
        : 'We help government and private institutions formulate strategies, enhance governance, improve performance, and build sustainable capabilities.',
      features: [
        isRTL ? 'الاستشارات الاستراتيجية والمؤسسية' : 'Strategic & Institutional Consulting',
        isRTL ? 'الحوكمة وتحسين الأداء' : 'Governance & Performance Improvement',
        isRTL ? 'دعم اتخاذ القرار القيادي' : 'Leadership Decision Support',
      ],
      cta: isRTL ? 'استكشف الاستشارات' : 'Explore Consulting',
    },
    {
      icon: Cpu,
      slug: 'digital-transformation',
      title: isRTL ? 'التحول الرقمي والاستشارات التقنية' : 'Digital Transformation & Tech Consulting',
      description: isRTL 
        ? 'نقود رحلة التحول الرقمي باستخدام الذكاء الاصطناعي، الميتافيرس، الأمن السيبراني، والبنية التحتية المتطورة.'
        : 'We lead digital transformation journeys using AI, metaverse, cybersecurity, and advanced infrastructure.',
      features: [
        isRTL ? 'الذكاء الاصطناعي والميتافيرس' : 'AI & Metaverse',
        isRTL ? 'الأمن السيبراني والتوأم الرقمي' : 'Cybersecurity & Digital Twin',
        isRTL ? 'استراتيجيات التحول الرقمي' : 'Digital Transformation Strategies',
      ],
      cta: isRTL ? 'اكتشف التحول الرقمي' : 'Discover Digital Transformation',
    },
    {
      icon: Users,
      slug: 'training',
      title: isRTL ? 'التدريب التنفيذي وبناء القدرات' : 'Executive Training & Capacity Building',
      description: isRTL 
        ? 'نصمّم وننفّذ برامج تدريبية وتنفيذية موجهة لرفع جاهزية القيادات وبناء القدرات المؤسسية.'
        : 'We design and implement executive training programs aimed at enhancing leadership readiness and building institutional capabilities.',
      features: [
        isRTL ? 'تدريب القيادات والتنفيذيين' : 'Leadership & Executive Training',
        isRTL ? 'برامج تدريب احترافية' : 'Professional Training Programs',
        isRTL ? 'الكوتشينج وورش العمل' : 'Coaching & Workshops',
      ],
      cta: isRTL ? 'استعرض البرامج التدريبية' : 'Browse Training Programs',
    },
  ];

  return (
    <Layout>
    {/* Hero Section - تم التعديل */}
<section className="pt-40 pb-16 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden"> {/* زدنا pt لتخلي الصورة تنزل تحت النافبار */}
  <div className="container-custom relative z-10">
    <div className="grid lg:grid-cols-2 gap-8 items-center">
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
        >
          {isRTL ? 'خدماتنا المتكاملة' : 'Our Integrated Services'}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 leading-normal"
        >
          {isRTL 
            ? 'تقدّم ATC للاستشارات منظومة متكاملة من خدمات الاستشارات، والتحول الرقمي، والتدريب التنفيذي، المصمّمة لدعم الأداء المؤسسي وتحقيق نتائج مستدامة.'
            : 'ATC Consulting offers an integrated system of consulting, digital transformation, and executive training services designed to support institutional performance and achieve sustainable results.'
          }
        </motion.p>
      </motion.div>
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
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`relative mt-8 ${isRTL ? '' : 'order-2'}`} 
      >
        <div className="relative rounded-3xl overflow-hidden shadow-strong">
          <img 
            src={heroMeeting} 
            alt={isRTL ? 'خدمات ATC' : 'ATC Services'} 
            className="w-full h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Services Grid - تم التعديل */}
<section className="py-12 bg-gradient-to-br from-white via-blue-50/20 to-white"> {/* قللنا py لتقلل المسافة البيضاء */}
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {/* رجعنا gap لطبيعته */}
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col border border-border/50 min-h-[420px]"> {/* زدنا min-height لتخلي الكارد أطول */}
            {/* Title Header */}
            <div className="bg-primary p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">
                {service.title}
              </h3>
            </div>

            {/* Card Content - جعلناها تطول لتملأ المساحة */}
            <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-white to-blue-50/50">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - في الأسفل مباشرة */}
              <div className="mt-auto">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300 group w-full"
                >
                  <span>{service.cta}</span>
                  <ArrowIcon className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'لماذا تختار ATC؟' : 'Why Choose ATC?'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: isRTL ? 'خبرة 25+ سنة' : '25+ Years Experience',
                description: isRTL ? 'خبرة عميقة في العمل مع الحكومات والمؤسسات الكبرى' : 'Deep experience working with governments and large institutions'
              },
              {
                title: isRTL ? 'حلول متكاملة' : 'Integrated Solutions',
                description: isRTL ? 'دمج الاستشارات والتحول الرقمي والتدريب' : 'Integrating consulting, digital transformation, and training'
              },
              {
                title: isRTL ? 'نهج قائم على النتائج' : 'Results-Based Approach',
                description: isRTL ? 'تركيز على تحقيق النتائج والتأثير الملموس' : 'Focus on achieving tangible results and impact'
              },
              {
                title: isRTL ? 'شركاء تقنيون عالميون' : 'Global Tech Partners',
                description: isRTL ? 'شراكات مع أفضل مزودي التقنية العالمية' : 'Partnerships with leading global technology providers'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d6ad55]/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isRTL ? 'هل تحتاج خدمة مخصصة؟' : 'Need a Custom Service?'}
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {isRTL 
                  ? 'نحن هنا لمساعدتك. تواصل معنا لمناقشة احتياجاتك وتصميم برنامج يناسبك'
                  : 'We are here to help. Contact us to discuss your needs and design a program that suits you'
                }
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="xl"
                  asChild
                  className="
                    bg-gradient-to-b from-[#d6ad55] to-[#b6892e]
                    text-white font-semibold
                    px-8 py-6 rounded-xl
                    shadow-[0_10px_30px_rgba(182,137,46,0.35)]
                    hover:brightness-110 hover:scale-[1.03]
                    transition-all duration-300
                  "
                >
                  <Link to="/contact" className="group inline-flex items-center gap-2">
                    {isRTL ? 'تواصل معنا' : 'Contact Us'}
                    <ArrowIcon
                      className={`w-5 h-5 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    />
                  </Link>
                </Button>
                
                <Button
                  size="xl"
                  variant="outline"
                  asChild
                  className="
                    border-2 border-primary text-primary font-semibold
                    px-8 py-6 rounded-xl
                    hover:bg-primary hover:text-white
                    transition-all duration-300
                  "
                >
                  <Link to="/book-consultation" className="inline-flex items-center gap-2">
                    {isRTL ? 'طلب استشارة' : 'Request Consultation'}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;