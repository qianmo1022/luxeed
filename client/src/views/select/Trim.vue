<template>
  <preview>
    <template v-slot:preview>
      <img
        class="object-cover w-full h-full"
        src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/attribute/99720/D061376A2D9A8A71D759E974DC915549.jpg"
      />
    </template>
    <template v-slot:info>
      <div class="title text-[16px] font-bold">月影灰</div>
      <div class="extra text-[14px] text-[#666666]">价格已包含</div>
    </template>
    <template v-slot:choose>
      <div class="color-list flex justify-center items-center mt-4 ml-4 mr-4">
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#b5b5b5]"></div>
        </div>
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#81363b]"></div>
        </div>
        <div class="color-box w-[60px] h-[60px] flex justify-center items-center">
          <div class="color-item w-4 h-4 rounded-full bg-[#c0bbb4]"></div>
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
        <router-link to="/select/hub">下一步</router-link>
        </template>
    </sumPrice>
</template>

<script setup>
import preview from "../../components/preview.vue";
import sumPrice from "../../components/sumPrice.vue";
</script>

<style scoped></style>
