import { AboutHeroSection } from "../components/about-hero-section";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

export function AboutGenezio() {
    return (
        <>
            <PolymetSEO
                title="About Genezio | Generative Engine Optimization Platform"
                description="Maximize your brand's visibility in generative search. Genezio is an AI platform that helps marketing teams optimize for AI-driven conversations and AEO."
                canonicalPath="/about-genezio/"
            />
            <div className="min-h-screen bg-[#050506]">
                <AboutHeroSection />
            </div>
        </>
    );
}
