<template>
  <div>
    <div class="right_Content">
      <div class="info-box" v-if="!isEn">

        <div class="titles">
          <div class="title-texts">潍柴国际配套产业园招商对接会</div>
          <div class="title-time"><span style="color: #7daefe;">10月26日 14:30</span></div>
        </div>
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index) in item.content">
                {{item}}
              </div>
            </div>
          </div>

          <div class="richeng">
            <p class="title">第一阶段</p>
            <p class="info1">1.&nbsp;&nbsp;潍坊高新区党工委书记、管委会主任宋赤锋致辞；</p>
            <p class="info1">2.&nbsp;&nbsp;潍坊市工信局解读《潍柴集团配套产业园入园政策》；</p>
            <p class="info1">3.&nbsp;&nbsp;潍柴集团负责人介绍潍柴集团及未来发展展望；</p>
            <p class="info1">4.&nbsp;&nbsp;高创集团介绍潍柴国际配套产业园建设运营及招商工作情况。</p>
            <p class="title">第二阶段&nbsp;&nbsp;签约仪式</p>
            <p class="info1">举行潍柴集团、山东高创集团与潍柴集团供应商三方签约仪式。</p>
            <p class="title">第三阶段&nbsp;&nbsp;现场考察</p>
            <p class="info1">1.&nbsp;&nbsp;参会嘉宾乘车赴潍柴厂区、潍柴国际配套产业园，分别考察潍柴科技展馆、潍柴国际配套产业园、</p>
            <p class="info1">铭弘科技公司生产现场。</p>
          </div>

          <div v-for="(item,index) in list2" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index) in item.content">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-box" v-if="isEn">

        <div class="titles">
          <div class="title-texts">Investment and Matchmaking Meeting of Weichai International Supporting Industrial Park</div>
          <div class="title-time"><span style="color: #7daefe;">14:30 pm on October 26th</span></div>
        </div>
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item,index) in list3" :key="index">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index) in item.content">
                {{item}}
              </div>
            </div>
          </div>

          <div class="richeng">
            <p class="title">Phase One</p>
            <p class="info1">1.&nbsp;&nbsp;Song Chifeng  Secretary of the Party Working Committee and Director of Weifang High and New Technological Development Zone</p>
            <p class="info1">2.&nbsp;&nbsp;Explanation of Entry Policies of Weichai International Supporting Industrial Park by Weifang Bureau of Industry and Information Technology</p>
            <p class="info1">3.&nbsp;&nbsp;Introduction of Weichai Holding Group Co., Ltd. and its development Prospect by Head of the Group.</p>
            <p class="info1">4.&nbsp;&nbsp;Introduction of the Construction and Operation of Weichai International Supporting Industrial Park and Investment Attraction by Shandong Hi-tech Innovation Construction Investment Group Co., Ltd.</p>
            <p class="title">Phase Two&nbsp;&nbsp;Signing Ceremony</p>
            <p class="info1">Signing Ceremony by Weichai Holding Group Co., Ltd., Shandong Hi-tech Innovation Construction Investment Group Co., Ltd. and Suppliers of Weichai Group</p>
            <p class="title">Phase Three&nbsp;&nbsp;Field Visit</p>
            <p class="info1">1.&nbsp;&nbsp;Guests will go to Weichai’s factory plants and Weichai International Supporting Industrial Park for the field visit to Weichai Science and Technology Exhibition Hall, the Industrial Park and Minghong Technology Company respectively.</p>

          </div>

          <div v-for="(item,index) in list4" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index) in item.content">
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
  name: "conferenceLive4",
  components: { Infoview },
  data() {
    return {
      isEn:false,
      list: [
        {
          title: '会议议程',
          content: []
        }
      ],
      list2: [
        {
          title: '主办单位',
          content: ['潍坊市人民政府'],
        },{
          title: '承办单位',
          content: ['潍坊高新区管委会','潍坊市贸促会','潍坊市工信局'],
        }
      ],list3: [
        {
          title: 'Agenda',
          content: []
        }
      ],
      list4: [
        {
          title: 'Host',
          content: ['Weifang Municipal People’s Government'],
        },{
          title: 'Organizers',
          content: ['Management Committee Weifang High-tech Development Zone','China Council for the Promotion of International Trade Weifang Committee','Weifang Bureau of Industry and Information Technology'],
        }
      ],

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
  top: 450px;
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
  /* line-height: 20px; */
  height: 20px;
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
  padding-left: 50px;
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
</style>
