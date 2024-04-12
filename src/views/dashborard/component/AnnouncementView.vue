<template>
  <div class="announcement">
    <h4>公告</h4>
    <div class="desc">
      <div class="item">
        <img src="../../../assets/common/img.jpeg" alt="" />
        <div class="right">
          <p>
            <span>朱继柳</span>
            发布了第一期"传智大讲堂"互动讨论获奖名单公布
          </p>
          <p>2018-07-21 15:21:38</p>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/common/img.jpeg" alt="" />
        <div class="right">
          <p>
            <span>朱继柳</span>
            发布了第一期"传智大讲堂"互动讨论获奖名单公布
          </p>
          <p>2018-07-21 15:21:38</p>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/common/img.jpeg" alt="" />
        <div class="right">
          <p>
            <span>朱继柳</span>
            发布了第一期"传智大讲堂"互动讨论获奖名单公布
          </p>
          <p>2018-07-21 15:21:38</p>
        </div>
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
.announcement {
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  h4 {
    margin: 40px 0 20px 0;
    border-bottom: 1px solid #ccc;
    padding-left: 20px;
    padding-bottom: 10px;
  }
  .desc {
    margin: 20px;
    .item {
      // box-sizing:border-box;
      padding: 0 20px;
      display: flex;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      p {
        margin: 10px 0;
      }
      span {
        color: #8a97f8;
      }
      img {
        width: 56px;
        height: 56px;
      }
    }
  }
}
</style>
