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

//  const sectors = [
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

//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast.success(isRTL 
//       ? 'شكرًا لتواصلك معنا. تم استلام رسالتك بنجاح، وسيقوم فريق ATC بالرد عليك خلال 24-48 ساعة.'
//       : 'Thank you for contacting us. Your message has been received successfully, and the ATC team will respond within 24-48 hours.'
//     );
//     setFormData({ name: '', organization: '', email: '', phone: '', sector: '', subject: '', message: '' });
//     setIsSubmitting(false);
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
//       title: isRTL ? 'مكتبنا الرئيسي' : 'Our Main Office',
//       content: isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates',
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       content: 'info@atc-ae.com',
//       link: 'mailto:info@atc-ae.com',
//     },
//     {
//       icon: Phone,
//       title: isRTL ? 'الهاتف' : 'Phone',
//       content: '+971 50 426 7486',
//       link: 'tel:+971504267486',
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
//           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
//                     className="text-gray-600 hover:text-primary transition-colors"
//                     dir={info.title === 'Phone' ? 'ltr' : undefined}
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
//                         placeholder="+971 XX XXX XXXX"
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
//                         {isRTL ? ' إرسال الرسالة' : ' Send Message'}
//                       </span>
//                     )}
//                   </Button>
//                 </form>
//               </div>
//             </motion.div>

//             {/* WhatsApp CTA */}
//             <motion.a
//               href="https://wa.me/971504267486"
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

//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast.success(isRTL 
//       ? 'شكرًا لتواصلك معنا. تم استلام رسالتك بنجاح، وسيقوم فريق ATC بالرد عليك خلال 24-48 ساعة.'
//       : 'Thank you for contacting us. Your message has been received successfully, and the ATC team will respond within 24-48 hours.'
//     );
//     setFormData({ name: '', organization: '', email: '', phone: '', sector: '', subject: '', message: '' });
//     setIsSubmitting(false);
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
//                         {isRTL ? ' إرسال الرسالة' : ' Send Message'}
//                       </span>
//                     )}
//                   </Button>
//                 </form>
//               </div>
//             </motion.div>

//             {/* WhatsApp CTA */}
//             <motion.a
//               href="https://wa.me/971504267486"
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
import { MapPin, Phone, Mail, Send, Clock, MessageCircle, Shield } from 'lucide-react';
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
      // استخدم FormSubmit لإرسال الإيميل
      const response = await fetch('https://formsubmit.co/ajax/ac89cab9336b36569a10997c062f68e7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `موقع ATC: ${formData.subject || 'رسالة جديدة'}`,
          _replyto: formData.email, // علشان يقدروا يردوا على العميل
          _template: 'table', // شكل جدول مرتب
          
          // بيانات الرسالة
          ' الاسم / Name': formData.name,
          ' المؤسسة / Organization': formData.organization || 'غير محدد',
          ' البريد الإلكتروني / Email': formData.email,
          ' الهاتف / Phone': formData.phone || 'غير متوفر',
          ' القطاع / Sector': formData.sector ? (sectors.find(s => s.key === formData.sector)?.label || formData.sector) : 'غير محدد',
          ' الموضوع / Subject': formData.subject,
          ' الرسالة / Message': formData.message,
          
          // إعدادات إضافية
          _cc: 'info@atc-ae.com', // نسخة إضافية
          _autoresponse: isRTL ? 'شكرًا لتواصلك مع ATC. سنرد عليك خلال 48 ساعة.' : 'Thank you for contacting ATC. We will respond within 48 hours.',
          _honey: '', // حماية من البوتات
          _captcha: 'false', // تعطيل الكابتشا
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(isRTL 
          ? 'شكرًا لتواصلك معنا. تم استلام رسالتك بنجاح، وسيقوم فريق ATC بالرد عليك خلال 24-48 ساعة.'
          : 'Thank you for contacting us. Your message has been received successfully, and the ATC team will respond within 24-48 hours.'
        );
        // امسح الفورم
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

  const contactInfo = [
    {
      icon: MapPin,
      title: isRTL ? 'مكتب دبي' : 'Dubai Office',
      content: isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates',
    },
    {
      icon: MapPin,
      title: isRTL ? 'مكتب الخبر' : 'Al Khobar Office',
      content: isRTL ? 'الخبر، المملكة العربية السعودية' : 'Al Khobar, Kingdom of Saudi Arabia',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@atc-ae.com',
      link: 'mailto:info@atc-ae.com',
    },
    {
      icon: Phone,
      title: isRTL ? 'الإمارات' : 'UAE Phone',
      content: '+971 50 426 7486',
      link: 'tel:+971504267486',
    },
    {
      icon: Phone,
      title: isRTL ? 'السعودية' : 'KSA Phone',
      content: '+966 53 289 1000',
      link: 'tel:+966532891000',
    },
    {
      icon: Clock,
      title: isRTL ? 'ساعات العمل' : 'Working Hours',
      content: isRTL ? 'الأحد - الخميس: ٩ ص - ٦ م' : 'Sun - Thu: 9 AM - 6 PM',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
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

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-primary transition-colors block"
                    dir={info.title.includes('Phone') || info.title === 'Email' ? 'ltr' : undefined}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50/30 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-medium">
                <h2 className="text-2xl font-bold text-primary mb-8 text-center">
                  {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* حقل خفي للحماية من البوتات */}
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
                        className="h-12"
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
                        className="h-12"
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
                        className="h-12"
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
                        className="h-12"
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
                        <SelectTrigger className="h-12">
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
                        className="h-12"
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
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300" disabled={isSubmitting}>
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
                </form>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/971504267486?text=${encodeURIComponent(
                isRTL 
                  ? 'السلام عليكم، أود الاستفسار عن خدمات ATC'
                  : 'Hello, I would like to inquire about ATC services'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group mt-8"
            >
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl mb-2">{isRTL ? 'تواصل معنا عبر واتساب' : 'Contact Us via WhatsApp'}</h3>
                <p className="text-white/90">{isRTL ? 'للرد السريع على استفساراتك' : 'For quick responses to your inquiries'}</p>
              </div>
            </motion.a>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="grid md:grid-cols-3 gap-6">
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
        </div>
      </section>
    </Layout>
  );
};

export default Contact;