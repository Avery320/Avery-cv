---
title: "Customized Marching Cubes"
description: "Algorithm Design"
order: 2
cover: "images/paramtric-design/customized-marching-cubes/cover.jpg"
---

# Customized Marching Cubes

## Introduction

<div class="image-grid image-grid-2">
  <div>
    <p>本作品以 Marching Cubes 演算法為基礎，將標準 case 重新設計為可組合的幾何構件，探索體素（Voxel）拓樸所能生成的三維型態。</p>
    <p>生成資料來自康威生命遊戲（Game of Life）與隨機點位分佈，並使用 Rhino SubD 將離散、硬邊的體素幾何轉化為連續曲面。各構件可依規則聚合，形成具辨識度且可持續延伸的造型系統。</p>
  </div>
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/elements.jpg" alt="Customized Marching Cubes elements" />
</div>

#### Game of Life

Game of Life 生成方法以規則迭代產生點位，並將各次結果沿垂直方向堆疊為 3D 體素資料。系統透過 Marching Cubes 提取整體輪廓，再以自訂構件取代標準面片，最後依體素矩陣的位置完成聚合。

![Game of Life](https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/game_of_life.jpg)

#### Random Point Generation

<div class="image-grid image-grid-3">
  <div>
    <p>Random Point Generation 則以隨機點雲作為生成起點，透過密度、範圍與分層規則控制分佈，再轉換為 3D 體素資料。系統後續沿用相同流程提取外形、替換自訂構件並完成聚合。</p>
  </div>
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/gif01.gif" alt="Random point generation example 1" />
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/gif02.gif" alt="Random point generation example 2" />
</div>

## 軌道漂流城｜Orbit-Drift City

在近地軌道的場景中，元件聚合體被視為一座正在移動的拼裝城市：由大量模組單元在空間中堆疊、銜接，形成可穿越的縫隙、框架與艙體般的結構層。隨著位置與視角改變，同一座結構呈現兩種截然不同的畫面感——掠過夜側（Night-Side Pass）時，地表光帶成為背景，強調結構的尺度與貼近地球的速度感；轉向深空（Deep-Space Turn）時，背景轉為星海與遠方的地球，模組細節被拉出更強的輪廓與景深，讓「漂浮中的空間構築」更清晰可讀。

<div class="image-grid image-grid-2">
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/001.jpg" alt="掠過夜側｜Night-Side Pass" />
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/001-2.jpg" alt="轉向深空｜Deep-Space Turn" />
</div>

## 零件星雲｜Module Nebula

在宇宙場景中，元件群以漂浮聚合的方式形成一片片鬆散卻有結構的「模組雲團」，像是碎片化艙體與拼裝殘骸在軌道上緩慢漂移。透過調整聚合密度、連結方式與分佈範圍，讓同一套元件在空間中呈現不同的聚落形態：近看能讀到大量細碎的拼接痕跡與局部結構，遠看則形成清楚的輪廓與流動方向，拉出前後景深與尺度層次，強化整體的漂浮感與空間張力。

<div class="image-grid image-grid-3">
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/Section%20in%20Universe_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201.jpg?updatedAt=1765525969324" alt="Module Nebula section 1" />
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/Section%20in%20Universe-02.jpg?updatedAt=1765525968916" alt="零件星雲｜Module Nebula" />
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/Section%20in%20Universe-03.jpg?updatedAt=1765525968583" alt="Module Nebula section 3" />
</div>

## 模組化地景｜Modular Terrain

元件以不同的聚合狀態呈現：有些群落漂浮在空中，像是尚未落地的模組雲團；有些則逐步接地、堆疊、延展，形成更具重量感的巨構或遺跡。模組沿著地形聚集，長出柱狀量體、洞口般的框架與牆體斷面，建立清楚的尺度與空間層次。畫面同時保留兩種閱讀：近看是密集的拼接細節與單元語彙，遠看則是地景輪廓與結構張力的整體構成。

<div class="image-grid image-grid-3">
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/002.jpg" alt="Modular Terrain 1" />
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/003.jpg?updatedAt=1772043550549" alt="Modular Terrain 2" />
  <img src="https://ik.imagekit.io/cheng3n/Customized_Marching_Cubes/004.jpg" alt="Modular Terrain 3" />
</div>
