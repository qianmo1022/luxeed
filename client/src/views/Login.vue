<template>
  <div
    class="login w-full h-full bg-white p-2 box-border overflow-hidden relative flex flex-col"
  >
    <div class="h-3 flex justify-center items-center font-bold">登录</div>
    <div
      class="login-wrapper flex flex-col items-center justify-center mt-8 rounded-md border-solid shadow-md shadow-gray-300 m-auto"
    >
      <div class="logo flex items-center justify-center w-12 h-12 mt-4 mb-4">
        <img
          class="w-full h-full object-contain"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png"
        />
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="state.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="state.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="m-4">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <div
      class="register flex justify-center items-center mt-4 text-[16px]"
      @click="goToRegister"
    >
      新用户？点击这里注册
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "../api";

const router = useRouter();
const state = reactive({
  // 将对象变成响应式
  username: "",
  password: "",
});

const onSubmit = async () => {
  // 发请求,将state.username, state.password传给后端
  // console.log(state.username, state.password);
  const res = await axios.post("/login", {
    username: state.username,
    password: state.password,
  });
  console.log(res);
  // 检查登录是否成功
  if (res.data.code == 1) {
    // 保存用户信息
    sessionStorage.setItem("userInfo", JSON.stringify(res.data));
    router.push("/showselectedinfo");
  } else {
    console.log("登录失败：" + res.data.msg);
  }
};

const goToRegister = () => {
  router.push("/register");
};
</script>
<style scoped></style>
