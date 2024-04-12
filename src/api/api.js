import axios from "../utils/httpRequest"

// 登录
export const loginApi = (params) => {
  return axios.post("api/sys/login", params)
}
