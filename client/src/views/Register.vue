<template>
    <div
      class="login w-full h-full bg-white p-2 box-border overflow-hidden relative flex flex-col"
    >
      <div class="h-3 flex justify-center items-center font-bold">注册</div>
      <div
        class="login-wrapper flex flex-col items-center justify-center mt-8 rounded-md border-solid shadow-md shadow-gray-300 m-auto"
      >
        <div class="logo flex items-center justify-center w-12 h-12 mt-4 mb-4">
  
            <img
              class="w-full h-full object-contain"
              src="../assets/huawei_logo.png"
            />
  
        </div>
  
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
            v-model="state.nickname"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"
          />
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
              注册
            </van-button>
          </div>
        </van-form>
      </div>
      <div class="register flex justify-center items-center mt-4 text-[16px]" @click="goToLogin">已有账号？点击登录</div>
    </div>
  </template>
  
  <script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../api'

const router = useRouter()
const state = reactive({  // 将对象变成响应式
  username: '',
  password: '',
  nickname: ''
})

// const onSubmit = () => {
//   // 发请求,将state.username, state.password传给后端
//   console.log(state.username, state.password);
// }
const onSubmit = async () => {
  const res = await axios.post('/register', state);
    console.log(res);
    // 保存用户信息
    sessionStorage.setItem('userInfo', JSON.stringify(res.data));
    router.push('/login');
}

  const goToLogin = () => {
    router.push("/login");
  };
  </script>
  <style scoped></style>
  