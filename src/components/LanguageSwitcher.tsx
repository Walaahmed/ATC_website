// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Globe, Check } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
// import { changeLanguage } from '@/lib/i18n';

// const LanguageSwitcher = () => {
//   const { i18n, t } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const currentLanguage = i18n.language;

//   const languages = [
//     { code: 'ar', name: t('language.ar'), flag: '🇸🇦' },
//     { code: 'en', name: t('language.en'), flag: '🇬🇧' },
//   ];

//   const handleLanguageChange = (langCode: 'ar' | 'en') => {
//     changeLanguage(langCode);
//     setIsOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div ref={dropdownRef} className="relative">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
//         aria-label="Change language"
//       >
//         <Globe className="w-5 h-5" />
//         <span className="text-sm font-medium hidden sm:inline">
//           {currentLanguage === 'ar' ? 'العربية' : 'EN'}
//         </span>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="absolute top-full mt-2 bg-white border border-border rounded-xl shadow-medium overflow-hidden z-50 min-w-[150px]"
//             style={{ 
//               left: currentLanguage === 'ar' ? 'auto' : 0,
//               right: currentLanguage === 'ar' ? 0 : 'auto',
//             }}
//           >
//             {languages.map((lang) => (
//               <motion.button
//                 key={lang.code}
//                 whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
//                 onClick={() => handleLanguageChange(lang.code as 'ar' | 'en')}
//                 className={`flex items-center justify-between gap-3 w-full px-4 py-3 text-sm font-medium transition-colors ${
//                   currentLanguage === lang.code
//                     ? 'text-primary bg-primary/5'
//                     : 'text-foreground hover:text-primary'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg">{lang.flag}</span>
//                   <span>{lang.name}</span>
//                 </div>
//                 {currentLanguage === lang.code && (
//                   <Check className="w-4 h-4 text-primary" />
//                 )}
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LanguageSwitcher;
// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Globe, Check } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
// import { changeLanguage } from '@/lib/i18n';

// const LanguageSwitcher = () => {
//   const { i18n, t } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const currentLanguage = i18n.language;

//   const languages = [
//     { code: 'ar', name: t('language.ar'), flag: '🇸🇦' },
//     { code: 'en', name: t('language.en'), flag: '🇬🇧' },
//   ];

//   const handleLanguageChange = (langCode: 'ar' | 'en') => {
//     changeLanguage(langCode);
//     setIsOpen(false);
    
//     // إعادة تحميل الصفحة للتأكد من تطبيق الاتجاه الجديد
//     setTimeout(() => {
//       window.location.reload();
//     }, 100);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mouseddown', handleClickOutside);
//   }, []);

//   return (
//     <div ref={dropdownRef} className="relative">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
//         aria-label="Change language"
//       >
//         <Globe className="w-5 h-5" />
//         <span className="text-sm font-medium hidden sm:inline">
//           {currentLanguage === 'ar' ? 'العربية' : 'EN'}
//         </span>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="absolute top-full mt-2 bg-white border border-border rounded-xl shadow-medium overflow-hidden z-50 min-w-[150px]"
//             style={{ 
//               left: currentLanguage === 'ar' ? 'auto' : 0,
//               right: currentLanguage === 'ar' ? 0 : 'auto',
//             }}
//           >
//             {languages.map((lang) => (
//               <motion.button
//                 key={lang.code}
//                 whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
//                 onClick={() => handleLanguageChange(lang.code as 'ar' | 'en')}
//                 className={`flex items-center justify-between gap-3 w-full px-4 py-3 text-sm font-medium transition-colors ${
//                   currentLanguage === lang.code
//                     ? 'text-primary bg-primary/5'
//                     : 'text-foreground hover:text-primary'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg">{lang.flag}</span>
//                   <span>{lang.name}</span>
//                 </div>
//                 {currentLanguage === lang.code && (
//                   <Check className="w-4 h-4 text-primary" />
//                 )}
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LanguageSwitcher;
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = i18n.language;

  // هات اللغة المقابلة للغة الحالية
  const getOppositeLanguage = () => {
    return currentLanguage === 'ar' ? 'en' : 'ar';
  };

  const getLanguageInfo = (langCode: 'ar' | 'en') => {
    return {
      code: langCode,
      displayText: langCode === 'ar' ? 'ع' : 'EN',
      name: langCode === 'ar' ? 'العربية' : 'English',
      flag: langCode === 'ar' ? '🇸🇦' : '🇬🇧'
    };
  };

  const handleToggleLanguage = () => {
    const nextLang = getOppositeLanguage();
    changeLanguage(nextLang);
    
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangInfo = getLanguageInfo(currentLanguage as 'ar' | 'en');
  const nextLangInfo = getLanguageInfo(getOppositeLanguage() as 'ar' | 'en');

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggleLanguage}
        className="
          flex items-center gap-2 px-3 py-2 rounded-xl
          bg-gradient-to-br from-blue-50 to-blue-100
          border border-blue-200
          hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200
          hover:border-blue-300
          hover:shadow-medium
          transition-all duration-300
          group
        "
        aria-label={`Switch to ${nextLangInfo.name} language`}
        title={`Switch to ${nextLangInfo.name}`}
      >
        {/* Globe icon */}
        <motion.div
          animate={{ rotate: currentLanguage === 'ar' ? 0 : 360 }}
          transition={{ duration: 0.5 }}
        >
          <Globe className="w-5 h-5 text-blue-600" />
        </motion.div>
        
        {/* Text display */}
        <motion.span
          key={currentLanguage}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          className="text-sm font-bold text-blue-700 hidden sm:inline"
        >
          {currentLanguage === 'ar' ? 'EN' : 'ع'}
        </motion.span>
      </motion.button>

      {/* Tooltip على hover */}
      <div className="
        absolute top-full left-1/2 -translate-x-1/2 mt-2
        px-3 py-1.5
        bg-gray-900 text-white text-xs
        rounded-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-300
        whitespace-nowrap
        pointer-events-none
        z-50
      ">
        {`Switch to ${nextLangInfo.name}`}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full mt-2 
              bg-white border border-border 
              rounded-xl shadow-medium 
              overflow-hidden z-50 min-w-[150px]
              sm:hidden
            "
            style={{ 
              left: currentLanguage === 'ar' ? 'auto' : 0,
              right: currentLanguage === 'ar' ? 0 : 'auto',
            }}
          >
            {[
              { code: 'ar', name: 'العربية', flag: '🇸🇦' },
              { code: 'en', name: 'English', flag: '🇬🇧' }
            ].map((lang) => (
              <motion.button
                key={lang.code}
                whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
                onClick={() => {
                  changeLanguage(lang.code as 'ar' | 'en');
                  setTimeout(() => window.location.reload(), 50);
                }}
                className={`
                  flex items-center justify-between gap-3 
                  w-full px-4 py-3 text-sm font-medium 
                  transition-colors
                  ${currentLanguage === lang.code
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:text-primary'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {currentLanguage === lang.code && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;