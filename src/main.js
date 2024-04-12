import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 引入icon图标
import "@/assets/icons/iconfont.css"
import "@/assets/icons/iconfont.js"
// 引入axios
import axios from "axios"
Vue.prototype.$axios = axios
// 引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
// 按需引入element-ui
// import { Button, Input,Message, Form, FormItem, Icon, Menu, Submenu, MenuItem, MenuItemGroup, Dialog } from "element-ui"
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Icon)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
// Vue.use(Dialog)
// Vue.prototype.$message = Message
Vue.config.productionTip = false

import httpRequest from "./utils/httpRequest"
Vue.prototype.$http = httpRequest
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
