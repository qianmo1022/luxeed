<template>
  <div class="preview w-full h-[211px] mt-4 mb-4">
    <!-- 外观预览 -->
    <img
      class="object-cover w-full h-full"
      src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/GB57010623/30263B66BFEA15F932E7DB355E0B9C1Emp.png"
    />
  </div>
  <div
    class="color-info flex flex-col justify-center items-center mt-4 mb-4 h-6"
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
