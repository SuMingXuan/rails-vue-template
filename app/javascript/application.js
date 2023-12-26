// Entry point for the build script in your package.json

import { createApp } from "vue/dist/vue.esm-bundler.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import PageIndex from "./components/pages/Index.vue"
import LayoutSidebar from "./components/layouts/Sidebar.vue"


app = createApp({
  components: {
    PageIndex,
    LayoutSidebar
  },
  provide:{
  }
}).use(ElementPlus, {
  locale: zhCn,
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount("#app")

window.csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
