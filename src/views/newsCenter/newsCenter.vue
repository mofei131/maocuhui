<template>
  <div>
    <!-- <div class="back commonContent" @click="goBack">{{ $t('back') }}</div> -->
    <!--    <img
          class="rotation_img"
          src="https://file.mepxns.info/%E6%99%BA%E8%83%BD%E7%89%A9%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A-%E9%A1%B6%E5%9B%BE-%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83.png"
          alt
        />-->
    <!-- <div class="exhibitionOverviewName commonContent">新闻中心</div> -->
    <!-- <hr /> -->
    <div style="position: relative;">
      <!-- <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span>{{ $t("newsCenter.nav") }}</span>
            <br />
            <br />
            <span>News Center</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <li
              v-for="(i, index) in list"
              :key="index"
              :class="{ act: type === i.type }"
              @click="showContent(index)"
            >
              <span :style="i.type === 17 ? 'font-size: 18px' : ''">{{
                i.name
              }}</span>
              <img
                v-show="type === i.type"
                class="liRightImg"
                src="../../assets/images/exhibitionOverview/liRightImg.png"
              />
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div> -->
      <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span class="mfone">{{ $t("newsCenter.nav") }}</span>
            <br />
            <br />
            <span class="mftwo">News Center</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <!-- :style="{ color: type == (index+1)?'#666666' : '#484848'}" -->
            <router-link v-for="(item,index) in list" :key="index" :to="item.url">
              <li :class="item.type === type?'mfsanyaun':''"  @click="showContent(index)" >
                {{item.name}}
              </li>
            </router-link>
          </ul>
        </div>
        <router-view></router-view>
      </div>
      <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
    </div>
  </div>
</template>
<script>
import headerNav from '@/components/headerNav3'
export default {
  components:{headerNav},
  data() {
    return {
      type: 11,
    };
  },
  computed: {
    list() {
      return [
        /*{
          name: this.$t("newsCenter.t7"),
          type: 16,
          path: "/newsCenter/descriptionOfTheSituation",
          url: "/newsCenter/descriptionOfTheSituation?id=7",
        },*/
        {
          name: this.$t("newsCenter.t3"),
          type: 99,
          url: "/newsCenter/quality",
        },
        {
          name: this.$t("newsCenter.t2"),
          type: 11,
          url: "/newsCenter/exhibitionReport",
        },
        {
          name: this.$t("newsCenter.t9"),
          type: 14,
          url: "/newsCenter/reprintedAndMediaReports",
        },

        /*{
          name: this.$t("newsCenter.t8"),
          type: 12,
          path: "/newsCenter/PostShowReport",
          url: "/newsCenter/PostShowReport?name=展后报告",
        },*/
        /*{
          name: this.$t("newsCenter.t3"),
          type: 13,
          url: "/newsCenter/pressRelease-news",
        },*/
        {
          name: this.$t("newsCenter.t4"),
          type: 2019,
          url: "/newsCenter/pastReview",
        },
        /*{
          name: this.$t("newsCenter.t5"),
          type: 2020,
          url: "/newsCenter/imageSet",
        },*/
      ];
    },
  },
  watch: {
    $route(val) {
      this.routeWatch();
    },
  },
  mounted() {
    this.routeWatch();
    // console.log(this.type);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showContent(index) {
      if (this.type === this.list[index].type) return;
      this.type = this.list[index].type;
      this.$router.push({
        path: this.list[index].url,
      });
    },
    routeWatch() {
      for (const index in this.list) {
        if (
          this.list[index].url === this.$route.path ||
          this.list[index].path === this.$route.path
        ) {
          this.type = this.list[index].type;
        }
      }
    },
  },
};
</script>
<style scoped>
.ditu{
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
}
.mfsanyaun{
  border-left: 4px solid #5D9AFE;
  background: rgba(93, 154, 254, 0.5) !important;
  box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5) !important;
  font-size: 16px !important;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500 !important;
  color: #FFFFFF !important;
  line-height: 22px !important;
}
.mfone{
  font-size: 28px!important;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 40px;
}
.mftwo{
  border-radius: 22px;
  border: 1px solid #7DAEFE;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  padding: 6px 15px;
}
.rotation_img {
  width: 100%;
  height: 100%;
  min-width: 1290px;
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
  margin-top: 90px;
  box-shadow: 0px 0px 10px 0px rgb(230 207 207 / 50%);
  border-radius: 6px;
  height: 821px;
  margin-right: 18px;
  margin-left: 10px;
  width: 285px;
}
.exhibition_content {
  height: 100px;
  text-align: center;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 0;
  box-sizing: border-box;
  margin-bottom: 33px;
  background: linear-gradient(180deg, rgba(231, 243, 255, 1.0), rgba(225, 225, 255, 0));
  border-radius: 6px;
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
.exhibitionOverviewUl li{
  /* width: 285px; */
  height: 47px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5);
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #484848;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
}


</style>
