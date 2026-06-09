import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";



function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 640, isTablet: w < 900, w };
}

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const RESEARCH = [
  { icon: "⬡", title: "Auditing Complex Models", desc: "Do ML models perform well when a fraction of their training data is compromised? Are they resilient to out-of-distribution or adversarial inputs? How are deployed models regulated?", refs: ["CVPR 2021", "ECCV 2018", "CHI 2024"] },
  { icon: "∂", title: "Fundamental Limits", desc: "Is it possible to determine how robust any model can be under adverse conditions like training- and test-time attacks? What can we say about compliance with regulations?", refs: ["NeurIPS 2018", "NeurIPS 2019"] },
  { icon: "◈", title: "Building Reliable Models", desc: "Can we build models resilient against multiple adverse conditions? Are oft-overlooked methods such as kernel machines the path to interpretable and robust models?", refs: ["ArXiv 2025", "ICML 2021", "NeurIPS 2022"] },
  { icon: "⊕", title: "Distributed Learning", desc: "In domains where data is scattered across entities with privacy concerns, how can performant models be trained? Can synthetic data alleviate these concerns?", refs: ["ArXiv 2024", "ACM 2024", "ICML 2019"] },
];



const BLUE = "#2563c4";
const BLUE_LIGHT = "#e8eef9";
const BORDER = "#e5e0d8";
const MUTED = "#666";
const BG = "#f8f7f3";
const serif = "'DM Serif Display', serif";

function SectionLabel({ text }) {
  return (
    <span style={{
      fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em",
      textTransform: "uppercase", color: BLUE,
      background: BLUE_LIGHT, padding: "0.28rem 0.75rem",
      borderRadius: 100, display: "inline-block", marginBottom: "0.75rem",
    }}>{text}</span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: serif, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
      letterSpacing: "-0.02em", lineHeight: 1.1, color: "#111",
      margin: "0 0 2rem 0", textAlign: "center",
    }}>{children}</h2>
  );
}

function Tag({ text }) {
  return (
    <span style={{
      fontSize: "0.68rem", fontWeight: 600, color: BLUE,
      background: BLUE_LIGHT, padding: "0.18rem 0.55rem",
      borderRadius: 100, letterSpacing: "0.03em",
    }}>{text}</span>
  );
}
const TEAM = [
  { name: "Arjun Bhagoji", role: "Principal Investigator · IIT Bombay", group: "Faculty", initials: "AB", color: "#2563c4", photo: "/arjun.jpg", photoPos: "center 20%" },
  { name: "Rahul Kumar Yadav", role: "PhD · with Parthe Pandit", group: "PhD Students", initials: "RY", color: "#16a34a",photo: "/Rahul.png", photoPos: "center 20%" },
  { name: "Lavinia Nongbri", role: "PhD", group: "PhD Students", initials: "LN", color: "#db2777", photo: "/lavinia.jpg", photoPos: "center 20%" },
  { name: "Nachiketa Patil", role: "MS by Research", group: "MS by Research", initials: "NP", color: "#9333ea", photo: "/Nachiketa.jpg", photoPos: "center 20%" },
  { name: "Ritik", role: "MS by Research · with Arpit Agarwal", group: "MS by Research", initials: "Ri", color: "#dc2626", photo: "/Ritik.jpg", photoPos: "center 20%" },
  { name: "Sravani Gunnu", role: "MS by Research", group: "MS by Research", initials: "SG", color: "#0891b2", photo: "/Sravani.jpg", photoPos: "center 20%" },
  { name: "Tunir Ghosh", role: "Pre-doc · with Parthe Pandit", group: "Pre-doc", initials: "TG", color: "#0891b2" },
  { name: "Prarabdh Shukla", role: "Pre-doc", group: "Pre-doc", initials: "PS", color: "#d97706", photo: "/Prarabdh.jpg", photoPos: "center 30%" },
  { name: "Ansamit Mitra", role: "B.Tech.", group: "B.Tech.", initials: "AM", color: "#16a34a" ,photo: "/anasmit.jpg", photoPos: "center 20%"},
];

