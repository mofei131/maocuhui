<template>
  <div id="liveDetail">
    <div class="commonContent">
      <div class="commonContent">
        <div class="goBack">
          <span @click="goBack()">
            <img src="../../assets/images/conferenceLive/back.png" alt />
            <span class="backText">{{ $t("back") }}</span>
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="bannerBg"></div> -->
    <div class="commonContent">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">直播介绍</div>
      </div>
      <div class="liveIntroduceBox">
        <div class="liveIntroduceLeft">
          <!-- <p class="liveIntroduceLeftHeader">
            <img class="liveIcon1" src="../../assets/images/conferenceLive/liveIcon1.png" alt />
          </p> -->
          <div class="liveIntroduceLeftPic">
            <img class="livePic" :src="info.imgUrl" alt />
            <div class="liveIcon2">
              <img
                @click="tolive()"
                src="../../assets/images/conferenceLive/liveIcon2.png"
                alt
              />
            </div>
          </div>
        </div>
        <div class="liveIntroduceRight">
          <div class="liveIntroduceTitle">{{ info.content }}</div>
          <div class="liveIntroduceTime">
            <p class="liveMiddle" style="line-height: 0.8">
              <span class="liveTime" style="color: #fe7c34; margin-right: 49px"
                >时间：{{ info.time }}</span
              >
              <img
                style="width: 12px; height: 12px"
                src="../../assets/images/conferenceLive/people.png"
                alt
              />
              <span style="font-size: 16px; color: #c0c0c0; margin-left: 8px">{{
                info.viewCount
              }}</span>
            </p>
          </div>
          <!-- <div class="liveIntroduceContent">{{ info.content }}</div> -->
          <div class="countdownBox">
            <p class="countdown" v-if="info.status == 1">
              倒计时：{{ info.timeStr }}
            </p>
            <span class="seeLive" @click="tolive()">{{ timeStaus }}</span>
          </div>
        </div>
      </div>
      <div
        v-if="info.title ? info.title.indexOf('开幕式') === -1 : false"
        class="commonTitleWrap"
      >
        <span class="sx"></span>
        <div class="title">人物介绍</div>
      </div>
      <ul
        v-if="info.title ? info.title.indexOf('开幕式') === -1 : false"
        class="liveBox"
      >
        <li v-for="(item, index) in info.guestList" :key="index">
          <div class="mainBox">
            <div class="personBox">
              <img class="avatar" :src="item.headUrl" />
              <div class="personInfo">
                <p class="personName">{{ item.name }}</p>
                <p class="personPosition">{{ item.company }}</p>
                <p style="font-size: 12px; color: #555555; line-height: 25px">
                  {{ item.position }}
                </p>
              </div>
            </div>
            <div class="livMain">
              <h2 class="liveTitle">{{ item.intro }}</h2>
              <!-- <div class="liveContent">
                <p>演讲题目：{{ item.subject }}</p>
                <p>{{ item.content }}</p>
              </div> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
    <video-player-dialog
      :visible.sync="visible"
      :title="info.content"
      :url="info.videoUrl || ''"
    ></video-player-dialog>
  </div>
</template>

