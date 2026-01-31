
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ConsultingService from "./pages/ConsultingService";
import DigitalTransformation from "./pages/DigitalTransformation";
import TrainingService from "./pages/TrainingService";
import ServiceDetail from "./pages/ServiceDetail";
import Sectors from "./pages/Sectors";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", 
    });
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/services" element={<Services />} />
          
          <Route path="/services/consulting" element={<ConsultingService />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/training" element={<TrainingService />} />

          
          <Route path="/service/:slug" element={<ServiceDetail />} />
          
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;