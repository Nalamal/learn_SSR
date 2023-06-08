<template>
  <div>home</div>
</template>

<script lang="ts" setup>
const BASE_URL = "http://codercba.com:9060/juanpi/api";

interface IResultData {
  code: number;
  data: any;
}

// 1.使用$fetch来发起网络请求
// server and client
// $fetch(BASE_URL + "homeInfo", {
//   method: "GET",
// }).then((res) => {
//   console.log(res);
// });

// 2.使用官方提供的 hooks API ( 在刷新页面时，可以减少客户端发起的一次请求 )
const { data } = await useAsyncData<IResultData>("homeInfo", () => {
  return $fetch(BASE_URL + "/homeInfo", { method: "GET" });
});
console.log(data.value?.data);

// const { data: newData } = await useAsyncData<IResultData>("homeInfo", () => {
//   return $fetch(BASE_URL + "/goods", { method: "POST" });
// });
// console.log(newData.value?.data);

// 3.useAsyncData的简写 useFetcch
// const { data } = await useFetch<IResultData>(BASE_URL + "/homeInfo", {
//   method: "GET",
// });
// console.log(data.value?.data);

// 4.useFetch 的 options GET
// const { data } = await useFetch<IResultData>("/homeInfo", {
//   method: "GET",
//   baseURL: BASE_URL,
//   query: {
//     name: "liujun",
//   },
//   params: {}, // query 的别名
//   headers: {},
// });
// console.log(data.value?.data);

// 5.useFetch 的 options POST
// const { data } = await useFetch<IResultData>("/goods", {
//   method: "POST",
//   baseURL: BASE_URL,
//   body: {
//     count: 6,
//   },
// });
// console.log(data.value?.data);

// 6.拦截器
// const { data } = await useFetch<IResultData>("/goods", {
//   method: "POST",
//   baseURL: BASE_URL,
//   body: {
//     count: 6,
//   },
// 请求的拦截 (server and client)
//   onRequest({ request, options }) {
//     console.log(options.method);
//     options.headers = {
//       token: "xxx",
//     };
//   },
//   onRequestError({ request, options, error }) {
//     console.log("onRequestError");
//   },
//   onResponse({ request, response, options }) {
//     console.log("onResponse");
//     // console.log(response._data);
//   },
//   onResponseError({ request, response, options, error }) {
//     console.log("onResponseError");
//   },
// });
// console.log(data.value?.data);

// server and client
const cookie = useCookie("token");
console.log(cookie.value);
</script>
