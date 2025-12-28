import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "بكرة أحلى",
    excerpt: "الحياة أحداث ومشاعر مر فى حياتنا اليومية عشرات من الأحداث المختلفة والتي يصاحبها مشاعر مختلفة. ونستطيع أن نلخص حياتنا فى أن...",
    content: "الحياة أحداث ومشاعر مر فى حياتنا اليومية عشرات من الأحداث المختلفة والتي يصاحبها مشاعر مختلفة. ونستطيع أن نلخص حياتنا فى أن الأحداث تتكرر ولكن المشاعر تختلف. وهذا يعني أن مشاعرنا ليست مرتبطة بالأحداث ولكنها مرتبطة بطريقة تفكيرنا وتفسيرنا لهذه الأحداث.",
    date: "1 فبراير 2021",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    slug: "tomorrow-is-better",
    category: "تطوير الذات",
  },
  {
    id: 2,
    title: "ما هو الكوتش المعلم؟",
    excerpt: "تؤثر ممارسات التدريس الجيدة على تحصيل الطلاب. كما تؤثر مهارات الكوتشينج التعليمي على جودة التدريس. نعلم ان المدربون التعليميون هم جزء مهمًا...",
    content: "تؤثر ممارسات التدريس الجيدة على تحصيل الطلاب. كما تؤثر مهارات الكوتشينج التعليمي على جودة التدريس. نعلم ان المدربون التعليميون هم جزء مهمًا من منظومة التعليم الحديثة.",
    date: "26 يناير 2021",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    slug: "what-is-teaching-coach",
    category: "التعليم",
  },
  {
    id: 3,
    title: "دليلك المعرفي نحو الرقمنة",
    excerpt: "خمسة تقنيات تحتاج إلى معرفتها للعمل في المجالات المختلفة إذا كنت تتابع الأخبار المتعلقة بالاتجاهات التقنية المثيرة مثل الذكاء الاصطناعي...",
    content: "خمسة تقنيات تحتاج إلى معرفتها للعمل في المجالات المختلفة إذا كنت تتابع الأخبار المتعلقة بالاتجاهات التقنية المثيرة مثل الذكاء الاصطناعي، فمن المحتمل أنك سمعت عن التحول الرقمي.",
    date: "20 يناير 2021",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    slug: "digital-transformation-guide",
    category: "التقنية",
  },
  {
    id: 4,
    title: "أهمية التدريب المستمر",
    excerpt: "التدريب المستمر هو مفتاح النجاح في عالم الأعمال المتغير. تعرف على أهمية الاستثمار في تطوير مهارات فريقك...",
    content: "التدريب المستمر هو مفتاح النجاح في عالم الأعمال المتغير. الاستثمار في تطوير مهارات فريقك يعود بفوائد كبيرة على المؤسسة.",
    date: "15 يناير 2021",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    slug: "continuous-training-importance",
    category: "التدريب",
  },
  {
    id: 5,
    title: "مستقبل العمل عن بعد",
    excerpt: "كيف غيرت جائحة كورونا طريقة عملنا وما هي التوقعات للمستقبل. اكتشف أحدث الاتجاهات في العمل عن بعد...",
    content: "جائحة كورونا غيرت طريقة عملنا بشكل جذري. العمل عن بعد أصبح الوضع الطبيعي الجديد للكثير من المؤسسات.",
    date: "10 يناير 2021",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=500&fit=crop",
    slug: "future-of-remote-work",
    category: "إدارة",
  },
  {
    id: 6,
    title: "القيادة في عصر الذكاء الاصطناعي",
    excerpt: "كيف يمكن للقادة التكيف مع التغييرات السريعة التي يجلبها الذكاء الاصطناعي إلى بيئة العمل...",
    content: "الذكاء الاصطناعي يغير طريقة إدارة الأعمال. القادة الناجحون هم من يستطيعون التكيف مع هذه التغييرات والاستفادة منها.",
    date: "5 يناير 2021",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    slug: "leadership-in-ai-era",
    category: "القيادة",
  },
];

const Blog = () => {
  const categories = ["الكل", "تطوير الذات", "التعليم", "التقنية", "التدريب", "إدارة", "القيادة"];

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
              المدونة
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              أحدث <span className="text-gradient-gold">المقالات</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              للحصول على أحدث الأفكار حول عالم الأعمال والإدارة والتكنولوجيا
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
