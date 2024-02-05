<template>
    <div class="home" @scroll="handleScroll">
        <hwheader :bgColor="headerBgColor">
            <template v-slot:content><!-- 使用插槽 -->
              智界 S7
            </template>
        </hwheader>
        <div class="body">
          <div class="bg-img" v-for="(item, index) in itemImg" :key="index">
              <img lazy-load="true" :src="item.img">
          </div>
        </div>
    </div>
</template>

<script setup>
import hwheader from '../components/hwheader.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios'; // 引入 axios

const itemImg = ref([]);
const headerBgColor = ref('rgba(241, 243, 245, 0)');

onMounted(async () => {
  try {
    const res = await axios.get('https://mock.mengxuegu.com/mock/65bde07dd7f4776a06de0471/index-img');//easy-mock存储数据
    itemImg.value = res.data.data;
  } catch (error) {
    console.error(error);
  }
});


let bgOpacity = 0;
const handleScroll = (e) => {
	let top = e.detail.scrollTop
	console.log(top);
	if (top <= 100) { //使得头部的背景颜色渐变
		bgOpacity = (top / 100).toFixed(2)
	} else {
		bgOpacity = 1
	}
	headerBgColor.value = `rgba(255, 255, 255, ${bgOpacity})`
}
</script>

<style lang="less" scoped>

</style>