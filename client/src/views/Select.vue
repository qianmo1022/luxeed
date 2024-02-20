<template>
  <div class="buy">
    <div class="header-placeholder min-h-5 box-content"></div>
    <!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
    <hwheader></hwheader>

    <div class="header h-4 mt-2 ml-2 flex items-end">
      <!-- items-end 使得文字底部与底部对齐 -->
      <div
        v-for="item in selection"
        :key="item.id"
        class="justify-between items-center mr-2 text-[18px] bottom-0"
        :class="{ 'text-[24px] font-bold': selectedItem === item.value }"
        @click="selectedItem = item.value"
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
import { ref, watch, toRefs,onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSelectStore } from "../store/select";

const router = useRouter();
const route = useRoute();
// const isSelected = ()=>{
//   return route.path.split("/").pop();
// }
// console.log(route.path.split("/").pop());

const { selectedItem,selection } = toRefs(useSelectStore()); //解构赋值，从useSelectStore中获取selection

// 使用watch监听路由变化，当路由变化时，对应加粗子路由的文字
watch(route,async () => {
  selectedItem.value =  route.path.split("/").pop();
  if (selectedItem.value !== 'version') {
    await router.push(`/select/${selectedItem.value}`);
  }
})

</script>

<style scoped></style>
