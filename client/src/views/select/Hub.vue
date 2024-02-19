<template>
  <preview>
    <template v-slot:preview>
      <img
        class="object-cover w-full h-full"
        src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/GB57010623/30263B66BFEA15F932E7DB355E0B9C1Emp.png"
      />
    </template>
    <template v-slot:info>
      <div class="title text-[16px] font-bold">19英寸空气动力学轮毂</div>
      <div class="extra text-[14px] text-[#666666]">价格已包含</div>
    </template>
    <template v-slot:choose>
      <div class="color-list flex justify-center items-center mt-4 ml-4 mr-4">
        <div
          class="color-box w-[60px] h-[60px] flex justify-center items-center"
        >
          <div class="color-item w-4 h-4 rounded-full">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/attribute/99724/0D89F0BCCA7FAFEB6B8329F15BFD8916.png"
            />
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
      <div @click="goToSeat">下一步</div>
    </template>
  </sumPrice>
</template>

<script setup>
import preview from "../../components/preview.vue";
import sumPrice from "../../components/sumPrice.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToSeat = () => {
  router.push("/select/seat");
};
</script>

<style scoped></style>
