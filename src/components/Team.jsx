import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { TEAM, COLLABS } from "../constants";

const LinkedInIcon = () => (
  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function MemberCard({ m }) {
  return (
    <div className="flex flex-col bg-[#fafaf8] border border-lab-border rounded-xl overflow-hidden hover:border-lab-blue transition-colors hover:shadow-sm w-[220px]">
      <div className="w-full h-64 flex-shrink-0">
        {m.photo
          ? <img src={m.photo} alt={m.name} className="w-full h-full object-cover" style={{ objectPosition: m.photoPos || "center 20%" }} />
          : <div className="w-full h-full flex items-center justify-center font-serif text-2xl italic text-white" style={{ background: m.color }}>{m.initials}</div>
        }
      </div>
      <div className="p-3.5">
        <div className="font-semibold text-sm text-gray-900 leading-snug">{m.name}</div>
        <div className="text-xs text-[#666] mt-0.5 leading-snug">{m.role}</div>
        <div className="flex gap-2 flex-wrap mt-2">
          {m.website && (
            <a href={m.website} target="_blank" rel="noreferrer"
              className="text-[0.65rem] font-semibold text-lab-blue border border-lab-blue px-2 py-0.5 rounded-full hover:bg-lab-blue hover:text-white transition-colors">
              Website ↗
            </a>
          )}
          {m.linkedin && (
            <a href={m.linkedin} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-lab-blue hover:underline">
              <LinkedInIcon /> LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const groups = [];
  const seen = {};
  TEAM.forEach(m => {
    if (!seen[m.group]) { seen[m.group] = true; groups.push(m.group); }
  });

  return (
    <>
      <section id="team" className="py-16 px-[5%] bg-white">
        <Reveal>
          <SectionLabel text="Who we are" />
          <SectionTitle>Current Members</SectionTitle>
        </Reveal>

        {groups.map(g => {
          const members = TEAM.filter(m => m.group === g);
          return (
            <div key={g} className="mb-10">
              <Reveal>
                <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#999] text-center mb-4">{g}</div>
              </Reveal>
              <div className="flex flex-wrap justify-center gap-3">
                {members.map(m => (
                  <MemberCard key={m.name} m={m} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section id="collaborators" className="py-16 px-[5%] bg-lab-bg">
        <Reveal>
          <SectionLabel text="Global network" />
          <SectionTitle>Collaborators</SectionTitle>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-3">
          {COLLABS.map((c, i) => (
            <Reveal key={i} delay={i * 35}>
              <div className="bg-white border border-lab-border rounded-[10px] p-3.5 hover:border-lab-blue transition-colors">
                <div className="text-sm font-semibold text-gray-900 mb-0.5">{c.name}</div>
                <div className="text-xs text-[#999]">{c.inst}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}