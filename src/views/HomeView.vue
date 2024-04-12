<template>
  <div class="home">
    <el-container>
      <!-- 左侧栏· -->
      <el-aside :width="isCollapse == false ? '200px' : '64px'">
        <!-- logo -->
        <div class="logo">
          <img :class="isCollapse == false ? '' : 'imgs'" src="../assets/common/logo.png" alt="" />
        </div>
        <!-- 导航菜单 -->
        <el-menu
          :collapse="isCollapse"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#5383fd"
          text-color="#fff"
          active-text-color="#fff"
          router
        >
          <el-menu-item :index="item.path" v-for="item in MenuLIst" :key="item.id">
            <i :class="item.icon" style="color: #ffffff"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <i
              :class="isCollapse == false ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
              @click="isCollapse = !isCollapse"
            ></i>
            <p>江苏传智博客教育科技股份邮箱公司</p>
            <span>体验版</span>
          </div>
          <div class="right">
            <i style="color: #ffffff; font-size: 26px" class="el-icon-ic_search24px"></i>
            <i style="color: #ffffff; font-size: 26px" class="el-icon-quanping"></i>
            <i style="color: #ffffff; font-size: 26px" class="el-icon-fanyi"></i>
            <el-color-picker v-model="color1"></el-color-picker>
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <el-dropdown>
              <span class="el-dropdown-link" style="color: #000"
                >管理员<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item @click.native="quit">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
          <!-- <p>copyright <span>&copy:</span> 2018 iHRM 系统 版权所有 </p> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { removeToken } from "../utils/auth"
export default {
  data() {
    return {
      //  菜单数据
      MenuLIst: [],
      // 菜单缩放
      isCollapse: false,
      color1: "#3e6ef9"
    }
  },
  methods: {
    // 获取菜单数据
    getMenus() {
      let list = require("../mock/common/NavigationMenu.json")
      // console.log(list);
      this.MenuLIst = list.data.menu
      // console.log(this.MenuLIst);
    },
    // 退出登录
    quit() {
      // console.log(111);
      removeToken()
      this.$message.success("退出成功")
      this.$router.push("/login")
    }
  },
  created() {
    this.getMenus()
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.el-menu {
  border: none;
}
.el-aside {
  height: 100vh;
  background-color: #4c7cfb;
  box-shadow: 0 0 3px #000;
  transition: all 0.5s;
  // 渐变
  background-image: url("../assets/common/leftnavBg.png");
  background-repeat: no-repeat;
  background-position: bottom;
  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 55px;
    }
    .imgs {
      width: 100%;
      height: 40px;
    }
  }
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3e6ef9;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    color: #fff;
    p {
      font-size: 20px;
      margin: 0 15px;
    }
    span {
      font-size: 14px;
      padding: 5px 8px;
      display: block;
      background-color: #84a9fe;
      border-radius: 10px;
    }
  }
  .right {
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.el-main {
  margin: 0;
  padding: 0;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  background-color: #eff1f4;
}
</style>
