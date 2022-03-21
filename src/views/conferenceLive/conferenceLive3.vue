<template>
  <div>
    <div class="right_Content">
      <div class="info-box" v-if="!isEn">
        <!-- <div class="info-title"><span>中日韩地方政府合作对接会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <div class="titles">
          <div class="title-texts">中日韩地方政府合作对接会</div>
          <div class="title-time"><span style="color: #7daefe;">10月26日 14:00</span></div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc">
              <div  v-for="(item,index) in item.content" :key="index">
                {{item}}
              </div>
            </div>
          </div>
          <div class="richeng">
            <p class="title">嘉宾致辞</p>
            <p class="info1">中国前驻韩国大使邱国洪致辞&nbsp;<img
              @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/person_qiuguohong.mp4'"
              style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
            <p class="info1">韩国贸易协会北京代表处首席代表朴珉永致辞&nbsp;<img
              @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/person_hg.mp4'"
              style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
            <p class="info1">日本贸易振兴机构青岛代表处首席代表吉川明伸致辞&nbsp;<img
              @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/person_wz.mp4'"
              style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
<!--            <p class="title">签约仪式&nbsp;<img
              @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/qianyue1026001.mp4'"
              style="width: 25px;" src="../../assets/images/home/zb_bf.png" />&nbsp;<img
              @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/qianyue1026002.mp4'"
              style="width: 25px;" src="../../assets/images/home/zb_bf.png" />&nbsp;<img
              @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/qianyue1026003.mp4'"
              style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>-->
            <p class="title">宣传推介</p>
            <p class="info1">1.&nbsp;&nbsp;韩国京畿道上海代表处推介：京畿道-韩国的第一经济中心；&nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local102.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local101.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" /></p>
            <p class="info1">2.&nbsp;&nbsp;日本福岛县上海代表处推介：福岛县现状以及推动再生能源发展的相关对策；
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local202.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local201.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" />
            </p>
            <p class="info1">3.&nbsp;&nbsp;韩国釜山市上海代表处推介：釜山环境和投资项目； &nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local302.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local301.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" /></p>
            <p class="info1">4.&nbsp;&nbsp;日本自治体国际化协会北京事务所推介：蓬勃发展的日本自治体国际化协会北京事务所； &nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local402.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local401.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" /></p>
            <p class="info1">5.&nbsp;&nbsp;韩国庆尚南道青岛代表处推介：庆尚南道投资环境及优惠政策；&nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local502.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local501.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" /></p>
            <p class="info1">6.&nbsp;&nbsp;日中经济协会北京事务所推介：推动中日地方合作，促进中日企业交流与发展-日中经济协会简介; &nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local602.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local601.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" /></p>
            <p class="info1">7.&nbsp;&nbsp;韩国龟尾市湖南代表处推介：产业之城、幸福之都-韩国龟尾； &nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local702.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local701.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" /></p>
            <p class="info1">8.&nbsp;&nbsp;日中经济贸易中心北京事务所推介：坚持不懈，前途可期；
              &nbsp;<img
                @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/local802.mp4'"
                style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
            <p class="info1">9.&nbsp;&nbsp;潍坊市政府推介：潍坊的文旅发展情况。 &nbsp;<img
              @click="webPage('http://cjkiexpo.org.cn/java/storage/local902.pdf')"
              style="width: 25px;" src="../../assets/images/home/wj_zh.png" />
              &nbsp;<img
                @click="webPage('http://cjkiexpo.org.cn/java/storage/local901.pdf')"
                style="width: 25px;" src="../../assets/images/home/wj_en.png" />
              &nbsp;<img
                @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/local903.mp4'"
                style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>

