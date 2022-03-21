<template>
  <div style="position: relative;">
    <!-- <div class="back commonContent">{{ $t('back') }}</div> -->
<!--    <img
      style="transform: scale(1.004)"
      class="rotation_img"
      src="https://file.mepxns.info/%E6%99%BA%E8%83%BD%E7%89%A9%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A-%E9%A1%B6%E5%9B%BE-%E8%A7%82%E4%BC%97%E6%9C%8D%E5%8A%A1.png"
      alt
    />-->
    <!-- <div class="exhibitionOverviewName commonContent">观众服务</div> -->
    <!-- <hr /> -->
    <div>
      <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span class="mfone">{{ $t('audienceService.nav') }}</span>
            <br />
            <br />
            <span class="mftwo">Audience Service</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <li
              v-for="(item, index) in exhibitionOverviewCountArr"
              :key="index"
               v-show="index===0?($store.state.user.info.type?$store.state.user.info.type==1:true):true"
              :class="type == (index+1)?'mfsanyaun':''"
              @click="showContent(index)"
            >
              {{ item }}
<!--              <img
                v-show="type == index + 1"
                class="liRightImg"
                src="../../assets/images/exhibitionOverview/liRightImg.png"
              />-->
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <Mylogin :visible.sync="visible" />
    <Myfbgx :visible.sync="fbgxVisible" :mytype="1" />
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
  </div>
</template>
<script>
import Mylogin from "@/views/exhibition/compontent/mylogin";
import Myfbgx from "@/views/exhibition/compontent/fbgx";
import headerNav from '@/components/headerNav3'
export default {
  name: "AudienceService",
  components: { headerNav,Mylogin, Myfbgx },
  data() {
    return {
      type: 6,
      fbgxVisible: false,
      visible: false,
    };
  },
  computed:{
    exhibitionOverviewCountArr() {
      return [
        this.$store.state.user.info.type?this.$t('audienceService.t1'):this.$t('audienceService.t2'),
        // this.$t('audienceService.t3'),
        this.$t('audienceService.t4'),
        this.$t('audienceService.t5'),
        this.$t('audienceService.t6'),
      ]
    }
  },
  watch: {
    $route(val) {
      this.routeWatch(val.path);
    },
  },
  mounted() {
    this.routeWatch(this.$route.path);
  },
  methods: {
    showContent(index) {
      this.type = index + 1;
      if (index === 0) {
        this.$router.push("/logIn?tab=2");
      }
      // if (index === 1) {
      //   this.$router.push('/audienceService/visitGuide')
      // }
      if (index === 1) {
        this.$router.push("/audienceService/exhibitorInquiry");
      }
      if (index === 2) {
        this.fbgxHandle();
      }
      if (index === 3) {
        this.$router.push("/audienceService/downloadDocument");
      }
    },
    fbgxHandle() {
      this.islogin().then(() => {
        this.fbgxVisible = true;
      });
    },
    islogin() {
      return new Promise((r, e) => {
        if (localStorage.getItem("token")) {
          r();
        } else {
          this.visible = true;
          e();
        }
      });
    },
    routeWatch(path) {
      // if (path === '/audienceService/visitGuide') {
      //   this.type = 2
      // }
      if (path === "/audienceService/exhibitorInquiry") {
        this.type = 2;
      }
      if (path === "/audienceService/downloadDocument") {
        this.type = 4;
      }
    },
  },
};
</script>
<style scoped>
.mfsanyaun{
    border-left: 4px solid #5D9AFE;
    /* background-color: rgba(93, 154, 254, 0.3)!important; */
    background: rgba(93, 154, 254, 0.5) !important;
    box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5) !important;
    font-size: 16px !important;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500 !important;
    color: #FFFFFF !important;
    line-height: 22px !important;
}
.mfone{
  font-size: 24px!important;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 40px;
}
.mftwo{
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #666666;
  line-height: 22px;
}
.bannerBox{ overflow: hidden;}
.rotation_img {
  width: 100%;
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
  width: 290px;
}
.exhibition_content {
  /* width: 240px; */
  height: 100px;
  text-align: center;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 0;
  box-sizing: border-box;
  /* background: linear-gradient(90deg, #867df7, #453cb1, #3a35ad, #3a35ad); */
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
.exhibitionOverviewUl li{
  width: 285px;
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
/*.exhibitionOverviewUl li {
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
}*/
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
}
.ditu{
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
}
</style>
