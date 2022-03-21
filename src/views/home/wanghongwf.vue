<template>
  <div>
    <div>
      <img src="../../assets/images/home/wh_wf.png" width="100%"  /></div>
    <div class="commonContent">
      <!-- 标题 -->
      <div class="title"><div class="title-txt">潍坊宣传短片系列</div></div>
      <!-- 播放列表 -->
      <div class="play">
        <div class="play-item">
          <img src="../../assets/images/home/wh_wf2.png" />
          <div class="play-info">
            <div class="play-time">心向潍坊</div>
            <div class="play-icon">
              <div class="play-icon-img">
                <img src="../../assets/images/home/wh_bofang.png" />
                6:41
              </div>
              <div class="play-play" @click="bofang('http://218.59.142.236/videosjava/wf_brief_introduction.mp4')">播放</div>
            </div>
          </div>
        </div>
        <div class="play-item">
          <img src="../../assets/images/home/wh_wf3.png" />
          <div class="play-info">
            <div class="play-time">在城市更新中“变革”</div>
            <div class="play-icon">
              <div class="play-icon-img">
                <img src="../../assets/images/home/wh_bofang.png" />
                1:05
              </div>
              <div class="play-play" @click="bofang('http://mpvideo.qpic.cn/0bf2guaaiaaa54aboh3ruvqvanodaq2qabaa.f10002.mp4?dis_k=642542d068f07ef3d66f09802dd00a02&dis_t=1634973863&vid=wxv_2100647230763302913&format_id=10002&support_redirect=0&mmversion=false')">播放</div>
            </div>
          </div>
        </div>

        <!--        <div class="play-item">
                  <img src="http://hlstore.yimetal.cn/14e1c79e-32cc-829e-492e-94b8a87e1390.png" />
                  <div class="play-info">
                    <div class="play-time">潍坊5分钟</div>
                    <div class="play-icon">
                      <div class="play-icon-img">
                        <img src="../../assets/images/home/wh_bofang.png" />
                        7:02
                      </div>
                      <div class="play-play" @click="bofang('http://218.59.142.236:9002/java/storage/gaoxin.mp4')">播放</div>
                    </div>
                  </div>
                </div>-->
      </div>
      <!-- 标题 -->
      <div class="title2"><div class="title-txt">热点资讯</div></div>
      <!-- 咨询内容 -->
      <div class="zixun">
        <div class="zixun-item" v-for="(item, index) in newsData" @mouseover="mouseOverNewsData(index)" @mouseleave="leaveNewsData()" v-if="index<3">
          <div class="zixun-title">
            <span class="zixun-title1">热门话题</span>
            {{ item.title }}
            <span class="zixun-title2" @click="item.flag === 2 ? toPage('/newsInfo?id=' + item.newsId) : newOpen(item.refUrl)" >[快来瞅瞅]</span>
          </div>
          <div class="zixun-txt" v-html="item.content">

          </div>
        </div>
      </div>
      <!-- 底部-历史人文 -->
      <div class="wf-history">
        <div class="wf-icon"><img @click="next_zuo" src="../../assets/images/home/wf-zuo.png" /></div>
        <div class="wf-info">
          <div class="wf-cent">
            <img :src="wfData[wfData_index].pic" style="width: 95%;margin: 0 auto;" />
            <!-- <div class="wf-cent-icon">
              <img :src="wfData[wfData_index].icon" />
              <div class="wf-cent-test">{{ wfData[wfData_index].test }}</div>
            </div> -->
          </div>
          <div class="bot-icon">
            <div v-for="(item, index) in wfData" @click="wfData_index = index"><div :class="wfData_index == index ? 'wfData_y' : 'wfData_n'"></div></div>
          </div>
        </div>
        <div class="wf-icon"><img @click="next_you" src="../../assets/images/home/wf-you.png" /></div>
      </div>
    </div>
    <!-- 播放器 -->
    <div v-if="show" class="mark">
      <img @click="show = false" src="../../assets/images/exhibition/close.png" />
      <video
        width="700px"
        height="600px"
        preload
        :src="playUrl"
        controls="controls"
      >您的浏览器不支持 video 标签。</video>
    </div>
    <!-- 背景图片 -->
    <img class="bg-img" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsData: [],
      wfData: [
        {
          pic: require('../../assets/images/home/wh-wf-d1.jpg')
        },
        {
          pic: require('../../assets/images/home/wh-wf-d2.jpg')
        },
        {
          pic: require('../../assets/images/home/wh-wf-d3.jpg')
        },
        {
          pic: require('../../assets/images/home/wh-wf-d4.jpg')
        },
        {
          pic: require('../../assets/images/home/wh-wf-d5.jpg')
        }
      ],
      wfData_index: 0,
      playUrl: '',
      show: false
    };
  },

  mounted() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      this.$http({
        url: this.$http.adornUrl(`/index/news`),
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 10,
          type: 3
        })
      }).then(({ data }) => {

        this.newsData = data.data.list || [];
        console.log(this.newsData[0].content );
      });
    },
    mouseOverNewsData(index) {
      this.newsData_index = index;
    },
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url
      });
    },
    newOpen(url) {
      window.open(url);
    },
    leaveNewsData() {
      this.newsData_index = null;
    },
    next_zuo() {
      if (this.wfData_index == 0) {
        this.wfData_index = 4;
      } else {
        this.wfData_index = this.wfData_index - 1;
      }
    },
    next_you() {
      if (this.wfData_index == 4) {
        this.wfData_index = 0;
      } else {
        this.wfData_index = this.wfData_index + 1;
      }
    },

    bofang(url) {
      this.show = true;
      this.playUrl = url;
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #d3d3d3;
  margin: 30px 0;
}
.title .title-txt {
  width: 432px;
  font-size: 54px;
  font-weight: 600;
  color: #333333;
  line-height: 75px;
  margin-bottom: 30px;
}
.title2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title2 .title-txt {
  font-size: 54px;
  font-weight: 600;
  color: #333333;
  line-height: 75px;
  margin-bottom: 30px;
}

