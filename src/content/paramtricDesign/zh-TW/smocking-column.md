---
title: "Smocking Column"
description: "Grasshopper 與 Kangaroo 表面模擬｜將布料縐摺規則延伸至面板與柱體。"
order: 3
cover: "images/paramtric-design/smocking-column/cover.jpg"
---

# Smocking Column

<div class="image-grid image-grid-3">
  <img src="https://ik.imagekit.io/cheng3n/smocking/Smocking%20Column%2001.jpg" alt="Smocking Column 01" />
  <img src="https://ik.imagekit.io/cheng3n/smocking/Smocking%20Column%2002.jpg" alt="Smocking Column 02" />
  <img src="https://ik.imagekit.io/cheng3n/smocking/Smocking%20Column%2003.jpg" alt="Smocking Column 03" />
</div>

---

<div class="image-grid image-grid-2">
  <img src="https://ik.imagekit.io/cheng3n/smocking/Smocking%20Panel%2001.jpg" alt="Smocking Panel 01" />
  <img src="https://ik.imagekit.io/cheng3n/smocking/Smocking%20Panel%2002.jpg" alt="Smocking Panel 02" />
</div>

## Introduction

本專案使用 Grasshopper 的 Kangaroo 物理引擎進行 Smocking Surface Simulation，以 Smocking（布料縐摺）為靈感，建立一套以參數控制的表面起伏生成流程。透過設定 Anchor（固定點）、Springs（彈簧／拉力連結）與 Mesh（網格）的關係，模擬縫點拉扯所造成的收縮與隆起，快速生成多組可調的 smocking pattern，並將其延伸至面板與柱體等不同幾何載體，形成具節奏感與方向性的表面語彙。

<div class="not-prose my-6 aspect-video overflow-hidden rounded-lg bg-base-200">
  <video
    class="h-full w-full"
    src="https://ik.imagekit.io/cheng3n/smocking/smocking_sim.mp4?updatedAt=1772170048204"
    controls
    playsinline
    preload="metadata">
  </video>
</div>

#### 平面（Panel / 2D Pattern）

以平面網格作為基底，透過不同的縫點分佈（Anchor）與拉力連結（Springs）生成多組 smocking 紋理。此部分著重比較縫點密度、排列規則與拉力配置對紋理的方向性、節奏與尺度控制，並作為面板類表皮的圖樣生成基礎。

#### 柱體（Column / 3D Pattern）

將相同的縫點規則與拉力系統套用至柱體曲面，觀察 smocking 紋理在曲率與垂直方向延展下的變形特徵。此部分強調紋理如何沿柱身連續發展、在轉折處產生張力變化，以及整體量體在視覺與空間尺度上的表現。

<div class="image-grid image-grid-3">
  <img src="https://ik.imagekit.io/cheng3n/smocking/001.jpg" alt="Smocking pattern 1" />
  <img src="https://ik.imagekit.io/cheng3n/smocking/002.jpg" alt="Smocking pattern 2" />
  <img src="https://ik.imagekit.io/cheng3n/smocking/003.jpg" alt="Smocking pattern 3" />
</div>
