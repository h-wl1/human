import Cookies from "js-cookie"

const Tokenkey = "Authorization"

// 获取token
export const getToken = () => {
  return Cookies.get(Tokenkey)
}

// 设置token
export const setToken = (value) => {
  console.log(value, "value")
  Cookies.set(Tokenkey, value)
}

// 移除token
export const removeToken = () => {
  Cookies.remove(Tokenkey)
}
