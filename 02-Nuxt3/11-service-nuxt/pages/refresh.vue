<template>
  <div>
    refresh

    {{ pending }}

    <div>
      <button @click="refreshPage">点击刷新</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const BASE_URL = "http://codercba.com:9060/juanpi/api";

const count = ref(1);

interface IResultData {
  code: number;
  data: any;
}

// 1. 点击刷新时，是在server端执行，客户端不会发起网络请求，水合之后客户端可以拿到当前数据
const { data, refresh, pending } = await useFetch<IResultData>(
  BASE_URL + "/goods",
  {
    method: "post",
    body: {
      count,
    },
  }
);
console.log(data.value?.data);

function refreshPage() {
  count.value++;
  refresh(); // client 刷新请求
}
</script>

<style scoped></style>
