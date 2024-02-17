<template>
    <div class="appearance h-[211px] bg-black" v-if="selectedItem != 0"></div>
    <div>
        这是外观预览
    </div>

    <!-- 打造components模板，2,3,4为同一个模板使用不同的插槽，5,6为同一个模板使用不同的插槽 -->  

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style scoped></style>