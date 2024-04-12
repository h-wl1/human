<template>
  <div>
    <el-calendar v-model="value"> </el-calendar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-calendar {
  margin: 10px;
  font-size: 14px;
  .next {
    border: none;
  }
  td {
    border: none;
  }
  .el-calendar-day {
    height: 35px !important;
    text-align: center;
    border: none;
  }
  .el-calendar__header {
    justify-content: space-between;
  }
  // .is-selected {
  //   background-color: #1d8dd8;
  //   color: #fff;
  // }
}
</style>
