<template>
  <div>Page: Detail03 id={{ id }}</div>
</template>

<script lang="ts" setup>
// 拿到动态路由的参数
let route = useRoute();
const { id } = route.params;
</script>

<style scoped></style>
