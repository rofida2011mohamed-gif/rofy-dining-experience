import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ReservationPage from "./components/ReservationPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={setCurrentPage} />;
      case "menu":
        return <MenuPage />;
      case "reservations":
        return <ReservationPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          {renderPage()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
