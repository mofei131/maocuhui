<template>
    <div class="right_Content">
      <div class="title">
        <span class="title-text">{{ $t('audienceService.t6') }}</span>
        <div class="mfsek"></div>
      </div>
      <div class="font_content" style="position: relative;">
        <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
        <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />

        <ul class="mediaCoverageUl">
          <li v-for="(item, index) in dataList" :key="index">
            <div class="dociv">
              <img
                class="contentImg"
                :src="item.icon"
                alt
                @click="download(item.url)"
              />
              <div class="countFont">{{ item.name }}</div>
              <div class="timeFont">{{ item.createdTime }}</div>
              <el-button type="primary" round @click="download(item.url)"
                >查看文件</el-button
              >
            </div>
          </li>
        </ul>
      </div>
      <div style="padding: 50px 0; text-align: center">
        <el-pagination
          background
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          :total="totalPage"
          layout="total, sizes, prev, pager, next, jumper, slot"
        >
          <el-button
            style="margin-left: 20px; border: 1px solid #c0c4cc; color: #606266"
            size="mini"
            @click="getDataList"
            >{{ $t('listOfExhibitors.t4') }}</el-button
          >
        </el-pagination>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataList: [],
    };
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    }, // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    //获取列表数据
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(
          `/file/list?asc=seq&page=${this.pageIndex}&pageSize=${this.pageSize}&type=2`
        ),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.dataList = data.data.list || [];
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
      });
    },
    download(url) {
      window.open(url);
    },
  },
};
</script>
<style lang="scss" scoped>
.mfsek{
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
  position: absolute;
  bottom: 0px;
}
.right_Content{
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  height: 821px;
  padding-left: 55px;
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
.contentImg {
  width: 85px;
  height: 106px;
  flex: 0.2;
}
.timeFont {
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #888;
  margin: 20px 0 26px;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  line-height: 50px;
  width: 820px;
}
.mediaCoverageUl {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 100;
}
.mediaCoverageUl li {
  width: 33.33%;
  height: auto;
  padding: 0 18px;
  box-sizing: border-box;
  margin-top: 50px;
  cursor: pointer;
}
.dociv {
  text-align: center;
  border-radius: 10px;
  padding: 49px 0 30px 0;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -3px 10px #efe8e8, -3px 0px 10px #efe8e8, 3px 0px 10px #efe8e8,
    0px 3px 10px #efe8e8;
}
.dociv:hover{
  transform: scale(1.05);
}
.countFont {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #666666;
  line-height: 26px;
  height: 52px;
  margin: 57px auto 0;
  width: 90%;
  color: #888888;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.downLoad {
  width: 100px;
  height: 40px;
  background: #2884ec;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  margin: 0 auto;
}
</style>
