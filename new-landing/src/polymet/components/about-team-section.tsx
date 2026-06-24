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
      borderColor: "hover:border-blue-500/40",
      shadowColor: "hover:shadow-blue-500/10",
      imgBorderColor: "group-hover:border-blue-500/40",
      roleColor: "text-blue-400"
    },
    {
      name: "Bogdan Ripa",
      role: "Co-Founder & CPO",
      image: "/authors/bogdan-ripa.webp",
      to: "/blog/author/bogdan-ripa/",
      bio: "Drives product vision and AI-native platform architecture, ensuring Genezio models AI behavior accurately for marketing teams.",
      borderColor: "hover:border-indigo-500/40",
      shadowColor: "hover:shadow-indigo-500/10",
      imgBorderColor: "group-hover:border-indigo-500/40",
      roleColor: "text-indigo-400"
    },
    {
      name: "Paula Cionca",
      role: "Co-Founder & CMO",
      image: "/authors/paula-cionca.webp",
      to: "/blog/author/paula-cionca/",
      bio: "Frequently publishes on recommendation rate, citations, perception analysis, and the evolving role of GEO in modern marketing strategy.",
      borderColor: "hover:border-purple-500/40",
      shadowColor: "hover:shadow-purple-500/10",
      imgBorderColor: "group-hover:border-purple-500/40",
      roleColor: "text-purple-400"
    },
    {
      name: "Bogdan Vlad",
      role: "Co-Founder & CTO",
      image: "/authors/bogdan-vlad.webp",
      to: "/blog/author/bogdan-vlad/",
      bio: "Architects high-performance backend systems and AI integrations, drawing on deep engineering experience from Fitbit and Vector Watch.",
      borderColor: "hover:border-cyan-500/40",
      shadowColor: "hover:shadow-cyan-500/10",
      imgBorderColor: "group-hover:border-cyan-500/40",
      roleColor: "text-cyan-400"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0E0E10] relative overflow-hidden border-t border-[#1C1C20]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6">
            <UsersIcon className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
              className={`group bg-[#050506] border border-[#1C1C20] rounded-xl p-6 md:p-8 ${member.borderColor} transition-all duration-300 hover:shadow-lg ${member.shadowColor} hover:-translate-y-1 block`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-14 h-14 rounded-full object-cover border border-[#1C1C20] ${member.imgBorderColor} transition-colors duration-300`}
                />
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
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
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050506] border border-[#1C1C20]">
            <CodeIcon className="w-7 h-7 text-blue-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Product-Minded</h4>
            <p className="text-[#B0B0B3] text-sm">
              Technical rigor to model AI behavior accurately across engines and
              scenarios.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050506] border border-[#1C1C20]">
            <MegaphoneIcon className="w-7 h-7 text-purple-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">
              Commercially Focused
            </h4>
            <p className="text-[#B0B0B3] text-sm">
              Clear workflows for internal stakeholders and external agencies
              alike.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#050506] border border-[#1C1C20]">
            <UsersIcon className="w-7 h-7 text-blue-400 mb-3" />
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
