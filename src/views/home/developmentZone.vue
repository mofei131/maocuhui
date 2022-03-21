<template>
  <div class="exhibitionListBox" style="position: relative;z-index: 100;">
    <div class="line"></div>
    <!-- 展品/商列表 -->
    <div class="exhibitionDetil" style="position: relative;">
      <div class="left">
        <el-menu default-active="2" class="menuVertical" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <span style="font-size: 20px; color: #2884ec">
                {{ golbalTab ? `${$t('exhibitionList.t3')}${$t('exhibitionList.t1')}` : `${$t('exhibitionList.t3')}${$t('exhibitionList.t2')}` }}
              </span>
            </template>
            <el-menu-item-group>
              <router-link
                :to="{
                  path: '/exhibitionList',
                  query: { type: golbalTab ? '0' : '1' }
                }"
              >
                <el-menu-item :index="'0'" style="padding: 0 0">
                  <span
                    class="name"
                    :class="{
                      act: stadiumId === '' && categoryId === '' && currCategoryId === ''
                    }"
                  >
                    {{ $t('exhibitionList.t3') }}
                  </span>
                </el-menu-item>
              </router-link>

              <router-link v-for="(i, j) in categoryList" :key="j" :to="{ path: i.pathUrl }">
                <el-menu-item :index="j + ''" style="padding: 0 0">
                  <!-- <span class="line" v-if="i.id==currCategoryId"></span> -->
                  <span class="name" :class="{ act: i.id == currCategoryId }">
                    <img :src="i.imgUrl" style="width: 15px;height: 15px;margin-right: 4px;" />
                    {{ i.name }}
                  </span>
                  <img class="roundImg" v-if="i.id != currCategoryId" src="../../assets/images/exhibition/round.png" alt />
                  <img class="roundImg" v-if="i.id == currCategoryId" src="../../assets/images/exhibition/rounded.png" alt />
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
        <div class="titles">
          <span class="title-texts">潍坊国家级开发区成就展</span>
        </div>
        <div class="busListBox">
          <div class="item clickItem" @click="toPage('zone4')">
            <img src="../../assets/images/home/gaoxin.png" style="width: 100%" />
            <div class="clickItem-test">潍坊高新技术产业开发区</div>
          </div>
          <div class="item clickItem" @click="toPage('zone2')">
            <img src="../../assets/images/home/binhai.png" style="width: 100%" />
            <div class="clickItem-test">潍坊滨海经济技术开发区</div>
          </div>
          <div class="item clickItem" @click="toPage('zone1')">
            <img src="../../assets/images/home/baoshui.png" style="width: 100%" />
            <div class="clickItem-test">潍坊综合保税区</div>
          </div>
          <div class="item clickItem" @click="toPage('zone3')">
            <img src="../../assets/images/home/nong.png" style="width: 100%" />
            <div class="clickItem-test">潍坊国家农业开发发展综合试验区</div>
          </div>
        </div>
      </div>
    </div>

    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" />
  </div>
</template>

