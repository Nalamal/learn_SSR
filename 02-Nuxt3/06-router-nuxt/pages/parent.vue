<script lang="ts" setup></script>

<template>
  <div>
    <div>Page: Parent</div>
    <div>
      <NuxtLink to="/parent">
        <button>default child</button>
      </NuxtLink>
      <NuxtLink to="/parent/child1">
        <button>child1</button>
      </NuxtLink>
      <NuxtLink to="/parent/child2">
        <button>child2</button>
      </NuxtLink>
    </div>
    <!-- 嵌套路由占位符 -->
    <NuxtPage></NuxtPage>
  </div>
</template>

<style scoped></style>
