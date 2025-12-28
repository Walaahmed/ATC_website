import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "300+", label: "مدرب معتمد" },
    { icon: Award, value: "3,200+", label: "متدرب ومتدربة" },
    { icon: TrendingUp, value: "420+", label: "دورة تدريبية منجزة" },
    { icon: Sparkles, value: "96%", label: "تقييم إيجابي" },
  ];

  const values = [
    "التميز في تقديم الخدمات",
    "الابتكار والتطوير المستمر",
    "الشراكة الحقيقية مع العملاء",
    "الالتزام بأعلى معايير الجودة",
    "المرونة في التعامل",
    "الاحترافية في التنفيذ",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy" />
        <div className="absolute inset-0 bg-glow-gold opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              من نحن
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              خبرة تتجاوز <span className="text-gradient-gold">25 عامًا</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              نحن متخصصون في تقديم خدمات التدريب والاستشارات، نقدم حلولًا شاملة تساهم في تحسين الأداء وتعزيز الكفاءة المؤسسية.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 text-center hover-lift"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                رسالتنا
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                تمكين المؤسسات من <span className="text-gradient-gold">تحقيق التميز</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                نسعى لتقديم خدمات استشارية وتدريبية عالية الجودة تساهم في تطوير المؤسسات والأفراد، 
                من خلال توظيف أحدث التقنيات والمنهجيات العالمية، بالإضافة إلى شراكات قوية في مجالات 
                تقنيات الميتافيرس والابتكارات الرقمية.
              </p>
              
              <div className="space-y-3 mb-8">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button variant="gold" size="lg">
                  تواصل معنا
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-card border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="فريق العمل"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
