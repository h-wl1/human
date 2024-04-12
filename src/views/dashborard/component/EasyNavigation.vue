<template>
  <div class="apply">
    <div class="title">
      <span>快速开始/便捷导航</span>
    </div>
    <el-row style="margin-top: 10px">
      <el-col :span="8"><el-button>人事月报</el-button></el-col>
      <el-col :span="8"><el-button>考勤查询</el-button></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><el-button>考勤统计</el-button></el-col>
      <el-col :span="8"><el-button>员工审核</el-button></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><el-button>组织框架</el-button></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.apply {
  // width:100%;
  height: 240px;
  background-color: #fff;
  margin: 10px;
  .title {
    padding: 15px;
    font-size: 28px;
    span {
      padding-bottom: 5px;
      border-bottom: 5px solid #8a97f8;
    }
  }
  .el-col {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
