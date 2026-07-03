// pubRefs: indices into PUBLICATIONS array
export const RESEARCH = [
  {
    icon: "⬡",
    title: "Auditing complex deployed models",
    desc: "Do machine learning models perform well when a fraction of their training data is compromised? Are they resilient to out-of-distribution or even adversarial inputs? How are deployed models regulated?",
    pubRefs: [8, 1, 3],
    refs: ["ECCV 2018", "CHI 2024", "KDD 2024"],
  },
  {
    icon: "∂",
    title: "Proving fundamental limits on reliability",
    desc: "Is it possible to determine how robust any model can be under adverse conditions such as training- and test-time attacks? What can we say about the ease of learning such models, and their compliance with regulations?",
    pubRefs: [7, 6, 5],
    refs: ["NeurIPS 2018", "NeurIPS 2019", "ICML 2021"],
  },
  {
    icon: "◈",
    title: "Building reliable models",
    desc: "Can we build models that are resilient against multiple types of adverse conditions? How do we utilize knowledge of fundamental limits to build better models? Are oft-overlooked methods such as kernel machines the path to interpretable and robust models? Can machine learning models outperform rule-based models in security-critical domains?",
    pubRefs: [4, 0],
    refs: ["NeurIPS 2022", "ArXiv 2025"],
  },
  {
    icon: "⊕",
    title: "Learning with distributed data and models",
    desc: "In domains where data is scattered across entities with privacy and proprietary data concerns, how can performant models be trained? Can synthetic data and generative models be used to alleviate these concerns? Are distributed models reliable?",
    pubRefs: [2, 3],
    refs: ["ArXiv 2024", "KDD 2024"],
  },
];

export const TEAM = [
  { name: "Arjun Bhagoji", role: "Principal Investigator · IIT Bombay", group: "Faculty", initials: "AB", color: "#2563c4", photo: "/arjun.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/arjun-bhagoji-18617944/",website: "https://arjunbhagoji.github.io" },
  { name: "Rahul Kumar Yadav", role: "PhD · with Parthe Pandit", group: "PhD Students", initials: "RY", color: "#16a34a", photo: "/Rahul.png", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/rahul-kumar-yadav-5275521bb/" },
  { name: "Lavinia Nongbri", role: "PhD", group: "PhD Students", initials: "LN", color: "#db2777", photo: "/lavinia.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/lavinia-nongbri/" },
  { name: "Nachiketa Patil", role: "MS by Research", group: "MS by Research", initials: "NP", color: "#9333ea", photo: "/Nachiketa.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/nachiketapatil123/" },
  { name: "Ritik", role: "MS by Research · with Arpit Agarwal", group: "MS by Research", initials: "Ri", color: "#dc2626", photo: "/Ritik.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/ritik02/" },
  { name: "Sravani Gunnu", role: "MS by Research", group: "MS by Research", initials: "SG", color: "#0891b2", photo: "/Sravani.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/sravani-gunnu-947073210/" },
  { name: "Tunir Ghosh", role: "Pre-doc MS by Research with Arpit with Parthe Pandit", group: "Pre-doc", initials: "TG", color: "#0891b2", linkedin: "https://www.linkedin.com/in/tunir-ghosh-b05309224/" },
  { name: "Prarabdh Shukla", role: "Pre-doc", group: "Pre-doc", initials: "PS", color: "#d97706", photo: "/Prarabdh.jpg", photoPos: "center 30%", linkedin: "https://www.linkedin.com/in/prarabdh-shukla-a51a741bb/" },
  { name: "Nikhil Jha", role: "IDDDP", group: "IDDDP", initials: "NJ", color: "#16a34a", photo: "/nikhil.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/nikhil-jha-123456789/" },
  { name: "Ansamit Mitra", role: "B.Tech.", group: "B.Tech.", initials: "AM", color: "#16a34a", photo: "/anasmit.png", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/anasmit-mitra-14a518286/" },
  { name: "Hari Krishna Sahoo", role: "MSc", group: "Alumni", initials: "HS", color: "#16a34a", photo: "/Hari.jpeg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/hari-krishna-sahoo/" },
  { name: "Suhas Rao", role: "MS by Research · with Arpit Agarwal", group: "MS by Research", initials: "SR", color: "#16a34a", photo: "/suhas.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/suhas-rao-a08ba2293/" },
  { name: "Sreeranjini TM", role: "PhD · with Sharayu Moharir", group: "PhD Students", initials: "STM", color: "#16a34a", photo: "/sreeranjini.jpg", photoPos: "center 20%", linkedin: "https://www.linkedin.com/in/sreeranjini-t-m-11197a228/" },

];

export const PUBLICATIONS = [
  { year: "2025", title: "Adapting to Evolving Adversaries with Regularized Continual Robust Training", venue: "ArXiv preprint", url: "https://arxiv.org/abs/2502.04248" },
  { year: "2024", title: '"Community Guidelines Make this the Best Party on the Internet": An In-Depth Study of Online Platforms\' Content Moderation Policies', venue: "CHI 2024", url: "https://dl.acm.org/doi/full/10.1145/3613904.3642333" },
  { year: "2024", title: "MYCROFT: Towards Effective and Efficient External Data Augmentation", venue: "ArXiv preprint", url: "https://arxiv.org/abs/2410.08432" },
  { year: "2024", title: "NetDiffusion: Network Data Augmentation Through Protocol-Constrained Traffic Generation", venue: "ACM KDD 2024", url: "https://dl.acm.org/doi/abs/10.1145/3639037" },
  { year: "2022", title: "Understanding Robust Learning through the Lens of Representation Similarities", venue: "NeurIPS 2022", url: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/e1fa017a312368906411501bbd27a1d6-Abstract-Conference.html" },
  { year: "2021", title: "Lower Bounds on Cross-Entropy Loss in the Presence of Test-time Adversaries", venue: "ICML 2021", url: "https://proceedings.mlr.press/v139/bhagoji21a.html" },
  { year: "2019", title: "Lower Bounds on Adversarial Robustness from Optimal Transport", venue: "NeurIPS 2019", url: "https://proceedings.neurips.cc/paper/2019/hash/02bf86214e264535e3412283e817deaa-Abstract.html" },
  { year: "2018", title: "PAC-learning in the presence of adversaries", venue: "NeurIPS 2018", url: "https://proceedings.neurips.cc/paper/2018/hash/8f85517967795eeef66c225f7883bdcb-Abstract.html" },
  { year: "2018", title: "Practical Black-box Attacks on Deep Neural Networks using Efficient Query Mechanisms", venue: "ECCV 2018", url: "https://openaccess.thecvf.com/content_ECCV_2018/html/Arjun_Nitin_Bhagoji_Practical_Black-box_Attacks_ECCV_2018_paper.html" },
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
