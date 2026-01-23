
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import Layout from '@/components/layout/Layout';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from 'sonner';
// import { MapPin, Phone, Mail, Send, Clock, MessageCircle, Shield } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// const Contact = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === 'ar';

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

//   const trustStatements = [
//     isRTL ? 'شريك موثوق للحكومات والمؤسسات الكبرى' : 'Trusted partner for governments and major institutions',
//     isRTL ? 'خبرة عميقة في التحول الرقمي والذكاء الاصطناعي' : 'Deep expertise in digital transformation and AI',
//     isRTL ? 'حلول عملية قابلة للتنفيذ' : 'Practical, actionable solutions',
//   ];

//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     sector: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // استخدم FormSubmit لإرسال الإيميل
//       const response = await fetch('https://formsubmit.co/ajax/ac89cab9336b36569a10997c062f68e7', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//           _subject: `موقع ATC: ${formData.subject || 'رسالة جديدة'}`,
//           _replyto: formData.email, // علشان يقدروا يردوا على العميل
//           _template: 'table', // شكل جدول مرتب
          
//           // بيانات الرسالة
//           ' الاسم / Name': formData.name,
//           ' المؤسسة / Organization': formData.organization || 'غير محدد',
//           ' البريد الإلكتروني / Email': formData.email,
//           ' الهاتف / Phone': formData.phone || 'غير متوفر',
//           ' القطاع / Sector': formData.sector ? (sectors.find(s => s.key === formData.sector)?.label || formData.sector) : 'غير محدد',
//           ' الموضوع / Subject': formData.subject,
//           ' الرسالة / Message': formData.message,
          