const PUBLICATIONS = [
  { year: "2025", title: "Adapting to Evolving Adversaries with Regularized Continual Robust Training", venue: "ArXiv preprint", url: "https://arxiv.org/abs/2502.04248" },
  { year: "2024", title: '"Community Guidelines Make this the Best Party on the Internet": An In-Depth Study of Online Platforms Content Moderation Policies', venue: "CHI 2024", url: "https://dl.acm.org/doi/full/10.1145/3613904.3642333" },
  { year: "2024", title: "Reliability of Distributed Machine Learning Systems", venue: "ArXiv preprint", url: "https://arxiv.org/abs/2410.08432" },
  { year: "2024", title: "Zero-Auxiliary-Knowledge Attacks in Privacy-Preserving ML", venue: "ACM KDD 2024", url: "https://dl.acm.org/doi/abs/10.1145/3639037" },
  { year: "2024", title: "Augmenting Rule-based DNS Censorship Detection at Scale with Machine Learning", venue: "ACM KDD 2024", url: "https://dl.acm.org/doi/abs/10.1145/3639037" },
  { year: "2022", title: "Understanding Robust Learning through the Lens of Representation Similarities", venue: "NeurIPS 2022", url: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/e1fa017a312368906411501bbd27a1d6-Abstract-Conference.html" },
  { year: "2021", title: "  Lower Bounds on Cross-Entropy Loss in the Presence of Test-time Adversaries", url: "https://proceedings.mlr.press/v139/bhagoji21a.html" },
  { year: "2019", title: "Lower Bounds on Adversarial Robustness from Optimal Transport", venue: "NeurIPS 2019", url: "https://proceedings.neurips.cc/paper_files/paper/2019/hash/8f85517967795eeef66c225f7883bdcb-Abstract.html" },
  { year: "2018", title: "PAC-learning in the presence of adversaries", venue: "NeurIPS 2018", url: "https://proceedings.neurips.cc/paper/2018/hash/8f85517967795eeef66c225f7883bdcb-Abstract.html" },
  { year: "2018", title: "Practical Black-box Attacks on Deep Neural Networks using Efficient Query Mechanisms", venue: "ICML 2019", url: "https://openaccess.thecvf.com/content_ECCV_2018/html/Arjun_Nitin_Bhagoji_Practical_Black-box_Attacks_ECCV_2018_paper.html" },
];

const COLLABS = [
  { name: "Prateek Mittal", inst: "Princeton University" },
  { name: "Daniel Cullina", inst: "Penn State University" },
  { name: "Ben Zhao", inst: "University of Chicago" },
  { name: "Nick Feamster", inst: "University of Chicago" },
  { name: "Isabela Parisio", inst: "King's College London" },
  { name: "Deborah Olukan", inst: "King's College London" },
  { name: "Danish Pruthi", inst: "Indian Institute of Science" },
  { name: "Krishna Pillutla", inst: "IIT Madras" },
];
/* ─── App ─── */
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const team = TEAM;
  const publications = PUBLICATIONS;
  const collaborators = COLLABS;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const navLinks = ["Research", "Publications", "Team", "Collaborators", "Contact"];

  return (
    
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: BG, color: "#111", overflowX: "hidden" }}>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; }
        ::selection { background: ${BLUE}; color: white; }
      `}</style>

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        background: scrolled || menuOpen ? "rgba(248,247,243,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${BORDER}` : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 5%", height: 60,
        }}>
          <button onClick={() => scrollTo("hero")} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: serif, fontSize: "1.2rem", color: "#111",
          }}>
            IROHS<span style={{ color: BLUE }}>.</span>lab
          </button>

          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
              {navLinks.slice(0, -1).map(l => (
                <button key={l} onClick={() => scrollTo(l)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "0.85rem", fontWeight: 500, color: "#555", transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = BLUE}
                  onMouseLeave={e => e.currentTarget.style.color = "#555"}
                >{l}</button>
              ))}
              <button onClick={() => scrollTo("contact")} style={{
                background: "none", border: `1.5px solid ${BLUE}`, cursor: "pointer",
                fontSize: "0.82rem", fontWeight: 600, color: BLUE,
                padding: "0.38rem 1.1rem", borderRadius: 100, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.color = "white"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = BLUE; }}
              >Contact</button>
            </nav>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 5, padding: 4,
            }}>
              <span style={{ width: 22, height: 2, background: "#111", borderRadius: 2, display: "block", transition: "0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <span style={{ width: 22, height: 2, background: "#111", borderRadius: 2, display: "block", transition: "0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width: 22, height: 2, background: "#111", borderRadius: 2, display: "block", transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <nav style={{
            padding: "0.5rem 5% 1.25rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex", flexDirection: "column",
          }}>
            {navLinks.map(l => (
              <button key={l} onClick={() => scrollTo(l)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "1rem", fontWeight: 500, color: "#333",
                textAlign: "left", padding: "0.75rem 0",
                borderBottom: `1px solid ${BORDER}`,
              }}>{l}</button>
            ))}
          </nav>
        )}
      </header>

      <section id="hero" style={{
        minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: isMobile ? "100px 5% 60px" : "80px 5% 60px",
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${BORDER}55 1px, transparent 1px), linear-gradient(90deg, ${BORDER}55 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(37,99,196,0.07) 0%, transparent 65%)",
          top: "10%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 720, position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: BLUE,
            background: BLUE_LIGHT, padding: "0.28rem 0.85rem",
            borderRadius: 100, marginBottom: "1.5rem",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE, display: "inline-block" }} />
            IIT Bombay
          </div>

          <h1 style={{
            fontFamily: serif,
            fontSize: `clamp(2.4rem, ${isMobile ? "10" : "6"}vw, 4.2rem)`,
            lineHeight: 1.06, letterSpacing: "-0.025em",
            color: "#0d0d0d", marginBottom: "1.25rem",
          }}>
            Intelligent,{" "}
            <em style={{ color: BLUE }}>Robust</em>
            {" "}&amp; Honest Systems
          </h1>

          <p style={{
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            color: MUTED, lineHeight: 1.8, maxWidth: 560, marginBottom: "2rem",
            margin: "0 auto 2rem",
          }}>
            We build machine learning systems that everyone can trust. Equitable and reliable access to AI is integral to cultivating broad-based societal trust in a technology as transformative as machine learning.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem", justifyContent: "center" }}>
            <button onClick={() => scrollTo("research")} style={{
              padding: "0.72rem 1.6rem", background: BLUE, color: "white",
              border: "none", borderRadius: 100, cursor: "pointer",
              fontWeight: 600, fontSize: "0.88rem", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1a4fa0"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.transform = "none"; }}
            >Our Research →</button>
            <button onClick={() => scrollTo("publications")} style={{
              padding: "0.72rem 1.6rem", background: "transparent", color: "#111",
              border: `1.5px solid ${BORDER}`, borderRadius: 100, cursor: "pointer",
              fontWeight: 500, fontSize: "0.88rem", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#111"; }}
            >Publications</button>
          </div>

          <div style={{
            display: "flex", gap: "1rem", flexWrap: "wrap",
            fontSize: "0.78rem", color: "#999", alignItems: "center",
            paddingTop: "1.5rem", borderTop: `1px solid ${BORDER}`,
            justifyContent: "center",
          }}>
            <span>Supported by</span>
            <strong style={{ color: "#444" }}>SBI Foundation</strong>
            <span>·</span>
            <strong style={{ color: "#444" }}>C-MInDS, IIT Bombay</strong>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section id="research" style={{ padding: "4rem 5%", background: "#fff" }}>
        <Reveal>
          <SectionLabel text="What we study" />
          <SectionTitle>Research Areas</SectionTitle>
        </Reveal>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          border: `1.5px solid ${BORDER}`,
          borderRadius: 14, overflow: "hidden",
        }}>
          {RESEARCH.map((r, i) => {
            const lastRow = isMobile ? i === RESEARCH.length - 1 : i >= RESEARCH.length - 2;
            const rightCol = i % 2 === 1;
            return (
              <Reveal key={i} delay={i * 70}>
                <div style={{
                  padding: "1.75rem",
                  borderRight: !isMobile && !rightCol ? `1px solid ${BORDER}` : "none",
                  borderBottom: !lastRow ? `1px solid ${BORDER}` : "none",
                  background: "#fff", transition: "background 0.2s", height: "100%",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafaf8"}
                  onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                >
                  <div style={{
                    width: 40, height: 40, background: BLUE_LIGHT, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem", fontSize: "1.1rem", color: BLUE, fontWeight: 700,
                  }}>{r.icon}</div>
                  <h3 style={{ fontFamily: serif, fontSize: "1.05rem", marginBottom: "0.6rem", color: "#111" }}>{r.title}</h3>
                  <p style={{ fontSize: "0.86rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>{r.desc}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {r.refs.map(ref => <Tag key={ref} text={ref} />)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section id="publications" style={{ padding: "4rem 5%", background: BG }}>
        <Reveal>
          <SectionLabel text="Recent work" />
          <SectionTitle>Selected Publications</SectionTitle>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {publications.map((p, i) => (
            <Reveal key={i} delay={i * 35}>
              <a href={p.url} target="_blank" rel="noreferrer" style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                background: "#fff", border: `1.5px solid ${BORDER}`,
                borderRadius: 10, padding: "1rem 1.25rem",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 3px 14px rgba(37,99,196,0.09)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700, color: BLUE,
                  minWidth: 36, marginTop: 2, letterSpacing: "0.05em", flexShrink: 0,
                }}>{p.year}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111", lineHeight: 1.45, marginBottom: "0.2rem" }}>{p.title}</div>
                  <div style={{ fontSize: "0.76rem", color: "#999" }}><em>{p.venue}</em></div>
                </div>
                <span style={{ color: "#ccc", fontSize: "0.85rem", flexShrink: 0, paddingTop: 2 }}>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding: "4rem 5%", background: "#fff" }}>
        <Reveal>
          <SectionLabel text="Who we are" />
          <SectionTitle>Current Members</SectionTitle>
        </Reveal>
        {(() => {
          const groups = [];
          const seen = {};
          team.forEach(m => {
            if (!seen[m.group]) { seen[m.group] = true; groups.push(m.group); }
          });
          return groups.map(g => {
            const members = team.filter(m => m.group === g);
            return (
              <div key={g} style={{ marginBottom: "2.5rem" }}>
                <Reveal>
                  <div style={{
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "#999",
                    marginBottom: "1rem", textAlign: "center",
                  }}>{g}</div>
                </Reveal>
                <div style={{
                  display: "flex", flexWrap: "wrap",
                  gap: "0.875rem",
                  justifyContent: "center",
                }}>
                  {members.map((m, i) => (
                    <Reveal key={m.name} delay={i * 55}>
                      <div style={{
                        width: isMobile ? "calc(50vw - 1.5rem)" : "220px",
                        borderRadius: 12, overflow: "hidden",
                        position: "relative", aspectRatio: "3/4",
                        background: m.photo ? "transparent" : m.color,
                        border: "1.5px solid transparent",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                      >
                        {m.photo ? (
                          <img src={m.photo} alt={m.name} style={{
                            width: "100%", height: "100%",
                            objectFit: "cover", objectPosition: m.photoPos || "center 20%",
                            display: "block",
                          }} />
                        ) : (
                          <div style={{
                            width: "100%", height: "100%",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontFamily: serif, fontSize: "2.5rem", color: "white", fontStyle: "italic",
                          }}>{m.initials}</div>
                        )}
                        <div style={{
                          position: "absolute", bottom: 0, left: 0, right: 0,
                          padding: "2rem 0.875rem 0.875rem",
                          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                        }}>
                          <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white", lineHeight: 1.3 }}>{m.name}</div>
                          <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", marginTop: "0.2rem" }}>{m.role}</div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          });
        })()}
      </section>

      {/* ── COLLABORATORS ── */}
      <section id="collaborators" style={{ padding: "4rem 5%", background: BG }}>
        <Reveal>
          <SectionLabel text="Global network" />
          <SectionTitle>Collaborators</SectionTitle>
          <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.8, maxWidth: 540, marginBottom: "2rem", marginTop: "-1rem" }}>
            We collaborate with researchers worldwide — Princeton, Penn State, University of Chicago, King's College London, IISc, and IIT Madras.
          </p>
        </Reveal>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
          gap: "0.75rem",
        }}>
          {collaborators.map((c, i) => (
            <Reveal key={i} delay={i * 35}>
              <div style={{
                background: "#fff", border: `1.5px solid ${BORDER}`,
                borderRadius: 10, padding: "0.875rem 1rem", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = BLUE}
                onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
              >
                <div style={{ fontSize: "0.86rem", fontWeight: 600, color: "#111", marginBottom: "0.2rem" }}>{c.name}</div>
                <div style={{ fontSize: "0.75rem", color: "#999" }}>{c.inst}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "4rem 5%", background: "#fff" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
          gap: isTablet ? "2rem" : "4rem",
          alignItems: "start",
        }}>
          <Reveal>
            <SectionLabel text="Get in touch" />
            <SectionTitle>Contact</SectionTitle>
            <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 420, marginTop: "-1rem" }}>
              Interested in our research or looking to collaborate? We're based at IIT Bombay, Mumbai. If you're interested in joining the group, reach out with your CV and research interests.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { icon: "⬡", text: "github.com/irohs-lab", href: "https://github.com/irohs-lab" },
                { icon: "🎓", text: "IIT Bombay, Mumbai, India", href: "https://www.iitb.ac.in" },
              ].map(l => (
                <a key={l.text} href={l.href} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: "0.7rem",
                  fontSize: "0.875rem", fontWeight: 500, color: "#333", transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = BLUE}
                  onMouseLeave={e => e.currentTarget.style.color = "#333"}
                >
                  <span style={{ width: 32, height: 32, background: BLUE_LIGHT, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0 }}>{l.icon}</span>
                  {l.text}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ background: BG, borderRadius: 14, padding: "1.75rem", marginBottom: "1rem" }}>
              <h3 style={{ fontFamily: serif, fontSize: "1.2rem", marginBottom: "0.75rem", color: "#111" }}>Funding &amp; Support</h3>
              <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}>
                Our research is generously supported by the <strong style={{ color: "#333" }}>SBI Foundation</strong> and <strong style={{ color: "#333" }}>C-MInDS at IIT Bombay</strong>.
              </p>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {["SBI Foundation", "C-MInDS, IITB"].map(f => <Tag key={f} text={f} />)}
              </div>
            </div>
            <div style={{ background: BG, borderRadius: 14, padding: "1.75rem" }}>
              <h3 style={{ fontFamily: serif, fontSize: "1.2rem", marginBottom: "0.65rem", color: "#111" }}>Openings</h3>
              <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.75 }}>
                We are always looking for motivated students and researchers passionate about trustworthy ML. Reach out with your background and interests.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#111", color: "rgba(255,255,255,0.45)",
        padding: "1.5rem 5%",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem",
        fontSize: "0.78rem",
      }}>
        <span style={{ fontFamily: serif, color: "white", fontSize: "1.05rem" }}>
          IROHS<span style={{ color: "#5b8dee" }}>.</span>lab
        </span>
        <span style={{ textAlign: "center" }}>Intelligent Robust &amp; Honest Systems Lab · IIT Bombay</span>
        <a href="https://github.com/irohs-lab" target="_blank" rel="noreferrer"
          style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
          onMouseEnter={e => e.target.style.color = "white"}
          onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
        >GitHub →</a>
      </footer>
    </div>
  );
}