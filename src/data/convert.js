const fs = require("fs");
const bibtexParse = require("bibtex-parse-js");

const bib = fs.readFileSync("2164.bib", "utf8");

const entries = bibtexParse.toJSON(bib);
const UMLAUT  = { a:'ä', A:'Ä', e:'ë', E:'Ë', i:'ï', I:'Ï', o:'ö', O:'Ö', u:'ü', U:'Ü' };
const ACUTE   = { a:'á', A:'Á', c:'ć', C:'Ć', e:'é', E:'É', i:'í', I:'Í', n:'ń', N:'Ń', o:'ó', O:'Ó', s:'ś', S:'Ś', u:'ú', U:'Ú', y:'ý', Y:'Ý', z:'ź', Z:'Ź' };
const GRAVE   = { a:'à', A:'À', e:'è', E:'È', i:'ì', I:'Ì', o:'ò', O:'Ò', u:'ù', U:'Ù' };
const CIRCUM  = { a:'â', A:'Â', e:'ê', E:'Ê', i:'î', I:'Î', o:'ô', O:'Ô', u:'û', U:'Û' };
const TILDE   = { a:'ã', A:'Ã', n:'ñ', N:'Ñ', o:'õ', O:'Õ' };
const CARON   = { c:'č', C:'Č', e:'ě', E:'Ě', n:'ň', N:'Ň', r:'ř', R:'Ř', s:'š', S:'Š', z:'ž', Z:'Ž' };
const CEDILLA = { c:'ç', C:'Ç', s:'ş', S:'Ş' };

function latexDecode(text) {
  return text
    .replace(/\\"\{\\i\}|\\"\{i\}|\\\\i/g, 'ï')          // \"{\i} dotless-i umlaut
    .replace(/\{"\\?"([aAeEiIoOuU])\}|\\"\{([aAeEiIoOuU])\}|\\"([aAeEiIoOuU])/g,
      (_, a, b, c) => UMLAUT[a || b || c] || (a || b || c))
    .replace(/\{\\?'([aAcCeEiInNoOsStTuUyYzZ])\}|\\'\{([aAcCeEiInNoOsStTuUyYzZ])\}|\\'([aAcCeEiInNoOsStTuUyYzZ])/g,
      (_, a, b, c) => ACUTE[a || b || c] || (a || b || c))
    .replace(/\{\\?`([aAeEiIoOuU])\}|\\`\{([aAeEiIoOuU])\}|\\`([aAeEiIoOuU])/g,
      (_, a, b, c) => GRAVE[a || b || c] || (a || b || c))
    .replace(/\{\\?\^([aAeEiIoOuU])\}|\\\^\{([aAeEiIoOuU])\}|\\\^([aAeEiIoOuU])/g,
      (_, a, b, c) => CIRCUM[a || b || c] || (a || b || c))
    .replace(/\{\\?~([aAnNoO])\}|\\~\{([aAnNoO])\}|\\~([aAnNoO])/g,
      (_, a, b, c) => TILDE[a || b || c] || (a || b || c))
    .replace(/\\v\{([cCeEnNrRsS])\}|\\v([cCeEnNrRsS])/g,
      (_, a, b) => CARON[a || b] || (a || b))
    .replace(/\\c\{([cCsS])\}|\\c([cCsS])/g,
      (_, a, b) => CEDILLA[a || b] || (a || b))
    .replace(/\\[lL]\b/g, m => m[1] === 'l' ? 'ł' : 'Ł')
    .replace(/\\ss\b/g, 'ß')
    .replace(/\\[oO]\b/g, m => m[1] === 'o' ? 'ø' : 'Ø')
    .replace(/\\aa\b/g, 'å').replace(/\\AA\b/g, 'Å')
    .replace(/\\ae\b/g, 'æ').replace(/\\AE\b/g, 'Æ');
}

function cleanBibtex(text = "") {
  return latexDecode(text)
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
const publications = entries.map((entry) => ({
  id: entry.citationKey,
  title: cleanBibtex(entry.entryTags.title),
  authors:
    entry.entryTags.author
      ?.split(/\s+and\s+/)
      .map((a) => cleanBibtex(a)) || [],
  year: Number(entry.entryTags.year),
  venue: cleanBibtex(
    entry.entryTags.journal ||
    entry.entryTags.booktitle ||
    ""
  ),
  url: entry.entryTags.url || "",
  doi: entry.entryTags.doi || ""
}));

// Sort so conference/journal entries come before arXiv preprints (corr).
// When deduplicating by title, the first occurrence wins, so the
// published version is kept and the preprint is dropped.
publications.sort((a, b) => {
  const aIsPreprint = a.id.includes("corr");
  const bIsPreprint = b.id.includes("corr");
  if (aIsPreprint !== bIsPreprint) return aIsPreprint ? 1 : -1;
  return 0;
});

const seenDoi = new Set();
const seenTitle = new Set();
const unique = publications.filter((pub) => {
  if (pub.doi && seenDoi.has(pub.doi)) return false;
  const titleKey = pub.title.toLowerCase().replace(/\s+/g, " ").trim();
  if (seenTitle.has(titleKey)) return false;
  if (pub.doi) seenDoi.add(pub.doi);
  seenTitle.add(titleKey);
  return true;
});

fs.writeFileSync(
  "publications.json",
  JSON.stringify(unique, null, 2)
);

