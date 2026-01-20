// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import Contact from "./pages/Contact";
// import BookConsultation from "./pages/BookConsultation";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/:slug" element={<ServiceDetail />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/book-consultation" element={<BookConsultation />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import Contact from "./pages/Contact";
// import BookConsultation from "./pages/BookConsultation";
// import ConsultingService from "./pages/ConsultingService";
// import DigitalTransformation from "./pages/DigitalTransformation";
// import Sectors from "./pages/Sectors";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/consulting" element={<ConsultingService />} />
//           <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
//           <Route path="/services/:slug" element={<ServiceDetail />} />
//           <Route path="/sectors" element={<Sectors />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/book-consultation" element={<BookConsultation />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ConsultingService from "./pages/ConsultingService";
import DigitalTransformation from "./pages/DigitalTransformation";
import ServiceDetail from "./pages/ServiceDetail";
import Sectors from "./pages/Sectors";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<ConsultingService />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
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