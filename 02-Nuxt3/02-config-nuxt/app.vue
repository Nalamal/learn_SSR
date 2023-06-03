<template>
  <div>
    <h2>Hello Nuxt3</h2>
  </div>
</template>

<script setup>
// 1. 判断代码运行的环境
// if (process.server) {
//   console.log("运行在 server");
// }

// if (process.client) {
//   console.log("运行在 client");
// }

// if (typeof window === "object") {
//   console.log("运行在 client");
// }

// 2. 获取运行时配置(server and client)
const runtimeConfig = useRuntimeConfig();

if (process.server) {
  console.log(runtimeConfig.appKey);
  console.log(runtimeConfig.public.baseURL);
}
if (process.client) {
  // console.log(runtimeConfig.appKey); // undefined
  console.log(runtimeConfig.public.baseURL);
}
</script>
