export interface CvTimelineItem {
  date: string;
  title: string;
  titlePrefix?: string;
  titleSuffix?: string;
  subtitle?: string;
  description?: string | CvTimelineDetail[];
  href?: string;
}

export interface CvTimelineDetail {
  text: string;
  level: "heading" | "detail";
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
  skillsAsLines?: boolean;
  sections: CvTimelineSection[];
}

export const zhTwCv: CvContent = {
  pageTitle: "蔡承恩 Avery Tsai｜CV",
  pageDescription: "蔡承恩 Avery Tsai 的履歷、專案與機器人開發經歷。",
  profileHeading: "Profile",
  profile: [
    "我是一個建築與機器人開發者，專注於參數化設計、數位製造、資訊模型與建築機器人系統開發。熟練 Rhino、Grasshopper、Revit 參數化設計工具，具備形態生成、結構分析、基地分析與環境模擬等工具開發經驗；同時擁有機器人控制、前端介面開發、Grasshopper 外掛開發，以及深度相機、LiDAR、行動裝置等軟硬體整合能力。",
    "過去在建築師事務所曾參與以 Revit 為核心的建築設計專案，累積 BIM 協作與設計經驗。碩士期間則以建築機器人為主要研究方向，參與多項機器人開發與機械手臂製造專案；同時也擔任多門課程的助教，協助數位設計與演算法於建築領域的應用實踐。",
    "目前持續投入 AI、建築與機器人應用開發，致力於串連建築設計、施工、機器人與設備間的資訊，解決建築在不同階段與跨領域中的資訊斷層，建立有效率的自動化工作流程。",
  ],
  educationHeading: "Education",
  education: [
    {
      date: "2023.02 - 2026.06",
      title: "碩士・國立成功大學建築研究所數位設計組",
    },
    {
      date: "2015.09 - 2021.09",
      title: "學士・雲林科技大學建築與室內設計系建築組",
    },
  ],
  skillsHeading: "Skills",
  skillsAsLines: true,
  skills: [
    "建模與繪圖軟體：Rhino、Grasshopper、Revit、Cura、InDesign、Illustrator、Photoshop",
    "程式語言：Python、C#／.NET（Grasshopper Plugin）、JavaScript（網頁開發）、Swift（iOS 手機 App）",
    "開發工具：Git（版本管理）、Conda、VS Code、Xcode、Docker、Ubuntu、VNC（虛擬環境）",
    "硬體設備：Robotic Arm、3D Printer、Laser Cutter、Jetson Nano（微電腦）、RealSense（深度相機）",
  ],
  sections: [
    {
      heading: "Thesis",
      items: [
        {
          date: "2026.01",
          title: "雙機械手臂協同鋼筋混凝土列印構件建造",
          description: "整合 KUKA 與 HIWIN 機械手臂控制，於混凝土列印過程中置入鋼筋，建立鋼筋混凝土模具。",
          href: "https://thesis.lib.ncku.edu.tw/thesis/detail/170f8ee6d1d41bd139554b869f26fee4/?seq=25",
        },
      ],
    },
    {
      heading: "Conference",
      items: [
        {
          date: "2026.06",
          title: "面向設計建造的機械手臂人機協作介面",
          titleSuffix: ", 第 38 屆建築研究成果發表會",
          description: "整合設計與機器人控制的 no-code 人機協作介面。",
        },
        {
          date: "2025.06",
          title: "整合機械手臂與電腦視覺發展自動化磚構造構築系統",
          titleSuffix: ", 第 37 屆建築研究成果發表會",
          description: "自主車避障路徑規劃系統於工地現場應用。",
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          date: "2025.03 - 2025.12",
          title: "智慧建造：基於數位雙生演算與機械手臂列印發展減碳預鑄免拆模鋼筋混凝土柱體工法",
          description: "機械手臂混凝土列印材料的材料性能、結構測試，開發雙層列印模具工法的路徑生成演算法。",
          href: "projects/smart-construction-concrete-formwork",
        },
        {
          date: "2025.03",
          title: "台中大河里福德祠",
          titleSuffix: ", 戴育澤建築師事務所",
          description: "AR 擴增實境疊合設計模型與現場資訊，協助磁磚放樣與施工定位。",
          href: "https://www.facebook.com/story.php?story_fbid=1062206209262854&id=100064204530132&mibextid=wwXIfr&rdid=Ka9KwvjjXf185RZk",
        },
        {
          date: "2024.03 - 2024.11",
          title: "Graphcrete: Robotic 3D Concrete Printing for Mold Construction Methodology",
          description: "開發列印混凝土模板作為模具的應用，使用 Grasshopper 參數化設計工具建構設計到機器人製造的標準流程，並開發 Grasshopper 混凝土列印柱體模具結構分析工具及柱體模具分割管理工具，降低設計製造之間的資料轉換成本。",
          href: "projects/graphcrete",
        },
        {
          date: "2024.01 - 2024.12",
          title: "整合機械手臂與電腦視覺發展自組立低碳循環建材暨建構系統（II）",
          description: "串接馬達驅動設備、深度相機、LiDAR，建立自主避障移動機器人。",
          href: "projects/robotic-tectonics",
        },
      ],
    },
    {
      heading: "Robotic Developments",
      items: [
        {
          date: "2025.07 - 至今",
          title: "RoboSim",
          titleSuffix: ": 機器人協作介面",
          description: "整合機器人、幾何軟體、感測設備資訊的人機控制介面。",
          href: "robotics/robosim",
        },
        {
          date: "2025.05 - 2025.11",
          title: "Hiwin Robot Arm Kinematics & hiwin_prc",
          description: "整合 Grasshopper 的 HIWIN 機械手臂核心控制方法。",
          href: "robotics/hiwin-robot-arm-kinematics",
        },
        {
          date: "2026.06 - 至今",
          title: "RoboSim-gh-plugin",
          titleSuffix: ": RoboSim Grasshopper 工具",
          description: "使用 RoboSim API 開發的 Grasshopper Plugin，用於在 Grasshopper 中操作 RoboSim 軟體。",
        },
        {
          date: "2026.06 - 至今",
          title: "gh-ros2",
          titleSuffix: ": Grasshopper 機器人系統連線工具",
          description: "Grasshopper 與機器人系統間的資料通訊機制。",
          href: "robotics/gh-ros2",
        },
        {
          date: "2026.05 - 至今",
          title: "RoboSight",
          titleSuffix: ": iOS 機器人遠端監控與控制 App",
          description: "以跨設備與地點的網路連線與資料交換技術，串聯普及化的 iOS 手機設備，用於遠端控制、監控機器人。",
          href: "robotics/robosight",
        },
        {
          date: "2025.07 - 2025.11",
          title: "RealSense Detection",
          description: "以深度相機與標記技術，用於機器人的空間定位與現場放樣。",
        },
        {
          date: "2026.05 - 至今",
          title: "Robotic Nonplanar Printing",
          titleSuffix: ": 非平面切片演算法",
          description: "以 Python 開發的 Grasshopper 演算法，用於機械手臂列印。",
          href: "fabrication/robotic-nonplanar-printing",
        },
      ],
    },
    {
      heading: "Work Experience",
      items: [
        {
          date: "2026.08 - 至今",
          title: "聯雨設計製造有限公司",
          href: "https://urdt.tw/",
          description: [
            { text: "機器人研發工程師", level: "heading" },
          ],
        },
        {
          date: "2022.02 - 2023.02",
          title: "趙建銘建築師事務所",
          href: "https://www.cmchaoarch.com",
          description: [
            { text: "專案設計師", level: "heading" },
            { text: "瑞屏安居社會住宅｜專案設計師", level: "detail" },
            { text: "小港運動中心｜專案設計師", level: "detail" },
            { text: "美濃運動公園｜水泥 3D 列印景觀座椅造型設計", level: "detail" },
            { text: "鼓山魚市場、高雄凱旋青樹社會住宅、福山安居｜協助圖面繪製、報告書製作", level: "detail" },
            { text: "Revit 專案執行", level: "heading" },
            { text: "專案樣板、公司參數、出圖形式、圖框設置。", level: "detail" },
            { text: "專案族群建置。", level: "heading" },
            { text: "樓梯、車道模型檢討與細部圖說繪製。", level: "detail" },
            { text: "Rhino／Grasshopper 基地模型生成演算法", level: "heading" },
            { text: "將 CAD 圖資的建築邊界與文字資料進行處理，生成實際高度的建築模型。", level: "detail" },
          ],
        },
        {
          date: "2023.07 - 2023.08",
          title: "洋鑫先進製造有限公司",
          href: "https://yangxin.com.tw",
          description: [
            { text: "數位設計師", level: "heading" },
            { text: "數位曲面模型與產品設計。", level: "detail" },
          ],
        },
      ],
    },
    {
      heading: "Teaching and Workshop Experience",
      items: [
        {
          date: "2025.09 - 2026.01／2024.09 - 2025.01",
          title: "設計演算與演算幾何",
          titleSuffix: ", 成大建築系",
          subtitle: "課程助教｜Python 幾何演算法開發。",
        },
        {
          date: "2024.05 - 2025.07",
          title: "成大數位智造工坊（Rac-Coon）",
          subtitle: "工廠管理員｜管理與教學機械手臂、3D 列印機、雷射切割機等相關機器使用。",
          href: "https://rccn.dev/zh/",
        },
        {
          date: "2025.02",
          title: "AI 及南科工作坊",
          titleSuffix: ", 2025 成大建築系垂直競圖與工作坊",
          subtitle: "課程助教｜結合大語言模型（LLM）與 Google Maps API 使用爬蟲功能進行都市尺度環境分析，並透過 QGIS 軟體顯示分析資訊。",
        },
        {
          date: "2024.02",
          titlePrefix: "工作坊助教｜",
          title: "Linear Concrete Workshop",
          titleSuffix: ", 2024 成大建築系垂直競圖與工作坊",
          subtitle: "課程助教｜陶土列印測試、機器人與 Grasshopper 流程建立。",
          href: "fabrication/robotic-clay-printing",
        },
        {
          date: "2025.01／2024.01",
          title: "FunAI Workshop",
          titleSuffix: ", 成大資工系 Scream Lab",
          subtitle: "學員｜以 Unity 開發 Digital Twin 數位雙生環境。整合深度相機、LiDAR 的自走車 SLAM 開發。",
        },
        {
          date: "2024.06",
          title: "以台北市降雨相關數據分析 發想未來城市的治洪設計",
          titleSuffix: ", 成大建築智慧城市報告",
          subtitle: "學生｜透過 Python 程式語言分析資料，驅動城市治理。",
          href: "https://github.com/Avery320/ncku_smart_city_project",
        },
        {
          date: "2024.09",
          title: "藝術探微工作坊：3D 雷射掃描建築立面",
          titleSuffix: ", 成大藝術研究所",
          subtitle: "學生｜點雲掃描於建築中的應用。",
        },
        {
          date: "2024.06",
          title: "機器學習整合工業機器人施工與設計",
          titleSuffix: ", 成大建築系",
          subtitle: "課程助教｜使用機器學習技術結合工業機器人應用於現代建築施工與自動化製造。",
        },
        {
          date: "2023.08",
          title: "機械手臂混合實境工作坊",
          titleSuffix: ", 成大建築系 SyncLab",
          subtitle: "學員｜以 Unity 開發 AR 應用，透過虛擬環境方式操作實體機械手臂運動。",
        },
        {
          date: "2023.02 - 2023.06",
          title: "建築資訊模型實作",
          titleSuffix: ", 成大建築系",
          subtitle: "課程助教｜協助 Revit 操作與建模。",
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
    "I am an architectural and robotics developer specializing in parametric design, digital fabrication, information modeling, and architectural robotic systems. Proficient in Rhino, Grasshopper, and Revit, I have experience developing tools for form generation, structural analysis, site analysis, and environmental simulation. I also have experience in robot control, front-end interface development, Grasshopper plugin development, and the integration of depth cameras, LiDAR, mobile devices, and other hardware systems.",
    "Previously, I participated in Revit-based architectural design projects at an architectural firm, gaining experience in BIM collaboration and design workflows. During my master's studies, I focused on architectural robotics, participating in multiple robotics development and robotic fabrication projects. I also served as a teaching assistant for several courses, supporting the practical application of digital design and computational algorithms in architecture.",
    "Currently, I continue to work on AI, architecture, and robotics applications. I am committed to connecting information across architectural design, construction, robots, and equipment, addressing information gaps between project stages and disciplines, and establishing more efficient automated workflows.",
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
  skillsHeading: "Skills",
  skillsAsLines: true,
  skills: [
    "Modeling & Design Software: Rhino, Grasshopper, Revit, Cura, InDesign, Illustrator, Photoshop",
    "Programming Languages: Python, C#/.NET, JavaScript, Swift",
    "Development Tools: Git, Conda, VS Code, Xcode, Docker, Ubuntu, VNC",
    "Hardware & Equipment: Robotic Arm, 3D Printer, Laser Cutter, Jetson Nano, Intel RealSense",
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
      heading: "Work Experience",
      items: [
        {
          date: "2026.08 - Present",
          title: "聯雨設計製造有限公司",
          href: "https://urdt.tw/",
          description: [
            { text: "Robotics R&D Engineer", level: "heading" },
          ],
        },
        {
          date: "2022.02 - 2023.02",
          title: "Chao Chien-Ming Architects & Associates",
          href: "https://www.cmchaoarch.com",
          description: [
            { text: "Project Designer", level: "heading" },
            { text: "Ruiping Social Housing | Project Designer", level: "detail" },
            { text: "Xiaogang Sports Center | Project Designer", level: "detail" },
            { text: "Meinong Sports Park | Designed a 3D-printed concrete landscape seating system.", level: "detail" },
            { text: "Gushan Fish Market, Kaohsiung Kaixuan Qingshu Social Housing, Fushan Social Housing | Assisted in architectural drawings and report preparation.", level: "detail" },
            { text: "Revit Project Implementation", level: "heading" },
            { text: "Developed project templates, shared parameters, drawing standards, and title block configurations.", level: "detail" },
            { text: "Created and managed Revit family libraries.", level: "detail" },
            { text: "Reviewed stair and ramp models and produced detailed construction drawings.", level: "detail" },
            { text: "Rhino / Grasshopper Site Modeling Algorithm Development", level: "heading" },
            { text: "Processed CAD building boundaries and textual data to automatically generate building massing models with accurate heights.", level: "detail" },
          ],
        },
        {
          date: "2023.07 - 2023.08",
          title: "Young Xin Advanced Manufacturing Co., Ltd.",
          href: "https://yangxin.com.tw",
          description: [
            { text: "Digital Designer", level: "heading" },
            { text: "Developed digital freeform surface models and product designs.", level: "detail" },
          ],
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
