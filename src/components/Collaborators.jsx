import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { COLLABS } from "../constants";

export function Collaborators() {
  return (
    <section id="collaborators" className="py-16 px-[5%] bg-lab-bg">
      <Reveal>
        <SectionLabel text="Global network" />
        <SectionTitle>Collaborators</SectionTitle>
        <p className="text-sm text-lab-muted leading-loose max-w-[540px] mx-auto text-center -mt-4 mb-8">
          We collaborate with researchers worldwide — Princeton, Penn State, University of Chicago, King's College London, IISc, and IIT Madras.
        </p>
      </Reveal>
      <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-3">
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
  );
}
