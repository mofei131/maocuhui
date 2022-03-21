<template>
  <div>
    <div class="right_Content">
      <!-- <Infoview :list="list" /> -->
      <!-- <div class="mftit">交通信息</div>
      <div class="mflanf"></div>
      <div class="mfhuangti"></div> -->
      <div style="position: relative;">
        <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
        <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
      <div class="titles"><span class="title-texts">交通信息</span></div>
      <img src="../../assets/images/exhibitionOverview/excenter.png" alt="" srcset="" width="820px" style="margin-top: 40px;"/>
      <div class="mftit">潍坊富华国际展览中心</div>
      <div class="hotel">
        <!-- <div class="title"><span class="title2">潍坊富华国际展览中心</span></div> -->

        <div class="content"><span class="info">电话 : </span><span class="info2">0536--8788079</span></div>
        <div class="content"><span class="info">地址 : </span><span class="info2">潍坊市东风东街189号</span></div>
        <div class="content"><span class="info">公交 : </span><span class="info2">16路、76路、20路、21路、50路、52路</span></div>
        <div class="content"><span class="info">交通信息 : </span></div>
        <div class="content"><span class="info3">距市中心 1.5公里</span></div>
        <div class="content"><span class="info3">距高速公路 4公里</span></div>
        <div class="content"><span class="info3">距潍坊火车站 5.5公里</span></div>
        <div class="content"><span class="info3">距潍坊机场 9公里</span></div>
      </div>
      <div class="mftit">潍坊富华大酒店</div>
      <div class="hotel">
        <!-- <div class="title"><span class="title2">潍坊富华大酒店</span></div> -->

        <div class="content"><span class="info">电话 : </span><span class="info2">0536--8881988</span></div>
        <div class="content"><span class="info">地址 : </span><span class="info2">潍坊高新区富华巷168号</span></div>
        <div class="content"><span class="info">公交 : </span><span class="info2">30路 23路 56路 20路</span></div>
        <div class="content"><span class="info">交通信息 : </span></div>
        <div class="content"><span class="info3">距市中心 1.4公里</span></div>
        <div class="content"><span class="info3">距潍坊汽车客运总站 4.6公里</span></div>
        <div class="content"><span class="info3">距潍坊火车站 5.4公里</span></div>
        <div class="content"><span class="info3">距潍坊机场 9公里</span></div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import Infoview from "@/views/exhibitionOverview/component/infoview";

export default {
  components: { Infoview },
  data() {
    return {
      type: 1,
      list: [
        {
          title: "交通信息",
          content: [],
        },
      ],
    };
  },
  mounted() {},
  methods: {},
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
  .titles {
    height: 77px;
    border-bottom: 2px solid #7daefe;
    width: 820px;
    display: flex;
    align-items: center;
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
  .mflanf{
    width: 75px;
    height: 6px;
    background: rgba(93, 154, 254, 0.8);
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
  .mfhuangti{
    width: 821px;
    border-bottom: 1px solid #D3D3D3;
  }
.content{
  padding-top: 10px;
  text-align: left;
  padding-bottom: 10px;

}
.hotel{
  display: block;
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
  margin: auto;
  width: 100%;
  line-height: 25px;
}
.title{
  text-align: left;
  font-size: 25px;
  padding: 22px 0 20px 0;
  box-sizing: border-box;
  background: url("../../assets/images/exhibitionOverview/backgroud.jpg") no-repeat  center;
  text-align:center;
  font-weight: 500;
  box-sizing: border-box;
}
.title2{
  text-align: left;
  font-size: 25px;
  padding: 22px 0 20px 0;
  box-sizing: border-box;
  text-align:center;
  font-weight: 500;
  box-sizing: border-box;
  color: #ffffff;
}
.info{
  text-align: left;
  font-size: 16px;
  padding: 22px 0;
  box-sizing: border-box;
  color: #2884EC;
}
.info2{
  text-align: left;
  font-size: 16px;
  box-sizing: border-box;
  padding-left: 20px;
  color: #636363;
}
.info3{
  text-align: left;
  font-size: 16px;
  box-sizing: border-box;
  padding-left: 75px;
  color: #636363;
}
.right_Content {
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  /* height: 821px; */
  padding-left: 55px;
}
.contentImg {
  width: 100%;
  height: 100%;
  margin-top: 40px;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  line-height: 50px;
  margin-top: 68px;
}
</style>
