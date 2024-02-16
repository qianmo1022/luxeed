<template>
  <div class="buy">
    <div class="header-placeholder min-h-5 box-content"></div>
    <!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
    <hwheader></hwheader>

    <div class="header h-4 mt-2 ml-2 flex items-end ">
      <!-- items-end 使得文字底部与底部对齐 -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="justify-between items-center mr-2 text-[18px] bottom-0"
        :class="{ 'text-[24px] font-bold': selectedItem === index }"
        @click="selectedItem = index"
      >
        <router-link :to="`/select/${items[selectedItem].value}`">
            {{ item.name }}
        </router-link> 
      </div>
    </div>
    <div class="content mt-2">
        <div class="preview h-[211px] bg-black" v-if="selectedItem != 0">
        </div>  
            <router-view></router-view> 
    </div>
    <div class="sumPrice h-[40px] bg-[#f1f3f5] flex justify-center items-center fixed bottom-0">
      <div class="price">
        预计总价：￥249000
      </div>
      <div class="next">
        下一步
      </div>
    </div>
    <!-- 底部占位 -->
    <div class="bottom-placeholder min-h-5 box-content"></div>
  </div>
</template>

<script setup>
import hwheader from "../components/hwheader.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const selectedItem = ref(0);
const items = [
  {
    name: "版本",
    type: "version",
    value: "version",
  },
  {
    name: "外观",
    type: "preview",
    value: "exterior",
  },
  {
    name: "内饰",
    type: "preview",
    value: "trim",
  },
  {
    name: "轮毂",
    type: "preview",
    value: "hub",
  },
  {
    name: "座椅",
    type: "preview",
    value: "seat",
  },
  {
    name: "选装",
    type: "preview",
    value: "optional",
  },
];
</script>

<style scoped></style>
