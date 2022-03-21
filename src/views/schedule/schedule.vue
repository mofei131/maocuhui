<template>
  <div>
    <div class="right_Content">
      <div class="info-box" v-if="!isEn">

        <div class="titles">
          <div class="title-texts">第七届中日韩产业博览会开幕式暨2021中日韩产业合作发展论坛</div>
          <div class="title-time"><span style="color: #7daefe;">10月26日 09:30</span></div>
        </div>

        <div class="mftit">日程</div>
        <div class="richeng">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <p class="title" style="margin-top: 20px;">（一）博览会开幕式</p>
          <p class="info1">刘&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;潍坊市委副书记、市长&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum001.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"><span @click="toPage('inviteGuestDetail?id=76')">汲&nbsp;&nbsp;斌&nbsp;&nbsp;昌</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山东省副省长&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum002.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"><span @click="toPage('inviteGuestDetail?id=75')">潘&nbsp;&nbsp;基&nbsp;&nbsp;文</span>&nbsp;&nbsp;&nbsp;&nbsp;    联合国前秘书长&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum003.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"><span @click="toPage('inviteGuestDetail?id=74')">李&nbsp;&nbsp;海&nbsp;&nbsp;瓒</span>&nbsp;&nbsp;&nbsp;&nbsp;    韩国前总理&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum004.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"><span @click="toPage('inviteGuestDetail?id=58')">卢&nbsp;&nbsp;鹏&nbsp;&nbsp;起</span>&nbsp;&nbsp;&nbsp;&nbsp;中国国际贸易促进委员会党组成员、副会长&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum005.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="title">（二）中日韩产业合作发展论坛</p>
          <p class="info1">第一环节：营造开放包容的合作环境，激活创新引领的合作动能，开创互利共赢的合作局面</p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=39')">邱&nbsp;&nbsp;国&nbsp;&nbsp;洪</span>&nbsp;&nbsp;&nbsp;&nbsp;    中国前驻韩国大使&nbsp;&nbsp;演讲题目：深化中日韩产业合作，潍坊有天时地利人和优势&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum006.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=43')">孔&nbsp;&nbsp;铉&nbsp;&nbsp;佑</span>&nbsp;&nbsp;&nbsp;    中国驻日本大使&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum007.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=44')">邢&nbsp;&nbsp;海&nbsp;&nbsp;明</span>&nbsp;&nbsp;&nbsp;    中国驻韩国大使&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum008.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=45')">井川原贤</span>&nbsp;&nbsp;&nbsp;&nbsp;  日本驻青岛总领馆总领事&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum009.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <!--          <p class="info2" @click="toPage('inviteGuestDetail?id=46')">金&nbsp;&nbsp;敬&nbsp;&nbsp;翰 &nbsp;&nbsp;&nbsp;&nbsp;   韩国驻青岛总领馆总领事</p>-->
          <p class="info1">第二环节：促进中日韩智能制造、数字经济、氢能产业、现代农业领域产业合作,分享发展机遇，开拓增长空间</p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=56')">孙&nbsp;&nbsp;少&nbsp;&nbsp;军</span>&nbsp;&nbsp;    山东重工集团副总经理、潍柴动力股份有限公司执行总裁&nbsp;&nbsp;演讲题目：心无旁骛攻主业，创新驱动高质量发展&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum010.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=47')">大和健一</span>&nbsp;&nbsp;  日本三菱日联银行执行董事&nbsp;&nbsp;演讲题目：加强中日韩合作，推动氢能产业发展&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum011.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=50')">高&nbsp;&nbsp;熙&nbsp;&nbsp;锡</span>&nbsp;&nbsp;    韩国希杰集团中国总部副总裁&nbsp;&nbsp;演讲题目：紧跟新发展理念，探讨新发展机遇&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum012.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=51')">平野雅之</span>&nbsp;&nbsp;  日本丸红株式会社中国副总代表&nbsp;&nbsp;演讲题目：丸红在中国的活动及在潍坊的挑战&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum0131.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" />&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum0132.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" />&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum0133.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">第三环节：推进RCEP及中日韩FTA区域合作进程,维护和强化以规则为基础的多边贸易体制</p>
          <!--          <p class="info2">于&nbsp;&nbsp;风&nbsp;&nbsp;贵&nbsp;&nbsp;&nbsp;&nbsp;    山东省贸促会党组书记、会长</p>-->
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=48')">欧&nbsp;&nbsp;渤&nbsp;&nbsp;芊</span>&nbsp;&nbsp;&nbsp;&nbsp;    中日韩合作秘书处秘书长&nbsp;&nbsp;演讲题目：共商合作共赢之道，共筑融合发展之路&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum014.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=42')">笠井爚雄</span>&nbsp;&nbsp;&nbsp;&nbsp;  日本国际贸易促进协会理事长&nbsp;&nbsp;演讲题目：推进东亚和平发展&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum015.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info2"><span @click="toPage('inviteGuestDetail?id=40')">赵&nbsp;&nbsp;忠&nbsp;&nbsp;秀</span>&nbsp;&nbsp;&nbsp;&nbsp;    山东财经大学校长&nbsp;&nbsp;演讲题目：构建协同引资体系，提高日韩外资利用质量&nbsp;  <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/forum016.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
        </div>

        <div v-for="(item,index) in list2" :key="index">

          <div class="mftit">{{item.title}}</div>
          <div class="mffenc">
            <div v-for="(item,index) in item.content">
              {{item}}
            </div>
          </div>
        </div>
      </div>
      <div class="info-box" v-if="isEn">

        <div class="titles">
          <div class="title-texts">2021 China-Japan-Korea Industries Cooperative Development Forum</div>
          <div class="title-time"><span style="color: #7daefe;">09:30 A.M. October 26, 2021 </span></div>
        </div>

        <div class="mftit">Agenda</div>
        <div class="richeng">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <p class="title" style="margin-top: 20px;">Opening Ceremony of the Expo</p>
          <p class="info1">Liu Yun  Vice Secretary of the CPC Weifang Municipal Committee and Mayor of Weifang</p>
          <p class="info1" @click="toPage('inviteGuestDetail?id=76')">Ji Binchang, Vice Governor of Shandong Province</p>
          <p class="info1" @click="toPage('inviteGuestDetail?id=75')">Ban Ki Moon, Former Secretary of the UN</p>
          <p class="info1" @click="toPage('inviteGuestDetail?id=74')">Lee Hae Chan, Former Prime Minister of the ROK</p>
          <p class="info1" @click="toPage('inviteGuestDetail?id=58')">Lu Pengqi, Vice President of CCPIT</p>

          <p class="title">2021 China-Japan-Korea Industries Cooperative Development Forum</p>
          <p class="info1">Part One: Creating an open and inclusive cooperation environment, activating innovation-driven cooperation growth drivers, and opening a cooperation chapter of reciprocity and mutual benefits</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=39')">Qiu Guohong, Former Ambassador of China in the ROK&nbsp;&nbsp;Theme: Weifang Enjoys Favorable Geographical and Human Conditions to Deepen Trilateral Industrial Cooperation</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=43')">Kong Xuanyou, Ambassador of China in Japan</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=44')">Xing Haiming, Ambassador of China in the ROK</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=45')">Igawahara Masaru, Consul-General of Japan in Qingdao</p>
          <!--          <p class="info2" @click="toPage('inviteGuestDetail?id=46')">金&nbsp;&nbsp;敬&nbsp;&nbsp;翰 &nbsp;&nbsp;&nbsp;&nbsp;   韩国驻青岛总领馆总领事</p>-->
          <p class="info1">Part Two: Promoting cooperation of China, Japan and the ROK in intelligent manufacturing, digital economy, hydrogen energy industry and modern agriculture, sharing development opportunities, and expanding growth space</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=56')">Sun Shaojun, Deputy General Manager of Shandong Heavy Industry Group and Executive President of Weichai Power Co., Ltd&nbsp;&nbsp;Speech title: Openness, Cooperation, Win-win Results, and Co-creating a Green Future</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=47')">Yamato Kenichi, President of MUFG Bank, Ltd&nbsp;&nbsp;Speech title: Enhancing China-Japan-Korea Cooperation and Pushing Forward Hydrogen Energy Industry Development</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=50')"> Ko Hee Suk, Vice President of CJ China&nbsp;&nbsp;Speech title: Keeping Track of New Development Philosophy and Exploring New Development Opportunities</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=51')"> Hirano Masayuki, Deputy Chief Representative of Marubeni China&nbsp;&nbsp;Speech title: Marubeni's Activities in China and Challenges in Weifang</p>
          <p class="info1">Part Three: Accelerating regional cooperation progress of RCEP and China-Japan-Korea FTA, and maintaining and fortifying rule-based multilateral trading regime</p>
          <!--          <p class="info2">于&nbsp;&nbsp;风&nbsp;&nbsp;贵&nbsp;&nbsp;&nbsp;&nbsp;    山东省贸促会党组书记、会长</p>-->
          <p class="info2" @click="toPage('inviteGuestDetail?id=48')">Ou Boqian, Secretary-General of Trilateral Cooperation Secretariat&nbsp;&nbsp;Speech title: Discussing Together the Way of Collaboration and Mutual Benefits, Building Together the Path of Integration and Development</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=42')">Kasai Yakuo, President of JAPIT&nbsp;&nbsp;Speech title: Forging Closer Cooperative Ties between Countries and Advancing Peaceful Development of East Asia</p>
          <p class="info2" @click="toPage('inviteGuestDetail?id=40')">Zhao Zhongxiu, President of Shandong University of Finance and Economics&nbsp;&nbsp;Speech title: Constructing a Collaborative Regime for Investment Promotion and Bettering Japanese and Korean Investment Utilization</p>
        </div>

        <div v-for="(item,index) in list4" :key="index">

          <div class="mftit">{{item.title}}</div>
          <div class="mffenc">
            <div v-for="(item,index) in item.content">
              {{item}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="shipinUrl_show" class="home_img_bofang-mark">
      <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="shipinUrl_show = false"
           src="../../assets/images/exhibition/close.png" />
      <video width="800px" height="450px" style="margin-left: 7px;" controls="controls" :src="shipinUrl"></video>
    </div>
  </div>
</template>

<script>
import Infoview from '@/views/exhibitionOverview/component/infoview';

export default {
  name: "schedule",
  components: { Infoview },
  data() {
    return {
      isEn:false,
      shipinUrl: '',
      shipinUrl_show: false,
      list: [

        {
          title: '时间地点',
          content: ['2021年10月26日上午9:30-12:00 ','富华大酒店泰山厅']
        },/*{
          title: '地点',
          content: ['富华大酒店泰山厅']
        },*/

        {
          title: '日程',
          content: [],
        }
      ],
      list2: [
        {
          title: '主办单位',
          content: ['中国国际贸易促进委员会', '山东省人民政府','日本国际贸易促进协会','韩国贸易协会','中日韩合作秘书处'],
        },
        {
          title: '承办单位',
          content: ['中国国际商会会展部', '山东省贸促会', '潍坊市人民政府'],

        },{
          title: '支持单位',
          content: ['日本贸易振兴机构', '日中经济贸易中心', '东海日中贸易中心', '日本经济团体联合会','日中经济协会', '日本商工会议所', '中国日本商会','日本自治体国际化协会北京事务所','大韩贸易投资振兴公社', '韩国展示产业振兴会', '韩国全国经济人联合会', '韩国商工会议所','中国韩国商会','韩国京畿道经济科学振兴院上海代表处'],

        },
        {
          title: '参会人员',
          content: [' 国际组织负责人，日韩前政要，中国贸促会、山东省政府及省直有关部门领导，中日韩三国使领馆高层、地方政府和重点商协会代表、知名企业高管、经贸专家学者、主流媒体代表，全国贸促系统代表，潍坊市直部门、各县市区、参加博览会企业代表等。' ],

        }
      ],
      list3: [

        {
          title: 'Agenda',
          content: [],
        }
      ],
      list4: [
        {
          title: 'Hosts',
          content: ['China Council for the Promotion of International Trade (CCPIT)', 'People\'s Government of Shandong Province','The Association for the Promotion of International Trade, Japan (JAPIT)','Korea International Trade Association (KITA)','Trilateral Cooperation Secretariat'],
        },
        {
          title: 'Organizers',
          content: ['Exhibition Department of China Chamber of International Commerce (CCOIC)', 'China Council for the Promotion of International Trade Shandong Sub-council', 'Weifang Municipal People’s Government'],

        },{
          title: 'Supporters',
          content: ['China Council for the Promotion of International Trade (CCPIT)','People‘s Government of Shandong Province','Japan External Trade Organization (JETRO)', 'Japan-China Economic Relations and Trade Center', 'Tokai Japan-China Trade Center', 'Japan Business Federation','Japan-China Economic Association', 'The Japan Chamber of Commerce and Industry',
            'The Japanese Chamber of Commerce and Industry in China', 'Council of Local Authorities for International Relations (CLAIR), BEIJING', 'Korea Trade-Investment Promotion Agency', 'Association of Korea Exhibition Industry','The Federation of Korea Industries','The Korea Chamber of Commerce & Industry','The Korea Chamber of Commerce in China','Gyeonggido Business & Science Accelerator, Shanghai'],

        },
        {
          title: 'Participants',
          content: [' Heads of international organizations, former senior government officials of Japan and the ROK, leaders from CCPIT, Shandong Provincial Government and relevant departments under the direct management of Shandong Provincial Government, high-level officials of the embassies and consulates, local governments and representatives of key business associations, famous enterprises, trade and business scholars and experts, mainstream media, national trade promotion institutions, bureaus and institutes under the direct management of Weifang Municipal Government, county-level and district-level governments as well as participating enterprises.' ],

        }
      ]
    }
  },
  methods:{
    //跳转页面
    toPage(url) {
      console.log(url);
      this.$router.push({
        path: url
      });
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
  }
};
</script>

<style scoped>
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
  top: 750px;
}
.mftit{
  border-left: 4px solid #7daefe;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  /* line-height: 20px; */
  height: 20px;
  /* margin-top: 22px; */
  padding-left: 8px;
  font-weight: bold;
  color: #666666;
  margin: 10px 0px;
}
.titles {
  height: 100px;
  border-bottom: 2px solid #7daefe;
  width: 820px;
  display: flex;
  align-items: center;
  position: relative;
}
.title-texts {
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 26px;
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
.title-time{
  position: absolute;
  right: 0;
  bottom: 7px;
  font-size: 16px;
  text-align: right;
  line-height: 24px;
}
.mffenc div{
  padding: 0px 5px 0px 5px;
  margin-right: 10px;
  cursor: pointer;
  color: #636363;
  /* line-height: 2; */
  line-height: 40px;
}
.mffenc{
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-left: 30px;
  /* margin-bottom: 30px; */
}

.richeng{
  padding-top: 0;
  color: #636363;
  position: relative;
  width: 820px;
  line-height: 40px;
}
.title{
  font-size: 16px;
  padding-left: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  /* line-height: 26px; */
  /* margin-bottom: 17px; */
}
.info1{
  padding-left: 30px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* line-height: 24px; */
  /* margin-bottom: 17px; */
}
.info2{
  padding-left: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #636363;

  /* line-height: 24px; */
  /* margin-bottom: 17px; */
  cursor: pointer;

}
.info2 img{
  width: 25px;
  margin-bottom: 8px;
}

.imgshow{
  position: absolute;top: 50%;margin-top: -12px;
}

.info-box{
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  padding-left: 55px;
}

.info-container{
  margin-bottom:20px;
}

.info-title{
  text-align: start;
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 26px;
  height: 55px;
  align-items: center;
  display: flex;
}

.info-line{
  width: 20px;
  height: 1px;
  margin: 0 10px ;
  background: #444444;
}

.info-text{
  display:flex;
  padding:10px 0 20px 0;
  flex-wrap:wrap;
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #222222;
}

.info-text >span{
  padding: 10px 0 10px 0;
  margin:0 25px ;
}
.home_img_bofang-mark {
  position: fixed;
  top: 50%;
  left: 50%;
  overflow: auto;
  margin: 0;
  z-index: 7000;
  transform: translate(-50%, -50%);
  background-image: url(../../assets/images/home/home_kuang.png);
  background-size: 100% 100%;
  width: 899px;
  height: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
