<template>
  <div class="login">
    <div class="box">
      <!-- login -->
      <div class="logo">
        <img src="../assets/common/login-logo.png" alt="" />
      </div>
      <!-- input框-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 提示语 -->
      <p>仅用于IT培训教育,为保障您的个人信息安全,请勿向平台录入任何个人敏感信息(如手机号、身份证号等)</p>
    </div>
  </div>
</template>
<script>
// import { loginApi } from "@/api/api.js"
// import  http  from "../utils/httpRequest";
import { setToken } from "../utils/auth"
export default {
  data() {
    return {
      ruleForm: {
        mobile: "13800000002",
        password: "888itcast.CN764%..."
      },
      rules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  // created() {
  // 	http.post('/api/sys/login',this.ruleForm).then(res=>{
  // 		setToken(res.data.token)
  // 		console.log(res)
  // 	})
  // },
  methods: {
    // 登录
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // console.log(this.ruleForm)
          this.$http.post(this.$http.adUrl("/sys/login"), this.ruleForm).then((res) => {
            setToken(res.data)
            this.$router.push("/dashboard")
            this.$message.success("登录成功")
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/common/login.jpg");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 400px;
    .logo {
      width: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    ::v-deep .el-form-item.is-error .el-input__inner {
      color: #fff;
      border-color: #fff;
      background-color: red !important;
    }
    ::v-deep .el-form-item__error .el-input__validateIcon {
      color: #fff;
    }
    ::v-deep .el-form-item__error {
      color: #fff;
    }

    .el-input {
      // 圆角边框
      border-radius: 5px;
      background-color: #d2e4ff;
    }
    .el-button {
      width: 100%;
      background-color: #407ffe;
    }
    p {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
