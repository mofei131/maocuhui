<template>
  <div id="exhibitsList">
    <!-- <div class="commonContent">
      <div class="goBack">
        <p class="backBg" @click="goBack()">
          <img src="../../assets/images/conferenceLive/back.png" style="margin-top: -6px;" alt />
          <span class="backText">{{ $t('back') }}</span>
        </p>
      </div>
    </div> -->
    <img
      class="bannerBg"
      src="https://file.mepxns.info/%E6%99%BA%E8%83%BD%E7%89%A9%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A-%E9%A1%B6%E5%9B%BE-%E4%BC%81%E4%B8%9A%E8%A7%86%E9%A2%91.png"
      alt
    />
    <!-- <div class="bannerBg"></div> -->
    <div class="commonContent">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">企业视频</div>
      </div>
      <ul class="liveBox">
        <li v-for="(item, index) in dataList" :key="index">
          <div class="itemBox">
            <div class="liveBg">
              <!-- <img
                class="liveBtn"
                @click.stop="tolive(item.videoUrl)"
                src="../../assets/images/conferenceLive/liveBtn.png"
                alt
              />
              <img class="livePic" :src="item.coverUrl" alt /> -->
              <video
                style="width: 100%; height: 100%"
                :src="item.videoUrl"
                controls
              ></video>
            </div>
            <div class="livMain">
              <h2 class="liveTitle">{{ item.exhibitorName }}</h2>
              <p class="liveMiddle">
                <span class="liveTime">{{ item.createdTime }}</span>
                <!-- <img class="people" src="../../assets/images/conferenceLive/people.png" alt />
                  <span class="population">{{item.viewCount}}</span> -->
              </p>
              <!-- <p class="liveContent">{{item.intro}}</p> -->
            </div>
          </div>
        </li>
      </ul>
      <el-pagination
        style="padding: 20px 0; text-align: center; margin-bottom: 50px"
        background
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[9, 18, 27, 36]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper, slot"
      >
        <el-button style="margin-left:20px;border:1px solid #C0C4CC;color: #606266;" size="mini" @click="getDataList">{{ $t('listOfExhibitors.t4') }}</el-button>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "exhibitsList",
  data() {
    return {
      pageIndex: 1,
      pageSize: 9,
      totalPage: 0,
      dataList: [],
      isActive: 0,
    };
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    tolive(url) {
      window.open(url);
    },
    changValue(index) {
      this.isActive = index;
    },
    goBack() {
      window.history.back();
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
          `/video/list?page=${this.pageIndex}&pageSize=${this.pageSize}`
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

<style lang="scss" scoped>
#exhibitsList {
  font-family: Source Han Sans SC;
  .goBack {
    .backBg {
      width: 100px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      img {
        display: inline-block;
        width: 11px;
        height: 18px;
        margin-right: 14px;
        vertical-align: middle;
      }
      .backText {
        width: 38px;
        height: 19px;
        font-size: 20px;
        font-weight: 400;
        color: #444444;
      }
    }
  }
  .bannerBg {
    width: 100%;
    min-width: 1290px;
    // height: 600px;
    // background: url("https://file.mepxns.info/weifang-ai-expo/c8b3b7962610423786c3fb9f6c8fb8e7.jpg")
    //   no-repeat;
    // background-size: 100% 100%;
  }

  .commonTitleWrap {
    padding: 0 45px;
    height: 100px;
    display: flex;
    align-items: center;
    .sx {
      width: 4px;
      height: 32px;
      background: #02edfd;
      border-radius: 2px;
    }
    .title {
      width: 126px;
      height: 29px;
      font-size: 30px;
      font-weight: bold;
      color: #333333;
      margin-left: 13px;
    }
  }
  .liveBox {
    display: flex;
    flex-wrap: wrap;
    li {
      // width: 360px;
      // height: 560px;
      // margin: 0 30px 50px;
      // position: relative;
      // border-radius: 10px;
      // box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
      // cursor: pointer;
      width: 33.33%;
      padding-left: 45px;
      padding-bottom: 50px;
      box-sizing: border-box;
      .itemBox {
        border-radius: 10px;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
        cursor: pointer;
        padding-bottom: 16px;
      }
      .liveBg {
        // width: 360px;
        // height: 260px;
        background: #e4e4e4;
        border-radius: 10px;
        background-size: 100% 100%;
        position: relative;
        .livePic {
          width: 100%;
          height: 100%;
        }
        .liveBtn {
          width: 48px;
          height: 48px;
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
      }
      .livMain {
        margin: 0 22px 0 21px;
        .liveTitle {
          height: 20px;
          font-size: 20px;
          font-weight: 500;
          color: #333333;
          line-height: 20px;
          margin: 29px 0 21px 0;
        }
        .liveMiddle {
          margin-bottom: 22px;
          height: 13px;
          line-height: 13px;
          .liveTime {
            width: 172px;
            font-size: 14px;
            font-weight: 400;
            color: #c1c1c1;
          }
          .people {
            width: 12px;
            height: 12px;
            margin: 0 20px 0 105px;
          }
          .population {
            font-size: 13px;
            font-weight: 400;
            color: #c1c1c1;
          }
        }
        .liveContent {
          width: 319px;
          height: 156px;
          font-size: 16px;
          font-weight: 400;
          color: #555555;
          line-height: 26px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
