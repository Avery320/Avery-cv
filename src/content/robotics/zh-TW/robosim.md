---
title: "RoboSim"
description: "Human-Computer Interface | ROS | Robotics | Grasshopper"
order: 1
cover: "images/robotics/robosim/cover.png"
---

# RoboSim


[Github](https://github.com/avery320/robot-demo) | [Web](https://avery320.github.io/robot-demo/javascript/example/bundle/main.html) | [ros-docker](../ros-docker/)


## Introduction
RoboSim 是一個面向營建機器人應用的控制平台，聚焦在銜接建築設計資料與機械手臂建造流程之間的落差。平台整合機器人模型顯示、幾何資料管理、Grasshopper 資料串接與控制流程，讓參數化設計中的空間與路徑資訊能更直覺地進入機器人操作環境。

RoboSim 以 URDF 作為機器人模型與控制資訊的核心基礎，前段整合了，並整合 Offline Programming（ROS2） 與 Online Control 兩種控制系統。Offline Programming 適用於預先規劃、模擬與重複性較高的建造任務，產生穩定、可執行的機器人路徑與程式檔案；Online Control 則面向現場操作情境，透過即時感測與狀態回饋，協助操作者理解現場環境與機器人狀態，進行更即時的操作判斷與控制。

### 特色
- 以 URDF 驅動。
- ROS2 整合，ROS Topic 發布與訂閱。
- 正向和逆向運動學（FK/IK）求解器，KUKA 與 HIWIN 機器人程式生成。
- 幾何顯示與模擬。
- Grasshopper Connector 整合 Grasshopper 中的操作。

## [Demo-Web](https://avery320.github.io/robot-demo/javascript/example/bundle/main.html)

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://avery320.github.io/robot-demo/javascript/example/bundle/main.html"
    title="RoboSim Web Demo"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>

## Olp IK-Solver

### IK-Solver

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/EqTBp9LsCHo"
    title="RoboSim IK Solver"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

### Olp IK-Solver & Collision Detection

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/Y7RFd2gGpgY"
    title="RoboSim IK Solver and Collision Detection"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## RoboSim grasshopper plug-in - control tcp

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/APWbzOoPNg0"
    title="RoboSim Grasshopper TCP Control"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## Connect ROS backend and using Ipad control HIWIN robotic arm

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/KUGkMLKQvHI"
    title="iPad Control HIWIN Robotic Arm"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## 相關應用

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/gtMqxSNJJpk"
    title="Rebar Placement"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <iframe
    class="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/xsttGVKjYsg"
    title="Robot Connection Control"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
