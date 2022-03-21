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
    <div class="bannerBg"  style="position: relative;z-index: 1000;">
      <!-- <div class="commonContent"> -->
<!--      <img class="banner1" src="../../assets/images/zone/baoshui1.png" alt />-->
      <!-- </div> -->
      <!-- <img class="banner2" src="../../assets/images/conferenceLive/pavilionDetailBanner2.png" alt /> -->
    </div>
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
    <div class="commonContent"  style="position: relative;z-index: 1000;">
      <div class="middleBtn">

      </div>
      <div class="commonTitleWrap">
<!--        <span class="sx"></span>-->
        <div class="title"  @click="webPage('http://wfftz.weifang.gov.cn/')">
          <img src="../../assets/images/home/baoshui_logo.png" style="width: 100%;margin-right: 15px;background: #6093d1;" />
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

                  src="http://cjkiexpo.org.cn/videosjava/baoshui.mp4"

                  controls="controls"
                >您的浏览器不支持 video 标签。</video>
              </div>
              <!-- <p class="hallIntroduceTitle">{{infoData.name}}</p> -->
              <p class="hallIntroduceContent"  v-if="!isEn">潍坊综合保税区于2011年1月获国务院批准设立，总面积13.68平方公里，其中网内面积3.84平方公里，网外配套区9.84平方公里，分为南区、北区“一区两片”运营。今年1-5月份，实现进出口102.3亿元、增长446.7%、增幅居全省海关特殊监管区第1位，以全市不到1/1000的土地贡献了1/8的进出口额，拉动全市外贸增幅11.8个百分点；规模以上工业增加值、规模以上工业产值、一般公共预算收入等指标增幅均居全市首位。</p>
             <div class="content_img" v-if="!isEn">


               <img src="../../assets/images/zone/baoshui2.jpg" />
               <img src="../../assets/images/zone/baoshui3.png" />
             </div>

              <p class="hallIntroduceContent" v-if="isEn">Weifang Free Trade Zone was approved by the State Council and established in January 2011, with a total coverage of 13.68 square kilometers among which 3.84 square kilometers in the park district and 9.84 square kilometers outside the park district. It is divided into a South District and a North District with "one zone two districts" operation. The import and export volume of the Weifang Free Trade Zone  reached 10.23 billion yuan  from January to May this year, with an increase of 446.7% year on year, ranking first among all the special customs supervision zone in Shandong province. Weifang Free Trade Zone covers one eighth import and export volume of the whole city with an area of less than 1 / 1000 of Weifang City, driving the city’s foreign trade volume growth by 11.8 percent. The increase in added value of industries above designated size, output value of industries above designated size and  general public budget revenue of Weifang Free Trade Zone all rank first among the whole city.
              </p>
              <div class="content_img"  v-if="isEn">


                <img src="../../assets/images/zone/baoshui4.jpg" />

                <img src="../../assets/images/zone/baoshui5.jpg" />
              </div>
            </div>

          </div>

          <div class="moreBox">
            <p style="width:100px;float:right;cursor:pointer;text-align:right;">
              <!-- <span>更多</span>
              <img class="moreIcon" src="../../assets/images/conferenceLive/more.png" alt /> -->
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
export default {
  name: "development1",
  components: { Autoimg },
  data() {
    return {
      currentIndex: 0,
      isShow: false,
      isEn:false,
      bannerList: [],
      imgList: [],
      description:"潍坊综合保税区于2011年1月获国务院批准设立，总面积13.68平方公里，其中网内面积3.84平方公里，网外配套区9.84平方公里，分为南区、北区“一区两片”运营。南区面积4.1平方公里，位于潍坊中心城区东部，位置优越，交通便利，服务潍坊及周边地市企业；北区面积9.58平方公里，紧靠国家一类开放口岸——潍坊港，纳入潍坊国家农业开放发展综合试验区核心区。今年1-5月份，实现进出口102.3亿元、增长446.7%、增幅居全省海关特殊监管区第1位，以全市不到1/1000的土地贡献了1/8的进出口额，拉动全市外贸增幅11.8个百分点；规模以上工业增加值、规模以上工业产值、一般公共预算收入等指标增幅均居全市首位。\n" +
        "产业支撑坚强有力，立足功能定位，依托歌尔、佩特来等龙头企业，培育壮大虚拟现实、新能源动力、大宗商品国际贸易产业集群，做强高质量发展的实体支撑。政策服务创新完善，落地国务院21项新政13项、自贸区政策21项，新组建企业服务中心、“即诉即办”中心，市场主体接近2万家，12345政务热线群众满意度连续24个月居全市第一。新兴业态集聚发展，是潍坊国家跨境电商综合试验区核心区，跨境电商、保税维修、保税研发等外贸新业态加速发展。金融服务优化提升，开展供应链金融、关税保证保险、出口信用保险等新业务，创新外汇轧差结算模式，以金融助力实体经济发展。现代化保税港区全面起势，与世界500强中电建合作开发共建，获批济南关区首个进境粮食指定监管场地，大力培育国际分拨、仓储物流等临港产业，打造北部沿海开放新增长极。\n",
      StarData: [],
      infoData: {},
      isActive: 0,
    };
  },
  watch:{
    $route(to, from) {

    },
  },
  mounted() {

    if (localStorage.getItem("lang")=="en"){
      this.isEn = true;
    }else {
      this.isEn = false;
    }
    window.addEventListener("setItemEvent", (e) => {

      if (e.newValue=="en"){
        this.isEn = true;
      }else {
        this.isEn = false;
      }
    });

  },
  methods: {
    //跳转页面

    webPage(url){
      window.open(url, '_blank');
    },

    goBack() {
      window.history.back();
    },

  },
};
</script>

<style lang="scss" scoped>
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
      height: 750px;
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
      cursor: pointer;
      span {
        font-size: 24px;
        font-family: SourceHanSansSC;
        font-weight: bold;
        color: #333333;
        cursor: pointer;
      }

    }
  }
  .hallIntroduce {
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
