<template>
  <div class="headerWrap">
<!--    <div class="commonContent" style="width: 100%">-->
      <div class="commonContent" >
      <div class="headerBox">
        <div class="logoBox" @click="stadiumId = ''">
          <router-link to="/home">
            <div class="sty-logo-title"><img style="width: 100%;" class src="../assets/logo3.gif" alt /></div>
          </router-link>
        </div>

        <div class="logoNav">
          <div @mouseover="mouseOver('1')" @mouseleave="leave()" @click="navto('/wanghongwf')" :class="mouseOver_index == 1 ? 'select-nav' : ''">
            <!-- {{ $t('headerNav.action.t3') }} -->
            <img v-if="$i18n.locale === 'zh'" style="width: 91px;height:30px;" src="../assets/images/nav/nav_topz1.png" />
            <img v-if="$i18n.locale === 'en'" style="width: 200px;" src="../assets/images/nav/nav_tope1.png" />
          </div>
          <!--          <div @mouseover="mouseOver('2')" @mouseleave="leave()"  :class="mouseOver_index == 2 ? 'select-nav' : ''" @click="webPage('https://b.eqxiu.com/s/ULj1iI9w?eqrcode=1&share_level=3&from_user=20211011c2d1a620&from_id=1c080300-0&share_time=1633917941063')" class="">商机</div>-->
          <div @mouseover="mouseOver('2')" @mouseleave="leave()" :class="mouseOver_index == 2 ? 'select-nav' : ''" @click="webPage('http://ccpit.weifang.gov.cn/')" class="">
            <!-- {{ $t('headerNav.action.t4') }} -->
            <img v-if="$i18n.locale === 'zh'" style="width: 91px;height:30px;" src="../assets/images/nav/nav_topz2.png" />
            <img v-if="$i18n.locale === 'en'" style="width: 200px;" src="../assets/images/nav/nav_tope2.png" />
          </div>
          <!-- 隐藏新闻报道 -->
          <!-- <div @mouseover="mouseOver('3')" @mouseleave="leave()" :class="mouseOver_index == 3 ? 'select-nav' : ''" @click="navto('/newsCenter/exhibitionReport')"> -->
                      <!-- {{ $t('headerNav.action.t5') }} -->
            <!-- <img v-if="$i18n.locale === 'zh'" style="width: 91px;height:30px;" src="../assets/images/nav/nav_topz3.png" /> -->
            <!-- <img v-if="$i18n.locale === 'en'" style="width: 200px;" src="../assets/images/nav/nav_tope3.png" /> -->
          <!-- </div> -->
          <div>
            <!-- <span style="width: 100px;" ></span> -->
          </div>
      </div>
        <div class="logoNav2">
          <!-- 全文搜索 -->

          <div  class="searchBox">
              <div class="search">
                <el-input placeholder="请输入关键词" v-model="searchText" class="input-with-select" @input="getValue" >
                  <el-select v-model="golbalTab"  slot="prepend" placeholder="请选择" >
                    <el-option label="新闻" :value="1"></el-option>
                    <el-option label="展商" :value="2"></el-option>
                    <el-option label="展品" :value="3"></el-option>
                    <el-option label="嘉宾" :value="4"></el-option>
                  </el-select>
                  <el-button  slot="append" icon="el-icon-search" @click='goTo()'></el-button>
                </el-input>
              </div>
          </div>
      </div>
        <div class="logoNav3">
          <div></div>
          <div class="langChange">
            <div><span :class="{ langAct: $i18n.locale === 'zh' }" @click="langChangeHandle('zh')">中文</span></div>
            <div><span :class="{ langAct: $i18n.locale === 'en' }" @click="langChangeHandle('en')">EN</span></div>
          </div>
          <div class="zixun">
            <!-- <el-button type="primary" round @click="visibleContact = true">{{ $t('headerNav.action.t1') }}</el-button> -->
            <el-button type="primary" round @click="lxwm_show = true">{{ $t('headerNav.action.t1') }}</el-button>
            <!--            <el-button type="primary" style="margin-left: 50px;" round  @click="zxqtHandle">预约洽谈</el-button>-->
          </div>


          <!-- 联系我们 -->
          <div v-if="lxwm_show" class="lx-mark"></div>
          <div v-if="lxwm_show" class="lx-cent">
            <div class="lx-title">
              <div class="lx-title-title">联系我们</div>
              <img @click="lxwm_show = false" src="../assets/images/home/topnav_icon7.png" />
            </div>
            <div class="lx-img"><img src="../assets/images/home/topnav_img.png" /></div>
            <div class="lx-botm">
              <span
                @click="
                  visibleContact = true;
                  lxwm_show = false;
                "
              >
                我要留言
              </span>
            </div>
            <div class="lx-icon">
              <div class="lx-icon-list">
                <div class="lx-icon-item">
                  <img src="../assets/images/home/topnav_icon3.png" />
                  电 话：0086-536-8789045
                </div>
                <div class="lx-icon-item">
                  <img src="../assets/images/home/topnav_icon4.png" />
                  传 真：0086-536-8789407
                </div>
                <div class="lx-icon-item">
                  <img src="../assets/images/home/topnav_icon5.png" />
                  邮 箱：cjkiexpo@cjkiexpo.org.cn
                </div>
                <div class="lx-icon-item">
                  <img src="../assets/images/home/topnav_icon6.png" />
                  地 址：中国山东潍坊市胜利东街
                </div>
              </div>
              <div class="lx-erweima">
                <div class="lx-erweima-item">
                  <img src="../assets/images/home/topnav_img1.png" />
                  <div class="lx-erweima-item-test">
                    <img src="../assets/images/home/topnav_icon1.png" />
                    公众号
                  </div>
                </div>
                <div class="lx-erweima-item">
                  <img src="../assets/images/home/topnav_img2.png" />
                  <div class="lx-erweima-item-test">
                    <img src="../assets/images/home/topnav_icon2.png" />
                    抖音号
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <!-- 联系我们 end -->
          <!-- 预约洽谈 -->
          <div v-if="qiatan_show" class="qiatan-cent">
            <img @click="qiatan_show = !qiatan_show" class="qiatan-icon" src="../assets/images/exhibition/close.png" />
            <div class="qiatan-cent-title">预约洽谈</div>
            <div>
              <input type="text" placeholder="请输入要预约洽谈的企业名称" @input="qiyeInput" v-model="keyword" />
              <button style="background-color: #f5f7fa;" type="button" class="el-button el-button--default"><i class="el-icon-search"></i></button>
            </div>
            <!-- 企业列表 -->
            <div class="companyData" v-if="companyData.length > 0">
              <div
                class="companyData-item"
                :class="companyData_index == index ? 'select-nav' : ''"
                v-for="(item, index) in companyData"
                @mouseover="mouseCompanyData(index)"
                @mouseleave="leave()"
                @click="determineQY(item)"
              >
                {{ item.name }}
              </div>
            </div>
            <div v-if="companyData_info" class="companyData-info">您选择的企业：{{ companyData_info.name }}</div>
            <div v-if="timeData_info" class="companyData-info">您选择的约谈时间：{{ timeData_info.start }}--{{ timeData_info.end }}</div>
            <!-- 预约时间列表 -->
            <div v-if="companyData_info" class="timeData">
              <div
                class="timeData-item"
                :class="timeData_index == index ? 'select-nav' : ''"
                v-for="(item, index) in timeData"
                @mouseover="mouseTimeData(index)"
                @mouseleave="leave()"
                @click="determineTime(item)"
              >
                {{ item.start }}--{{ item.end }}
              </div>
            </div>
            <div class="queding-yuetan"><span @click="submitAppointment">确定</span></div>
          </div>
        </div>
      </div>
    </div>
    <Mylogin :visible.sync="visible" />
    <Myfbgx :visible.sync="fbgxVisible" :mytype="1" />
    <Contact :visible.sync="visibleContact"></Contact>
  </div>
