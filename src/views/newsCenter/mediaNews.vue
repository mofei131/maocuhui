<template>
  <div>
    <div class="right_Content">
      <!-- <div class="headName">{{ title }}</div> -->
      <!-- <div class="mftit">{{ title }}</div>
      <div class="mflanf"></div>
      <div class="mfhuangti"></div> -->
      <div class="titles"><span class="title-texts">{{ title }}</span></div>
      <!-- <hr /> -->
      <ul class="mediaCoverageUl">
        <li v-for="(item, index) in dataList" :key="index">
          <!-- <img class="contentImg" :src="item.newsImgUrl" alt /> -->
          <div class="mediaCoverage_font">
            <div>
              <span
                style="cursor: pointer"
                @click="
                  item.flag === 2
                    ? toPage('/newsInfo?id=' + item.id)
                    : newOpen(item.refUrl)
                "
                >{{ item.title }}</span
              >
              <span class="timeFont">{{ item.createdTime }}</span>
            </div>
            <div
              class="newsConten"
              :style="type == 15 ? ' height: auto;' : ' height: 56px;'"
            >
              {{ formatContent(item.content) }}
            </div>
            <div
              class="more"
              @click="
                item.flag === 2
                  ? toPage('/newsInfo?id=' + item.id)
                  : newOpen(item.refUrl)
              "
            >
              {{ $t("newsList.t4") }}>>
            </div>
          </div>
        </li>
      </ul>
      <div style="padding: 50px 0; text-align: center">
        <el-pagination
          v-if="type !== 15"
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
            >{{ $t("listOfExhibitors.t4") }}</el-button
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { formatContent } from "@/utils/index";
export default {
  name:"mediaNews",
  data() {

    return {
      formatContent: formatContent,
      title: "媒体直通",
      type: 1,
      mediaId: 0,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataList: [],
    };
  },
  watch: {

  },
  mounted() {
    this.mediaId = this.$route.query.mediaId;
    this.getDataList();

  },
  methods: {
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url,
      });
    },
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
          `/news/list?page=${this.pageIndex}&pageSize=${this.pageSize}&mediaId=${this.mediaId}`
        ),
        method: "get",
      }).then(({ data }) => {
        console.log(data);
        if (data && data.code === 1) {
          this.dataList = data.data.list || [];

          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
      });
    },
    newOpen(url) {
      window.open(url);
    },
  },
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
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 700;
    color: #636363;
    line-height: 32px;
    height: 55px;
    display: flex;
    align-items: center;
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
  width: 200px;
  height: 140px;
}
.timeFont {
  float: right;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #888888;
}

.mediaCoverageUl {
  padding: 20px 0;
}
.mediaCoverageUl li {
  display: flex;
  padding: 20px;
}
.mediaCoverageUl > li:hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
}
.mediaCoverage_font {
  flex: 1;
  /* margin-left: 32px; */
}
.mediaCoverage_font div:nth-child(1) {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #fe7e36;
  line-height: 40px;
}
.newsConten {
  margin: 0 0 21px 0;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  line-height: 28px;
  height: 56px;
  color: #888888;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.more {
  height: 13px;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #2884ec;
  line-height: 24px;
  float: right;
  cursor: pointer;
}
</style>
