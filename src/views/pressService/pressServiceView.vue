<template>
  <div>
    <div class="right_Content">
      <div class="headName">{{title}}</div>
      <hr />
      <ul class="mediaCoverageUl">
        <li v-for="(item,index) in dataList" :key="index" @click="toPage('/newsInfo?id='+item.id)">
          <!-- <img class="contentImg" :src="item.newsImgUrl" alt /> -->
          <div class="mediaCoverage_font">
            <div>
              <span>{{item.title}}</span>
              <span class="timeFont">{{item.createdTime}}</span>
            </div>
            <div class="newsConten">{{formatContent(item.content)}}</div>
            <div class="more">更多>></div>
          </div>
        </li>
      </ul>
      <div style="padding:50px 0;text-align:center;">
        <el-pagination
          background
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[10,20,30,40]"
          :page-size="pageSize"
          :total="totalPage"
          layout="total, sizes, prev, pager, next, jumper, slot"
        >
        <el-button style="margin-left:20px;border:1px solid #C0C4CC;color: #606266;" size="mini" @click="getDataList">{{ $t('listOfExhibitors.t4') }}</el-button>
      </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { formatContent } from "@/utils/index";
export default {
  data() {
    return {
      formatContent: formatContent,
      title: "展会报道",
      type: 11,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataList: [],
    };
  },
  watch: {
    $route(to, from) {
      this.pageIndex = 1;
      if (to.path == "/pressRelease") {
        this.type = 13;
        this.title = "新闻通稿";
      }
      this.getDataList();
    },
  },
  mounted() {
    this.pageIndex = 1;
    if (this.$route.path == "/pressRelease") {
      this.type = 13;
      this.title = "新闻通稿";
    }
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
          `/news/list?page=${this.pageIndex}&pageSize=${this.pageSize}&newsTypeId=${this.type}`
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
  },
};
</script>
<style scoped>
.right_Content {
  float: left;
  width: 960px;
  margin: 40px 0 0 50px;
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
  padding: 20px 0;
}
.mediaCoverage_font {
  flex: 1;
  margin-left: 32px;
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
