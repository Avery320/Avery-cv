// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Avery Tsai | CV and Portfolio';
export const SITE_DESCRIPTION = 'A personal CV, projects, and robotics portfolio built with Astro and TailwindCSS.';
export const TRANSITION_API = true;

export const NAV_ITEMS = [
  { id: "home", label: "Home", path: "" },
  { id: "cv", label: "CV", path: "cv" },
  { id: "projects", label: "Projects", path: "projects" },
  { id: "robotics", label: "Robotics", path: "robotics" },
  { id: "architecture", label: "Architecture", path: "architecture" },
  { id: "fabrication", label: "Fabrication", path: "fabrication" },
  { id: "paramtric-design", label: "ParametricDesign", path: "paramtric-design" },
] as const;
