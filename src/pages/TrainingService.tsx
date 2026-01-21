import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Users, GraduationCap, BookOpen, Target, CheckCircle, Clock, Award, TrendingUp, Brain, Zap, BarChart3, Shield } from 'lucide-react';
import heroTraining from '@/assets/hero-training.jpg';

const TrainingService = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const trainingPrograms = [
    {
      icon: Brain,
      title: isRTL ? 'التدريب التنفيذي وتطوير القيادات' : 'Executive Training & Leadership Development',
      items: [
        isRTL ? 'برامج تطوير القيادات العليا' : 'Senior Leadership Development Programs',
        isRTL ? 'التدريب على المهارات القيادية' : 'Leadership Skills Training',
        isRTL ? 'الإرشاد والتوجيه التنفيذي' : 'Executive Coaching & Mentoring'
      ]
    },
    {
      icon: BarChart3,
      title: isRTL ? 'بناء القدرات المؤسسية' : 'Institutional Capacity Building',
      items: [
        isRTL ? 'تطوير المهارات الوظيفية' : 'Functional Skills Development',
        isRTL ? 'برامج التطوير الوظيفي' : 'Career Development Programs',
        isRTL ? 'تطوير فرق العمل' : 'Team Development'
      ]
    },
    {
      icon: Zap,
      title: isRTL ? 'ورش العمل الاستشارية والتدريبية' : 'Consulting & Training Workshops',
      items: [
        isRTL ? 'ورش عمل مكثفة' : 'Intensive Workshops',
        isRTL ? 'جلسات تدريب تفاعلية' : 'Interactive Training Sessions',
        isRTL ? 'حالات دراسية عملية' : 'Practical Case Studies'
      ]
    },
    {
      icon: Shield,
      title: isRTL ? 'برامج تدريب مخصصة' : 'Customized Training Programs',
      items: [
        isRTL ? 'تصميم برامج حسب الاحتياج' : 'Need-Based Program Design',
        isRTL ? 'التدريب الميداني' : 'Field Training',
        isRTL ? 'التقييم والمتابعة' : 'Assessment & Follow-up'
      ]
    }
  ];

  const trainingMethods = [
    {
      icon: CheckCircle,
      title: isRTL ? 'التدريب التفاعلي' : 'Interactive Training',
      description: isRTL 
        ? 'جلسات تدريبية تفاعلية مع تطبيقات عملية وحالات دراسية واقعية'
        : 'Interactive training sessions with practical applications and real case studies'
    },
    {
      icon: Clock,
      title: isRTL ? 'التدريب المدمج' : 'Blended Learning',
      description: isRTL 
        ? 'دمج التدريب المباشر مع التعلم الإلكتروني للوصول لأفضل النتائج'
        : 'Combining direct training with e-learning for best results'
    },
    {
      icon: TrendingUp,
      title: isRTL ? 'التقييم المستمر' : 'Continuous Assessment',
      description: isRTL 
        ? 'قياس الأداء والتقدم بشكل مستمر مع توفير تغذية راجعة فورية'
        : 'Continuous performance measurement and progress tracking with immediate feedback'
    }
  ];

  return (
    <Layout>
      {/* Hero Section - متطابق مع DigitalTransformation */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff]/30 to-[#f8fafc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5" />
        
        <div className="container-custom relative z-10">
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
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_8px_30px_rgba(59,130,246,0.4)] mb-6"
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                {isRTL ? 'التدريب التنفيذي وبناء القدرات' : 'Executive Training & Capacity Building'}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              >
                {isRTL 
                  ? 'نصمّم وننفّذ برامج تدريبية وتنفيذية موجهة لرفع جاهزية القيادات وبناء القدرات المؤسسية، بما يدعم استدامة الأداء وتحقيق الأهداف الاستراتيجية.'
                  : 'We design and implement executive training programs aimed at enhancing leadership readiness and building institutional capabilities, supporting sustainable performance and achieving strategic goals.'
                }
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {/* <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(59,130,246,0.3)] bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium hover:shadow-[0_12px_35px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>{isRTL ? 'استعرض البرامج التدريبية' : 'Browse Training Programs'}</span>
                    <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                  <Link to="/training-catalog">
                    <span>{isRTL ? 'تحميل الكتالوج' : 'Download Catalog'}</span>
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
              <div className="relative rounded-3xl overflow-hidden shadow-strong group">
                <img 
                  src={heroTraining} 
                  alt={isRTL ? 'التدريب التنفيذي' : 'Executive Training'}
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>
              
              {/* Floating Element مثل DigitalTransformation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-strong max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">5000+</div>
                    <div className="text-sm text-blue-100">{isRTL ? 'متدرب' : 'Trainees'}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs Section - تصميم جديد */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">{isRTL ? 'برامجنا المتخصصة' : 'Our Specialized Programs'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRTL ? 'حلول التدريب الشاملة' : 'Comprehensive Training Solutions'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isRTL 
                ? 'نقدم مجموعة متنوعة من البرامج التدريبية المصممة خصيصًا لتلبية احتياجات المؤسسات والأفراد في عصر التحول الرقمي'
                : 'We offer a variety of training programs specifically designed to meet the needs of institutions and individuals in the digital transformation era'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:from-blue-500 group-hover:to-purple-600 group-hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                  <program.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <ul className="space-y-3">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link 
                    to="/programs" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                  >
                  </Link>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods - تصميم جديد */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {isRTL ? 'نهجنا المبتكر في التدريب' : 'Our Innovative Training Approach'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'نستخدم أحدث المنهجيات والتقنيات لضمان فعالية التدريب وتحقيق أقصى استفادة'
                : 'We use the latest methodologies and technologies to ensure training effectiveness and maximum benefit'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(99,102,241,0.3)]">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - تصميم جديد */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">{isRTL ? 'مميزاتنا' : 'Our Advantages'}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {isRTL ? 'لماذا تختار ATC للتدريب؟' : 'Why Choose ATC for Training?'}
                </h2>
              </div>
              
              <ul className="space-y-6">
                {[
                  { icon: Award, text: isRTL ? 'مدربون معتمدون دوليًا' : 'Internationally certified trainers' },
                  { icon: BookOpen, text: isRTL ? 'مناهج تدريبية حديثة' : 'Modern training curricula' },
                  { icon: Users, text: isRTL ? 'تطبيقات عملية وحالات دراسية واقعية' : 'Practical applications and real case studies' },
                  { icon: Shield, text: isRTL ? 'شهادات معتمدة عالميًا' : 'Globally accredited certificates' },
                  { icon: TrendingUp, text: isRTL ? 'متابعة وتقييم بعد التدريب' : 'Post-training follow-up and evaluation' }
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">{benefit.text}</span>
                    </div>
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
                      { value: '5000+', label: isRTL ? 'متدرب' : 'Trainees', color: 'from-blue-400 to-blue-300' },
                      { value: '500+', label: isRTL ? 'دورة تدريبية' : 'Training Courses', color: 'from-purple-400 to-purple-300' },
                      { value: '100+', label: isRTL ? 'مدرب معتمد' : 'Certified Trainers', color: 'from-blue-400 to-purple-400' },
                      { value: '98%', label: isRTL ? 'رضا المتدربين' : 'Trainee Satisfaction', color: 'from-emerald-400 to-emerald-300' }
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

    {/* CTA Section - متطابق مع DigitalTransformation */}
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
          {isRTL ? 'جاهز لتطوير مهاراتك؟' : 'Ready to Develop Your Skills?'}
        </h2>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {isRTL 
            ? 'تواصل معنا لمعرفة المزيد عن برامجنا التدريبية وتصميم برنامج يناسب احتياجاتك التنظيمية'
            : 'Contact us to learn more about our training programs and design a program that suits your organizational needs'
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
            to="/contact"
            className="group inline-flex items-center gap-2"
          >
            {isRTL ? 'تواصل للحصول على عرض تدريبي' : 'Contact for Training Proposal'}
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

export default TrainingService;