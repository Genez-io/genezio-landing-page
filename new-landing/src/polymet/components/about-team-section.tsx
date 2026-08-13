import { UsersIcon, CodeIcon, MegaphoneIcon } from "lucide-react";
import { Link } from "react-router";

export function AboutTeamSection() {
  const team = [
    {
      name: "Andrei Pitis",
      role: "Co-Founder & CEO",
      image: "/authors/andrei-pitis.webp",
      to: "/blog/author/andrei-pitis/",
      bio: "Strategic leader and veteran tech entrepreneur with 30+ years of experience, driving Genezio's vision to redefine AI-era search visibility.",
      borderColor: "hover:border-white/10",
      shadowColor: "hover:shadow-zinc-500/10",
      imgBorderColor: "group-hover:border-white/10",
      roleColor: "text-zinc-400"
    },
    {
      name: "Bogdan Ripa",
      role: "Co-Founder & CPO",
      image: "/authors/bogdan-ripa.webp",
      to: "/blog/author/bogdan-ripa/",
      bio: "Drives product vision and AI-native platform architecture, ensuring Genezio models AI behavior accurately for marketing teams.",
      borderColor: "hover:border-white/10",
      shadowColor: "hover:shadow-zinc-500/10",
      imgBorderColor: "group-hover:border-white/10",
      roleColor: "text-zinc-400"
    },
    {
      name: "Paula Cionca",
      role: "Co-Founder & CMO",
      image: "/authors/paula-cionca.webp",
      to: "/blog/author/paula-cionca/",
      bio: "Frequently publishes on recommendation rate, citations, perception analysis, and the evolving role of GEO in modern marketing strategy.",
      borderColor: "hover:border-white/20",
      shadowColor: "hover:shadow-black/20",
      imgBorderColor: "group-hover:border-white/20",
      roleColor: "text-emerald-400"
    },
    {
      name: "Bogdan Vlad",
      role: "Co-Founder & CTO",
      image: "/authors/bogdan-vlad.webp",
      to: "/blog/author/bogdan-vlad/",
      bio: "Architects high-performance backend systems and AI integrations, drawing on deep engineering experience from Fitbit and Vector Watch.",
      borderColor: "hover:border-white/10",
      shadowColor: "hover:shadow-zinc-500/10",
      imgBorderColor: "group-hover:border-white/10",
      roleColor: "text-zinc-400"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16, 185, 129,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-6">
            <UsersIcon className="w-8 h-8 text-zinc-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The{" "}
            <span className="text-white">
              Team
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#B0B0B3] max-w-3xl mx-auto leading-relaxed">
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
              className={`group bg-[#050506] border border-white/10 rounded-xl p-6 md:p-8 ${member.borderColor} transition-all duration-300 hover:shadow-lg ${member.shadowColor} hover:-translate-y-1 block`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-14 h-14 rounded-full object-cover border border-white/10 ${member.imgBorderColor} transition-colors duration-300`}
                />
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className={`text-sm ${member.roleColor} font-medium`}>
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-[#B0B0B3] text-sm leading-relaxed">
                {member.bio}
              </p>
            </Link>
          ))}
        </div>

        {/* Culture description */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050506] border border-white/10">
            <CodeIcon className="w-7 h-7 text-zinc-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Product-Minded</h4>
            <p className="text-[#B0B0B3] text-sm">
              Technical rigor to model AI behavior accurately across engines and
              scenarios.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050506] border border-white/10">
            <MegaphoneIcon className="w-7 h-7 text-emerald-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">
              Commercially Focused
            </h4>
            <p className="text-[#B0B0B3] text-sm">
              Clear workflows for internal stakeholders and external agencies
              alike.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050506] border border-white/10">
            <UsersIcon className="w-7 h-7 text-zinc-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Fast-Moving</h4>
            <p className="text-[#B0B0B3] text-sm">
              Analytical and grounded in practical outcomes under changing search
              conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
