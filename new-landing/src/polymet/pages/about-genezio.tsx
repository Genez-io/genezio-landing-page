import { AboutHeroSection } from "../components/about-hero-section";
import { AboutStorySection } from "../components/about-story-section";
import { AboutMissionSection } from "../components/about-mission-section";
import { AboutWhatWeDoSection } from "../components/about-what-we-do-section";
import { AboutApproachSection } from "../components/about-approach-section";
import { AboutValuesSection } from "../components/about-values-section";
import { AboutAchievementsSection } from "../components/about-achievements-section";
import { AboutTeamSection } from "../components/about-team-section";
import { AboutCustomersSection } from "../components/about-customers-section";
import { AboutCommunitySection } from "../components/about-community-section";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

export function AboutGenezio() {
  return (
    <>
      <PolymetSEO
        title="About Genezio | AI-Driven Search Visibility & Recommendation"
        description="Learn how Genezio helps marketing teams earn AI recommendations. AI-native platform for optimization across ChatGPT, Gemini, Perplexity & Claude."
        canonicalPath="/about-genezio/"
      />
      <div className="min-h-screen bg-[#050506]">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutWhatWeDoSection />
        <AboutApproachSection />
        <AboutValuesSection />
        <AboutAchievementsSection />
        <AboutTeamSection />
        <AboutCustomersSection />
        <AboutCommunitySection />
      </div>
    </>
  );
}
