<template>
    <div class="buy">
        <div class="header-placeholder min-h-5 box-content"></div><!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
        <hwheader>
            <template v-slot:content><!-- 使用插槽 -->
                智界 S7 预约试驾
            </template>
        </hwheader>
    </div>
</template>

<script setup>
import hwheader from '../components/hwheader.vue';
import { ref } from 'vue';

</script>

<style lang="less" scoped>

</style>