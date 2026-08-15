export interface CvTimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description?: string;
  href?: string;
}

export interface CvTimelineSection {
  heading: string;
  items: CvTimelineItem[];
}

export interface CvContent {
  pageTitle: string;
  pageDescription: string;
  profileHeading: string;
  profile: string[];
  educationHeading: string;
  education: CvTimelineItem[];
  skillsHeading: string;
  skills: string[];
  sections: CvTimelineSection[];
}

export const zhTwCv: CvContent = {
  pageTitle: "蔡承恩 Avery Tsai｜CV",
  pageDescription: "蔡承恩 Avery Tsai 的履歷、專案與機器人開發經歷。",
  profileHeading: "Profile",
  profile: [
    "建築與機器人系統開發者，專注於參數化設計、數位製造、建築資訊模型與建築機器人系統開發。熟悉 Rhino、Grasshopper 與 Revit，具備形態生成、結構分析、基地分析及環境模擬工具的開發經驗，也能整合機器人控制、網頁介面、Grasshopper 外掛、深度相機、LiDAR 與行動裝置。曾於建築師事務所參與 Revit 建築設計專案與 BIM 協作；碩士研究聚焦建築機器人、機械手臂與自動化製造，並曾擔任多門數位設計與機器人課程助教。持續探索 AI、建築與機器人的整合應用，期望串連設計、施工、機器人及設備資訊，改善跨系統資料斷層並建立可落地的自動化工作流程。",
  ],
  educationHeading: "Education",
  education: [
    {
      date: "2023.02 - 2026.06",
      title: "國立成功大學",
      subtitle: "建築研究所數位設計組・碩士",
    },
    {
      date: "2015.09 - 2021.09",
      title: "國立雲林科技大學",
      subtitle: "建築與室內設計系建築組・學士",
    },
  ],
  skillsHeading: "Skills",
  skills: [
    "Rhino",
    "Grasshopper",
    "Revit",
    "Cura",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Python",
    "C#／.NET",
    "JavaScript",
    "Swift",
    "Git",
    "Docker",
    "Ubuntu",
    "Jetson Nano",
    "RealSense",
    "LiDAR",
  ],
  sections: [
    {
      heading: "Thesis",
      items: [
        {
          date: "2026.01",
          title: "雙機械手臂協同鋼筋混凝土列印構件建造",
          subtitle: "碩士論文",
          description: "整合 KUKA 與 HIWIN 機械手臂控制，在混凝土列印過程中同步置入鋼筋，以建立鋼筋混凝土模具與協同建造流程。",
        },
      ],
    },
    {
      heading: "Conference Papers",
      items: [
        {
          date: "2026.06",
          title: "面向設計建造的機械手臂人機協作介面",
          subtitle: "第 38 屆建築研究成果發表會",
          description: "開發整合設計與機器人控制的 no-code 人機協作介面，降低機器人操作與設計流程之間的技術門檻。",
        },
        {
          date: "2025.06",
          title: "整合機械手臂與電腦視覺發展自動化磚構造構築系統",
          subtitle: "第 37 屆建築研究成果發表會",
          description: "結合機械手臂、電腦視覺與自走車避障路徑規劃，探索自動砌磚系統在工地現場的應用。",
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          date: "2025.03 - 2025.12",
          title: "智慧建造：減碳預鑄免拆模鋼筋混凝土柱體工法",
          subtitle: "數位雙生演算與機械手臂列印",
          description: "參與材料性能、結構測試，以及雙層列印模具路徑演算法開發。",
        },
        {
          date: "2025.03",
          title: "台中大河里福德祠",
          subtitle: "戴育澤建築師事務所",
          description: "以 AR 擴增實境疊合設計模型與現場資訊，協助磁磚放樣與施工定位。",
          href: "https://www.facebook.com/story.php?story_fbid=1062206209262854&id=100064204530132&mibextid=wwXIfr&rdid=Ka9KwvjjXf185RZk",
        },
        {
          date: "2024.03 - 2024.11",
          title: "Graphcrete: Robotic 3D Concrete Printing for Mold Construction Methodology",
          subtitle: "Grasshopper 機器人製造工作流程",
          description: "建立標準化機器人製造工作流程，並開發分析與管理工具，以降低設計到製造之間的資料轉換成本。",
        },
        {
          date: "2024.01 - 2024.12",
          title: "整合機械手臂與電腦視覺發展自組立低碳循環建材暨建構系統（II）",
          subtitle: "機械手臂、深度相機與 LiDAR 整合",
          description: "開發可自主移動並執行牆體建造的機器人系統。",
        },
      ],
    },
    {
      heading: "Robotic Developments",
      items: [
        {
          date: "2025.07 - 至今",
          title: "RoboSim",
          subtitle: "機器人人機協作介面",
          description: "整合機器人、幾何軟體與感測設備資訊，建立設計與操作共用的人機協作介面。",
          href: "robotics/robosim",
        },
        {
          date: "2025.05 - 2025.11",
          title: "Hiwin Robot Arm Kinematics & hiwin_prc",
          subtitle: "HIWIN 機械手臂控制",
          description: "開發 Grasshopper 中的 HIWIN 機械手臂運動學與核心控制功能。",
          href: "robotics/hiwin-robot-arm-kinematics",
        },
        {
          date: "2026.06 - 至今",
          title: "RoboSim Grasshopper Plugin",
          subtitle: "Grasshopper Plugin",
          description: "將 RoboSim API 封裝為 Grasshopper 外掛，讓參數化設計流程能直接連接機器人系統。",
        },
        {
          date: "2026.06 - 至今",
          title: "gh-ros2",
          subtitle: "Grasshopper 與 ROS 2 資料通訊",
          description: "串接幾何設計與機器人系統資訊。",
          href: "robotics/gh-ros2",
        },
        {
          date: "2026.05 - 至今",
          title: "RoboSight",
          subtitle: "iOS 遠端監控與控制",
          description: "處理跨設備網路連線與即時資料交換。",
          href: "robotics/robosight",
        },
        {
          date: "2025.07 - 2025.11",
          title: "RealSense Detection",
          subtitle: "深度相機與視覺標記",
          description: "進行空間定位及現場放樣。",
        },
        {
          date: "2026.05 - 至今",
          title: "Robotic Nonplanar Printing",
          subtitle: "Python 與 Grasshopper 非平面切片演算法",
          description: "支援機械手臂增材製造。",
          href: "fabrication/robotic-nonplanar-printing",
        },
      ],
    },
    {
      heading: "Work Experience",
      items: [
        {
          date: "2022.02 - 2023.02",
          title: "趙建銘建築師事務所",
          subtitle: "專案設計師",
          description: "參與瑞平安居社會住宅、小港運動中心、美濃運動公園水泥 3D 列印景觀座椅、鼓山魚市場、高雄凱旋青樹社宅與福山安居等專案；建立 Revit 專案樣板、公司參數、出圖形式、圖框與族群，並使用 Rhino 與 Grasshopper 開發基地模型生成演算法。",
        },
        {
          date: "2023.07 - 2023.08",
          title: "洋鑫先進製造有限公司",
          subtitle: "數位設計師",
          description: "負責數位曲面模型建置與產品設計。",
        },
      ],
    },
    {
      heading: "Teaching and Workshops",
      items: [
        {
          date: "2025.09 - 2026.01、2024.09 - 2025.01",
          title: "設計演算與演算幾何",
          subtitle: "成功大學建築系・課程助教",
          description: "協助 Python 幾何演算法與設計運算課程。",
        },
        {
          date: "2024.05 - 2025.07",
          title: "成功大學數位智造工坊（Rac-Coon）",
          subtitle: "工廠管理員",
          description: "負責機械手臂、3D 列印機與雷射切割機的教學及管理。",
        },
        {
          date: "2025.02",
          title: "AI 及南科工作坊",
          subtitle: "成功大學建築系垂直競圖與工作坊",
          description: "整合大型語言模型、Google Maps API 與 QGIS，進行都市尺度環境分析。",
        },
        {
          date: "2024.02",
          title: "Linear Concrete Workshop",
          subtitle: "工作坊助教",
          description: "執行陶土列印測試，並協助機器人與 Grasshopper 製造流程。",
          href: "fabrication/robotic-clay-printing",
        },
        {
          date: "2025.01、2024.01",
          title: "FunAI Workshop",
          subtitle: "成功大學資工系 Scream Lab・學員",
          description: "實作 Unity Digital Twin、RealSense、LiDAR 與自走車 SLAM。",
        },
        {
          date: "2024.06",
          title: "以台北市降雨相關數據分析發想未來城市的治洪設計",
          subtitle: "成功大學建築智慧城市報告",
          description: "使用 Python 進行資料分析，探索降雨資料、都市治理與治洪設計的關係。",
        },
        {
          date: "2024.09",
          title: "藝術探微工作坊：3D 雷射掃描建築立面",
          subtitle: "成功大學藝術研究所・學員",
          description: "進行建築立面點雲掃描與資料處理。",
        },
        {
          date: "2024.06",
          title: "機器學習整合工業機器人施工與設計",
          subtitle: "成功大學建築系・課程助教",
          description: "協助機器學習與工業機器人整合課程。",
        },
        {
          date: "2023.08",
          title: "機械手臂混合實境工作坊",
          subtitle: "成功大學建築系 SyncLab・學員",
          description: "使用 Unity AR 介面控制實體機械手臂。",
        },
        {
          date: "2023.02 - 2023.06",
          title: "建築資訊模型實作",
          subtitle: "成功大學建築系・課程助教",
          description: "協助 Revit 操作與建築資訊模型課程。",
        },
      ],
    },
  ],
};

