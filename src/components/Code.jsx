import { useState, useEffect } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";

export function Code() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/irohs-lab/repos?sort=updated&per_page=12")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setRepos(data); });
  }, []);

  return (
    <section id="code" className="py-16 px-[5%] bg-white">
      <Reveal>
        <SectionLabel text="Open source" />
        <SectionTitle>Code</SectionTitle>
      </Reveal>
      {repos.length === 0 ? (
        <p className="text-center text-[#bbb] text-sm py-8">Loading repositories…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-3">
          {repos.map((r, i) => (
            <Reveal key={r.id} delay={i * 35}>
              <a
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-2 bg-lab-bg border border-lab-border rounded-[10px] p-4 h-full hover:border-lab-blue hover:shadow-[0_3px_14px_rgba(37,99,196,0.09)] transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-lab-blue">{r.name}</span>
                  {r.stargazers_count > 0 && (
                    <span className="text-xs text-[#999] shrink-0">★ {r.stargazers_count}</span>
                  )}
                </div>
                {r.description && (
                  <p className="text-xs text-lab-muted leading-relaxed flex-1">{r.description}</p>
                )}
                {r.language && (
                  <span className="text-xs text-[#999]">{r.language}</span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
