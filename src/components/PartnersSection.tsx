import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partnersLogos = [
  { name: "بلدية دبي", initials: "BD" },
  { name: "جمارك دبي", initials: "JD" },
  { name: "شركة ألفا أرون", initials: "AA" },
  { name: "كلية باركينج", initials: "KB" },
  { name: "هيئة الطرق", initials: "HT" },
  { name: "وزارة التعليم", initials: "WT" },
  { name: "غرفة التجارة", initials: "GT" },
  { name: "هيئة الصحة", initials: "HS" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section ref={ref} className="py-16 relative overflow-hidden border-t border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-muted-foreground mb-10"
        >
          شركاؤنا بالنجاح
        </motion.h3>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
        >
          {partnersLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group flex items-center justify-center p-4 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-secondary cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
              >
                {partner.initials}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
