export const projects = [
    {
        slug: "endoaware",
        title: "EndoAware",
        short: "An endometriosis risk prediction screening tool.",
        overview:
          "A web survey app that analyses user self-reported symptoms, and generates a risk summary for endometriosis.",
      
        sections: [
          {
            title: "Motivation",
            text: "The development of this tool was motivated by the high diagnosis delay, and underrecognition of endometriosis. A web application pre-screening approach was designed to not only support earlier recognition of symptoms and improve the diagnostic delay of endometriosis but also increase awareness of the disease.",
          },
          {
            title: "Approach",
            text: "Multiple machine learning models were trained in Python using a processed dataset and evaluated. The most suitable model was integrated into a web-based frontend application using FastAPI. SHapley Additive exPlanations (SHAPs) was also incorporated to highlight influential symptoms, enhancing transparency. Due to ethical considerations and the limited scope of the project, no user data is stored."},
        ],
        tech: ["Python", "FastAPI", "HTML/CSS/JS"],
        links: [
          { label: "GitHub (WIP)", href: "https://github.com" },
        ],
      },
  ];
  