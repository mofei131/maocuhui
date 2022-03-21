<template>
  <div class="homePage">
    <!-- 轮播图 -->
    <banner></banner>
    <div class="commonContent">
      <!-- 在线展厅 -->
      <div class="exhibitionHall">
        <div class="commonTitleWrap">
          <span class="sx"></span>
          <div class="title">{{ $t('home.t1') }}</div>
        </div>
        <div class="exhibitionHallConten">
          <template>
            <div class="threeJs">
              <img src="../../assets/images/home/3d_bg.png">
            </div>
<!--            <video-player
              class="vjs-custom-skin"
              ref="videoPlayer"
              :options="playerOptions"
              :playsinline="true"
              customEventName="customstatechangedeventname"

              @pause="onPlayerPause($event)"
              @ended="onPlayerEnded($event)"
              @waiting="onPlayerWaiting($event)"

              @timeupdate="onPlayerTimeupdate($event)"
              @canplay="onPlayerCanplay($event)"
              @canplaythrough="onPlayerCanplaythrough($event)"
              @statechanged="playerStateChanged($event)"
              @ready="playerReadied"
            >
            </video-player>
            <div class="video-tips" @click="goThreejsLink">
&lt;!&ndash;              <img
                style="width: 120px; height: 120px"
                src="../../assets/images/home/jqqd.jpg"
              />&ndash;&gt;
            </div>-->

          </template>
          <!-- <img
            src="https://file.mepxns.info/weifang-ai-expo/6e28bbd885544b1d88280b2d9e68a59a.png"
            alt
          /> -->
        </div>
      </div>
      <!-- 展商展品 -->
      <div class="exhibitionWrap">
        <div class="commonTitleWrap">
          <span class="sx"></span>
          <div class="title" style="flex: 1">{{ $t('home.t2') }}</div>
          <div
            class="seeAll seeAll1"
            style="cursor: pointer"
            @click="toPage('/exhibitionList')"
          >
            <span class="num">{{ categoryCount }}</span>
            <span>个大类</span>
          </div>
          <div
            style="cursor: pointer"
            class="seeAll"
            @click="toPage('/exhibitionList')"
          >
            <!-- <span class="num">{{areaCount}}</span>
            <span>个展区</span> -->
            <img src="../../assets/images/home/next.png" alt />
          </div>
        </div>
        <div class="swiperBox">
          <!-- <div class="swiper-container"> -->
          <!-- <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item,index) in exhibitorData"
                :key="index"
                @click="toPage('/exhibitionList')"
              >
                <div class="name">{{item.category}}</div>
                <div class="imgWrap">
                  <img :src="item.imgUrl" alt />
                </div>
                <div class="numBox">
                  <span class="num">{{item.stadiumSize}}</span>
                  <span>个展区</span>
                </div>
                <div class="numBox">
                  <span class="num">{{item.exhibitorSize}}</span>
                  <span>家参展商</span>
                </div>
              </div>
          </div>-->
          <div
            class="swiper-wrap"
            v-for="(item, index) in exhibitorData"
            :key="index"  v-if="index<4"
            @click="
              toPage(
                `/exhibitionList?categoryId=${
                  item.categoryId ? item.categoryId : ''
                }`
              )
            "
          >
            <div class="swiper-item">
              <div class="name">{{ item.category }}</div>
              <div class="imgWrap">
                <img :src="item.imgUrl" alt />
              </div>
              <!-- <div class="numBox">
                <span class="num">{{item.stadiumSize}}</span>
                <span>个展区</span>
              </div> -->
              <div class="numBox">
                <span class="num">{{ item.exhibitorSize }}</span>
                <span>家参展商</span>
              </div>
            </div>
          </div>
          <div
            class="swiper-wrap"
            @click="
              toPage(
                `/development`
              )
            "

          >
            <div class="swiper-item">
              <div class="name">国家级开发区成就展区</div>
              <div class="imgWrap">
                <img src="http://218.59.142.236:9002/java/storage/background_5.png" alt />
              </div>
              <!-- <div class="numBox">
                <span class="num">{{item.stadiumSize}}</span>
                <span>个展区</span>
              </div> -->
              <!--              <div class="numBox">
              &lt;!&ndash;                <span class="num">{{ item.exhibitorSize }}</span>
                              <span>家参展商</span>&ndash;&gt;
                            </div>-->
              <div class="numBox">
                <span class="num">4</span>
                <span>个国家级开发区</span>
              </div>
            </div>

          </div>
          <div
            class="swiper-wrap"
            @click="
              toPage(
                `/newsCenter/pastReview`
              )
            "

          >
            <div class="swiper-item">
              <div class="name">往届博览会回顾展区</div>
              <div class="imgWrap">
                <img src="http://218.59.142.236:9002/java/storage/background_6.png" alt />
              </div>
              <!-- <div class="numBox">
                <span class="num">{{item.stadiumSize}}</span>
                <span>个展区</span>
              </div> -->
