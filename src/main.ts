import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@icon-park/vue-next/styles/index.css'
import './index.css'
import * as  Icons from '@element-plus/icons-vue'
import InfiniteMenu from '@/components/infiniteMenu'
//全局注册自定义组件
// import mUI from "@/components"
// import * as PIcons from '@icon-park/vue-next'
import {toLine} from '@/utils'
const app = createApp(App)
//直接use使用即可
// app.use(mUI)
app.use(router).use(ElementPlus).use(InfiniteMenu)
for (const i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}
// for (const appKey in PIcons) {
//     app.component(`icon-${toLine(appKey)}`, (PIcons as any)[appKey])
// }
app.mount('#app')
