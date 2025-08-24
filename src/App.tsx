
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Promotions from "./pages/Promotions";
import Reviews from "./pages/Reviews";
import Careers from "./pages/Careers";
import Franchise from "./pages/Franchise";
import Catering from "./pages/Catering";
import Corporate from "./pages/Corporate";
import Events from "./pages/Events";
import GiftCards from "./pages/GiftCards";
import Loyalty from "./pages/Loyalty";
import Quality from "./pages/Quality";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
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
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
