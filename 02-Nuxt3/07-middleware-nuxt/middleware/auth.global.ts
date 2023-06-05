// 这个优先级是比较高的
export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = false;
  console.log("index 第三个中间件 auth.global.ts");
  // if (!isLogin && to.fullPath !== "/login") {
  //   return navigateTo("/login");
  // }
});
