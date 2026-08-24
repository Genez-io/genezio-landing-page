import { UsersIcon, CodeIcon, MegaphoneIcon } from "lucide-react";
import { Link } from "react-router";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";

export function AboutTeamSection() {
  const team = [
    {
      name: "Andrei Pitis",
      role: "Co-Founder & CEO",
      image: "/authors/andrei-pitis.webp",
      to: "/blog/author/andrei-pitis/",
      bio: "Strategic leader and veteran tech entrepreneur with 30+ years of experience, driving Genezio's vision to redefine AI-era search visibility.",
    },
    {
      name: "Bogdan Ripa",
      role: "Co-Founder & CPO",
      image: "/authors/bogdan-ripa.webp",
      to: "/blog/author/bogdan-ripa/",
      bio: "Drives product vision and AI-native platform architecture, ensuring Genezio models AI behavior accurately for marketing teams.",
    },
    {
      name: "Paula Cionca",
      role: "Co-Founder & CMO",
      image: "/authors/paula-cionca.webp",
      to: "/blog/author/paula-cionca/",
      bio: "PhD in AI, drives marketing and customer success at Genezio. Publishes widely on recommendation rate, citations, perception analysis, and the evolving role of GEO in modern marketing.",
    },
    {
      name: "Bogdan Vlad",
      role: "Co-Founder & CTO",
      image: "/authors/bogdan-vlad.webp",
      to: "/blog/author/bogdan-vlad/",
      bio: "Architects high-performance backend systems and AI integrations, drawing on deep engineering experience from Fitbit and Vector Watch.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E10] overflow-hidden">
      {/* Top hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle glow */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <HeroEyebrow className="mb-6 mx-auto w-fit">The team</HeroEyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The Team
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Led by founders and operators with deep expertise in product, cloud
            infrastructure, brand strategy, and AI-era growth.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {team.map((member) => (
            <Link
              key={member.name}
              to={member.to}
              className="group block bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border border-white/10 group-hover:border-white/20 transition-colors"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/50 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {member.bio}
              </p>
            </Link>
          ))}
        </div>

        {/* Culture description */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <CodeIcon className="w-7 h-7 text-emerald-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Product-Minded</h4>
            <p className="text-white/60 text-sm">
              Technical rigor to model AI behavior accurately across engines and
              scenarios.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <MegaphoneIcon className="w-7 h-7 text-emerald-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">
              Commercially Focused
            </h4>
            <p className="text-white/60 text-sm">
              Clear workflows for internal stakeholders and external agencies
              alike.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <UsersIcon className="w-7 h-7 text-emerald-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Fast-Moving</h4>
            <p className="text-white/60 text-sm">
              Analytical and grounded in practical outcomes under changing search
              conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
