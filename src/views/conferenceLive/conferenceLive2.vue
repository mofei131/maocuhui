<template>
  <div>
    <div class="right_Content">
      <div class="info-box" v-if="!isEn">
        <!-- <div class="info-title"><span>2021年中日韩氢能产业高峰论坛</span></div> -->
        <div class="titles">
          <div class="title-texts">2021年中日韩氢能产业高峰论坛</div>
          <div class="title-time"><span style="color: #7daefe;">10月26日 14:00</span></div>
          <div class="title-time2">新闻</div>
        </div>
        <!-- <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index2) in item.content" :key="index2+'1'">
                {{item}}
              </div>
            </div>
          </div>
          <div class="richeng">
            <!-- <div class="mffubiao"><span>会议议程</span></div> -->
<!--            <p class="title">  10月26日</p>-->
            <p class="info1">主旨演讲：燃料电池汽车现状愿景与氢源&nbsp;&nbsp;中国工程院院士&nbsp;&nbsp;衣宝廉</p>
            <p class="info1">主题演讲：“氢进万家”科技示范工程情况介绍&nbsp;&nbsp;山东省科学技术厅高新技术发展及产业化处副处长&nbsp;&nbsp;韩绍华</p>
            <p class="info1">主题演讲：山东重工集团氢燃料电池产业情况&nbsp;&nbsp;山东重工集团有限公司国际化总监&nbsp;&nbsp;徐子春</p>
            <p class="info1">主题演讲：从事氢能相关的日企动向&nbsp;&nbsp;三菱日联银行（中国）有限公司调查役/高级经理&nbsp;&nbsp;稻山幸典</p>
            <p class="info1">主题演讲：丰田在中国燃料电池技术普及上所作的努力和贡献&nbsp;&nbsp;丰田汽车研发中心（中国）有限公司执行副总经理&nbsp;&nbsp;权藤宪治</p>
            <p class="info1">主题演讲：现代汽车集团氢能事业发展现状以及氢能产业合作事项&nbsp;&nbsp;现代汽车氢燃料电池系统（广州）有限公司营销中心总监&nbsp;&nbsp;张原硕</p>
            <p class="info1">主题演讲：液氢工厂发展前景与液氢产业链解决方案&nbsp;&nbsp;江苏国富氢能技术装备股份有限公司战略总监&nbsp;&nbsp;魏蔚</p>
            <p class="info1">主题演讲：液氢的储运及应用&nbsp;&nbsp;北京航天试验技术研究所博士&nbsp;&nbsp;张振扬</p>
            <p class="info1">中国国际商会山东商会氢产业专业委员会成立仪式</p>

            <!--          <p class="info1">17:00-17:20 重点合作项目签约仪式</p>-->
            <!--          <p class="title">  10月27日</p>
                      <p class="info1">09:00-11:30	邀请参会嘉宾和参展企业参观考察潍柴产业园区</p>-->
<!--            <p class="title">  10月26-28日</p>
            <p class="info1">09:00-16:00&nbsp;&nbsp;中日韩氢能产业展览会</p>-->
          </div>
          <!-- <Infoview :list="list2" /> -->
          <div v-for="(item,index) in list2" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index2) in item.content" :key="index2+'2'">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-box" v-if="isEn">
        <!-- <div class="info-title"><span>2021年中日韩氢能产业高峰论坛</span></div> -->
        <div class="titles">
          <div class="title-texts">2021 China-Japan-Korea Hydrogen Energy Industry Summit</div>
          <div class="title-time"><span style="color: #7daefe;">14:00 pm on October 26th</span></div>
        </div>
        <!-- <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list3" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index2) in item.content" :key="index2+'1'">
                {{item}}
              </div>
            </div>
          </div>
          <div class="richeng">
            <!-- <div class="mffubiao"><span>会议议程</span></div> -->
            <!--            <p class="title">  10月26日</p>-->
            <p class="info1">Keynote Speech: The Status Quo, Vision and Hydrogen Sources of Fuel Cell Vehicles&nbsp;&nbsp; Yi Baolian, Academician of the Chinese Academy of Engineering (CAE)</p>
            <p class="info1">Themed Speech: An Introduction of “Hydrogen in Every Household” Science and Technology Demonstration Project&nbsp;&nbsp; Han Shaohua, Deputy Director of High Technology Development and Industrialization Division of Shandong Provincial Science & Technology Department</p>
            <p class="info1">Themed Speech: Hydrogen Fuel Cells of Shandong Heavy Industry Group&nbsp;&nbsp;Xu Zichun, Director of Internationalization of Shandong Heavy Industry Group</p>
            <p class="info1">Themed Speech: Development Trends of Japanese Enterprises Engaged in Hydrogen Energy&nbsp;&nbsp;Inayama Yukunori, Investigation Officer/Senior Manager of MUFG Bank (China), Ltd.</p>
            <p class="info1">Themed Speech: The Endeavors and Contributions of Toyota in the Popularization of Fuel Cell Technology in China&nbsp;&nbsp;Gondo Kenji, Executive Deputy General Manager of Toyota Motor R&D Center (China) Co., Ltd.</p>
            <p class="info1">Themed Speech: Hydrogen Energy Business Development Status Quo of Hyundai Motor Group and Hydrogen Energy Industry Cooperation&nbsp;&nbsp;Jang Won Seok, Director of Marketing Center of Hyundai Hydrogen Fuel Cell System (Guangzhou) Co., Ltd.</p>
            <p class="info1">Themed Speech: Development Prospects of Liquid Hydrogen Plants and Solutions for Liquid Hydrogen Industry Chain&nbsp;&nbsp;Wei Wei, Director of Strategy of Jiangsu Guofu Hydrogen Energy Equipment Co., Ltd. </p>
            <p class="info1">Themed Speech: Liquid Hydrogen Storage, Transporting and Applications&nbsp;&nbsp;Dr. Zhang Zhenyang, Beijing Institute of Aerospace Testing Technology</p>
            <p class="info1">Founding Ceremony of Professional Committee of Hydrogen Industry of Shandong International Chamber of Commerce and Enterprise Alliance of Hydrogen Energy Industrial Chain</p>
            <!--          <p class="info1">17:00-17:20 重点合作项目签约仪式</p>-->
            <!--          <p class="title">  10月27日</p>
                      <p class="info1">09:00-11:30	邀请参会嘉宾和参展企业参观考察潍柴产业园区</p>-->
            <!--            <p class="title">  10月26-28日</p>
                        <p class="info1">09:00-16:00&nbsp;&nbsp;中日韩氢能产业展览会</p>-->
          </div>
          <!-- <Infoview :list="list2" /> -->
          <div v-for="(item,index) in list4" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index2) in item.content" :key="index2+'2'">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Infoview from '@/views/conferenceLive/component/infoview'
