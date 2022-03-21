<template>
  <div class="exhibitionDetilBox">
    <div style="overflow:hidden;width:1200px;margin:0 auto">
      <div class="goback clickItem" style="float:left" @click="prev()">
        <img src="../../assets/images/exhibition/back.png" alt />
        {{ $t('back') }}
      </div>
    </div>
    <!-- <div class="topImage">
      <img src="../../assets/images/exhibition/topImageDet.png" alt />
    </div> -->
    <!-- 展商详情 -->
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
    <div class="exhibitionDetil" style="position: relative; /*z-index: 1000;*/">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('businessmanDet.t1') }}</div>
      </div>
      <div class="cont">
        <div class="left">
          <Autoimg :url="busInfo.logoUrl" :width="'200px'" :height="'110px'" :border="false" />
          <!-- <p>
            <img :src="myimgHandle(busInfo.logoUrl)" alt="" />
          </p> -->
        </div>
        <div class="middle">
          <p class="tit">{{ busInfo.name }}
            <!--            <span class="website" @click="goPage(busInfo.homepage)" v-if="busInfo.homepage"><li class="el-icon-connection"></li>官方网站：{{ busInfo.homepage }}</span>-->
          </p>
          <!--          <span v-show="busInfo.stadium" class="tag">{{ busInfo.stadium }}</span>-->
          &nbsp;&nbsp;<span
          v-for="(i, index) of busInfo.categories"
          :key="index"
          class="tag"
        >{{ i.name }}</span>
          <p class="contact">
            <span class="website" @click="goPage(busInfo.homepage)" v-if="busInfo.homepage"><li class="el-icon-connection"></li> {{ busInfo.homepage }}</span>
            <span class="email" v-if="busInfo.email"><li class="el-icon-message"></li> {{ busInfo.email }}</span>
            <!--            <span class="phone" v-if="busInfo.telephone"><li class="el-icon-phone-outline"></li> {{ busInfo.telephone }}</span>-->
          </p>
        </div>
        <div class="right">
          <div class="c1">
            <img src="../../assets/icon/浏览.png" alt />
            <span>{{ busInfo.viewCount }}{{ $t('businessmanDet.t2') }}</span>
          </div>
          <div class="c2">
            <img
              class="clickItem"
              @click="favHandle(1)"
              v-if="busInfo.favorite == 0"
              src="../../assets/icon/b-1.png"
              alt
            />
            <img
              v-if="busInfo.favorite == 1"
              src="../../assets/icon/b-2.png"
              alt
              @click="favHandle(0)"
            />
            <span>{{ $t('businessmanDet.t3') }}</span>
          </div>
        </div>
      </div>
      <div class="shareBox">
        <div class="clickItem" @click="zxqtHandle">
          <img src="../../assets/icon/在线洽谈.png" alt />
          <span>{{ $t('businessmanDet.t4') }}</span>
        </div>
        <div class="clickItem" @click="zanHandle(busInfo.praise == 0?1:0)">
          <img v-if="busInfo.praise == 0" src="../../assets/icon/a-1.png" alt />
          <img
            v-if="busInfo.praise == 1"
            src="../../assets//icon/a-2.png"
            alt
          />
          <span :class="busInfo.praise == 1 ? 'zaned' : ''">{{ $t('businessmanDet.t5') }}</span>
        </div>
        <div v-show="false" class="clickItem">
          <img src="../../assets/images/exhibition/share.png" alt />
          <span>{{ $t('businessmanDet.t6') }}</span>
        </div>
      </div>
    </div>
    <!-- 企业介绍 -->
    <div class="companyIntr" style="position: relative; /*z-index: 1000;*/">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('businessmanDet.t7') }}</div>
      </div>
      <div class="cont">
        <div class="intrPro">
          <video
            v-if="busInfo.videoUrl"
            class="proImg"
            :src="busInfo.videoUrl"
            controls="controls"
          />
          <div class="left">
            <!-- <h4>{{busInfo.name}}</h4> -->
            <p
              ref="mycontent"
              :class="{ setHeight: show }"
              v-html="busInfo.intro"
            ></p>
            <div v-if="show">
              <el-button class="unfold" @click="show = !show"
              >{{ $t('businessmanDet.t8') }}<i class="el-icon-arrow-down el-icon--right"
              /></el-button>
            </div>
          </div>
          <p v-if="!show && noshow">
            <el-button class="unfold" @click="show = !show"
            >{{ $t('businessmanDet.t9') }}<i class="el-icon-arrow-up el-icon--right"
            /></el-button>
          </p>
        </div>
        <div class="intrImgBox">
          <div class="imgBox">
            <Autoimg v-for="(i, index) in imgUrlsHandle(busInfo.imgUrls)" :key="index" :url="i" :width="'calc((100% - 120px) / 3)'" :height="'200px'" :style="{ marginRight: (index + 1) % 3 !== 0 ? '60px' : '0px' }" />
          </div>
        </div>
      </div>
    </div>
    <!-- 相关展品 -->
    <div class="relationPro" style="position: relative; z-index: 1000;">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title" style="flex: 1">{{ $t('businessmanDet.t10') }}</div>
        <!-- <div
          class="more clickItem"
          v-if="exhibitionList.length != 0 && exhibitionList.length > 6"
        >
          <span>更多</span>
          <img src="../../assets/images/exhibition/more.png" alt />
        </div> -->
      </div>
      <div class="exhibitionListBox" v-if="exhibitionList.length != 0">
        <div
          class="exhibition clickItem"
          v-for="(item, index) in exhibitionList"
          :key="index"
          :style="{ marginRight: (index + 1) % 4 !== 0 ? '20px' : '0px' }"
          @click="toPage('/exhibitDetil?id=' + item.id)"
        >
          <Autoimg :url="myimgHandle(item.logoUrl)" :width="'285px'" :height="'158px'" />
          <!-- <div class="imgBox">
            <img
              :src="myimgHandle(item.logoUrl)"
              alt
              onerror="onerror=null;src='@/assets/images/exhibition/default.png'"
            />
          </div> -->
          <span class="line"></span>
          <p class="tit" :title="item.name">{{ item.name }}</p>
          <p class="company" :title="item.exhibitorName">
            {{ item.exhibitorName }}
          </p>
        </div>
      </div>
      <div v-else class="noData">
        <h4>{{ $t('businessmanDet.t11') }}</h4>
      </div>
    </div>
    <!--    <div class="xunpan" @click="fbgxHandle()">
          <img src="@/assets/images/exhibition/xp.png" alt="" />
          <p>{{ $t('businessmanDet.t12') }}</p>
        </div>-->
    <Mylogin :visible.sync="visible" />
    <Myzxqt :visible.sync="zxqtVisible" :exhibitorId="busInfo.id" />
    <Myfbgx :visible.sync="fbgxVisible" :mytype="0" />
  </div>
