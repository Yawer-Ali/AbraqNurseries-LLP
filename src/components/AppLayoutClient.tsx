
import React, { useState, useEffect } from "react";
import { StudioHeader } from "./StudioHeader";
import { StudioFooter } from "./StudioFooter";
import { ConsultationModal } from "./ConsultationModal";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { AmbientAuraParticles } from "./AmbientAuraParticles";
import { PageTransition } from "./PageTransition";

export function AppLayoutClient({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("abraq-theme");
      if (saved) return saved === "dark";
      return true;
    }
    return true;
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("High-Density Orchard Setup");
  const [estimateSummaryForModal, setEstimateSummaryForModal] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("abraq-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("abraq-theme", "light");
    }
  }, [darkMode]);

  const handleOpenBooking = (serviceName?: string, summary?: string) => {
    setSelectedServiceForModal(serviceName || "High-Density Orchard Setup");
    setEstimateSummaryForModal(summary || "");
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative font-sans">
      <AmbientAuraParticles />

      <StudioHeader
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1 relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>

      <StudioFooter onOpenBooking={() => handleOpenBooking()} />

      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForModal}
        initialEstimateSummary={estimateSummaryForModal}
      />

      <FloatingWhatsApp />
    </div>
  );
}

export default AppLayoutClient;
