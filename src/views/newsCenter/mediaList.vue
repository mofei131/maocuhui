<template>
  <div>
    <div class="right_Content">
      <div class="titles">
        <span class="title-texts">{{ title }}</span>
      </div>
      <div class="font_content">
        <div class="mftit">热门媒体</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList1" :key="index">
            <div class="dociv">
              <router-link :to="'/newsCenter/newslist?mediaId=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.logo" />
              </router-link>
            </div>
          </li>
        </ul>
        <div class="mftit">行业媒体</div>
        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList2" :key="index">
            <div class="dociv">
              <router-link :to="'/newsCenter/newslist?mediaId=' + item.id" class="past">
                <span class="name">{{ item.name }}</span>
                <img class="contentImg" :src="item.logo" />
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
  data() {
    return {
      title: '媒体直通',
      pageSize: 200,
      dataList1: [],
      dataList2: [],
      pageIndex: 1
    };
  },

  mounted() {
    this.getDataList1();
    this.getDataList2();
  },
  methods: {
    getDataList1() {
      this.$http({
        url: this.$http.adornUrl(`/media/list`),
        method: 'get',
        params: this.$http.adornParams({
          page: this.pageIndex,
          pageSize: this.pageSize,
          type: 1
        })
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.dataList1 = data.data.list || [];
        } else {
          this.dataList1 = [];
        }
      });
    },

    getDataList2() {
      this.$http({
        url: this.$http.adornUrl(`/media/list`),
        method: 'get',
        params: this.$http.adornParams({
          page: this.pageIndex,
          pageSize: this.pageSize,
          type: 2
        })
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.dataList2 = data.data.list || [];
        } else {
          this.dataList2 = [];
        }
      });
    }
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
  /* height: 200px; */
  flex: 0.2;
  margin-bottom: 25px;
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