<script>
import Autoimg from '@/views/exhibition/compontent/autoimg';
import headerNav from '@/components/headerNav3';
export default {
  name: 'developmentZone',
  components: { headerNav, Autoimg },
  data() {
    return {
      visible: false,
      golbalTab: true,
      categoryList: [],
      stadiumList: [],
      stadiumId: '',
      currStadiumId: '',
      currCategoryId: '',
      type: 0,
      categoryId: '',
      page: 1, // 当前页码
      pageSize: 10, // 每页数
      total: 0, // 总条数
      radio: '',
      keywords: '',
      exhibitList: [],
      isloading: false
    };
  },
  watch: {
    $route(val) {
      this.myinit(val.query);
    }
  },
  created() {
    this.myinit(this.$route.query);
  },
  methods: {
    myinit(q) {
      q.page ? (this.page = q.page * 1) : (this.page = 1);
      q.pageSize ? (this.pageSize = q.pageSize * 1) : (this.pageSize = 10);
      q.keywords ? (this.keywords = q.keywords) : (this.keywords = '');
      q.categoryId ? ((this.categoryId = q.categoryId), (this.currCategoryId = q.categoryId)) : ((this.categoryId = ''), (this.currCategoryId = ''));
      q.type == '1' ? (this.golbalTab = false) : (this.golbalTab = true);
      q.stadiumId ? (this.stadiumId = q.stadiumId) : (this.stadiumId = '');
      this.init();
      this.getMenu();
    },
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url
      });
    },
    changeSelect(val) {
      this.init();
      this.getMenu();
    },
    goTabFalse() {
      this.golbalTab = false;
      this.init();
      this.getMenu();
    },
    goTabTrue() {
      this.golbalTab = true;
      this.init();
      this.getMenu();
    },
    chooseStadium(item) {
      // 展商ID
      // this.exhibitorId =
      // 场馆ID
      this.currStadiumId = item.id;
      this.stadiumId = item.id;
      this.init();
    },
    getMenu() {
      //展馆列表
      let base1 = this.$http.adornUrl('/stadium/list');
      this.$http
        .get(`${base1}`)
        .then(({ data: res }) => {
          if (res.code == 1) {
            this.stadiumList = res.data;
          }
        })
        .catch(() => {});

      //展商类别
      let base = this.$http.adornUrl('/category/list');
      let type = this.golbalTab ? 0 : 1;
      this.$http
        .get(`${base}?type=${type}`)
        .then(({ data: res }) => {
          if (res.code == 1) {
            this.categoryList = res.data;

            for (let i = 0; i < this.categoryList.length; i++) {
              if (i == 4) {
                this.categoryList[i].pathUrl = '/development';
              } else if (i == 5) {
                this.categoryList[i].pathUrl = '/newsCenter/pastReview';
              } else if (i == 6) {
                this.categoryList[i].pathUrl = '/exhibitionList?categoryId=22' + '&type=' + this.type;
              } else {
                this.categoryList[i].pathUrl = '/exhibitionList?categoryId=' + this.categoryList[i].id + '&type=' + this.type;
              }
            }
          }
        })
        .catch(() => {});
    },
    prev() {
      this.$router.go(-1);
    },

    init() {
      this.isloading = true;
      this.currCategoryId = 19;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    inputMe(e) {
      return e.replace(/[#%^&|\\]/g, '');
    }
  }
};
</script>

<style lang="scss" scoped>
.titles {
  height: 77px;
  border-bottom: 2px solid #7daefe;
  width: 870px;
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
/deep/ .clickItem-test {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-family: '宋体';
}
.ditu {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
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
.exhibitionListBox {
  background: #fff;

  .clickItem {
    cursor: pointer;
  }

  .goback {
    width: 1290px;
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
  .commonTitleWrap {
    width: 1200px;
    margin: 0 auto;
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
  .line {
    height: 2px;
    background: #dddddd;
  }
  //   展商详情
  .exhibitionDetil {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    margin-top: 22px;
    padding-bottom: 50px;
    .left {
      // width: 250px;
      height: 1000px;
      margin-right: 50px;
      margin-top: 40px;
      height: 100%;
      box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
      border-radius: 4px;
      .allKind {
        width: 250px;
        height: 100px;
        background: #2884ec;
        font-size: 30px;
        font-family: SourceHanSansSC;
        font-weight: 500;
        color: #ffffff;
        display: table-cell;
        vertical-align: middle;
        img {
          width: 28px;
          height: 24px;
          margin: 0 20px 0 15px;
        }
      }
      .allGoods {
        width: 250px;
        height: 60px;
        background: #ffffff;
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #2884ec;
        line-height: 60px;
        text-align: center;
      }
      .chooseGoods {
        width: 250px;
        height: 60px;
        background: #53a2fb;
        font-size: 30px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
        display: table-cell;
        vertical-align: middle;
        img {
          width: 28px;
          height: 24px;
          margin: 0 15px;
        }
      }
      .menuVertical {
        width: 295px;
        border-right: 0px;
        .line {
          display: inline-block;
          width: 4px;
          height: 24px;
          background: #2884ec;
          margin-right: 26px;
          position: absolute;
          top: 13px;
        }
        .name {
          font-size: 16px;
          font-family: Source Han Sans SC;
          color: #888888;
          padding-left: 15px;
          height: auto;
          line-height: normal;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }
        .radioCurr {
          position: absolute;
          line-height: 50px;
          right: 24px;
        }
      }
    }
    .right {
      width: 900px;
      .search {
        width: 380px;
        margin-left: 530px;
        /deep/ .el-input-group__prepend {
          width: 40px;
        }
      }
      .tab {
        // margin-top: 13px;
        border-bottom: 3px solid #2884ec;
        padding-bottom: 13px;
        span {
          font-size: 20px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #666666;
          margin-right: 30px;
        }
        .active {
          color: #2884ec;
        }
      }
      .filter {
        display: flex;
        padding: 0 20px;
        margin: 20px 0;
        align-items: center;
        height: 60px;
        background: #fff;
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #666666;
        > div {
          display: flex;
          align-items: center;
          margin-right: 50px;
          img {
            width: 8px;
            margin-left: 16px;
          }
        }
      }
      .busListBox {
        margin-top: 20px;
        position: relative;
        z-index: 1000;
        width: 866px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          padding: 10px;
          background: #fff;

          margin-bottom: 34px;
          position: relative;
          box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
          width: 400px;
          .det {
          }
          .baseInfo {
            display: flex;
            margin-bottom: 15px;
            .Autoimg {
              border-radius: 6px;
              margin-right: 30px;
            }
            > p {
              width: 140px;
              height: 80px;
              border-radius: 6px;
              margin-right: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              > img {
                max-width: 100%;
                max-height: 100%;
              }
            }
            .com {
              font-size: 20px;
              font-family: SourceHanSansSC;
              font-weight: 500;
              color: #666666;
              margin-bottom: 13px;
              overflow: hidden; /*超出部分隐藏*/
              text-overflow: ellipsis; /* 超出部分显示省略号 */
              white-space: nowrap;
            }
            .tag {
              height: 30px;
              line-height: 30px;
              text-align: center;
              background: #cfedff;
              border: 1px solid #efefef;
              border-radius: 4px;
              font-size: 14px;
              font-family: SourceHanSansSC;
              font-weight: 500;
              color: #3f95f6;
              padding: 5px 15px;
            }
            > div {
              width: calc(100% - 170px);
            }
          }
          .type {
            font-size: 14px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #555555;
            line-height: 30px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .seeInfo {
            display: flex;
            align-items: center;
            img {
              width: 22px;
              margin-right: 9px;
            }
            span {
              font-size: 14px;
              font-family: FZLanTingHei-EL-GBK;
              font-weight: 400;
              color: #999999;
              line-height: 30px;
            }
          }
          .zanInfo {
            display: flex;
            align-items: center;
            margin: 10px 0 15px;
            img {
              width: 24px;
              height: 24px;
              margin-right: 9px;
            }
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #666666;
            .zaned {
              color: #2884ec;
            }
          }
          .tagInfo {
            span {
              padding: 0 5px;
              margin-right: 15px;
              height: 24px;
              line-height: 24px;
              border-radius: 4px;
              font-size: 12px;
              font-family: SourceHanSansSC;
              font-weight: 500;
              display: inline-block;
            }
            span:first-child {
              background: #d8f0ff;
              border: 1px solid #53a2fb;
              color: #3f95f6;
            }
            span:nth-child(2) {
              background: #ffd8d8;
              border: 1px solid #fc7171;
              color: #fc7171;
            }
            span:nth-child(3) {
              background: #dfffd8;
              border: 1px solid #71fc8e;
              color: #3ff66e;
            }
            span:nth-child(4) {
              background: #d8ffff;
              border: 1px solid #71fce7;
              color: #3ff6d6;
            }
          }
          .imgInfo {
            position: absolute;
            right: 30px;
            top: 67px;
            display: flex;
            .Autoimg {
              border-radius: 6px;
            }
            .imgBox {
              width: 140px;
              height: 140px;
              margin-left: 20px;
            }
          }
        }
      }
      .listBox {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 20px;
        .exhibition {
          width: 430px;
          background: #ffffff;
          box-shadow: 0px 0px 20px 4px rgba(204, 204, 204, 0.1);
          border-radius: 6px;
          margin-bottom: 40px;
          padding-bottom: 30px;
          .Autoimg {
            border-radius: 6px;
          }
          .imgBox {
            width: 360px;
            height: 200px;
            background: #ffffff;
            border: 1px solid #f5f5f5;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              max-width: 100%;
              max-height: 100%;
            }
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
            margin: 10px 19px 0;
            font-size: 18px;
            font-family: SourceHanSansSC;
            font-weight: 500;
            color: #333333;
            line-height: 50px;
            > span:nth-of-type(1) {
              display: inline-block;
              width: calc(100% - 60px);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .see {
              font-size: 14px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: #999999;
              float: right;
            }
          }
          .company {
            margin: 0 19px;
            font-size: 16px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #878787;
            .type {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              width: 250px;
              display: inline-block;
            }
            .star {
              float: right;
              font-size: 16px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: #666666;
              i {
                vertical-align: text-top;
                font-size: 23px;
                color: #999;
                margin-right: 8px;
              }
            }
            .activeStar {
              i {
                color: #f9d455;
              }
            }
          }
        }
      }
    }
  }
  .pagination {
    margin: 10px 0 100px;
    position: relative;
    z-index: 1200;
  }
  /deep/ .el-menu-item {
    height: auto;
    display: flex;
    align-items: center;
    padding: 15px 0 !important;
    > span {
      display: block;
      width: 180px;
      white-space: normal;
      position: relative;
    }
    .act::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 5px;
      background-color: #2884ec;
    }
    > img {
      display: block;
      flex-shrink: 0;
      padding: 0 24px 0 58px;
    }
  }
  .eninputwidth {
    width: 460px !important;
    margin-left: 440px !important;
  }
  .enwidth {
    width: 102px;
  }
}
</style>
