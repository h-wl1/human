import axios from "axios"
/**引入读取token的方法 */
import { getToken, removeToken } from "./auth.js"
/**引入路由 */
import router from "@/router"
/**引入message弹框 */
import { MessageBox } from "element-ui"
// axios实例化
const httpRequest = axios.create({
  baseURL: "/",
  timeout: 36 * 1000,

  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
})
// 请求拦截器
httpRequest.interceptors.request.use(
  (config) => {
    // 用来封装token
    config.headers["Authorization"] = "Bearer" + " " + getToken()
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截器
httpRequest.interceptors.response.use(
  (response) => {
    // console.log(response)
    if (response.data.code === 10002 && response.status == 200) {
      // 返回登录页面重新登录,并且清楚当前token信息,需要清楚保存到本地的个人信息
      /**
       * TODO: 需要清除保存到本地的个人信息
       */
      router.push({
        path: "/login"
      })
      removeToken()
    }
    return response.data
  },
  (error) => {
    // console.log(error)
    let tilte = ""
    let message = error.message
    console.log(error, "71")
    // 因为状态码返回有两种情况,一种是正常的code码,401,200,302
    // 还有一种是非正常的状态码,如" 没有或者返回英文字母
    // 获取返回报错的状态码:  error.code
    // 获取返回的报错信息: error.message
    // 在这封装状态码
    if (error.code) {
      switch (error.code) {
        case 401:
          tilte = "资源未授权"
          break
        case 400:
          tilte = "错误请求"
          break
        case 403:
          tilte = "禁止访问"
          break
        case 404:
          tilte = "未找到所请求的资源"
          break
        case 405:
          tilte = "不允许使用该方法"
          break
        case 408:
          tilte = "请求超时"
          break
        case 500:
          tilte = "内部服务器错误"
          break
        case 501:
          tilte = "未实现"
          break
        case 502:
          tilte = "网关错误"
          break
        case 503:
          tilte = "服务不可用"
          break
        case 504:
          tilte = "网关超时"
          break
        case 505:
          tilte = "HTTP版本不受支持"
          break
        default:
          tilte = error.response.status
          return MessageBox.alert(message, tilte, {
            type: "warning"
          })
      }
    } else {
      return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
        type: "error"
      })
    }
  }
)
/**动态拼接代理标识 */
httpRequest.adUrl = (url) => {
  return process.env.VUE_APP_BASE_API + url
}
// 导出
export default httpRequest
