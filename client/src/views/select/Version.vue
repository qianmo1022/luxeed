<template>
  <div class="content ml-2 mr-2 mt-2">
    <!-- 选中的版本边框加粗 -->
    <div
      class="box border-[1px] border-[#eaeaea] border-solid rounded-md mt-2"
      :class="{ 'border-black border-[2px]': selectedItem === index }"
      v-for="(item, index) in items"
      :key="index"
      @click="selectedItem = index"
    >
      <div class="infoBox ml-2 mr-2 mt-2 mb-2 text-[16px] font-bold">
        {{ item.name }}
        <div
          class="info text-[12px] text-[#666] font-normal mt-[2px]"
          v-for="(info, index) in item.info"
          :key="index"
        >
          {{ info }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const selectedItem = ref(0);

const items = [
  {
    name: "智界 S7 Pro",
    info: {
      price: "·24.98万元起",
      battery: "·550km续航 HUAWEI ADS 进阶版",
      type: "·高能大空间智慧轿车",
    },
  },
  {
    name: "智界 S7 Max",
    info: {
      price: "·28.98万元起",
      battery: "·705km长续航 HUAWEI ADS 高阶版",
      type: "·高能大空间智慧轿车",
    },
  },
  {
    name: "智界 S7 Max+",
    info: {
      price: "·31.98万元起",
      battery: "·855km超长续航 HUAWEI ADS 高阶版",
      type: "·高能大空间智慧轿车",
    },
  },
  {
    name: "智界 S7 Max RS",
    info: {
      price: "·34.98万元起",
      battery: "·630km长续航 HUAWEI ADS 高阶版",
      type: "· 标配空悬、CDC、 前Brembo卡钳",
    },
  },
];
</script>

<style lang="scss" scoped></style>
