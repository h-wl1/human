<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <Headers />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { Menu } from "@/layout/AsiderBar.vue"
import { Headers } from "@/layout/headerBar.vue"
export default {
  name: "LayoutView",
  components: { Menu, Headers },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
