<template>
  <div id="conferenceLive">
    <!-- <div class="commonContent">
      <div class="goBack">
        <span @click="goBack()">
          <img src="../../assets/images/conferenceLive/back.png" alt />
          <span class="backText">{{ $t('back') }}</span>
        </span>
      </div>
    </div> -->
    <!-- <div class="bannerBg">
      <div class="commonContent bannerBox">
        <div class="bannerLeft">
          <ul class="bannerList">
            <li v-for="(item,index) in dataList" :key="index" @click="changValue(index,item.id)" v-if="index<8">
              <div style="position:relative;">
                <span :class="[index===isActive?'active':'bannerTitle']">{{item.title}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bannerRight">
          <div class="bannerRightBg"></div>
          <img src="../../assets/images/conferenceLive/bannerRight.png" alt />
        </div>
      </div>
    </div> -->
    <img
      class="rotation_img"
      src="@/assets/images/conferenceLive/banner.png"
      alt
    />
    <div class="commonContent">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('conferenceLive.t1') }}</div>
      </div>
      <ul class="liveBox">
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="toDetails(item.id)"
        >
          <div class="liveWrap">
            <div class="liveBg">
              <div class="liveStatus1 liveStatus" v-if="item.status == 1">
                <span class="liveText">{{ $t('conferenceLive.t2') }}：{{ item.timeStr }}</span>
              </div>
              <div
                class="liveStatus2 liveStatus"
                v-else-if="item.status == 2"
                style="justify-content: center; color: white; font-size: 14px"
              >
                {{ $t('conferenceLive.t3') }}
              </div>
              <div class="liveStatus3 liveStatus" v-else>
                <img
                  class="living"
                  src="../../assets/images/conferenceLive/play.png"
                  alt
                />
                <span class="liveText">{{ $t('conferenceLive.t4') }}</span>
              </div>
              <img class="livePic" :src="item.imgUrl" alt />
              <div class="liveBtn">
                <img
                  @click.stop="tolive(item)"
                  src="../../assets/images/conferenceLive/liveBtn.png"
                  alt
                />
              </div>
            </div>
            <div class="livMain">
              <h2 class="liveTitle">{{ item.title }}</h2>
              <p class="liveMiddle" style="white-space: nowrap">
                <span class="liveTime">{{ $t('conferenceLive.t5') }}：{{ item.time }}</span>
                <img
                  class="people"
                  src="../../assets/images/conferenceLive/people.png"
                  alt
                />
                <span class="population">{{ item.viewCount }}</span>
              </p>
              <!-- <p class="liveContent">{{ item.content }}</p> -->
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
        <el-button
          style="margin-left: 20px; border: 1px solid #c0c4cc; color: #606266"
          size="mini"
          @click="getDataList"
          >{{ $t('listOfExhibitors.t4') }}</el-button
        >
      </el-pagination>
    </div>
        <video-player-dialog
      :visible.sync="visible"
      :title="live.content"
      :url="live.videoUrl || ''"
    ></video-player-dialog>
  </div>
</template>

<script>
import VideoPlayerDialog from "../../components/video-player-dialog";
import { countDownTime, formatDuring } from "@/utils/index";
export default {
  name: "conferenceLive",
    components: {
    VideoPlayerDialog,
  },
  data() {
    return {
      visible: false,
      isShow: false,
      pageIndex: 1,
      pageSize: 9,
      totalPage: 0,
      dataList: [],
      isActive: -1,
      day: 0,
      hours: 0,
      minutes: 0,
      countDown: "",
      imgUrl: "",
      live: {}
    };
  },
  mounted() {
    this.getDataList();
    this.timer = setInterval(() => {
      this.dataList.map((item) => {
        if (item.status == 1) {
          item.timeNum = countDownTime(item.time).timestamp;
          item.timeStr = formatDuring(item.timeNum);
          this.$forceUpdate();
        }
      });
    }, 1000);
  },

  methods: {
    changValue(index, id, img) {
      this.isActive = index;
      // this.$set(this.dataList[index], "isShow", true);
      // this.imgUrl=img;
      // this.$router.push({
      //   path: "/pavilionDetail",
      //   query: {
      //     id: id,
      //   },
      // });
    },
    toDetails(id) {
      this.$router.push({
        path: "/liveDetail",
        query: {
          id: id,
        },
      });
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
          `/meeting/list?page=${this.pageIndex}&pageSize=${this.pageSize}`
        ),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.dataList = data.data.list || [];
          this.dataList.map((item) => {
            if (item.status == 1) {
              item.timeNum = countDownTime(item.time).timestamp;
              item.timeStr = formatDuring(item.timeNum);
            }
          });
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
      });
    },
    tolive(live) {

      if (live.videoUrl) {
        this.visible = true;
        this.live = live
        return;
      }

      if (live.liveUrl) {
        window.open(live.liveUrl);
      } else {
        this.$message({
          message: "暂无直播！",
          type: "info",
          customClass: 'myprompt'
        })
      }
      // if (+new Date(live.time) > +new Date()) {
      //   return this.$message({
      //     message: "开放时间未到，敬请期待！",
      //     type: "info",
      //     customClass: 'myprompt'
      //   });
      // }
      
    },
  },
};
</script>

