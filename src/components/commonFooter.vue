<template>
  <div class="footerPage">
    <div class="commonContent">
      <div class="commonContent2">
        <div class="border-r-1">中日韩产业博览会办公室</div>
        <div class="border-r-1">中国国际贸易促进委员会潍坊市委员会</div>
        <div class="border-r-1">电话：0086-536-8789045（展览）</div>
<!--        <div class="border-r-1">电话：0086-536-8891227（联络）</div>-->
        <div class="border-r-1">传真：0086-536-8789407</div>
        <div class="border-r-1">邮箱：cjkiexpo@cjkiexpo.org.cn</div>
        <div class="p-l-30">地址：中国山东省潍坊市胜利东街99号</div>
      </div>
      <div class="copyright">Copyright © 中日韩产业博览会 All Rights Reserved 鲁ICP备17053774号-1
        <!--        <span>当前访问次数{{cishu}}</span>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cishu: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.footerPage {
  background: #101131;
  padding-top: 30px;
  min-width: 1290px;
}
.contenText {
  display: flex;
  justify-content: center;
  .contenItem {
    .content {
      display: flex;
    }
    flex: 0.4;
    &:nth-of-type(3) {
      flex: 0.4;
    }
    .title {
      font-size: 24px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #409eff;
      line-height: 40px;
    }
    .text {
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #c6c6c6;
      line-height: 35px;
      white-space: nowrap;
    }

    .qrcode {
      display: flex;
      margin-left: 150px;
      flex-direction: column;
      align-items: center;
      img {
        width: 120px;
      }
      span {
        margin-top: 5px;
        font-size: 14px;
        color: #c6c6c6;
      }
    }
  }
}
.commonContent {
  padding-bottom: 0px;
}
.copyright {
  text-align: center;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  border-top: 2px solid #7a7a7a;
  padding: 10px 0;
}
.copyright span{
  margin-left: 20px;
  font-size: 12px;
}
.commonContent2 {
  display: flex;
  font-size: 14px;
  font-family: Songti SC;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}
.border-r-1 {
  border-right: 1px solid #fff;
  padding: 0px 8px;
}
.p-l-30 {
  padding: 0px 10px;
}
</style>
