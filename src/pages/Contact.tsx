// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import Layout from '@/components/layout/Layout';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from 'sonner';
// import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';

// const Contact = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === 'ar';

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast.success(t('contact.successMessage'));
//     setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//     setIsSubmitting(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: t('contact.address'),
//       content: t('contact.addressValue'),
//     },
//     {
//       icon: Phone,
//       title: t('contact.phoneLabel'),
//       content: '+971 56 661 3952',
//       link: 'tel:+971566613952',
//     },
//     {
//       icon: Mail,
//       title: t('contact.emailLabel'),
//       content: 'info@atc-ae.com',
//       link: 'mailto:info@atc-ae.com',
//     },
//     {
//       icon: Clock,
//       title: t('contact.workingHours'),
//       content: t('contact.workingHoursValue'),
//     },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-primary relative overflow-hidden">
//         <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        
//         {/* Animated Elements */}
//         <motion.div
//           animate={{ y: [-25, 25, -25], x: [-15, 15, -15] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-24 left-16 w-40 h-40 bg-accent/15 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ y: [25, -25, 25], scale: [1, 1.15, 1] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-16 right-16 w-56 h-56 bg-primary-foreground/8 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//           className="absolute top-36 right-24 w-16 h-16 border border-accent/25 rounded-full"
//         />
        
//         <div className="container-custom relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <motion.span 
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-block px-6 py-3 rounded-full bg-accent/20 text-accent text-sm font-medium mb-8 backdrop-blur-sm border border-accent/20"
//             >
//               {t('contact.badge')}
//             </motion.span>
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
//             >
//               {t('contact.title')}{' '}
//               <span className="relative">
//                 <span className="text-gradient-gold">{t('contact.titleHighlight')}</span>
//                 <motion.span
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                   className={`absolute -bottom-2 ${isRTL ? 'right-0 origin-right' : 'left-0 origin-left'} w-full h-1 bg-gradient-gold rounded-full`}
//                 />
//               </span>
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
//             >
//               {t('contact.description')}
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="bg-card rounded-3xl p-8 md:p-10 shadow-soft">
//                 <h2 className="text-2xl font-bold text-foreground mb-6">
//                   {t('contact.formTitle')}
//                 </h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                         {t('contact.name')}
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder={t('contact.namePlaceholder')}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                         {t('contact.email')}
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder={t('contact.emailPlaceholder')}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
//                         {t('contact.phone')}
//                       </label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder={t('contact.phonePlaceholder')}
//                         className="h-12"
//                         dir="ltr"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                         {t('contact.subject')}
//                       </label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         placeholder={t('contact.subjectPlaceholder')}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                       {t('contact.message')}
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder={t('contact.messagePlaceholder')}
//                       required
//                       rows={5}
//                       className="resize-none"
//                     />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full shadow-[0_8px_25px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#d6ad55] to-[#b6892e] text-white font-medium hover:brightness-110 transition-all duration-300" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <span className="flex items-center gap-2">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         {t('contact.sending')}
//                       </span>
//                     ) : (
//                       <span className="flex items-center gap-2">
//                         <Send className="w-5 h-5" />
//                         {t('contact.submit')}
//                       </span>
//                     )}
//                   </Button>
//                 </form>
//               </div>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="space-y-6"
//             >
//               {/* Info Cards */}
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={info.title}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
//                   >
//                     <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
//                       <info.icon className="w-6 h-6 text-accent" />
//                     </div>
//                     <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
//                     {info.link ? (
//                       <a
//                         href={info.link}
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                         dir={info.title === t('contact.phoneLabel') ? 'ltr' : undefined}
//                       >
//                         {info.content}
//                       </a>
//                     ) : (
//                       <p className="text-muted-foreground">{info.content}</p>
//                     )}
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Map */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: 0.4 }}
//                 className="rounded-2xl overflow-hidden shadow-soft h-[300px]"
//               >
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7033741726!2d55.3503!3d25.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzAwLjAiTiA1NcKwMjEnMDEuMSJF!5e0!3m2!1sen!2sae!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="ATC Location"
//                 />
//               </motion.div>

//               {/* WhatsApp CTA */}
//               <motion.a
//                 href="https://wa.me/971566613952"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: 0.5 }}
//                 className="flex items-center gap-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <MessageCircle className="w-7 h-7" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">{t('contact.whatsappTitle')}</h3>
//                   <p className="text-white/80">{t('contact.whatsappDesc')}</p>
//                 </div>
//               </motion.a>
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
    { key: 'government', label: isRTL ? 'جهة حكومية' : 'Government Entity' },
    { key: 'energy', label: isRTL ? 'طاقة وبترول' : 'Energy & Petroleum' },
    { key: 'banking', label: isRTL ? 'بنوك ومالية' : 'Banking & Finance' },
    { key: 'private', label: isRTL ? 'قطاع خاص' : 'Private Sector' },
    { key: 'manufacturing', label: isRTL ? 'صناعات ومصانع' : 'Manufacturing & Industry' },
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(isRTL 
      ? 'شكرًا لتواصلك معنا. تم استلام رسالتك بنجاح، وسيقوم فريق ATC بالرد عليك خلال 24-48 ساعة.'
      : 'Thank you for contacting us. Your message has been received successfully, and the ATC team will respond within 24-48 hours.'
    );
    setFormData({ name: '', organization: '', email: '', phone: '', sector: '', subject: '', message: '' });
    setIsSubmitting(false);
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
      title: isRTL ? 'مكتبنا الرئيسي' : 'Our Main Office',
      content: isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@atc-consulting.com',
      link: 'mailto:info@atc-consulting.com',
    },
    {
      icon: Phone,
      title: isRTL ? 'الهاتف' : 'Phone',
      content: '+971 56 661 3952',
      link: 'tel:+971566613952',
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
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    className="text-gray-600 hover:text-primary transition-colors"
                    dir={info.title === 'Phone' ? 'ltr' : undefined}
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
                        placeholder="+971 XX XXX XXXX"
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
                        {isRTL ? ' إرسال الرسالة' : ' Send Message'}
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/971566613952"
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