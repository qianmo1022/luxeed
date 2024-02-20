<template>
    <div class="home h-screen" >
        <hwheader :bgColor="headerBgColor">
            <template v-slot:content><!-- 使用插槽 -->
              智界 S7
            </template>
        </hwheader>
        <div class="body" @scroll="handleScroll">
          <div class="bg-img w-full h-full " v-for="(item, index) in itemImg" :key="index">
              <img class="w-full h-full object-cover " lazy-load="true" :src="item.img">
          </div>
        </div>
        <div class="footer fixed bottom-0 left-0 right-0 flex justify-center items-center bg-[#f1f3f5] h-6 pl-2 pr-2">
          <div class="left bg-[#d8dadc] rounded-lg h-4 text-[16px] font-bold w-16 justify-center items-center flex mr-1" @click="goToDrive">
            预约试驾
          </div>
          <div class="right bg-[#cf0a2c] rounded-lg h-4 text-[16px] font-bold text-[#fff] w-16 self justify-center items-center flex ml-1"
           @click="goToSelect">
            立即购买
          </div>
        </div>
        <div class="footer-placeholder h-6"></div>

    </div>
</template>

<script setup>
import hwheader from '@/components/hwheader.vue';
import {  ref,onUnmounted,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'; // 引入 axios

const itemImg = ref([]);
const headerBgColor = ref('rgba(241, 243, 245, 0)');

const router = useRouter();

onMounted(async () => {
  try {
    const res = await axios.get('https://mock.mengxuegu.com/mock/65bde07dd7f4776a06de0471/index-img');//easy-mock存储数据
    itemImg.value = res.data.data;
  } catch (error) {
    console.error(error);
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

let bgOpacity = 0;
const handleScroll = (e) => {
	let top = e.target.documentElement.scrollTop;
	// console.log(top);
	if (top <= 100) { //使得头部的背景颜色渐变
		bgOpacity = (top / 100).toFixed(2)
	} else {
		bgOpacity = 1
	}
	headerBgColor.value = `rgba(241, 243, 245, ${bgOpacity})`
}
const goToDrive = () => {
  router.push('./drive');
}
const goToSelect = () => {
  router.push('./select');
}
</script>