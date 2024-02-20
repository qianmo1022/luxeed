<template>
    <div class="show bg-[#f1f3f5]">
      <div class="header-placeholder min-h-5 box-content"></div>
      <hwheader>
        <template v-slot:content> 配置预览 </template>
      </hwheader>
      <div>
        <div class="title text-[16px] font-bold">车辆配置</div>
        <div
          class="selectedInfo w-full h-20 border-solid rounded-t-md border-white border-4 bg-white"
          v-if="cardata"
        >
          <div class="selectedInfo-version flex">
            <div class="text-[16px] ml-2 mr-2">版本:</div>
            <div class="text-[16px] font-bold">{{ cardata.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import hwheader from "@/components/hwheader.vue";
  import { getCarSelected } from "@/api/getCar";
  
  const cardata = ref({ });
  
  onMounted(async () => {
    const res = await getCarSelected();
    // console.log(res.version);
    cardata.value = res.version;
    console.log(cardata.value);
  });
  </script>
  
  <style scoped></style>