import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Brain, Cpu, Shield, Users, Lightbulb, ArrowLeft } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "التدريب المؤسسي",
    description: "برامج تدريبية متخصصة لتطوير مهارات فريق العمل وتعزيز الإنتاجية المؤسسية. نقدم دورات مصممة خصيصًا لتلبية احتياجات مؤسستك.",
    features: ["تصميم برامج مخصصة", "مدربون معتمدون دوليًا", "شهادات معترف بها", "متابعة ما بعد التدريب"],
  },
  {
    icon: Brain,
    title: "الاستشارات الإدارية",
    description: "خدمات استشارية شاملة لتحسين الأداء وتطوير الاستراتيجيات المؤسسية. نساعدك على تحديد الفرص والتحديات.",
    features: ["تحليل الوضع الراهن", "تطوير الاستراتيجيات", "إدارة التغيير", "قياس الأداء"],
  },
  {
    icon: Cpu,
    title: "تقنيات الميتافيرس",
    description: "شراكات قوية في مجالات تقنيات الميتافيرس والابتكارات الرقمية المتقدمة. نساعدك على استكشاف الفرص الجديدة.",
    features: ["تجارب افتراضية غامرة", "تدريب في بيئات الميتافيرس", "تطوير تطبيقات VR/AR", "استشارات التحول الرقمي"],
  },
  {
    icon: Shield,
    title: "البلوكشين",
    description: "حلول متكاملة لدمج تقنية البلوكشين في العمليات التجارية. نساعدك على فهم وتطبيق هذه التقنية الثورية.",
    features: ["استشارات البلوكشين", "تطوير العقود الذكية", "حلول اللامركزية", "تدريب متخصص"],
  },
  {
    icon: Users,
    title: "تطوير القيادات",
    description: "برامج متخصصة لتأهيل القادة وتطوير المهارات القيادية. نبني قادة المستقبل بأحدث المنهجيات.",
    features: ["برامج القيادة التنفيذية", "كوتشينج فردي", "ورش عمل تفاعلية", "تقييم الكفاءات"],
  },
  {
    icon: Lightbulb,
    title: "الذكاء الاصطناعي",
    description: "استشارات متخصصة في تطبيقات الذكاء الاصطناعي وتحسين الكفاءة. نساعدك على توظيف AI في عملك.",
    features: ["تحليل البيانات", "أتمتة العمليات", "حلول التعلم الآلي", "تطبيقات عملية"],
  },
];

const Services = () => {
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
              خدماتنا
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              حلول <span className="text-gradient-gold">متكاملة</span> لنجاحك
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              نقدم مجموعة شاملة من الخدمات التي ستساعدك على اكتساب ميزة تنافسية في هذا المشهد المتغير.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="p-8 lg:p-12 rounded-3xl bg-gradient-card border border-border/50">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="outline" className="group">
                        اطلب هذه الخدمة
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-card border border-border/50">
                    <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-card border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              هل تحتاج إلى <span className="text-gradient-gold">خدمة مخصصة</span>؟
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              تواصل معنا لمناقشة احتياجاتك الخاصة وسنقوم بتصميم حل مناسب لك.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                تواصل معنا الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
