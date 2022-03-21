<template>
  <div class="right_Content">
    <div class="title">
      <span class="title-text">{{ title }}</span>
      <!-- <div class="mfsek"></div> -->
      <!-- <img class="title-image" src="../../assets/images/exhibitionOverview/zhgk1.png" alt="" /> -->
    </div>
    <!-- <div class="title-border1"></div>
    <div class="title-border2"></div> -->
    <div class="content">
      <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
      <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />

      <p style="text-indent: 2em;margin-top:20px" v-if="!isEn">
        从2015年起，由中国国际商会、日本国际贸易促进协会、韩国贸易协会、中日韩合作秘书处共同主办的中日韩产业博览会已在山东省潍坊市成功举办六届，发展成为中日韩多领域产业合作平台和机制化交流平台。
      </p>
      <p style="text-indent: 2em;margin-top:20px" v-if="isEn">
        Since 2015, China-Japan-Korea Industries Expo, co-hosted by China Chamber of International Commerce, the Association for the Promotion of International Trade, Japan (JAPIT), Korea International Trade Association (KITA), and Trilateral Cooperation Secretariat, have been held successfully for six years in Weifang city, Shandong province, becoming a platform for multi-field industrial cooperation and institutionalized communications among Japan, China and the ROK.
      </p>


      <p style="text-indent: 2em;margin-top:20px" v-if="!isEn">
        六届博览会，展出总面积达25.4万平方米，有2421家企业参展，其中，境外企业1200多家；松下、现代、安川、川崎和中国航天、中船重工、中粮集团等世界500强企业及行业领军企业、隐形冠军企业参展参会；累计到会国内外采购商10.85万人，到会中外观众近70万人次。日本前首相鸠山由纪夫、韩国前副总理黄祐吕等政要，世界海关组织、中日韩三国合作秘书处等国际组织负责人，日本、韩国等国驻华使领馆高层，日本贸易振兴机构、大韩贸易投资振兴公社、日本国际贸易促进协会、韩国贸易协会等商协会机构负责人，海信、华为、浪潮等知名企业高管，著名专家学者等高层嘉宾参会。博览会期间还举办了人才交流、智能制造、服务贸易、乡村振兴、健康养老等项目对接会。
      </p>
      <p style="text-indent: 2em;margin-top:20px" v-if="isEn">
        The six sessions of the Expo boast a total exhibition area of 254,000 square meters and a total number of 2,421 exhibitors, including more than 1, 200 overseas companies. Panasonic, Hyundai, Yaskawa, Kawasaki, and China Aerospace, China Shipbuilding Industry Corporation, COFCO and other Fortune Global 500 companies, industry leaders and hidden champions made their appearances in the exhibition, receiving a total of 108,500 buyers and nearly 700,000 Chinese and foreign visitors. Former Japanese Prime Minister Yukio Hatoyama, former ROK Deputy Prime Minister Hwang Woo-yea and other dignitaries, heads of World Customs Organization, Trilateral Cooperation Secretariat and other international organizations, senior officials of the embassies and consulates of Japan and ROK in China, leaders of Japan External Trade Organization, Korea Trade-Investment Promotion Agency, The Association for the Promotion of International Trade, Japan (JAPIT), Korea International Trade Association (KITA) and other business associations, senior executives from Hisense, Huawei, Inspur and other well-known companies, famous experts, scholars and other high-level guests attended the Expo. In addition, there were project matchmaking events on talent exchange, intelligent manufacturing, trade and services, rural revitalization, as well as health and elderly care.
      </p>

      <p style="text-indent: 2em;margin-top:20px" v-if="!isEn">
        第七届中日韩产业博览会以“新时代、新格局、新机遇”为主题，采用线上线下结合、线上为主的办会模式，举办博览会开幕式暨2021中日韩产业合作发展论坛、展览会、系列配套活动。
      </p>
      <p style="text-indent: 2em;margin-top:20px" v-if="isEn">
        Themed “New Era, New Paradigm, New Opportunities”, the 7th China-Japan-Korea Industries Expo will be staged in “online + offline” forms, with emphasis on the online channel. The events include its opening ceremony and 2021 China-Japan-Korea Industries Cooperative Development Forum, exhibitions, and multiple supporting activities.
      </p>
      <br/>

    </div>
  </div>
</template>

<script>
export default {
  name: 'exhibitionGuide',
  data() {
    return {
      title:'博览会简介',
      intros:'',
      introsEn:'',
      isEn:false,
    };
  },
  mounted() {

    if (localStorage.getItem("lang")=="en"){
      this.isEn = true;
    }else {
      this.isEn = false;
    }
    this.changeTitle();
    window.addEventListener("setItemEvent", (e) => {

      if (e.newValue=="en"){
        this.isEn = true;
        this.changeTitle();
      }else {
        this.isEn = false;
        this.changeTitle();
      }
    });
  },
  methods: {
      changeTitle() {
        if (!this.isEn) {
          this.title = "博览会简介"
        } else {
          this.title = "About the Expo"
        }
      }
    }
    };
</script>

<style lang="scss" scoped>
.mfsek {
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
  position: absolute;
  bottom: 0px;
}
.right_Content {
  margin-top: 90px;
  margin-left: 310px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  height: 821px;
  padding-left: 55px;
}
.title {
  // position: relative;
  // width: 100%;
  // text-align: start;
  height: 77px;
  border-bottom: 2px solid #7daefe;
  width: 820px;
  display: flex;
  align-items: center;
  // position: relative;
  // padding-bottom: 15px;
}
.title-text {
  // position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
  // top: 20%;
  // font-size: 30px;
  // font-family: PingFangSC-Semibold, PingFang SC;

  // font-weight: 600;
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 26px;
  // text-align: start;
  // display: block;
  background-image: url('../../assets/images/neiye_k.png');
  width: 39px;
  height: 41px;
  background-size: 100% 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  padding-left: 25px;
}
.title-image {
  width: 800px;
  padding-top: 50px;
}
.title-border1 {
  height: 3px;
  width: 100%;
  // background: #2A64E6;
  background-color: #ccfd04;
  margin-bottom: 2px;
}
.title-border2 {
  height: 1px;
  width: 100%;
  // background: #2A64E6;
  background-color: #ccfd04;
}
.content-img-1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.content-img-2 {
  position: absolute;
  right: -64px;
  z-index: 1;
  top: 450px;
}
.content {
  // margin: auto;
  position: relative;
  margin-top: 20px;
  width: 820px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #636363;
  line-height: 28px;
  letter-spacing: 1px;
  p {
    line-height: 30px;
  }
  .text-center {
    text-align: center;
  }
  .text-jc {
    font-weight: bold;
  }
  .text-blue {
    color: rgb(1, 82, 217);
  }
}
.content-title {
  width: 200px;
  border-radius: 25px;
  background: #5a66ef;
  // background-size: 100% 100%;
  text-align: center;
  line-height: 50px;
  height: 50px;
  color: #fff;
  margin: 40px auto 30px;
}
</style>
