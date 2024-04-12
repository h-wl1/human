import Vue from "vue"
import VueRouter from "vue-router"
import { getToken } from "../utils/auth"
// import layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login" // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashborard/index.vue")
      },
      {
        path: "/departments/index",
        name: "departments",
        component: () => import("@/views/departments/index.vue")
      },
      {
        path: "/employees/index",
        name: "employees",
        component: () => import("../views/employees/index.vue")
      },
      {
        path: "/settings/index",
        name: "settings",
        component: () => import("../views/settings/index.vue")
      },
      {
        path: "/permissions/index",
        name: "permissions",
        component: () => import("../views/permissions/index.vue")
      },
      {
        path: "/social-securitys/index",
        name: "social-securitys",
        component: () => import("../views/social-securitys/index.vue")
      },
      {
        path: "/attendances/index",
        name: "attendances",
        component: () => import("../views/attendances/index.vue")
      },
      {
        path: "/salarys/index",
        name: "salarys",
        component: () => import("../views/salarys/index.vue")
      },
      {
        path: "/approvals/index",
        name: "approvals",
        component: () => import("../views/approvals/index.vue")
      }
    ]
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
  // let token = localStorage.getItem("token")
  if (getToken()) {
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
