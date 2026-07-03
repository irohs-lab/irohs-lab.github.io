// pubRefs: DBLP ids from data/publications.json
export const RESEARCH = [
  {
    icon: "⬡",
    title: "Auditing complex deployed models",
    desc: "Do machine learning models perform well when a fraction of their training data is compromised? Are they resilient to out-of-distribution or even adversarial inputs? How are deployed models regulated?",
    pubRefs: [
      "DBLP:conf/eccv/BhagojiHLS18",
      "DBLP:conf/chi/SchaffnerBCMSWC24",
      "DBLP:journals/pomacs/0007LGBSBF24",
    ],
  },
  {
    icon: "∂",
    title: "Proving fundamental limits on reliability",
    desc: "Is it possible to determine how robust any model can be under adverse conditions such as training- and test-time attacks? What can we say about the ease of learning such models, and their compliance with regulations?",
    pubRefs: [
      "DBLP:conf/nips/CullinaBM18",
      "DBLP:conf/nips/BhagojiCM19",
      "DBLP:conf/icml/BhagojiCSM21",
    ],
  },
  {
    icon: "◈",
    title: "Building reliable models",
    desc: "Can we build models that are resilient against multiple types of adverse conditions? How do we utilize knowledge of fundamental limits to build better models? Are oft-overlooked methods such as kernel machines the path to interpretable and robust models? Can machine learning models outperform rule-based models in security-critical domains?",
    pubRefs: [
      "DBLP:conf/nips/CianfaraniBSZZM22",
      "DBLP:conf/icml/DaiCSMB25",
    ],
  },
  {
    icon: "⊕",
    title: "Learning with distributed data and models",
    desc: "In domains where data is scattered across entities with privacy and proprietary data concerns, how can performant models be trained? Can synthetic data and generative models be used to alleviate these concerns? Are distributed models reliable?",
    pubRefs: [
      "DBLP:journals/corr/abs-2410-08432",
      "DBLP:journals/pomacs/0007LGBSBF24",
    ],
  },
];

export const TEAM = [
  // Faculty
  { name: "Arjun Bhagoji",     role: "Principal Investigator · IIT Bombay",            group: "Faculty",        initials: "AB",  color: "#2563c4", photo: "/arjun.jpg",       photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/arjun-bhagoji-18617944/", website: "https://arjunbhagoji.github.io" },
  // PhD Students
  { name: "Rahul Kumar Yadav", role: "PhD · with Parthe Pandit",                       group: "PhD Students",   initials: "RY",  color: "#16a34a", photo: "/Rahul.png",       photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/rahul-kumar-yadav-5275521bb/" },
  { name: "Lavinia Nongbri",   role: "PhD",                                             group: "PhD Students",   initials: "LN",  color: "#db2777", photo: "/lavinia.jpg",     photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/lavinia-nongbri/" },
  { name: "Sreeranjini TM",    role: "PhD · with Sharayu Moharir",                     group: "PhD Students",   initials: "STM", color: "#16a34a", photo: "/sreeranjini.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/sreeranjini-t-m-11197a228/" },
  // MS by Research
  { name: "Nachiketa Patil",   role: "MS by Research",                                  group: "MS by Research", initials: "NP",  color: "#9333ea", photo: "/Nachiketa.jpg",   photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/nachiketapatil123/" },
  { name: "Ritik",             role: "MS by Research · with Arpit Agarwal",             group: "MS by Research", initials: "Ri",  color: "#dc2626", photo: "/Ritik.jpg",       photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/ritik02/" },
  { name: "Sravani Gunnu",     role: "MS by Research",                                  group: "MS by Research", initials: "SG",  color: "#0891b2", photo: "/Sravani.jpg",     photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/sravani-gunnu-947073210/" },
  { name: "Suhas Rao",         role: "MS by Research · with Arpit Agarwal",             group: "MS by Research", initials: "SR",  color: "#16a34a", photo: "/suhas.jpg",       photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/suhas-rao-a08ba2293/" },
  // Pre-doc
  { name: "Tunir Ghosh",       role: "Pre-doc · with Arpit Agarwal and Parthe Pandit", group: "Pre-doc",        initials: "TG",  color: "#0891b2", photo: null,               photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/tunir-ghosh-b05309224/" },
  { name: "Prarabdh Shukla",   role: "Pre-doc",                                         group: "Pre-doc",        initials: "PS",  color: "#d97706", photo: "/Prarabdh.jpg",    photoPos: "center 30%", linkedin: "https://www.linkedin.com/in/prarabdh-shukla-a51a741bb/" },
  // IDDDP
  { name: "Nikhil Jha",        role: "IDDDP",                                           group: "IDDDP",          initials: "NJ",  color: "#16a34a", photo: "/nikhil.jpg",      photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/nikhil-jha-81809230b" },
  // B.Tech.
  { name: "Ansamit Mitra",     role: "B.Tech.",                                         group: "B.Tech.",        initials: "AM",  color: "#16a34a", photo: "/anasmit.png",     photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/anasmit-mitra-14a518286/" },
  // Alumni
  { name: "Hari Krishna Sahoo", role: "MSc",                                            group: "Alumni",         initials: "HS",  color: "#16a34a", photo: "/Hari.jpeg",       photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/hari-krishna-sahoo/" },
];

export const COLLABS = [
  { name: "Prateek Mittal",   inst: "Princeton University" },
  { name: "Daniel Cullina",   inst: "Penn State University" },
  { name: "Ben Zhao",         inst: "University of Chicago" },
  { name: "Nick Feamster",    inst: "University of Chicago" },
  { name: "Isabela Parisio",  inst: "King's College London" },
  { name: "Deborah Olukan",   inst: "King's College London" },
  { name: "Danish Pruthi",    inst: "Indian Institute of Science" },
  { name: "Krishna Pillutla", inst: "IIT Madras" },
];