<script>
import { countDownTime, formatDuring } from "@/utils/index";
import VideoPlayerDialog from "../../components/video-player-dialog";
export default {
  name: "liveDetail",
  components: {
    VideoPlayerDialog,
  },
  data() {
    return {
      visible: false,
      dataList: [],
      isActive: 0,
      info: {},
      timeStaus: "", // 时间状态
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.timeStaus = "即将开始") {
        this.info.timeNum = countDownTime(this.info.time).timestamp;
        this.info.timeStr = formatDuring(this.info.timeNum);
        this.$forceUpdate();
      }
    }, 1000);
  },
  created() {
    this.getInfo();
  },
  methods: {
    //更多
    more() {},
    tolive() {
      if (this.info.videoUrl) {
        this.visible = true;
        return;
      }

      if (this.info.liveUrl) {
        window.open(this.info.liveUrl);
      } else {
        this.$message({
          message: "暂无直播！",
          type: "info",
          customClass: "myprompt",
        });
      }
      // if (+new Date(this.info.time) > +new Date()) {
      //   return this.$message({
      //     message: "开放时间未到，敬请期待！",
      //     type: "info",
      //     customClass: 'myprompt'
      //   });
      // }
      // window.open(this.info.liveUrl);
    },
    changValue(index) {
      this.isActive = index;
    },
    goBack() {
      window.history.back();
    },
    //获取列表数据
    getInfo() {
      this.$http({
        url: this.$http.adornUrl(`/meeting/${this.$route.query.id}`),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.info = data.data;
          // if (this.info.status == 1) {
          this.info.timeNum = countDownTime(this.info.time).timestamp;
          this.info.timeStr = formatDuring(this.info.timeNum);
          this.timer = setInterval(() => {
            this.info.timeNum = countDownTime(this.info.time).timestamp;
            this.info.timeStr = formatDuring(this.info.timeNum);
            // 设置时间状态
            const a = +new Date(this.info.time.replace(/-/g, "/"));
            const b = +new Date(this.info.timeEnd.replace(/-/g, "/"));
            const c = +new Date();
            if (c >= a && c <= b) {
              return (this.timeStaus = "正在直播");
            } else if (c < a) {
              return (this.timeStaus = "即将开始");
            } else {
              return (this.timeStaus = "回看");
            }
            this.$forceUpdate();
          }, 1000);
          // }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#liveDetail {
  .commonContent:nth-of-type(2) {
    min-height: 700px;
  }
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
  .bannerBg {
    width: 100%;
    height: 600px;
    background: url("https://file.mepxns.info/weifang-ai-expo/d82cee2fb5844b38b74a04ad2ebcdea4.jpg")
      no-repeat;
    background-size: 100% 100%;
  }

  .commonTitleWrap {
    // padding: 0 45px;
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
  .liveIntroduceBox {
    padding: 25px 60px 60px 0;
    display: flex;
    .liveIntroduceLeft {
      width: 613px;
      height: 405px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
      overflow: hidden;
      margin-right: 59px;
      .liveIntroduceLeftHeader {
        height: 46px;
        line-height: 46px;
        background: #ffffff;
        display: flex;
        align-items: center;
        .liveIcon1 {
          width: 52px;
          height: 13px;
          margin-left: 24px;
        }
      }
      .liveIntroduceLeftPic {
        // width: 614px;
        // height: 359px;
        position: relative;
        .livePic {
          width: 100%;
          height: 100%;
        }
        .liveIcon2 {
          display: none;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.42);
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;
          > img {
            width: 168px;
            height: 168px;
            position: absolute;
            top: 99px;
            left: 224px;
          }
        }
      }
      .liveIntroduceLeftPic:hover {
        .liveIcon2 {
          display: block;
        }
      }
    }
    .liveIntroduceRight {
      width: 613px;
      height: 405px;
      .liveIntroduceTitle {
        font-size: 28px;
        font-weight: 500;
        color: #2a45f8;
        margin: 48px 0 28px 0;
      }
      .liveIntroduceTime {
        margin-bottom: 18px;
      }
      .liveIntroduceContent {
        height: 184px;
        font-size: 18px;
        font-weight: 400;
        color: #656565;
        line-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        margin-bottom: 15px;
      }
      .countdownBox {
        display: flex;
        height: 50px;
        align-items: center;
        .countdown {
          color: #434343;
          font-size: 20px;
          span {
            color: #2783eb;
            margin: 0 10px 0 5px;
          }
        }
        .seeLive {
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #2783eb;
          box-shadow: 0px 3px 10px 0px rgba(39, 131, 235, 0.78);
          border-radius: 25px;
          color: #ffffff;
          margin-left: 51px;
          cursor: pointer;
        }
      }
    }
  }
  .liveBox {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    li {
      box-sizing: border-box;
      padding: 25px 60px 30px 0;
      position: relative;
      .mainBox {
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
        .personBox {
          height: 103px;
          display: flex;
          .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-right: 20px;
          }
          .personInfo {
            .personName {
              font-size: 20px;
              font-weight: bold;
              color: #333333;
              margin-bottom: 12px;
            }
            .personPosition {
              // height: 33px;
              font-size: 12px;
              font-weight: 400;
              color: #555555;
              line-height: 25px;
            }
          }
        }
        .livMain {
          .liveTitle {
            font-size: 14px;
            font-weight: 400;
            color: #555555;
            line-height: 24px;
            text-indent: 28px;
            // overflow: hidden;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 3;
            // -webkit-box-orient: vertical;
            margin-bottom: 16px;
          }
          .liveMiddle {
            font-size: 14px;
            font-weight: 400;
            color: #0c1134;
            line-height: 24px;
            text-align: right;
            > span {
              cursor: pointer;
            }
          }
          .liveContent {
            background: #f2f2f2;
            border-radius: 6px;
            padding: 18px;
            color: #222222;
            > p:nth-of-type(1) {
              font-size: 16px;
              font-weight: 600;
              line-height: 24px;
              margin-bottom: 12px;
            }
            > p:nth-of-type(2) {
              font-size: 14px;
              line-height: 20px;
              font-weight: 400;
              text-align: justify;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
}
</style>
