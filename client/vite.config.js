import { defineConfig } from 'vite'
import path from 'path'// 引入path模块
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {// 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
