import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CursorGlow from "./components/CursorGlow";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import MobileActionBar from "./components/MobileActionBar";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";

// Inner pages are code-split: each loads only when visited
const AboutPage = lazy(() => import("./pages/AboutPage"));
const VarietiesPage = lazy(() => import("./pages/VarietiesPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const BookOrchardPage = lazy(() => import("./pages/BookOrchardPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const KnowledgePage = lazy(() => import("./pages/KnowledgePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/** Quiet pine screen shown for the instant a page chunk is loading */
function PageFallback() {
  return <div className="min-h-[100svh] bg-forest-950" aria-busy="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <Suspense fallback={<PageFallback />}>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </BrowserRouter>
  );
}