<!--            <p class="title">16:00-17:00&nbsp;&nbsp;对接洽谈</p>
            <p class="title">地  点：&nbsp;&nbsp;北海厅</p>
            <p class="info1">日本自治体国际化协会北京事务所、日本贸易振兴机构青岛代表处、日中经济协会北京事务所、日中经济贸易中心北京事务所、日本大分县上海事务所、日本福岛县上海代表处、日本山形县哈尔滨事务所，韩国贸易协会北京代表处、大韩贸易投资振兴公社青岛代表处、韩国釜山市上海代表处、韩国釜山市青岛代表处、韩国京畿道上海代表处、韩国庆尚北道上海代表处、韩国庆尚南道青岛代表处、韩国湖西大学中韩创业研究院、韩中产官学协力交流协会</p>
            <p class="info1">全国地方政府、贸促系统代表；潍坊有关市直部门、单位负责人，各县市区、市属各开发区分管负责人等。</p>-->
          </div>

          <!-- <Infoview :list="list2" /> -->
          <div v-for="(item,index) in list2" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc">
              <div  v-for="(item,index) in item.content" :key="index">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-box" v-if="isEn">
        <!-- <div class="info-title"><span>中日韩地方政府合作对接会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <div class="titles">
          <div class="title-texts">Plan of Meeting on Local Government Cooperation among China, Japan and Korea</div>
          <div class="title-time"><span style="color: #7daefe;">14:00 pm on October 26th</span></div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list3" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc">
              <div  v-for="(item,index) in item.content" :key="index">
                {{item}}
              </div>
            </div>
          </div>
          <div class="richeng">
            <p class="title">Guest Addresses</p>
            <p class="info1">Qiu Guohong  Former Chinese Ambassador to the ROK</p>
            <p class="info1">Park Min Young  Chief Representative of Korea International Trade Association (KITA), Beijing</p>
            <p class="info1">Yoshikawa Akinobu  Chief Representative of Japan External Trade Organization (JETRO), Qingdao</p>
            <p class="title">Promotion</p>
            <p class="info1">1.&nbsp;&nbsp;Gyeonggido Business & Science Accelerator, Shanghai: Gyeonggido—No. 1 Economic Center of the ROK</p>
            <p class="info1">2.&nbsp;&nbsp;Fukushima Prefectural Industrial Promotion Center, Shanghai: Status Quo and Relevant Policies to Promote the Development of Renewable Energies of Fukushima</p>
            <p class="info1">3.&nbsp;&nbsp;Shanghai Representative Office of Busan City Government: Environment and Investment Projects of Busan City</p>
            <p class="info1">4.&nbsp;&nbsp;Council of Local Authorities for International Relations (CLAIR), Beijing: Prosperous Development of CLAIR</p>
            <p class="info1">5.&nbsp;&nbsp;Gyeongsangnam Shandong Representative Office: Investment Environment and Preferential Policies of Gyeongsangnam</p>
            <p class="info1">6.&nbsp;&nbsp;Japan-China Economic Association, Beijing Office: Promotion of China-Japan Local Cooperation and Exchanges between Chinese and Japanese Enterprises—Introduction to Japan-China Economic Association</p>
            <p class="info1">7.&nbsp;&nbsp;Korea-China Trade Cooperation Office of Gumi, Hunan Office: City of Industries and Capital of Happiness: Gumi, ROK</p>
            <p class="info1">8.&nbsp;&nbsp;Japan-China Economic Relations and Trade Center, Beijing Office: Insistence and a Bright Prospect</p>
            <p class="info1">9.&nbsp;&nbsp;Weifang Municipal Government: Cultural Tourism Development of Weifang City</p>

            <!--            <p class="title">16:00-17:00&nbsp;&nbsp;对接洽谈</p>
                        <p class="title">地  点：&nbsp;&nbsp;北海厅</p>
                        <p class="info1">日本自治体国际化协会北京事务所、日本贸易振兴机构青岛代表处、日中经济协会北京事务所、日中经济贸易中心北京事务所、日本大分县上海事务所、日本福岛县上海代表处、日本山形县哈尔滨事务所，韩国贸易协会北京代表处、大韩贸易投资振兴公社青岛代表处、韩国釜山市上海代表处、韩国釜山市青岛代表处、韩国京畿道上海代表处、韩国庆尚北道上海代表处、韩国庆尚南道青岛代表处、韩国湖西大学中韩创业研究院、韩中产官学协力交流协会</p>
                        <p class="info1">全国地方政府、贸促系统代表；潍坊有关市直部门、单位负责人，各县市区、市属各开发区分管负责人等。</p>-->
          </div>

          <!-- <Infoview :list="list2" /> -->
          <div v-for="(item,index) in list4" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc">
              <div  v-for="(item,index) in item.content" :key="index">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗视频 -->
    <div v-if="shipinUrl_show" class="home_img_bofang-mark">
      <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="shipinUrl_show = false"
           src="../../assets/images/exhibition/close.png" />
      <video width="800px" height="450px" style="margin-left: 7px;" controls="controls" :src="shipinUrl"></video>
    </div>
  </div>
</template>

