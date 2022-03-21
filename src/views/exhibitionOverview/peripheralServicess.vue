<template>
  <div>
    <div class="right_Content">
      <!-- <Infoview :list="list" /> -->
      <!-- <div class="mftit">周边服务</div>
      <div class="mflanf"></div>
      <div class="mfhuangti"></div> -->
      <div class="titles"><span class="title-texts">周边服务</span></div>
      <!-- <div class="hotel"> -->
        <!-- <div class="title"><span class="title2">富华大酒店设施平面图</span></div> -->
        <div class="mftit">富华大酒店设施平面图</div>
      <!-- </div> -->
      <img src="../../assets/images/exhibitionOverview/peripheralServicess1.jpg" alt="" srcset="" width="900px"/>
      <!-- <div class="hotel"> -->
        <!-- <div class="title"><span class="title2">富华国际展览中心平面图</span></div> -->
        <div class="mftit">富华国际展览中心平面图</div>
      <!-- </div> -->
      <img src="../../assets/images/exhibitionOverview/peripheralServicess2.jpg" alt="" srcset="" width="900px"/>
    </div>
  </div>
</template>
<script>
// import Infoview from "@/views/exhibitionOverview/component/infoview";

export default {
  // components: { Infoview },
  data() {
    return {
      type: 1,
      list: [
        {
          title: "周边服务",
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
</style>
