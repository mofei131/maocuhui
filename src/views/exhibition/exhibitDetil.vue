<template>
  <div class="exhibitDetilBox">
    <div style="overflow:hidden;width:1200px;margin:0 auto">
          <div class="goback clickItem" style="float:left" @click="prev()">
            <img src="../../assets/images/exhibition/back.png" alt />
            {{ $t('back') }}
          </div>
    </div>
    <!-- 展品详情 -->
    <div class="exhibitDet">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('exhibitDetil.t1') }}</div>
      </div>
      <div class="cont">
        <div class="left">
          <ImageSwitcher :imgs="goodsParams.logoUrl" />
        </div>
        <div class="middle">
          <p class="tit">{{ goodsParams.name }}</p>
          <p class="tag">{{ goodsParams.stadium }}</p>
          <p class="intr" :title="goodsParams.intro">{{ goodsParams.intro }}</p>
          <div class="shareBox">
            <div class="clickItem" @click="showDia()">
              <img src="../../assets/icon/添加.png" alt />
              <span>{{ $t('exhibitDetil.t2') }}</span>
            </div>
            <div class="clickItem" @click="zxqtHandle">
              <img src="../../assets/icon/在线洽谈.png" alt />
              <span>{{ $t('exhibitDetil.t3') }}</span>
            </div>
            <div class="clickItem" @click="zanHandle()">
              <img
                v-if="goodsParams.praise == 0"
                src="../../assets/icon/a-1.png"
                alt
              />
              <img
                v-if="goodsParams.praise == 1"
                src="../../assets/icon/a-2.png"
                alt
              />
              <span :class="goodsParams.praise == 1 ? 'zaned' : ''">{{ $t('exhibitDetil.t4') }}</span>
            </div>
            <div v-show="false" class="clickItem">
              <img src="../../assets/images/exhibition/share.png" alt />
              <span>{{ $t('exhibitDetil.t5') }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="c1">
            <img src="../../assets/icon/浏览.png" alt />
            <span>{{ goodsParams.viewCount }}{{ $t('exhibitDetil.t6') }}</span>
          </div>
          <div class="c2">
            <img
              class="clickItem"
              @click="favHandle(1)"
              v-if="goodsParams.favorite == 0"
              src="../../assets/icon/b-1.png"
              alt
            />
            <img
              v-if="goodsParams.favorite == 1"
              src="../../assets/icon/b-2.png"
              alt
              @click="favHandle(0)"
            />
            <span>{{ $t('exhibitDetil.t7') }}</span>
          </div>
        </div>
      </div>

      <!-- 展品参数 -->
<!--      <div class="exhibitParams">
        <h4 class="secondTit">{{ $t('exhibitDetil.t8') }}</h4>
        <div class="paramsBox">
          <span
            v-for="(it, idx) in attributeListHandle(goodsParams.attributeList)"
            :key="idx"
            >{{ it.name }}:{{ it.value }}</span
          >
        </div>
      </div>-->
      <!-- 展品信息 -->
      <div class="exhibitInfo">
        <h4 class="secondTit">{{ $t('exhibitDetil.t9') }}</h4>
        <p>{{ goodsParams.intro }}</p>
      </div>
    </div>
    <!-- 展商信息 -->
    <div class="exhibitionDetil">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('exhibitDetil.t10') }}</div>
      </div>
      <div class="cont" @click="toDet()">
        <Autoimg :url="myimgHandle(goodsParams.exhibitorLogoUrl)" :width="'200px'" :height="'110px'" />
        <!-- <div class="left">
          <img
            :src="myimgHandle(goodsParams.exhibitorLogoUrl)"
            onerror="onerror=null;src='@/assets/images/exhibition/default.png'"
            alt
          />
        </div> -->
        <div class="middle">
          <p class="tit">{{ goodsParams.exhibitorName }}</p>
          <p class="tag">{{ goodsParams.stadium }}</p>
        </div>
      </div>
    </div>
    <!-- 相关展品 -->
    <div class="relationPro">
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title" style="flex: 1">{{ $t('exhibitDetil.t11') }}</div>
        <!-- <div
          class="more"
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
        <h4>{{ $t('exhibitDetil.t12') }}</h4>
      </div>
    </div>
    <div class="xunpan" @click="fbgxHandle()">
      <img src="@/assets/images/exhibition/xp.png" alt="" />
      <p>{{ $t('exhibitDetil.t13') }}</p>
    </div>
    <div v-if="showOrder">
      <orderDia :showOrder="showOrder" :goods="goodsParams" @closeDia="closeDia"></orderDia>
    </div>

    <Mylogin :visible.sync="visible" />
    <Myzxqt
      :visible.sync="zxqtVisible"
      :exhibitorProductId="goodsParams.id"
      :exhibitorId="goodsParams.exhibitorId"
    />
    <Myfbgx :visible.sync="fbgxVisible" :mytype="1" />
  </div>
