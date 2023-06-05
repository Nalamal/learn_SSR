<template>
  <div>Page: Detail02 id={{ id }} name={{ name }}</div>
</template>

<script lang="ts" setup>
// 拿到动态路由的参数
let route = useRoute();
const { id } = route.params;
const { name } = route.query;
</script>

<style scoped></style>
