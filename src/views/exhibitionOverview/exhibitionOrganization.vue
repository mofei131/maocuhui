<template>
  <div>
    <div class="right_Content">
      <div class="title"><span class="title-text">组织机构</span></div>
      <div class="info-box">
        <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
        <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
        <!-- <Infoview :list="list" /> -->

        <!-- <div class="info-container">
          <div class="info-title">
            <div class="info-line"></div>
            <div>主办单位</div>
          </div>
          <div class="info-text">
            <span>潍坊市人民政府</span>
            <span>山东省大数据局</span>
            <span>山东省工业和信息化厅</span>
          </div>
        </div>
        <div class="info-container">
          <div class="info-title">
            <div class="info-line"></div>
            <div>承办单位</div>
          </div>
          <div class="info-text">
            <span>潍坊市大数据局</span>
            <span>潍坊市工业和信息化局</span>
            <span>潍坊市投资合作促进局</span>
          </div>
        </div>
        <div class="info-container">
          <div class="info-title">
            <div class="info-line"></div>
            <div>协办单位</div>
            <div class="info-line"></div>
          </div>
          <div class="info-text">
            <span>工业和信息化部网络安全产业发展中心</span>
            <span>上海聚量企业管理集团</span>
            <span>中国通信工业协会物联网应用分会</span>
            <span>潍坊市大数据中心</span>
            <span>山东省物联网协会</span>
          </div>
        </div> -->
        <div class="mfshouy">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <div class="mftit">{{ item.title }}</div>
              <!-- <div class="mflanf"></div>
              <div class="mfhuangti"></div> -->
              <div class="mfcanba">
                <div class="mfcanzhan" v-for="(item2, index2) in item.content" :key="index2">{{ item2 }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Infoview from '@/views/exhibitionOverview/component/infoview';
export default {
  name: 'exhibitionInfo',
  components: { Infoview },
  data() {
    return {
      list: [
        /*{
          title: '主办单位',
          content: ['中国国际贸易促进委员会', '山东省人民政府','日本国际贸易促进协会','韩国贸易协会','中日韩合作秘书处']
        },*/
        {
          title: '主办单位',
          content: ['中国国际商会', '日本国际贸易促进协会', '韩国贸易协会', '中日韩合作秘书处']
        },

        {
          title: '承办单位',
          content: ['中国国际商会会展部', '山东省贸促会', '潍坊市人民政府']
        },
        {
          title: '支持单位',
          content: [
            '中国国际贸易促进委员会',
            '山东省人民政府',
            '日本贸易振兴机构',
            '日中经济贸易中心',
            '东海日中贸易中心',
            '日本经济团体联合会',
            '日中经济协会',
            '日本商工会议所',
            '中国日本商会',
            '日本自治体国际化协会北京事务所',
            '大韩贸易投资振兴公社',
            '韩国展示产业振兴会',
            '韩国全国经济人联合会',
            '韩国商工会议所',
            '中国韩国商会',
            '韩国京畿道经济科学振兴院上海代表处'
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.mflanf {
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
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
.mfcanzhan:hover {
  color: #fff;
  background-color: #333;
}
.mfcanzhan {
  padding: 10px 5px 1px 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #636363;
}
.mfcanba {
  display: flex;
  flex-wrap: wrap;
  /* padding-top: 20px; */
  /* margin: 20px 0 20px 0; */
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #636363;
  line-height: 32px;
  margin: 0 8px;
}
.mftit {
  /* font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 700;
  color: #636363;
  line-height: 32px; */
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
.mfhuangti {
  width: 821px;
  border-bottom: 1px solid #d3d3d3;
}
/* .info-box{
  padding: 50px;
  margin-left: 242px;
} */
.info-box{
  position: relative;
  width: 820px;
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

.info-container {
  margin-bottom: 20px;
}

.info-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #f5f5f5;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  text-align: center;
  font-weight: 500;
  color: #444444;
}

.info-line {
  width: 20px;
  height: 1px;
  margin: 0 10px;
  background: #444444;
}

.info-text {
  display: flex;
  padding: 10px 0 20px 0;
  flex-wrap: wrap;
  font-size: 28px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #222222;
}

.info-text > span {
  padding: 10px 0 10px 0;
  margin: 0 25px;
}

.title {
  height: 77px;
  border-bottom: 2px solid #7daefe;
  width: 820px;
  display: flex;
  align-items: center;
}
.title-text {
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
</style>
