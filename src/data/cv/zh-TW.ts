import type { CvContent } from "./types";

export const zhTwCv: CvContent = {
  pageTitle: "蔡承恩 Avery Tsai｜CV",
  pageDescription: "蔡承恩 Avery Tsai 的履歷、專案與機器人開發經歷。",
  workExperienceHeading: "Work Experience",
  workExperience: [
    {
      date: "2026.08 - 至今",
      title: "聯雨設計製造有限公司",
      href: "https://urdt.tw/",
      description: [{ text: "機器人研發工程師", level: "heading" }],
    },
    {
      date: "2022.02 - 2023.02",
      title: "趙建銘建築師事務所",
      href: "https://www.cmchaoarch.com",
      description: [{ text: "專案設計師", level: "heading" }],
    },
    {
      date: "2023.07 - 2023.08",
      title: "洋鑫先進製造有限公司",
      href: "https://yangxin.com.tw",
      description: [{ text: "數位設計師", level: "heading" }],
    },
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
