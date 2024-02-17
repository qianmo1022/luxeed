<template>
  <div class="buy">
    <div class="header-placeholder min-h-5 box-content"></div>
    <!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
    <hwheader></hwheader>

    <div class="header h-4 mt-2 ml-2 flex items-end">
      <!-- items-end 使得文字底部与底部对齐 -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="justify-between items-center mr-2 text-[18px] bottom-0"
        :class="{ 'text-[24px] font-bold': selectedItem === index }"
        @click="selectedItem = index"
      >
      <!-- 通过点击事件改变selectedItem的值，从而改变样式 -->
        <router-link :to="`/select/${items[selectedItem].value}`">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="content mt-2">
      <router-view></router-view>
    </div>
    <sumPrice> 
      <template v-slot:price></template>
      <template v-slot:step>
        <!-- 通过下一步按钮跳转到外观选择页面 -->
        <router-link to="/select/appearance">下一步</router-link>
      </template>
    </sumPrice>
    <!-- 底部占位 -->
    <div class="bottom-placeholder h-[64px] box-content"></div>
  </div>
</template>

<script setup>
import hwheader from "../components/hwheader.vue";
import sumPrice from "../components/sumPrice.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const selectedItem = ref(0);
const items = [
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
];
</script>

<style scoped></style>