<script>
import Infoview from '@/views/conferenceLive/component/infoview'
export default {
  name: "conferenceLive3",
  components: { Infoview },
  data() {
    return {
      isEn:false,
      shipinUrl: '',
      shipinUrl_show: false,
      list: [

        {
          title: '会议内容',
          content: ['中日韩三国地方政府代表推介各自经贸文化和优势产业，重点推介年度重要活动和重大合作项目，推动地方政府间达成重点项目和重要产业之间的合作意向。'],

        },
        {
          title: '会议议程',
          content: [],
        }],
      list2:[
        {
          title: '主办单位',
          content: ['中国国际商会', '日本国际贸易促进协会','韩国贸易协会','中日韩合作秘书处'],
        },
        {
          title: '承办单位',
          content: ['中国国际商会会展部', '山东省贸促会', '潍坊市人民政府'],

        },
        {
          title: '支持单位',
          content: ['中国国际贸易促进委员会','山东省人民政府','日本贸易振兴机构', '日中经济贸易中心', '东海日中贸易中心', '日本经济团体联合会','日中经济协会', '日本商工会议所','中国日本商会','日本自治体国际化协会北京事务所', '大韩贸易投资振兴公社', '韩国展示产业振兴会', '韩国全国经济人联合会', '韩国商工会议所','中国韩国商会','韩国京畿道上海代表处'],

        },{
          title: '执行单位',
          content: ['潍坊市贸促会','潍坊市文旅局','潍坊市外办'],

        }

      ],
      list3: [

        {
          title: 'Overview',
          content: ['Representatives of local governments of China, Japan and the ROK will introduce their respective economic and trade culture as well as competitive industries with the main focus on important annual events and major cooperative projects, boosting the cooperation intention among local governments on key projects and industries.'],

        },
        {
          title: 'Agenda',
          content: [],
        }],
      list4:[
        {
          title: 'Hosts',
          content: ['China Chamber of International Commerce (CCOIC)', 'The Association for the Promotion of International Trade, Japan (JAPIT)','Korea International Trade Association (KITA)','Trilateral Cooperation Secretariat'],
        },
        {
          title: 'Organizers',
          content: ['Exhibition Department of China Chamber of International Commerce (CCOIC)', 'China Council for the Promotion of International Trade Shandong Sub-council', 'Weifang Municipal People’s Government'],

        },
        {
          title: 'Supporters',
          content: ['China Council for the Promotion of International Trade (CCPIT)','People‘s Government of Shandong Province','Japan External Trade Organization (JETRO)', 'Japan-China Economic Relations and Trade Center', 'Tokai Japan-China Trade Center', 'Japan Business Federation','Japan-China Economic Association', 'The Japan Chamber of Commerce and Industry',
            'The Japanese Chamber of Commerce and Industry in China', 'Council of Local Authorities for International Relations (CLAIR), BEIJING', 'Korea Trade-Investment Promotion Agency', 'Association of Korea Exhibition Industry','The Federation of Korea Industries','The Korea Chamber of Commerce & Industry','The Korea Chamber of Commerce in China','Gyeonggido Business & Science Accelerator, Shanghai'],

        },{
          title: 'Executors',
          content: ['China Council for the Promotion of International Trade Weifang Committee','Weifang Culture and Tourism Bureau','Weifang Foreign Affairs Office'],

        }

      ]
    }
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
    webPage(url) {
      window.open(url, '_blank');
    },
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
  top: 850px;
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
  margin-left: 30px;
  line-height: 40px;
}
.mffenc{
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  /* margin-bottom: 30px; */
}
.mffubiao{
  border-left: 4px solid #7daefe;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  height: 20px;
  /* margin-top: 22px; */
  margin: 10px 0px;
  padding-left: 8px;
  font-weight: bold;
  color: #666666;
}

.richeng{
  padding-top: 0;
  color: #636363;
  position: relative;
  line-height: 40px;
}
.title{
  font-size: 16px;
  padding-left: 30px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  /* line-height: 26px; */
  /* margin-bottom: 17px; */
  display: flex;
  align-items: center;
}
.info1{
  padding-left: 50px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  /* line-height: 35px; */
  /* margin-bottom: 17px; */
  display: flex;
  align-items: center;
}
.info2{
  padding-left: 70px;
  font-size: 16px;
  font-weight: 500;
  color: #636363;
  /* line-height: 24px; */
  /* margin-bottom: 17px; */
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
