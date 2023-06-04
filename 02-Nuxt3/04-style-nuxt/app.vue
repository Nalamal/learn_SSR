<template>
  <div>
    <!-- 1. 样式 -->
    <div class="global-style">1.NuxtWelcome</div>
    <div class="global-style1">2.全局样式</div>
    <div class="global-style2">3.全局样式</div>

    <!-- public资源的访问 -->
    <!-- <img src="/user.png" alt="" />
    <div class="bg-public"></div> -->

    <!-- assets资源的访问 -->
    <!-- <img src="@/assets/images/avatar.png" alt="" /> -->
    <!-- <div class="bg-assets"></div> -->
    <!-- base64 -->
    <!-- <img :src="ImgFeel" alt="" /> -->

    <!-- 字体图标资源的访问 -->
    <i class="iconfont icon-bianji"></i>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
// import ImgFeel from "@/assets/images/feel.png";
</script>

<style>
/* @import "@/assets/styles/variables.scss"; */
.global-style {
  color: red;
}
.bg-public {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  background-image: url(/user.png);
}
.bg-assets {
  width: 140px;
  height: 140px;
  border: 1px solid red;
  background-image: url(@/assets/images/avatar.png);
}
.icon-bianji {
  font-size: 20px;
  color: red;
}
</style>
