import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'//自动设置根字体大小
import './assets/style/reset.css'//重置样式


import { Button } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Button);
app.mount('#app')
