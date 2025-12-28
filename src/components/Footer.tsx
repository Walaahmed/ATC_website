import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/atcae", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/atcae", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/atcae", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/atcae", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "خدماتنا", href: "/services" },
    { label: "المدونة", href: "/blog" },
    { label: "اتصل بنا", href: "/contact" },
  ];

  const services = [
    "التدريب المؤسسي",
    "الاستشارات الإدارية",
    "تقنيات الميتافيرس",
    "الذكاء الاصطناعي",
    "البلوكشين",
  ];

  return (
    <footer className="relative bg-gradient-navy border-t border-border/50">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-bold text-xl">ATC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">آفاق التميز</h3>
                <p className="text-xs text-muted-foreground">للاستشارات والتدريب</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              نحن متخصصون في تقديم خدمات التدريب والاستشارات بخبرة تزيد عن 25 عامًا، 
              ملتزمون بتقديم التميز على مستوى العالم.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 relative">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-gold rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 relative">
              خدماتنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-gold rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 relative">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-gradient-gold rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  دبي - الممزر - بناء AB Plaza8 - مكتب رقم 202
                </span>
              </li>
              <li>
                <a
                  href="tel:+971566613952"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span dir="ltr">+971 56 661 3952</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@atc-ae.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  info@atc-ae.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} آفاق التميز للاستشارات والتدريب. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
