import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 bg-glow-gold opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            النشرة الإخبارية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ابق على <span className="text-gradient-gold">تواصل</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            احصل على آخر التحديثات حول ATC، والوصول إلى عروضنا الأكثر تميزًا ومقالات القيادة الفكرية.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-secondary border-border/50 focus:border-primary/50 rounded-xl"
              />
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-secondary border-border/50 focus:border-primary/50 rounded-xl"
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                "جاري الاشتراك..."
              ) : (
                <>
                  اشترك الآن
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
