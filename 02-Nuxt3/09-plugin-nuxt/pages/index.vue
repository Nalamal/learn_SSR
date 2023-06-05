<template>
  <div class="home">Home Page</div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

// 使用插件
console.log(nuxtApp.$formatData());
console.log(nuxtApp.$version);
if (process.client) {
  console.log(nuxtApp.$formatPrice(100));
}
</script>