</template>

<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
import Mylogin from "./compontent/mylogin";
import Myzxqt from "./compontent/zxqt";
import Myfbgx from "./compontent/fbgx";
export default {
  components: { Mylogin, Myzxqt, Myfbgx, Autoimg },
  data() {
    return {
      busInfo: {},
      exhibitionList: [],
      visible: false,
      zxqtVisible: false,
      fbgxVisible: false,
      show: false,
      noshow: true,
      act: true
    };
  },
  mounted() {
    this.init();
    this.getRelatedPro();
  },
  methods: {
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url,
      });
    },
    goPage(url) {
      window.location.href = url;
    },
    getRelatedPro() {
      let base = this.$http.adornUrl("/exhibitor/product/list");
      this.$http
        .get(`${base}?page=1&pageSize=12&exhibitorId=${this.$route.query.id}`)
        .then(({ data: res }) => {
          if (res.code == 1) {
            if (res.data.total == 0) {
              this.exhibitionList = [];
            } else {
              this.exhibitionList = res.data.list;
            }
          }
        })
        .catch(() => {});
    },
    prev() {
      this.$router.go(-1);
    },
    //展商点赞
    zanHandle(status) {
      this.islogin().then(() => {
        let base = this.$http.adornUrl("/exhibitor/praise");
        let params = {
          exhibitorId: this.busInfo.exhibitorId,
          status
        };
        this.$http
          .post(`${base}`, params)
          .then(({ data: res }) => {
            // console.log(res);
            if (res.code == 1) {

              this.busInfo.praise = +!this.busInfo.praise;
              if (this.busInfo.praise == 0) {
                this.$message({
                  message: this.$t('businessmanDet.t16'),
                  type: "warning",
                });
              } else {
                this.$message({
                  message: this.$t('businessmanDet.t14'),
                  type: "success",
                });
              }
              // this.init();
            }
          })
          .catch(() => {});
      });
    },
    //展商收藏
    favHandle(status) {
      this.islogin().then(() => {
        let base = this.$http.adornUrl("/exhibitor/favorite");
        let params = {
          exhibitorId: this.busInfo.exhibitorId,
          status: status,
        };
        this.$http
          .post(`${base}`, params)
          .then(({ data: res }) => {
            if (res.code == 1) {
              if (status) {
                this.$message({
                  message: this.$t('businessmanDet.t15'),
                  type: "success",
                });
              } else {
                this.$message({
                  message: this.$t('businessmanDet.t16'),
                });
              }
              this.busInfo.favorite = +!this.busInfo.favorite;
              // this.init();
            }
          })
          .catch((err) => {
            this.$message.warning(this.$t('businessmanDet.t17') + err);
          });
      });
    },
    init() {
      let base = this.$http.adornUrl("/exhibitor");
      this.$http
        .get(`${base}/${this.$route.query.id}`)
        .then(({ data: res }) => {
          // console.log(res);
          if (res.code == 1) {
            this.busInfo = res.data;

            if(this.busInfo  && this.busInfo.videoUrl){
              this.busInfo.videoUrl = this.busInfo.videoUrl.replace("/java/storage","/videosjava")
            }

            console.log(this.busInfo.imgUrls);
            this.$nextTick(() => {
              // console.log(this.$refs.mycontent.offsetHeight)
              if (this.$refs.mycontent.offsetHeight > 200) {
                this.show = true;
              } else {
                this.noshow = false;
              }
            });
          }
        })
        .catch(() => {});
    },
    islogin() {
      return new Promise((r, e) => {
        if (localStorage.getItem("token")) {
          r();
        } else {
          this.visible = true;
          e();
        }
      });
    },
    zxqtHandle() {
      this.islogin().then(() => {
        this.zxqtVisible = true;
      });
    },
    fbgxHandle() {
      this.islogin().then(() => {
        this.fbgxVisible = true;
      });
    },
    myimgHandle(i) {
      if (i === null || i === "" || i === undefined) {
        return require("@/assets/images/exhibition/default.png");
      } else {
        var str = "";
        for (const j of i.split(",")) {
          if (j) {
            str = j;
            break;
          }
        }
        return str;
      }
    },
    imgUrlsHandle(imgUrls) {
      var arr = []
      var n = 0
      if (imgUrls) {
        for (const i of imgUrls.split(',')) {
          if (i) {
            arr.push(i)
            n++
          }
          /*if(n >= 3){
            break
          }*/
        }
      }
      return arr
    }
  },
};
</script>

