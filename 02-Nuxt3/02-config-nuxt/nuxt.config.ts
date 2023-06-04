// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  // 1.这里定义的运行时配置不会导入到 process.env 中 优先级最低
  runtimeConfig: {
    appKey: "aabbcc", // server
    public: {
      baseURL: "http://codercba.com", // server and client -> client_bundle.js
    },
  },

  // 2.定义应用的配置 优先级最低
  appConfig: {
    // title: "Hello nuxt3",
    // theme: {
    //   primary: "yellow",
    // },
  },

  // 3.app 配置 优先级最低
  app: {
    // 给app所有的页面的head添加的配置(SEO, 添加外部的资源)
    head: {
      title: "Hello Nuxt",
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no ",
      meta: [
        {
          name: "keywords",
          content: "nuxt keywords test",
        },
        {
          name: "description",
          content: "nuxt descrption test",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "favicon.ico",
          type: "image/x-icon",
        },
      ],
      style: [
        {
          children: `body{ color: red; }`,
        },
      ],
      // script: [
      //   {
      //     src: "http://codecba.com",
      //   },
      // ],
    },
  },

  // 4.spa
  ssr: false,
  router: {
    options: {
      hashMode: true, // 只在spa应用是有效的
    },
  },
});
