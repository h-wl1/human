<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1-4-1">选项1</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$axios.get("../mock/common/NavgationMenu.json").then((res) => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped></style>
