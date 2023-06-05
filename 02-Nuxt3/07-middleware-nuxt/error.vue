<template>
  <div>Error Page {{ error }}</div>
  <div>
    <button @click="goHome">goHome</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: Object,
});
function goHome() {
  clearError({ redirect: "/" });
}
</script>

<style scoped></style>
