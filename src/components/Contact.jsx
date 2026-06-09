import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { Tag } from "./ui/Tag";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-[5%] bg-lab-bg">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-16 items-start">
        <Reveal>
          <SectionLabel text="Get in touch" />
          <SectionTitle>Contact</SectionTitle>
          <p className="text-sm text-lab-muted leading-loose max-w-[420px] mb-7 -mt-4">
            Interested in our research or looking to collaborate? We're based at IIT Bombay, Mumbai. If you're interested in joining the group, reach out with your CV and research interests.
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "⬡", text: "github.com/irohs-lab", href: "https://github.com/irohs-lab" },
              { icon: "🎓", text: "IIT Bombay, Mumbai, India", href: "https://www.iitb.ac.in" },
            ].map(l => (
              <a
                key={l.text}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-[#333] hover:text-lab-blue transition-colors"
              >
                <span className="w-8 h-8 bg-lab-blue-light rounded-[8px] flex items-center justify-center text-sm shrink-0">
                  {l.icon}
                </span>
                {l.text}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-white rounded-[14px] p-7 mb-4">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Funding &amp; Support</h3>
            <p className="text-sm text-lab-muted leading-loose mb-4">
              Our research is generously supported by the <strong className="text-[#333]">SBI Foundation</strong> and <strong className="text-[#333]">C-MInDS at IIT Bombay</strong>.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["SBI Foundation", "C-MInDS, IITB"].map(f => <Tag key={f} text={f} />)}
            </div>
          </div>
          <div className="bg-white rounded-[14px] p-7">
            <h3 className="font-serif text-xl text-gray-900 mb-2.5">Openings</h3>
            <p className="text-sm text-lab-muted leading-loose">
              We are always looking for motivated students and researchers passionate about trustworthy ML. Reach out with your background and interests.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
