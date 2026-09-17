import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CursorGlow from "./components/CursorGlow";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VarietiesPage from "./pages/VarietiesPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import BookOrchardPage from "./pages/BookOrchardPage";
import ProjectsPage from "./pages/ProjectsPage";
import KnowledgePage from "./pages/KnowledgePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/varieties" element={<VarietiesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/book-orchard" element={<BookOrchardPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageTransition>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
