export interface ProjectResource {
  id: string;
  title: string;
  url: string;
  updatedAt?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  detailPath: string;
  image: string;
  resources: ProjectResource[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "robosim",
    title: "RoboSim",
    description: "Human-Computer Interface | ROS | Robotics | Grasshopper",
    detailPath: "robotics/robosim",
    image: "images/robotics/robosim/cover.png",
    resources: [
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
    ],
  },
  {
    id: "gh-ros2",
    title: "gh-ros2",
    description: "Grasshopper Plugin | ROS",
    detailPath: "robotics/gh-ros2",
    image: "images/robotics/gh-ros2/cover.jpg",
    resources: [],
  },
];