</template>

<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
import ImageSwitcher from "./compontent/ImageSwitcher";
import Mylogin from "./compontent/mylogin";
import Myzxqt from "./compontent/zxqt";
import Myfbgx from "./compontent/fbgx";
import orderDia from "./compontent/orderDialog";
export default {
  components: {
    ImageSwitcher,
    orderDia,
    Mylogin,
    Myzxqt,
    Myfbgx,
    Autoimg
  },
  data() {
    return {
      showOrder: false,
      goodsParams: {
        id: "434434333",
        size: "200*2000100",
        type: "新款",
        kind: "塑料制品",
        color: "白色",
        resource: "中国江苏",
        from: "中国江苏",
        zz: "绿色环保",
        viewCount: "11",
        attributeList: [],
      },
      exhibitionList: [],
      visible: false,
      zxqtVisible: false,
      fbgxVisible: false,
    };
  },
  watch: {
    $route(val) {
      this.init().then(() => {
        this.getRelatedPro();
      });
    },
  },
  mounted() {
    this.init().then(() => {
      this.getRelatedPro();
    })

    this.$nextTick(()=>{
          // console.log(document.getElementsByClassName('el-tooltip__popper')[0],3)

    })
  },
  methods: {
    //跳转页面
    toPage(url) {
      this.$router.replace({
        path: url,
      });
      window.scrollTo(0,0);
    },
    getRelatedPro() {
      let base = this.$http.adornUrl("/exhibitor/product/list");
      this.$http
        .get(
          `${base}?page=1&pageSize=12&exhibitorId=${this.goodsParams.exhibitorId}`
        )
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
    showDia() {
      this.islogin().then(() => {
        this.showOrder = true;
      });
    },
    prev() {
      this.$router.go(-1);
    },
    //展品点赞
    zanHandle(item, index) {
      this.islogin().then(() => {
        let base = this.$http.adornUrl("/exhibitor/product/praise");
        let params = {
          exhibitorProductId: this.goodsParams.exhibitorProductId,
          status: this.goodsParams.praise == 1?0:1,
        };
        this.$http
          .post(`${base}`, params)
          .then(({ data: res }) => {
            if (res.code == 1) {
              this.goodsParams.praise = +!this.goodsParams.praise;
              if (this.goodsParams.praise == 0) {
                this.$message({
                  message: this.$t('exhibitDetil.t16'),
                  type: "warning",
                });
              } else {
                this.$message({
                  message: this.$t('exhibitDetil.t14'),
                  type: "success",
                });
              }
            }
          })
          .catch(() => {});
      });
    },
    //展品收藏
    favHandle(status) {
      this.islogin().then(() => {
        let base = this.$http.adornUrl("/exhibitor/product/favorite");
        let params = {
          exhibitorProductId: this.goodsParams.exhibitorProductId,
          status: status,
        };
        this.$http
          .post(`${base}`, params)
          .then(({ data: res }) => {
            if (res.code == 1) {
              if (status) {
                this.$message({
                  message: this.$t('exhibitDetil.t15'),
                  type: "success",
                });
              } else {
                this.$message({
                  message: this.$t('exhibitDetil.t16'),
                });
              }

              this.goodsParams.favorite = +!this.goodsParams.favorite;

              // this.init();
            }
          })
          .catch(() => {});
      });
    },
    init() {
      return new Promise((r, e) => {
        let base = this.$http.adornUrl("/exhibitor/product");
        this.$http
          .get(`${base}/${this.$route.query.id}`)
          .then(({ data: res }) => {
            // console.log(res);
            if (res.code == 1) {
              this.goodsParams = res.data;
              r(res.data);
            } else {
              e();
            }
          })
          .catch((err) => e(err));
      });
    },
    closeDia() {
      this.showOrder = false;
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
    attributeListHandle(list) {
      var arr = [];
      for (const i of list) {
        if (i.name && i.value) {
          arr.push(i);
        }
      }
      return arr;
    },
    toDet() {
      this.$router.push({
        path: "/businessmanDet",
        query: { id: this.goodsParams.exhibitorId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.exhibitDetilBox {
  position: relative;
  min-width: 1200px;
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
  //   展品详情
  .exhibitDet {
    width: 1200px;
    margin: 0 auto;
    .cont {
      position: relative;
      display: flex;
      align-items: flex-start;
      margin-bottom: 40px;
      .left {
        margin-right: 30px;
        width: 400px;
        height: 320px;
        display: flex;
        justify-content: space-between;
        .bigImg {
          width: 320px;
          margin-right: 8px;
          img {
            width: 320px;
            // height: 320px;
          }
        }
        .smallImg {
          width: 72px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          img {
            width: 72px;
            height: 72px;
          }
        }
      }
      .middle {
        width: 535px;
        padding-top: 22px;
        .tit {
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #656565;
          margin-bottom: 19px;
        }
        .tag {
          width: 225px;
          padding: 6px 0;
          background: #cee6f6;
          border-radius: 5px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #4aaae9;
          text-align: center;
          margin-bottom: 25px;
        }
        .intr {
          font-size: 16px;
          font-family: Source Han Sans SC;
          text-align: justify;
          text-indent:32px;
          font-weight: 400;
          color: #555555;
          line-height: 30px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
      .right {
        padding-top: 22px;
        text-align: right;
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
          height: 22px;
          line-height: 22px;
          img {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
    .shareBox {
      display: flex;
      position: absolute;
      bottom: 10px;
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
      div:first-child {
        img {
          width: 24px;
          height: 24px;
          margin-right: 9px;
        }
      }
    }
    .secondTit {
      font-size: 26px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #333333;
      padding: 28px 0;
    }
    .exhibitParams {
      margin-bottom: 20px;
      span {
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #555555;
        display: inline-block;
        width: 24%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 37px;
      }
    }
    .exhibitInfo {
      margin-bottom: 50px;
      p {
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #555555;
        line-height: 30px;
        text-indent:32px;
        text-align: justify;
      }
    }
  }
  //   展商信息
  .exhibitionDetil {
    width: 1200px;
    margin: 0 auto;
    .cont {
      display: flex;
      height: 110px;
      align-items: center;
      position: relative;
      margin-bottom: 40px;
      cursor: pointer;
      .Autoimg{
        margin-right: 40px;
        box-shadow: 0px 1px 4px 0px rgba(203, 203, 203, 0.2);
        border-radius: 15px;
      }
      .left {
        margin-right: 40px;
        width: 200px;
        height: 110px;
        line-height: 110px;
        background: #ffffff;
        box-shadow: 0px 1px 4px 0px rgba(203, 203, 203, 0.2);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
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
        .tag {
          width: 225px;
          padding: 6px 0;
          background: #cee6f6;
          border-radius: 5px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #4aaae9;
          text-align: center;
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
        // .imgBox {
        //   width: 360px;
        //   height: 200px;
        //   background: #ffffff;
        //   border: 1px solid #f5f5f5;
        //   border-radius: 6px;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   img {
        //     max-width: 100%;
        //     max-height: 100%;
        //   }
        // }
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
          margin-top: 16px;
          // line-height: 50px;
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
