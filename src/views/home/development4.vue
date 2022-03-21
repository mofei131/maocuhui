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
    <div class="bannerBg" style="position: relative;z-index: 1000;">
      <!-- <div class="commonContent"> -->
<!--      <img class="banner1" src="../../assets/images/zone/gaoxin0.jpg" alt />-->
      <!-- </div> -->
      <!-- <img class="banner2" src="../../assets/images/conferenceLive/pavilionDetailBanner2.png" alt /> -->
    </div>
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
    <div class="commonContent" style="position: relative;z-index: 1000;">
      <div class="middleBtn">

      </div>
      <div class="commonTitleWrap">
<!--        <span class="sx"></span>-->
        <div class="title" @click="webPage('http://wfgx.gov.cn/')">
          <img src="../../assets/images/home/gaoxin_logo.jpg" style="width: 100%;margin-right: 15px;" />
<!--          {{ $t('developmentZone.t4') }}-->
        </div>
      </div>
      <div class="hallIntroduce">
        <div class="hallIntroduceBox">
          <div class="hallIntroduceTop">

            <div class="hallIntroduceText">
             <div style="text-align: center;padding-top: 20px">
                <video
                  width="800px"
                  height="600px"
                  preload
                  src="http://cjkiexpo.org.cn/videosjava/gaoxin.mp4"
                  controls="controls"
                >您的浏览器不支持 video 标签。</video>
              </div>
<!--              <div class="player-container">
                <vue-core-video-player src="http://218.59.142.236:9002/java/storage/gaoxin.mp4" preload="metadata" Controls="auto"></vue-core-video-player>
              </div>-->

              <!-- <p class="hallIntroduceTitle">{{infoData.name}}</p> -->
              <p class="hallIntroduceContent" v-if="!isEn">潍坊国家高新区位于山东半岛重要的区域性中心城市、环渤海重要海滨城市、全国文化名城、世界风筝都——潍坊，设立于1991年，面积123平方公里，人口42万。近年来，坚持以发展高新技术产业为主线，大力实施创新驱动发展战略，先后获批国家创新型科技园区、国家级绿色园区、国家知识产权示范园区、国家专利导航产业发展实验区、国家高新区创新驱动发展示范工程、国家可持续发展实验区、创业中国（潍坊）示范工程、国家战略性新兴产业知识产权集群管理试点、国家科技服务业区域试点，被科技部评为“国家高新区建设20年先进集体”，正在建设山东半岛国家自主创新示范区，全力打造高质量发展先行区、高品质城市样板区。2020年，实现地区生产总值543亿元、高新技术产业产值1160亿元、进出口总额367亿元。</p>
              <div class="content_img" v-if="!isEn">
                <img src="../../assets/images/zone/gaoxin1.jpg" />
                <img src="../../assets/images/zone/gaoxin2.jpg"  />
                <!--                <img src="../../assets/images/zone/gaoxin3.jpg" />-->
              </div>

              <p class="hallIntroduceContent" v-if="isEn">Weifang National High-tech Zone is located in Weifang, an important regional central city on the Shandong Peninsula, an important coastal city in the Bohai rim, a national cultural city, and the World Kite Capital. Established in 1991, the Zone covers an area of 123 square kilometers with a population of 380,000. In recent years, adhering to the development of high-tech industries as the main task and implementing the strategy of innovation-driven development, it has been approved to be constructed as National Innovative Sci-tech Park, National Green Park, National Intellectual Property Demonstration Park, National Patent Navigation Industry Development Experimental Zone and National High-tech Zone Innovation-driven Development Demonstration Project, National Experimental Zone for Sustainable Development, China Entrepreneurs (Weifang) Demonstration Project, Intellectual Property Cluster Management Pilot of National Strategic Emerging Industries and Regional Pilot of National Sci-tech Service Industry, and appraised to be “Advanced Collective of 20-year National High-tech Zone Construction” by the Ministry of Science and Technology. It is building the national independent innovation demonstration zone of Shandong peninsula and striving to build a pioneer zone of high-quality development and a model zone of high-quality city. In 2020, its GDP reached 54.3 billion yuan, with high-tech output value amounting to116 billion yuan, imports and exports value totaled 36.7 billion yuan.</p>
              <div class="content_img" v-if="isEn">
                <img src="../../assets/images/zone/gaoxin4.jpg" />
                <img src="../../assets/images/zone/gaoxin5.jpg"  />
              </div>
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


    </div>
  </div>
