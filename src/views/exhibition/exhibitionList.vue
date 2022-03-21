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
                    <img :src="i.imgUrl" style="width: 15px;height: 15px;margin-right: 4px;" />{{ i.name }}
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
        <div class="search" :class="{ eninputwidth: $i18n.locale === 'en' }">
          <el-input
            :placeholder="golbalTab ? `${$t('exhibitionList.t4')}${$t('exhibitionList.t1')}` : `${$t('exhibitionList.t4')}${$t('exhibitionList.t2')}`"
            :value="keywords"
            class="input-with-select"
            @keyup.enter.native="searchHandle"
            clearable
            @input="e => (keywords = inputMe(e))"
          >
            <el-select v-model="golbalTab" slot="prepend" :class="{ enwidth: $i18n.locale === 'en' }" :placeholder="$t('exhibitionList.t5')" @change="changeSelect">
              <el-option :label="$t('exhibitionList.t2')" :value="false"></el-option>
              <el-option :label="$t('exhibitionList.t1')" :value="true"></el-option>
            </el-select>
            <router-link
              :to="{
                path: '/exhibitionList',
                query: {
                  type: golbalTab ? '0' : '1',
                  keywords: keywords,
                  categoryId: categoryId
                }
              }"
              slot="append"
            >
              <el-button icon="el-icon-search"></el-button>
            </router-link>
          </el-input>
        </div>
        <div class="tab">
          <router-link @click.native="type = 0" :to="{ path: '/exhibitionList', query: { type: '0', categoryId: categoryId } }">
            <span class="clickItem" :class="golbalTab ? 'active' : ''">{{ $t('exhibitionList.t1') }}{{ golbalTab ? '（' + total + '）' : '' }}</span>
          </router-link>
          <router-link @click.native="type = 1" :to="{ path: '/exhibitionList', query: { type: '1', categoryId: categoryId } }">
            <span class="clickItem" :class="!golbalTab ? 'active' : ''">{{ $t('exhibitionList.t2') }}{{ !golbalTab ? '（' + total + '）' : '' }}</span>
          </router-link>
        </div>
        <!-- <div class="filter" v-if="golbalTab">
          <div>
            <span>相关性</span>
            <img src="../../assets/images/exhibition/jiao.png" alt />
          </div>
          <div>
            <span>点击量</span>
            <img src="../../assets/images/exhibition/jiao.png" alt />
          </div>
          <div>
            <span>首字母</span>
            <img src="../../assets/images/exhibition/jiao.png" alt />
          </div>
        </div>-->
        <div class="busListBox" v-loading="isloading" v-if="golbalTab">
          <div class="item clickItem" v-for="(item, index) in exhibitList" :key="index">
            <div class="det">
              <div class="baseInfo">
                <Autoimg :url="myimgHandle(item.logoUrl)" :width="'140px'" :height="'80px'" :border="false" />
                <!-- <p>
                  <img :src="myimgHandle(item.logoUrl)" alt="" />
                </p> -->
                <div>
                  <p class="com" :title="item.name" @click="goDet(item)">{{ item.name }}</p>
                  <!--                  <span v-if="item.stadium" class="tag">{{
                      item.stadium
                    }}</span>-->
                </div>
              </div>
              <!-- <p class="type">
                {{ $t('exhibitionList.t6') }}：
                <span
                  v-for="(ic, id) in item.categories"
                  :key="id"
                  style="margin-right: 10px"
                >{{ ic.name }}</span
                >
              </p> -->
              <div class="seeInfo">
                <img style="width: 22px" src="../../assets/icon/浏览.png" alt />
                <span>{{ item.viewCount }}{{ $t('exhibitionList.t7') }}</span>
              </div>
              <div class="zanInfo">
                <img v-if="item.praise == 0" @click.stop="zanHandle(item, 1)" src="../../assets/icon/a-1.png" alt />
                <img v-if="item.praise == 1" @click.stop="zanHandle(item, 0)" src="../../assets/icon/a-2.png" alt />
                <span :class="item.praise == 1 ? 'zaned' : ''" @click.stop="zanHandle(item, item.praise == 1 ? 0 : 1)">{{ $t('exhibitionList.t8') }}</span>
              </div>
              <!-- <div class="tagInfo">
                <span v-for="(ic,id) in item.categories" :key="id">{{ic.name}}</span>
              </div> -->
            </div>
            <div class="imgInfo">
              <div v-for="(it, idx) in item.productItems ? item.productItems : []" :key="idx" class="imgBox" @click.stop="toPage('/exhibitDetil?id=' + it.id)">
                <Autoimg :url="myimgHandle(it.logoUrl)" :width="'140px'" :height="'140px'" />
              </div>
              <!-- <div
                class="imgBox"
                v-for="(it, idx) in item.productItems ? item.productItems : []"
                :key="idx"
                @click.stop="toPage('/exhibitDetil?id=' + it.id)"
              >
                <img :src="myimgHandle(it.logoUrl)" alt />
              </div> -->
            </div>
          </div>
        </div>
        <div class="listBox" v-loading="isloading" v-if="!golbalTab">
          <div class="exhibition clickItem" @click="goDet(item)" v-for="(item, index) in exhibitList" :key="index">
            <Autoimg :url="myimgHandle(item.logoUrl)" :width="'430px'" :height="'200px'" />
            <!-- <div class="imgBox">
              <img :src="myimgHandle(item.logoUrl)" alt />
            </div> -->
            <span class="line"></span>
            <p class="tit">
              <span :title="item.name">{{ item.name }}</span>
              <span class="see">{{ item.viewCount }}{{ $t('exhibitionList.t7') }}</span>
            </p>
            <div class="company">
              <span class="type">{{ item.exhibitorName }}</span>
              <div class="c2" @click.stop="item.favorite == 0 ? favHandle(item, index, 1) : favHandle(item, index, 0)">
                <img class="clickItem" v-if="item.favorite == 0" src="../../assets/icon/b-1.png" alt />
                <img v-if="item.favorite == 1" src="../../assets/icon/b-2.png" alt />
                <span style="height:22px;line-height:22px">{{ $t('exhibitionList.t9') }}</span>
              </div>
              <!-- <span
                @click.stop="item.favorite == 0 ? favHandle(item, index, 1) : favHandle(item, index, 0)"
                :class="item.favorite == 0 ? 'star' : 'star activeStar'"
              >
                <i class="el-icon-star-on"></i>收藏
              </span> -->
            </div>
          </div>
        </div>
        <el-pagination
          class="pagination"
          :current-page="page"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          :total="total"
          layout="total, prev, pager, next, jumper, slot"
          @size-change="pageSizeChangeHandle"
          @current-change="pageCurrentChangeHandle"
        >
          <el-button style="margin-left: 20px; border: 1px solid #c0c4cc; color: #606266" size="mini" @click="pageCurrentChangeHandle(page)">
            {{ $t('listOfExhibitors.t4') }}
          </el-button>
        </el-pagination>
      </div>
    </div>
    <Mylogin :visible.sync="visible" />
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" />
  </div>
