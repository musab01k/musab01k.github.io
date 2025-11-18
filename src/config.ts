export const siteConfig = {
  name: "Musab Karatas",
  title: "Etudiant en dernière année de Master Informatique axée sur l'IA et la Data Science",
  description: "Mon portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "musab01.k@gmail.com",
    linkedin: "https://www.linkedin.com/in/musab-karatas-564651301/",
    github: "https://github.com/musab01k",
  },
  aboutMe:
    "Étudiant en dernière année d’informatique, je cherche un stage de fin d’études en IA ou data science afin d’appliquer mes compétences en apprentissage automatique et analyse de données à des projets concrets. Je suis interessé par l'aéronautique, l'avionique, l'espace, l'intelligence artificielle, et l'energie.",
  skills: ["Python", "C", "C++", "Java", "C#", "R", "SQL", "NoSQL", "PostgreSQL", "API REST", "Javascript", "Seaborn", "Matplotlib"],
  projects: [
    {
      name: "Agent conversationnel LLM intégré à une carte interactive (AgentMap)",
      description: `Traitement de données géospatiales (Pandas) et classification automatique des requêtes.
— Conversion des demandes en SQL via LLM et interrogation de la base par API.
— Visualisation des résultats sur des cartes interactives.`,
      link: "",
      skills: ["Python", "Dash", "PostgreSQL", "API REST"],
    },
    {
      name: "Classification du cancer du sein à partir de scans médicaux ",
      description:
        `onception d’un réseau de neurones (CNN) pour analyser les images et déterminer la présence de cancer.
⇒ Modèle permettant de trier les scans pour mettre en avant les cas à risque et alléger la charge aux médecins.`,
      link: "https://github.com/musab01k/Breast-Cancer/tree/main",
      skills: ["Python", "CNN", "TensorFlow", "Keras"],
    },
    {
      name: "Cand Auto (projet personnel)",
      description:
        `Conception d’un script d’envoi automatique de candidatures, intégrant l’API
OpenAI pour la génération dynamique de mails et lettres de motivation personnalisés, envoyés automatiquement vers
un dataset d’adresses e-mail collectées.`,
      link: "",
      skills: [],
    },

    {
      name: "Battery Life Span",
      description:
        `Conception de plusieurs modèles de machine learning qui permettent de
         prédire la durée de vie d'une batterie en fonction de ses caractéristiques.`,
      link: "https://github.com/musab01k/Battery-Life-Span",
      skills: ["Python", "Machine Learning", "matplotlib", "numpy", "pandas"],
    },
  ],
  experience: [
    {
      company: "Stage à l’étranger, Turkish Aerospace Industries (TUSAS)",
      title: "Stagiaire",
      dateRange: "Juillet 2025",
      bullets: [
        "Participation à l’analyse et à l’exploitation des données provenant des systèmes internes",
        "Identifier les tendances significatives, les corrélations entre diverses variables et les présenter de manière efficace",
        "Préparer des rapports techniques et des recommandations exploitables basées sur ses analyses",
        "Contribuer au développement d’un tableau de bord interactif pour la visualisation et l’analyse des données"
      ],
    },
  ],
  education: [
    {
      school: "Université de Strasbourg",
      degree: "Master Sciences de données et systèmes complexes",
      dateRange: "2024 - 2026",
      achievements: [
      ],
    },
    {
      school: "Université de Strasbourg",
      degree: "Licence d'informatique",
      dateRange: "2021 - 2024",
      achievements: [
      ],
    },
  ],
};
