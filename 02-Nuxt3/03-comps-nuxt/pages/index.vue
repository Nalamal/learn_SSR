<template>
  <div class="home">
    <div>我是Home Page</div>

    <!-- <ClientOnly fallback-tag="h3" fallback="loading....">
      <div>我只会在 client 中渲染</div>
    </ClientOnly> -->

    <ClientOnly>
      <div>我只会在 client 中渲染</div>
      <template #fallback>
        <h3>服务端渲染的 loading 元素</h3>
      </template>
    </ClientOnly>
  </div>
</template>
