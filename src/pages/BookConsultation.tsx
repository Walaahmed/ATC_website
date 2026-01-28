
// import { useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import Layout from '@/components/layout/Layout';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { CheckCircle2, Send, Home, User, Building2, Mail, Phone, Briefcase, Clock, Shield } from 'lucide-react';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// const BookConsultation = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === 'ar';
//   const [searchParams] = useSearchParams();
//   const source = searchParams.get('source'); // 'consulting', 'digital', 'training'
  
//   const getMainTitle = () => {
//     switch (source) {
//       case 'digital':
//         return isRTL 
//           ? 'شاركنا تحدياتكم الرقمية وسيتواصل معكم فريقنا بخطة أولية'
//           : 'Share your digital challenges and our team will contact you with an initial plan';
//       case 'training':
//         return isRTL 
//           ? 'أخبرنا عن احتياجات التدريب لدى فريقكم وسنقترح البرامج المناسبة'
//           : 'Tell us about your team\'s training needs and we will suggest suitable programs';
//       default: // 'consulting' أو أي شيء آخر
//         return isRTL 
//           ? 'احجز استشارة استراتيجية مع خبرائنا'
//           : 'Book a strategic consultation with our experts';
//     }
//   };

//   const sectors = [
//     { key: 'energy', label: isRTL ? 'طاقة وبترول' : 'Energy & Petroleum' },
//     { key: 'banking', label: isRTL ? 'بنوك ومالية' : 'Banking & Finance' },
//     { key: 'private', label: isRTL ? 'قطاع خاص' : 'Private Sector' },
//     { key: 'manufacturing', label: isRTL ? 'صناعات ومصانع' : 'Manufacturing & Industry' },
//     { key: 'technology', label: isRTL ? 'التكنولوجيا المتقدمة والتأثير' : 'Advanced Technology & Impact' },
//     { key: 'ai', label: isRTL ? 'الذكاء الاصطناعي التطبيقي' : 'Applied Artificial Intelligence' },
//     { key: 'coaching', label: isRTL ? 'التدريب والتأهيل' : 'Coaching & Training' },
//     { key: 'management', label: isRTL ? 'الإدارة الذكية والقيادة المبتكرة' : 'Smart Management & Innovative Leadership' },
//     { key: 'self_development', label: isRTL ? 'تطوير الذات' : 'Self Development' },
//     { key: 'customer_service', label: isRTL ? 'علاقات وخدمة عملاء' : 'Relations & Customer Service' },
//     { key: 'secretarial', label: isRTL ? 'السكرتارية وإدارة المكاتب' : 'Secretarial & Office Management' },
//     { key: 'quality', label: isRTL ? 'الجودة والتميز المؤسسي' : 'Quality & Institutional Excellence' },
//     { key: 'finance_accounting', label: isRTL ? 'المالية والمحاسبة' : 'Finance & Accounting' },
//     { key: 'legal', label: isRTL ? 'القانون والعقود والمناقصات' : 'Law, Contracts & Tenders' },
//     { key: 'it_security', label: isRTL ? 'تقنية المعلومات وأمن الشبكات' : 'IT & Network Security' },
//     { key: 'education', label: isRTL ? 'دورات التعليم والإدارة المدرسية' : 'Education & School Management Courses' },
//     { key: 'procurement', label: isRTL ? 'المشتريات والمخازن والإمداد' : 'Procurement, Warehousing & Supply' },
//     { key: 'gas_energy', label: isRTL ? 'الغاز والطاقة المتجددة' : 'Gas & Renewable Energy' },
//     { key: 'audit', label: isRTL ? 'المراجعة والتدقيق' : 'Audit & Review' },
//     { key: 'project_management', label: isRTL ? 'إدارة المشاريع' : 'Project Management' },
//     { key: 'design', label: isRTL ? 'التصميم' : 'Design' },
//     { key: 'health_safety', label: isRTL ? 'الصحة والأمن والسلامة' : 'Health, Security & Safety' },
//     { key: 'sales_marketing', label: isRTL ? 'المبيعات والتسويق' : 'Sales & Marketing' },
//     { key: 'banking_courses', label: isRTL ? 'المصارف' : 'Banking' },
//   ];

