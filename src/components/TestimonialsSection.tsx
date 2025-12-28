import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-glow-gold opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span>؟
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-card border border-border/50">
            {/* Quote Icon */}
            <div className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-gold">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="text-center">
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
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
