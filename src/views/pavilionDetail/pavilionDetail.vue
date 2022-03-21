<template>
  <div id="pavilionDetail">
    <!-- <div class="commonContent">
      <div class="goBack">
        <span @click="goBack()">
          <img src="../../assets/images/conferenceLive/back.png" alt />
          <span class="backText">{{ $t('back') }}</span>
        </span>
      </div>
    </div> -->
    <div class="bannerBg">
      <!-- <div class="commonContent"> -->
      <img class="banner1" :src="infoData.topImgUrl" alt />
      <!-- </div> -->
      <!-- <img class="banner2" src="../../assets/images/conferenceLive/pavilionDetailBanner2.png" alt /> -->
    </div>
    <div class="commonContent">
      <div class="middleBtn">
<!--        <div class="middleMain" @click="clickEnter()">
          <img class="middleIcon" src="../../assets/images/conferenceLive/people2.png" alt />
          <span class="middleText">{{ $t('pavilionDetail.t1') }}</span>
          <img class="VRBtn" src="../../assets/images/conferenceLive/VRBtn.png" alt />
        </div>
        <div class="middleMain" @click="goVR()">
          <img class="middleIcon" src="../../assets/images/conferenceLive/3D.png" alt />
          <span class="middleText">{{ $t('pavilionDetail.t2') }}</span>
          <img class="VRBtn" src="../../assets/images/conferenceLive/VRBtn.png" alt />
        </div>
        <div class="middleMain" @click="goVRLink()">
          <img class="middleIcon" src="../../assets/images/conferenceLive/VR.png" alt />
          <span class="middleText">{{ $t('pavilionDetail.t3') }}</span>
          <img class="VRBtn" src="../../assets/images/conferenceLive/VRBtn.png" alt />
        </div>-->
      </div>
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('pavilionDetail.t4') }}</div>
      </div>
      <div class="hallIntroduce">
        <div class="hallIntroduceBox">
          <div class="hallIntroduceTop">
            <div class="hallIntroduceText">
              <!-- <p class="hallIntroduceTitle">{{infoData.name}}</p> -->
              <p class="hallIntroduceContent">{{infoData.description}}</p>
            </div>
            <div class="hallIntroduceLive">
              <!-- <img class="hallIntroduceLiveBg" :src="imgList[0]" alt /> -->
              <video
                 class="hallIntroduceLiveBg"
                :src="infoData.videoUrl"
                autoplay="autoplay"
                controls="controls"
              >您的浏览器不支持 video 标签。</video>
              <!-- <img
                style="position: absolute;bottom: 40px;right: 40px;cursor: pointer;"
                src="../../assets/images/conferenceLive/liveBtn.png"
                alt
              />-->
            </div>
          </div>
          <div class="moreBox">
            <p style="width:100px;float:right;cursor:pointer;text-align:right;">
              <!-- <span>更多</span>
              <img class="moreIcon" src="../../assets/images/conferenceLive/more.png" alt /> -->
            </p>
          </div>
          <ul class="hallIntroduceBottom">
            <li v-for="(item,index) in imgList" :key="index">
              <img :src="item" alt />
              <!-- <p class="hover" v-show="isShow">
                <span class="hoverText">5G应用</span>
              </p>-->
            </li>
          </ul>
        </div>
      </div>
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('pavilionDetail.t5') }}</div>
      </div>
      <ul class="starEnterprise">
        <li v-for="(item,index) in StarData" :key="index" :style="{marginRight: ((index+1)%6===0)?'20px':'0'}" @click="toPage('/businessmanDet?id='+item.id)">
          <!-- <div class="starItem"> -->
            <!-- <div class="logoBox">
              <img class="logo" :src="item.logoUrl" alt />
            </div> -->
            <Autoimg :url="item.logoUrl" :width="'180px'" :height="'180px'" />
          <!-- </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
