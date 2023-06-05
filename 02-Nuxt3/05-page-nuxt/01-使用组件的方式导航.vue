<template>
  <div>
    <div>
      <!-- router-link -->
      <NuxtLink to="/">
        <button>home</button>
      </NuxtLink>

      <NuxtLink
        :to="{
          path: 'category',
          query: {
            id: 100,
          },
        }"
      >
        <button>category</button>
      </NuxtLink>

      <NuxtLink to="/cart">
        <button>cart</button>
      </NuxtLink>

      <NuxtLink to="/profile" active-class="active-profile">
        <button>profile</button>
      </NuxtLink>

      <NuxtLink to="/find" replace>
        <button>find replace</button>
      </NuxtLink>

      <a href="/more">
        <button>more</button>
      </a>

      <NuxtLink to="https://www.jd.com" target="_blank">
        <button>jd.com</button>
      </NuxtLink>
    </div>
    <!-- 是对router-view的封装 -->
    <NuxtPage></NuxtPage>
  </div>
</template>
