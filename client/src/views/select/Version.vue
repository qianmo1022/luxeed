<template>
  <div class="content ml-2 mr-2 mt-2">
    <!-- 选中的版本边框加粗 -->
    <div
      class="box border-[1px] border-[#eaeaea] border-solid rounded-md mt-2"
      :class="{ 'border-black border-[2px]': selectedVersion === item.id }"
      v-for="item in version"
      :key="item.id"
      @click="selectedVersion = item.id"
    >
      <div class="infoBox ml-2 mr-2 mt-2 mb-2 text-[16px] font-bold">
        {{ item.name }}
        <div
          class="info text-[12px] text-[#666] font-normal mt-[2px]"
          v-for="(info, index) in item.info"
          :key="index"
        >
          {{ info }}
        </div>
      </div>
    </div>
  </div>
  <sumPrice>
    <template v-slot:price></template>
    <template v-slot:step>
      <!-- 通过下一步按钮跳转到外观选择页面 -->
      <div @click="goToAppearance">下一步</div>
    </template>
  </sumPrice>
  <!-- 底部占位 -->
  <div class="bottom-placeholder h-[64px] box-content"></div>
</template>

<script setup>
import sumPrice from "@/components/sumPrice.vue";
import { ref, nextTick, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useSelectStore } from "@/store/select";
import { addCarSelected } from "@/api/getCar.js";

const selectedVersion = ref(0);
const selectedVersionData = ref({});
const router = useRouter();
const { selectedItem, version } = useSelectStore();

// console.log(version.find(item => item.id === selectedVersion.value));

watchEffect(() => {
  // 每次 selectedVersion 变化时更新 selectedVersionData
  selectedVersionData.value = version.find(
    (item) => item.id === selectedVersion.value
  );
});

const goToAppearance = () => {
  // 在跳转之前，将选中的版本数据添加到 carselected 中
  addCarSelected(selectedItem, selectedVersionData.value);

  // 使用 nextTick 确保在 DOM 更新之后执行代码
  nextTick(() => {
    router.push("/select/appearance");
  });
};
</script>

<style scoped></style>
