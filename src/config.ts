// Get default content for initial render (defaults to English)
const defaultContent = (() => {
  const content = {
    en: {
      title: "Final year Master's student in Computer Science focused on AI and Data Science",
      description: "My portfolio",
      aboutMe: "Final year computer science student, seeking an end-of-studies internship in AI or data science to apply my skills in machine learning and data analysis to concrete projects. I am interested in aeronautics, avionics, space, artificial intelligence, and energy.",
      projects: [
        {
          name: "LLM conversational agent integrated into an interactive map (AgentMap)",
          description: `Geospatial data processing (Pandas) and automatic query classification.
— Converting requests to SQL via LLM and querying the database via API.
— Visualizing results on interactive maps.`,
          link: "",
          skills: ["Python", "Dash", "PostgreSQL", "API REST"],
        },
        {
          name: "Breast cancer classification from medical scans",
          description: `Design of a neural network (CNN) to analyze images and determine the presence of cancer.
⇒ Model that sorts scans to highlight at-risk cases and reduce the workload for doctors.`,
          link: "https://github.com/musab01k/Breast-Cancer/tree/main",
          skills: ["Python", "CNN", "TensorFlow", "Keras"],
        },
        {
          name: "Cand Auto (personal project)",
          description: `Design of an automatic job application sending script, integrating the
OpenAI API for dynamic generation of personalized emails and cover letters, automatically sent to
a dataset of collected email addresses.`,
          link: "",
          skills: [],
        },
        {
          name: "Battery Life Span",
          description: `Design of several machine learning models that allow
         predicting battery lifespan based on its characteristics.`,
          link: "https://github.com/musab01k/Battery-Life-Span",
          skills: ["Python", "Machine Learning", "matplotlib", "numpy", "pandas"],
        },
      ],
      experience: [
        {
          company: "Internship abroad, Turkish Aerospace Industries (TUSAS)",
          title: "Intern",
          dateRange: "July 2025",
          bullets: [
            "Participated in the analysis and exploitation of data from internal systems",
            "Identified significant trends, correlations between various variables and presented them effectively",
            "Prepared technical reports and actionable recommendations based on analyses",
            "Contributed to the development of an interactive dashboard for data visualization and analysis"
          ],
        },
      ],
      education: [
        {
          school: "University of Strasbourg",
          degree: "Master's in Data Science and Complex Systems",
          dateRange: "2024 - 2026",
          achievements: [],
        },
        {
          school: "University of Strasbourg",
          degree: "Bachelor's in Computer Science",
          dateRange: "2021 - 2024",
          achievements: [],
        },
      ],
    },
    fr: {
      title: "Etudiant en dernière année de Master Informatique axée sur l'IA et la Data Science",
      description: "Mon portfolio",
      aboutMe: "Étudiant en dernière année d'informatique, je cherche un stage de fin d'études en IA ou data science afin d'appliquer mes compétences en apprentissage automatique et analyse de données à des projets concrets. Je suis interessé par l'aéronautique, l'avionique, l'espace, l'intelligence artificielle, et l'energie.",
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
          description: `Conception d'un réseau de neurones (CNN) pour analyser les images et déterminer la présence de cancer.
⇒ Modèle permettant de trier les scans pour mettre en avant les cas à risque et alléger la charge aux médecins.`,
          link: "https://github.com/musab01k/Breast-Cancer/tree/main",
          skills: ["Python", "CNN", "TensorFlow", "Keras"],
        },
        {
          name: "Cand Auto (projet personnel)",
          description: `Conception d'un script d'envoi automatique de candidatures, intégrant l'API
OpenAI pour la génération dynamique de mails et lettres de motivation personnalisés, envoyés automatiquement vers
un dataset d'adresses e-mail collectées.`,
          link: "",
          skills: [],
        },
        {
          name: "Battery Life Span",
          description: `Conception de plusieurs modèles de machine learning qui permettent de
         prédire la durée de vie d'une batterie en fonction de ses caractéristiques.`,
          link: "https://github.com/musab01k/Battery-Life-Span",
          skills: ["Python", "Machine Learning", "matplotlib", "numpy", "pandas"],
        },
      ],
      experience: [
        {
          company: "Stage à l'étranger, Turkish Aerospace Industries (TUSAS)",
          title: "Stagiaire",
          dateRange: "Juillet 2025",
          bullets: [
            "Participation à l'analyse et à l'exploitation des données provenant des systèmes internes",
            "Identifier les tendances significatives, les corrélations entre diverses variables et les présenter de manière efficace",
            "Préparer des rapports techniques et des recommandations exploitables basées sur ses analyses",
            "Contribuer au développement d'un tableau de bord interactif pour la visualisation et l'analyse des données"
          ],
        },
      ],
      education: [
        {
          school: "Université de Strasbourg",
          degree: "Master Sciences de données et systèmes complexes",
          dateRange: "2024 - 2026",
          achievements: [],
        },
        {
          school: "Université de Strasbourg",
          degree: "Licence d'informatique",
          dateRange: "2021 - 2024",
          achievements: [],
        },
      ],
    },
  };
  return content.en; // Default to English
})();