//           // إعدادات إضافية
//           _cc: 'info@atc-ae.com', // نسخة إضافية
//           _autoresponse: isRTL ? 'شكرًا لتواصلك مع ATC. سنرد عليك خلال 48 ساعة.' : 'Thank you for contacting ATC. We will respond within 48 hours.',
//           _honey: '', // حماية من البوتات
//           _captcha: 'false', // تعطيل الكابتشا
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         toast.success(isRTL 
//           ? 'شكرًا لتواصلك معنا. تم استلام رسالتك بنجاح، وسيقوم فريق ATC بالرد عليك خلال 24-48 ساعة.'
//           : 'Thank you for contacting us. Your message has been received successfully, and the ATC team will respond within 24-48 hours.'
//         );
//         // امسح الفورم
//         setFormData({ name: '', organization: '', email: '', phone: '', sector: '', subject: '', message: '' });
//       } else {
//         throw new Error('فشل في الإرسال');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error(isRTL 
//         ? 'عذرًا، حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل عبر الهاتف.'
//         : 'Sorry, there was an error sending your message. Please try again or contact us by phone.'
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData({ ...formData, sector: value });
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: isRTL ? 'مكتب دبي' : 'Dubai Office',
//       content: isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates',
//     },
//     {
//       icon: MapPin,
//       title: isRTL ? 'مكتب الخبر' : 'Al Khobar Office',
//       content: isRTL ? 'الخبر، المملكة العربية السعودية' : 'Al Khobar, Kingdom of Saudi Arabia',
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       content: 'info@atc-ae.com',
//       link: 'mailto:info@atc-ae.com',
//     },
//     {
//       icon: Phone,
//       title: isRTL ? 'الإمارات' : 'UAE Phone',
//       content: '+971 50 426 7486',
//       link: 'tel:+971504267486',
//     },
//     {
//       icon: Phone,
//       title: isRTL ? 'السعودية' : 'KSA Phone',
//       content: '+966 53 289 1000',
//       link: 'tel:+966532891000',
//     },
//     {
//       icon: Clock,
//       title: isRTL ? 'ساعات العمل' : 'Working Hours',
//       content: isRTL ? 'الأحد - الخميس: ٩ ص - ٦ م' : 'Sun - Thu: 9 AM - 6 PM',
//     },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
//         <div className="container-custom relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
//             >
//               {isRTL ? 'تواصل معنا' : 'Contact Us'}
//             </motion.h1>
            
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-lg md:text-xl text-gray-600 leading-relaxed"
//             >
//               {isRTL 
//                 ? 'نحن هنا لدعم حكومتك أو مؤسستك في رحلتها نحو التحول الرقمي، الحوكمة، وبناء القدرات المستقبلية. تواصل معنا وسنعود إليك خلال 24-48 ساعة.'
//                 : 'We are here to support your government or organization in its journey towards digital transformation, governance, and building future capabilities. Contact us and we will get back to you within 24-48 hours.'
//               }
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="py-16 bg-white">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300"
//               >
//                 <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
//                   <info.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h3 className="font-bold text-lg text-primary mb-3">{info.title}</h3>
//                 {info.link ? (
//                   <a
//                     href={info.link}
//                     className="text-gray-600 hover:text-primary transition-colors block"
//                     dir={info.title.includes('Phone') || info.title === 'Email' ? 'ltr' : undefined}
//                   >
//                     {info.content}
//                   </a>
//                 ) : (
//                   <p className="text-gray-600">{info.content}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-16 bg-gradient-to-br from-gray-50/30 to-white">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="bg-white rounded-2xl p-8 md:p-10 shadow-medium">
//                 <h2 className="text-2xl font-bold text-primary mb-8 text-center">
//                   {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
//                 </h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* حقل خفي للحماية من البوتات */}
//                   <input 
//                     type="checkbox" 
//                     name="_honey" 
//                     style={{ display: 'none' }} 
//                     tabIndex={-1}
//                     autoComplete="off"
//                   />
                  
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
//                         {isRTL ? 'اسم الجهة / الشركة' : 'Organization / Company Name'}
//                       </label>
//                       <Input
//                         id="organization"
//                         name="organization"
//                         value={formData.organization}
//                         onChange={handleChange}
//                         placeholder={isRTL ? 'اسم المؤسسة أو الشركة' : 'Organization or company name'}
//                         className="h-12"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         {isRTL ? 'البريد الإلكتروني *' : 'Email *'}
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="example@email.com"
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                         {isRTL ? 'رقم الهاتف' : 'Phone Number'}
//                       </label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder={isRTL ? "+966 53 289 1000" : "+966 53 289 1000"}
//                         className="h-12"
//                         dir="ltr"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {isRTL ? 'القطاع' : 'Sector'}
//                       </label>
//                       <Select
//                         value={formData.sector}
//                         onValueChange={handleSelectChange}
//                       >
//                         <SelectTrigger className="h-12">
//                           <SelectValue placeholder={isRTL ? 'اختر القطاع' : 'Select sector'} />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {sectors.map((sector) => (
//                             <SelectItem key={sector.key} value={sector.key}>
//                               {sector.label}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                         {isRTL ? 'موضوع الرسالة *' : 'Message Subject *'}
//                       </label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         placeholder={isRTL ? 'موضوع الرسالة' : 'Message subject'}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       {isRTL ? 'تفاصيل مختصرة لطلبك *' : 'Brief Details of Your Request *'}
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
//                       required
//                       rows={5}
//                       className="resize-none"
//                     />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <span className="flex items-center gap-2">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         {isRTL ? 'جاري الإرسال...' : 'Sending...'}
//                       </span>
//                     ) : (
//                       <span className="flex items-center gap-2">
//                         <Send className="w-5 h-5" />
//                         {isRTL ? 'إرسال الرسالة' : 'Send Message'}
//                       </span>
//                     )}
//                   </Button>
//                 </form>
//               </div>
//             </motion.div>

//             {/* WhatsApp CTA */}
//             <motion.a
//               href={`https://wa.me/971504267486?text=${encodeURIComponent(
//                 isRTL 
//                   ? 'السلام عليكم، أود الاستفسار عن خدمات ATC'
//                   : 'Hello, I would like to inquire about ATC services'
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex items-center gap-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group mt-8"
//             >
//               <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                 <MessageCircle className="w-8 h-8" />
//               </div>
//               <div className="text-left">
//                 <h3 className="font-bold text-xl mb-2">{isRTL ? 'تواصل معنا عبر واتساب' : 'Contact Us via WhatsApp'}</h3>
//                 <p className="text-white/90">{isRTL ? 'للرد السريع على استفساراتك' : 'For quick responses to your inquiries'}</p>
//               </div>
//             </motion.a>

//             {/* Trust Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="mt-12"
//             >
//               <div className="grid md:grid-cols-3 gap-6">
//                 {trustStatements.map((statement, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     className="bg-white rounded-xl p-6 shadow-soft border border-border/50 text-center"
//                   >
//                     <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
//                     <p className="text-gray-700 font-medium">{statement}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Contact;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle, Shield, Navigation, Building } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
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

  const trustStatements = [
    isRTL ? 'شريك موثوق للحكومات والمؤسسات الكبرى' : 'Trusted partner for governments and major institutions',
    isRTL ? 'خبرة عميقة في التحول الرقمي والذكاء الاصطناعي' : 'Deep expertise in digital transformation and AI',
    isRTL ? 'حلول عملية قابلة للتنفيذ' : 'Practical, actionable solutions',
  ];

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    sector: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ac89cab9336b36569a10997c062f68e7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `موقع ATC: ${formData.subject || 'رسالة جديدة'}`,
          _replyto: formData.email,
          _template: 'table',
          
          ' الاسم / Name': formData.name,
          ' المؤسسة / Organization': formData.organization || 'غير محدد',
          ' البريد الإلكتروني / Email': formData.email,
          ' الهاتف / Phone': formData.phone || 'غير متوفر',
          ' القطاع / Sector': formData.sector ? (sectors.find(s => s.key === formData.sector)?.label || formData.sector) : 'غير محدد',
          ' الموضوع / Subject': formData.subject,
          ' الرسالة / Message': formData.message,
          
          _cc: 'info@atc-ae.com',
          _autoresponse: isRTL ? 'شكرًا لتواصلك مع ATC. سنرد عليك خلال 48 ساعة.' : 'Thank you for contacting ATC. We will respond within 48 hours.',
          _honey: '',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(isRTL 
          ? 'شكرًا لتواصلك معنا. تم استلام رسالتك بنجاح، وسيقوم فريق ATC بالرد عليك خلال 24-48 ساعة.'
          : 'Thank you for contacting us. Your message has been received successfully, and the ATC team will respond within 24-48 hours.'
        );
        setFormData({ name: '', organization: '', email: '', phone: '', sector: '', subject: '', message: '' });
      } else {
        throw new Error('فشل في الإرسال');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(isRTL 
        ? 'عذرًا، حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل عبر الهاتف.'
        : 'Sorry, there was an error sending your message. Please try again or contact us by phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, sector: value });
  };

  const officeCards = [
    {
      country: isRTL ? 'الإمارات العربية المتحدة' : 'United Arab Emirates',
      city: isRTL ? 'دبي' : 'Dubai',
      officeName: isRTL ? 'مكتب دبي الرئيسي' : 'Dubai Main Office',
      color: 'from-blue-500/10 to-blue-600/10',
      iconColor: 'text-blue-600',
      flagColor: 'bg-blue-100 text-blue-800',
      items: [
        {
          icon: MapPin,
          label: isRTL ? 'العنوان' : 'Address',
          value: isRTL ? 'دبي  الخليج التجاري' : 'Dubai , Business Bay',
          link: 'https://maps.google.com/?q=Business+Bay+Dubai'
        },
        {
          icon: Phone,
          label: isRTL ? 'الهاتف' : 'Phone',
          value: '+971 50 426 7486',
          link: 'tel:+971504267486'
        },
        {
          icon: Mail,
          label: 'Email',
          value: 'info@atc-ae.com',
          link: 'mailto:info@atc-ae.com'
        },
        {
          icon: Clock,
          label: isRTL ? 'ساعات العمل' : 'Working Hours',
          value: isRTL ? 'الأحد - الخميس: ٩ صباحاً - ٦ مساءً' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'
        }
      ]
    },
    {
      country: isRTL ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia',
      city: isRTL ? 'الخبر' : 'Al Khobar',
      officeName: isRTL ? 'مكتب الخبر' : 'Al Khobar Office',
      color: 'from-emerald-500/10 to-emerald-600/10',
      iconColor: 'text-emerald-600',
      flagColor: 'bg-emerald-100 text-emerald-800',
      items: [
        {
          icon: MapPin,
          label: isRTL ? 'العنوان' : 'Address',
          value: isRTL ? 'الخبر، المنطقة الشرقية' : 'Al Khobar, Eastern Province',
          link: 'https://maps.google.com/?q=Al+Khobar+Saudi+Arabia'
        },
        {
          icon: Phone,
          label: isRTL ? 'الهاتف' : 'Phone',
          value: '+966 53 289 1000',
          link: 'tel:+966532891000'
        },
        {
          icon: Mail,
          label: 'Email',
          value: 'info@atc-ae.com',
          link: 'mailto:info@atc-ae.com'
        },
        {
          icon: Clock,
          label: isRTL ? 'ساعات العمل' : 'Working Hours',
          value: isRTL ? 'الأحد - الخميس: ٩ صباحاً - ٦ مساءً' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            >
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              {isRTL 
                ? 'نحن هنا لدعم حكومتك أو مؤسستك في رحلتها نحو التحول الرقمي، الحوكمة، وبناء القدرات المستقبلية. تواصل معنا وسنعود إليك خلال 24-48 ساعة.'
                : 'We are here to support your government or organization in its journey towards digital transformation, governance, and building future capabilities. Contact us and we will get back to you within 24-48 hours.'
              }
            </motion.p>
          </div>
        </div>
      </section>

      {/* Office Cards Section - أصغر */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {officeCards.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 h-full">
                  {/* Header with Country Flag - أصغر */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${office.flagColor} mb-2`}>
                        <Building className="w-3 h-3" />
                        {office.country}
                      </div>
                      <h3 className="font-bold text-lg text-primary">
                        {office.city}
                      </h3>
                      <p className="text-gray-600 text-xs mt-1">
                        {office.officeName}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg ${office.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <MapPin className={`w-6 h-6 ${office.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Office Details - أصغر */}
                  <div className="space-y-3">
                    {office.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-md ${office.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-4 h-4 ${office.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-700 text-xs mb-0.5">
                            {item.label}
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={item.icon === MapPin ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                              className="group/link"
                            >
                              <div className="flex items-center justify-between">
                                <div className={`text-sm font-semibold truncate ${item.link ? 'text-primary hover:text-primary/80 transition-colors duration-300' : 'text-gray-900'}`}>
                                  {item.value}
                                </div>
                                {item.link && (
                                  <Navigation className="w-3 h-3 text-primary opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-1" />
                                )}
                              </div>
                            </a>
                          ) : (
                            <div className="text-sm font-semibold text-gray-900 truncate">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer Line */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                      {isRTL 
                        ? 'ساعات العمل الرسمية'
                        : 'Official working hours'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section - جنب بعض مع نسبة 2:1 */}
      <section className="py-12 bg-gradient-to-br from-gray-50/30 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* الفورم - تأخذ كولمين من 3 */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-medium h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                  {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input 
                    type="checkbox" 
                    name="_honey" 
                    style={{ display: 'none' }} 
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'اسم الجهة / الشركة' : 'Organization / Company Name'}
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder={isRTL ? 'اسم المؤسسة أو الشركة' : 'Organization or company name'}
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'البريد الإلكتروني *' : 'Email *'}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={isRTL ? "+966 53 289 1000" : "+966 53 289 1000"}
                        className="h-12 text-base"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'القطاع' : 'Sector'}
                      </label>
                      <Select
                        value={formData.sector}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className="h-12 text-base">
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
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {isRTL ? 'موضوع الرسالة *' : 'Message Subject *'}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={isRTL ? 'موضوع الرسالة' : 'Message subject'}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {isRTL ? 'تفاصيل مختصرة لطلبك *' : 'Brief Details of Your Request *'}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      required
                      rows={6}
                      className="resize-none text-base min-h-[150px]"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300 py-7 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {isRTL ? 'جاري الإرسال...' : 'Sending...'}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* الخريطة - تأخذ كولمين من 1 */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-medium h-full">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {isRTL ? 'موقع مكتب دبي' : 'Dubai Office Location'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {isRTL 
                      ? 'دبي مارينا، الخليج التجاري - الإمارات العربية المتحدة'
                      : 'Dubai Marina, Business Bay - United Arab Emirates'
                    }
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Business+Bay+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    {isRTL ? 'فتح الخريطة' : 'Open map'}
                  </a>
                </div>
                
                {/* Google Map Embed */}
                <div className="relative h-[calc(100%-140px)] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.489623524232!2d55.27037131540227!3d25.186222483898475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1647891234567!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ATC Dubai Office Location"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Icon */}
      <motion.a
        href={`https://wa.me/971504267486?text=${encodeURIComponent(
          isRTL 
            ? 'السلام عليكم، أود الاستفسار عن خدمات ATC'
            : 'Hello, I would like to inquire about ATC services'
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

      {/* Trust Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">
                {isRTL ? 'لماذا تثق بنا؟' : 'Why Trust Us?'}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {trustStatements.map((statement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-gray-800 font-medium text-sm leading-relaxed">
                          {statement}
                        </p>
                      </div>
                      
                      {/* Bottom Line */}
                      <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-primary/20 to-primary rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;