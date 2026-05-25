export const homeItems = [
  { title: "Hello!", body: "Welcome to my home page.", color: "#E8E8E4" },
  {
    type: "image",
    src: "./pictures/dogs.png",
    alt: "Julia's two dogs, Biggie and Sage.",
  },
  {
    title: "About",
    body: "MSCS student at Northeastern University in Boston, MA",
    color: "#D8E2DC",
  },
  {
    title: "Currently",
    body: "Preparing for my Climate Modeling and GIS Research Co-op at Liberty Mutual.",
    color: "#fcd5ce",
  },
  {
    type: "image",
    src: "./pictures/hawaii.png",
    alt: "A hike Julia did in Hawaii, showing a mountainous view.",
  },
  {
    title: "Education",
    body: "Boston College, Northeastern University",
    color: "#FEC5BB",
  },
  { title: "GitHub", body: "julia-weppler-1", color: "#f8edeb" },
  {
    type: "image",
    src: "./pictures/graduation.png",
    alt: "Julia and her roommates in white dresses for graduation.",
  },
  {
    title: "Interests",
    body: "Reading, yoga, data viz, marine ecology.",
    color: "#ffe5d9",
  },
  {
    title: "Get in touch",
    body: "weppler.j@northeastern.edu",
    color: "#fae1dd",
  },
  {
    type: "image",
    src: "./pictures/paddleboard.png",
    alt: "Julia paddleboarding at sunrise in the bay.",
  },
  {
    title: "Fun fact",
    body: "I love to paddleboard around Cape Cod's wetlands!",
    color: "#ffd7ba",
  },
  {
    type: "image",
    src: "./pictures/sage.png",
    alt: "Julia's dog, Sage, in the sun.",
  },
  {
    title: "Goals 2026",
    body: "Apply to PhD programs - Get accepted to IEEE VIS - Travel",
    color: "#fec89a",
  },
  {
    title: "Platforms and Tools",
    body: "Esri ArcGIS, Azure Blob, Azure Databricks, Azure SQL, Microsoft Graph, GitHub, Figma, Tableau",
    color: "#f8edeb",
  },
  { title: "Fun fact", body: "I am a vegan :)", color: "#ffd7ba" },
];

export const projects = [
  {
    name: "Visualization Literacy in United States Classrooms: A Qualitative Analysis of State K–12 Learning Standards",
    skills: "Qualitative Analysis, Data Visualization, Python, Excel",
    image: "../pictures/Weppler_RA_Poster.png",
    description:
      "This research analyzes STEM education standards from U.S. states to understand how visualization literacy — the ability to interpret graphical data — is taught in K–12 schools. By extracting and thematically analyzing over 5,000 visualization-related standards from 20 states, the work aims to build a framework describing how these skills develop across grade levels.",
  },
  {
    name: "Sparse Sensor Placement for Dissolved Oxygen Monitoring in the Gulf of Mexico Using Genetic Algorithms",
    skills: "Ridge Regression, Genetic Algorithms, Data Imputation",
    image: "../pictures/CS5100_Final.png",
    description:
      "This project tackles the problem of where to place a limited number of dissolved oxygen sensors in the Gulf of Mexico to best reconstruct water quality across the broader region. Using a genetic algorithm on real GCOOS observational data, the optimized sensor placements outperformed random placement by 33–56% in reconstruction RMSE across two spatial resolutions and six sensor budget levels.",
  },
  {
    name: "Stockholm Environment Institute Policy Research Add-in for Excel",
    skills: "Azure SQL, React, Excel",
    image: "../pictures/excel-pull.png",
    description:
      "As part of my internship at SEI, I modernized a large research database previously maintained in a shared Excel workbook by migrating it to an Azure SQL backend with a hybrid relational/EAV schema, enabling capabilities beyond Excel and improving cloud-based storage and synchronization. I then built a custom Excel Add-In for internal use at SEI that runs SQL queries to retrieve and update records directly from Excel, with version tracking to help resolve changes and prevent data loss.",
  },
];

