---
title: "gh-ros2"
description: "Grasshopper Plugin | ROS"
order: 2
cover: "images/robotics/gh-ros2/cover.jpg"
---

# gh-ros2

## Introduction
gh_ros2 是 Rhino 8 / Grasshopper 的 C# plugin，用於串聯 Grasshopper 與 ROS 2。


### Components

| Component | 功能 |
| --- | --- |
| `ros_bridge_connector` | 使用 ROS 2 rosbridge WebSocket URL。 |
| `publish_topic` | 透過 ROS 2 rosbridge 發布 ROS 2 JSON message。 |
| `foxglove_bridge_connector` | 使用 Foxglove bridge WebSocket URL。 |
| `foxglove_publish_topic` | 透過 Foxglove bridge 發布 ROS 2 JSON message。 |
| `MarkerArray` | 將 Rhino 幾何轉成 `visualization_msgs/msg/MarkerArray` JSON message。 |
| `PlanningScene` | 將 Rhino Mesh 轉成 MoveIt 2 `moveit_msgs/msg/PlanningScene` diff message。 |
| `urdf_loader` | 載入 URDF visual mesh 資源，轉成 Grasshopper 可傳遞的 mesh asset。 |
| `robot_visualizer` | 使用已載入的 URDF visual mesh 與 joint values 建立 robot 顯示 mesh。 |
| `robot_joint_sliders` | 依 URDF movable joint order 建立 joint inputs 與 Number Slider。 |


## Publish MarkerArray Topic from Rhino/Grasshopper
將 Rhino/Grasshopper 中的幾何資訊轉換成 MarkerArray 的標準資訊發佈至 ROS 中。

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/IaVoYOQ10nc"
    title="gh-ros2 MarkerArray Publisher"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## Load Robot Model by URDF file
透過標準的 URDF 檔案在 Rhino/Grasshopper 中載入機器人模型與**對應的關節參數**。

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/6xpqeLDwdts"
    title="gh-ros2 URDF Robot Loader"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
