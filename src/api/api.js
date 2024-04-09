import axios from "./http"

// 登录
export const loginApi = (params) => {
  return axios.post("/sys/login", params)
}
