import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Arabic translations
const arTranslations = {
  // Navbar
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    contact: 'اتصل بنا',
    startNow: 'ابدأ الآن',
    companyName: 'آفاق التميز',
    companySlogan: 'للاستشارات والتدريب',
  },
  
  // Hero Section
  hero: {
    badge: 'خبرة تزيد عن 25 عاماً في التميز',
    title1: 'تمكين المؤسسات من اتخاذ قرارات',
    titleHighlight: 'أكثر كفاءة',
    title2: 'وتحقيق نتائج مؤسسية مستدامة',
    description: 'نقدّم حلولًا استشارية متكاملة في مجالات الاستشارات المؤسسية، والتحول الرقمي، والتدريب التنفيذي، لدعم الجهات الحكومية والمؤسسات في تحسين الأداء، وتعزيز الحوكمة، وربط الاستراتيجيات بالتنفيذ العملي.',
    bookConsultation: 'حجز استشارة',
    exploreServices: 'الاطلاع على خدماتنا',
    yearsExperience: 'عام من الخبرة',
  },
  
  // About Section
  about: {
    badge: 'من نحن',
    title: 'ATC للاستشارات',
    subtitle: 'شريككم في النجاح المؤسسي',
    description: 'ATC للاستشارات هي شركة استشارات وتطوير مؤسسي متخصصة في تقديم الاستشارات المؤسسية، والتحول الرقمي، والتدريب التنفيذي للجهات الحكومية والمؤسسات.',
    feature1: 'الاستشارات المؤسسية والاستراتيجية',
    feature2: 'التحول الرقمي والاستشارات التقنية',
    feature3: 'التدريب التنفيذي وبناء القدرات',
    feature4: 'دعم الجهات الحكومية والمؤسسات',
    stat1: 'متدرب ومتدربة',
    stat2: 'دورة تدريبية',
    stat3: 'تقييم إيجابي',
    stat4: 'عام من الخبرة',
    yearsExcellence: 'عام من التميز',
  },
  
  // About Page
  aboutPage: {
    badge: 'تعرّف علينا',
    title1: 'نصنع',
    titleHighlight: 'التميز',
    title2: 'معاً',
    companyName: 'آفاق التميز للاستشارات والتدريب',
    description: 'منذ أكثر من 25 عاماً ونحن نبني الكفاءات ونطور المؤسسات. نجمع بين الخبرة العميقة والابتكار الرقمي لنقدم حلولاً تدريبية واستشارية تُحدث فرقاً حقيقياً في مسيرة نجاحكم.',
    pill1: 'تدريب احترافي',
    pill2: 'استشارات متخصصة',
    pill3: 'تقنيات الميتافيرس',
    pill4: 'الابتكار الرقمي',
    stat1Label: 'متدرب ومتدربة',
    stat2Label: 'دورة تدريبية منجزة',
    stat3Label: 'مدرب معتمد',
    stat4Label: 'تقييم إيجابي',
    visionTitle: 'رؤيتنا',
    visionText: 'أن نكون الشريك الاستراتيجي الأول للمؤسسات في منطقة الخليج العربي في مجالات التدريب والتطوير المؤسسي، ونسهم في بناء كوادر قادرة على قيادة التحول الرقمي والابتكار.',
    missionTitle: 'رسالتنا',
    missionText: 'تقديم خدمات تدريبية واستشارية متميزة تتسم بالجودة والابتكار، تساعد المؤسسات والأفراد على تحقيق أهدافهم وتطوير قدراتهم بما يتوافق مع أفضل الممارسات العالمية.',
    partnersBadge: '🤝 شركاؤنا',
    partnersTitle: 'شركاؤنا',
    partnersTitleHighlight: 'بالنجاح',
    partnersDescription: 'نفخر بالشراكة مع أبرز المؤسسات الحكومية والخاصة في دولة الإمارات العربية المتحدة',
  },
  
  // Services Section
  services: {
    badge: 'خدماتنا',
    title: 'حلول متكاملة في',
    titleHighlight: 'الاستشارات',
    subtitle: 'التحول الرقمي، وبناء القدرات المؤسسية',
    exploreAll: 'اكتشف جميع خدماتنا',
    
    consulting: {
      title: 'الاستشارات المؤسسية والاستراتيجية',
      description: 'نقدّم خدمات استشارية تدعم تطوير الاستراتيجيات المؤسسية، وتحسين نماذج الحوكمة، ورفع كفاءة الأداء، ودعم اتخاذ القرار.',
      feature1: 'الاستشارات الاستراتيجية والمؤسسية',
      feature2: 'الحوكمة وتحسين الأداء',
      feature3: 'الاستشارات المتخصصة للجهات الحكومية',
      button: 'استكشاف خدمات الاستشارات',
    },
    digital: {
      title: 'التحول الرقمي والاستشارات التقنية',
      description: 'ندعم الجهات في تخطيط وتنفيذ مبادرات التحول الرقمي، وتطوير الاستراتيجيات الرقمية، وتحسين العمليات باستخدام التقنيات الحديثة.',
      feature1: 'استراتيجيات التحول الرقمي',
      feature2: 'رقمنة العمليات',
      feature3: 'الاستشارات التقنية',
      button: 'استكشاف حلول التحول الرقمي',
    },
    training: {
      title: 'التدريب التنفيذي وبناء القدرات',
      description: 'نصمّم وننفّذ برامج تدريبية وتنفيذية موجهة لرفع جاهزية القيادات وبناء القدرات المؤسسية، بما يدعم استدامة الأداء.',
      feature1: 'تدريب القيادات والتنفيذيين',
      feature2: 'برامج تدريب احترافية',
      feature3: 'الكوتشينج وورش العمل',
      button: 'استكشاف برامج التدريب',
    },
  },
  
  // Services Page
  servicesPage: {
    badge: '✨ خدماتنا المتميزة',
    title: 'خدماتنا',
    description: 'تقدّم ATC للاستشارات منظومة متكاملة من خدمات الاستشارات، والتحول الرقمي، والتدريب التنفيذي، المصمّمة لدعم الأداء المؤسسي وتحقيق نتائج مستدامة على المدى الطويل.',
    successfulProjects: 'مشروع ناجح',
    
    consulting: {
      title: 'خدمات الاستشارات',
      description: 'تدعم خدمات الاستشارات لدى ATC المؤسسات في تطوير الاستراتيجيات، وتعزيز الحوكمة، وتحسين الأداء المؤسسي.',
      feature1: 'الاستشارات المؤسسية والاستراتيجية',
      feature2: 'أطر الحوكمة وإدارة الأداء',
      feature3: 'الاستشارات التنظيمية وصياغة السياسات',
      feature4: 'الاستشارات المتخصصة حسب القطاع',
      cta: 'اطلب استشارة',
    },
    digital: {
      title: 'التحول الرقمي',
      description: 'تدعم ATC مبادرات التحول الرقمي التي تسهم في تحسين جودة اتخاذ القرار، ورفع الكفاءة التشغيلية.',
      feature1: 'الاستراتيجية الرقمية والاستشارات التقنية',
      feature2: 'رقمنة العمليات والإجراءات',
      feature3: 'تمكين التقنيات الحديثة وحلول الذكاء الاصطناعي',
      feature4: 'خارطة طريق التحول الرقمي',
      cta: 'ناقش التحول الرقمي',
    },
    training: {
      title: 'التدريب والتمكين',
      description: 'نصمّم وننفّذ برامج تدريبية وتنفيذية وبناء قدرات، متوائمة مع الأهداف المؤسسية.',
      feature1: 'التدريب التنفيذي وتطوير القيادات',
      feature2: 'بناء القدرات المؤسسية',
      feature3: 'ورش العمل الاستشارية والتدريبية',
      feature4: 'برامج تدريب مخصصة حسب الاحتياج',
      cta: 'استعرض البرامج التدريبية',
    },
    
    customServiceTitle: 'هل تحتاج خدمة مخصصة؟',
    customServiceDesc: 'نحن هنا لمساعدتك. تواصل معنا لمناقشة احتياجاتك وتصميم برنامج يناسبك',
    contactUs: 'تواصل معنا',
  },
  
  // Service Detail Page
  serviceDetail: {
    home: 'الرئيسية',
    services: 'الخدمات',
    notFound: 'الخدمة غير موجودة',
    backToServices: 'العودة للخدمات',
    whatWeOffer: 'ماذا نقدم؟',
    interestedTitle: 'هل أنت مهتم بهذه الخدمة؟',
    interestedDesc: 'تواصل معنا الآن للحصول على استشارة مجانية ومناقشة احتياجاتك',
    serviceAreas: 'مجالات الخدمة',
    advancedTech: 'التقنيات المتقدمة',
  },
  
  // Sectors Section
  sectors: {
    badge: 'القطاعات التي نخدمها',
    title: 'نخدم مختلف',
    titleHighlight: 'القطاعات الحيوية',
    subtitle: 'تقدّم ATC للاستشارات خدماتها الاستشارية والتدريبية لمجموعة واسعة من القطاعات الحيوية',
    sector1: 'الجهات الحكومية والهيئات العامة',
    sector2: 'قطاع الطاقة والبترول',
    sector3: 'القطاع المصرفي والمؤسسات المالية',
    sector4: 'الشركات الخاصة والمؤسسات الوطنية',
    sector5: 'القطاع الصناعي والمصانع',
  },
  
  // FAQ Section
  faq: {
    badge: 'الأسئلة الشائعة',
    title: 'أسئلة',
    titleHighlight: 'متكررة',
    q1: 'ما الخدمات التي تقدمها ATC؟',
    a1: 'تقدّم ATC خدمات الاستشارات المؤسسية، والتحول الرقمي، والتدريب التنفيذي وبناء القدرات للجهات الحكومية والمؤسسات.',
    q2: 'هل تعمل ATC مع الجهات الحكومية؟',
    a2: 'نعم، تعمل ATC مع الجهات الحكومية وشبه الحكومية والمؤسسات العامة.',
    q3: 'هل تقدم ATC حلولًا مخصصة؟',
    a3: 'نعم، يتم تصميم جميع الخدمات وفقًا لاحتياجات وأهداف كل جهة.',
  },
  
  // CTA Section
  cta: {
    title: 'هل ترغبون في مناقشة',
    titleHighlight: 'احتياجاتكم المؤسسية؟',
    description: 'يسعد فريق ATC الاستشاري بالتواصل معكم ودراسة أفضل الحلول التي تدعم تحقيق أهدافكم',
    button: 'حجز استشارة',
  },
  
  // Book Consultation Page
  bookConsultation: {
    title: 'حجز استشارة',
    description: 'احجز استشارة مع ATC للاستشارات لمناقشة احتياجات مؤسستكم واستكشاف حلول استشارية، وتحول رقمي، وبرامج تدريبية مصممة خصيصًا لدعم الأداء المؤسسي وتحقيق نتائج مستدامة.',
    teamDescription: 'يعمل فريقنا الاستشاري عن قرب مع القيادات وصنّاع القرار لفهم التحديات، وتحديد الأولويات، وتقديم توصيات عملية قائمة على أفضل الممارسات.',
    whatIncluded: 'ماذا تتضمن الاستشارة؟',
    duringSession: 'خلال جلسة الاستشارة، سيتم:',
    feature1: 'مناقشة واقع المؤسسة وأهدافها الاستراتيجية',
    feature2: 'تحليل التحديات والفرص الرئيسية',
    feature3: 'تقديم رؤى أولية وتوجهات استراتيجية مقترحة',
    feature4: 'تحديد الخطوات التالية المناسبة لخدمات الاستشارات أو التحول الرقمي أو التدريب',
    formTitle: 'نموذج طلب الاستشارة',
    formDescription: 'يرجى تعبئة النموذج أدناه، وسيقوم فريقنا الاستشاري بالتواصل معكم في أقرب وقت.',
    fullName: 'الاسم الكامل',
    fullNamePlaceholder: 'أدخل اسمك الكامل',
    organization: 'اسم الجهة / المؤسسة',
    organizationPlaceholder: 'أدخل اسم المؤسسة',
    sector: 'القطاع',
    sectorPlaceholder: 'اختر القطاع',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'example@domain.com',
    phone: 'رقم الهاتف',
    phonePlaceholder: '+966 5X XXX XXXX',
    needDescription: 'وصف مختصر للاحتياج أو التحدي',
    needDescriptionPlaceholder: 'اكتب وصفاً مختصراً للاحتياج أو التحدي الذي تواجهه مؤسستكم...',
    submit: 'إرسال طلب الاستشارة',
    successTitle: 'تم إرسال طلبكم بنجاح!',
    successDescription: 'شكراً لتواصلكم معنا. سيقوم فريقنا الاستشاري بالتواصل معكم في أقرب وقت.',
    backHome: 'العودة للرئيسية',
    sectors: {
      government: 'القطاع الحكومي',
      private: 'القطاع الخاص',
      nonprofit: 'القطاع غير الربحي',
      healthcare: 'القطاع الصحي',
      education: 'القطاع التعليمي',
      financial: 'القطاع المالي',
      technology: 'قطاع التقنية',
      other: 'قطاع آخر',
    },
  },
  
  // Contact Page
  contact: {
    badge: '📞 تواصل معنا',
    title: 'نحن هنا',
    titleHighlight: 'لمساعدتك',
    description: 'شكراً لاهتمامك بخدماتنا. نهدف إلى تقديم تجربة سلسة وداعمة، سواء كنت تبحث عن استشارات، تدريب، أو شراكات استراتيجية',
    formTitle: 'أرسل لنا رسالة',
    name: 'الاسم الكامل *',
    namePlaceholder: 'أدخل اسمك',
    email: 'البريد الإلكتروني *',
    emailPlaceholder: 'example@email.com',
    phone: 'رقم الهاتف',
    phonePlaceholder: '+971 XX XXX XXXX',
    subject: 'الموضوع *',
    subjectPlaceholder: 'موضوع الرسالة',
    message: 'الرسالة *',
    messagePlaceholder: 'اكتب رسالتك هنا...',
    submit: 'إرسال الرسالة',
    sending: 'جاري الإرسال...',
    successMessage: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
    address: 'العنوان',
    addressValue: 'دبي - الممزر - بناء AB Plaza8 - مكتب رقم 202',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني',
    workingHours: 'ساعات العمل',
    workingHoursValue: 'الأحد - الخميس: 9:00 ص - 6:00 م',
    whatsappTitle: 'تواصل معنا عبر واتساب',
    whatsappDesc: 'للرد السريع على استفساراتك',
  },
  
  // Footer
  footer: {
    stayUpdated: 'ابق على اطلاع',
    stayConnected: 'ابق على تواصل معنا',
    newsletterDesc: 'اشترك في النشرة الإخبارية للحصول على آخر التحديثات والعروض المميزة',
    emailPlaceholder: 'البريد الإلكتروني',
    subscribe: 'اشترك',
    companyName: 'ATC للاستشارات',
    companySlogan: 'للاستشارات والتدريب',
    companyDescription: 'شركة متخصصة في تقديم الاستشارات المؤسسية، ودعم التحول الرقمي، وبرامج التدريب التنفيذي للجهات الحكومية والمؤسسات، بما يعزز كفاءة الأداء ويدعم اتخاذ القرار المؤسسي.',
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    ourServices: 'خدماتنا',
    service1: 'الاستشارات المؤسسية',
    service2: 'التحول الرقمي',
    service3: 'التدريب التنفيذي',
    service4: 'بناء القدرات',
    contactUs: 'تواصل معنا',
    copyright: '© {{year}} ATC للاستشارات. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
  },
  
  // Language
  language: {
    ar: 'العربية',
    en: 'English',
  },
};

