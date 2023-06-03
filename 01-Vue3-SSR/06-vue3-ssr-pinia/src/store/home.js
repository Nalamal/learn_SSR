import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state() {
    return { count: 100 };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    // async fetchHomeData() {
    //   let res = await axios.get();
    //   this.homeInfo = res.data;
    // },
  },
});
