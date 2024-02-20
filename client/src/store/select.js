// 数据管理模块 state actions
import { ref } from "vue";
import { defineStore } from "pinia";
// vue3.0 hook函数
export const useSelectStore = defineStore("select", () => {
    const selectedItem = ref('version')
  const selection = ref([
    {
      name: "版本",
      id: 0,
      type: "version",
      value: "version",
    },
    {
      name: "外观",
      id: 1,
      type: "appearance",
      value: "appearance",
    },
    {
      name: "内饰",
      id: 2,
      type: "appearance",
      value: "trim",
    },
    {
      name: "轮毂",
      id: 3,
      type: "appearance",
      value: "hub",
    },
    {
      name: "座椅",
      id: 4,
      type: "preview",
      value: "seat",
    },
    {
      name: "选装",
      id: 5,
      type: "preview",
      value: "optional",
    },
  ]);
  const version = ref([
    {
      name: "智界 S7 Pro",
      id: 0,
      info: {
        price: "·24.98万元起",
        battery: "·550km续航 HUAWEI ADS 进阶版",
        type: "·高能大空间智慧轿车",
      },
    },
    {
      name: "智界 S7 Max",
      id: 1,
      info: {
        price: "·28.98万元起",
        battery: "·705km长续航 HUAWEI ADS 高阶版",
        type: "·高能大空间智慧轿车",
      },
    },
    {
      name: "智界 S7 Max+",
      id: 2,
      info: {
        price: "·31.98万元起",
        battery: "·855km超长续航 HUAWEI ADS 高阶版",
        type: "·高能大空间智慧轿车",
      },
    },
    {
      name: "智界 S7 Max RS",
      id: 3,
      info: {
        price: "·34.98万元起",
        battery: "·630km长续航 HUAWEI ADS 高阶版",
        type: "· 标配空悬、CDC、 前Brembo卡钳",
      },
    },
  ]);
  return {
    selectedItem,
    selection,
    version,
  };
});
