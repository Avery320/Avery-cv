import type { CvContent } from "./types";

export const enCv: CvContent = {
  pageTitle: "Avery Tsai | CV",
  pageDescription: "Avery Tsai's curriculum vitae, projects, and robotics development experience.",
  workExperienceHeading: "Work Experience",
  workExperience: [
    {
      date: "2026.08 - Present",
      title: "UNITED RESEARCH DESIGN TECHNOLOGY CO., LTD.",
      href: "https://urdt.tw/",
      description: [{ text: "Robotics R&D Engineer", level: "heading" }],
    },
    {
      date: "2022.02 - 2023.02",
      title: "Chao Chien-Ming Architects & Associates",
      href: "https://www.cmchaoarch.com",
      description: [{ text: "Project Designer", level: "heading" }],
    },
    {
      date: "2023.07 - 2023.08",
      title: "Young Xin Advanced Manufacturing Co., Ltd.",
      href: "https://yangxin.com.tw",
      description: [{ text: "Digital Designer", level: "heading" }],
    },
  ],
  educationHeading: "Education",
  education: [
    {
      date: "2023.02 - 2026.06",
      title: "M.S. National Cheng Kung University",
    },
    {
      date: "2015.09 - 2021.09",
      title: "B.S. National Yunlin University of Science and Technology",
    },
  ],
  sections: [
    {
      heading: "Thesis",
      items: [
        {
          date: "2026.01",
          title: "Cooperative Dual-Robot Arm Construction of Reinforced Concrete 3D-Printed Components",
          description: "Integrated KUKA and HIWIN robotic arms for automated rebar placement during concrete printing, establishing a robotic workflow for reinforced concrete formwork fabrication.",
          href: "https://thesis.lib.ncku.edu.tw/thesis/detail/170f8ee6d1d41bd139554b869f26fee4/?seq=25",
        },
      ],
    },
    {
      heading: "Conference",
      items: [
        {
          date: "2026.06",
          title: "A Human-Robot Collaboration Interface for Design and Fabrication",
          titleSuffix: ", The 38th Architectural Research Conference of the Architectural Institute of Taiwan",
          description: "Developed a no-code human-robot collaboration interface integrating design workflows and robotic control.",
        },
        {
          date: "2025.06",
          title: "Development of an Automated Brick Construction System Integrating Robotic Arms and Computer Vision",
          titleSuffix: ", The 37th Architectural Research Conference of the Architectural Institute of Taiwan",
          description: "Developed an autonomous mobile robot path-planning and obstacle-avoidance system for construction site applications.",
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          date: "2025.03 - 2025.12",
          title: "Smart Construction: Development of a Low-Carbon Precast Stay-in-Place Reinforced Concrete Column System Based on Digital Twin Computing and Robotic Concrete Printing",
          description: "Conducted material performance and structural testing for robotic concrete printing. Developed path-generation algorithms for a dual-layer printed formwork construction method.",
          href: "projects/smart-construction-concrete-formwork",
        },
        {
          date: "2025.03",
          title: "Taichung Daheli Fude Temple",
          titleSuffix: ", Yu-Tse Dai Architects & Associates",
          description: "Applied augmented reality (AR) to overlay design models with on-site conditions, supporting tile layout planning and construction positioning.",
          href: "https://www.facebook.com/story.php?story_fbid=1062206209262854&id=100064204530132&mibextid=wwXIfr&rdid=Ka9KwvjjXf185RZk",
        },
        {
          date: "2024.03 - 2024.11",
          title: "Graphcrete: Robotic 3D Concrete Printing for Mold Construction Methodology",
          description: "Established a standardized design-to-fabrication workflow with Grasshopper, and developed structural analysis and formwork segmentation management tools to reduce data conversion costs between design and manufacturing.",
          href: "projects/graphcrete",
        },
        {
          date: "2024.01 - 2024.12",
          title: "Integration of Robotic Arms and Computer Vision for Self-Assembling Low-Carbon Circular Building Materials and Construction Systems (II)",
          description: "Integrated motor drive systems, depth cameras, and LiDAR sensors to develop an autonomous mobile robot for navigation and obstacle avoidance.",
          href: "projects/robotic-tectonics",
        },
      ],
    },
    {
      heading: "Robotic Developments",
      items: [
        {
          date: "2025.07 - Present",
          title: "RoboSim",
          titleSuffix: ": Human-Robot Collaboration Interface",
          description: "Developed a human-machine control interface integrating robots, geometric design software, and sensor data.",
          href: "robotics/robosim",
        },
        {
          date: "2025.05 - 2025.11",
          title: "Hiwin Robot Arm Kinematics & hiwin_prc",
          description: "Developed and integrated core control methods for HIWIN robotic arms within Grasshopper.",
          href: "robotics/hiwin-robot-arm-kinematics",
        },
        {
          date: "2026.06 - Present",
          title: "RoboSim-gh-plugin",
          titleSuffix: ": RoboSim Grasshopper Plugin",
          description: "Developed a Grasshopper plugin based on the RoboSim API, enabling users to operate RoboSim directly within Grasshopper.",
        },
        {
          date: "2026.06 - Present",
          title: "gh-ros2",
          titleSuffix: ": Grasshopper-ROS2 Communication Toolkit",
          description: "Developed a data communication framework between Grasshopper and robotic systems.",
          href: "robotics/gh-ros2",
        },
        {
          date: "2026.05 - Present",
          title: "RoboSight",
          titleSuffix: ": iOS Remote Robot Monitoring and Control App",
          description: "Leveraged cross-device networking and data exchange technologies to connect widely available iOS devices for remote robot monitoring and control.",
          href: "robotics/robosight",
        },
        {
          date: "2025.07 - 2025.11",
          title: "RealSense Detection",
          description: "Applied depth cameras and marker-based tracking techniques for robotic localization and on-site layout positioning.",
        },
        {
          date: "2026.05 - Present",
          title: "Robotic Non-Planar Printing",
          titleSuffix: ": Non-Planar Slicing Algorithm",
          description: "Developed a Python-based Grasshopper algorithm for robotic non-planar printing applications.",
          href: "fabrication/robotic-nonplanar-printing",
        },
      ],
    },
    {
      heading: "Teaching and Workshop Experience",
      items: [
        {
          date: "2025.09 - 2026.01 / 2024.09 - 2025.01",
          title: "Design Computation and Computational Geometry",
          titleSuffix: ", NCKU ARCH",
          subtitle: "Teaching Assistant | Supported Python-based geometric algorithm development and course instruction.",
        },
        {
          date: "2024.05 - 2025.07",
          title: "Robot Aided Creation and Construction",
          titleSuffix: " (RAC-Coon), NCKU",
          subtitle: "Fabrication Lab Manager | Managed and instructed the operation of robotic arms, 3D printers, laser cutters, and other digital fabrication equipment.",
          href: "https://rccn.dev/zh/",
        },
        {
          date: "2025.02",
          title: "AI and Southern Taiwan Science Park Workshop",
          titleSuffix: ", 2025 NCKU Architecture Vertical Studio and Workshops",
          subtitle: "Teaching Assistant | Supported urban-scale environmental analysis using large language models (LLMs), web scraping, and the Google Maps API, with analysis results visualized in QGIS.",
        },
        {
          date: "2024.02",
          title: "Linear Concrete Workshop",
          titleSuffix: ", 2024 NCKU Architecture Vertical Studio and Workshop",
          subtitle: "Teaching Assistant | Conducted clay printing tests and established robotic fabrication workflows with Grasshopper.",
          href: "fabrication/robotic-clay-printing",
        },
        {
          date: "2025.01 / 2024.01",
          title: "FunAI Workshop",
          titleSuffix: ", NCKU CSIE Scream Lab",
          subtitle: "Participant | Developed a digital twin environment using Unity and integrated depth cameras and LiDAR sensors for SLAM-based autonomous mobile robot development.",
        },
        {
          date: "2024.06",
          title: "Future Urban Flood Mitigation Design Based on Taipei Rainfall Data Analysis",
          titleSuffix: ", NCKU ARCH Smart City Report",
          subtitle: "Student | Applied Python-based data analysis to support data-driven urban governance and flood mitigation design strategies.",
          href: "https://github.com/Avery320/ncku_smart_city_project",
        },
        {
          date: "2024.09",
          title: "Art Exploration Workshop: 3D Laser Facade Scanning and Building Facade Proportion Analysis",
          titleSuffix: ", NCKU IAS",
          subtitle: "Student | Applied point cloud scanning techniques for architectural applications.",
        },
        {
          date: "2024.06",
          title: "Integrating Machine Learning in Robotic Construction and Design",
          titleSuffix: ", NCKU ARCH",
          subtitle: "Teaching Assistant | Applied machine learning techniques with industrial robotic systems for modern construction and automated manufacturing applications.",
        },
        {
          date: "2023.08",
          title: "Robotic Arm Mixed Reality Workshop",
          titleSuffix: ", NCKU ARCH SyncLab",
          subtitle: "Participant | Developed AR applications using Unity to control physical robotic arm movements through virtual interaction.",
        },
        {
          date: "2023.02 - 2023.06",
          title: "Building Information Modeling Practice",
          titleSuffix: ", NCKU ARCH",
          subtitle: "Teaching Assistant | Assisted with Revit modeling and software operation.",
        },
      ],
    },
  ],
};