//   const consultationDurations = [
//     { value: '30', label: isRTL ? '30 دقيقة' : '30 minutes' },
//     { value: '60', label: isRTL ? '60 دقيقة' : '60 minutes' },
//   ];

//   const trustStatements = [
//     isRTL ? 'شركاء موثوقون للحكومات والمؤسسات الكبرى' : 'Trusted partners for governments and major institutions',
//     isRTL ? 'خبرة في التحول الرقمي والحوكمة والذكاء الاصطناعي' : 'Expertise in digital transformation, governance, and AI',
//     isRTL ? 'نهج عملي مبني على النتائج' : 'Practical results-based approach',
//   ];

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     organization: '',
//     position: '',
//     email: '',
//     phone: '',
//     sector: '',
//     subject: '',
//     duration: '30',
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     try {
//       // استخدام FormSubmit لإرسال البيانات إلى info@atc-ae.com
//       const response = await fetch("https://formsubmit.co/ajax/ac89cab9336b36569a10997c062f68e7", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           ...formData,
//           _subject: `New Consultation Booking - ${formData.fullName}`,
//           _template: "table",
//           _captcha: "false"
//         })
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//       } else {
//         alert(isRTL ? 'حدث خطأ في الإرسال. حاول مرة أخرى.' : 'Submission failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert(isRTL ? 'حدث خطأ في الإرسال. حاول مرة أخرى.' : 'Submission failed. Please try again.');
//     }
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <Layout>
//       <AnimatePresence mode="wait">
//         {isSubmitted ? (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-blue-50 pt-24"
//           >
//             <div className="text-center p-12 bg-white rounded-3xl shadow-strong max-w-lg mx-4">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
//                 className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
//               >
//                 <CheckCircle2 className="w-14 h-14 text-green-600" />
//               </motion.div>
//               <h2 className="text-2xl font-bold text-primary mb-4">
//                 {isRTL ? 'شكرًا لك!' : 'Thank You!'}
//               </h2>
//               <p className="text-lg font-semibold text-gray-700 mb-4">
//                 {isRTL ? 'تم استلام طلبك بنجاح.' : 'Your request has been received successfully.'}
//               </p>
//               <p className="text-muted-foreground mb-8">
//                 {isRTL 
//                   ? 'سيتواصل معك فريقنا ATC خلال 24-48 ساعة لتأكيد الموعد.'
//                   : 'The ATC team will contact you within 24-48 hours to confirm the appointment.'
//                 }
//               </p>
//               <Button size="lg" asChild className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300">
//                 <Link to="/">
//                   <Home className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                   <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
//                 </Link>
//               </Button>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="form"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Hero Section */}
//             <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
//               <div className="container-custom relative z-10">
//                 <div className="max-w-4xl mx-auto text-center">
//                   <motion.p
//                     variants={itemVariants}
//                     className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight mb-8 max-w-4xl mx-auto"
//                   >
//                     {getMainTitle()}
//                   </motion.p>
//                 </div>
//               </div>
//             </section>

//             {/* Form Section */}
//           <section className="py-16 bg-gradient-to-br from-gray-50/30 to-white">
//   <div className="container-custom">
//     <motion.form
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       onSubmit={handleSubmit}
//       className="max-w-4xl mx-auto bg-white rounded-2xl border border-border/50 p-8 md:p-10 shadow-medium -mt-20 md:-mt-28"
//     >
//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Full Name - زودنا height و padding */}
//         <div className="space-y-3">
//           <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground font-medium text-base md:text-lg">
//             <User className="w-4 h-4 text-primary" />
//             {isRTL ? 'الاسم *' : ' Name *'}
//           </Label>
//           <Input
//             id="fullName"
//             placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
//             value={formData.fullName}
//             onChange={(e) => handleInputChange('fullName', e.target.value)}
//             required
//             className="bg-gray-50/50 border-border focus:border-primary h-14 text-lg px-4"
//           />
//         </div>

//         {/* Organization - زودنا height و padding */}
//         <div className="space-y-3">
//           <Label htmlFor="organization" className="flex items-center gap-2 text-foreground font-medium text-base md:text-lg">
//             <Building2 className="w-4 h-4 text-primary" />
//             {isRTL ? 'الجهة / الشركة *' : 'Organization / Company *'}
//           </Label>
//           <Input
//             id="organization"
//             placeholder={isRTL ? 'اسم الجهة أو الشركة' : 'Organization or company name'}
//             value={formData.organization}
//             onChange={(e) => handleInputChange('organization', e.target.value)}
//             required
//             className="bg-gray-50/50 border-border focus:border-primary h-14 text-lg px-4"
//           />
//         </div>

//         {/* Position */}
//         <div className="space-y-2">
//           <Label htmlFor="position" className="flex items-center gap-2 text-foreground font-medium">
//             <Briefcase className="w-4 h-4 text-primary" />
//             {isRTL ? 'المنصب الوظيفي' : 'Job Position'}
//           </Label>
//           <Input
//             id="position"
//             placeholder={isRTL ? 'المنصب الوظيفي' : 'Your job position'}
//             value={formData.position}
//             onChange={(e) => handleInputChange('position', e.target.value)}
//             required
//             className="bg-gray-50/50 border-border focus:border-primary"
//           />
//         </div>

//         {/* Email */}
//         <div className="space-y-2">
//           <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
//             <Mail className="w-4 h-4 text-primary" />
//             {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
//           </Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="example@domain.com"
//             value={formData.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//             required
//             className="bg-gray-50/50 border-border focus:border-primary text-left"
//             dir="ltr"
//           />
//         </div>

//         {/* Phone */}
//         <div className="space-y-2">
//           <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
//             <Phone className="w-4 h-4 text-primary" />
//             {isRTL ? 'رقم الهاتف' : 'Phone Number'}
//           </Label>
//           <Input
//             id="phone"
//             type="tel"
//             placeholder="+971 XX XXX XXXX"
//             value={formData.phone}
//             onChange={(e) => handleInputChange('phone', e.target.value)}
//             required
//             className="bg-gray-50/50 border-border focus:border-primary text-left"
//             dir="ltr"
//           />
//         </div>

//         {/* Sector */}
//         <div className="space-y-2">
//           <Label className="flex items-center gap-2 text-foreground font-medium">
//             <Building2 className="w-4 h-4 text-primary" />
//             {isRTL ? 'القطاع' : 'Sector'}
//           </Label>
//           <Select
//             value={formData.sector}
//             onValueChange={(value) => handleInputChange('sector', value)}
//             required
//           >
//             <SelectTrigger className="bg-gray-50/50 border-border focus:border-primary">
//               <SelectValue placeholder={isRTL ? 'اختر القطاع' : 'Select sector'} />
//             </SelectTrigger>
//             <SelectContent>
//               {sectors.map((sector) => (
//                 <SelectItem key={sector.key} value={sector.key}>
//                   {sector.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Subject */}
//         <div className="space-y-2 md:col-span-2">
//           <Label htmlFor="subject" className="flex items-center gap-2 text-foreground font-medium">
//             <Briefcase className="w-4 h-4 text-primary" />
//             {isRTL ? 'موضوع الاستشارة المختصر' : 'Brief Consultation Topic'}
//           </Label>
//           <Textarea
//             id="subject"
//             placeholder={isRTL ? 'اكتب وصفًا مختصرًا لموضوع الاستشارة هنا...' : 'Write a brief description of the consultation topic here...'}
//             value={formData.subject}
//             onChange={(e) => handleInputChange('subject', e.target.value)}
//             required
//             rows={6}
//             className="bg-gray-50/50 border-border focus:border-primary h-36 resize-vertical p-4"
//           />
//         </div>

//         {/* Duration */}
//         <div className="space-y-2 md:col-span-2">
//           <Label className="flex items-center gap-2 text-foreground font-medium mb-4">
//             <Clock className="w-4 h-4 text-primary" />
//             {isRTL ? 'مدة الاستشارة المفضلة' : 'Preferred Consultation Duration'}
//           </Label>
//           <RadioGroup
//             value={formData.duration}
//             onValueChange={(value) => handleInputChange('duration', value)}
//             className="flex flex-wrap gap-4"
//           >
//             {consultationDurations.map((duration) => (
//               <div key={duration.value} className="flex items-center space-x-2">
//                 <RadioGroupItem value={duration.value} id={`duration-${duration.value}`} />
//                 <Label htmlFor={`duration-${duration.value}`} className="cursor-pointer">
//                   {duration.label}
//                 </Label>
//               </div>
//             ))}
//           </RadioGroup>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="mt-10 text-center">
//         <Button
//           type="submit"
//           size="lg"
//           className="group shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300 px-12 py-7 text-lg"
//         >
//           <Send className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
//           <span>{isRTL ? 'تأكيد الحجز' : 'Confirm Booking'}</span>
//         </Button>
//       </div>
//     </motion.form>

//     {/* Trust Bar */}
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: 0.3 }}
//       className="mt-16"
//     >
//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {trustStatements.map((statement, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center"
//           >
//             <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
//             <p className="text-gray-700 font-medium">{statement}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   </div>
// </section>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Layout>
//   );
// };

