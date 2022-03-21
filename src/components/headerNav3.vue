<template>
  <div class="headerWrap">
    <div class="commonContent" :style=" $i18n.locale==='zh' ? 'width: 1290px': 'width: 1680px'">
      <div class="headerBox">
        <div class="logoBox" @click="stadiumId = ''">
          <router-link to="/home">
            <img style="width: 100%;" class src="../assets/logo3.png" alt />

          </router-link>
        </div>

        <div class="navBox">

          <el-menu
            style="display: flex;"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#333"
            background-color="#fff"
          >
            <!--          首页开始          -->
            <el-menu-item index="1" @click="stadiumId = ''" :class="{activeBottom: toPath == '/home'}">
              <router-link to="/home" active-class="activeClass">{{ $t('headerNav.menu1') }}</router-link>
            </el-menu-item>
            <!--          首页结束         -->

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

              <el-menu-item index="4-1" @click="stadiumId = ''" class="menu2">
                <router-link to="/schedule?name=论坛日程" active-class="activeClass"
                >{{ $t('headerNav.menu3.t1') }}</router-link
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
              <el-menu-item index="4-2" @click="stadiumId = ''" class="menu2">
                <router-link to="/conferenceLive1" active-class="activeClass"
                >{{ $t('headerNav.menu3.t2') }}</router-link
                >
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
              toPath == '/newsCenter/pastReview' ||
              toPath == '/newsCenter/livePhotoAlbum'}
"
            >
              <template slot="title">{{ $t('headerNav.menu4.nav') }}</template>
              <el-menu-item index="5-3" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/quality"
                  active-class="activeClass"
                >{{ $t('headerNav.menu4.t3') }}</router-link
                >
              </el-menu-item>
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


              <el-menu-item index="5-6" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/pastReview"
                  active-class="activeClass"
                >{{ $t('headerNav.menu4.t4') }}</router-link
                >
              </el-menu-item>

<!--              <el-menu-item index="5-7" @click="stadiumId = ''">
                <router-link
                  to="/newsCenter/imageSet"
                  active-class="activeClass"
                >{{ $t('headerNav.menu4.t5') }}</router-link
                >
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
                >
                  <span v-if="!isEn">{{ item.name }}</span>
                  <span v-if="isEn">{{ item.nameEn }}</span>
                </router-link
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
              <el-menu-item index="7-2">
                <router-link to="/wenjuan" active-class="activeClass">{{ $t('headerNav.menu6.t3') }}</router-link>
              </el-menu-item>
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
            <el-menu-item index="8-5" @click="stadiumId = ''">
              <router-link to="/gongqiu">供求信息</router-link>
            </el-menu-item>
          </el-menu>
          <!--           观众服务结束       -->
          <div class="langChange">
            <div style="border-bottom: 1px solid #333;"><span :class="{ langAct: $i18n.locale==='zh' }" @click="langChangeHandle('zh')">中文</span></div>
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

        <div class="zixun">
          <el-button type="primary" round @click="visibleContact=true" >{{ $t('headerNav.action.t1') }}</el-button>
