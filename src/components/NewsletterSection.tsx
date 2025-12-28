import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "تم الاشتراك بنجاح!",
      description: "شكراً لاشتراكك في نشرتنا الإخبارية",
    });
    
    setEmail("");
    setName("");
    setIsLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-card" />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-glow-gold"
      />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            النشرة الإخبارية
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            ابق على <span className="text-gradient-gold">تواصل</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-muted-foreground mb-8">
            احصل على آخر التحديثات حول ATC، والوصول إلى عروضنا الأكثر تميزًا ومقالات القيادة الفكرية.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="flex-1"
              >
                <Input
                  type="text"
                  placeholder="الاسم"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-secondary border-border/50 focus:border-primary/50 rounded-xl transition-all duration-300"
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="flex-1"
              >
                <Input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-secondary border-border/50 focus:border-primary/50 rounded-xl transition-all duration-300"
                />
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    جاري الاشتراك...
                  </motion.span>
                ) : (
                  <>
                    اشترك الآن
                    <motion.span
                      animate={{ x: [0, -3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.span>
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
