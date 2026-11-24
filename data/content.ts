/**
 * ALL website content lives here. Edit this file to update the site.
 * Anything marked TODO is a placeholder: the resume did not contain it.
 */

export const profile = {
  name: "Garima Paliwal",
  firstName: "Garima",
  role: "Front-end developer",
  headline: "I build responsive websites that are simple to use.",
  intro:
    "I'm a B.Sc. Computer Science student in Nagpur, building real projects with HTML, CSS and JavaScript, from a college search tool to a laptop store.",
  location: "Nagpur, India",
  email: "garimaplilwa@gmail.com", // TODO: check spelling (resume says "plilwa", possibly "paliwal")
  phone: "+91 9579378131",
  photo: "/garima.jpg",
  resumeFile: "/Garima_Paliwal_Resume.docx",
  siteUrl: "https://your-site.vercel.app", // TODO: replace after deploying
  links: {
    github: "https://github.com/garima0713",
    linkedin: "https://www.linkedin.com/in/garima-paliwal2006/",
  },
};

export const about = {
  paragraphs: [
    "I'm in the third year of my B.Sc. in Computer Science, and front-end development is where I enjoy working most. I like turning an idea into a page someone can open, search, filter and use without needing instructions.",
    "My projects so far are built with plain HTML, CSS and JavaScript. Working this way taught me how search, filters, carts and saved lists work, and how to keep an interface clear on any screen size.",
    "I'm curious about emerging technologies and learn quickly. I'm looking for an opportunity to apply my skills, keep growing, and work with a team on real products.",
  ],
  focus: ["Front-end development", "Responsive web design", "Problem solving and debugging"],
};

export const education = [
  {
    degree: "Bachelor of Science (B.Sc.), Computer Science",
    institution: "", // TODO: add your college / university name
    period: "2024 to 2027",
    detail: "Currently in 3rd year.",
  },
];

export const skillGroups = [
  { title: "Programming languages", items: ["Python", "PHP", "HTML", "CSS", "JavaScript", "C", "C++", "Java"] },
  { title: "Web development", items: ["Front-end development", "Responsive web design"] },
  { title: "Tools and technologies", items: ["VS Code", "Git (basic)"] },
  { title: "Core skills", items: ["Problem solving", "Debugging", "Quick learning"] },
];

/** GitHub username. All project GitHub and ZIP links are built from it. */
const GITHUB_USERNAME = "garima0713";
const repoUrl = (repo: string) => `https://github.com/${GITHUB_USERNAME}/${repo}`;
const zipUrl = (repo: string) => `${repoUrl(repo)}/archive/HEAD.zip`;

export type Screenshot = {
  src: string; // path inside /public, e.g. "/projects/collegefinder/search.webp"
  alt: string;
  label: string; // short tab name
};

export type Project = {
  title: string;
  summary: string;
  tech: string[];
  features: string[];
  contribution: string;
  site: string; // Path of the working site inside /public. The project heading opens it in a new tab.
  github?: string; // Repository URL. The GitHub button only shows when this is set.
  zip?: string; // Repository ZIP URL. The Download ZIP button only shows when this is set.
  livePreview?: string; // Used when there are no screenshots: shows the real running site in a framed preview.
  screenshots?: Screenshot[]; // Real screenshots from the project. First one is shown by default.
};

export const projects: Project[] = [
  {
    title: "College Finder Website",
    summary:
      "A college search website to find, compare and shortlist colleges across India. Students can filter by state and district and check fees, exams and placements.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    features: [
      "College search with live name suggestions",
      "State and district filters",
      "Fees, entrance exam and placement details for 80+ colleges",
      "College details page with ratings and student reviews",
      "Add to Favourites, saved in the browser",
      "Compare two colleges side by side, with a recommended pick",
      "Application form with input validation",
      "Login and registration pages, plus a dark mode",
    ],
    contribution:
      "Designed and built the full site with HTML, CSS and JavaScript, using LocalStorage for favourites and login.",
    site: "/projects/college-finder/index.html",
    github: repoUrl("college-finder-website"),
    zip: zipUrl("college-finder-website"),
    screenshots: [
      { src: "/projects/collegefinder/search.webp", label: "Search", alt: "CollegeFinder India search page with a name suggestion, state and district filters, and a college result card showing fees, exam and placement" },
      { src: "/projects/collegefinder/details.webp", label: "Details", alt: "CollegeFinder India details page for VNIT Nagpur showing fees, entrance exam and placement" },
      { src: "/projects/collegefinder/compare.webp", label: "Compare", alt: "CollegeFinder India comparison of VNIT Nagpur and IIT Bombay on fees, exam and placement, with a recommended college" },
      { src: "/projects/collegefinder/favorites.webp", label: "Favourites", alt: "CollegeFinder India favourites page listing three saved colleges" },
      { src: "/projects/collegefinder/login.webp", label: "Login", alt: "CollegeFinder India login page" },
    ],
  },
  {
    title: "Laptop Shopping Website",
    summary:
      "A responsive laptop store where users can search products, save favourites to a wishlist and add items to a cart.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Product search", "Cart", "Wishlist", "Login", "Product detail pages"],
    contribution: "Built the shopping interface with search, cart, wishlist and product pages in HTML, CSS and JavaScript.",
    site: "/projects/laptop-shopping/index.html",
    github: repoUrl("laptop-shopping--website"),
    zip: zipUrl("laptop-shopping--website"),
    livePreview: "/projects/laptop-shopping/index.html",
  },
];

/** Add internships, volunteering or leadership roles here. Leave empty until you have them. */
export const experience: { role: string; org: string; period: string; points: string[] }[] = [];

export const achievements = [
  { title: "Certificate Course in Computer Awareness", issuer: "" }, // TODO: add issuer and year
  { title: "Certificate Course in Employment Skills", issuer: "" }, // TODO: add issuer and year
];

export const interests = [
  "Front-end development",
  "Responsive web design",
  "Emerging technologies",
  "Problem solving",
];
