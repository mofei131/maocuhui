<template>
  <div class="headerWrap">
    <div class="commonContent" :style=" $i18n.locale==='zh' ? 'width: 1290px': 'width: 1680px'">
      <div class="headerBox">
        <div class="logoBox" @click="stadiumId = ''">
          <router-link to="/home">
            <img class src="../assets/logo.png" alt />
          </router-link>
        </div>

        <div class="navBox">

          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            background-color="#0d1134"
          >
            <!--          首页开始          -->
            <el-menu-item index="1" @click="stadiumId = ''" :class="{activeBottom: toPath == '/home'}">
              <router-link to="/home" active-class="activeClass">{{ $t('headerNav.menu1') }}</router-link>
            </el-menu-item>
            <!--          首页结束         -->
            <!-- <el-submenu index="2" popper-class="childList" :popper-append-to-body="false">
              <template slot="title">直播入口</template>
              <div>
                <el-menu-item index="2-2">
                  <router-link to="conferenceLive" active-class="activeClass">大会现场直播/回播</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <router-link to="exhibitsList" active-class="activeClass">企业影视视频墙</router-link>
                </el-menu-item>
              </div>
            </el-submenu> -->
<!--           博览会概况开始       -->
            <el-submenu
              index="3"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{activeBottom:
              toPath == '/exhibitionOverview/exhibitionGuide' ||
              toPath == '/exhibitionOverview/exhibitionOrganization' ||
              toPath == '/exhibitionOverview/exhibitionInfo' ||
              toPath == '/exhibitionOverview/inviteGuests' ||
              toPath == '/exhibitionOverview/exhibitionDistribution' ||
              toPath == '/exhibitionOverview/traffic' ||
              toPath == '/exhibitionOverview/peripheralServicess' ||
              toPath == '/exhibitionOverview/listOfExhibitors'

              }"
            >
              <template slot="title">{{ $t('headerNav.menu2.nav') }}</template>
              <el-menu-item index="3-1" @click="stadiumId = ''">
                <router-link
                  to="/exhibitionOverview/exhibitionGuide"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu2.t1') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="3-2" @click="stadiumId = ''">
                <router-link
                  to="/exhibitionOverview/exhibitionOrganization"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu2.t2') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="3-3" @click="stadiumId = ''">
                <router-link
                  to="/exhibitionOverview/exhibitionInfo"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu2.t3') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="3-8" @click="stadiumId = ''" title="拟邀嘉宾">
                <router-link
                  to="/exhibitionOverview/inviteGuests"
                  active-class="activeClass"
                >{{ $t('headerNav.menu2.t8') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="3-7" @click="stadiumId = ''">
                <router-link
                  to="/exhibitionOverview/exhibitionDistribution?id=6"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu2.t7') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="3-4">
                <router-link to="/exhibitionOverview/traffic" active-class="activeClass">{{ $t('headerNav.menu2.t4') }}</router-link>
              </el-menu-item>
              <el-menu-item index="3-5">
                <router-link to="/exhibitionOverview/peripheralServicess" active-class="activeClass">{{ $t('headerNav.menu2.t5') }}</router-link>
              </el-menu-item>
              <el-menu-item index="3-6" @click="stadiumId = ''">
                <router-link
                  to="/exhibitionOverview/listOfExhibitors"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu2.t6') }}</router-link
                >
              </el-menu-item>
              <!-- <el-menu-item index="3-7">
                <router-link to="AdministratorLogin" active-class="activeClass">管理员登录</router-link>
              </el-menu-item> -->
            </el-submenu>

            <!--           博览会概况结束       -->
            <!--           会议活动开始       -->
            <el-submenu
              index="4"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{activeBottom:
              toPath == '/schedule' ||
              toPath == '/conferenceLive1'||
              toPath == '/conferenceLive2'||
              toPath == '/conferenceLive3'||
              toPath == '/conferenceLive4'||
              toPath == '/conferenceLive5'||
              toPath == '/conferenceLive6'||
              toPath == '/conferenceLive7'||
              toPath == '/conferenceLive8'||
              toPath == '/exhibitsList'
              }"
            >
              <template slot="title">{{ $t('headerNav.menu3.nav') }}</template>
              <!-- <el-menu-item index="4-1">
                <router-link to="conferenceLive" active-class="activeClass">会议活动</router-link>
              </el-menu-item> -->
              <el-menu-item index="4-1" @click="stadiumId = ''" class="menu2">
                <router-link to="/schedule?name=论坛日程" active-class="activeClass"
                  >{{ $t('headerNav.menu3.t1') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="4-2" @click="stadiumId = ''" class="menu2">
                <router-link to="/conferenceLive1" active-class="activeClass"
                  >{{ $t('headerNav.menu3.t2') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="4-3" class="menu2">
                <router-link to="/conferenceLive2" active-class="activeClass">{{ $t('headerNav.menu3.t3') }}</router-link>
              </el-menu-item>
              <el-menu-item index="4-4" class="menu2">
                <router-link to="/conferenceLive3" active-class="activeClass">{{ $t('headerNav.menu3.t4') }}</router-link>
              </el-menu-item>
              <el-menu-item index="4-5" class="menu2">
                <router-link to="/conferenceLive4" active-class="activeClass">{{ $t('headerNav.menu3.t5') }}</router-link>
              </el-menu-item>
              <el-menu-item index="4-6" class="menu2">
                <router-link to="/conferenceLive5" active-class="activeClass">{{ $t('headerNav.menu3.t6') }}</router-link>
              </el-menu-item>
              <el-menu-item index="4-7" class="menu2">
                <router-link to="/conferenceLive6" active-class="activeClass">{{ $t('headerNav.menu3.t7') }}</router-link>
              </el-menu-item>
              <el-menu-item index="4-8" class="menu2">
                <router-link to="/conferenceLive7" active-class="activeClass">{{ $t('headerNav.menu3.t8') }}</router-link>
              </el-menu-item>
            </el-submenu>
            <!--           会议活动结束       -->
            <!--           新闻中心开始       -->
            <el-submenu
              index="5"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{activeBottom:

              toPath == '/newsCenter/exhibitionReport' ||
     /*         toPath == '/newsCenter/pressRelease-news' ||*/
              toPath == '/newsCenter/pastReview' ||
              toPath == '/newsCenter/livePhotoAlbum'}
            /*  toPath == '/newsCenter/PostShowReport' ||*/
              /*toPath == '/newsCenter/skillsCompetition' ||*/
              /*toPath == '/newsCenter/reprintedAndMediaReports'*/
"
            >
              <template slot="title">{{ $t('headerNav.menu4.nav') }}</template>
              <!-- <el-menu-item index="5-4">
                <router-link to="/pressService/pressService" active-class="activeClass">{{ $t('headerNav.menu4.t1') }}</router-link>
              </el-menu-item> -->

<!--                <el-menu-item index="5-1">
                <router-link to="/newsCenter/descriptionOfTheSituation?id=7" active-class="activeClass">{{ $t('headerNav.menu4.t7') }}</router-link>
              </el-menu-item>-->
              <el-menu-item index="5-2" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/exhibitionReport"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu4.t2') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="5-9" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/reprintedAndMediaReports"
                  active-class="activeClass"
                >{{ $t('headerNav.menu4.t9') }}</router-link
                >
              </el-menu-item>

<!--              <el-menu-item index="5-5" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/pressRelease-news"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu4.t3') }}</router-link
                >
              </el-menu-item>-->
              <el-menu-item index="5-6" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/pastReview"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu4.t4') }}</router-link
                >
              </el-menu-item>
<!--              <el-menu-item index="5-3">
                <router-link to="/newsCenter/PostShowReport?name=展后报告" active-class="activeClass">{{ $t('headerNav.menu4.t8') }}</router-link>
              </el-menu-item>-->
              <el-menu-item index="5-7" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/livePhotoAlbum"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu4.t5') }}</router-link
                >
              </el-menu-item>
<!--              <el-menu-item index="5-8" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/skillsCompetition"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu4.t6') }}</router-link
                >
              </el-menu-item>-->

<!--              <el-menu-item v-if="
                  $store.state.user.info.type
                    ? $store.state.user.info.type == 3
                    : true
                " index="5-1" @click="stadiumId = ''">
                <router-link :to="{path:'/logIn',query: {tab: 3}}" active-class="activeClass">{{ $store.state.user.info.type?$t('headerNav.menu4.t1'):$t('headerNav.menu6.t2') }}</router-link>
              </el-menu-item>-->
            </el-submenu>
            <!--           新闻中心结束       -->
            <!--           在线展厅开始       -->
            <el-submenu
              index="6"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{ activeBottom: toPath == '/pavilionDetail' || toPath == '/emphasisEnterprise' || toPath == '/emphasisExhibits' }"
            >
              <template slot="title">{{ $t("headerNav.menu5.nav") }}</template>
              <el-menu-item
                :index="'6' + index + 1"
                class="menu3"
                v-for="(item, index) in stadiumList"
                :key="index"  v-if="index<4"
                @click="stadiumId = item.id"
              >
                <router-link
                  :to="'/exhibitionList?stadiumId=' + item.id+'&categoryId='+item.categoryId"
                  :class="{ activeClass: stadiumId == item.id }"
                  >{{ item.name }}</router-link
                >
              </el-menu-item>
             <el-menu-item index="6-8" @click="stadiumId = ''"   class="menu3">
                <router-link
                  to="/development"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu5.t1') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="6-9" @click="stadiumId = ''"  class="menu3">
                <router-link
                  to="/newsCenter/pastReview"
                  active-class="activeClass"
                >{{ $t('headerNav.menu5.t3') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="6-9" @click="stadiumId = ''"   class="menu3">
                <router-link

                  to="/exhibitionList?categoryId=22"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu5.t2') }}</router-link
                >
              </el-menu-item>

            </el-submenu>
            <!--           在线展厅结束       -->
            <!--           展商服务开始       -->
            <el-submenu
              index="7"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{activeBottom: toPath == '/exhibitorService/visitProcedure' || toPath == '/exhibitorService/downloadDocument'}"
            >
              <template slot="title">{{ $t('headerNav.menu6.nav') }}</template>
              <el-menu-item
                v-if="
                  $store.state.user.info.type
                    ? $store.state.user.info.type == 2
                    : true
                "
                index="7-1"
                @click="stadiumId = ''"
              >
                <router-link
                  :to="{ path: '/logIn', query: { tab: 1 } }"
                  active-class="activeClass"
                  >{{ $store.state.user.info.type?$t('headerNav.menu6.t1'):$t('headerNav.menu6.t2') }}</router-link
                >
              </el-menu-item>
<!--              <el-menu-item index="7-2" @click="stadiumId = ''">
                <router-link
                  to="/exhibitorService/visitProcedure"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu6.t5') }}</router-link
                >
              </el-menu-item>-->
              <el-menu-item index="7-3" @click="stadiumId = ''">
                <router-link
                  to="/exhibitorService/downloadDocument"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu6.t4') }}</router-link
                >
              </el-menu-item>
            </el-submenu>
            <!--           展商服务结束       -->
            <!--           观众服务开始       -->
            <el-submenu
              index="8"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{activeBottom:
              // toPath == '/audienceService/visitGuide' ||
              toPath == '/audienceService/downloadDocument' ||
              toPath == '/audienceService/exhibitorInquiry'}"
            >
              <template slot="title">{{ $t('headerNav.menu7.nav') }}</template>
              <el-menu-item
                v-if="
                  $store.state.user.info.type
                    ? $store.state.user.info.type == 1
                    : true
                "
                index="8-1"
                @click="stadiumId = ''"
              >
                <router-link
                  :to="{ path: '/logIn', query: { tab: 2 } }"
                  active-class="activeClass"
                  >{{ $store.state.user.info.type?$t('headerNav.menu7.t1'):$t('headerNav.menu7.t2') }}</router-link
                >
              </el-menu-item>
<!--              <el-menu-item index="8-2" @click="stadiumId = ''">
                <router-link
                  to="/audienceService/visitGuide"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu7.t3') }}</router-link
                >
              </el-menu-item>-->
              <el-menu-item index="8-3" @click="stadiumId = ''">
                <router-link
                  to="/audienceService/exhibitorInquiry"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu7.t4') }}</router-link
                >
              </el-menu-item>
              <el-menu-item index="8-4" @click="stadiumId = ''">
                <router-link
                  to="/audienceService/downloadDocument"
                  active-class="activeClass"
                  >{{ $t('headerNav.menu7.t5') }}</router-link
                >
              </el-menu-item>
            </el-submenu>
            <!-- <el-submenu index="9" popper-class="childList" :popper-append-to-body="false">
              <template slot="title">记者服务</template>
              <el-menu-item index="9-1">
                <router-link to="logIn" active-class="activeClass">注册/登录</router-link>
              </el-menu-item>
              <el-menu-item index="9-2">
                <router-link to="wayToregister" active-class="activeClass">注册方式</router-link>
              </el-menu-item>
              <el-menu-item index="9-3">
                <router-link to="pressService" active-class="activeClass">媒体报道</router-link>
              </el-menu-item>
              <el-menu-item index="9-4">
                <router-link to="pressRelease" active-class="activeClass">新闻通稿</router-link>
              </el-menu-item>
            </el-submenu> -->
<!--            <el-submenu
              index="10"
              popper-class="childList"
              :popper-append-to-body="false"
              :class="{activeBottom:
              toPath == '/industryInformation/industryLabel' ||
              toPath == '/industryInformation/industryData' ||
              toPath == '/industryInformation/industryReport' ||
              toPath == '/industryInformation/industryPolicy' ||
              toPath == '/industryInformation/industryInformation' ||
              toPath == '/industryInformation/supplyAndDemandRelease' }"
            >
              <template slot="title">{{ $t('headerNav.menu8.nav') }}</template>
              <el-menu-item index="10-1">
                <router-link to="/industryInformation/industryLabel" active-class="activeClass">{{ $t('headerNav.menu8.t1') }}</router-link>
              </el-menu-item>
              <el-menu-item index="10-2">
                <router-link to="/industryInformation/industryData" active-class="activeClass">{{ $t('headerNav.menu8.t2') }}</router-link>
              </el-menu-item>
              <el-menu-item index="10-3">
                <router-link to="/industryInformation/industryReport" active-class="activeClass">{{ $t('headerNav.menu8.t3') }}</router-link>
              </el-menu-item>
              <el-menu-item index="10-4">
                <router-link to="/industryInformation/industryPolicy" active-class="activeClass">{{ $t('headerNav.menu8.t4') }}</router-link>
              </el-menu-item>
              <el-menu-item index="10-5">
                <router-link to="/industryInformation/industryInformation" active-class="activeClass">{{ $t('headerNav.menu8.t5') }}</router-link>
              </el-menu-item>
              <el-menu-item index="10-6" >
                <router-link to="/industryInformation/supplyAndDemandRelease" active-class="activeClass"  >{{ $t('headerNav.menu8.t6') }}</router-link>
                &lt;!&ndash; <a active-class="activeClass" @click="fbgxHandle">{{ $t('headerNav.menu8.t6') }}</a> &ndash;&gt;
              </el-menu-item>
              &lt;!&ndash; <el-menu-item index="10-5">
                <router-link to="exhibitionList" active-class="activeClass">周边服务</router-link>
              </el-menu-item> &ndash;&gt;
            </el-submenu>-->
          </el-menu>
          <!--           观众服务结束       -->
          <div class="langChange">
            <div><span :class="{ langAct: $i18n.locale==='zh' }" @click="langChangeHandle('zh')">中文</span></div>
            <div><span :class="{ langAct: $i18n.locale==='en' }" @click="langChangeHandle('en')">En</span></div>
          </div>
        </div>
        <div v-show="false" class="searchBox">
          <i class="el-icon-search searchIcon"></i>
          <input class="searchInput" type="text" v-model="searchText" placeholder="请输入内容搜索" />
          <div class="search">
            <el-input
              placeholder="请输入关键词"
              v-model="searchText"
              class="input-with-select"
            >
              <el-select
                v-model="golbalTab"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option label="展品" :value="1"></el-option>
                <el-option label="展商" :value="2"></el-option>
                <el-option label="新闻" :value="3"></el-option>
              </el-select>
              <el-button  slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <!-- <div class="loginWrap">
          <div style="borderRight:1px solid #021032" @click="navto('/login')">登录</div>
          <div @click="navto('/register')">注册</div>
        </div> -->
<!--        <el-button type="primary" round @click="open('http://desktop.weifang.ibloc.cn')">{{ $t('headerNav.action.t2') }}</el-button>-->
        <div class="zixun">
          <el-button type="primary" round @click="visibleContact=true" >{{ $t('headerNav.action.t1') }}</el-button>
        </div>

      </div>
    </div>
    <Mylogin :visible.sync="visible" />
    <Myfbgx :visible.sync="fbgxVisible" :mytype="1" />
    <Contact :visible.sync="visibleContact"></Contact>
  </div>
</template>
<script>
import Mylogin from "@/views/exhibition/compontent/mylogin";
import Myfbgx from "@/views/exhibition/compontent/fbgx";
import Contact from "./contact"

export default {
  components: { Mylogin, Myfbgx ,Contact},
  data() {
    return {
      golbalTab: 1,
      searchText: "",
      stadiumId: "",
      stadiumList: [],
      toPath: '/home',
      fbgxVisible: false,
      visible: false,
      visibleContact: false
    };
  },
  watch: {
    $route(to,from){
      // console.log(to)
      if (to.path == '/exhibitors') {
        this.toPath = ''
      } else {
        this.toPath = to.path
      }
    }
  },
  created () {
  },
  mounted() {
    let href = window.location.href
    // console.log(href.split('#')[1].split('?'))
    this.toPath = href.split('#')[1].split('?')[0]
    this.getStadiumList();
  },
  methods: {
    open(url) {
      // window.location.href='http://desktop.weifang.ibloc.cn'
      window.open(url)
    },
    langChangeHandle(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
    },
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
    navto(path) {
      this.$router.push({
        path: path,
      });
    },
    //获取展厅数据
    getStadiumList() {
      this.$http({
        url: this.$http.adornUrl("/stadium/list"),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.stadiumList = data.data || [];
        }
      });
    },
    fbgxHandle() {
      this.islogin().then(() => {
        this.fbgxVisible = true;
      });
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
  },
};
</script>
<style >
/* .childList {
  left: 0!important;
  transform: translateX(-50%);
} */
</style>
<style lang="scss" scoped>
.menu2{
  width: 300px;
  text-align: left;
  height: 290px;
}
.menu3{
  width: 240px;
  text-align: left;
  height: 290px;
}
/deep/.el-menu .el-submenu .el-menu--horizontal {
  left: 50% !important;
  width: 116px;
  transform: translateX(-50%) !important;
}
/deep/.el-menu .el-submenu {
  position: relative !important;
}
/deep/.el-menu.el-menu--horizontal {
  border-bottom: none;
}
/deep/.el-menu--horizontal .is-active {
  // border: none;
}
/deep/.el-submenu__title,
/deep/.el-menu-item {
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
}
/deep/.el-menu .el-menu-item {
  padding: 0 20px;
  &:hover {
    border-left: solid 6px !important;
    background-color: #33A2EF !important;
    color: #38B2FF !important;
  }
}
/deep/.el-menu .el-submenu .el-submenu__title {
  padding: 0 20px;
  &:hover {
    background-color: transparent !important;
  }
}
a {
  color: #fff !important;
  text-align: center;
  font-size: 16px;
  display: block;
}
.activeClass {
  color: #03e9fa !important;
}
.activeBottom {
  border-bottom: 2px solid;
  border-bottom-color: rgb(3, 233, 250) !important;
  color: rgb(3, 233, 250) !important;
}
/deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border: 0 !important;
    color: #303133;
}

/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
  border: 0;
  font-size: 16px;
  color: #fff !important;
}
/deep/ .el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid transparent;
}

.headerWrap {
  height: 90px;
  background: #0d1134;
  min-width: 1290px;
  .headerBox {
    height: 90px;
    display: flex;
    align-items: center;
    min-width: 1340px;
    .logoBox {
      height: 100%;
      width: 200px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 15px 45px;
      box-sizing: border-box;
      >a{
        display: inline-block;
        img {
          max-width: 80%;
          max-height: 80%;
        }
      }
    }

    .navBox {
      margin: 0 15px 0 0;
      display: flex;
      align-items: center;
      padding-left: 20px;
      /*justify-content: center;
      flex: 1;*/
      height: 100%;
      /deep/ .childList {
        /deep/ .el-menu {
          width: 116px;
          .el-menu-item {
            width: 116px;
          }
        }
      }
      /deep/ .el-submenu .el-menu-item {
        min-width: 116px !important;
      }
      /deep/ .el-menu--popup {
        min-width: 116px !important;
      }
      /deep/ .el-menu--collapse .el-menu .el-submenu {
        min-width: 116px !important;
      }
    }
    .searchBox {
      // width: 180px;
      // height: 32px;
      // background: #ffffff;
      // border-radius: 2px;
      // display: flex;
      // align-items: center;
      // font-size: 14px;
      // box-sizing: border-box;
      // padding-left: 10px;
      .searcgIcon {
        font-size: 20px;
        color: #333;
      }
      .searchInput {
        flex: 1;
        height: 32px;
        padding: 3px;
        box-sizing: border-box;
        border: none;
      }
      .search {
        width: 250px;
        /deep/ .el-input-group__prepend {
          width: 40px;
        }
      }
    }
    .loginWrap {
      width: 103px;
      height: 32px;
      background: #04e9fa;
      border-radius: 2px;
      color: white;
      display: flex;
      align-items: center;
      font-size: 14px;
      box-sizing: border-box;
      margin-left: 40px;
      div {
        width: 50%;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
      }
    }
    .contentWrap {
      width: 103px;
      height: 32px;
      background: #04e9fa;
      border-radius: 2px;
      color: white;
      display: flex;
      align-items: center;
      font-size: 14px;
      box-sizing: border-box;
      margin-left: 40px;
    }
  }
  .langChange{
    width: 32px;
    display: flex;
    flex-direction: column;
    >div:nth-of-type(1){
      border-bottom: 1px solid rgba(255, 255, 255, 0.33);
    }
    >div{
      padding: 8px 0;
      >span{
        cursor: pointer;
        color: #fff;
        font-size: 16px;
        font-family: SourceHanSansSC;
        font-weight: 400;
      }
      .langAct{
        color: #039DE3;
      }
    }
  }
  .zixun{
    padding-left: 90px;
  }
}
</style>
