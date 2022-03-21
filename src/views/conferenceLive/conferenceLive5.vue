<template>
  <div>
    <div class="right_Content">
      <div class="info-box" v-if="!isEn">
        <!-- <div class="info-title"><span>中日韩人才交流发展大会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list"/> -->
        <div class="titles">
          <div class="title-texts">中日韩人才交流发展大会</div>
          <div class="title-time"><span style="color: #7daefe;">10月27日 9:00</span>&nbsp;&nbsp;&nbsp;富华大酒店潍河厅</div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
        <div v-for="(item,index) in list" :key="index">
          <div class="mffubiao"><span>{{item.title}}</span></div>
          <div class="mffenc">
          <div  v-for="(item,index) in item.content">
            {{item}}
          </div>
          </div>
        </div>
        <div class="richeng">
          <p class="title">拟由山东省创新创业教育导师库专家徐培培主持</p>
          <p class="info1">1.&nbsp;&nbsp;播放潍坊市经济社会发展宣传片；&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai001.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">2.&nbsp;&nbsp;市潍坊市人才发展服务中心副主任毕经伟同志致辞；&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai002.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">3.&nbsp;&nbsp;奎文区委常委、组织部部长田学刚同志推介奎文区经济社会发展情况；&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai003.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">4.&nbsp;&nbsp;日韩嘉宾致辞（线上）（汉阳大学校长金于胜、启明大学副校长李必焕、首尔孔子学院院长李浚植，日本专家人才）&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai004.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">5.&nbsp;&nbsp;潍坊市海外人才工作站揭牌仪式（赵伟主任、高绍山副处长揭牌）；&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai005.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">6.&nbsp;&nbsp;中韩重点人才项目签约。①潍坊职业学院与奎文区对韩联络处签约（线下），②湖西大学中韩创业研究院与山东安全产业技术研究院签约（线上），③韩中（威海）产官学协力交流协会与潍坊市人才发展集团签约（线上）；&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai006.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1">7.&nbsp;&nbsp;11家重点用人单位采用PPT路演的方式进行“直播带岗”，主要介绍招聘单位情况、岗位需求、薪资待遇以及员工职业发展前景（5分钟）。用人单位介绍结束后，主持人根据留学人员反馈的问题与用人单位负责人进行交流（3分钟）。&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/rencai007.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
        </div>
        <!-- <Infoview :list="list2"/> -->
        <div v-for="(item,index) in list2" :key="index+'1'">
          <div class="mffubiao"><span>{{item.title}}</span></div>
          <div class="mffenc">
          <div  v-for="(item,index) in item.content">
            {{item}}
          </div>
          </div>
          </div>
        </div>
      </div>
      <div class="info-box" v-if="isEn">
        <!-- <div class="info-title"><span>中日韩人才交流发展大会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list"/> -->
        <div class="titles">
          <div class="title-texts">China-Japan-Korea Online Talent Exchange & Matching Conference </div>
          <div class="title-time"><span style="color: #7daefe;">9:00-11:30 am on October 27th</span>&nbsp;&nbsp;&nbsp;Weihe Hall of the Farrington</div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list3" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc">
              <div  v-for="(item,index) in item.content">
                {{item}}
              </div>
            </div>
          </div>
          <div class="richeng">
            <p class="title">It is planned to be hosted by Xu Peipei, an expert in the mentor library of innovation and entrepreneurship education of Shandong Province. And the main agenda is as follows</p>
            <p class="info1">1.&nbsp;&nbsp;Playing the promotional video on Weifang’s economic and social development;</p>
            <p class="info1">2.&nbsp;&nbsp;Liu Taifu, Deputy Director of the Organization Department of Weifang Municipal Party Committee and Secretary of Weifang Municipal Party Committee’s Non-public Economic Organization and Social Organization Working Committee, delivers a speech;</p>
            <p class="info1">3.&nbsp;&nbsp;Tian Xuegang, Member of the Standing Committee of the Kuiwen District Committee and Director of the Organization Department, introduces the economic and social development of Kuiwen District;</p>
            <p class="info1">4.&nbsp;&nbsp;Japanese and Korean guests make speeches (online) (Kim Woo Seung, President of Hanyang University; Lee Bi Hwan, Vice President of Keimyung University; Lee Joon Sik, Director of the Confucius Institute in Seoul; Japanese experts);</p>
            <p class="info1">5.&nbsp;&nbsp;The unveiling ceremony of the Weifang Overseas Talent Workstation (Director Zhao Wei and Deputy Director Gao Shaoshan unveil the nameplate);</p>
            <p class="info1">6.&nbsp;&nbsp;Signing of key talent projects between China and the ROK. ①Weifang Vocational College signs a contract with the Korea Liaison Office of Kuiwen District (offline), ② China-Korea Entrepreneurship Research Institute of Hoseo University signs a contract with Shandong Institute of Safety Industry Technology (online), ③Korea-China (Weihai) Industry-Government-University Cooperation & Exchange Association signs a contract with Weifang Talent Development Group (online);</p>
            <p class="info1">7.&nbsp;&nbsp;11 key employers conduct "livestreaming job marketing" in PPT roadshow, mainly introducing the employers, job requirements, salaries and career prospects (5 minutes). After the introduction of the employers, the host will communicate with the person in charge of the employers based on the feedback from the overseas students (3 minutes).</p>
          </div>
          <!-- <Infoview :list="list2"/> -->
          <div v-for="(item,index) in list4" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc">
              <div  v-for="(item,index) in item.content">
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
  name: "conferenceLive5",
  components: {Infoview},
  data() {
    return {
      isEn:false,
      shipinUrl: '',
      shipinUrl_show: false,
      list: [
        {
          title: '会议议程',
          content: [],
        }],
      list2: [
        {
          title: '主办单位',
          content: ['中共潍坊市委', '潍坊市人民政府'],
        },
        {
          title: '承办单位',
          content: ['潍坊市委组织部', '潍坊市人力资源和社会保障局'],

        },
        {
          title: '协办单位',
          content: ['中共奎文区委','奎文区人民政府','潍坊市人才发展集团',],

        }, {
          title: '参加人员',
          content: ['线下：市委组织部副部长、市委非公有制经济组织和社会组织工委书记刘太福，市公共就业和人才服务中心主任赵伟，奎文区委常委、组织部部长田学刚，山东大学（威海）国际处副处长高绍山，潍柴、歌尔、潍坊银行等全市11家重点用人单位人力资源部门负责人，约20人。',
          '线上：线上全市重点企业，100家以上；目前在韩国、日本的中国留学生及高层次人才，约500人。']
        }

      ],
      list3: [
        {
          title: 'Agenda',
          content: [],
        }],
      list4: [
        {
          title: 'Hosts and Organizers',
          content: ['Weifang Municipal Committee of the Communist Party of China', 'Weifang Municipal People\'s Government'],
        },
        {
          title: 'Organizers',
          content: ['Organization Department of Weifang Municipal Committee', 'Weifang Municipal Bureau of Human Resources and Social Security'],

        },
        {
          title: 'Co-organizers',
          content: ['Kuiwen District Committee of the Communist Party of China','Kuiwen District People\'s Government','Weifang Talent Development Group',],

        }, {
          title: 'Attendees',
          content: ['Offline: Liu Taifu, Deputy Director of the Organization Department of Weifang Municipal Party Committee and Secretary of Weifang Municipal Party Committee’s Non-public Economic and Social Organization Working Committee; Zhao Wei, Director of Weifang Municipal Public Employment and Talent Service Center; Tian Xuegang, Member of the Standing Committee of the Kuiwen District Party Committee and Director of the Organization Department; Gao Shaoshan, Deputy Director of Shandong University (Weihai) International Office; heads of the human resources departments of 11 key employers in Weifang, including Weichai, Goertek, Weifang Bank. There are about 20 attendees in total.',
            'Online: more than 100 key enterprises in Weifang, and about 500 Chinese students and high-level talents in the ROK and Japan.']
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
      top: 870px;
    }
    .mftit{
      border-left: 4px solid #7daefe;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 20px;
      height: 20px;
      margin-top: 22px;
      padding-left: 8px;
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
      /* margin-left: 30px; */
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
      /* line-height: 20px; */
      height: 20px;
      margin: 10px 0px;
      /* margin-top: 22px; */
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
  }
  .info1{
    padding-left: 50px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #636363;
    /* line-height: 24px; */
    /* margin-bottom: 17px; */

  }

  .info1 img {
    margin-bottom: 7px;
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
