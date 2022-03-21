<template>
  <div>
    <div class="right_Content">
      <div class="info-box" v-if="!isEn">
        <!-- <div class="info-title"><span>重点合作项目签约仪式</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list"/> -->
        <div class="titles">
          <div class="title-texts">重点合作项目签约仪式</div>
          <div class="title-time">
            <span style="color: #7daefe;">10月27日 15:00</span>

          </div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item, index) in list" :key="index">
            <div class="mffubiao">
              <span>{{ item.title }}</span>
            </div>
            <div class="mffenc">
              <div v-for="(item, index) in item.content">{{ item }}</div>
            </div>
          </div>
          <div class="richeng">
            <p class="title">1.&nbsp;&nbsp;领导致辞</p>
            <p class="title">2.&nbsp;&nbsp;播放潍坊市宣传片</p>
            <p class="title">3.&nbsp;&nbsp;主会场重点合作项目签约</p>
            <p class="title">4.&nbsp;&nbsp;有关县市区分会场视频连线依次签约</p>
          </div>
          <!-- <Infoview :list="list2"/> -->
          <div v-for="(item, index) in list2" :key="index + '1'">
            <div class="mffubiao">
              <span>{{ item.title }}</span>
            </div>
            <div class="mffenc">
              <div v-for="(item, index) in item.content">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-box" v-if="isEn">
        <!-- <div class="info-title"><span>重点合作项目签约仪式</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
        <!-- <Infoview :list="list"/> -->
        <div class="titles">
          <div class="title-texts">Signing Ceremony for Key Cooperative Projects</div>
          <div class="title-time">
            <span style="color: #7daefe;">15:00 pm on October 27th</span>

          </div>
        </div>
        <!-- <Infoview :list="list" /> -->
        <div style="position: relative;width: 820px;">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <div v-for="(item, index) in list3" :key="index">
            <div class="mffubiao">
              <span>{{ item.title }}</span>
            </div>
            <div class="mffenc">
              <div v-for="(item, index) in item.content">{{ item }}</div>
            </div>
          </div>
          <div class="richeng">
            <p class="title">1.&nbsp;&nbsp;Speeches by Leaders</p>
            <p class="title">2.&nbsp;&nbsp;Time for Promotional Video of Weifang City</p>
            <p class="title">3.&nbsp;&nbsp;Agreement Signing for Key Cooperative Projects at Main Venue</p>
            <p class="title">4.&nbsp;&nbsp;Successive Agreement Signing(via Video Access) for Relevant Counties & Cities at Branch Venues</p>
          </div>
          <!-- <Infoview :list="list2"/> -->
          <div v-for="(item, index) in list4" :key="index + '1'">
            <div class="mffubiao">
              <span>{{ item.title }}</span>
            </div>
            <div class="mffenc">
              <div v-for="(item, index) in item.content">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Infoview from '@/views/conferenceLive/component/infoview';

export default {
  name: 'conferenceLive7',
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
          title: '参会人员',
          content: ['市级有关领导；重点客商；市直有关部门单位，有关县市区政府、市属开发区管委会负责人；投资促进局（中心）局长（主任）；项目签约代表；媒体记者']
        }
      ],
      list3: [

        {
          title: 'Meeting Agenda',
          content: []
        }
      ],
      list4: [
        {
          title: 'Attendees ',
          content: ['Related leaders from city-level government entities; key guests & business personnel; leaders from departments and units directly under Weifang City Governance, from relevant county-level government entities and administrative committees of city development zones; head (director) of Weifang Bureau of Investment and Cooperation Promotion; representatives for project agreement signing; journalists.']
        }
      ]
    };
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
  top: 200px;
}
.mftit {
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
.title-time {
  position: absolute;
  right: 0;
  bottom: 7px;
  font-size: 16px;
  text-align: right;
  line-height: 24px;
}
.mffenc div {
  padding: 0px 5px 0px 5px;
  margin-right: 10px;
  cursor: pointer;
  color: #636363;
  /* line-height: 2; */
  /* margin-left: 30px; */
  line-height: 40px;
}
.mffenc {
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  /* margin-bottom: 30px; */
}
.mffubiao {
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
.mflanf {
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
}
.mfhuangti {
  width: 821px;
  border-bottom: 1px solid #d3d3d3;
}
.richeng {
  /* padding-top: 10px; */
  color: #636363;
  position: relative;
  line-height: 40px;
}
.title {
  font-size: 16px;
  padding-left: 30px;

  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  /* line-height: 26px; */
  /* margin-bottom: 17px; */
}
.info1 {
  padding-left: 50px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  /* line-height: 24px; */
  /* margin-bottom: 17px; */
}
.info2 {
  padding-left: 70px;
  font-size: 16px;
  font-weight: 500;
  color: #636363;
  /* line-height: 24px; */
  /* margin-bottom: 17px; */
}
.info-box {
  margin-top: 90px;
  margin-left: 310px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  padding-left: 55px;
}

.info-container {
  margin-bottom: 20px;
}

.info-title {
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
</style>
