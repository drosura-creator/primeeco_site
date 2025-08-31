import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SiteIntegrations from "./components/SiteIntegrations";
import SavingsCalculatorModal from "./components/SavingsCalculatorModal";
import WhatsAppButton from "./components/WhatsAppButton";
import SavingsButton from "./components/SavingsButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <SiteIntegrations />
      <Header />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Projects />
                {/* ⛔️ Removed inline <SavingsCalculator /> */}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* ✅ Mount once, globally */}
      <SavingsCalculatorModal />
      <WhatsAppButton />
      <SavingsButton />
    </div>
  );
}