</template>
<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
export default {
  name: "development2",
  components: { Autoimg },
  data() {
    return {
      currentIndex: 0,
      isShow: false,
      isEn: false,
      bannerList: [],
      imgList: [],
      description:"潍坊综合保税区于2011年1月获国务院批准设立，总面积13.68平方公里，其中网内面积3.84平方公里，网外配套区9.84平方公里，分为南区、北区“一区两片”运营。南区面积4.1平方公里，位于潍坊中心城区东部，位置优越，交通便利，服务潍坊及周边地市企业；北区面积9.58平方公里，紧靠国家一类开放口岸——潍坊港，纳入潍坊国家农业开放发展综合试验区核心区。今年1-5月份，实现进出口102.3亿元、增长446.7%、增幅居全省海关特殊监管区第1位，以全市不到1/1000的土地贡献了1/8的进出口额，拉动全市外贸增幅11.8个百分点；规模以上工业增加值、规模以上工业产值、一般公共预算收入等指标增幅均居全市首位。\n" +
        "产业支撑坚强有力，立足功能定位，依托歌尔、佩特来等龙头企业，培育壮大虚拟现实、新能源动力、大宗商品国际贸易产业集群，做强高质量发展的实体支撑。政策服务创新完善，落地国务院21项新政13项、自贸区政策21项，新组建企业服务中心、“即诉即办”中心，市场主体接近2万家，12345政务热线群众满意度连续24个月居全市第一。新兴业态集聚发展，是潍坊国家跨境电商综合试验区核心区，跨境电商、保税维修、保税研发等外贸新业态加速发展。金融服务优化提升，开展供应链金融、关税保证保险、出口信用保险等新业务，创新外汇轧差结算模式，以金融助力实体经济发展。现代化保税港区全面起势，与世界500强中电建合作开发共建，获批济南关区首个进境粮食指定监管场地，大力培育国际分拨、仓储物流等临港产业，打造北部沿海开放新增长极。\n",
      StarData: [],
      infoData: {},
      isActive: 0,

      mouseOver_index: 0
    };
  },
  watch:{

  },
  mounted() {
    if (localStorage.getItem("lang")=="en"){
      this.isEn = true;
    }else {
      this.isEn = false;
    }
    window.addEventListener("setItemEvent", (e) => {
      console.log(e.newValue)
      if (e.newValue=="en"){
        this.isEn = true;
      }else {
        this.isEn = false;
      }
    });


  },
  methods: {
    mouseOver(index) {
      this.mouseOver_index = index;
    },
    leave() {
      this.mouseOver_index = 0;
    },
    webPage(url){
      window.open(url, '_blank');
    },

    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url,
      });
    },
    goBack() {
      window.history.back();
    },


  },
};
</script>

<style lang="scss" scoped>
.select-nav{
  color: #0074D9 !important;
  text-decoration: underline;
  cursor: pointer;
}
.ditu{
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
}
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
    text-align: center;

    .banner1 {
      padding-top: 5px;
      height: 600px;
      // width: 1200px;
      width: 100%;
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
      width: 300px;
      height: 45px;
      font-size: 30px;
      font-family: SourceHanSansSC;
      font-weight: bold;
      color: #333333;
      margin-left: 13px;
      display: flex;
      align-items: center;
      white-space: nowrap;
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
          .content_img{
            text-align: center;
            img{
              padding-top: 10px;
              width: 60%;
              height: 500px;
            }
          }

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
            line-height: 40px;
            text-align: justify;
            margin: 34px 0;
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
