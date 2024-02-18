import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'amfe-flexible'//自动设置根字体大小
import './assets/style/reset.css'//重置样式
import './tailwind.css'
import { createPinia } from 'pinia'//引入pinia

import { Field,Cascader,Popup,Button } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(createPinia())//引入pinia

// 注册需要用的vant组件
app.use(Field);
app.use(Cascader);
app.use(Popup);
app.use(Button);
app.mount('#app')
