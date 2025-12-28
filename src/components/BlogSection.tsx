import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "بكرة أحلى",
    excerpt: "الحياة أحداث ومشاعر مر فى حياتنا اليومية عشرات من الأحداث المختلفة والتي يصاحبها مشاعر مختلفة...",
    date: "1 فبراير 2021",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    slug: "tomorrow-is-better",
  },
  {
    id: 2,
    title: "ما هو الكوتش المعلم؟",
    excerpt: "تؤثر ممارسات التدريس الجيدة على تحصيل الطلاب. كما تؤثر مهارات الكوتشينج التعليمي على جودة التدريس...",
    date: "26 يناير 2021",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    slug: "what-is-teaching-coach",
  },
  {
    id: 3,
    title: "دليلك المعرفي نحو الرقمنة",
    excerpt: "خمسة تقنيات تحتاج إلى معرفتها للعمل في المجالات المختلفة إذا كنت تتابع الأخبار المتعلقة بالاتجاهات التقنية...",
    date: "20 يناير 2021",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    slug: "digital-transformation-guide",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              المدونة
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              أحدث <span className="text-gradient-gold">مقالاتنا</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            عرض جميع المقالات
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
