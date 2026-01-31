
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white p-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary/10">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary">404</div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">
          {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          {isRTL 
            ? 'عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : 'Sorry, the page you are looking for does not exist or has been moved.'
          }
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <a href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              {isRTL ? 'العودة للصفحة السابقة' : 'Go Back'}
            </a>
          </Button>
        </div>
        
        <div className="mt-12 p-6 bg-white/50 rounded-2xl border border-border/50">
          <p className="text-sm text-gray-500 mb-2">
            {isRTL ? 'الصفحة المطلوبة:' : 'Requested URL:'}
          </p>
          <code className="text-sm bg-gray-100 p-2 rounded-lg block overflow-x-auto">
            {location.pathname}
          </code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;