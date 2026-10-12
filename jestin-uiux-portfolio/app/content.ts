// All editable portfolio copy lives here. Items marked TODO are placeholders.
// Images: drop files into /public/images and set the `image` fields (e.g. "/images/hero.jpg").

export const profile = {
  name: "Rahul Raj",
  role: "Freelance AI Video Editor",
  availability: "Available for work",
  headline: "Videos that stop the scroll and tell your story",
  roles: ["Freelance AI Video Editor", "Creative Designer", "Motion Designer"],
  intro:
    "I'm a freelance video editor and creative designer from Kerala, India. I edit promos, reels, shorts and explainer videos, and use AI tools for ideation, storyboarding and content generation to deliver faster without cutting corners.",
  email: "rahulmr024@gmail.com",
  phone: "+91 94974 80842",
  heroImage: "/images/hero.png",
  resume: "#", // TODO: link to resume PDF, e.g. "/resume.pdf"
  socials: [
    { label: "Behance", href: "https://www.behance.net/rahulmr024" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rahulraj-manayail" },
  ],
};

// Poster designs shown in the fanned gallery under the role ticker (cards are 4:5; posters are centre-cropped unless `position: "top"`).
export const aboutImages = [
  { src: "/images/poster-1.jpg", alt: "July to August — Happy New Month poster", width: 736, height: 1104 },
  { src: "/images/poster-2.jpg", alt: "Indigenous Honey product poster", width: 736, height: 1313, position: "top" },
  { src: "/images/poster-3.jpg", alt: "To experience becoming — typographic poster", width: 736, height: 920 },
  { src: "/images/poster-4.jpg", alt: "Stone Tower — daily poster", width: 736, height: 1041 },
  { src: "/images/poster-5.jpg", alt: "One Step — story typography poster", width: 736, height: 1308 },
  { src: "/images/poster-6.jpg", alt: "Serenity — concept film poster", width: 736, height: 1042 },
];

export const skillGroups = [
  { title: "Video Editing", items: ["Multicam Editing", "Audio Syncing & Sound Editing", "Green Screen & Keying", "Visual Effects", "Color Theory"] },
  { title: "Motion & Design", items: ["Motion Graphics", "Animation", "Typography", "Branding & Identity", "Image Retouching", "Layout Design"] },
  { title: "AI Workflow", items: ["Generative AI Ideation", "AI Storyboarding", "AI-assisted Design", "ChatGPT", "Freepik AI"] },
  { title: "Tools", items: ["Premiere Pro", "After Effects", "Final Cut Pro", "DaVinci Resolve", "Photoshop", "Illustrator", "InDesign", "Figma", "Canva"] },
];

export const story =
  "I trained in multimedia at Image Creative Education, then learned professional post-production as a film editing intern alongside an Apple Certified Editor. Since then I've edited promos, reels and shorts at Saina Play, and today I'm a creative designer and video editor at Weft Technologies, Kochi, making explainer videos, social media content and brand visuals. I use generative AI for ideation, storyboarding and content creation, and now take on freelance projects for creators and brands.";

export const metrics = [
  { value: "5+", label: "Years of Experience" },
  { value: "3", label: "Studios & Companies" },
  { value: "10+", label: "Creative Tools Mastered" },
];

export type Project = { title: string; tags: string[]; image: string; href: string };

// TODO: swap in real project titles, thumbnails and Behance links.
export const projects: Project[] = [
  { title: "Brand Explainer Videos — Weft Technologies", tags: ["Explainer", "Motion Graphics", "Storytelling"], image: "", href: "https://www.behance.net/rahulmr024" },
  { title: "Promos, Reels & Shorts — Saina Play", tags: ["Promo", "Short-form", "YouTube"], image: "", href: "https://www.behance.net/rahulmr024" },
  { title: "Social Media Campaigns — Weft Technologies", tags: ["Social Media", "Branding", "AI-assisted"], image: "", href: "https://www.behance.net/rahulmr024" },
  { title: "Film & Ad Post-production — Cinema Salone", tags: ["Film", "Commercial", "Assembly Edit"], image: "", href: "https://www.behance.net/rahulmr024" },
];

export const services = [
  {
    title: "Video Editing",
    body: "Promotional videos, reels, shorts and YouTube content edited for Facebook, Instagram and YouTube, with multicam editing, sound syncing and color that keep viewers watching.",
    images: ["", ""],
  },
  {
    title: "Motion Graphics & Explainers",
    body: "Branded explainer videos and animated content built for clarity, motion rhythm and visual storytelling, including turning static visuals into dynamic video.",
    images: ["", ""],
  },
  {
    title: "AI-powered Content",
    body: "Generative AI for ideation, storyboarding and visuals, plus AI-assisted workflows that cut turnaround time while keeping quality high.",
    images: ["", ""],
  },
  {
    title: "Social Media & Brand Design",
    body: "Social media graphics, posters, flyers, brochures, web banners and presentations that stay on-brand across every platform.",
    images: ["", ""],
  },
];

export const process = [
  {
    title: "Brief & Story",
    body: "Send me your brief. We talk goals, audience, platform and budget, then I share a clear quote, timeline and the story plan before we start.",
  },
  {
    title: "Edit & Generate",
    body: "I cut the edit, generate any AI visuals, voice or music it needs, and add motion graphics, captions and color.",
  },
  {
    title: "Review & Deliver",
    body: "Revision rounds included, then final exports in every size you need, ready for YouTube, Reels, ads or your website.",
  },
];

// TODO: replace with real client feedback before publishing.
export const testimonials = [
  {
    quote: "Placeholder: a short quote from a client about working with Rahul on their video.",
    name: "Client Name",
    role: "Role, Company",
    image: "",
  },
  {
    quote: "Placeholder: a short quote from a client about the AI music video or ad.",
    name: "Client Name",
    role: "Role, Company",
    image: "",
  },
  {
    quote: "Placeholder: a short quote from a client about the short-form content series.",
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
  { title: "How I use AI without making videos look AI", tag: "Process", date: "Sep 2026", image: "", href: "#" },
  { title: "Turning static visuals into scroll-stopping video", tag: "Motion", date: "Aug 2026", image: "", href: "#" },
  { title: "How I use generative AI for storyboarding and ideation", tag: "AI Tools", date: "Jul 2026", image: "", href: "#" },
];

export const experience: { role: string; icon: "design" | "video" | "film"; company: string; period: string; points: string[] }[] = [
  {
    role: "Creative Designer & Video Editor",
    icon: "design",
    company: "Weft Technologies Pvt. Ltd., Smart City, Kochi",
    period: "May 2022 — Present",
    points: [
      "Create branded explainer videos with a focus on clarity, motion rhythm and visual storytelling.",
      "Design social media graphics, posters, flyers, brochures and web banners aligned with brand guidelines.",
      "Apply generative AI for ideation, storyboarding and content, and AI-assisted workflows to speed up poster creation.",
    ],
  },
  {
    role: "Video Editor",
    icon: "video",
    company: "Saina Infotainments / Saina Play",
    period: "Sep 2021 — May 2022",
    points: [
      "Edited promotional videos, reels, shorts and content videos for Facebook, Instagram and YouTube.",
      "Converted static visuals into dynamic video content, boosting engagement across digital platforms.",
    ],
  },
  {
    role: "Film Editing Intern",
    icon: "film",
    company: "Cinema Salone",
    period: "Sep 2021 — May 2022",
    points: [
      "Assembled footage and raw visuals for films and advertisements alongside an Apple Certified Editor.",
    ],
  },
];

export const education = [
  { title: "Higher Diploma in Multimedia", place: "Image Creative Education, Kottayam", period: "2016 — 2018" },
  { title: "Senior Secondary (Plus Two)", place: "GHSS Kidangara, Alappuzha", period: "2014 — 2016" },
];

export const footerLinks = {
  quick: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
  ],
  portfolio: projects.map((p) => ({ label: p.title.split(" — ")[0], href: p.href })),
};
