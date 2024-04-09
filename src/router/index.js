import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login" // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token")
  if (token) {
    next()
  } else {
    if (to.path == "/login") {
      next()
    } else {
      next("/login")
    }
  }
})

export default router
