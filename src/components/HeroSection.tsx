import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 bg-glow-gold opacity-30" />
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 2 },
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(45 70% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(45 70% 55% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-foreground/80">خبرة تزيد عن 25 عامًا</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">تمكين الأعمال</span>
            <br />
            <motion.span
              className="text-gradient-gold inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              بالابتكار والتميز
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            نحن متخصصون في تقديم خدمات التدريب والاستشارات. نقدم حلولًا شاملة تساهم في تحسين الأداء 
            وتعزيز الكفاءة المؤسسية في كافة المجالات.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gold" size="lg" className="group">
                  ابدأ الآن
                  <motion.span
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="glass" size="lg">
                  تعرف علينا
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Users, value: "300+", label: "مدرب معتمد" },
              { icon: Award, value: "3,200+", label: "متدرب ومتدربة" },
              { icon: TrendingUp, value: "420+", label: "دورة تدريبية" },
              { icon: Sparkles, value: "96%", label: "تقييم إيجابي" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group p-4 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
