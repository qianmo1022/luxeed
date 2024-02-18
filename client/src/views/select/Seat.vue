<template>
  <preview>
    <template v-slot:preview>
      <img
        class="object-cover w-full h-full"
        src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/attribute/99730/FBBF36ED8CE4AF18B29BC497A1EDBAA5.jpg"
      />
    </template>
    <template v-slot:add>
      <div
        class="border-[1px] border-[#000000] border-solid rounded-md flex flex-col w-full h-[72px] mb-1"
        :class="{'border-[2px]': true}"
      >
        <div class="container p-[10px]">
          <div class="title text-[16px] font-bold">无零重力座椅</div>
          <div class="extra text-[14px] text-[#666666] mt-[5px]">价格已包含</div>
        </div> 
      </div>
      <div
        class="border-[1px] border-[#000000] border-solid rounded-md flex flex-col w-full h-[72px]"
        :class="{'border-[2px]': false}"
      >
        <div class="container p-[10px]">
          <div class="title text-[16px] font-bold">有零重力座椅</div>
          <div class="extra text-[14px] text-[#666666] mt-[5px]">+10000元</div>
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
      <router-link to="/select/optional">下一步</router-link>
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
