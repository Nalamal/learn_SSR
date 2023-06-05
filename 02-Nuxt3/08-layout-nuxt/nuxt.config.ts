// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  routeRules: {
    "/": { ssr: true }, // ssr 应用
    "/category": { ssr: false }, // spa 应用
    // 3.0.0-12rc -> NetLify
    "/cart": { static: true }, // 只会在构建时生成一次静态页面
    "/profile": { swr: true }, // 会生成多次静态页面 （会自动重新验证页面是否需要重新生成）
  },
});