// export default BookConsultation;
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source'); // 'consulting', 'digital', 'training'
  
  const getMainTitle = () => {
    switch (source) {
      case 'digital':
        return isRTL 
          ? 'شاركنا تحدياتكم الرقمية وسيتواصل معكم فريقنا بخطة أولية'
          : 'Share your digital challenges and our team will contact you with an initial plan';
      case 'training':
        return isRTL 
          ? 'أخبرنا عن احتياجات التدريب لدى فريقكم وسنقترح البرامج المناسبة'
          : 'Tell us about your team\'s training needs and we will suggest suitable programs';
      default: // 'consulting' أو أي شيء آخر
        return isRTL 
          ? 'احجز استشارة استراتيجية مع خبرائنا'
          : 'Book a strategic consultation with our experts';
    }
  };

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

  // أضفنا قائمة رموز الدول هنا
  const countryCodes = [
    { code: '+971', label: isRTL ? 'الإمارات (+971)' : 'UAE (+971)', flag: '🇦🇪' },
    { code: '+966', label: isRTL ? 'السعودية (+966)' : 'KSA (+966)', flag: '🇸🇦' },
    { code: '+968', label: isRTL ? 'عمان (+968)' : 'Oman (+968)', flag: '🇴🇲' },
    { code: '+974', label: isRTL ? 'قطر (+974)' : 'Qatar (+974)', flag: '🇶🇦' },
    { code: '+965', label: isRTL ? 'الكويت (+965)' : 'Kuwait (+965)', flag: '🇰🇼' },
    { code: '+973', label: isRTL ? 'البحرين (+973)' : 'Bahrain (+973)', flag: '🇧🇭' },
    { code: '+20', label: isRTL ? 'مصر (+20)' : 'Egypt (+20)', flag: '🇪🇬' },
    { code: '+962', label: isRTL ? 'الأردن (+962)' : 'Jordan (+962)', flag: '🇯🇴' },
    { code: '+1', label: isRTL ? 'الولايات المتحدة/كندا (+1)' : 'USA/Canada (+1)', flag: '🇺🇸' },
    { code: '+44', label: isRTL ? 'المملكة المتحدة (+44)' : 'UK (+44)', flag: '🇬🇧' },
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
    countryCode: '+971', // أضفنا هذا الحقل
    phone: '',
    sector: '',
    subject: '',
    duration: '30',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // الاسم
    if (!formData.fullName.trim()) {
      newErrors.fullName = isRTL ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
    }

    // المؤسسة
    if (!formData.organization.trim()) {
      newErrors.organization = isRTL ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
    }

    // الإيميل
    if (!formData.email.trim()) {
      newErrors.email = isRTL ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
    } else {
      // تحقق صارم من صيغة الإيميل ومنع أي شيء بعد الامتداد
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      if (!emailRegex.test(formData.email)) {
        newErrors.email = isRTL ? 'يرجى إدخال عنوان بريد إلكتروني صالح (مثال: example@domain.com)' : 'Please enter a valid email address (e.g., example@domain.com)';
      } else {
        // تحقق إضافي للتأكد من عدم وجود أحرف إضافية بعد الامتداد
        const trimmedEmail = formData.email.trim();
        const atIndex = trimmedEmail.indexOf('@');
        if (atIndex !== -1) {
          const domainPart = trimmedEmail.substring(atIndex + 1);
          const lastDotIndex = domainPart.lastIndexOf('.');
          
          if (lastDotIndex === -1 || lastDotIndex === domainPart.length - 1) {
            newErrors.email = isRTL ? 'يرجى إدخال امتداد صالح للبريد الإلكتروني (مثل .com, .net, .eg)' : 'Please enter a valid email extension (like .com, .net, .eg)';
          } else {
            const extension = domainPart.substring(lastDotIndex + 1);
            // تحقق من أن الامتداد يحتوي فقط على أحرف
            if (!/^[a-zA-Z]+$/.test(extension)) {
              newErrors.email = isRTL ? 'امتداد البريد الإلكتروني يجب أن يحتوي على أحرف فقط (مثل .com, .net)' : 'Email extension must contain only letters (e.g., .com, .net)';
            }
            // تحقق من عدم وجود أي محتوى بعد الامتداد
            const domainWithoutExtension = domainPart.substring(0, lastDotIndex);
            if (!domainWithoutExtension || domainWithoutExtension.endsWith('.')) {
              newErrors.email = isRTL ? 'يرجى إدخال اسم نطاق صالح قبل الامتداد' : 'Please enter a valid domain name before the extension';
            }
          }
        }
      }
    }

    // الهاتف
    if (!formData.phone.trim()) {
      newErrors.phone = isRTL ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
    } else {
      const cleanedPhone = formData.phone.replace(/\D/g, '');
      if (!/^[0-9]+$/.test(cleanedPhone)) {
        newErrors.phone = isRTL ? 'يرجى إدخال رقم هاتف صالح (أرقام فقط)' : 'Please enter a valid phone number (digits only)';
      } else if (cleanedPhone.startsWith('0')) {
        newErrors.phone = isRTL ? 'لا يمكن أن يبدأ رقم الهاتف بصفر' : 'Phone number cannot start with 0';
      } else if (cleanedPhone.length < 7) {
        newErrors.phone = isRTL ? 'رقم الهاتف قصير جداً' : 'Phone number is too short';
      }
    }

    // القطاع (إجباري)
    if (!formData.sector) {
      newErrors.sector = isRTL ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
    }

    // موضوع الاستشارة (إجباري)
    if (!formData.subject.trim()) {
      newErrors.subject = isRTL ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (value: string) => {
    // إزالة كل ما ليس رقم
    const cleanedValue = value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: cleanedValue }));
    
    // إزالة الخطأ عند البدء في الكتابة
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // إزالة الخطأ عند البدء في الكتابة
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value.trim();
    
    if (email) {
      // تنظيف الإيميل من أي محتوى بعد الامتداد
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const match = email.match(emailRegex);
      
      if (match && match[0]) {
        // إذا وجد تطابق، استخدم فقط الجزء الصحيح من الإيميل
        const cleanEmail = match[0];
        if (cleanEmail !== email) {
          setFormData(prev => ({ ...prev, email: cleanEmail }));
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ac89cab9336b36569a10997c062f68e7", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Consultation Booking - ${formData.fullName}`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(isRTL ? 'حدث خطأ في الإرسال. حاول مرة أخرى.' : 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(isRTL ? 'حدث خطأ في الإرسال. حاول مرة أخرى.' : 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-blue-50 pt-32"
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
                  ? 'سيتواصل معك فريقنا الاستشاري  خلال 24-48 ساعة لتأكيد الموعد.'
                  : 'The consulting team will contact you within 24-48 hours to confirm the appointment.'
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
            <section className="pt-40 pb-8 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
              <div className="container-custom relative z-10">
                <br></br>
                <div className="max-w-4xl mx-auto text-center">
                  <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-tight mb-12 max-w-4xl mx-auto"
                  >
                    {getMainTitle()}
                  </motion.p>
                </div>
              </div>
            </section>

            {/* Form Section */}
            <section className="pb-16 bg-gradient-to-br from-gray-50/30 to-white">
              <div className="container-custom">
                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="max-w-4xl mx-auto bg-white rounded-2xl border border-border/50 p-8 md:p-10 shadow-medium"
                  noValidate
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground font-medium text-base md:text-lg">
                        <User className="w-4 h-4 text-primary" />
                        {isRTL ? 'الاسم' : 'Name'} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`bg-gray-50/50 border-border focus:border-primary h-14 text-lg px-4 ${errors.fullName ? 'border-red-500' : ''}`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Organization */}
                    <div className="space-y-3">
                      <Label htmlFor="organization" className="flex items-center gap-2 text-foreground font-medium text-base md:text-lg">
                        <Building2 className="w-4 h-4 text-primary" />
                        {isRTL ? 'الجهة / الشركة' : 'Organization / Company'} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="organization"
                        placeholder={isRTL ? 'اسم الجهة أو الشركة' : 'Organization or company name'}
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        className={`bg-gray-50/50 border-border focus:border-primary h-14 text-lg px-4 ${errors.organization ? 'border-red-500' : ''}`}
                      />
                      {errors.organization && (
                        <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
                      )}
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
                        className="bg-gray-50/50 border-border focus:border-primary h-12"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
                        <Mail className="w-4 h-4 text-primary" />
                        {isRTL ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={handleEmailBlur}
                        className={`bg-gray-50/50 border-border focus:border-primary text-left h-12 ${errors.email ? 'border-red-500' : ''}`}
                        dir="ltr"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone مع كود الدولة - تم التعديل هنا */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
                        <Phone className="w-4 h-4 text-primary" />
                        {isRTL ? 'رقم الهاتف' : 'Phone Number'} <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex gap-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleInputChange('countryCode', value)}
                        >
                          <SelectTrigger className="h-12 w-[140px] text-base">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.label}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder={isRTL ? "123456789" : "123456789"}
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          className={`bg-gray-50/50 border-border focus:border-primary text-left h-12 flex-1 ${errors.phone ? 'border-red-500' : ''}`}
                          dir="ltr"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Sector */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-foreground font-medium">
                        <Building2 className="w-4 h-4 text-primary" />
                        {isRTL ? 'القطاع' : 'Sector'} <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => handleInputChange('sector', value)}
                      >
                        <SelectTrigger className={`bg-gray-50/50 border-border focus:border-primary h-12 ${errors.sector ? 'border-red-500' : ''}`}>
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
                      {errors.sector && (
                        <p className="mt-1 text-sm text-red-600">{errors.sector}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="subject" className="flex items-center gap-2 text-foreground font-medium">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {isRTL ? 'موضوع الاستشارة المختصر' : 'Brief Consultation Topic'} <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="subject"
                        placeholder={isRTL ? 'اكتب وصفًا مختصرًا لموضوع الاستشارة هنا...' : 'Write a brief description of the consultation topic here...'}
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        rows={6}
                        className={`bg-gray-50/50 border-border focus:border-primary resize-vertical p-4 min-h-[150px] ${errors.subject ? 'border-red-500' : ''}`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
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
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {isRTL ? 'جاري الإرسال...' : 'Sending...'}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                          <span>{isRTL ? 'تأكيد الحجز' : 'Confirm Booking'}</span>
                        </span>
                      )}
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