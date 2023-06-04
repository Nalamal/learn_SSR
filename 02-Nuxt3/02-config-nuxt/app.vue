<template>
  <div>
    <h2>Hello Nuxt3</h2>
    <!-- 优先级最高 -->
    <Meta name="key" content="key key key"></Meta>
    <Title>Template Title</Title>
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
// const runtimeConfig = useRuntimeConfig();
// if (process.server) {
//   console.log(runtimeConfig.appKey);
//   console.log(runtimeConfig.public.baseURL);
// }
// if (process.client) {
//   // console.log(runtimeConfig.appKey); // undefined
//   console.log(runtimeConfig.public.baseURL);
// }
// console.log(process.env.appKey); // undefined

// 3. 获取appConfig
let appConfig = useAppConfig();
// server client
console.log(appConfig.title);
console.log(appConfig.theme.primary);
// client
onMounted(() => {
  document.title = appConfig.title;
});

// 4. 动态的给app所有的页面添加head的内容, 优先级低于内置
useHead({
  title: "app useHead", // Ref
  bodyAttrs: {
    class: "Nuxt App",
  },
  meta: [
    {
      name: "desc",
      content: "你看别人代码，写申请书了吗？",
    },
  ],
  style: [],
  link: [],
  // script: [
  //   {
  //     src: "http://test.com",
  //     body: true,
  //   },
  // ],
});
</script>