</template>

<script>
import Mylogin from './compontent/mylogin';
import Autoimg from '@/views/exhibition/compontent/autoimg';
import headerNav from '@/components/headerNav3';
export default {
  components: { headerNav, Autoimg, Mylogin },
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
    goDet(item) {
      let path = this.golbalTab ? '/businessmanDet' : '/exhibitDetil';
      this.$router.push({
        path: path,
        query: {
          id: item.id
        }
      });
    },
    //展商点赞
    zanHandle(item, status) {
      this.islogin().then(() => {
        let base = this.$http.adornUrl('/exhibitor/praise');
        let params = {
          exhibitorId: item.exhibitorId,
          status
        };
        this.$http
          .post(`${base}`, params)
          .then(({ data: res }) => {
            if (res.code == 1) {
              if (status) {
                this.$message({
                  message: this.$t('exhibitionList.t13'),
                  type: 'success'
                });
              } else {
                this.$message.warning(this.$t('exhibitionList.t10'));
              }
              this.init();
            }
          })
          .catch(() => {});
      });
    },
    //展品收藏
    favHandle(item, index, status) {
      this.islogin().then(() => {
        let base = this.$http.adornUrl('/exhibitor/product/favorite');
        let params = {
          exhibitorProductId: item.exhibitorProductId,
          status
        };
        this.$http
          .post(`${base}`, params)
          .then(({ data: res }) => {
            if (res.code == 1) {
              if (status) {
                this.$message({
                  message: this.$t('exhibitionList.t11'),
                  type: 'success'
                });
              } else {
                this.$message({
                  message: this.$t('exhibitionList.t12'),
                  type: 'info'
                });
              }
              this.init();
            }
          })
          .catch(() => {});
      });
    },
    //搜索关键字
    searchHandle() {
      if (this.$route.query.keywords !== this.keywords) {
        this.$router.push({
          path: '/exhibitionList',
          query: {
            type: this.golbalTab ? '0' : '1',
            keywords: this.keywords,
            categoryId: this.categoryId
          }
        });
      }
    },
    init() {
      let url = this.golbalTab ? '/exhibitor/list' : '/exhibitor/product/list';
      let base = this.$http.adornUrl(url);
      this.isloading = true;
      this.$http
        .get(`${base}?page=${this.page}&pageSize=${this.pageSize}&keywords=${this.keywords}&stadiumId=${this.stadiumId}&categoryId=${this.categoryId}`)
        .then(({ data: res }) => {
          if (res.code == 1) {
            this.exhibitList = res.data.list;
            this.total = res.data.total;
            this.isloading = false;
          }
        })
        .catch(() => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 分页, 每页条数
    pageSizeChangeHandle(val) {
      this.$router.push({
        path: '/exhibitionList',
        query: {
          pageSize: val,
          type: this.golbalTab ? '0' : '1',
          keywords: this.keywords,
          categoryId: this.categoryId
        }
      });
    },
    // 分页, 当前页
    pageCurrentChangeHandle(val) {
      if (val !== this.$route.query.page * 1) {
        this.$router.push({
          path: '/exhibitionList',
          query: {
            page: val,
            pageSize: this.pageSize,
            type: this.golbalTab ? '0' : '1',
            keywords: this.keywords,
            categoryId: this.categoryId
          }
        });
        window.scrollTo(100, 600);
      }
    },
    myimgHandle(i) {
      if (i === null || i === '' || i === undefined) {
        return require('@/assets/images/exhibition/default.png');
      } else {
        var str = '';
        for (const j of i.split(',')) {
          if (j) {
            str = j;
            break;
          }
        }
        return str;
      }
    },
    inputMe(e) {
      return e.replace(/[#%^&|\\]/g, '');
    },
    islogin() {
      return new Promise((r, e) => {
        if (localStorage.getItem('token')) {
          r();
        } else {
          this.visible = true;
          e();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ditu {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
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
    margin-top: 40px;
    padding-bottom: 50px;
    .left {
      // width: 250px;
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
        .item {
          padding: 30px;
          background: #fff;
          // display: flex;
          // justify-content: space-between;
          // flex-direction: row;
          // align-items: center;
          margin-bottom: 34px;
          position: relative;
          box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
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
              // height: 12px;
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
              // background: #ffffff;
              // border: 1px solid #efefef;
              // box-sizing: border-box;
              // border-radius: 6px;
              // text-align: center;
              // margin-left: 20px;
              // display: flex;
              // justify-content: center;
              // align-items: center;
              // img {
              //   max-width: 100%;
              //   max-height: 100%;
              // }
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
