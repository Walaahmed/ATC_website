
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Send, Home, User, Building2, Mail, Phone, Briefcase, Clock, Shield } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const BookConsultation = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
const sectors = [
    { key: 'energy', label: isRTL ? 'طاقة وبترول' : 'Energy & Petroleum' },
    { key: 'banking', label: isRTL ? 'بنوك ومالية' : 'Banking & Finance' },
    { key: 'private', label: isRTL ? 'قطاع خاص' : 'Private Sector' },
    { key: 'manufacturing', label: isRTL ? 'صناعات ومصانع' : 'Manufacturing & Industry' },
    { key: 'technology', label: isRTL ? 'التكنولوجيا المتقدمة والتأثير' : 'Advanced Technology & Impact' },
    { key: 'ai', label: isRTL ? 'الذكاء الاصطناعي التطبيقي' : 'Applied Artificial Intelligence' },
    { key: 'coaching', label: isRTL ? 'التدريب والتأهيل' : 'Coaching & Training' },
    { key: 'management', label: isRTL ? 'الإدارة الذكية والقيادة المبتكرة' : 'Smart Management & Innovative Leadership' },
    { key: 'self_development', label: isRTL ? 'تطوير الذات' : 'Self Development' },
    { key: 'customer_service', label: isRTL ? 'علاقات وخدمة عملاء' : 'Relations & Customer Service' },
    { key: 'secretarial', label: isRTL ? 'السكرتارية وإدارة المكاتب' : 'Secretarial & Office Management' },
    { key: 'quality', label: isRTL ? 'الجودة والتميز المؤسسي' : 'Quality & Institutional Excellence' },
    { key: 'finance_accounting', label: isRTL ? 'المالية والمحاسبة' : 'Finance & Accounting' },
    { key: 'legal', label: isRTL ? 'القانون والعقود والمناقصات' : 'Law, Contracts & Tenders' },
    { key: 'it_security', label: isRTL ? 'تقنية المعلومات وأمن الشبكات' : 'IT & Network Security' },
    { key: 'education', label: isRTL ? 'دورات التعليم والإدارة المدرسية' : 'Education & School Management Courses' },
    { key: 'procurement', label: isRTL ? 'المشتريات والمخازن والإمداد' : 'Procurement, Warehousing & Supply' },
    { key: 'gas_energy', label: isRTL ? 'الغاز والطاقة المتجددة' : 'Gas & Renewable Energy' },
    { key: 'audit', label: isRTL ? 'المراجعة والتدقيق' : 'Audit & Review' },
    { key: 'project_management', label: isRTL ? 'إدارة المشاريع' : 'Project Management' },
    { key: 'design', label: isRTL ? 'التصميم' : 'Design' },
    { key: 'health_safety', label: isRTL ? 'الصحة والأمن والسلامة' : 'Health, Security & Safety' },
    { key: 'sales_marketing', label: isRTL ? 'المبيعات والتسويق' : 'Sales & Marketing' },
    { key: 'banking_courses', label: isRTL ? 'المصارف' : 'Banking' },
  ];

  const consultationDurations = [
    { value: '30', label: isRTL ? '30 دقيقة' : '30 minutes' },
    { value: '60', label: isRTL ? '60 دقيقة' : '60 minutes' },
  ];

  const trustStatements = [
    isRTL ? 'شركاء موثوقون للحكومات والمؤسسات الكبرى' : 'Trusted partners for governments and major institutions',
    isRTL ? 'خبرة في التحول الرقمي والحوكمة والذكاء الاصطناعي' : 'Expertise in digital transformation, governance, and AI',
    isRTL ? 'نهج عملي مبني على النتائج' : 'Practical results-based approach',
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    sector: '',
    subject: '',
    duration: '30',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-blue-50 pt-24"
          >
            <div className="text-center p-12 bg-white rounded-3xl shadow-strong max-w-lg mx-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-14 h-14 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                {isRTL ? 'شكرًا لك!' : 'Thank You!'}
              </h2>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                {isRTL ? 'تم استلام طلبك بنجاح.' : 'Your request has been received successfully.'}
              </p>
              <p className="text-muted-foreground mb-8">
                {isRTL 
                  ? 'سيتواصل معك فريق ATC خلال 24-48 ساعة لتأكيد الموعد.'
                  : 'The ATC team will contact you within 24-48 hours to confirm the appointment.'
                }
              </p>
              <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
                <Link to="/">
                  <Home className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
              <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  {/* <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
                  >
                    {isRTL ? 'احجز استشارة استراتيجية مع ATC' : 'Book a Strategic Consultation with ATC'}
                  </motion.h1> */}

                                 <motion.p
                    variants={itemVariants}
                    // className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-tight mb-8 max-w-4xl mx-auto"
                  >
                    {isRTL 
                      ? 'نساعد الحكومات والشركات على تصميم وتنفيذ التحول الرقمي، الحوكمة المؤسسية، وبناء القدرات المستقبلية من خلال حلول عملية وقابلة للتنفيذ.'
                      : 'We help governments and companies design and implement digital transformation, institutional governance, and build future capabilities through practical and actionable solutions.'
                    }
                  </motion.p>
                </div>
              </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50/30 to-white">
              <div className="container-custom">
                   <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  // className="max-w-4xl mx-auto bg-white rounded-2xl border border-border/50 p-8 md:p-10 shadow-medium"
                 className="max-w-4xl mx-auto bg-white rounded-2xl border border-border/50 p-8 md:p-10 shadow-medium -mt-20 md:-mt-28"
                >
                  {/* <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                    {isRTL ? 'نموذج حجز الاستشارة' : 'Consultation Booking Form'}
                  </h2> */}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground font-medium">
                        <User className="w-4 h-4 text-primary" />
                        {isRTL ? 'الاسم الكامل' : 'Full Name'}
                      </Label>
                      <Input
                        id="fullName"
                        placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="bg-gray-50/50 border-border focus:border-primary"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="flex items-center gap-2 text-foreground font-medium">
                        <Building2 className="w-4 h-4 text-primary" />
                        {isRTL ? 'الجهة / الشركة' : 'Organization / Company'}
                      </Label>
                      <Input
                        id="organization"
                        placeholder={isRTL ? 'اسم الجهة أو الشركة' : 'Organization or company name'}
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        required
                        className="bg-gray-50/50 border-border focus:border-primary"
                      />
                    </div>

                    {/* Position */}
                    <div className="space-y-2">
                      <Label htmlFor="position" className="flex items-center gap-2 text-foreground font-medium">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {isRTL ? 'المنصب الوظيفي' : 'Job Position'}
                      </Label>
                      <Input
                        id="position"
                        placeholder={isRTL ? 'المنصب الوظيفي' : 'Your job position'}
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        required
                        className="bg-gray-50/50 border-border focus:border-primary"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
                        <Mail className="w-4 h-4 text-primary" />
                        {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-gray-50/50 border-border focus:border-primary text-left"
                        dir="ltr"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
                        <Phone className="w-4 h-4 text-primary" />
                        {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="bg-gray-50/50 border-border focus:border-primary text-left"
                        dir="ltr"
                      />
                    </div>

                    {/* Sector */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-foreground font-medium">
                        <Building2 className="w-4 h-4 text-primary" />
                        {isRTL ? 'القطاع' : 'Sector'}
                      </Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => handleInputChange('sector', value)}
                        required
                      >
                        <SelectTrigger className="bg-gray-50/50 border-border focus:border-primary">
                          <SelectValue placeholder={isRTL ? 'اختر القطاع' : 'Select sector'} />
                        </SelectTrigger>
                        <SelectContent>
                          {sectors.map((sector) => (
                            <SelectItem key={sector.key} value={sector.key}>
                              {sector.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="subject" className="flex items-center gap-2 text-foreground font-medium">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {isRTL ? 'موضوع الاستشارة المختصر' : 'Brief Consultation Topic'}
                      </Label>
                      <Textarea
                        id="subject"
                       placeholder={isRTL ? 'اكتب وصفًا مختصرًا لموضوع الاستشارة هنا...' : 'Write a brief description of the consultation topic here...'}
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                       rows={6}
                       className="bg-gray-50/50 border-border focus:border-primary h-36 resize-vertical p-4"
                     />
                    </div>

                    {/* Duration */}
                    <div className="space-y-2 md:col-span-2">
                      <Label className="flex items-center gap-2 text-foreground font-medium mb-4">
                        <Clock className="w-4 h-4 text-primary" />
                        {isRTL ? 'مدة الاستشارة المفضلة' : 'Preferred Consultation Duration'}
                      </Label>
                      <RadioGroup
                        value={formData.duration}
                        onValueChange={(value) => handleInputChange('duration', value)}
                        className="flex flex-wrap gap-4"
                      >
                        {consultationDurations.map((duration) => (
                          <div key={duration.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={duration.value} id={`duration-${duration.value}`} />
                            <Label htmlFor={`duration-${duration.value}`} className="cursor-pointer">
                              {duration.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-10 text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300 px-12 py-7 text-lg"
                    >
                      <Send className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                      <span>{isRTL ? ' تأكيد الحجز' : ' Confirm Booking'}</span>
                    </Button>
                  </div>
                </motion.form>

                {/* Trust Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-16"
                >
                  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {trustStatements.map((statement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center"
                      >
                        <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                        <p className="text-gray-700 font-medium">{statement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default BookConsultation;