</template>
<script>
import Mylogin from '@/views/exhibition/compontent/mylogin';
import Myfbgx from '@/views/exhibition/compontent/fbgx';
import Contact from './contact';

export default {
  components: { Mylogin, Myfbgx, Contact },
  data() {
    return {
      golbalTab: 1,
      searchText: '',
      stadiumId: '',
      stadiumList: [],
      toPath: '/home',
      fbgxVisible: false,
      visible: false,
      visibleContact: false,
      exhibitorId: '',
      exhibitor3dId: '',
      companyName: '',
      timeType: '',
      mouseOver_index: 0,
      keyword: '',
      qiatan_show: false,

      // 预约洽谈
      companyData: [],
      companyData_index: null,
      companyData_info: '',
      timeData: [],
      timeData_index: null,
      timeData_info: '',

      lxwm_show: false,
      pagevalue:'',
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to)
      if (to.path == '/exhibitors') {
        this.toPath = '';
      } else {
        this.toPath = to.path;
      }
    },
    qiatan_show(value) {
      if (value) {
        this.getAppointment();
      }
    }
  },
  created() {},
  mounted() {
    let href = window.location.href;
    // console.log(href.split('#')[1].split('?'))
    this.toPath = href.split('#')[1].split('?')[0];
    this.getStadiumList();
  },
  methods: {
    getValue(value){
      this.pagevalue = value
    },
    goTo(){
      this.$router.push({
        path:'searchDet',
        query:{
          value:this.pagevalue,
          lable:JSON.stringify(this.golbalTab)
          },
        });
    },
    submitAppointment() {
      let token = localStorage.getItem('userId');
      if (this.companyData_info && this.timeData_info) {
        console.log();
        this.$http({
          url: this.$http.adornUrl('/appointmentRecord/save'),
          method: 'post',
          data: this.$http.adornData({
            exhibitor3dId: this.exhibitor3dId,
            userId: token,
            timeType: this.timeType,
            exhibitorId: this.exhibitorId
          })
        }).then(({ data }) => {
          if (data && data.code === 1) {
            this.$notify({
              title: '预约成功',
              message: data.msg,
              type: 'success',
              duration: 0,
              position: 'top-right'
            });
            this.qiatan_show = false;
            this.companyData_info = '';
            this.exhibitor3dId = '';
            this.exhibitorId = '';
            this.timeType = '';
            this.timeData_info = '';
            this.timeData = [];
          }
        });
      } else {
        this.$message({
          message: '请选择企业和预约时间段',
          type: 'warning'
        });
      }
    },
    getAppointment() {
      this.$http({
        url: this.$http.adornUrl('/appointment/list'),
        method: 'get'
      }).then(({ data }) => {
        if (data && data.code === 1) {
          for (let i = 0; i < data.data.list.length; i++) {
            let exhibitor = {
              id: data.data.list[i].exhibitorId,
              name: data.data.list[i].timeType,
              id3d: data.data.list[i].exhibitor3dId
            };
            this.companyData.push(exhibitor);
          }
        }
      });
    },
    mouseOver(index) {
      this.mouseOver_index = index;
    },
    mouseCompanyData(index) {
      this.companyData_index = index;
    },
    mouseTimeData(index) {
      this.timeData_index = index;
    },
    leave() {
      this.mouseOver_index = 0;
      this.companyData_index = null;
    },

    zxqtHandle() {
      this.islogin().then(() => {
        this.qiatan_show = true;
      });
    },
    determineQY(item) {
      this.companyData = [];
      this.companyData_info = item;
      this.companyName = item.companyName;
      this.exhibitor3dId = item.id3d;
      this.exhibitorId = item.id;

      this.$http.get(`${this.$http.adornUrl('/appointmentTime/list')}`, { params: { companyId: this.exhibitor3dId } }).then(({ data }) => {
        if (data && data.code === 1) {
          for (let i = 0; i < data.data.list.length; i++) {
            let time = {
              id: data.data.list[i].exhibitorId,
              appid: data.data.list[i].appId,
              start: data.data.list[i].starttime,
              end: data.data.list[i].endtime
            };
            this.timeData.push(time);
          }
        }
      });
    },
    determineTime(item) {
      this.timeType = item.appid;
      this.timeData_info = item;
    },
    qiyeInput() {
      /*this.companyData = [
        { id: 1, name: '山东金博利达精密机械有限公司' }

      ];*/
    },

    webPage(url) {
      window.open(url, '_blank');
    },
    open(url) {
      // window.location.href='http://desktop.weifang.ibloc.cn'
      window.open(url);
    },
    langChangeHandle(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);
    },
    goHome() {
      this.$router.push({
        path: '/'
      });
    },
    navto(path) {
      this.$router.push({
        path: path
      });
    },
    //获取展厅数据
    getStadiumList() {
      this.$http({
        url: this.$http.adornUrl('/stadium/list'),
        method: 'get'
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
/deep/ .commonContent {
  background-image: url(../assets/images/home/bg-img.png);
  background-size: 100% 100%;
  width: 1400px;
}
.wenjuan-yuyue {
  font-size: 14px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  padding: 5px 23px;
  border-radius: 20px;
}
.qiatan-cent {
  background-color: #fff;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  position: fixed;
  border-radius: 30px;
  box-shadow: 0 8px 25px 8px rgba(169, 167, 167, 0.3);
  padding: 40px 60px 20px;
  z-index: 12000;
}
.qiatan-icon {
  position: absolute;
  right: 30px;
  top: 18px;
}
.qiatan-cent-title {
  font-size: 30px;
  font-weight: 700;
  color: #343434;
  border-left: 5px solid #2884ec;
  padding-left: 30px;
  margin-bottom: 40px;
}
input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 75%;
}
.companyData {
  border: 1px solid #dcdfe6;
  width: 71%;
  padding: 0 10px;
  margin-top: 7px;
  border-radius: 4px;
  height: 204px;
  overflow: scroll;
}
.companyData::-webkit-scrollbar {
  width: 15px;
}
// <!--修改 滚动条的 下面 的 样式-->
.companyData::-webkit-scrollbar-track {
  background-color: #fff;
  -webkit-border-radius: 0em;
  -moz-border-radius: 0em;
  border-radius: 0em;
}
// <!--修改 滑块 -->
.companyData::-webkit-scrollbar-thumb {
  background-color: #409eff;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

.companyData-item {
  border-bottom: 1px solid #dcdfe6;
  height: 40px;
  font-size: 15px;
  display: flex;
  align-items: center;
  font-family: 宋体;
}
.companyData-info {
  font-size: 19px;
  font-weight: 700;
  color: #343434;
  padding: 20px 0;
}
.timeData {
  display: flex;
  align-items: center;
  flex-flow: wrap;
  width: 100%;
}
.timeData-item {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  padding: 10px 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: 宋体;
}
.queding-yuetan {
  text-align: center;
  margin-top: 40px;
}
.queding-yuetan span {
  font-size: 18px;
  background-color: #409eff;
  color: #fff;
  padding: 6px 40px;
  cursor: pointer;
  border-radius: 4px;
}

/deep/ .logoBox-title {
  color: #000;
  white-space: nowrap;
  letter-spacing: 5px;
}
/deep/ .sty-logo-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/deep/ .el-submenu__title i {
  color: #fff;
}

/deep/ .logoNav {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
}
/deep/ .logoNav2 {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
}
/deep/ .logoNav3 {
  width: 20%;
  display: flex;
  align-items:center;
  justify-content: space-around;
  font-size: 15px;
}

/deep/ .select-nav {
  text-decoration: underline;
  cursor: pointer;
}

.menu2 {
  width: 300px;
  text-align: left;
  height: 290px;
}
.menu3 {
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
    background-color: #33a2ef !important;
    color: #38b2ff !important;
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
  // color: #03e9fa !important;
}
.activeBottom {
  border-bottom: 2px solid;
  // border-bottom-color: rgb(3, 233, 250) !important;
  // color: rgb(3, 233, 250) !important;
}
/deep/ .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: 0 !important;
  color: #303133;
}

/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  border: 0;
  font-size: 16px;
  color: #fff !important;
}
/deep/ .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid transparent;
}

