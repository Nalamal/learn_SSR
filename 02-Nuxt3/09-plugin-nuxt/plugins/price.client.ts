export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      // 自定义插件 格式化价格插件 (创建vue实例就会自动注册)
      formatPrice: (price: number) => {
        return price.toFixed(2);
      },
      // ....
      // key: string    value: any
    },
  };
});
