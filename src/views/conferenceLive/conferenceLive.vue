<template>
  <div>
    <!-- <div class="back commonContent">{{ $t('back') }}</div> -->
    <!--
    <img class="rotation_img" src="https://file.mepxns.info/%E6%99%BA%E8%83%BD%E7%89%A9%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A-%E9%A1%B6%E5%9B%BE-%E5%B1%95%E4%BC%9A%E6%A6%82%E6%8B%AC.png" alt />
    -->
<!--    <img class="rotation_img" src="../../assets/images/conferenceLive/banner2.png" alt="">-->
    <!-- <div class="exhibitionOverviewName commonContent">展会概况</div>
    <hr /> -->
    <div style="position: relative;">
      <!-- <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">

            <span>{{ $t('conferenceLive.nav') }}</span>

            <br />
            <br />
            <span>Conference Activities</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <router-link v-for="(item,index) in exhibitionOverviewCountArr" :key="index" :to="item.url">
              <li :style="{ color: type == (index+1)?'#2884EC' : '#0B1031'}" @click="showContent(index)" >
                {{item.name}}
                <img
                  v-show="type == (index+1)"
                  class="liRightImg"
                  src="../../assets/images/exhibitionOverview/liRightImg.png"
                />
              </li>
            </router-link>
          </ul>
        </div>
        <router-view></router-view>
      </div> -->
      <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span class="mfone">{{ $t('conferenceLive.nav') }}</span>
            <br />
            <br />
            <span class="mftwo">Conference Activities</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <!-- :style="{ color: type == (index+1)?'#666666' : '#484848'}" -->
            <router-link v-for="(item,index) in exhibitionOverviewCountArr" :key="index" :to="item.url">
              <li :class="type == (index+1)?'mfsanyaun':''"  @click="showContent(index)" >
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
  name:"conferenceLive",
  components:{headerNav},
  data() {

    return {
      type: 1
    };
  },
  computed: {
    exhibitionOverviewCountArr() {
      return [
        {name: this.$t('conferenceLive.t1'), url: '/schedule'},

        {name: this.$t('conferenceLive.t3'), url: '/conferenceLive2'},
        {name: this.$t('conferenceLive.t4'), url: '/conferenceLive3'},
        {name: this.$t('conferenceLive.t5'), url: '/conferenceLive4'},
        {name: this.$t('conferenceLive.t6'), url: '/conferenceLive5'},
        {name: this.$t('conferenceLive.t2'), url: '/conferenceLive1'},
        {name: this.$t('conferenceLive.t7'), url: '/conferenceLive6'},
        {name: this.$t('conferenceLive.t8'), url: '/conferenceLive7'}
      ]
    }
  },
  watch: {
    $route(val) {
      this.routeWatch()
    }
  },
  mounted() {
    this.routeWatch()
    // console.log(this.type);
  },
  methods: {
    showContent(index) {
      this.type = index + 1;
    },
    routeWatch() {
      for (const i in this.exhibitionOverviewCountArr) {
        if (this.exhibitionOverviewCountArr[i].url === this.$route.path) {
          this.type = i*1 + 1
        }
      }
    }
  }
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
      font-size: 22px!important;
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
    /* width: 300px; */
    /* height: 47px; */
    padding: 10px 5px;
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
/* .mfsanyaun{
    border-left: 4px solid #5D9AFE;
    background-color: rgba(93, 154, 254, 0.3)!important;
    color: #666666!important;
  }
  .mfone{
    font-size: 28px!important;
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
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
} */
</style>
