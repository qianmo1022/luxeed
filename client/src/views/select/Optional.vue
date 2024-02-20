<template>
    <preview>
      <template v-slot:preview>
        <img
          class="object-cover w-full h-full"
          src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/attribute/99734/D5E90ECBD0BC4599C01191CFB3A6A4A5.jpg"
        />
      </template>
      <template v-slot:add>
        <div
          class="border-[1px] border-[#000000] border-solid rounded-md flex flex-col w-full mb-1"
          :class="{'border-[2px]': true}"
        >
          <div class="container p-[10px]">
            <div class="title text-[16px] font-bold">无科技舒适包</div>
            <div class="extra text-[14px] text-[#666666] mt-[5px]">价格已包含</div>
          </div> 
        </div>
        <div
          class="border-[1px] border-[#000000] border-solid rounded-md flex flex-col w-full"
          :class="{'border-[2px]': false}"
        >
          <div class="container p-[10px]">
            <div class="title text-[16px] font-bold">有科技舒适包</div>
            <div class="extra text-[14px] text-[#666666] mt-[5px]">+15000元</div>
            <div class="extra-info text-[12px] text-[#666666] mt-1">
                主驾按摩/肩枕音响/侧翼，二排通风加热/三温区，氛围灯/香氛
            </div>
          </div> 
        </div>
      </template>
    </preview>
  
    <sumPrice>
      <template v-slot:price>
        <div class="content flex justify-center items-center">
          <div class="text-[12px] text-[#666666]">预计总价：</div>
          <div class="text-[16px] font-bold">￥249000</div>
        </div>
      </template>
      <template v-slot:step>
        <router-link to="/login">预览配置</router-link>
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
  