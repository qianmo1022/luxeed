<template>
  <preview>
    <template v-slot:preview>
      <img
        class="object-cover w-full h-full"
        src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/GB57010623/30263B66BFEA15F932E7DB355E0B9C1Emp.png"
      />
    </template>
    <template v-slot:info>
      <div class="title text-[16px] font-bold">鎏金黑</div>
      <div class="extra text-[14px] text-[#666666]">价格已包含</div>
    </template>
    <template v-slot:choose>
      <div class="color-list flex justify-center items-center mt-4 ml-4 mr-4">
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#000000]"></div>
        </div>
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#ededed]"></div>
        </div>
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#666666]"></div>
        </div>
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#6e839b]"></div>
        </div>
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#cdc8c2]"></div>
        </div>
      </div>
    </template>
  </preview>

  <!-- 打造components模板，2,3,4为同一个模板使用不同的插槽，5,6为同一个模板使用不同的插槽 -->
  <sumPrice>
    <template v-slot:price>
      <div class="content flex justify-center items-center">
        <div class="text-[12px] text-[#666666]">预计总价：</div>
        <div class="text-[16px] font-bold">￥249000</div>
      </div>
    </template>
    <template v-slot:step>
      <!-- 通过下一步按钮跳转到外观选择页面 -->
      <router-link to="/select/trim">下一步</router-link>
    </template>
  </sumPrice>
  <!-- 底部占位 -->
  <div class="bottom-placeholder h-[64px] box-content"></div>
</template>

<script setup>
import sumPrice from "../../components/sumPrice.vue";
import preview from "../../components/preview.vue";

</script>

<style scoped></style>
