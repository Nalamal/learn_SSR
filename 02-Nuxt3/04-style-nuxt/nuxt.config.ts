// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/main.css",
    "@/assets/styles/global.scss",
    "@/assets/cus-font/iconfont.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 自动的给 scss 模块首行添加额外的数据
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
});
