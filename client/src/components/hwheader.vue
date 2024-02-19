<template>
    <div class="header fixed top-0 left-0 right-0 flex justify-between items-center h-5 z-50 box-border" 
        :style="{backgroundColor: bgColor}">
        <div class="header-left flex item-center" >
            <span class="iconfont icon-fanhui p-1 [&.iconfont]:text-[24px] " @click="backHome"></span>
            <div class="content font-bold text-[20px] self-center flex pl-1">
                <!-- 添加一个插槽 -->
                <slot name="content"></slot>
            </div>
        </div>

        <div class="icon">
            <span class="iconfont icon-kefu [&.iconfont]:text-[20px] p-1 font-bold"></span>
        </div>
    </div>
</template>
  
<script setup>
import { useRouter } from "vue-router";
defineProps({
    bgColor: {
        type: String,
        default: '#ffffff'
    }
});
const router = useRouter();

const backHome = () => {
    router.push("/");
};
</script>
  
<style scoped>
@import url('//at.alicdn.com/t/c/font_4431638_v3g78oyxpp.css');
</style>