export const enCv: CvContent = {
  pageTitle: "Avery Tsai | CV",
  pageDescription: "Avery Tsai's curriculum vitae, projects, and robotics development experience.",
  profileHeading: "Profile",
  profile: [
    "I am an architectural and robotics developer specializing in parametric design, digital fabrication, building information modeling, and architectural robotic systems. Proficient in Rhino, Grasshopper, and Revit, I develop tools for form generation, structural analysis, site analysis, and environmental simulation. I also integrate robot control, web interfaces, Grasshopper plugins, depth cameras, LiDAR, mobile devices, and other hardware systems.",
    "Previously, I contributed to Revit-based architectural design projects at an architectural firm, gaining experience in BIM collaboration and design workflows. During my master's studies, I focused on architectural robotics, robotic arm development, and automated fabrication. I also served as a teaching assistant for digital design and robotics courses.",
    "I continue to explore applications that connect AI, architecture, and robotics. My goal is to connect information across design, construction, robots, and equipment, reduce data gaps between project stages and disciplines, and establish practical automated workflows.",
  ],
  educationHeading: "Education",
  education: [
    {
      date: "2023.02 - 2026.06",
      title: "National Cheng Kung University",
      subtitle: "M.S., Graduate Institute of Architecture, Digital Design",
    },
    {
      date: "2015.09 - 2021.09",
      title: "National Yunlin University of Science and Technology",
      subtitle: "B.S., Department of Architecture and Interior Design",
    },
  ],
  skillsHeading: "Skills",
  skills: [
    "Rhino",
    "Grasshopper",
    "Revit",
    "Cura",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Python",
    "C#/.NET",
    "JavaScript",
    "Swift",
    "Git",
    "Conda",
    "VS Code",
    "Xcode",
    "Docker",
    "Ubuntu",
    "VNC",
    "Robotic Arms",
    "3D Printers",
    "Laser Cutters",
    "Jetson Nano",
    "Intel RealSense",
    "LiDAR",
  ],
  sections: [
    {
      heading: "Thesis",
      items: [
        {
          date: "2026.01",
          title: "Cooperative Dual-Robot Arm Construction of Reinforced Concrete 3D-Printed Components",
          subtitle: "Master's Thesis",
          description: "Integrated KUKA and HIWIN robotic arms for automated rebar placement during concrete printing, establishing a robotic workflow for reinforced concrete formwork fabrication.",
        },
      ],
    },
    {
      heading: "Conference Papers",
      items: [
        {
          date: "2026.06",
          title: "Human-Robot Collaboration Interface for Design and Construction",
          subtitle: "The 38th Architectural Research Conference of the Architectural Institute of Taiwan",
          description: "Developed a no-code human-robot collaboration interface integrating design workflows and robotic control.",
        },
        {
          date: "2025.06",
          title: "Development of an Automated Brick Construction System Integrating Robotic Arms and Computer Vision",
          subtitle: "The 37th Architectural Research Conference of the Architectural Institute of Taiwan",
          description: "Integrated robotic arms, computer vision, and autonomous mobile robot path planning to explore automated brick construction for construction sites.",
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          date: "2025.03 - 2025.12",
          title: "Smart Construction: Development of a Low-Carbon Precast Stay-in-Place Reinforced Concrete Column System Based on Digital Twin Computing and Robotic Concrete Printing",
          subtitle: "Digital Twin Computing and Robotic Concrete Printing",
          description: "Conducted material performance and structural testing for robotic concrete printing, and developed path-generation algorithms for a dual-layer printed formwork construction method.",
          href: "projects/smart-construction-concrete-formwork",
        },
        {
          date: "2025.03",
          title: "Taichung Daheli Fude Temple",
          subtitle: "Yu-Tse Dai Architects & Associates",
          description: "Applied augmented reality to overlay design models with on-site conditions, supporting tile layout planning and construction positioning.",
          href: "https://www.facebook.com/story.php?story_fbid=1062206209262854&id=100064204530132&mibextid=wwXIfr&rdid=Ka9KwvjjXf185RZk",
        },
        {
          date: "2024.03 - 2024.11",
          title: "Graphcrete: Robotic 3D Concrete Printing for Mold Construction Methodology",
          subtitle: "Grasshopper-Based Robotic Fabrication Workflow",
          description: "Established a standardized design-to-fabrication workflow with Grasshopper, and developed structural analysis and formwork segmentation management tools to reduce data conversion costs between design and manufacturing.",
          href: "projects/graphcrete",
        },
        {
          date: "2024.01 - 2024.12",
          title: "Integration of Robotic Arms and Computer Vision for Self-Assembling Low-Carbon Circular Building Materials and Construction Systems (II)",
          subtitle: "Robotic Arms, Depth Cameras, and LiDAR",
          description: "Integrated robotic arms, depth cameras, and LiDAR to develop an autonomous mobile robot capable of navigation and wall construction.",
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
          subtitle: "Human-Robot Collaboration Interface",
          description: "Developed a human-machine control interface integrating robots, geometric design software, and sensor data.",
          href: "robotics/robosim",
        },
        {
          date: "2025.05 - 2025.11",
          title: "Hiwin Robot Arm Kinematics & hiwin_prc",
          subtitle: "HIWIN Robotic Arm Control",
          description: "Developed and integrated core control methods for HIWIN robotic arms within Grasshopper.",
          href: "robotics/hiwin-robot-arm-kinematics",
        },
        {
          date: "2026.06 - Present",
          title: "RoboSim Grasshopper Plugin",
          subtitle: "Grasshopper Plugin",
          description: "Developed a Grasshopper plugin based on the RoboSim API, enabling users to operate RoboSim directly within Grasshopper.",
        },
        {
          date: "2026.06 - Present",
          title: "gh-ros2",
          subtitle: "Grasshopper-ROS 2 Communication Toolkit",
          description: "Developed a data communication framework between Grasshopper and robotic systems.",
          href: "robotics/gh-ros2",
        },
        {
          date: "2026.05 - Present",
          title: "RoboSight",
          subtitle: "iOS Remote Robot Monitoring and Control App",
          description: "Connected widely available iOS devices for remote robot monitoring and control through cross-device networking and real-time data exchange.",
          href: "robotics/robosight",
        },
        {
          date: "2025.07 - 2025.11",
          title: "RealSense Detection",
          subtitle: "Depth Camera and Marker-Based Tracking",
          description: "Applied depth cameras and marker-based tracking for robotic localization and on-site layout positioning.",
        },
        {
          date: "2026.05 - Present",
          title: "Robotic Nonplanar Printing",
          subtitle: "Nonplanar Slicing Algorithm",
          description: "Developed a Python-based Grasshopper algorithm for robotic nonplanar printing applications.",
          href: "fabrication/robotic-nonplanar-printing",
        },
      ],
    },
    {
      heading: "Work Experience",
      items: [
        {
          date: "2022.02 - 2023.02",
          title: "Chao Chien-Ming Architects & Associates",
          subtitle: "Project Designer",
          description: "Contributed to Ruiping Social Housing, Xiaogang Sports Center, Meinong Sports Park, Gushan Fish Market, Kaohsiung Kaixuan Qingshu Social Housing, and Fushan Social Housing. Designed a 3D-printed concrete landscape seating system, developed Revit project templates and family libraries, and created a Rhino and Grasshopper algorithm for generating site massing models from CAD data.",
        },
        {
          date: "2023.07 - 2023.08",
          title: "Young Xin Advanced Manufacturing Co., Ltd.",
          subtitle: "Digital Designer",
          description: "Developed digital freeform surface models and product designs.",
        },
      ],
    },
    {
      heading: "Teaching and Workshops",
      items: [
        {
          date: "2025.09 - 2026.01, 2024.09 - 2025.01",
          title: "Design Computation and Computational Geometry",
          subtitle: "Teaching Assistant, NCKU Architecture",
          description: "Supported Python-based geometric algorithm development and course instruction.",
        },
        {
          date: "2024.05 - 2025.07",
          title: "Robot Aided Creation and Construction (RAC-Coon)",
          subtitle: "Fabrication Lab Manager, NCKU",
          description: "Managed and instructed the operation of robotic arms, 3D printers, laser cutters, and other digital fabrication equipment.",
        },
        {
          date: "2025.02",
          title: "AI and Southern Taiwan Science Park Workshop",
          subtitle: "Teaching Assistant, NCKU Architecture Vertical Studio and Workshop",
          description: "Supported urban-scale environmental analysis using large language models, web scraping, and the Google Maps API, with results visualized in QGIS.",
        },
        {
          date: "2024.02",
          title: "Linear Concrete Workshop",
          subtitle: "Teaching Assistant, NCKU Architecture Vertical Studio and Workshop",
          description: "Conducted clay printing tests and established robotic fabrication workflows with Grasshopper.",
          href: "fabrication/robotic-clay-printing",
        },
        {
          date: "2025.01, 2024.01",
          title: "FunAI Workshop",
          subtitle: "Participant, NCKU CSIE Scream Lab",
          description: "Developed a digital twin environment using Unity and integrated depth cameras and LiDAR sensors for SLAM-based autonomous mobile robot development.",
        },
        {
          date: "2024.06",
          title: "Future Urban Flood Mitigation Design Based on Taipei Rainfall Data Analysis",
          subtitle: "Student, NCKU Architecture Smart City Report",
          description: "Applied Python-based data analysis to support data-driven urban governance and flood mitigation design strategies.",
        },
        {
          date: "2024.09",
          title: "Art Exploration Workshop: 3D Laser Facade Scanning and Building Facade Proportion Analysis",
          subtitle: "Student, NCKU Institute of Art Studies",
          description: "Applied point cloud scanning techniques to architectural facade analysis.",
        },
        {
          date: "2024.06",
          title: "Integrating Machine Learning in Robotic Construction and Design",
          subtitle: "Teaching Assistant, NCKU Architecture",
          description: "Applied machine learning techniques with industrial robotic systems for construction and automated manufacturing applications.",
        },
        {
          date: "2023.08",
          title: "Robotic Arm Mixed Reality Workshop",
          subtitle: "Participant, NCKU Architecture SyncLab",
          description: "Developed an augmented reality interface in Unity to control physical robotic arm movements through virtual interaction.",
        },
        {
          date: "2023.02 - 2023.06",
          title: "Building Information Modeling Practice",
          subtitle: "Teaching Assistant, NCKU Architecture",
          description: "Assisted with Revit modeling and software operation.",
        },
      ],
    },
  ],
};
