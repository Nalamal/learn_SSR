<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
// 方式一：创建插件
const nuxtApp = useNuxtApp();
nuxtApp.provide("formatData", () => {
  return "2020-12-14";
});
nuxtApp.provide("version", "1.0.0");
// 使用插件
console.log(nuxtApp.$formatData());
console.log(nuxtApp.$version);
if (process.client) {
  console.log(nuxtApp.$formatPrice(100));
}
</script>