.play {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 81px;
}
.play-item {
  width: 600px;
  height: 470px;
  background: #ffffff;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  text-align: center;
}
.play-item img {
  padding-top: 10px;
  width: 90%;
  height: 325px;

}
.play-info {
}
.play-time {
  width: 333px;
  height: 40px;
  font-size: 28px;
  text-align: left;
  font-weight: 500;
  color: #51565d;
  line-height: 40px;
  padding: 28px 20px 10px 20px;
}
.play-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.play-icon-img {
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 400;
  color: #999999;
  line-height: 30px;
}
.play-icon-img img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.play-play {
  width: 92px;
  height: 34px;
  border-radius: 4px;
  border: 1px solid #5d9afe;
  font-size: 18px;
  font-weight: 500;
  color: #5d9afe;
  line-height: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
}

.zixun {
  height: 390px;
  background: #ffffff;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 281px;
}
.zixun-title {
  font-size: 20px;
  font-weight: 400;
  color: #1c1c1c;
  line-height: 28px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.zixun-title1 {
  width: 69px;
  height: 25px;
  background: rgba(93, 154, 254, 0.17);
  border-radius: 3px;
  border: 1px solid #5d9afe;
  font-size: 14px;
  font-weight: 400;
  color: #5d9afe;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
}
.zixun-title2 {
  width: 94px;
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  color: #5d9afe;
  line-height: 28px;
  margin-left: 13px;
}
.zixun-txt {
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #636363;
  line-height: 32px;
  border-bottom: 1px solid #eeeff0;
  margin-bottom: 20px;
}
.border-0 {
  margin-bottom: 0px;
  padding-bottom: 0px;
  border-bottom: 0px;
}

.wf-history {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 200px;
}
.wf-icon {
}
.wf-info {
}
.wf-cent {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 27px;
}
.wf-cent-icon {
  width: 540px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  margin-left: -152px;
}
.wf-cent-icon img {
  padding: 30px;
}
.wf-cent-test {
  padding: 0px 35px;
  font-size: 20px;
  font-weight: 600;
  color: #666666;
  line-height: 28px;
}
.bot-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wfData_y {
  width: 27px;
  height: 27px;
  background: #5c9afe;
  border-radius: 50%;
  margin-right: 18px;
}
.wfData_n {
  width: 27px;
  height: 27px;
  background: #d8d8d8;
  border-radius: 50%;
  margin-right: 18px;
}
.bg-img {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: -1;
}

.mark {
  background-color: #fff;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 700px;
  position: fixed;
  border-radius: 4px;
  box-shadow: 0px 8px 25px 8px rgba(169, 167, 167, 0.3);
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mark img {
  position: absolute;
  right: 20px;
  top: 20px;
}
video {
  border: 1px solid #0000;
}
</style>
