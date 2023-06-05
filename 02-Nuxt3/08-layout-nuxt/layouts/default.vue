<template>
  <div class="layout">
    <div class="header">
      <div>我是Header</div>
      <div>
        <NuxtLink to="/">
          <button>home</button>
        </NuxtLink>
        <NuxtLink to="/category">
          <button>category</button>
        </NuxtLink>
        <NuxtLink to="/cart">
          <button>cart</button>
        </NuxtLink>
        <NuxtLink to="/profile">
          <button>profile</button>
        </NuxtLink>
        <NuxtLink to="/login">
          <button>login</button>
        </NuxtLink>
      </div>
    </div>
    <!-- 页面的内容 -->
    <slot></slot>
    <div class="footer">我是Footer</div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  text-align: center;
  height: 80px;
  font-size: 30px;
  background-color: red;
}
.footer {
  border: 1px solid green;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  background-color: #cdcdcd;
}
</style>
