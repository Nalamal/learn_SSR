<template>
  <div>
    <div>
      <!-- 1.组件的方式 -->
      <NuxtLink to="/">
        <button>home</button>
      </NuxtLink>

      <!-- 2.Navigate的方式 -->
      <!-- <NuxtLink @click="goToCategory">
        <button>category</button>
      </NuxtLink> -->
      <button @click="goToCategory">category</button>

      <!-- 3. 通过编程的方式进行导航 -->
      <button @click="goToCart">cart</button>
      <button @click="goBack">back</button>
    </div>
    <!-- 是对router-view的封装 -->
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
function goToCategory() {
  return navigateTo("/category");

  // return navigateTo(
  //   {
  //     path: "/category",
  //     query: {
  //       id: 200,
  //     },
  //   },
  //   {
  //     replace: true, // 是否是替换当前页面
  //   }
  // );

  // return navigateTo("https://jd.com", {
  //   external: true,
  // });
}

// useRouter
let router = useRouter();
function goToCart() {
  router.push("/cart"); // 更推荐使用 navigateTo
}
function goBack() {
  router.go(-1);
}
// 路由的守卫
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
});
</script>