export const siteConfig = {
  name: "Musab Karatas",
  accentColor: "#1d4ed8",
  social: {
    email: "musab01.k@gmail.com",
    linkedin: "https://www.linkedin.com/in/musab-karatas-564651301/",
    github: "https://github.com/musab01k",
  },
  skills: ["Python", "C", "C++", "Java", "C#", "R", "SQL", "NoSQL", "PostgreSQL", "API REST", "Javascript", "Seaborn", "Matplotlib"],
  // Default French content for initial render
  title: defaultContent.title,
  description: defaultContent.description,
  aboutMe: defaultContent.aboutMe,
  projects: defaultContent.projects,
  experience: defaultContent.experience,
  education: defaultContent.education,
};

export function getSiteContent(lang: 'fr' | 'en' = 'en') {
  const content = {
    fr: {
      title: "Étudiant en dernière année de Master Informatique axée sur l'IA et la Data Science",
      description: "Mon portfolio",
      aboutMe:
        "Étudiant en dernière année d'informatique, je cherche un stage de fin d'études en IA ou data science afin d'appliquer mes compétences en apprentissage automatique et analyse de données à des projets concrets. Je suis interessé par l'aéronautique, l'avionique, l'espace, l'intelligence artificielle, et l'energie.",
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
            `Conception d'un réseau de neurones (CNN) pour analyser les images et déterminer la présence de cancer.
⇒ Modèle permettant de trier les scans pour mettre en avant les cas à risque et alléger la charge aux médecins.`,
          link: "https://github.com/musab01k/Breast-Cancer/tree/main",
          skills: ["Python", "CNN", "TensorFlow", "Keras"],
        },
        {
          name: "Cand Auto (projet personnel)",
          description:
            `Conception d'un script d'envoi automatique de candidatures, intégrant l'API
OpenAI pour la génération dynamique de mails et lettres de motivation personnalisés, envoyés automatiquement vers
un dataset d'adresses e-mail collectées.`,
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
          company: "Stage à l'étranger, Turkish Aerospace Industries (TUSAS)",
          title: "Stagiaire",
          dateRange: "Juillet 2025",
          bullets: [
            "Participation à l'analyse et à l'exploitation des données provenant des systèmes internes",
            "Identifier les tendances significatives, les corrélations entre diverses variables et les présenter de manière efficace",
            "Préparer des rapports techniques et des recommandations exploitables basées sur ses analyses",
            "Contribuer au développement d'un tableau de bord interactif pour la visualisation et l'analyse des données"
          ],
        },
      ],
      education: [
        {
          school: "Université de Strasbourg",
          degree: "Master Sciences de données et systèmes complexes",
          dateRange: "2024 - 2026",
          achievements: [],
        },
        {
          school: "Université de Strasbourg",
          degree: "Licence d'informatique",
          dateRange: "2021 - 2024",
          achievements: [],
        },
      ],
    },
    en: {
      title: "Final year Master's student in Computer Science focused on AI and Data Science",
      description: "My portfolio",
      aboutMe:
        "Final year computer science student, seeking an end-of-studies internship in AI or data science to apply my skills in machine learning and data analysis to concrete projects. I am interested in aeronautics, avionics, space, artificial intelligence, and energy.",
      projects: [
        {
          name: "LLM conversational agent integrated into an interactive map (AgentMap)",
          description: `Geospatial data processing (Pandas) and automatic query classification.
— Converting requests to SQL via LLM and querying the database via API.
— Visualizing results on interactive maps.`,
          link: "",
          skills: ["Python", "Dash", "PostgreSQL", "API REST"],
        },
        {
          name: "Breast cancer classification from medical scans",
          description:
            `Design of a neural network (CNN) to analyze images and determine the presence of cancer.
⇒ Model that sorts scans to highlight at-risk cases and reduce the workload for doctors.`,
          link: "https://github.com/musab01k/Breast-Cancer/tree/main",
          skills: ["Python", "CNN", "TensorFlow", "Keras"],
        },
        {
          name: "Cand Auto (personal project)",
          description:
            `Design of an automatic job application sending script, integrating the
OpenAI API for dynamic generation of personalized emails and cover letters, automatically sent to
a dataset of collected email addresses.`,
          link: "",
          skills: [],
        },
        {
          name: "Battery Life Span",
          description:
            `Design of several machine learning models that allow
         predicting battery lifespan based on its characteristics.`,
          link: "https://github.com/musab01k/Battery-Life-Span",
          skills: ["Python", "Machine Learning", "matplotlib", "numpy", "pandas"],
        },
      ],
      experience: [
        {
          company: "Internship abroad, Turkish Aerospace Industries (TUSAS)",
          title: "Intern",
          dateRange: "July 2025",
          bullets: [
            "Participated in the analysis and exploitation of data from internal systems",
            "Identified significant trends, correlations between various variables and presented them effectively",
            "Prepared technical reports and actionable recommendations based on analyses",
            "Contributed to the development of an interactive dashboard for data visualization and analysis"
          ],
        },
      ],
      education: [
        {
          school: "University of Strasbourg",
          degree: "Master's in Data Science and Complex Systems",
          dateRange: "2024 - 2026",
          achievements: [],
        },
        {
          school: "University of Strasbourg",
          degree: "Bachelor's in Computer Science",
          dateRange: "2021 - 2024",
          achievements: [],
        },
      ],
    },
  };

  return content[lang];
}
