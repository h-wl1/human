import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Input, Form, FormItem, Icon, Menu, Submenu, MenuItem, MenuItemGroup, Dialog } from "element-ui"
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dialog)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
