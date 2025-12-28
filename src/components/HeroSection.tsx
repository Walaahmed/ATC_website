import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 bg-glow-gold opacity-30" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(45 70% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(45 70% 55% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">خبرة تزيد عن 25 عامًا</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">تمكين الأعمال</span>
            <br />
            <span className="text-gradient-gold">بالابتكار والتميز</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            نحن متخصصون في تقديم خدمات التدريب والاستشارات. نقدم حلولًا شاملة تساهم في تحسين الأداء 
            وتعزيز الكفاءة المؤسسية في كافة المجالات.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="group">
                ابدأ الآن
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="glass" size="lg">
                تعرف علينا
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Users, value: "300+", label: "مدرب معتمد" },
              { icon: Award, value: "3,200+", label: "متدرب ومتدربة" },
              { icon: TrendingUp, value: "420+", label: "دورة تدريبية" },
              { icon: Sparkles, value: "96%", label: "تقييم إيجابي" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="relative group p-4 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
