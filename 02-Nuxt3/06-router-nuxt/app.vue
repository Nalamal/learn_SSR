<template>
  <div>
    <NuxtLink to="/">
      <button>Home</button>
    </NuxtLink>
    <NuxtLink to="/detail01">
      <button>Detail01</button>
    </NuxtLink>
    <NuxtLink to="/detail02">
      <button>Detail02/index</button>
    </NuxtLink>
    <NuxtLink to="/detail02/abc?name=zs">
      <button>Detail02/abc</button>
    </NuxtLink>
    <NuxtLink to="/detail03/user-123456">
      <button>Detail03/user-123456</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin">
      <button>Detail04-admin</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin/abc">
      <button>Detail04-admin/abc</button>
    </NuxtLink>
    <NuxtLink to="/detail05">
      <button>Detail05</button>
    </NuxtLink>
    <NuxtLink to="/parent">
      <button>Parent</button>
    </NuxtLink>
    <!-- router-view -->
    <NuxtPage></NuxtPage>
  </div>
</template>
