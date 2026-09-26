import Hero from "../components/Hero";
import TrustMarquee from "../components/TrustMarquee";
import LiveClimateTicker from "../components/LiveClimateTicker";
import OrchardPlanner from "../components/OrchardPlanner";
import ModernVarietiesShowcase from "../components/ModernVarietiesShowcase";
import { MultiProductBeforeAfter } from "../components/MultiProductBeforeAfter";
import ServicesGrid from "../components/ServicesGrid";
import ModernCaseStudies from "../components/ModernCaseStudies";
import GrowerVoices from "../components/GrowerVoices";
import VideoSection from "../components/VideoSection";
import FaqSection from "../components/FaqSection";
import CTASection from "../components/CTASection";
import QuickBook from "../components/QuickBook";
import OrchardWindow from "../components/OrchardWindow";
import SeasonDial from "../components/SeasonDial";
import PhotoBreak from "../components/PhotoBreak";
import { KashmirDivider } from "../components/motifs/KashmirMotifs";

/** Gold ornament joining two consecutive dark sections */
function DarkSeam() {
  return (
    <div className="bg-forest-950 py-3" aria-hidden="true">
      <KashmirDivider tone="dark" />
    </div>
  );
}

/*
 * The homepage reads as a story:
 *   who we are (hero) → what we do (services) → see it (orchard window, what we grow)
 *   → proof (projects, grower voices) → plan it (planner, orchard year, before/after)
 *   → watch (films) → questions → talk to us.
 * Chapters are numbered 01–09 in reading order.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickBook />
      <TrustMarquee />
      <LiveClimateTicker />
      <ServicesGrid />
      <OrchardWindow />
      <ModernVarietiesShowcase />
      <ModernCaseStudies />
      <GrowerVoices />
      <OrchardPlanner />
      <DarkSeam />
      <SeasonDial />
      <PhotoBreak image="/images/real/harvest-crates-1600.webp" alt="Crates of freshly picked apples from an Abraq orchard" eyebrow="The orchard year">
        Planted in March. <span className="serif-italic text-gradient-gold">Picked in September.</span>
      </PhotoBreak>
      <MultiProductBeforeAfter />
      <VideoSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
