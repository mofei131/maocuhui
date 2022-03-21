<template>
  <div>
    <div class="right_Content">
      <div class="headName">拟邀嘉宾</div>
      <div class="mflan"></div>
      <div class="mfhui"></div>
      <div class="font_content">

        <!-- 嘉宾详情 -->
        <div class="guestDetil">
          <div class="cont">
            <div class="left">
              <img :src="guestInfo.headUrl?guestInfo.headUrl:''" alt :width="'120px'" :height="'160px'"/>
            </div>
            <div class="middle">
              <p class="tit">{{ guestInfo.name }}</p>
              <span class="tag">{{ guestInfo.position }}</span>
            </div>
          </div>
        </div>
        <!-- 嘉宾介绍 -->
        <div class="guestIntr">
          <div class="commonTitleWrap">
            <span class="sx"></span>
            <div class="title">嘉宾介绍</div>
          </div>
          <div class="cont">
            <div class="intrPro">
              <div class="left">
                <p
                  ref="mycontent"
                  v-html="guestInfo.intro"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guestInfo: {},
      act: true
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    init() {
      let base = this.$http.adornUrl("/guest");
      this.$http
        .get(`${base}/${this.$route.query.id}`)
        .then(({ data: res }) => {
          if (res.code == 1) {
            this.guestInfo = res.data;
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.right_Content {
  /*float: left;
  width: 950px;
  margin: 20px 0 0 30px;*/
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  // height: 821px;
  padding-left: 55px;
}
.mfhui{
  width: 896px;
  border-bottom: 1px solid #EEEFF0;
  margin-bottom: 40px;
}
.mflan{
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
}
.headName{
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 26px;
  height: 55px;
  text-align: start;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  //line-height: 50px;

  //   嘉宾详情
  .guestDetil {
    .cont {
      display: flex;
      height: 200px;
      align-items: center;
      position: relative;
      .left {
        margin-right: 20px;
        width: 180px;
        line-height: 110px;
        background: #ffffff;
        box-shadow: 0px 1px 4px 0px rgba(203, 203, 203, 0.2);
        border-radius: 15px;
        text-align: center;
      }
      .middle {
        .tit {
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #656565;
          margin-bottom: 19px;
        }
        .tag {
          padding: 6px 10px;
          margin-right: 15px;
          border-radius: 5px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #4aaae9;
          text-align: center;
          display: inline-block;
          background: #cee6f6;
        }
      }
    }
  }
  //   嘉宾介绍
  .guestIntr {
    .cont {
      .intrPro {
        text-align: center;
        > p {
          margin-top: 30px;
        }
        .left {
          position: relative;
          p {
            text-indent: 40px;
            margin-top: 13px;
            font-size: 18px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            text-align: justify;
            color: #222222;
            line-height: 28px;
            overflow: hidden;
            padding: 5px 20px;
          }
          > div {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 86px;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.63) 0%,
              rgba(255, 255, 255, 0.95) 54%,
              #ffffff 100%
            );
          }
        }
      }
    }
  }
  .commonTitleWrap {
    padding: 0 30px;
    height: 100px;
    display: flex;
    align-items: center;
    .sx {
      width: 4px;
      height: 32px;
      background: #01edfd;
      border-radius: 2px;
    }
    .title {
      margin-left: 13px;
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #333333;
    }
  }
}
</style>