<style lang="scss" scoped>
#conferenceLive {
  .goBack {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 11px;
      height: 18px;
      margin-right: 14px;
    }
    .backText {
      height: 19px;
      font-size: 20px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #444444;
    }
  }
  .rotation_img {
    width: 100%;
    min-width: 1290px;
  }
  .bannerBg {
    width: 100%;
    height: 600px;
    background: linear-gradient(90deg, #2478e7, #463cb2, #3a36ae, #ac70ee);
    .bannerBox {
      height: 100%;
      display: flex;
      .bannerLeft {
        margin-top: 50px;
        width: 420px;
        height: 500px;
        background: #584db6;
        border-radius: 10px;
        .bannerList {
          margin: 63px 39px 0;
          li:hover {
            color: #03e9fa;
            cursor: pointer;
          }
          .active {
            display: inline-block;
            color: #03e9fa;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            cursor: pointer;
            width: 95%;
          }
          li {
            height: 20px;
            width: 100%;
            font-size: 20px;
            font-weight: 400;
            line-height: 20px;
            display: flex;
            margin-bottom: 40px;
            div {
              width: 100%;
            }
            .bannerTitle {
              display: inline-block;
              font-size: 20px;
              font-weight: 400;
              color: #efefef;
              // margin-right: 29px;
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            img {
              display: inline-block;
              width: 16px;
              height: 18px;
            }
          }
        }
      }
      .bannerRight {
        flex: 1;
        height: 100%;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        padding-top: 40px;
        .bannerRightBg {
          position: absolute;
          z-index: 0;
          top: 100px;
          left: 20%;
          width: 550px;
          height: 400px;
          background: #01edfd;
          border-radius: 100px;
          transform: rotate(-130deg);
        }
        img {
          position: relative;
          z-index: 10;
          width: 720px;
          height: 520px;
          background: #2b46f8;
          border-radius: 10px;
        }
      }
    }
  }

  .commonTitleWrap {
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
    margin-bottom: 50px;
    li {
      width: 33.33%;
      box-sizing: border-box;
      margin-bottom: 58px;
      .liveWrap {
        width: 360px;
        height: 380px;
        position: relative;
        border-radius: 10px;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
        cursor: pointer;
        .liveBg {
          width: 360px;
          height: 260px;
          background: #e4e4e4;
          border-radius: 10px;
          background-size: 100% 100%;
          position: relative;
          .liveStatus {
            position: absolute;
            top: 68px;
            left: -11px;
            height: 32px;
            border: 4px solid #ffffff;
            border-radius: 20px;
            display: flex;
            vertical-align: middle;
            align-items: center;
            text-align: center;
            .liveText {
              font-size: 14px;
              color: #ffffff;
            }
          }
          .liveStatus1 {
            width: 190px;
            background: #fb6262;
            justify-content: center;
            .living {
              width: 13px;
              height: 13px;
              margin: 0 10px 0 13px;
            }
          }
          .liveStatus2 {
            width: 80px;
            background: #bbbbbb;
            .living {
              width: 13px;
              height: 13px;
              margin: 0 10px 0 13px;
            }
          }
          .liveStatus3 {
            width: 96px;
            background: #6962fe;
            .living {
              width: 13px;
              height: 13px;
              margin: 0 10px 0 13px;
            }
          }
          .livePic {
            width: 360px;
            height: 260px;
          }
          .liveBtn {
            display: none;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.42);
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            > img {
              width: 48px;
              height: 48px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
            }
          }
        }
        .liveBg:hover {
          .liveBtn {
            display: block;
          }
        }
        .livMain {
          margin: 0 22px 0 21px;
          .liveTitle {
            height: 20px;
            font-size: 20px;
            font-weight: 500;
            color: #2b46f8;
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
              margin: 0 20px 0 73px;
            }
            .population {
              font-size: 13px;
              font-weight: 400;
              color: #c1c1c1;
            }
          }
          .liveContent {
            width: 319px;
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
}
</style>
