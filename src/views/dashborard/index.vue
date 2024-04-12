<template>
  <div class="dashborad">
    <div class="top">
      <img src="../../assets/common/head.jpg" alt="" />
      <div class="right">
        <p>早安，管理员，祝你开心每一天</p>
        <span>管理员 | 传智播客-总裁办</span>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <TimeDay />
        <Announcement />
      </div>
      <div class="right">
        <Apply />
        <EasyNav />
        <HelpLink />
      </div>
    </div>
  </div>
</template>
<script>
import TimeDay from "./component/CalendarDay.vue"
import Apply from "./component/ApplicationProcess.vue"
import EasyNav from "./component/EasyNavigation.vue"
import Announcement from "./component/AnnouncementView.vue"
import HelpLink from "./component/HelpLink.vue"
export default {
  name: "DashboradView",
  components: { TimeDay, Apply, EasyNav, Announcement, HelpLink },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.dashborad {
  // background-color:#f0f2f5;
  box-sizing: border-box;
}
.top {
  // width:100%;
  height: 140px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 3px #ccc;
  img {
    width: 110px;
    height: 110px;
    margin: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 24px;
      margin-bottom: 10px;
    }
    span {
      font-size: 18px;
      color: #999;
    }
  }
}
.main {
  height: calc(100vh - 160px);
  display: flex;
  justify-content: space-between;
  .left {
    width: 55%;
    height: 300px;
  }
  .right {
    box-sizing: border-box;
    flex: 1;
  }
}
</style>
