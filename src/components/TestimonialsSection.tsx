import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "كان هذا التدريب محوريًا لفريقنا. أصبح لدينا الآن فهم أعمق للبلوكشين وكيفية دمجه في عملياتنا.",
    name: "هيثم العتيبي",
    position: "بلدية دبي",
  },
  {
    quote: "ساعدتنا استشارات الذكاء الاصطناعي على تبسيط عملياتنا وزيادة كفاءتنا بنسبة 30%. نوصي بها بشدة.",
    name: "جون كوجو",
    position: "المدير التقني، شركة ألفا أرون",
  },
  {
    quote: "خدمة التدريب في الميتافيرس كانت مذهلة! ساعدنا مركزكم في فهم كيفية استخدام هذه التقنية لتحسين عملياتنا التعليمية.",
    name: "عبد الله المزروعي",
    position: "مدير التدريب، جمارك دبي",
  },
  {
    quote: "من خلال العمل بالشراكة معكم، تمكنا من إنشاء تجارب رائعة لدعم رحلة متعلمنا نحو النجاح.",
    name: "إيفون كيلي",
    position: "كلية باركينج وداجنهام",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-glow-gold"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            آراء عملائنا
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span>؟
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-card border border-border/50 overflow-hidden">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-gold"
            >
              <Quote className="w-6 h-6 text-primary-foreground" />
            </motion.div>

            {/* Content */}
            <div className="text-center min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-gradient-gold mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </motion.button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      width: index === currentIndex ? 32 : 10,
                      backgroundColor: index === currentIndex ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-2.5 rounded-full"
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