<!--              <div class="numBox">
&lt;!&ndash;                <span class="num">{{ item.exhibitorSize }}</span>
                <span>家参展商</span>&ndash;&gt;
              </div>-->
              <div class="numBox">
                <span class="num">6</span>
                <span>届博览会</span>
              </div>
            </div>

          </div>
          <div
            class="swiper-wrap"
            v-for="(item, index) in exhibitorData"
            :key="index"  v-if="index==6"
            @click="
              toPage(
                `/exhibitionList?categoryId=22`
              )
            "
          >
            <div class="swiper-item">
              <div class="name">{{ item.category }}</div>
              <div class="imgWrap">
                <img :src="item.imgUrl" alt />
              </div>
              <!-- <div class="numBox">
                <span class="num">{{item.stadiumSize}}</span>
                <span>个展区</span>
              </div> -->
              <div class="numBox">
                <span class="num">{{ item.exhibitorSize }}</span>
                <span>家驻华代表处</span>
              </div>
            </div>
          </div>
<!--          <div
            class="swiper-wrap"
            @click="
              toPage(
                `/exhibitionList?categoryId=22`
              )
            "
            style="margin: 0 auto 0 0"
          >
            <div class="swiper-item">
              <div class="name">日韩地方政府<br/>驻华代表处展区</div>
              <div class="imgWrap">
                <img src="http://218.59.142.236:9002/java/storage/background_7.png" alt />
              </div>
              &lt;!&ndash; <div class="numBox">
                <span class="num">{{item.stadiumSize}}</span>
                <span>个展区</span>
              </div> &ndash;&gt;
              &lt;!&ndash;              <div class="numBox">
              &lt;!&ndash;                <span class="num">{{ item.exhibitorSize }}</span>
                              <span>家参展商</span>&ndash;&gt;
                            </div>&ndash;&gt;
              <div class="numBox">
                <span class="num">34</span>
                <span>家驻华代表处</span>
              </div>
            </div>

          </div>-->
          <!-- <div class="swiperButton prev" @click="swiperPrev()">
            <img src="../../assets/images/home/prev.png" alt />
          </div>
          <div class="swiperButton next" @click="swiperNext()">
            <img src="../../assets/images/home/next.png" alt />
          </div>-->
        </div>
      </div>
      <!-- 会议直播 -->
      <div class="liveWrap">
        <div class="commonTitleWrap">
          <span class="sx"></span>
          <div class="title">{{ $t('home.t3') }}</div>
        </div>
        <ul class="liveList">
          <li
            class="listItem"
          >
            <img src="@/assets/images/home/zb_bg.png" alt width="1200px" height="440px"/>
<!--            <div class="liveImgBox" @click="opneUrl(liveData)">-->
            <div class="liveImgBox" >
              <img class="liveImg" src="@/assets/images/home/zb_fm.jpg" alt />


             <div class="playBtn">
                <video
                  class="newsVideo"
                  src="http://218.59.142.236:9002/java/storage/wf_brief_introduction.mp4"
                  controls="controls"
                  width = "711px"
                  height = "402px"
                  :poster="videoNewsData.coverUrl"
                >
                  您的浏览器不支持 video 标签。
                </video>
              </div>
            </div>
            <div v-if="liveData.status == 1" class="liveStatus1 liveStatus" @click="toPage('/liveDetail?id=' + liveData.id)">
              <span class="liveText">{{ $t('home.t4') }}：{{ liveData.timeStr }}</span>
            </div>
            <div
              v-else-if="liveData.status == 2"
              class="liveStatus2 liveStatus"
              @click="toPage('/liveDetail?id=' + liveData.id)"
            >
              <span class="liveText">{{ $t('home.t5') }}</span>
            </div>
            <div v-else class="liveStatus3 liveStatus" @click="toPage('/liveDetail?id=' + liveData.id)">
              <span class="liveText">{{ $t('home.t6') }}</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 大会嘉宾 -->
