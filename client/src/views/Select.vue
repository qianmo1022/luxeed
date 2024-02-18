<template>
  <div class="buy">
    <div class="header-placeholder min-h-5 box-content"></div>
    <!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
    <hwheader></hwheader>

    <div class="header h-4 mt-2 ml-2 flex items-end">
      <!-- items-end 使得文字底部与底部对齐 -->
      <div
        v-for="(item, index) in selection"
        :key="index"
        class="justify-between items-center mr-2 text-[18px] bottom-0"
        :class="{ 'text-[24px] font-bold': selectedItem === index}"
        @click="selectedItem = index"
      >
      <!-- 通过点击事件改变selectedItem的值，从而改变样式 -->
        <router-link :to="`/select/${item.value}`">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="content mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import hwheader from "../components/hwheader.vue";
import { ref,watchEffect,toRefs } from "vue";
import { useRouter } from 'vue-router';
import { useSelectStore } from "../store/select";

const router = useRouter();


const { selectedItem,selection } = toRefs(useSelectStore())//解构赋值，从useSelectStore中获取selection
// console.log(selection);

  console.log(selectedItem.value);

</script>

<style scoped></style>
