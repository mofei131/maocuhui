<template>
  <div>
    <!-- <div class="back commonContent">{{ $t('back') }}</div> -->
    <img
      class="rotation_img"
      src="https://file.mepxns.info/weifang-ai-expo/75fc35d8954947eba4c01bea9409a45b.jpg"
      alt
    />
    <!-- <div class="exhibitionOverviewName commonContent">新闻中心-记者服务</div>
    <hr /> -->
    <div>
      <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span>记者服务</span>
            <br />
            <br />
            <span>Exhibition summary</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <li>
              <span>注册/登录</span>
              <!-- <img class="liRightImg" src="../../assets/images/exhibitionOverview/liRightImg.png" /> -->
            </li>
            <li>
              <span>注册方式</span>
              <!-- <img class="liRightImg" src="../../assets/images/exhibitionOverview/liRightImg.png" /> -->
            </li>
            <li>
              <span>媒体报道</span>
              <!-- <img class="liRightImg" src="../../assets/images/exhibitionOverview/liRightImg.png" /> -->
            </li>
            <li :style="{ color: type ==13?'#2884EC' : '#0B1031'}" @click="showContent(13)">
              <span>新闻通稿</span>
              <img
                v-if="type==13"
                class="liRightImg"
                src="../../assets/images/exhibitionOverview/liRightImg.png"
              />
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 13,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/pressRelease") {
        this.type = 13;
      }
    },
  },
  mounted() {
    if (this.$route.path == "/pressRelease") {
      this.type = 13;
    }
  },
  methods: {
    showContent(index) {
      if (this.type == index) return;
      this.type = index;
      if (index == 13) {
        this.$router.push({
          path: "/pressRelease",
        });
      }
    },
  },
};
</script>
<style scoped>
.rotation_img {
  width: 100%;
  height: 100%;
  display: block;
}
.exhibitionOverviewName {
  height: 65px;
  line-height: 65px;
  font-size: 20px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: #2f0954;
}
hr {
  margin: 0;
}
.left_Content {
  float: left;
  margin-top: 40px;
  border: 1px solid #ccc;
}
.exhibition_content {
  width: 240px;
  height: 100px;
  text-align: center;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 0;
  box-sizing: border-box;
  background: linear-gradient(90deg, #867df7, #453cb1, #3a35ad, #3a35ad);
}
.exhibition_content span:nth-child(1) {
  font-size: 30px;
}
.exhibition_content span:nth-child(2) {
  font-size: 14px;
}
.exhibitionOverviewUl {
  cursor: pointer;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
}
.exhibitionOverviewUl li {
  width: 200px;
  height: 56px;
  border-radius: 2px;
  margin: 20px auto;
  line-height: 56px;
  padding-left: 38px;
  box-sizing: border-box;
  background: #f5f0f0
    url("../../assets/images/exhibitionOverview/liLeftImg.png") no-repeat;
  background-position: 14px center;
  background-size: 4px 24px;
}
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
}
</style>