<style lang="scss" scoped>
.ditu{
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  /*z-index: 1;*/
}
.exhibitionDetilBox {
  position: relative;
  .clickItem {
    cursor: pointer;
  }

  .goback {
    // width: 1200px;
    padding: 17px 0;
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #434343;
    margin: 0 auto;
    img {
      width: 11px;
      height: 18px;
    }
  }
  .topImage {
    img {
      width: 100%;
    }
  }
  //   展商详情
  .exhibitionDetil {
    width: 1200px;
    margin: 0 auto;
    .cont {
      display: flex;
      height: 110px;
      align-items: center;
      position: relative;
      .left {
        margin-right: 40px;
        width: 200px;
        height: 110px;
        line-height: 110px;
        background: #ffffff;
        box-shadow: 0px 1px 4px 0px rgba(203, 203, 203, 0.2);
        border-radius: 15px;
        text-align: center;
        > p {
          width: 200px;
          height: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
          > img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      .middle {
        .tit {
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #656565;
          margin-bottom: 19px;
        }
        .website{
          font-size: 20px;
          padding-left: 50px;
          cursor: pointer;
        }
        .contact {
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #656565;
          margin-top: 0.25em;
          margin-bottom: 19px;
          .website{
            font-size: 20px;
            padding-left: 10px;
            cursor: pointer;
          }
          .email{
            font-size: 20px;
            padding-left: 10px;
          }
          .phone {
            font-size: 20px;
            padding-left: 10px;
          }
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
          >a {
            color: #4aaae9;
          }
        }

      }
      .right {
        position: absolute;
        right: 0;
        .c1 {
          font-size: 14px;
          font-family: FZLanTingHei-EL-GBK;
          font-weight: 400;
          color: #999999;
          display: flex;
          align-items: center;
          img {
            width: 22px;
            margin-right: 5px;
          }
        }
        .c2 {
          margin-top: 30px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #656565;
          display: flex;
          align-items: center;
          img {
            width: 22px;
            height: 22px;
            margin-right: 8px;
          }
        }
      }
    }
    .shareBox {
      padding: 33px 0;
      display: flex;
      div {
        margin-right: 50px;
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
          margin-right: 9px;
        }
        span {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #656565;
        }
        .zaned {
          color: #2884ec;
        }
      }
    }
  }
  //   企业介绍
  .companyIntr {
    width: 1200px;
    margin: 0 auto;
    .cont {
      .intrPro {
        text-align: center;
        > p {
          margin-top: 30px;
          .unfold {
            width: 196px;
            height: 40px;
            padding: 0;
            line-height: 40px;
            text-align: center;
            border: none;
            background-color: #2884ec;
            color: #fff;
            border-radius: 30px;
          }
        }
        .left {
          position: relative;
          h4 {
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 600;
            color: #222222;
            margin-top: 10px;
          }
          p {
            text-indent: 40px;
            margin-top: 13px;
            font-size: 18px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            text-align: justify;
            color: #222222;
            line-height: 40px;
            overflow: hidden;
          }
          .setHeight {
            height: 200px;
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
            .unfold {
              position: relative;
              top: 70px;
              width: 196px;
              height: 40px;
              padding: 0;
              line-height: 40px;
              text-align: center;
              border: none;
              background-color: #2884ec;
              color: #fff;
              border-radius: 30px;
            }
          }
        }
        .proImg {
          border: 1px solid #f5f5f5;
          width: 694px;
          background: #e4e4e4;
        }
      }
      .intrImgBox {
        margin: 50px 0 0;
        .more {
          padding: 31px;
          font-size: 20px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #434343;
          text-align: right;
          img {
            width: 11px;
            height: 18px;
          }
        }
        .imgBox {
          display: flex;
          flex-wrap: wrap;
          >.Autoimg{
            margin-bottom: 20px;
            border-radius: 10px;
          }
        }
      }
    }
  }
  //   相关展品
  .relationPro {
    width: 1200px;
    margin: 0 auto;
    .exhibitionListBox {
      margin-bottom: 100px;
      display: flex;
      flex-wrap: wrap;
      .exhibition {
        margin-bottom: 40px;
        margin-right: 20px;
        width: 285px;
        .Autoimg{
          border-radius: 6px;
        }

        .line {
          display: block;
          width: 30px;
          height: 4px;
          margin-left: 19px;
          background: #2783eb;
          border-radius: 2px;
        }
        .tit {
          margin-left: 19px;
          font-size: 18px;
          font-family: SourceHanSansSC;
          font-weight: 500;
          color: #333333;
          // line-height: 50px;
          margin-top: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .company {
          margin-top: 16px;
          margin-left: 19px;
          font-size: 16px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #878787;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .noData {
      padding: 20px 40px 40px;
      font-size: 20px;
    }
  }
  .commonTitleWrap {
    // padding: 0 30px;
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
    .more {
      img {
        width: 11px;
        height: 18px;
        margin-left: 10px;
      }
      span {
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #434343;
      }
    }
  }
  .xunpan {
    position: fixed;
    cursor: pointer;
    right: 75px;
    bottom: 100px;
    border-radius: 50%;
    background-color: #2884ec;
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 30px;
      margin-bottom: 5px;
    }
    p {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
