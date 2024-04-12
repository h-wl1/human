<template>
  <div class="apply">
    <div class="title">
      <span>快速开始/便捷导航</span>
    </div>
    <div class="content">
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#el-icon-zhinanzhen"></use>
        </svg>
        入门指南
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#el-icon-wendangguanli"></use>
        </svg>
        在线帮助手册
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#el-icon-dianhua"></use>
        </svg>
        联系技术支持
      </div>
    </div>
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
  .content {
    display: flex;
    justify-content: space-around;
  }
  .item {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      width: 60px;
      height: 60px;
      margin: 15px 0;
    }
  }
}
</style>
