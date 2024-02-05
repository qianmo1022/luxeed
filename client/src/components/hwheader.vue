<template>
    <div class="header" :style="{ backgroundColor: bgColor }">
        <div class="header-left">
            <span class="iconfont icon-fanhui" @click="goBack"></span>
            <div class="content">
                <!-- 添加一个插槽 -->
                <slot name="content"></slot>
            </div>
        </div>

        <div class="icon">
            <span class="iconfont icon-kefu"></span>
        </div>
    </div>
</template>
  
<script setup>
defineProps({
    bgColor: {
        type: String,
        default: '#f1f3f5'
    }
});
const goBack = () => {
    window.history.back();
};
</script>
  
<style scoped>
@import url('//at.alicdn.com/t/c/font_4431638_v3g78oyxpp.css');
.header {
    background: v-bind(bgColor);
    height: 100rpx;
    top: 0;
    left: 0;
    right: 0;
    line-height: 100rpx;
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    font-size: 36rpx;
}

.header-left {
    display: flex;
    padding-left: 20rpx;
}

.content {
    font-weight: bold;
    padding-left: 20rpx;
}

.icon {
    padding-right: 60rpx;
}

.icon text {
    font-weight: bold;
    font-size: 36rpx;
}</style>