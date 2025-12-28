import { GraduationCap, Brain, Cpu, Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: GraduationCap,
    title: "التدريب المؤسسي",
    description: "برامج تدريبية متخصصة لتطوير مهارات فريق العمل وتعزيز الإنتاجية المؤسسية.",
  },
  {
    icon: Brain,
    title: "الاستشارات الإدارية",
    description: "خدمات استشارية شاملة لتحسين الأداء وتطوير الاستراتيجيات المؤسسية.",
  },
  {
    icon: Cpu,
    title: "تقنيات الميتافيرس",
    description: "شراكات قوية في مجالات تقنيات الميتافيرس والابتكارات الرقمية المتقدمة.",
  },
  {
    icon: Shield,
    title: "البلوكشين",
    description: "حلول متكاملة لدمج تقنية البلوكشين في العمليات التجارية.",
  },
  {
    icon: Users,
    title: "تطوير القيادات",
    description: "برامج متخصصة لتأهيل القادة وتطوير المهارات القيادية.",
  },
  {
    icon: Lightbulb,
    title: "الذكاء الاصطناعي",
    description: "استشارات متخصصة في تطبيقات الذكاء الاصطناعي وتحسين الكفاءة.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent origin-center"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={headerVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            خدماتنا
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            حلول <span className="text-gradient-gold">متكاملة</span> لنجاحك
          </motion.h2>
          <motion.p variants={headerVariants} className="text-muted-foreground text-lg">
            نقدم مجموعة شاملة من الخدمات التي ستساعدك على اكتساب ميزة تنافسية في هذا المشهد المتغير.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                to="/services"
                className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 block h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
