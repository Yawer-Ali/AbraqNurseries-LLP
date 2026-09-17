import Hero from "../components/Hero";
import TrustMarquee from "../components/TrustMarquee";
import ImpactStats from "../components/ImpactStats";
import LiveClimateTicker from "../components/LiveClimateTicker";
import { ModernBentoFeatures } from "../components/ModernBentoFeatures";
import { ModernConfigurator } from "../components/ModernConfigurator";
import ModernVarietiesShowcase from "../components/ModernVarietiesShowcase";
import { MultiProductBeforeAfter } from "../components/MultiProductBeforeAfter";
import ServicesGrid from "../components/ServicesGrid";
import OrchardEstimator from "../components/OrchardEstimator";
import ModernCaseStudies from "../components/ModernCaseStudies";
import VideoSection from "../components/VideoSection";
import PolaroidDeck from "../components/PolaroidDeck";
import FaqSection from "../components/FaqSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <LiveClimateTicker />
      <ImpactStats />
      <ModernBentoFeatures />
      <ModernConfigurator />
      <ModernVarietiesShowcase />
      <MultiProductBeforeAfter />
      <ServicesGrid />
      <OrchardEstimator />
      <ModernCaseStudies />
      <VideoSection />
      <PolaroidDeck />
      <FaqSection />
      <CTASection />
    </>
  );
}

