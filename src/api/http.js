import axios from "axios"
import { Loading } from "element-ui"
const instance = axios.create({
  baseURL: "https://ihrm-java.itheima.net/api",
  timeout: 10000
})
let loadingInstance
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 加载动画
    loadingInstance = Loading.service({ fullscreen: true })
    // token
    let token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    loadingInstance.close()
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
