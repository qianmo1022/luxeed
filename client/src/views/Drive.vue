<template>
    <div class="drive flex flex-col h-screen">
        <div class="header-placeholder min-h-5 box-content"></div>
        <hwheader>
            <template v-slot:content><!-- 使用插槽 -->
              智界 S7 预约试驾
            </template>
        </hwheader>

        <div class="body h-screen w-full">
            <div class="bg-img h-full w-full">
                <img class="h-full w-full object-cover" src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/GB5008010010401/B146067400EC6EBFCA835FCDB93C582Dmp.jpg" alt="">
            </div>
        </div>

        <div class="info fixed bottom-0 left-0 right-0 z-10 h-[60%] w-full bg-[rgba(0,0,0,0)] ">
            <div class="info-content mt-12">
                <div class="info-title">
                    欢迎预约
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import hwheader from '../components/hwheader.vue';


</script>

<style lang="less" scoped>

</style>