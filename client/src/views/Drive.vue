<template>
    <div class="drive flex flex-col h-screen">
        <div class="header-placeholder min-h-5 box-content"></div><!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
        <hwheader>
            <template v-slot:content><!-- 使用插槽 -->
                智界 S7 预约试驾
            </template>
        </hwheader>

        <div class="body h-screen w-full">
            <div class="bg-img h-full w-full">
                <img class="h-full w-full object-cover"
                    src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/GB5008010010401/B146067400EC6EBFCA835FCDB93C582Dmp.jpg"
                    alt="">
            </div>
        </div>

        <div class="info fixed bottom-0 left-0 right-0 h-[60%] w-full bg-[rgba(0,0,0,0)] ">
            <div class="info-content pt-10 pl-2 pr-2">
                <div class="info-title text-white">
                    欢迎预约
                </div>
                <div class="info-box">
                    <div class="info-cartype flex">
                        <div class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center">意向车型</div>
                        <van-field class="select max-w-[250px] ml-2 " v-model="fieldValue" is-link readonly placeholder="请选择意向车型"
                            @click="show = true" />
                        <van-popup v-if="show" round position="bottom">
                            <van-cascader v-model="cascaderValue" title="请选择意向车型" :options="options" @close="show = false"
                                @finish="onFinish" />
                        </van-popup>
                    </div>
                    <div class="info-phone">
                        <div class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center">手机号码</div>
                    </div>
                    <div class="info-code">
                        <div class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center">验证码</div>
                    </div>
                    <div class="info-shop">
                        <div class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center">选择门店</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import hwheader from '../components/hwheader.vue';
import { ref } from 'vue';

const show = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '智界 S7',
        value: '330000',
      },
      {
        text: '问界 M9',
        value: '320000',
      },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };



</script>

<style scoped>
.info-cartype {
    border-bottom: 0.5px solid rgba(255,255,255,0.5);
}
.select{
    background-color: rgba(0,0,0,0);
}
</style>