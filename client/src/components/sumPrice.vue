<template>
  <div
    class="sumPrice h-[64px] w-full bg-[#ffffff] flex justify-center items-center fixed bottom-0 space-between
    border-t-[0.5px] border-[#f2f2f2] border-solid"
  >
    <div class="forecast flex w-[60%]">
      <!-- 使用插槽，插入价格 -->
      <slot name="price"></slot>
    </div>
    <div
      class="next h-[40px] w-10 flex justify-center items-center 
            border-[2px] border-[#000000] border-solid rounded-full bg-[#000000] text-[#ffffff] text-[16px] font-bold"
    >
      <!-- 使用插槽，插入下一步按钮 -->
      <slot name="step"></slot>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped></style>
