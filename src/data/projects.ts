import type { ImageMetadata } from "astro";

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
    updatedAt: "2026-08-11T09:32:58+08:00",
  },
  {
    id: "web-demo",
    title: "Web Demo",
    url: "https://avery320.github.io/robot-demo/javascript/example/bundle/main.html",
    updatedAt: "2026-08-12T22:09:05+08:00",
  },
];

export const portfolioPageResources: Record<string, ProjectResource[]> = {
  "robotics/robosim": robosimResources,
  "projects/smart-construction-concrete-formwork": [
    {
      id: "abri-research",
      title: "ABRI Research",
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
};

export const getPortfolioPageResources = (detailPath: string) => portfolioPageResources[detailPath] ?? [];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "robosim",
    title: "RoboSim",
    description: "Human-Computer Interface | ROS | Robotics | Grasshopper",
    detailPath: "robotics/robosim",
    image: "images/robotics/robosim/cover.png",
    resources: robosimResources,
  },
  {
    id: "gh-ros2",
    title: "gh-ros2",
    description: "Grasshopper Plugin | ROS",
    detailPath: "robotics/gh-ros2",
    image: "images/robotics/gh-ros2/cover.jpg",
    resources: [
      {
        id: "developer-guild",
        title: "Developer Guild",
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
      },
      {
        id: "go2-viz",
        title: "go2_viz",
        url: "https://github.com/Avery320/go2_viz",
      },
    ],
  },
];
