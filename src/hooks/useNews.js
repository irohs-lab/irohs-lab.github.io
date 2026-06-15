import { useState, useEffect } from "react";

const SOURCE = "https://arjunbhagoji.github.io/";
const PROXY = `https://corsproxy.io/?url=${encodeURIComponent(SOURCE)}`;

function inferTag(text) {
  if (/grant|award|spotlight|highlight|fellowship|prize/i.test(text)) return "Award";
  if (/featured|coverage|department website/i.test(text)) return "Media";
  if (/talk|join|visit|invited|seminar/i.test(text)) return "Event";
  if (/accepted|paper|preprint|published|journal|demonstrated|showed/i.test(text)) return "Paper";
  return "News";
}

function parse(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");

  const items = [];
  for (const li of doc.querySelectorAll("li")) {
    const strong = li.querySelector("strong");
    if (!strong) continue;
    const m = strong.textContent.trim().match(/^(\d{2})\/(\d{4})$/);
    if (!m) continue;

    const date = `${m[2]}-${m[1]}`;

    const anchor = li.querySelector("a");
    let url = null;
    if (anchor) {
      const href = anchor.getAttribute("href") || "";
      url = href.startsWith("http") ? href : `https://arjunbhagoji.github.io${href}`;
    }

    const body = li.textContent.replace(/^\s*\d{2}\/\d{4}\s*:\s*/, "").trim();
    items.push({ date, tag: inferTag(body), body, url });
  }
  return items;
}

async function fetchHtml() {
  // Try direct first — GitHub Pages sets Access-Control-Allow-Origin: *
  try {
    const res = await fetch(SOURCE, { cache: "no-store" });
    if (res.ok) return await res.text();
  } catch {}

  // Fall back to CORS proxy
  const res = await fetch(PROXY);
  if (!res.ok) throw new Error(`Proxy returned HTTP ${res.status}`);
  return res.text();
}

export function useNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchHtml()
      .then((html) => { if (!cancelled) setNews(parse(html)); })
      .catch((err) => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { news, loading, error };
}
