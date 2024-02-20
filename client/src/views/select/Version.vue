<template>
  <div class="content ml-2 mr-2 mt-2">
    <!-- 选中的版本边框加粗 -->
    <div
      class="box border-[1px] border-[#eaeaea] border-solid rounded-md mt-2"
      :class="{ 'border-black border-[2px]': versionItem === item.id }"
      v-for="item in version"
      :key="item.id"
      @click="versionItem = item.id"
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
import sumPrice from "../../components/sumPrice.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSelectStore } from "../../store/select";

const versionItem = ref(0);
const router = useRouter();

const { version } = useSelectStore();
const goToAppearance = () => {
  router.push("/select/appearance");
};
</script>

<style lang="scss" scoped></style>