// English translations
const enTranslations = {
  // Navbar
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
    startNow: 'Get Started',
    companyName: 'ATC Excellence',
    companySlogan: 'Consulting & Training',
  },
  
  // Hero Section
  hero: {
    badge: 'Over 25 Years of Excellence',
    title1: 'Empowering Organizations to Make',
    titleHighlight: 'Smarter Decisions',
    title2: 'and Achieve Sustainable Results',
    description: 'We provide comprehensive consulting solutions in institutional consulting, digital transformation, and executive training, supporting government entities and organizations in improving performance, enhancing governance, and linking strategies to practical execution.',
    bookConsultation: 'Book Consultation',
    exploreServices: 'Explore Our Services',
    yearsExperience: 'Years of Experience',
  },
  
  // About Section
  about: {
    badge: 'About Us',
    title: 'ATC Consulting',
    subtitle: 'Your Partner in Institutional Success',
    description: 'ATC Consulting is a specialized consulting and institutional development company providing institutional consulting, digital transformation, and executive training services for government entities and organizations.',
    feature1: 'Institutional & Strategic Consulting',
    feature2: 'Digital Transformation & Tech Consulting',
    feature3: 'Executive Training & Capacity Building',
    feature4: 'Government & Institutional Support',
    stat1: 'Trainees',
    stat2: 'Training Courses',
    stat3: 'Positive Rating',
    stat4: 'Years of Experience',
    yearsExcellence: 'Years of Excellence',
  },
  
  // About Page
  aboutPage: {
    badge: 'Get to Know Us',
    title1: 'Creating',
    titleHighlight: 'Excellence',
    title2: 'Together',
    companyName: 'ATC Excellence for Consulting and Training',
    description: 'For over 25 years, we have been building competencies and developing organizations. We combine deep expertise with digital innovation to deliver training and consulting solutions that make a real difference in your success journey.',
    pill1: 'Professional Training',
    pill2: 'Specialized Consulting',
    pill3: 'Metaverse Technologies',
    pill4: 'Digital Innovation',
    stat1Label: 'Trainees',
    stat2Label: 'Completed Training Courses',
    stat3Label: 'Certified Trainers',
    stat4Label: 'Positive Rating',
    visionTitle: 'Our Vision',
    visionText: 'To be the leading strategic partner for organizations in the Arabian Gulf region in training and institutional development, contributing to building talents capable of leading digital transformation and innovation.',
    missionTitle: 'Our Mission',
    missionText: 'Providing distinguished training and consulting services characterized by quality and innovation, helping organizations and individuals achieve their goals and develop their capabilities in line with global best practices.',
    partnersBadge: '🤝 Our Partners',
    partnersTitle: 'Partners in',
    partnersTitleHighlight: 'Success',
    partnersDescription: 'We are proud to partner with leading government and private institutions in the United Arab Emirates',
  },
  
  // Services Section
  services: {
    badge: 'Our Services',
    title: 'Integrated Solutions in',
    titleHighlight: 'Consulting',
    subtitle: 'Digital Transformation, and Institutional Capacity Building',
    exploreAll: 'Discover All Services',
    
    consulting: {
      title: 'Institutional & Strategic Consulting',
      description: 'We provide consulting services that support the development of institutional strategies, improve governance models, increase performance efficiency, and support decision-making.',
      feature1: 'Strategic & Institutional Consulting',
      feature2: 'Governance & Performance Improvement',
      feature3: 'Specialized Consulting for Government Entities',
      button: 'Explore Consulting Services',
    },
    digital: {
      title: 'Digital Transformation & Tech Consulting',
      description: 'We support entities in planning and implementing digital transformation initiatives, developing digital strategies, and improving operations using modern technologies.',
      feature1: 'Digital Transformation Strategies',
      feature2: 'Process Digitization',
      feature3: 'Technical Consulting',
      button: 'Explore Digital Solutions',
    },
    training: {
      title: 'Executive Training & Capacity Building',
      description: 'We design and implement executive training programs aimed at enhancing leadership readiness and building institutional capabilities to support sustainable performance.',
      feature1: 'Leadership & Executive Training',
      feature2: 'Professional Training Programs',
      feature3: 'Coaching & Workshops',
      button: 'Explore Training Programs',
    },
  },
  
  // Services Page
  servicesPage: {
    badge: '✨ Our Distinguished Services',
    title: 'Our Services',
    description: 'ATC Consulting offers an integrated system of consulting, digital transformation, and executive training services designed to support institutional performance and achieve sustainable long-term results.',
    successfulProjects: 'Successful Projects',
    
    consulting: {
      title: 'Consulting Services',
      description: 'ATC consulting services support organizations in developing strategies, enhancing governance, and improving institutional performance.',
      feature1: 'Institutional & Strategic Consulting',
      feature2: 'Governance & Performance Management Frameworks',
      feature3: 'Organizational Consulting & Policy Formulation',
      feature4: 'Sector-Specific Consulting',
      cta: 'Request Consultation',
    },
    digital: {
      title: 'Digital Transformation',
      description: 'ATC supports digital transformation initiatives that contribute to improving decision-making quality and operational efficiency.',
      feature1: 'Digital Strategy & Tech Consulting',
      feature2: 'Process & Procedure Digitization',
      feature3: 'Modern Technologies & AI Solutions',
      feature4: 'Digital Transformation Roadmap',
      cta: 'Discuss Digital Transformation',
    },
    training: {
      title: 'Training & Empowerment',
      description: 'We design and implement training and executive programs and capacity building, aligned with institutional goals.',
      feature1: 'Executive Training & Leadership Development',
      feature2: 'Institutional Capacity Building',
      feature3: 'Consulting & Training Workshops',
      feature4: 'Customized Training Programs',
      cta: 'View Training Programs',
    },
    
    customServiceTitle: 'Need a Custom Service?',
    customServiceDesc: 'We are here to help. Contact us to discuss your needs and design a program that suits you',
    contactUs: 'Contact Us',
  },
  
  // Service Detail Page
  serviceDetail: {
    home: 'Home',
    services: 'Services',
    notFound: 'Service Not Found',
    backToServices: 'Back to Services',
    whatWeOffer: 'What We Offer?',
    interestedTitle: 'Interested in This Service?',
    interestedDesc: 'Contact us now for a free consultation and discuss your needs',
    serviceAreas: 'Service Areas',
    advancedTech: 'Advanced Technologies',
  },
  
  // Sectors Section
  sectors: {
    badge: 'Sectors We Serve',
    title: 'Serving Various',
    titleHighlight: 'Vital Sectors',
    subtitle: 'ATC Consulting provides its consulting and training services to a wide range of vital sectors',
    sector1: 'Government Entities & Public Authorities',
    sector2: 'Energy & Petroleum Sector',
    sector3: 'Banking & Financial Institutions',
    sector4: 'Private Companies & National Institutions',
    sector5: 'Industrial Sector & Manufacturing',
  },
  
  // FAQ Section
  faq: {
    badge: 'Frequently Asked Questions',
    title: 'Frequently',
    titleHighlight: 'Asked Questions',
    q1: 'What services does ATC offer?',
    a1: 'ATC provides institutional consulting, digital transformation, and executive training and capacity building services for government entities and organizations.',
    q2: 'Does ATC work with government entities?',
    a2: 'Yes, ATC works with government, semi-government, and public institutions.',
    q3: 'Does ATC provide customized solutions?',
    a3: 'Yes, all services are designed according to each entity\'s needs and goals.',
  },
  
  // CTA Section
  cta: {
    title: 'Would You Like to Discuss',
    titleHighlight: 'Your Institutional Needs?',
    description: 'The ATC consulting team is happy to connect with you and study the best solutions that support achieving your goals',
    button: 'Book Consultation',
  },
  
  // Book Consultation Page
  bookConsultation: {
    title: 'Book a Consultation',
    description: 'Book a consultation with ATC Consulting to discuss your organization\'s needs and explore consulting solutions, digital transformation, and training programs designed specifically to support institutional performance and achieve sustainable results.',
    teamDescription: 'Our consulting team works closely with leaders and decision-makers to understand challenges, identify priorities, and provide practical recommendations based on best practices.',
    whatIncluded: 'What Does the Consultation Include?',
    duringSession: 'During the consultation session:',
    feature1: 'Discuss the organization\'s status and strategic goals',
    feature2: 'Analyze key challenges and opportunities',
    feature3: 'Provide initial insights and proposed strategic directions',
    feature4: 'Determine appropriate next steps for consulting, digital transformation, or training services',
    formTitle: 'Consultation Request Form',
    formDescription: 'Please fill out the form below, and our consulting team will contact you soon.',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    organization: 'Organization Name',
    organizationPlaceholder: 'Enter organization name',
    sector: 'Sector',
    sectorPlaceholder: 'Select sector',
    email: 'Email',
    emailPlaceholder: 'example@domain.com',
    phone: 'Phone Number',
    phonePlaceholder: '+966 5X XXX XXXX',
    needDescription: 'Brief Description of Need or Challenge',
    needDescriptionPlaceholder: 'Write a brief description of the need or challenge facing your organization...',
    submit: 'Submit Consultation Request',
    successTitle: 'Your Request Has Been Sent Successfully!',
    successDescription: 'Thank you for contacting us. Our consulting team will contact you soon.',
    backHome: 'Back to Home',
    sectors: {
      government: 'Government Sector',
      private: 'Private Sector',
      nonprofit: 'Non-Profit Sector',
      healthcare: 'Healthcare Sector',
      education: 'Education Sector',
      financial: 'Financial Sector',
      technology: 'Technology Sector',
      other: 'Other Sector',
    },
  },
  
  // Contact Page
  contact: {
    badge: '📞 Contact Us',
    title: 'We Are Here',
    titleHighlight: 'to Help You',
    description: 'Thank you for your interest in our services. We aim to provide a smooth and supportive experience, whether you\'re looking for consulting, training, or strategic partnerships',
    formTitle: 'Send Us a Message',
    name: 'Full Name *',
    namePlaceholder: 'Enter your name',
    email: 'Email *',
    emailPlaceholder: 'example@email.com',
    phone: 'Phone Number',
    phonePlaceholder: '+971 XX XXX XXXX',
    subject: 'Subject *',
    subjectPlaceholder: 'Message subject',
    message: 'Message *',
    messagePlaceholder: 'Write your message here...',
    submit: 'Send Message',
    sending: 'Sending...',
    successMessage: 'Your message has been sent successfully! We will contact you soon.',
    address: 'Address',
    addressValue: 'Dubai - Al Mamzar - AB Plaza8 Building - Office 202',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    workingHours: 'Working Hours',
    workingHoursValue: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
    whatsappTitle: 'Contact Us via WhatsApp',
    whatsappDesc: 'For quick responses to your inquiries',
  },
  
  // Footer
  footer: {
    stayUpdated: 'Stay Updated',
    stayConnected: 'Stay Connected with Us',
    newsletterDesc: 'Subscribe to our newsletter for the latest updates and special offers',
    emailPlaceholder: 'Email',
    subscribe: 'Subscribe',
    companyName: 'ATC Consulting',
    companySlogan: 'Consulting & Training',
    companyDescription: 'A specialized company providing institutional consulting, digital transformation support, and executive training programs for government entities and organizations, enhancing performance efficiency and supporting institutional decision-making.',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    ourServices: 'Our Services',
    service1: 'Institutional Consulting',
    service2: 'Digital Transformation',
    service3: 'Executive Training',
    service4: 'Capacity Building',
    contactUs: 'Contact Us',
    copyright: '© {{year}} ATC Consulting. All Rights Reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  
  // Language
  language: {
    ar: 'العربية',
    en: 'English',
  },
};
const setDocumentDirection = (lang: 'ar' | 'en') => { if (typeof document !== 'undefined') { document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = lang; document.documentElement.style.direction = lang === 'ar' ? 'rtl' : 'ltr'; } };
// Get saved language from localStorage or default to Arabic
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'ar';
const initialLang = savedLanguage === 'en' ? 'en' : 'ar';

// Set initial document direction
setDocumentDirection(initialLang as 'ar' | 'en');
i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: arTranslations },
      en: { translation: enTranslations },
    },
    lng: savedLanguage || 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

// Function to change language and update document direction
export const changeLanguage = (lang: 'ar' | 'en') => {
  i18n.changeLanguage(lang);
  localStorage.setItem('language', lang);
  
  // Update document direction
  setDocumentDirection(lang);
  if (typeof document !== 'undefined') {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
};

// Initialize direction on load
if (typeof document !== 'undefined') {
  const currentLang = i18n.language || 'ar';
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
}

export default i18n;