export default {
  name: "conferenceLive2",
  components: { Infoview },
  data() {
    return {
      isEn:false,
      list: [
        // {
        //   title: '时间地点',
        //   content: ['2021年10月26日 14:00-17:30','潍坊富华大酒店']
        // },
        /* {
           title: '主 会 场',
           content: ['潍坊富华大酒店']
         },*/
        {
          title: '论坛主题',
          content: ['绿色氢能·共谋发展']
        },
        {
          title: '论坛议程',
          content: []
        }],
      list2: [
        {
          title: '主办单位',
          content: ['山东重工集团有限公司、潍坊市人民政府、山东省贸促会']
        },
        {
          title: '承办单位',
          content: ['潍柴控股集团有限公司、潍坊市贸促会、潍坊市工信局、潍坊市科技局、氢启未来网']
        },

        /*  {
            title: '峰会方式',
            content: ['线下为主，线上线下结合，论坛规模约100人']
          },*/
        {
          title: '参会主体',
          content: ['1. 中日韩三国院士、氢能源专家、学者、学科代表等。','2. 中日韩三国氢能委员会、能源组织、协会、机构代表等。','3. 中日韩三国氢能源资源企业、氢能产业链上下游企业代表等。']
        },
        {
          title: '参与方式',
          content: ['ZOOM平台 会议号：879 6476 7220']
        }

      ],
      list3: [
        // {
        //   title: '时间地点',
        //   content: ['2021年10月26日 14:00-17:30','潍坊富华大酒店']
        // },
        /* {
           title: '主 会 场',
           content: ['潍坊富华大酒店']
         },*/
        {
          title: 'Theme',
          content: ['Green Hydrogen Energy for Common Development']
        },
        {
          title: 'Agenda',
          content: []
        }],
      list4: [
        {
          title: 'Hosts',
          content: ['Shandong Heavy Industry Group; Weifang Municipal People’s Government; China Council for the Promotion of International Trade Shandong Sub-council']
        },
        {
          title: 'Organizers',
          content: ['Weifang Holding Group Co., Ltd.; China Council for the Promotion of International Trade Weifang Committee; Weifang Industry and Information Technology Bureau; Weifang Science and Technology Bureau;Hydrogen and The Future ']
        },

        /*  {
            title: '峰会方式',
            content: ['线下为主，线上线下结合，论坛规模约100人']
          },*/
        {
          title: 'Participants ',
          content: ['1.Academicians, experts, scholars, and academic leaders in the field of hydrogen energy from China, Japan and the ROK','2. Representatives of relevant hydrogen energy committees, energy organizations, associations and institutions from the three countries.','3. Enterprises of hydrogen energy resources and upstream and downstream enterprises along the supply chain of hydrogen energy from the three countries. ']
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
  top: 800px;
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
.title-time2{
    position: absolute;
    right: 0;
    bottom: -40px;
    font-size: 16px;
    text-align: right;
    line-height: 24px;
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    padding: 0px 25px;
    border-radius: 25px;
}
.mffenc div{
  padding: 0px 5px 0px 5px;
  margin-right: 10px;
  cursor: pointer;
  color: #636363;
  line-height: 40px;
  /* line-height: 2; */
  /* margin-left: 30px; */
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
  /* height: 20px; */
  /* margin-top: 22px; */
  margin: 10px 0px;
  padding-left: 8px;
  font-weight: bold;
  color: #666666;
}
.mflanf{
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
}
.mfhuangti{
  width: 821px;
  border-bottom: 1px solid #D3D3D3;
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
  padding-left: 30px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  /* line-height: 24px; */
  /* margin-bottom: 17px; */
}
.info2{
  padding-left: 70px;
  font-size: 16px;
  font-weight: 500;
  color: #636363;
  line-height: 24px;
  margin-bottom: 17px;
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
</style>
