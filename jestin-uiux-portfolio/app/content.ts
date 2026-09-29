// All editable portfolio copy lives here. Items marked TODO are placeholders.
// Images: drop files into /public/images and set the `image` fields (e.g. "/images/hero.jpg").

export const profile = {
  name: "Jestin",
  role: "UI/UX Designer",
  roles: ["UI/UX Designer", "Graphic Designer", "Vibe Coder"],
  intro:
    "I design clear, human interfaces and bold visual identities, then vibe-code them into fast, working products. Figma for the thinking, AI-assisted code for the shipping.",
  email: "hello@jestin.design", // TODO
  phone: "+91 00000 00000", // TODO
  heroImage: "", // TODO: cut-out portrait (transparent PNG)
  resume: "#", // TODO: link to resume PDF, e.g. "/resume.pdf"
  socials: [
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

// Five photos shown in the fanned gallery under the name ticker. TODO
export const aboutImages = ["", "", "", "", ""];

export const skillGroups = [
  { title: "UI/UX Design", items: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"] },
  { title: "Graphic Design", items: ["Brand Identity", "Logo Design", "Typography", "Print & Packaging", "Social Media"] },
  { title: "Vibe Coding", items: ["Next.js", "Tailwind CSS", "Framer", "Cursor", "Claude"] },
  { title: "Tools", items: ["Figma", "Illustrator", "Photoshop", "After Effects", "Notion"] },
];

export const story =
  "I started out making posters and logos, fell in love with how people actually use things, and moved into product design. Today I work end to end: researching the problem, designing the experience, crafting the visuals and, with AI-assisted development, building the thing itself. I care about clarity, detail and shipping work that feels good to use.";

export const metrics = [
  { value: "4+", label: "Years of Experience" },
  { value: "60+", label: "Completed Projects" },
  { value: "25+", label: "Happy Clients" },
];

export type Project = { title: string; tags: string[]; image: string; href: string };

export const projects: Project[] = [
  { title: "Pulse — Health Tracking App", tags: ["UI/UX", "Mobile", "Figma"], image: "", href: "#" },
  { title: "Northwind — Brand Identity", tags: ["Branding", "Logo", "Guidelines"], image: "", href: "#" },
  { title: "Ledger — SaaS Dashboard", tags: ["UI Design", "Design System"], image: "", href: "#" },
  { title: "Studio — Vibe-coded Site Builder", tags: ["Next.js", "Tailwind", "AI"], image: "", href: "#" },
];

export const services = [
  {
    title: "UI/UX Design",
    body: "Research, user flows, wireframes and high-fidelity interfaces for web and mobile products that are easy to use and good to look at.",
    images: ["", ""],
  },
  {
    title: "Brand & Graphic Design",
    body: "Logos, visual identities, social kits, packaging and print that give your brand a clear, memorable voice.",
    images: ["", ""],
  },
  {
    title: "Design Systems",
    body: "Reusable components, tokens and documentation so your team can design and build consistently at speed.",
    images: ["", ""],
  },
  {
    title: "Vibe-coded Websites",
    body: "Landing pages, portfolios and MVPs built from design to live site using AI-assisted development.",
    images: ["", ""],
  },
];

export const process = [
  {
    title: "Discover & Define",
    body: "We talk goals, users and constraints. I research, audit what exists and define what success looks like.",
  },
  {
    title: "Design & Prototype",
    body: "Flows, wireframes and polished visuals, with clickable prototypes so you can feel it before it's built.",
  },
  {
    title: "Build & Launch",
    body: "Clean handoff to your developers, or I vibe-code and ship it myself, polished and ready to grow.",
  },
];

// TODO: replace with real client feedback before publishing.
export const testimonials = [
  {
    quote: "Placeholder: a short quote from a client about working with Jestin on their product.",
    name: "Client Name",
    role: "Role, Company",
    image: "",
  },
  {
    quote: "Placeholder: a short quote from a client about the brand identity project.",
    name: "Client Name",
    role: "Role, Company",
    image: "",
  },
  {
    quote: "Placeholder: a short quote from a client about the website that was designed and built.",
    name: "Client Name",
    role: "Role, Company",
    image: "",
  },
];

// TODO: client logos (image paths). Names are shown until logos are added.
export const clients = [
  { name: "Client One", logo: "" },
  { name: "Client Two", logo: "" },
  { name: "Client Three", logo: "" },
  { name: "Client Four", logo: "" },
  { name: "Client Five", logo: "" },
  { name: "Client Six", logo: "" },
];

export const posts = [
  { title: "Designing with AI without losing your taste", tag: "Process", date: "Sep 2026", image: "", href: "#" },
  { title: "Five type pairings I keep coming back to", tag: "Graphic Design", date: "Aug 2026", image: "", href: "#" },
  { title: "From Figma to a live site in a weekend", tag: "Vibe Coding", date: "Jul 2026", image: "", href: "#" },
];

export const footerLinks = {
  quick: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
  ],
  portfolio: projects.map((p) => ({ label: p.title.split(" — ")[0], href: p.href })),
};