export default {
  name: "pavilionDetail",
  components: { Autoimg },
  data() {
    return {
      currentIndex: 0,
      isShow: false,
      bannerList: [],
      imgList: [],
      StarData: [],
      infoData: {},
      isActive: 0,
    };
  },
  watch:{
    $route(to, from) {
      this.getInfo()
      this.getStarData()
    },
  },
  mounted() {
    this.getInfo();
    this.getStarData();
  },
  methods: {
      //跳转页面
    toPage(url) {
      this.$router.push({
        path: url,
      });
    },
    clickEnter() {
      this.$router.push({
        path:'/exhibitionList?stadiumId='+this.infoData.id+'&categoryId='+this.infoData.categoryId
      })
    },
    goVRLink() {
      window.open("https://www.3dqiye.com/anli/vre/wlw/index.html")
    },
    goVR() {
      if(!this.infoData.threeDUrl)
      return
      window.open(this.infoData.threeDUrl)
    },
    changValue(index) {
      this.isActive = index;
    },
    goBack() {
      window.history.back();
    },
    // 获取数据
    getInfo() {
      this.$http({
        url: this.$http.adornUrl(`/stadium/detail?id=${this.$route.query.id}`),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.infoData = data.data;
          this.imgList = this.infoData.imgUrls
            ? this.infoData.imgUrls.split(",")
            : [];
        }
      });
    },
    //获取明星企业
    getStarData() {
      this.$http({
        url: this.$http.adornUrl(`/exhibitor/list`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 12,
          isStar: 1,
          stadiumId: this.$route.query.id
        }),
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.StarData = data.data.list || [];
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#pavilionDetail {
  .goBack {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 11px;
      height: 18px;
      margin-right: 14px;
    }
    .backText {
      height: 19px;
      font-size: 20px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #444444;
    }
  }
  .bannerBg {
    width: 100%;
    min-width: 1290px;
    // height: 600px;
    // background: linear-gradient(90deg, #15bdff, #0f33a9);
    // position: relative;
    .banner1 {
      // height: 100%;
      // width: 1200px;
      width: 100%;
      // position: absolute;
      // left: 50%;
      // margin-left: -31.25%;
    }
    .banner2 {
      position: absolute;
      bottom: 0;
      height: 204px;
      width: 100%;
    }
  }
  .middleBtn {
    margin-top: 46px;
    display: flex;

    justify-content: center;
    // .exhibitorList:hover,
    // .VRHall:hover {
    //   cursor: pointer;
    //   background: #defcff;
    // }
    // .exhibitorList,
    // .VRHall {
    //   width: 585px;
    //   height: 115px;
    //   background: #ffffff;
    //   box-shadow: 0px 0px 19px 4px rgba(203, 203, 203, 0.1);
    //   border-radius: 15px;
    //   display: inline-block;
    //   font-family: Source Han Sans CN;
    //   .middleIcon {
    //     width: 43px;
    //   }
    //   .middleText {
    //     font-size: 24px;
    //     font-weight: 500;
    //     color: #656565;
    //   }
    //   .icloud {
    //     font-size: 12px;
    //     font-weight: 400;
    //     color: #bbbbbb;
    //     cursor: pointer;
    //   }
    // }
    // .VRBtn {
    //   width: 19px;
    //   height: 16px;
    // }
    // .exhibitorList {
    //   margin-right: 25px;
    //   .middleIcon {
    //     width: 34px;
    //     // height: 44px;
    //   }
    // }
    .middleMain {
      box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.09);
      display: flex;
      align-items: center;
      width: calc( (100% - 44px) / 3);
      margin-right: 22px;
      border-radius: 15px;
      padding: 35px 20px;
      cursor: pointer;
      >img{
        display: block;
      }
      .middleIcon{
        width: 44px;
        margin-right: 10px;
      }
      .middleText {
        display: block;
        flex: 1;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #666666;
        line-height: 33px;
      }
      .VRBtn {
        width: 20px;
      }
    }
    .middleMain:hover {
      background-color: #defcff;
    }
    .middleMain:nth-last-of-type(1){
      margin-right: 0;
    }
  }
  .commonTitleWrap {
    height: 100px;
    display: flex;
    align-items: center;
    .sx {
      width: 4px;
      height: 32px;
      background: #02edfd;
      border-radius: 2px;
    }
    .title {
      width: 126px;
      height: 29px;
      font-size: 30px;
      font-family: SourceHanSansSC;
      font-weight: bold;
      color: #333333;
      margin-left: 13px;
    }
  }
  .hallIntroduce {
    // height: 1138px;
    background: #ffffff;
    box-shadow: 0px 0px 19px 4px rgba(203, 203, 203, 0.1);
    border-radius: 15px;
    padding: 50px 0;
    .hallIntroduceBox {
      width: 1200px;
      margin: 0 auto;
      .hallIntroduceTop {
        display: flex;
        .hallIntroduceText {
          flex: 1;
          margin-right: 50px;
          .hallIntroduceTitle {
            font-size: 28px;
            font-weight: 500;
            color: #656565;
            margin-bottom: 21px;
          }
          .hallIntroduceContent {
            text-indent:40px;
            font-size: 20px;
            font-weight: 400;
            color: #555555;
            line-height: 30px;
            text-align: justify;
          }
        }
        .hallIntroduceLive {
          width: 550px;
          position: relative;
          .hallIntroduceLiveBg {
            width: 100%;
          }
        }
      }
      .moreBox {
        text-align: right;
        height: 18px;
        font-size: 20px;
        font-weight: 400;
        color: #434343;
        margin: 60px 0 30px 0;
        .moreIcon {
          width: 11px;
          height: 18px;
          margin-left: 15px;
        }
      }
      .hallIntroduceBottom {
        display: flex;
        flex-wrap: wrap;
        margin-left: -5px;
        li {
          width: calc((100% / 3) - 20px);
          margin: 10px 10px;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          img {
            width: 100%;
          }
          .hover {
            width: 360px;
            height: 42px;
            opacity: 0.5;
            line-height: 42px;
            bottom: 0;
            position: absolute;
            background: black;
            .hoverText {
              margin-left: 25px;
              color: #ffffff;
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .starEnterprise {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 117px;
    li {
      width: 190px;
      height: 190px;
      margin: 20px;
      // width: 16.66%;
      box-sizing: border-box;
      .Autoimg{
        transition: all .2s;
      }
      //  .starItem{
      //   transition: all .2s;
      //   width: 180px;
      //   height: 180px;
      //   background: #ffffff;
      //   border: 1px solid #e4e4e4;
      //   box-sizing: border-box;
      //   align-items: center;
      //   display: flex;
      //   justify-content: center;
      //   flex-direction: column;
      //   .logoBox {
      //     height: 100px;
      //     width: 100%;
      //     text-align: center;
      //     .logo {
      //       max-width: 85%;
      //       max-height: 90%;
      //     }
      //   }
      // }
    }
    .Autoimg:hover {
      transform: scale(1.2, 1.2);
      box-shadow: 0 0 10px #0000ff;
      cursor: pointer;
      background: #ffffff;
      border: 1px solid #e4e4e4;
      box-shadow: 0px 6px 19px 1px rgba(203, 203, 203, 0.56);
    }
  }
}
</style>