<!--          <el-button type="primary" style="margin-left: 20px;" round  @click="zxqtHandle">预约洽谈</el-button>-->
        </div>

        <!-- 预约洽谈 -->
        <div v-if="qiatan_show" class="qiatan-cent" >
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
      isEn:false,
      stadiumList: [],
      toPath: '/home',
      fbgxVisible: false,
      visible: false,
      visibleContact: false,
      exhibitorId:'',
      exhibitor3dId:'',
      companyName:'',
      timeType:'',
      mouseOver_index: 0,
      keyword: '',
      qiatan_show: false,

      // 预约洽谈
      companyData: [

      ],
      companyData_index: null,
      companyData_info: '',
      timeData: [

      ],
      timeData_index: null,
      timeData_info: ''
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
    },
    qiatan_show(value){
      if (value){
        this.getAppointment();
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
    if (localStorage.getItem("lang")=="en"){
      this.isEn = true;
    }else {
      this.isEn = false;
    }
    window.addEventListener("setItemEvent", (e) => {

      if (e.newValue=="en"){
        this.isEn = true;
      }else {
        this.isEn = false;
      }
    });
  },
  methods: {
    submitAppointment(){
      let token = localStorage.getItem('userId');
      if (this.companyData_info &&  this.timeData_info ){
        console.log();
        this.$http({
          url: this.$http.adornUrl('/appointmentRecord/save'),
          method: 'post',
          data: this.$http.adornData({
            exhibitor3dId: this.exhibitor3dId,
            userId: token,
            timeType: this.timeType,
            exhibitorId: this.exhibitorId
          }),
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
            this.companyData_info = "";
            this.exhibitor3dId = "";
            this.exhibitorId = "";
            this.timeType = "";
            this.timeData_info = "";
            this.timeData=[];
          }
        });

      }else {
        this.$message({
          message: '请选择企业和预约时间段',
          type: 'warning'
        });
      }
    },
    getAppointment(){
      this.$http({
        url: this.$http.adornUrl('/appointment/list'),
        method: 'get'
      }).then(({ data }) => {
        if (data && data.code === 1) {

          for (let i=0;i<data.data.list.length;i++){
            let exhibitor = {
              "id": data.data.list[i].exhibitorId,
              "name": data.data.list[i].timeType,
              "id3d": data.data.list[i].exhibitor3dId,
            }
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

      this.$http.get(`${this.$http.adornUrl('/appointmentTime/list')}`,
        { params: { companyId: this.exhibitor3dId } }
      ).then(({ data }) => {
        if (data && data.code === 1) {

          for (let i=0;i<data.data.list.length;i++){
            let time = {
              "id": data.data.list[i].exhibitorId,
              "appid": data.data.list[i].appId,
              "start": data.data.list[i].starttime,
              "end": data.data.list[i].endtime,
            }
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

    open(url) {
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

<style lang="scss" scoped>
  .headerWrap .langChange{
    padding-left: 20px;
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
  background-color: #409EFF;
  color: #fff;
  padding: 6px 40px;
  border-radius: 4px;
}

.logwen{
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #636363;
  white-space: nowrap;
}
.menu2{
  // width: 300px;
  text-align: left;
  height: 290px;
}
.menu3{
  // width: 240px;
  text-align: left;
  height: 290px;
}
/deep/.el-menu .el-submenu .el-menu--horizontal {
  left: 50% !important;
  // width: 116px;
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
  color: #333 !important;
  text-align: center;
  font-size: 16px;
  display: block;
}
.activeClass {
  color: #03e9fa !important;
}
.activeBottom {
  // border-bottom: 2px solid;
  // border-bottom-color: rgb(3, 233, 250) !important;
  color: rgb(3, 233, 250) !important;
}
/deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border: 0 !important;
  // color: #303133;
}

/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
  border: 0;
  font-size: 16px;
  color: #409EFF;
}
/deep/ .el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid transparent;
}

.headerWrap {
  height: 100px;
  background: #fff;
  min-width: 1290px;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  .headerBox {
    height: 100px;
    display: flex;
    align-items: center;
    min-width: 1340px;
    .logoBox {
      height: 100%;
      width: 220px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 15px 10px;
      box-sizing: border-box;
      >a{
        display: inline-block;
        img {
          // max-width: 60%;
          // max-height: 80%;
        }
      }
    }

    .navBox {
      margin: 0 15px 0 0;
      display: flex;
      align-items: center;
      white-space: nowrap;
      padding-left: 20px;
      /*justify-content: center;
      flex: 1;*/
      height: 100%;
      /deep/ .childList {
        /deep/ .el-menu {
          // width: 116px;
          .el-menu-item {
            // width: 116px;
            display: flex;
            text-align: left;
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
        color: #333;
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
    display: flex;
    align-items: center;
    padding-left: 40px;
  }
}
</style>