<!--      <div class="honouredGuestWrap">
        <div class="commonTitleWrap">
          <span class="sx"></span>
          <div class="title">{{ $t('home.t7') }}</div>
        </div>
        <ul class="honouredGuestList">
          <li
            class="listItem"
            v-for="(item1, index1) in guestData"
            :key="index1"
            :style="{margin: (index1+1)%4===0?'40px 0 40px 53px':(index1+1)%5===0?'40px 53px 40px 0':'40px 53px'}"
            @click="toGuestDet(item1.guestId)"
          >
            <img class="headPortrait" :src="item1.headUrl" alt />
            <div class="name">{{ item1.name }}</div>
            &lt;!&ndash; <div class="company">{{ item1.company }}</div> &ndash;&gt;
            <div class="position"><span :title="item1.position">{{ item1.position }}</span></div>
          </li>
        </ul>
      </div>-->
      <!-- 新闻中心 -->
      <div class="newsWrap">
        <div class="commonTitleWrap">
          <span class="sx"></span>
          <div class="title">{{ $t('home.t8') }}</div>
        </div>
        <div class="newsTopBox">
          <div class="newsImgBox">
            <!-- <img src="../../assets/images/home/news_img.png" alt /> -->
            <video
              class="newsVideo"
              :src="videoNewsData.videoUrl"
              controls="controls"
              :poster="videoNewsData.coverUrl"
            >
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <div class="newsList">
            <div class="listHeader">
              <span class="item">大会热搜</span>
            </div>
            <div class="listBox">
              <div
                class="listItem"
                v-for="(item, index) in hotSearch"
                :key="index"
              >
                <span @click="item.flag===2?toPage('/newsInfo?id=' + item.newsId):newOpen(item.refUrl)">{{ index + 1 }}、{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <ul class="newsBottonList">
          <li
            class="newsItem"
            v-for="(item, index) in newsData"
            :key="index"
            @click="item.flag===2?toPage('/newsInfo?id=' + item.newsId):newOpen(item.refUrl)"
          >
            <div class="imgBox">
              <img class="liveImg" :src="item.imgUrl" alt />
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="newsContent">{{ formatContent(item.content) }}</div>
            <div class="dete">{{item.createdTime}}</div>
          </li>
        </ul>
      </div>
      <!-- 赞助商 -->
      <div class="sponsorWrap">
        <div class="commonTitleWrap">
          <span class="sx"></span>
          <div class="title">{{ $t('home.t9') }}</div>
        </div>
        <ul class="sponsorList">
          <li
            class="sponsorItem"
            v-for="(item, index) in sponsorData"
            :key="index"
          >
            <div class="logoBox">
              <img class="logo" :src="item.logoUrl" alt />
            </div>
            <!-- <div class="sponsorName">{{item.name}}</div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { formatContent } from "@/utils/index";
import banner from "@/components/banner";
import swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import { countDownTime, formatDuring } from "@/utils/index";
export default {
  components: { banner, videoPlayer },
  data() {
    return {
      mySwiper: null,
      swiperIndex: 1,
      formatContent: formatContent,
      liveData: {},
      guestData: [],
      hotSearch: [],
      newsData: [],
      sponsorData: [],
      exhibitorData: [],
      videoNewsData: {},
      areaCount: 0,
      categoryCount: 0,
      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "https://file.mepxns.info/weifang_meeting_mv.mp4",
          },
        ],
        poster:
          "http://218.59.142.236:9002/java/storage/3d_bg.png",
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getExhibitorData();
    // this.mySwiper = new Swiper(".swiper-container", {
    //   initialSlide: 0,
    //   slidesPerView: 4,
    //   spaceBetween: 24,
    //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //   observeParents: false, //修改swiper的父元素时，自动初始化swiper
    // });
    this.getLiveData();
    this.timer = setInterval(() => {
      if (this.liveData.status == 1) {
        this.liveData.timeNum = countDownTime(this.liveData.time).timestamp;
        this.liveData.timeStr = formatDuring(this.liveData.timeNum);
        this.$forceUpdate();
      }
    }, 1000);
    this.getGuestData();
    this.getHotSearch();
    this.getVideoNews();
    this.getNewsData();
    this.getSponsorData();
  },
  methods: {
    goThreejsLink() {
      window.open("http://3d.weifang.mepxns.info:9999/threejs/whole.html");
    },
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url,
      });
    },
    //打开链接
    opneUrl(live) {
      if (live.liveUrl) {
        window.open(live.liveUrl);
      } else {
        this.$message({
          message: "暂无直播！",
          type: "info",
          customClass: 'myprompt'
        })
      }
    },
    swiperNext() {
      // if (this.exhibitorData.length - 3 == this.swiperIndex) return;
      this.swiperIndex++;
      this.mySwiper.slideTo(this.swiperIndex, 100, false);
    },
    swiperPrev() {
      // if (this.swiperIndex == 1) return;
      this.swiperIndex--;
      this.mySwiper.slideTo(this.swiperIndex, 100, false);
    },
    //获取展商展品
    getExhibitorData() {
      this.$http({
        url: this.$http.adornUrl(`/exhibitor/total`),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code == 1) {
          if (data.data) {
            this.areaCount = data.data.areaCount;
            this.categoryCount = data.data.categoryCount;
            this.exhibitorData = data.data.list || [];
            // setTimeout(() => {
            //   document.getElementsByClassName(
            //     "swiper-wrapper"
            //   )[0].style.transform = "translate3d(0px, 0px, 0px)";
            // }, 50);
          }
        }
      });
    },
    getVideoNews() {
      this.$http({
        url: this.$http.adornUrl(`/index/news`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 1,
          type: 1,
        }),
      }).then(({ data }) => {
        if (data.data.list && data.data.list != null) {
          this.videoNewsData = data.data.list[0]
        } else {
          this.videoNewsData = {}
        }
      });
    },
    getNewsData() {
      this.$http({
        url: this.$http.adornUrl(`/index/news`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 3,
          type: 3,
        }),
      }).then(({ data }) => {
        this.newsData = data.data.list || [];
      });
    },
    //获取大会热搜
    getHotSearch() {
      this.$http({
        url: this.$http.adornUrl(`/index/news`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 10,
          type: 2,
        }),
      }).then(({ data }) => {

        this.hotSearch = data.data.list || [];
      });
    },
    //会议直播
    getLiveData() {
      this.$http({
        url: this.$http.adornUrl(`/meeting/list`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 1,
        }),
      }).then(({ data }) => {
        this.liveData = data.data.list[0] || {};
      });
    },
    //嘉宾
    getGuestData() {
      this.$http({
        url: this.$http.adornUrl(`/index/guest`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 8,
        }),
      }).then(({ data }) => {
        this.guestData = data.data.list || [];
      });
    },
    //获取赞助商数据
    getSponsorData() {
      this.$http({
        url: this.$http.adornUrl(`/sponsor/list`),
        method: "get",
        params: this.$http.adornParams({
          page: 1,
          pageSize: 100,
        }),
      }).then(({ data }) => {
        this.sponsorData = data.data.list || [];
      });
    },
    newOpen(url) {
      window.open(url)
    },
    playerReadied() {},
    onPlayerLoadeddata() {},
    onPlayerCanplay() {},
    onPlayerCanplaythrough() {},
    toGuestDet(id) {
      this.$router.push({
        path: "/inviteGuestDetail",
        query: { id: id },
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.homePage {
  background: #181950;
  // overflow-y: auto;
  min-width: 1290px;
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
    margin-left: 13px;
    font-size: 30px;
    font-family: SourceHanSansSC;
    font-weight: bold;
    color: #ffffff;
  }
  .seeAll {
    margin-left: 33px;
    display: flex;
    font-size: 18px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #fff;
    height: 50px;
    align-items: center;
    .num {
      color: #2884ec;
      font-size: 32px;
    }
    img {
      margin-left: 20px;
      width: 25px;
      height: 25px;
    }
  }
  .seeAll1:hover{
    transform: scale(1.2);
  }
}

.exhibitionHall {
  margin-top: 10px;
  .exhibitionHallConten {
    // height: 676px;
    position: relative;
    margin: 0 45px 23px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.video-tips {
  position: absolute;
  bottom: 60px;
  left: calc(50% - 50px);
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 20px;
  color: #ffffff;
  padding: 8px;
  cursor: pointer;
}
.video-tips2{
  position: absolute;
  bottom: 60px;
  left: calc(50% + 50px);
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 20px;
  color: #ffffff;
  padding: 8px;
  cursor: pointer;
}
.exhibitionWrap {
  margin: 0 0 30px;
  .swiperBox {
    padding: 0 30px 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .swiper-wrap {
      width: 25%;
      box-sizing: border-box;
      padding: 0 15px 20px;
    }
    .swiper-item {
      transition: all 0.2s;
      height: 290px;
      background: #ffffff;
      box-shadow: 0px 0px 20px 4px rgba(204, 204, 204, 0.1);
      border-radius: 6px;
      box-sizing: border-box;
      padding-top: 30px;
      //padding-left: 20px;
      text-align: center;

      cursor: pointer;
      .name {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: normal;
        color: #333333;
      }
      .imgWrap {
        width: 100%;
        height: 130px;
        margin: 25px 0 16px;
        img {
          max-width: 70%;
          max-height: 80%;
        }
      }
      .numBox {
        text-align: center;
        //margin-top: 13px;
        margin-top: -20px;
        padding: 0 30px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #333333;
        font-size: 16px;
        .num {
          color: #2884ec;
          font-size: 24px;
        }
      }
    }
    .swiper-item:hover {
      transform: scale(1.1, 1.1);
    }
    .swiperButton {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 19px;
      height: 71px;
      background: rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 9px;
        height: 16px;
      }
    }
    .next {
      right: 0;
    }
    .prev {
      left: 0;
    }
  }
}

.liveWrap {
  .liveList {
    padding: 0 45px;
    position: relative;
    .listItem {
      width: 360px;
       text-align: center;
       .liveStatus {
          position: absolute;
          width: 330px;
          height: 80px;
          bottom: 39px;
          right: 105px;
          border-radius: 40px;
          display: flex;
          vertical-align: middle;
          align-items: center;
          text-align: center;
          background-color: #fff;
          cursor: pointer;
          .liveText {
            color: #256BEF;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            line-height: 30px;
          }
        }
        .liveStatus1 {
          justify-content: center;
          .living {
            color: #256BEF;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            line-height: 30px;
          }
        }
        .liveStatus2 {
          justify-content: center;
          .living {
            color: #256BEF;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            line-height: 30px;
          }
        }
        .liveStatus3 {
          justify-content: center;
          .living {
            color: #256BEF;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            line-height: 30px;
          }
        }
      .liveImgBox:hover {
        .playBtn {
          display: block;
        }
      }
      .liveImgBox {
        cursor: pointer;
        width: 702px;
        height: 380px;
        overflow: hidden;
        position: absolute;
        left: 85px;
        top: 30px;
        .liveImg {
          width: 100%;
          height: 100%;
        }
        .playBtn {
          display: none;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.42);
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;
          > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 78px;
            width: 78px;
            cursor: pointer;
          }
        }
      }
      .liveTitle {
        font-size: 20px;
        font-family: SourceHanSansSC;
        font-weight: 500;
        color: #ffffff;
      }
      .liveDes {
        margin-top: 15px;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #dfdfdf;
        line-height: 25px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .liveTime {
        margin-top: 15px;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #dfdfdf;
      }
    }
  }
}

.honouredGuestWrap {
  margin-top: 20px;
  .honouredGuestList {
    width: 1200px;
    transition: all 0.2s;
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
    .listItem {
      width: 220px;
      // margin: 20 12px;
      // width: calc(25% - 50px);
      // margin: 10px 25px 90px;
      height: 206px;
      background: #ffffff;
      border-radius: 10px;
      text-align: center;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.1, 1.1);
      }
      .headPortrait {
        width: 80px;
        height: 80px;
        margin-top: -40px;
        border-radius: 10px;
      }
      .name {
        font-size: 24px;
        font-family: SourceHanSansSC;
        font-weight: bold;
        color: #333333;
        margin: 30px 0 20px;
      }
      .company {
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #1d1951;
        line-height: 30px;
        padding: 0 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .position {
        height: 70px;
        padding: 0 5px;
        font-size: 16px;
        line-height: 19px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        >span{
          display: block;
          overflow: hidden;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
    .listItem:nth-of-type(1){
      margin-left: 0!important;
    }
  }
}

.sponsorWrap {
  .sponsorList {
    display: flex;
    flex-wrap: wrap;
    margin: 0 39px;
    .sponsorItem {
      width: 189px;
      margin: 0 6px 50px;
      transition: all 0.2s;
      cursor: pointer;
      .logoBox {
        height: 72px;
        width: 100%;
        background: #fff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo {
          max-width: 90%;
          max-height: 95%;
        }
      }
      .sponsorName {
        line-height: 50px;
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
      }
    }
    .sponsorItem:hover {
      transform: scale(1.1);
    }
  }
}

.newsTopBox {
  padding: 0 45px;
  display: flex;
  .newsImgBox {
    width: 711px;
    height: 406px;
    margin-right: 30px;
    border-radius: 20px;
    overflow: hidden;
    .newsVideo {
      width: 711px;
      height: 406px;

    }
  }
  .newsList {
    flex: 1;
    height: 406px;
    background: #ffffff;
    border-radius: 10px;
    padding: 0 20px;
    .listHeader {
      height: 50px;
      border-bottom: 1px solid #e7e7e7;

      .item {
        font-size: 20px;
        font-family: SourceHanSansSC;
        font-weight: bold;
        color: #343434;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f47825;
        margin-bottom: -1px;
        display: inline-block;
      }
    }
    .listBox {
      padding: 10px 0;
      .listItem {
        height: 30px;
        font-size: 16px;
        font-family: SourceHanSansSC;
        font-weight: 500;
        color: #343434;
        line-height: 36px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        box-sizing: border-box;
        >span{
          cursor: pointer;
        }
        >span:hover{
          color: #f47825;
        }
      }
    }
  }
}
.newsBottonList {
  padding: 30px;
  display: flex;
  .newsItem {
    cursor: pointer;
    height: 490px;
    background: #ffffff;
    border-radius: 10px;
    width: 380px;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 15px;
    transition: all 0.2s;
    .imgBox {
      width: 340px;
      height: 216px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin-top: 20px;
      font-size: 20px;
      font-family: SourceHanSansSC;
      font-weight: 500;
      color: #1d1d20;
      line-height: 30px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 60px;
    }
    .newsContent {
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #1d1d20;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      line-height: 30px;
      height: 120px;
      img {
        display: none;
      }
    }
    .dete {
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #999999;
      margin-top: 16px;
    }
  }
  .newsItem:hover {
    transform: scale(1.05);
  }
}
</style>
<style>
.vjs-custom-skin > .video-js {
  width: 100%;
  height: 680px !important;
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
    "Microsoft YaHei", "微软雅黑", sans-serif;
}
.threeJs{
  width: 100%;
  height: 360px !important;
}


.vjs-custom-skin .vjs_video_3-dimensions {
  height: 680px !important;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline.vjs-slider-active,
.vjs-custom-skin > .video-js .vjs-menu-button-inline:focus,
.vjs-custom-skin > .video-js .vjs-menu-button-inline:hover,
.video-js.vjs-no-flex .vjs-menu-button-inline {
  width: 10em;
  height: 680px !important;
}

.vjs-custom-skin > .video-js .vjs-controls-disabled .vjs-big-play-button {
  display: none !important;
}

.vjs-custom-skin > .video-js .vjs-control {
  width: 3em;
}

.vjs-custom-skin > .video-js .vjs-control.vjs-live-control {
  width: auto;
  padding-left: 0.5em;
  letter-spacing: 0.1em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline:before {
  width: 1.5em;
}

.vjs-menu-button-inline .vjs-menu {
  left: 3em;
}

.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button,
.video-js.vjs-ended .vjs-big-play-button,
.video-js.vjs-paused .vjs-big-play-button {
  display: block;
}

.vjs-custom-skin > .video-js .vjs-load-progress div,
.vjs-seeking .vjs-big-play-button,
.vjs-waiting .vjs-big-play-button {
  display: none !important;
}

.vjs-custom-skin > .video-js .vjs-mouse-display:after,
.vjs-custom-skin > .video-js .vjs-play-progress:after {
  padding: 0 0.4em 0.3em;
}

.video-js.vjs-ended .vjs-loading-spinner {
  display: none;
}

.video-js.vjs-ended .vjs-big-play-button {
  display: block !important;
}

.video-js.vjs-ended .vjs-big-play-button,
.video-js.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: block;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-left: -1.5em;
  margin-top: -1em;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  background-color: rgba(0, 0, 0, 0.45);
  font-size: 3.5em;
  /*border-radius: 50%;*/
  height: 2em !important;
  line-height: 2em !important;
  margin-top: -1em !important;
}

.video-js:hover .vjs-big-play-button,
.vjs-custom-skin > .video-js .vjs-big-play-button:focus,
.vjs-custom-skin > .video-js .vjs-big-play-button:active {
  background-color: rgba(36, 131, 213, 0.9);
}

.vjs-custom-skin > .video-js .vjs-loading-spinner {
  border-color: rgba(36, 131, 213, 0.8);
}

.vjs-custom-skin > .video-js .vjs-control-bar2 {
  background-color: #000000;
}

.vjs-custom-skin > .video-js .vjs-control-bar {
  /*background-color: rgba(0,0,0,0.3) !important;*/
  color: #ffffff;
  font-size: 14px;
}

.vjs-custom-skin > .video-js .vjs-play-progress,
.vjs-custom-skin > .video-js .vjs-volume-level {
  background-color: #2483d5;
}

.vjs-custom-skin > .video-js .vjs-play-progress:before {
  top: -0.3em;
}

.vjs-custom-skin > .video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.3em;
}

.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
  left: 0em;
}

.vjs-custom-skin > .video-js .vjs-menu li {
  padding: 0;
  line-height: 2em;
  font-size: 1.1em;
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
    "Microsoft YaHei", "微软雅黑", sans-serif;
}

.vjs-custom-skin > .video-js .vjs-time-tooltip,
.vjs-custom-skin > .video-js .vjs-mouse-display:after,
.vjs-custom-skin > .video-js .vjs-play-progress:after {
  border-radius: 0;
  font-size: 1em;
  padding: 0;
  width: 3em;
  height: 1.5em;
  line-height: 1.5em;
  top: -3em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-popup .vjs-menu {
  width: 5em;
  left: -1em;
}

.vjs-custom-skin
  > .video-js
  .vjs-menu-button-popup.vjs-volume-menu-button-vertical
  .vjs-menu {
  left: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-menu {
  /*order: 4;*/
}

/*排序顺序*/
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control {
  order: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control {
  min-width: 1em;
  padding: 0;
  margin: 0 0.1em;
  text-align: center;
  display: block;
  order: 1;
}

.vjs-custom-skin
  > .video-js
  .vjs-control-bar
  .vjs-playback-rate
  .vjs-playback-rate-value {
  font-size: 1.2em;
  line-height: 2.4;
}

.vjs-custom-skin > .video-js .vjs-progress-control.vjs-control {
  order: 2;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-volume-menu-button {
  order: 3;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button {
  order: 4;
}

.vjs-custom-skin
  > .video-js
  .vjs-control-bar
  .vjs-resolution-button
  .vjs-resolution-button-label {
  display: block;
  line-height: 3em;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
  order: 5;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
  order: 6;
}
</style>