.headerWrap {
  height: 100px;
  // background: #0d1134;
  min-width: 1290px;
  font-family: '宋体';
  .headerBox {
    height: 110px;
    display: flex;
    align-items: center;
    // min-width: 1340px;
    min-width: 100%;
    .logoBox {
      height: 100%;
      width: 30%;
      justify-content: center;
      // width: 200px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 15px -100px 15px 5px;
      box-sizing: border-box;
      > a {
        display: inline-block;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    .navBox {
      position: fixed;
      height: 80px;
      width: 100%;
      top: 300px;
      justify-content: center;
      background-color: #000;
      z-index: 1200;

      margin: 0 15px 0 0;
      display: flex;
      align-items: center;
      padding-left: 20px;

      // height: 100%;
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
    //搜索框大小
    .searchBox {
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
        width: 350px;
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
  .langChange {
    // width: 32px;
    display: flex;
    flex-direction: column;
    > div:nth-of-type(1) {
      border-bottom: 1px solid #000;
    }
    > div {
      padding: 3px 0;
      > span {
        cursor: pointer;
        color: #000;
        font-size: 15px;
        font-family: SourceHanSansSC;
        font-weight: 400;
        letter-spacing: 2px;
      }
      .langAct {
        color: #039de3;
      }
    }
  }
  .zixun {
    padding-right: 0px;
  }
}

/deep/ .el-button.is-round {
  padding: 5px 23px;
  margin-right: -35px;
  font-size: 15px;
}

.lx-mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6700;
}
.lx-cent {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6800;
  background: #fff;
  width: 895px;
  height: 673px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
}
.lx-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px 0px 48px;
  border-bottom: 1px solid #eeeff0;
}
.lx-title img {
  width: 23px;
}
.lx-title-title {
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2298ff;
  line-height: 46px;
  border-bottom: 6px solid #2298ff;
  width: 76px;
  white-space: normal;
}
.lx-img {
  text-align: center;
  margin: 64px 0 52px 0px;
}
.lx-img img {
  width: 393px;
}
.lx-botm {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 54px;
}
.lx-botm span {
  width: 144px;
  height: 40px;
  background: #2298ff;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lx-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lx-icon-list {
  margin-left: 83px;
}
.lx-icon-item {
  display: flex;
  align-items: center;
  margin-bottom: 27px;
}
.lx-icon-item img {
  width: 24px;
  margin-right: 9px;
}
.lx-erweima {
  display: flex;
  align-items: center;
}
.lx-erweima-item {
  margin-right: 68px;
  font-size: 17px;
  font-weight: 500;
  color: #666666;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lx-erweima-item img {
  width: 116px;
  margin-bottom: 10px;
}
.lx-erweima-item-test img {
  width: 26px;
  margin-bottom: 0px;
}
.lx-erweima-item-test {
}
</style>