export const timeline = [
  {
    date: "2021-08",
    displayDate: "August 2021",
    title: "Started Boston College",
    hover: "B.S. in Computer Science, minor in Environmental Studies.",
    category: "education",
  },
  {
    date: "2022-05",
    displayDate: "May 2022",
    title: "Finished freshman year",
    hover: "Coursework: CS1, CS2, Multivariable Calculus.",
    category: "education",
  },
  {
    date: "2023-02",
    displayDate: "February 2023",
    title: "First internship at Fenugreek Technologies",
    hover: "R&D intern on the fintech team.",
    category: "work",
  },
  {
    date: "2023-05",
    displayDate: "May 2023",
    title: "Finished sophomore year",
    hover:
      "Coursework: Computer Systems, Logic and Computation, Randomness, Linear Algebra.",
    category: "education",
  },
  {
    date: "2023-06",
    displayDate: "June 2023",
    title: "Internship @ Optum's Technology Development Program",
    hover:
      "Used LLMs to generate graph database queries and built a React component to display the results.",
    category: "work",
  },
  {
    date: "2023-08",
    displayDate: "August 2023",
    title: "Finished Optum internship",
    hover: "Received a return offer!",
    category: "work",
  },
  {
    date: "2024-05",
    displayDate: "May 2024",
    title: "Finished junior year",
    hover:
      "Coursework: Data Visualization, Data Structures and Algorithms, Software Engineering.",
    category: "education",
  },
  {
    date: "2024-06",
    displayDate: "June 2024",
    title: "Returned to Optum",
    hover: "Refactored a data pipeline to address tech debt.",
    category: "work",
  },
  {
    date: "2024-08",
    displayDate: "August 2024",
    title: "Finished second Optum internship",
    hover: "Received a full-time conversion offer!",
    category: "work",
  },
  {
    date: "2024-09",
    displayDate: "September 2024",
    title: "TA for Software Engineering",
    hover:
      "Worked under Dr. Maira Samary as a project manager for student teams.",
    category: "education",
  },
  {
    date: "2024-12",
    displayDate: "December 2024",
    title: "Accepted to MSCS at Northeastern",
    hover:
      "Wanted to learn more about data visualization and get involved in research.",
    category: "education",
  },
  {
    date: "2025-02",
    displayDate: "February 2025",
    title: "Joined Stockholm Environment Institute",
    hover:
      "Working on qualitative research projects and software development — still here!",
    category: "research",
  },
  {
    date: "2025-05",
    displayDate: "May 2025",
    title: "Graduated from Boston College",
    hover:
      "B.S. in Computer Science, minor in Environmental Studies, cum laude.",
    category: "education",
  },
  {
    date: "2025-07",
    displayDate: "July 2025",
    title: "Family moved to Cape Cod",
    hover: "A place I've visited every summer since I was little.",
    category: "personal",
  },
  {
    date: "2025-09",
    displayDate: "September 2025",
    title: "First semester at Northeastern",
    hover:
      "Took Programming Design Paradigms and Information Visualization Theory and Applications.",
    category: "education",
  },
  {
    date: "2026-01",
    displayDate: "January 2026",
    title: "Second semester at Northeastern",
    hover:
      "Took Foundations of AI and a Research Apprenticeship under Dr. Borkin in the Data Visualization Lab.",
    category: "research",
  },
  {
    date: "2026-04",
    displayDate: "April 2026",
    title: "First paper submission",
    hover:
      "Second author on a short paper with Carey Barry and faculty from the Data Visualization Lab.",
    category: "research",
  },
  {
    date: "2026-05",
    displayDate: "May 2026",
    title: "Started TA role at Northeastern",
    hover: "Service-Learning TA for Dr. Borkin's DS4200.",
    category: "education",
  },
  {
    date: "2026-07",
    displayDate: "July 2026",
    title: "First Co-op at Liberty Mutual",
    hover: "Catastrophe Modeling and GIS Research.",
    category: "work",
  },
];
