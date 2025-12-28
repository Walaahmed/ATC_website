import { GraduationCap, Brain, Cpu, Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            حلول <span className="text-gradient-gold">متكاملة</span> لنجاحك
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم مجموعة شاملة من الخدمات التي ستساعدك على اكتساب ميزة تنافسية في هذا المشهد المتغير.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
