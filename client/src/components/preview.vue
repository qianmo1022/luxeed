<template>
  <div class="preview w-full h-[211px] mt-2 mb-2">
    <!-- 外观预览 -->
    <slot name="preview"></slot>
  </div>
  <div class="add flex flex-col justify-center items-center ml-2 mr-2">
    <!-- 是否增加配置 -->
    <slot name="add"></slot>
  </div>
  <div
    class="color-info flex flex-col justify-center items-center mt-2 mb-4 h-6 ml-2 mr-2"
  >
    <!-- 信息展示 -->
    <slot name="info"></slot>
  </div>
  <div class="choose">
    <!-- 颜色选择 -->
    <slot name="choose"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
