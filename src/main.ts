import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)

// 引入router
import router from "./router/index"
app.use(router)

app.mount('#app')
