import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], ['30px', '0px', '-30px']);
  const bgBlobY1 = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const bgBlobY2 = useTransform(scrollYProgress, [0, 1], ['50%', '-50%']);
  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const sparkleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
 <section
  ref={sectionRef}
  className="section-padding bg-gradient-to-br from-white via-blue-50/40 to-white relative overflow-hidden"
>
  {/* Parallax Background Decorations */}
  <motion.div
    className="absolute top-0 left-1/4 w-64 h-64 bg-[#d6ad55]/10 rounded-full blur-3xl"
    style={{ y: bgBlobY1 }}
  />
  <motion.div
    className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
    style={{ y: bgBlobY2 }}
  />

  <div className="container-custom relative z-10">
    <motion.div
      style={{ scale: cardScale, y: cardY }}
      className="relative bg-white rounded-3xl p-10 md:p-16 overflow-hidden shadow-strong text-center"
    >
      {/* Soft Background Elements */}
      <motion.div
        className={`absolute -top-24 ${isRTL ? '-right-24' : '-left-24'} w-64 h-64 bg-[#d6ad55]/15 rounded-full blur-3xl`}
        style={{ y: bgBlobY1 }}
      />
      <motion.div
        className={`absolute -bottom-24 ${isRTL ? '-left-24' : '-right-24'} w-64 h-64 bg-blue-500/10 rounded-full blur-3xl`}
        style={{ y: bgBlobY2 }}
      />

      {/* Floating Sparkles */}
      <motion.div
        className={`absolute top-10 ${isRTL ? 'right-10' : 'left-10'} text-[#d6ad55]/40`}
        style={{ rotate: sparkleRotate }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        className={`absolute bottom-10 ${isRTL ? 'left-10' : 'right-10'} text-[#d6ad55]/25`}
        style={{ rotate: sparkleRotate }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          {t('cta.title')}{' '}
          <span className="text-[#d6ad55]">
            {t('cta.titleHighlight')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-10"
        >
          {t('cta.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
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
              {t('cta.button')}
              <ArrowIcon
                className={`w-5 h-5 transition-transform duration-300 ${
                  isRTL
                    ? 'group-hover:-translate-x-1'
                    : 'group-hover:translate-x-1'
                }`}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

  );
};

export default CTASection;