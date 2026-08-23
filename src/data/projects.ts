import type { ImageMetadata } from "astro";
import projectUpdates from "./project-updates.json";

export interface ProjectResource {
  id: string;
  title: string;
  url?: string;
  updatedAt?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  detailPath: string;
  image: string | ImageMetadata;
  resources: ProjectResource[];
}

const robosimResources: ProjectResource[] = [
  {
    id: "developer-guide",
    title: "Developer Guide",
    url: "https://avery320.github.io/robot-demo/document/",
    updatedAt: projectUpdates.robosim,
  },
  {
    id: "web-demo",
    title: "Web Demo",
    url: "https://avery320.github.io/robot-demo/javascript/example/bundle/main.html",
    updatedAt: projectUpdates.robosim,
  },
];

export const portfolioPageResources: Record<string, ProjectResource[]> = {
  "robotics/robosim": robosimResources,
  "robotics/gh-ros2": [
    {
      id: "developer-guide",
      title: "Developer Guide",
    },
  ],
  "robotics/robosight": [
    {
      id: "robosight",
      title: "RoboSight",
      url: "https://github.com/Avery320/RoboSight",
      updatedAt: projectUpdates.robosight,
    },
  ],
  "fabrication/robotic-nonplanar-printing": [
    {
      id: "fdm-branch-slicer",
      title: "GitHub",
      url: "https://github.com/Avery320/fdm_branch_slicer",
      updatedAt: projectUpdates["fdm-branch-slicer"],
    },
  ],
  "projects/smart-construction-concrete-formwork": [
    {
      id: "abri-research",
      title: "Research",
      url: "https://www.abri.gov.tw/News_Content_Table.aspx?n=807&sms=9489&s=339180",
    },
  ],
  "architecture/meinong-sports-park": [
    {
      id: "project-website",
      title: "Project Website",
      url: "https://www.cmchaoarch.com/index.php?route=project/project_detail&language=zh-tw&path=21",
    },
  ],
  "paramtric-design/mycelium-vault": [
    {
      id: "presentation",
      title: "Presentation",
      url: "https://docs.google.com/presentation/d/1mah1zHW9VVOF0YwNzGk1W8xosaDb9_6FD9MjbuiHnvs/edit?slide=id.g264562b21dc_14_245#slide=id.g264562b21dc_14_245",
    },
  ],
};

export const getPortfolioPageResources = (detailPath: string) => portfolioPageResources[detailPath] ?? [];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "robosim",
    title: "RoboSim",
    description: "Human-Computer Interface | ROS | Robotics | Grasshopper",
    detailPath: "projects/robosim",
    image: "images/robotics/robosim/cover.png",
    resources: robosimResources,
  },
  {
    id: "gh-ros2",
    title: "gh-ros2",
    description: "Grasshopper Plugin | ROS",
    detailPath: "projects/gh-ros2",
    image: "images/robotics/gh-ros2/cover.jpg",
    resources: [
      {
        id: "developer-guide",
        title: "Developer Guide",
      },
    ],
  },
  {
    id: "quadruped-robot",
    title: "Quadruped Robot",
    description: "Unitree Go2 | ROS 2",
    detailPath: "robotics/quadruped-robot",
    image: "post_img.webp",
    resources: [
      {
        id: "go2-humble",
        title: "go2_humble",
        url: "https://github.com/Avery320/go2_humble",
        updatedAt: projectUpdates["go2-humble"],
      },
      {
        id: "go2-viz",
        title: "go2_viz",
        url: "https://github.com/Avery320/go2_viz",
        updatedAt: projectUpdates["go2-viz"],
      },
    ],
  },
  {
    id: "comet",
    title: "Comet",
    description: "In development",
    detailPath: "projects/comet",
    image: "post_img.webp",
    resources: [
      {
        id: "comet-github",
        title: "GitHub",
        url: "https://github.com/Avery320/comet",
        updatedAt: projectUpdates.comet,
      },
    ],
  },
];
