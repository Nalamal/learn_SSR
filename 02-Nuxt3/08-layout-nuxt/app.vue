<template>
  <!-- 布局 -->
  <NuxtLayout :name="name">
    <NuxtLink to="/">
      <button>home</button>
    </NuxtLink>
    <NuxtLink to="/category">
      <button>category</button>
    </NuxtLink>
    <NuxtLink to="/cart">
      <button>cart</button>
    </NuxtLink>
    <!-- 页面 -->
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
// const name = "default";
const name = "custom-layout";
</script>
