<template>
  <div class="drive flex flex-col h-screen">
    <div class="header-placeholder min-h-5 box-content"></div>
    <!-- 弹性布局使得占位盒子高度异常，所以使用最小高度强制盒子高度不能小于5个单位 -->
    <hwheader>
      <template v-slot:content
        ><!-- 使用插槽 -->
        智界 S7 预约试驾
      </template>
    </hwheader>

    <div class="body h-screen w-full">
      <div class="bg-img h-full w-full">
        <img
          class="h-full w-full object-cover"
          src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/GB5008010010401/B146067400EC6EBFCA835FCDB93C582Dmp.jpg"
          alt=""
        />
      </div>
    </div>

    <div
      class="info fixed bottom-0 left-0 right-0 h-[60%] w-full bg-gradient-to-t from-[rgba(0,0,0,1)]"
    >
      <div class="info-content pt-10 pl-2 pr-2">
        <div class="info-title text-white">欢迎预约</div>
        <div class="info-box">
          <div class="info-cartype flex bt-line">
            <div
              class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center"
            >
              意向车型
            </div>
            <van-field
              class="select max-w-[250px] ml-2"
              v-model="fieldValue"
              is-link
              readonly
              placeholder="请选择意向车型"
              @click="changeShow"
            />
            <van-popup v-model:show="show" round position="bottom">
              <van-cascader
                v-model="cascaderValue"
                title="请选择意向车型"
                :options="options"
                @close="show = false"
                @finish="onFinish"
              />
            </van-popup>
          </div>
          <div class="info-phone flex bt-line">
            <div
              class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center"
            >
              手机号码
            </div>
            <van-field
              class="select max-w-[250px] ml-2 text-[#ffffff] whiteText"
              center
              clearable
              v-model="value"
              placeholder="请输入手机号码"
            />
          </div>
          <div class="info-code flex bt-line">
            <div
              class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center"
            >
              验证码
            </div>
            <van-field
              class="select max-w-[250px] ml-3.5 text-[#ffffff]"
              center
              clearable
              v-model="verifyCode"
              placeholder="请输入验证码"
            >
              <template #button>
                <van-button type="primary" size="small" color="#ffffff00">获取验证码</van-button>
              </template>
            </van-field>
          </div>
          <div class="info-shop flex bt-line">
            <div
              class="text text-[14px] text-[rgba(255,255,255,0.6)] self-center"
            >
              选择门店
            </div>
            <van-field
              class="select max-w-[250px] ml-2"
              v-model="fieldStoreValue"
              is-link
              readonly
              placeholder="请选择预约门店"
              @click="storeShow = true"
            />
            <van-popup v-model:show="storeShow" round position="bottom">
              <van-cascader
                v-model="storeValue"
                title="门店"
                :options="storeInfo"
                @close="show = false"
                @finish="onFinishStore"
              />
            </van-popup>
          </div>
          <div
            class="service fixed bottom-0 left-0 right-0 min-h-[36px] bg-[#ffffff] rounded-lg ml-4 mr-4 mb-1 justify-center items-center text-[20px] flex"
            @click="submit"
          >
            立即预约
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import hwheader from "../components/hwheader.vue";
import { ref } from "vue";

const show = ref(false);
const storeShow = ref(false);
const fieldValue = ref("");
const fieldStoreValue = ref("");
const cascaderValue = ref("");
const storeValue = ref("");
const value = ref("");
const verifyCode = ref("");
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: "智界 S7",
    value: "330000",
  },
  {
    text: "问界 M9",
    value: "320000",
  },
];
// 点击输入框时，显示弹出层
const changeShow = () => {
  show.value = true;
};
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false;
  fieldValue.value = selectedOptions.map((option) => option.text).join("/");
};
const onFinishStore = ({ selectedOptions }) => {
  storeShow.value = false;
  fieldStoreValue.value = selectedOptions.map((option) => option.text).join("/");
};
const storeInfo = [
  {
    text: "北京",
    value: "110000",
    children: [
      {
        text: "北京市",
        value: "110100",
        children: [
          {
            text: "朝阳区",
            value: "110105",
          },
          {
            text: "海淀区",
            value: "110106",
          },
          {
            text: "丰台区",
            value: "110107",
          },
          {
            text: "东城区",
            value: "110101",
          },
          {
            text: "西城区",
            value: "110102",
          },
        ],
      },
    ],
  },
  {
    text: "上海",
    value: "310000",
    children: [
      {
        text: "上海市",
        value: "310100",
        children: [
          {
            text: "黄浦区",
            value: "310101",
          },
          {
            text: "徐汇区",
            value: "310104",
          },
          {
            text: "长宁区",
            value: "310105",
          },
          {
            text: "静安区",
            value: "310106",
          },
          {
            text: "普陀区",
            value: "310107",
          },
        ],
      },
    ],
  },
];
const submit = () => {
  console.log("提交");
};
</script>

<style scoped>
.bt-line {
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
}

.select {
  background-color: rgba(0, 0, 0, 0);
}
.whiteText {
  color: #ffffff !important;
}
</style>
