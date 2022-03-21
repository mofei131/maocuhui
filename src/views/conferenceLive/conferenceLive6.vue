<template>
  <div>
    <div class="right_Content">
      <div class="info-box">
        <!-- <div class="info-title"><span>首届中国（潍坊）跨境电商生态大会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list"/> -->
        <div class="titles">
          <div class="title-texts"  v-if="!isEn">首届中国·潍坊跨境电商生态大会</div>
          <div class="title-texts"  v-if="isEn">The 1st China (Weifang) Cross-border E-commerce Ecosystem Conference</div>
          <div class="title-time"></div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
<!--        <div v-for="(item,index) in list" :key="index">
          <div class="mffubiao"><span>{{item.title}}</span></div>
          <div class="mffenc" v-if="item.content">
          <div  v-for="(item,index) in item.content">
            {{item}}
          </div>
          </div>
        </div>-->
        <div class="richeng">
          <p class="title"  v-if="!isEn">经主办单位研究决定，原计划于2021年10月28日在潍坊东方大酒店举办的首届中国·潍坊跨境电商生态大会将延期举办，具体举办时间另行告知。</p>
          <p class="title"  v-if="isEn">As decided by hosts, the First Cross-border E-commerce Ecological Conference, originally decided on October 28, 2021 at Weifang Oriental Hotel, will be extended. The specific time and details will be informed later.</p>
<!--          <p class="info1">会议由市政府分管领导主持。</p>
          <p class="info1">1.&nbsp;&nbsp;播放开场片（2分钟以内）</p>
          <p class="info1">2.&nbsp;&nbsp;国家部委领导致辞</p>
          <p class="info1">3.&nbsp;&nbsp;省商务厅领导致辞</p>
          <p class="info1">4.&nbsp;&nbsp;跨境电商国际组织代表致辞</p>
          <p class="info1">5.&nbsp;&nbsp;潍坊市政府领导致辞</p>
          <p class="info1">6.&nbsp;&nbsp;潍坊综合保税区主要负责同志推介</p>
          <p class="info1">7.&nbsp;&nbsp;共同启动大会开幕</p>
          <p class="title">（二）签约仪式&nbsp;&nbsp;14:30-14:50</p>
          <p class="info1">潍坊市跨境电商重点项目签约</p>
          <p class="title">（三）主旨演讲&nbsp;&nbsp;14:50-17:00</p>
          <p class="info1">拟邀请山东电视台主持人主持。</p>
          <p class="info1">1.&nbsp;&nbsp;演讲题目待定（20分钟）主讲嘉宾：海关总署原党组成员、国家口岸管理办公室原主任&nbsp;&nbsp;黄胜强 </p>
          <p class="info1">2.&nbsp;&nbsp;演讲题目待定（20分钟）主讲嘉宾：对外经济贸易大学教授&nbsp;&nbsp;王健</p>
          <p class="info1">3.&nbsp;&nbsp;演讲题目待定（20分钟）主讲嘉宾：浙江大学教授</p>
          <p class="info1">4.&nbsp;&nbsp;演讲题目待定（20分钟）主讲嘉宾：广州卓志集团党委书记、副总裁&nbsp;&nbsp; 于崇刚</p>
          <p class="info1">5.&nbsp;&nbsp;演讲题目待定（20分钟）</p>-->
<!--          <p class="title">（四）“跨境电商出口商品品牌评价”对话 </p>
          <p class="info1">1.&nbsp;&nbsp;中国贸促会商事认证中心商事证明处处长&nbsp;&nbsp;张瀚蓉</p>
          <p class="info1">2.&nbsp;&nbsp;中国贸促会商业行业委员会秘书长&nbsp;&nbsp;姚歆</p>
          <p class="info1">3.&nbsp;&nbsp;跨境电商企业代表3人</p>-->

        </div>
<!--          <div v-for="(item,index) in list0" :key="index+'1'">
            <div class="mffubiao"><span>{{item.title}}</span></div>
            <div class="mffenc" v-if="item.content">
              <div  v-for="(item,index) in item.content">
                {{item}}
              </div>
            </div>
          </div>-->
<!--          <div class="richeng">
            <p class="title">（一）国家部委有关单位领导</p>
            <p class="info1">房爱卿&nbsp;&nbsp;商务部原副部长、政协第十三届全国委员会经济委员会副主任</p>
            <p class="info1">黄胜强&nbsp;&nbsp;海关总署原党组成员、国家口岸管理办公室原主任</p>
            <p class="info1">吴政平&nbsp;&nbsp;商务部外贸发展事务局局长</p>

            <p class="title">（二）省直部门领导</p>
            <p class="info1">吕&nbsp;&nbsp;&nbsp;&nbsp;伟&nbsp;&nbsp;省商务厅党组成员、副厅长</p>
            <p class="info1"> 省农业农村厅</p>
            <p class="info1">省贸促会</p>
            <p class="info1">济南海关</p>
            <p class="title">（三）市领导、市直相关单位领导</p>
            <p class="info1">1.&nbsp;&nbsp;市领导；</p>
            <p class="info1">2.&nbsp;&nbsp;市商务局、市贸促会、市税务局、潍坊海关、国家外汇管理局潍坊市中心支局主要负责同志。 </p>
            <p class="title">（四）跨境电商业务专家</p>

            <p class="info1">王 &nbsp;&nbsp;  &nbsp;&nbsp;   健&nbsp;&nbsp;对外经济贸易大学国际经济贸易学院教授、博士生导师，国际商务与经济合作学系主任、国际商务研究中心主任</p>
            <p class="info1">待 &nbsp;&nbsp;  &nbsp;&nbsp;   定&nbsp;&nbsp;  浙江大学</p>
            <p class="title">（五）知名跨境电商企业代表</p>
            <p class="info1">于崇刚&nbsp;&nbsp;    广州卓志集团党委书记、副总裁</p>
          </div>-->
        <!-- <Infoview :list="list2"/> -->
<!--        <div v-for="(item,index) in list2" :key="index+'1'">
          <div class="mffubiao"><span>{{item.title}}</span></div>
          <div class="mffenc" v-if="item.content">
          <div  v-for="(item,index) in item.content">
            {{item}}
          </div>
          </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Infoview from '@/views/conferenceLive/component/infoview'

export default {
  name: "conferenceLive6",
  components: {Infoview},
  data() {
    return {
      isEn:false,
      list: [
        // {
        //   title: '时间地点',
        //   content: ['','']
        // }
        /*,{
          title: '地点',
          content: ['东方大酒店金色大厅']
        }*/{
          title: '活动主题',
          content: ['新蓝海 新动能 新格局']
        },{
          title: '会议议程',
          content: [],
        }],
      list0: [
       {
          title: '拟邀请嘉宾',
          content: [],
        }],
      list2:[
        {
          title: '主办单位',
          content: ['商务部外贸发展事务局','中国贸促会商事认证中心','山东省商务厅','潍坊市人民政府'],
        },
        {
          title: '承办单位',
          content: ['潍坊市商务局', '潍坊市贸促会','潍坊综合保税区管委会']
        },

        {
          title: '参会人员',
          content: ['商务部、中国贸促会领导，省商务厅、济南海关领导，潍坊市领导，市直有关部门领导，各县市区政府、市属各开发区管委会领导，商务部门主要负责同志，跨境电商行业专家、跨境电商企业代表及新闻媒体等约80人。']
        },

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
