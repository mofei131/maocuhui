<template>
  <div>
    <div class="right_Content">
      <div class="titles">
        <span class="title-texts">拟邀嘉宾</span>
      </div>
      <div class="font_content">
        <!--2021中日韩产业合作发展论坛 -->
        <div class="mftit" v-if="dataList1.length > 0" >2021中日韩产业合作发展论坛</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList1" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>

        <!--2021年中日韩氢能产业高峰论坛 -->
        <div class="mftit"  v-if="dataList2.length > 0" >2021年中日韩氢能产业高峰论坛</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList2" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>

        <!--中日韩地方政府合作对接会 -->
        <div class="mftit"  v-if="dataList3.length > 0" >中日韩地方政府合作对接会</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList3" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>

        <!--潍柴国际配套产业园招商对接会 -->
        <div class="mftit"  v-if="dataList4.length > 0" >潍柴国际配套产业园招商对接会</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList4" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>

        <!--中日韩人才交流发展大会 -->
        <div class="mftit" v-if="dataList5.length > 0">中日韩人才交流发展大会</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList5" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>

        <!--中日现代农业对接交流会 -->
        <div class="mftit" v-if="dataList6.length > 0">中日现代农业对接交流会</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList6" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>

        <!--首届中国（潍坊）跨境电商生态大会 -->
        <div class="mftit" v-if="dataList7.length > 0">首届中国（潍坊）跨境电商生态大会</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList7" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>


        <!--重点合作项目签约仪式 -->
        <div class="mftit" v-if="dataList8.length > 0">重点合作项目签约仪式</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList8" :key="index">
            <div class="dociv">
              <router-link :to="'/inviteGuestDetail?id=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.headUrl" />
              </router-link>
            </div>
          </li>
        </ul>


      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"inviteGuests",
  data() {
    return {
      pageSize: 100,
      dataList1: [],
      dataList2: [],
      dataList3: [],
      dataList4: [],
      dataList5: [],
      dataList6: [],
      dataList7: [],
      dataList8: [],
      pageIndex: 1
    };
  },

  mounted() {
    this.getDataList(1,'A001');
    this.getDataList(2,'B001');
    this.getDataList(3,'C001');
    this.getDataList(4,'D001');
    this.getDataList(5,'E001');
    this.getDataList(6,'F001');
    this.getDataList(7,'G001');
    this.getDataList(8,'H001');

  },
  methods: {
    getDataList(dataIndex,meetingType) {
      this.$http({
        url: this.$http.adornUrl(`/guest/list`),
        method: 'get',
        params: this.$http.adornParams({
          page: this.pageIndex,
          pageSize: this.pageSize,
          meetingType:meetingType
        })
      }).then(({ data }) => {
        if (data && data.code === 1) {

          switch (dataIndex) {
            case 1:
              this.dataList1 = data.data.list || [];
              break;
            case 2:
              this.dataList2 = data.data.list || [];
              break;
            case 3:
              this.dataList3 = data.data.list || [];
              break;
            case 4:
              this.dataList4 = data.data.list || [];
              break;
            case 5:
              this.dataList5 = data.data.list || [];
              break;
            case 6:
              this.dataList6 = data.data.list || [];
              break;
            case 7:
              this.dataList7 = data.data.list || [];
              break;
            case 8:
              this.dataList8 = data.data.list || [];
              break;




            default:
              break;
          }


        }
      });
    },


  }
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
.mflanf {
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
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
  font-weight: bold;
  color: #666666;
}
.mfhuangti {
  width: 821px;
  border-bottom: 1px solid #d3d3d3;
}
.contentImg {
  width: 110px;
  height: 150px;
  margin-bottom: 25px;
  padding: 10px 0;
}
.timeFont {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  background: #000000;
  opacity: 0.6;
  border-radius: 0px 0px 10px 10px;
}
.right_Content {
  float: left;
  width: 910px;
  margin: 40px 0 0 50px;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  line-height: 50px;
}

.past {
  vertical-align: middle;
  display: table-cell;
  position: relative;
}
.mediaCoverageUl {
  display: flex;
  flex-wrap: wrap;
}
.mediaCoverageUl li {
  width: 27.33%;
  height: auto;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 28px;
  cursor: pointer;
}
.dociv {
  overflow: hidden;
  position: center;
  width: 230px;
  height: 120px;
  text-align: center;
  display: table;
  border-radius: 10px;
  /* padding: 0 0 30px 0; */
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -3px 10px #efe8e8, -3px 0px 10px #efe8e8, 3px 0px 10px #efe8e8, 0px 3px 10px #efe8e8;
}
.dociv:hover {
  transform: scale(1.05);
}

.name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(100, 144, 187, 0.23);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px !important;
}
</style>
