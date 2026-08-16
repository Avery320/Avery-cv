---
title: "RoboSight"
description: "Human-Computer Interface | iOS App | ROS"
order: 3
---

# RoboSight
[GitHub](https://github.com/Avery320/RoboSight) | [ROS Docker](../ros-docker/)

## Introduction
RoboSight 是一個透過 iOS 設備作為機器人外部感測裝置的專案。使用 Zenoh 作為 middleware 與 ROS 連線。目前已開發：
- IMU
  - 整合至 `/tf`
- 相機功能
  - 發送 `/robosight/camera/image_raw/compressed`
  - 發送 `/robosight/camera/camera_info`
- robot
  - 載入 [robosim_library](https://github.com/Avery320/robosim_library) 機械手臂
  - 可訂閱 `joint_states`，查看機器人當下姿態。

## RoboSight Interface
<div class="image-grid image-grid-3">
  <img src="/Avery-cv/images/robotics/robosight/robosight.png" alt="RoboSight start page" />
  <img src="/Avery-cv/images/robotics/robosight/camera.png" alt="RoboSight camera interface" />
  <img src="/Avery-cv/images/robotics/robosight/robot.png" alt="RoboSight robot interface" />
</div>

### ROS integration on [RoboSim](https://github.com/Avery320/robot-demo)
![](/Avery-cv/images/robotics/robosight/ros-integration.png)
