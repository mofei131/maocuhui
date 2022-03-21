<template>
  <div class="homePage">
    <!-- 首页img -->
    <div class="home-img">
      <img src="../../assets/home_img.png" />
      <div class="home-img-bofang"><img @click="home_img_bofang = true" src="../../assets/images/home/zb_bf2.png" /></div>
    </div>
    <!-- 首页视频弹窗 -->
    <div style="width: 100%;">
      <div class="home_img_bofang-mark" v-if="home_img_bofang">
        <img style="position: absolute;top: 0;right: 0;z-index: 7500;" @click="home_img_bofang = false" src="../../assets/images/exhibition/close.png" />
        <video width="800px" height="450px" style="margin-left: 7px;" controls="controls" src="http://cjkiexpo.org.cn/videosjava/202110252055.mp4"></video>
      </div>
    </div>
    <!-- 导航 -->
    <div class="navBox" id="navBox" style="position: absolute;width: 100%;z-index: 101;" :style="searchBarFixed ? 'position:fixed;top:0px' : ''">
      <!--      <el-menu
              class="el-menu-demo"
              mode="horizontal"
              text-color="#fff"
              background-color="#000"
              style="height: 80px;display: flex;align-items: center;justify-content: space-around;padding: 0 100px;"
            >-->
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
        background-color="#000"
        style="height: 80px;display: flex;align-items: center;justify-content: space-around;padding: 0 100px;width: 1200px;margin: auto;"
      >



        <!--          首页开始          -->
        <el-menu-item index="1" @click="stadiumId = ''" :class="{ activeBottom: toPath == '/home' }">
          <router-link to="/home" active-class="activeClass" style="color: #fff">{{ $t('headerNav.menu1') }}</router-link>
        </el-menu-item>
        <!--          首页结束         -->

        <!--           博览会概况开始       -->
        <el-submenu
          index="3"
          popper-class="childList"
          :popper-append-to-body="false"
          :class="{
            activeBottom:
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
          <template slot="title">
            {{ $t('headerNav.menu2.nav') }}
          </template>
          <el-menu-item index="3-1" @click="stadiumId = ''">
            <router-link to="/exhibitionOverview/exhibitionGuide" active-class="activeClass">{{ $t('headerNav.menu2.t1') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-2" @click="stadiumId = ''">
            <router-link to="/exhibitionOverview/exhibitionOrganization" active-class="activeClass">{{ $t('headerNav.menu2.t2') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-3" @click="stadiumId = ''">
            <router-link to="/exhibitionOverview/exhibitionInfo" active-class="activeClass">{{ $t('headerNav.menu2.t3') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-8" @click="stadiumId = ''" title="拟邀嘉宾">
            <router-link to="/exhibitionOverview/inviteGuests" active-class="activeClass">{{ $t('headerNav.menu2.t8') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-7" @click="stadiumId = ''">
            <router-link to="/exhibitionOverview/exhibitionDistribution?id=6" active-class="activeClass">{{ $t('headerNav.menu2.t7') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-4">
            <router-link to="/exhibitionOverview/traffic" active-class="activeClass">{{ $t('headerNav.menu2.t4') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-5">
            <router-link to="/exhibitionOverview/peripheralServicess" active-class="activeClass">{{ $t('headerNav.menu2.t5') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-6" @click="stadiumId = ''">
            <router-link to="/exhibitionOverview/listOfExhibitors" active-class="activeClass">{{ $t('headerNav.menu2.t6') }}</router-link>
          </el-menu-item>
          <el-menu-item index="3-7">
            <router-link  active-class="activeClass">供求信息</router-link>
          </el-menu-item>
        </el-submenu>

        <!--           博览会概况结束       -->
        <!--           会议活动开始       -->
        <el-submenu
          index="4"
          popper-class="childList"
          :popper-append-to-body="false"
          :class="{
            activeBottom:
              toPath == '/schedule' ||
              toPath == '/conferenceLive1' ||
              toPath == '/conferenceLive2' ||
              toPath == '/conferenceLive3' ||
              toPath == '/conferenceLive4' ||
              toPath == '/conferenceLive5' ||
              toPath == '/conferenceLive6' ||
              toPath == '/conferenceLive7' ||
              toPath == '/conferenceLive8' ||
              toPath == '/exhibitsList'
          }"
        >
          <template slot="title">
            {{ $t('headerNav.menu3.nav') }}
          </template>
          <!-- <el-menu-item index="4-1">
            <router-link to="conferenceLive" active-class="activeClass">会议活动</router-link>
          </el-menu-item> -->
          <el-menu-item index="4-1" @click="stadiumId = ''" class="menu2">
            <router-link to="/schedule?name=论坛日程" active-class="activeClass">{{ $t('headerNav.menu3.t1') }}</router-link>
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
          <el-menu-item index="4-2" class="menu2">
            <router-link to="/conferenceLive1" active-class="activeClass">{{ $t('headerNav.menu3.t2') }}</router-link>
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
          :class="{ activeBottom: toPath == '/newsCenter/exhibitionReport' || toPath == '/newsCenter/pastReview' || toPath == '/newsCenter/livePhotoAlbum' }"
        >
          <template slot="title">
            {{ $t('headerNav.menu4.nav') }}
          </template>
          <el-menu-item index="5-3" @click="stadiumId = ''">
            <router-link to="/newsCenter/quality?type=5" active-class="activeClass">{{ $t('headerNav.menu4.t3') }}</router-link>
          </el-menu-item>
          <el-menu-item index="5-2" @click="stadiumId = ''">
            <router-link to="/newsCenter/exhibitionReport" active-class="activeClass">{{ $t('headerNav.menu4.t2') }}</router-link>
          </el-menu-item>
          <el-menu-item index="5-9" @click="stadiumId = ''">
            <router-link to="/newsCenter/reprintedAndMediaReports" active-class="activeClass">{{ $t('headerNav.menu4.t9') }}</router-link>
          </el-menu-item>

          <el-menu-item index="5-6" @click="stadiumId = ''">
            <router-link to="/newsCenter/pastReview" active-class="activeClass">{{ $t('headerNav.menu4.t4') }}</router-link>
          </el-menu-item>

          <!--          <el-menu-item index="5-7" @click="stadiumId = ''">
            <router-link to="/newsCenter/livePhotoAlbum" active-class="activeClass">{{ $t('headerNav.menu4.t5') }}</router-link>
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
          <template slot="title">
            {{ $t('headerNav.menu5.nav') }}
          </template>
          <el-menu-item
            :index="'6' + index + 1"
            class="menu3"
            v-for="(item, index) in stadiumList"
            :key="index"
            v-if="index < 4"
            v-show="item.name !== '潍坊馆' && item.name !== '智慧山东馆'"
            @click="stadiumId = item.id"
          >
            <router-link :to="'/exhibitionList?stadiumId=' + item.id + '&categoryId=' + item.categoryId" :class="{ activeClass: stadiumId == item.id }">
              <span v-if="!isEn">{{ item.name }}</span>
              <span v-if="isEn">{{ item.nameEn }}</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="6-8" @click="stadiumId = ''" class="menu3">
            <router-link to="/development" active-class="activeClass">{{ $t('headerNav.menu5.t1') }}</router-link>
          </el-menu-item>
          <el-menu-item index="6-9" @click="stadiumId = ''" class="menu3">
            <router-link to="/newsCenter/pastReview" active-class="activeClass">{{ $t('headerNav.menu5.t3') }}</router-link>
          </el-menu-item>
          <el-menu-item index="6-9" @click="stadiumId = ''" class="menu3">
            <router-link to="/exhibitionList?categoryId=22" active-class="activeClass">{{ $t('headerNav.menu5.t2') }}</router-link>
          </el-menu-item>
        </el-submenu>
        <!--           在线展厅结束       -->
        <!--           展商服务开始       -->
        <el-submenu
          index="7"
          popper-class="childList"
          :popper-append-to-body="false"
          :class="{ activeBottom: toPath == '/exhibitorService/visitProcedure' || toPath == '/exhibitorService/downloadDocument' }"
        >
          <template slot="title">
            {{ $t('headerNav.menu6.nav') }}
          </template>
          <el-menu-item v-if="$store.state.user.info.type ? $store.state.user.info.type == 2 : true" index="7-1" @click="stadiumId = ''">
            <router-link :to="{ path: '/logIn', query: { tab: 1 } }" active-class="activeClass">
              {{ $store.state.user.info.type ? $t('headerNav.menu6.t1') : $t('headerNav.menu6.t2') }}
            </router-link>
          </el-menu-item>
          <el-menu-item index="7-2">
            <router-link to="/wenjuan" active-class="activeClass">{{ $t('headerNav.menu6.t3') }}</router-link>
          </el-menu-item>
          <el-menu-item index="7-3" @click="stadiumId = ''">
            <router-link to="/exhibitorService/downloadDocument" active-class="activeClass">{{ $t('headerNav.menu6.t4') }}</router-link>
          </el-menu-item>
        </el-submenu>
        <!--           展商服务结束       -->
        <!--           观众服务开始       -->
        <el-submenu
          index="8"
          popper-class="childList"
          :popper-append-to-body="false"
          :class="{
            activeBottom:
              // toPath == '/audienceService/visitGuide' ||
              toPath == '/audienceService/downloadDocument' || toPath == '/audienceService/exhibitorInquiry'
          }"
        >
          <template slot="title">
            {{ $t('headerNav.menu7.nav') }}
          </template>
          <el-menu-item v-if="$store.state.user.info.type ? $store.state.user.info.type == 1 : true" index="8-1" @click="stadiumId = ''">
            <router-link :to="{ path: '/logIn', query: { tab: 2 } }" active-class="activeClass">
              {{ $store.state.user.info.type ? $t('headerNav.menu7.t1') : $t('headerNav.menu7.t2') }}
            </router-link>
          </el-menu-item>

          <el-menu-item index="8-3" @click="stadiumId = ''">
            <router-link to="/audienceService/exhibitorInquiry" active-class="activeClass">{{ $t('headerNav.menu7.t4') }}</router-link>
          </el-menu-item>
          <el-menu-item index="8-4" @click="stadiumId = ''">
            <router-link to="/audienceService/downloadDocument" active-class="activeClass">{{ $t('headerNav.menu7.t5') }}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <!--           观众服务结束       -->
    </div>
    <!-- 导航结束 -->

    <!-- 直播内容 -->
    <div class="home-title-bg commonContent"><span>活动视频</span></div>
    <!-- <div class="home-title-bg commonContent"></div> -->
    <div class="home-zb commonContent">
      <div class="home-zb-item">
        <img :src="zhiboData[0].icon" />
        <div class="home-zb-info">
          <div class="home-zb-title">{{ zhiboData[0].title }}</div>
          <div class="home-zb-info1">
            <div class="home-zb-time"></div>
            <div class="home-zb-static1" @click="toPage(zhiboData[0].url)"><span>回看</span></div>
          </div>
        </div>
      </div>
      <div class="home-zhibo-other">
        <div class="home-zhibo-other-item" :style="index <= 2 ? 'margin-bottom: 20px;' : ''" v-for="(item, index) in zhiboData" v-if="index != 0">
          <div class="home-zhibo-other-img"><img :src="item.icon" /></div>
          <div class="home-zhibo-other-info">
            <div class="home-zhibo-other-time">{{ item.title }}</div>
            <div class="home-zhibo-other-url" @click="toPage(item.url)" v-if="item.static == 1"><span style="cursor: pointer">查看</span></div>
            <div class="home-zhibo-other-url" @click="toPage(item.url)" v-if="item.static != 1"><span style="cursor: pointer">查看</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 直播内容 end -->
    <!-- 博览会概述内容 -->
    <div class="blh-bg">
      <img class="home-blh-iocn1" src="../../assets/images/home/home_x_icon.png" />
      <img class="home-blh-iocn2" src="../../assets/images/home/home_x_icon.png" />
      <div class="blh-title commonContent">3D展洽馆</div>
      <!-- <div class="blh-title commonContent"></div> -->
      <div class="blh-content commonContent">
        <div class="zhanguan-zhobo">
          <div class="zhanguan"><img src="../../assets/images/home/home_3D.png" @click.stop="go3DHandle()" /></div>
          <div class="wb-3d">
            <img src="../../assets/images/home/wb_3d_tishi.png" />
            <div class="wb-3d-botm">
              <div
                class="wb-3d-botmsty"
                @click="
                  zhanguan_shipin = true;
                  zhanguan_shipin_url = 'http://cjkiexpo.org.cn/videosjava/weibao002.mp4';
                "
              >
                <span style="font-weight: bold;color: #9254de">潍宝</span>带您逛3D
                <img src="../../assets/images/home/wb_3d_icon.png" style="width: 19px;margin-left: 5px;" />
              </div>
              <div
                class="wb-3d-botmsty"
                @click="
                  zhanguan_shipin = true;
                  zhanguan_shipin_url = 'http://cjkiexpo.org.cn/videosjava/weibao001.mp4';
                "
              >
                <span style="font-weight: bold;color: #9254de">潍宝</span>教您在线谈
                <img src="../../assets/images/home/wb_3d_icon.png" style="width: 19px;margin-left: 5px;" />
              </div>
            </div>
          </div>
          <div class="zhibo_bg">
            <div style="height: 206px;overflow: hidden;">
              <div class="zhibo_bg-yuyuetop">
                <div class="qiye" @click="chakan">企业名称</div>
                <!-- <div>预约时间</div> -->
                <div>已报名</div>
                <div>剩余</div>
                <div>操作</div>
              </div>
              <div style="height: 168px;">
                <slider ref="slider" :options="options" @slide='slide'>
                  <slideritem :style="yuyueData_sty == 1 ? 'transform: translate3d(0px, 0px, 0px);' : ''" v-for="(item, index) in yuyueData" :key="index">
                    <div class="itme-yuyuelist">
                      <div class="itm-info">
                        <div class="yuyueData-item-gs_name">{{ item.companyName }}</div>
                        <!-- <span class="itm-time">{{ item.time }}</span> -->
                        <span class="itm-y_yuyue">{{ item.y_yuyue }}人</span>
                        <span class="itm-s_yuyue">{{ item.s_yuyue }}人</span>
                        <span class="itm-static0" v-if="item.static == 0" style="cursor: pointer" @click="yuyue(item)">立即预约</span>
                        <span class="itm-static1" v-if="item.static == 1">已预约</span>
                        <span class="itm-static2" v-if="item.static == 2">已约满</span>
                      </div>
                    </div>
                  </slideritem>
                  <div slot="loading">暂无数据</div>
                </slider>
                <!-- <div class="swiper" style="text-align: center;">
                <slider ref="slider" :options="options">
                  <swiper-slide v-for="(item, index) in yuyueData" :key="index">
                    <div class="itme-yuyuelist">
                      <div class="itm-info">
                        <div class="yuyueData-item-gs_name">{{ item.companyName }}</div>
                        <span class="itm-y_yuyue">{{ item.y_yuyue }}人</span>
                        <span class="itm-s_yuyue">{{ item.s_yuyue }}人</span>
                        <span class="itm-static0" v-if="item.static == 0" style="cursor: pointer" @click="yuyue(item)">立即预约</span>
                        <span class="itm-static1" v-if="item.static == 1">已预约</span>
                        <span class="itm-static2" v-if="item.static == 2">已约满</span>
                      </div>
                    </div>
                  </swiper-slide>
                  <div slot="loading">暂无数据</div>
                </slider>
                </div> -->
              </div>
            </div>
            <div style="height: 137px;overflow: hidden;">
              <div class="yuyue_bg-yuyuetop" style="height: 27px;background: #ADC6FF;">预约记录</div>
              <div style="height: 107px;">
                <slider class="yyjlData" :options="options2"  @slide='slide2'>
                  <slideritem :style="yyjlData_sty == 1 ? 'transform: translate3d(0px, 0px, 0px);' : ''" v-for="(item, index) in yyjlData" :key="index">
                    <div class="yyjlData-info">
                      <span class="yyjlData-info-gs1">{{ item.gs1 }}</span>
                      <span class="yyjlData-info-yuyue">已预约</span>
                      <span class="yyjlData-info-gs2">{{ item.gs2 }}</span>
                      <span class="yyjlData-info-time">{{ item.time }}</span>
                    </div>
                  </slideritem>
                  <div slot="loading">暂无数据</div>
                </slider>
              </div>
            </div>
          </div>
        </div>
        <!-- 3D 交谈 视频 -->
        <div v-if="zhanguan_shipin" class="home_img_bofang-mark">
          <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="zhanguan_shipin = false" src="../../assets/images/exhibition/close.png" />
          <video width="800px" height="450px" style="margin-left: 7px;" controls="controls" :src="zhanguan_shipin_url"></video>
        </div>
      </div>
    </div>
    <!-- 博览会概述内容 end -->

    <!-- 展览展示 -->
    <div class="huiyi-bg">
      <div class="whith-300 commonContent">
        <div class="huiyi-title3"><div class="huiyi-title">展览展示</div></div>
        <!-- <div class="huiyi-title4"></div> -->
        <div class="zhanlan-list">
          <div class="zhanlan-item" v-for="(item, index) in zhanquData" @mouseover="zhanquData_index = index" @mouseleave="zhanquData_index = null">
            <div style="text-align: center;" v-if="index != zhanquData_index">
              <img :src="item.url" style="width: 100%;" />
              <span class="zhanlan-name">{{ item.name }}</span>
            </div>

            <div @click="toPage('/exhibitionList?type=0&categoryId=' + item.categoryId)" v-if="item.type == 1">
              <div class="zhanlan-item2" v-if="index == zhanquData_index">
                <span class="zhanlan-name2">{{ item.name }}</span>
                <div class="zhanlan-cent2">{{ item.cents }}</div>
                <div class="zhanlan-botm2">
                  线上平面展 →
                  <span
                    v-if="index == 3"
                    style="margin-left: 95px;border: 1px solid #fff; border-radius: 20px; font-size: 14px; padding: 3px 10px;"
                    @click.stop="newOpen('https://www.yunjing720.com/index.php?s=tour/index/index&tid=1119589c69ea268600902b779060ba3d&scene_id=')"
                  >
                    VR全景展
                  </span>
                </div>
              </div>
            </div>
            <router-link to="/development" v-if="item.type == 2">
              <div class="zhanlan-item2" v-if="index == zhanquData_index">
                <span class="zhanlan-name2">{{ item.name }}</span>
                <div class="zhanlan-cent2">{{ item.cents }}</div>
                <div class="zhanlan-botm2">线上平面展 →</div>
              </div>
            </router-link>
            <router-link to="/newsCenter/pastReview" v-if="item.type == 3">
              <div class="zhanlan-item2" v-if="index == zhanquData_index">
                <span class="zhanlan-name2">{{ item.name }}</span>
                <div class="zhanlan-cent2">{{ item.cents }}</div>
                <div class="zhanlan-botm2">线上平面展 →</div>
              </div>
            </router-link>

            <div class="zhanlan-item2" v-if="index == zhanquData_index && item.type == 4">
              <span class="zhanlan-name2">{{ item.name }}</span>

              <div class="zhanlan-cent2">{{ item.cents }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 展览展示 end -->
    <!-- 新闻资讯 -->
    <div class="xinwen-bg">
      <img class="home-blh-iocn1" style="left: 48.5%;" src="../../assets/images/home/home_x_icon.png" />
      <div class="huiyi-title2" style="margin-top: 0px;margin-bottom: 40px;"><div>新闻资讯</div></div>
      <!-- <div class="huiyi-title5"></div> -->
      <div class="xinwen-zx-bg commonContent">
        <div class="zixun-item" v-for="(item, index) in newsData" @mouseover="mouseOverNewsData(index)" @mouseleave="leaveNewsData()" v-if="index < 3">
          <div class="zixun-title">
            <span class="zixun-title1">热门话题</span>
            {{ item.title }}
            <span class="zixun-title2" @click="item.flag === 2 ? toPage('/newsInfo?id=' + item.newsId) : newOpen(item.refUrl)">[快来瞅瞅]</span>
          </div>
          <div class="zixun-txt" v-html="item.content"></div>
        </div>
        <div class="xinwen-shipin-list">
          <div class="xinwen-shipin-item" v-for="(itm, idx) in shipinData" @click="toPage(itm.path)">
            <img :src="itm.url" />
            <div class="xinwen-shipin-cent">{{ itm.cent }}</div>
          </div>
        </div>
        <div class="xinwen-shipin-more">
          <router-link to="/newsCenter/exhibitionReport"><span>更多</span></router-link>
        </div>
      </div>
    </div>
    <!-- 新闻资讯 end -->
    <div v-show="false" class="searchBox">
      <i class="el-icon-search searchIcon"></i>
      <input class="searchInput" type="text" v-model="searchText" placeholder="请输入内容搜索" />
      <div class="search">
        <el-input placeholder="请输入关键词" v-model="searchText" class="input-with-select">
          <el-select v-model="golbalTab" slot="prepend" placeholder="请选择">
            <el-option label="展品" :value="1"></el-option>
            <el-option label="展商" :value="2"></el-option>
            <el-option label="新闻" :value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="yqlj-bg">
      <img class="yqlj-bg-img" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" />
      <div class="commonContent">
        <div class="yqlj-bg-title">
          <div class="yqlj-bg-link"></div>
          <div class="yqlj-bg-link-t">友情链接</div>
          <div class="yqlj-bg-link"></div>
        </div>
        <div class="yqlj-bg-list">
          <div class="yqlj-bg-itme" v-for="(item, index) in enterpriseLogos" :key="index" @click="newOpen(item.url)"><img :src="item.logo" /></div>
        </div>
      </div>
    </div>
    <!-- 底部产业轮播 end -->
    <Mylogin :visible.sync="visible" />
  </div>
</template>
<script>
import { formatContent } from '@/utils/index';
import banner from '@/components/banner';
import swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import { countDownTime, formatDuring } from '@/utils/index';
import Mylogin from '../exhibition/compontent/mylogin';

import { slider, slideritem } from 'vue-concise-slider';
// import 'swiper/dist/css/swiper.css';
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    banner,
    videoPlayer,
    Mylogin,
    // swiper,
    // swiperSlide,
    slider,
    slideritem
  },
  data() {
    return {
      visible: false,
      home_img_bofang: false,
      isEn: false,
      mySwiper: null,
      swiperIndex: 1,
      formatContent: formatContent,
      liveData: {},
      guestData: [],
      hotSearch: [],
      // newsData: [],
      newsData_index: null,
      show_news: false, // 新闻展示状态
      sponsorData: [],
      exhibitorData: [],
      videoNewsData: {},
      areaCount: 0,
      categoryCount: 0,
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: 'https://file.mepxns.info/weifang_meeting_mv.mp4'
          }
        ],
        poster: 'http://218.59.142.236:9002/java/storage/3d_bg.png'
      },

      toPath: '/home',
      stadiumList: [],
      searchText: '',
      golbalTab: '',

      jiabin: [
        {
          name: '邱国洪',
          position: '中国前驻韩国大使',
          img: 'http://hlstore.yimetal.cn/3.png'
        },
        {
          name: '井川原贤',
          position: '日本驻青岛总领馆总领事',
          img: 'http://hlstore.yimetal.cn/4.png'
        },
        {
          name: '金敬翰',
          position: '韩国驻青岛总领馆总领事',
          img: 'http://hlstore.yimetal.cn/5.png'
        },
        {
          name: '孙少军',
          position: '潍柴动力股份有限公司董事及执行总裁',
          img: 'http://218.59.142.236/java/storage/aa20211016103534.png'
        },
        {
          name: '大和健一',
          position: '日本三菱日联银行执行董事',
          img: 'http://hlstore.yimetal.cn/7.png'
        },
        {
          name: '高熙锡',
          position: '韩国希杰集团中国总部副总裁',
          img: 'http://hlstore.yimetal.cn/8.png'
        }
      ],
      zhanquData: [
        // {
        //   url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',
        //   type: 4,
        //   name: '线下部分实景展示',
        //   cents: ''
        // },
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/beizhan.png'),
          type: 1,
          categoryId: 15,
          name: '智能制造与动力装备展',
          cents: '展示工控自动化、工业机器人、高端数控机床，以及潍坊市装备制造行业发展成就、高端产品品牌及大型装备等。'
        },
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/jizhan.png'),
          type: 1,
          categoryId: 16,
          name: '数字经济展',
          cents:
            '展示数字贸易、数字金融，国内外知名电子商务平台、跨镜综合服务企业，物联网、大数据、虚拟现实软硬件及衍生相关产品，智慧城市、人工智能，数字康养、智慧医疗、康护辅具等。'
        },
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/yezhan.png'),
          type: 1,
          categoryId: 17,
          name: '氢能产业展',
          cents:
            '展示氢燃料电池整车、燃料电池系统及成果应用、燃料电池关键部件及供应技术、制氢设备技术与氢气供应、加氢设备、氢气储运及相关设备、加氢站成套设备、氢液化工厂、车载供氢系统等。'
        },
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/biaochu.png'),
          type: 1,
          categoryId: 22,
          name: '日韩地方政府驻华代表处展',
          cents: '展示日韩地方政府优势产业、特色产品、传统文化、城市胜景等。'
        },
        {
          /* url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/pinzhna.png'),
          type: 1,
          categoryId: 18,
          name: 'RCEP进出口优品展',
          cents: '展示日用品、化妆品、包装食品、饮料酒水、农副产品以及智能家居用品等。'
        },

        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/guzhan.png'),
          type: 3,
          name: '往届博览会回顾展',
          cents: '展示前6届中日韩产业博览会概况及成就。'
        },
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/jiuzhan.png'),
          type: 2,
          name: '潍坊国家级开发区成就展',
          cents: '展示潍坊国家级开发区发展成就、“双招双引”政策等。'
        },
        {
          /* url: 'http://hlstore.yimetal.cn/1635494744(1).png',*/
          url: require('../../assets/images/home/more.png'),
          type: 4,
          name: '敬请期待',
          cents: ''
        }
      ],
      zhanquData_index: null,
      peitaoData: [
        {
          time: '2021年10月26日 14:00-17:30',
          liucheng: '中日韩氢能产业高峰论坛',
          url: '/conferenceLive2',
          liucheng2: '山东重工集团有限公司、潍坊市人民政府、山东省贸促会',
          liucheng3: '潍柴控股集团有限公司、潍坊市贸促会、潍坊市工信局、潍坊市科技局、氢启未来网'
        },
        {
          time: '2021年10月26日 14:00-17:00',
          url: '/conferenceLive3',
          liucheng: ' 中日韩地方政府合作对接会',
          liucheng2: ' 中国国际商会、日本国际贸易促进协会、韩国贸易协会、中日韩合作秘书处',
          liucheng3: ' 中国国际商会会展部、山东省贸促会、潍坊市人民政府'
        },
        {
          time: '2021年10月26日 14:30-17:30',
          url: '/conferenceLive4',
          liucheng: '潍柴国际配套产业园招商对接会',
          liucheng2: '潍坊市人民政府',
          liucheng3: '潍坊高新区管委会、潍坊市贸促会、潍坊市工信局'
        },
        {
          time: '2021年10月27日 09:00-12:00',
          url: '/conferenceLive5',
          liucheng: '中日韩人才交流发展大会',
          liucheng2: '中共潍坊市委、潍坊市人民政府、山东人才发展集团',
          liucheng3: '潍坊市委组织部、潍坊市科学技术局、潍坊市人力资源和社会保障局'
        },
        {
          time: '2021年09月28日 09:00-11:00',
          url: '/conferenceLive1',
          liucheng: '中日现代农业产业对接交流洽谈会',
          liucheng2: '山东省农业农村厅、山东省贸促会、山东省商务厅、潍坊市人民政府',
          liucheng3: '潍坊国家农综区推进办公室、潍坊市贸促会、潍坊市农业农村局、潍坊市商务局'
        },
        {
          // time: '2021年10月28日 14:00-17:00',
          time: '延期举办',
          url: '/conferenceLive6',
          liucheng: '首届中国·潍坊跨境电商生态大会',
          liucheng2: '中国贸促会商事认证中心、中国贸促会商业行业委员会、山东省商务厅、潍坊市人民政府',
          liucheng3: '潍坊市商务局、潍坊市贸促会、潍坊综合保税区管委会'
        },
        {
          time: '2021年10月27日 15:00-17:00',
          url: '/conferenceLive7',
          liucheng: ' 重点合作项目签约仪式',
          liucheng2: '潍坊市人民政府',
          liucheng3: '潍坊市投资促进局'
        }
      ],
      peitaoData_index: null,
      searchBarFixed: false,

      zhibo_index: 0,
      newsAll: 0,

      stadiumId: '',

      zhobo_static: 1,
      zhobo_static1: 1,
      zhobo_static2: 1,
      zhobo_static3: 1,
      zhobo_static4: 1,

      eo_index: 0,

      // 预约洽谈
      yuyueData: [],
      yuyueData_sty: 0,
      yuyueData2: [
        {
          title: '博览会参展企业专场',
          time: '2021.11 ~ 2022.01'
        },
        {
          title: '日韩地方政府推荐企业专场',
          time: '2022.02 ~ 2022.03'
        },
        {
          title: '隐形冠军企业专场',
          time: '2022.04 ~ 2022.05'
        },
        {
          title: '行业协会专场',
          time: '2022.06 ~ 2022.07'
        },
        {
          title: '潍坊国际商会理事单位专场',
          time: '2022.08 ~ 2022.09'
        }
      ],
      yyjlData: [],
      yyjlData_sty: 0,
      options: {
        // currentPage: 0,
        // // tracking: false,
        // thresholdDistance: 1000, // 滑动距离阈值判定
        // thresholdTime: 1000, // 滑动时间阈值判定
        loop: true, // 无限循环
        // loopedSlides: 1,
        autoplay: 3000, //自动播放:时间[ms]
        direction: 'vertical',
        // mousewheel: true,
        // grabCursor: true, // 抓标样式
      },
      // options: {
      //   autoplay:true,
      //   loop: true, // 无限循环
      //   // autoplay: 1000, //自动播放:时间[ms]
      //   direction: 'vertical',
      //   slidesPerView : 2,
      //   autoplay: {
      //   delay: 3000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: true,
      //   },
      // },
      options2: {
        currentPage: 0,
        // tracking: false,
        thresholdDistance: 1000, // 滑动距离阈值判定
        thresholdTime: 1000, // 滑动时间阈值判定
        loop: true, // 无限循环
        loopedSlides: 1,
        autoplay: 1000, //自动播放:时间[ms]
        direction: 'vertical',
        mousewheel: true,
        grabCursor: true, // 抓标样式
      },
      zhiboData: [
        {
          title: '博览会开幕式暨2021中日韩产业合作发展论坛',
          icon: require('../../assets/images/home/zb_list0.png'),
          /*url: 'https://play.yunxi.tv/pages/dab4df09bea94611a6c8277d64439a2c?openId=oY3TsvpBtHHpUr4DtSfjpE0UreXE',*/
          url: '/schedule',
          time: '10.26 09:30-12:00',
          static: 0
        },
        {
          title: '中日韩氢能产业高峰论坛',
          icon: 'http://hlstore.yimetal.cn/7ad91ca31ee7e8635443540d5cb5b81.png',
          /* url: 'https://play.yunxi.tv/pages/dab4df09bea94611a6c8277d64439a2c?openId=oY3TsvpBtHHpUr4DtSfjpE0UreXE',*/
          /* url: 'https://play.yunxi.tv/pages/dbf632935e264c72ae6d99fcd0ceddc7?openId=oY3TsvqdVFuhXIMC198BY9-BTt7g',*/
          url: '/conferenceLive2',
          time: '10.26 14:00-17:30',
          static: 1
        },
        {
          title: '中日韩地方政府合作对接会',
          icon: 'http://hlstore.yimetal.cn/83047094-8904-40b5-9add-f0f0ab453e31.png',
          /*url: 'https://wx.vzan.com/live/tvchat-819204751?v=1634265546913&ver=467270dcb85846ac8a7186ecc16a195f',*/
          url: '/conferenceLive3',
          time: '10.26 14:00-17:00',
          static: 0
        },
        {
          title: '中日韩人才交流发展大会',
          icon: require('../../assets/images/home/huiyi04.png'),
          /*url: 'http://yx.sdxymjg.com/index.html',*/
          url: '/conferenceLive5',
          time: '10.27 09:00-12:00',
          static: 1
        },
        {
          title: '中日现代农业对接交流洽谈会',
          icon: require('../../assets/images/home/huiyi05.png'),
          /* url: 'https://wx.vzan.com/live/tvchat-819204751?v=1634265546913&ver=467270dcb85846ac8a7186ecc16a195f',*/
          url: '/conferenceLive1',
          time: '09.28 09:00-11:00',
          static: 0
        }
      ],
      // 企业logo
      enterpriseLogos: [
        // 中国国际贸易促进委员会/
        {
          logo: require('../../assets/images/JPEG/008.jpg'),
          url: 'http://www.ccpit.org/'
        },
        // 山东省人民政府
        {
          logo: require('../../assets/images/JPEG/009.jpg'),
          url: 'http://www.shandong.gov.cn/'
        },
        // 中国国际商会
        {
          logo: require('../../assets/images/JPEG/001.jpg'),
          url: 'http://www.ccoic.cn/'
        },
        // 日本国际贸易促进协会
        {
          logo: require('../../assets/images/JPEG/002.jpg'),
          url: 'https://japit.or.jp/'
        },
        // 韩国贸易协会
        {
          logo: require('../../assets/images/JPEG/003.jpg'),
          url: 'http://www.kita.org/'
        },
        // 中日韩三国合作秘书处
        {
          logo: require('../../assets/images/JPEG/004.jpg'),
          url: 'https://tcs-asia.org/'
        },
        // 山东省贸促会
        {
          logo: require('../../assets/images/JPEG/006.jpg'),
          url: 'http://www.ccpitsd.com/'
        },
        // 潍坊市人民政府
        {
          logo: require('../../assets/images/JPEG/007.jpg'),
          url: 'http://www.weifang.gov.cn/'
        },
        // 日本贸易振兴机构
        {
          logo: require('../../assets/images/JPEG/010.jpg'),
          url: 'https://www.jetro.go.jp/'
        },
        // 日中经济贸易中心
        {
          logo: require('../../assets/images/JPEG/011.jpg'),
          url: ''
        },
        // 东海日中贸易中心
        {
          logo: require('../../assets/images/JPEG/012.jpg'),
          url: ''
        },
        // 日本经济团体联合会
        {
          logo: require('../../assets/images/JPEG/013.jpg'),
          url: 'http://www.keidanren.or.jp/'
        },
        // 日中经济协会
        {
          logo: require('../../assets/images/JPEG/014.jpg'),
          url: 'https://www.jc-web.or.jp/'
        },
        // 日本商工会议所
        {
          logo: require('../../assets/images/JPEG/015.jpg'),
          url: 'https://www.jcci.or.jp/'
        },
        // 大韩贸易投资振兴公社
        {
          logo: require('../../assets/images/JPEG/018.jpg'),
          url: 'https://www.kotra.or.kr'
        },
        // 韩国展示产业振兴会
        {
          logo: require('../../assets/images/JPEG/019.jpg'),
          url: ''
        },
        // 韩国全国经济人联合会
        {
          logo: require('../../assets/images/JPEG/020.jpg'),
          url: 'http://www.fki.or.kr/Main.aspx'
        },
        // 韩国商工会议所
        {
          logo: require('../../assets/images/JPEG/021.jpg'),
          url: 'http://english.korcham.net/'
        },

        // {
        //   logo: require('../../assets/images/JPEG/005.jpg'),
        //   url: 'http://www.ccoic.cn/'
        // },
        {
          logo: require('../../assets/images/JPEG/016.jpg'),
          url: 'http://cjcci.org/Home.aspx'
        },
        {
          logo: require('../../assets/images/JPEG/017.jpg'),
          url: 'http://www.clair.org.cn/'
        },
        {
          logo: require('../../assets/images/JPEG/022.jpg'),
          url: 'http://www.korcham-china.net/html/main.asp'
        },
        {
          logo: require('../../assets/images/JPEG/023.jpg'),
          url: ''
        },
        {
          logo: require('../../assets/images/JPEG/024.png'),
          url: 'http://ccpit.weifang.gov.cn/'
        },
        {
          logo: require('../../assets/images/JPEG/025.png'),
          url: 'https://www.bk.mufg.jp/index.html'
        }
      ],

      zhanguan_shipin: false,
      zhanguan_shipin_url: '',

      newsData: [
        {
          content: '深圳科技工业园将北方分园选定落在潍坊，郑州、天津及山东省内几个备选城市众皆愕然。',
          coverUrl: null,
          createdTime: '2021-10-24 11:02:28',
          flag: 1,
          id: 81,
          imgUrl: '/java/storage/17f40cdc81a047339352c5189d263fb9.png',
          mediaId: null,
          newsId: 239,
          newsImgUrl: null,
          refUrl: 'https://mp.weixin.qq.com/s/DEijlMLy8-DTfxD5gEQXgA',
          title: '深圳为什么选择潍坊？',
          type: 3,
          videoUrl: null
        }
      ],

      shipinData: [
        {
          /* url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/jixiangwu.png'),
          cent: '吉祥物及标识发布',
          path: '/newsCenter/quality?type=0'
        },
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/fabuhui.png'),
          cent: '新产品新业态发布',
          path: '/newsCenter/quality?type=1'
        },
        /*{
          /!*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*!/
          url: require('../../assets/images/home/fabuhui.png'),
          cent: '新服务新业态发布',
          path: '/newsCenter/quality?type=2'
        },*/
        {
          /*url: 'http://hlstore.yimetal.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211028163514.png',*/
          url: require('../../assets/images/home/meiti.png'),
          cent: '活动预告',
          path: '/newsCenter/quality?type=5'
        }
      ]
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  mounted() {
    if (localStorage.getItem('lang') == 'en') {
      this.isEn = true;
    } else {
      this.isEn = false;
    }
    window.addEventListener('setItemEvent', e => {
      if (e.newValue == 'en') {
        this.isEn = true;
      } else {
        this.isEn = false;
      }
    });
    window.addEventListener('scroll', this.handleScroll);
    window.scrollTo(0, 0);
    // this.getExhibitorData();
    this.getStadiumList();
    // this.mySwiper = new Swiper(".swiper-container", {
    //   initialSlide: 0,
    //   slidesPerView: 4,
    //   spaceBetween: 24,
    //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //   observeParents: false, //修改swiper的父元素时，自动初始化swiper
    // });
    /*this.getLiveData();
    this.timer = setInterval(() => {
      if (this.liveData.status == 1) {
        this.liveData.timeNum = countDownTime(this.liveData.time).timestamp;
        this.liveData.timeStr = formatDuring(this.liveData.timeNum);
        this.$forceUpdate();
      }
    }, 1000);*/
    // this.getGuestData();
    // this.getHotSearch();
    // this.getVideoNews();
    this.getNewsData();
    this.getAppointmentRecord();
    // this.getSponsorData();

    this.getYuYueData();
  },
  created(){
    console.log("qiehuan")
  },
  methods: {
    chakan(){
      console.log(this.yuyueData)
    },
    slide(data) {
      // console.log(data.currentPage)
      // console.log('隔')
      // console.log(this.yuyueData.length)
      if(data.currentPage < this.yuyueData.length+1){
        if (data.currentPage == this.yuyueData.length) {
          this.yuyueData_sty = 1;
        } else if(data.currentPage < this.yuyueData.length) {
          this.yuyueData_sty = 0;
        }
      }else {
        data.currentPage = 0
        return;
      }

    },

    slide2(data) {
      // if (data.currentPage >= this.yyjlData.length) {
      //   this.yyjlData_sty = 1;
      // } else {
      //   this.yyjlData_sty = 0;
      // }
      if(data.currentPage < this.yuyueData.length+1){
        if (data.currentPage == this.yuyueData.length) {
          this.yuyueData_sty = 1;
        } else if(data.currentPage < this.yuyueData.length) {
          this.yuyueData_sty = 0;
        }
      }else {
        data.currentPage = 0
        return;
      }
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
    },
    yuyue(item) {
      this.islogin().then(() => {
        this.$confirm('是否要预约此企业?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
          .then(() => {
            let token = localStorage.getItem('userId');
            this.$http({
              url: this.$http.adornUrl('/appointmentRecord/save'),
              method: 'post',
              data: this.$http.adornData({
                exhibitor3dId: item.companyId,
                userId: token,
                timeType: item.appId,
                exhibitorId: item.companyId
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
              }
            });
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
      });
    },
    //获取展厅数据
    getAppointmentRecord() {
      this.$http({
        url: this.$http.adornUrl('/appointmentRecord/3d/list'),
        method: 'get'
      }).then(({ data }) => {
        if (data && data.code === 1 && data.data.total > null) {
          for (let i = 0; i < data.data.total; i++) {
            let username = data.data.list[i].userId;
            let appointmentRecord = {
              gs1: username.substr(0, 3) + '****' + username.substr(7),
              gs2: data.data.list[i].exhibitorName,
              time: data.data.list[i].createdTime
            };
            this.yyjlData.push(appointmentRecord);
          }
        }
      });
      // console.log(this.yyjlData)
    },
    getYuYueData() {
      let thht = []
      this.$http({
        url: this.$http.adornUrl('/appointmentTime/list'),
        method: 'get'
      }).then(({ data }) => {
        if (data && data.code === 1) {
          for (let i = 0; i < data.data.total; i++) {

            let flag = 0;
            if (data.data.list[i].reserved == data.data.list[i].maximum) {
              flag = 2;
            }
            let time = {
              time: data.data.list[i].starttime,
              y_yuyue: data.data.list[i].reserved,
              companyId: data.data.list[i].companyId,
              appId: data.data.list[i].appId,
              companyName: data.data.list[i].companyName,
              s_yuyue: data.data.list[i].maximum,
              static: flag
            };
            thht.push(time)
            // this.yuyueData.push(time);
            // this.yuyueData = thht
          }
          this.yuyueData = thht
        }
      });
      // console.log(thht)
      // console.log(JSON.parse(JSON.stringify(this.yuyueData)))
      // console.log(JSON.parse(this.yuyueData))
      // console.log(JSON.stringify(this.yuyueData))
    },

    move(e) {
      let odiv = e.target; //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },

    //点击跳转到3D
    go3DHandle() {
      if (localStorage.getItem('token')) {
        var el = document.createElement('a');
        document.body.appendChild(el);
        el.href = 'https://3d.cjkiexpo.org.cn:8102/3d/index.html?token=' + localStorage.getItem('token');
        el.target = '_blank'; //指定在新窗口打开
        el.click();
        document.body.removeChild(el);
      } else {
        this.visible = true;
      }
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
    handleScroll() {
      // 改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var oCarouselBox = document.getElementById('navBox');
      if (oCarouselBox) {
        var offsetTop = document.querySelector('#navBox').offsetTop;
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true;
          if (scrollTop <= 720) {
            this.searchBarFixed = false;
          }
        } else {
          this.searchBarFixed = false;
        }
      }
    },

    goThreejsLink() {
      window.open('http://3d.weifang.mepxns.info:9999/threejs/whole.html');
    },
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url
      });
    },
    //打开链接
    opneUrl(live) {
      if (live.liveUrl) {
        window.open(live.liveUrl);
      } else {
        this.$message({
          message: '暂无直播！',
          type: 'info',
          customClass: 'myprompt'
        });
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
        method: 'get'
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
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 1,
          type: 1
        })
      }).then(({ data }) => {
        if (data.data.list && data.data.list != null) {
          this.videoNewsData = data.data.list[0];
        } else {
          this.videoNewsData = {};
        }
      });
    },
    getNewsData() {
      this.$http({
        url: this.$http.adornUrl(`/news/list?page=1&pageSize=10&newsTypeId=1`),
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 20,
          type: 1
        })
      }).then(({ data }) => {
        this.newsData = data.data.list || [];
      });
    },
    //获取大会热搜
    getHotSearch() {
      this.$http({
        url: this.$http.adornUrl(`/index/news`),
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 10,
          type: 2
        })
      }).then(({ data }) => {
        this.hotSearch = data.data.list || [];
      });
    },
    //会议直播
    getLiveData() {
      this.$http({
        url: this.$http.adornUrl(`/meeting/list`),
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 1
        })
      }).then(({ data }) => {
        this.liveData = data.data.list[0] || {};
      });
    },
    //嘉宾
    getGuestData() {
      this.$http({
        url: this.$http.adornUrl(`/index/guest`),
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 8
        })
      }).then(({ data }) => {
        this.guestData = data.data.list || [];
      });
    },
    //获取赞助商数据
    getSponsorData() {
      this.$http({
        url: this.$http.adornUrl(`/sponsor/list`),
        method: 'get',
        params: this.$http.adornParams({
          page: 1,
          pageSize: 100
        })
      }).then(({ data }) => {
        this.sponsorData = data.data.list || [];
      });
    },
    newOpen(url) {
      window.open(url);
    },
    playerReadied() {},
    onPlayerLoadeddata() {},
    onPlayerCanplay() {},
    onPlayerCanplaythrough() {},
    toGuestDet(id) {
      this.$router.push({
        path: '/inviteGuestDetail',
        query: {
          id: id
        }
      });
    },

    // 10.11选中样式
    mouseOverNewsData(index) {
      this.newsData_index = index;
    },
    leaveNewsData() {
      this.newsData_index = null;
    },
    mouseOverZhibo(index) {
      this.zhibo_index = index;
    },
    leaveZhibo() {
      this.zhibo_index = 0;
    },
    mouseOverZhanquData(index) {
      this.zhanquData_index = index;
    },
    leaveZhanquData() {
      this.zhanquData_index = null;
    },
    mouseOvernewsAll(index) {
      this.newsAll = index;
    },
    leavenewsAll() {
      this.newsAll = 0;
    },
    mouseOverPeitaoData(index) {
      this.peitaoData_index = index;
    },
    leavePeitaoData() {
      this.peitaoData_index = null;
    },

    mousehome(index) {
      this.eo_index = index;
    },
    leave() {
      this.eo_index = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.home-img {
  position: relative;
  /*width: 100%;*/
  width: 1400px;
  margin: auto;
}

.home-img-bofang {
  // position: absolute;
  // // width: 349px;
  // // height: 185spx;
  // // background-color: #000;
  //   top: 122px;
  // left: 111px;
  // z-index: 10;
}

.home-img-bofang img {
  position: absolute;
  top: 20%;
  left: 9%;
  z-index: 10;
  width: 40px !important;
}

.home_img_bofang-mark {
  position: fixed;
  top: 50%;
  left: 50%;
  overflow: auto;
  margin: 0;
  z-index: 7000;
  transform: translate(-50%, -50%);
  background-image: url(../../assets/images/home/home_kuang.png);
  background-size: 100% 100%;
  width: 899px;
  height: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meeting-new-cent-sty1 {
  display: flex;
  width: 770px;
  margin: 0 auto;
  justify-content: left;
}

/deep/ .select-index {
  cursor: pointer;
  font-size: 22px !important;
  color: #0254a2 !important;
}

/deep/ .select-index2 {
  background-color: rgba(225, 225, 225, 1) !important;
  cursor: pointer;
}

/deep/ .select-index3 {
  background-image: url('../../assets/images/home/home_bg_9.png');
  width: 100px;
  height: 100px;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 60px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

/deep/ .select-index4 {
  background-image: url('../../assets/images/home/home_bg_9.png');
  width: 120px;
  height: 120px;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 60px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

/deep/ .select-index5 {
  background-image: url('../../assets/images/home/home_bg_9.png');
  width: 170px;
  height: 240px;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: 10px;
}

/deep/ .home-img img {
  width: 100%;
  // margin-top: 12px;
}

/deep/ .el-submenu__title {
  font-size: 18px;
}

/deep/ .el-menu-item {
  font-size: 18px;
}

/deep/ a {
  text-decoration: none;
  color: #fff;
}

/deep/ .nav-tab-title {
  padding: 50px 0;
  padding-top: 75px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 2px;
}

// 10.10
.whith-300 {
  // margin: 70px 300px;
  position: relative;
}

.huiyi-bg {
  height: 710px;
}

.huiyi-title {
  text-align: center;
  white-space: nowrap;
  font-size: 42px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 22px;
  border-bottom: 14px solid #cef1fc;
  width: 164px;
  margin: 0px auto;
  margin-top: 84px;
}

.huiyi-title4 {
  text-align: center;
  white-space: nowrap;
  font-size: 42px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 22px;
  // border-bottom: 14px solid #cef1fc;
  width: 144px;
  margin: 0px auto;
  margin-top: 84px;
  background-image: url(../../assets/images/home/zhanshiimg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 36px;
}

.huiyi-title5 {
  text-align: center;
  white-space: nowrap;
  font-size: 42px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 22px;
  // border-bottom: 14px solid #cef1fc;
  width: 144px;
  margin: 0px auto;
  margin-top: 84px;
  background-image: url(../../assets/images/home/xinwenimg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 36px;
  margin-bottom: 54px;
}

.huiyi-title2 {
  text-align: center;
  margin-top: 48px;
  white-space: nowrap;
  height: 40px;
  font-size: 42px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 59px;
  border-bottom: 14px solid #cef1fc;
}

.huiyi-title3 {
  text-align: center;
}

// 新闻
.news-news-data {
  // padding: 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.news-news-data_bg {
  position: absolute;
  left: 0;
  top: 0;
}

.news-data-title {
  font-size: 42px;
  margin-bottom: 50px;
}

.news-data-list {
  border-top: 1px solid #000;
  width: 100%;
  line-height: 65px;
  z-index: 1000;
}

.news-data-item {
  border-bottom: 1px solid #000;
  font-size: 14px;
}

.news-data-item span {
  font-size: 21px;
  /*  border-bottom: 1px solid #4886c2;*/
  color: #4886c2;
  margin-left: 25px;
}

.news-data-button {
  margin-top: 40px;
  width: 345px;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  font-size: 21px;
  cursor: pointer;
  position: relative;
}

.news-data-button img {
  width: 20px;
  position: absolute;
  right: 10px;
  height: 11px;
}

// 博览会文字
.blh-wenzi {
  position: relative;
  height: 150px;
}

.blh-wenzi_bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 827px;
  z-index: -1;
}

.blh-wenzi-title {
  position: absolute;
  font-size: 40px;
  z-index: 200;
  bottom: 46px;
  left: 50px;
  letter-spacing: 12px;
}

.blh-wenzi-eg {
  position: absolute;
  left: 56px;
  bottom: 15px;
  font-size: 25px;
  font-family: 'Times New Roman';
}

.blh-wenzi-border {
  // border: 6px solid #ccfd04;
  border: 6px solid #d3e3ff;
  width: 176px;
  padding: 30px;
  position: absolute;
  bottom: 0;
  left: 30px;
  z-index: 100;
  height: 43px;
}

.blh-wenzi-title2 {
  position: absolute;
  font-size: 40px;
  z-index: 200;
  bottom: 46px;
  right: 40px;
  letter-spacing: 12px;
}

.blh-wenzi-eg2 {
  position: absolute;
  right: 99px;
  bottom: 15px;
  font-size: 25px;
  font-family: 'Times New Roman';
}

.blh-wenzi-border2 {
  // border: 6px solid #ccfd04;
  border: 6px solid #d3e3ff;
  width: 172px;
  padding: 30px;
  position: absolute;
  bottom: 0;
  right: 30px;
  z-index: 100;
  height: 43px;
}

//博览会概述内容
.blh-bg {
  height: 606px;
  // background: linear-gradient(135deg, #31c8eb 0%, rgba(59, 208, 254, 0.75) 22%, #29bde2 47%, #3577e3 100%);
  background: rgba(248,248,248,0.75);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  position: relative;

}

.home-blh-iocn1 {
  position: absolute;
  top: -27px;
}

.home-blh-iocn2 {
  position: absolute;
  bottom: -27px;
}

.blh-title {
  width: 187px;
  height: 59px;
  font-size: 42px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #9254de;
  border-bottom: 14px solid #63b6ff;
  line-height: 95px;
  margin-bottom: 56px;
  // background-image: url(../../assets/images/home/zhanqiaguanimg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
}

.blh-content {
  font-size: 20px;
  letter-spacing: 2px;
  position: relative;
  // white-space: nowrap;
  line-height: 40px;
}

.blh-content_bg {
  position: absolute;
  top: 600px;
  z-index: -1;
  height: 1000px;
  width: 100%;
}

.blh-content-sty1 {
  margin-bottom: 40px;
  line-height: 40px;
  margin-left: 100px;
}

.blh-content-sty2 span {
  margin-right: 110px;
  line-height: 46px;
  font-weight: bold;
}

.blh-content-sty3 {
  display: flex;
  // margin-top: 15px;
}

.blh-content-sty3-title {
  margin-right: 123px;
  white-space: nowrap;
  font-weight: bold;
}

.blh-content-sty3-content-c {
  display: flex;
  flex-direction: column;
  padding: 0px 48px;
  cursor: pointer;
}

.blh-content-sty3-content-c span {
  // margin-bottom: 8px;
  font-size: 19px;
  color: #4a4949;
}

// 展馆直播
.wb-3d {
}
.wb-3d-botm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
}
.wb-3d-botmsty {
  width: 157px;
  height: 52px;
  background: #63b6ff;
  box-shadow: 0px 2px 4px 0px #2880df;
  border-radius: 59px;
  font-size: 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 25px;
  display: flex;
  color:#FFFFFF;
  align-items: center;
  justify-content: center;
}

.zhanguan-zhobo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // width: 1340px;
  // margin: 0px -100px;
  // margin-top: 50px;
}

.zhanguan {
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 50%;
  position: relative;
}

.zhanguan-shipin {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  line-height: -1px;
  top: 17px;
  font-size: 18px;
}

.zhanguan-shipin img {
  width: 25px !important;
  height: 25px !important;
  margin-top: 0px !important;
  border: 0px !important;
  margin-right: 5px !important;
}

.zhanqiaguan-titile {
  position: absolute;
  bottom: -22px;
  left: 0px;
  font-size: 14px;
  color: #666;
  line-height: 20px;
}

.zhanguan span {
  letter-spacing: 0px;
  display: flex;
  align-content: center;
  justify-content: center;
}

.zhanguan img {
  width: 511px;
  height: 336px;
  border-radius: 4px;
  border: 2px solid #69e5ff;
}

.zhibo {
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 50%;
}

.zhibo span {
  letter-spacing: 0px;
}

.zhibo_bg {
  width: 466px;
  height: 340px;
  background: #ffffff;
  border-radius: 7px;
  border: 1px solid #d8d8d8;
  overflow: hidden;
}

.zhibo_bg-yuyuetop {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 38px;
  background: #597ef7;
  font-size: 15px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20px;
}

.zhibo_bg span {
  // margin-bottom: 16px;
}

.zhibo-kuan {
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: space-evenly;
  height: 388px;
  margin: 35px 0;
}

.zhibo-kuan .zhibo-conet {
  height: 25%;
  background-color: rgba(225, 225, 225, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 5px auto;
  padding: 15px 20px;
  border-radius: 4px;
  // white-space: nowrap;
  width: 85%;
  align-items: center;
  justify-content: space-between;
  line-height: 0px;
}

.zhobo-static-1 {
  width: 60px;
  height: 22px;
  background: #5d9afe;
  border-radius: 11px;
  font-size: 12px;
  font-family: Songti SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.zhobo-static-2 {
  width: 95px;
  height: 33px;
  background: #1f82fe;
  border-radius: 30px;
  font-size: 17px;
  font-family: Songti SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 43px;
  display: flex;
  align-items: center;
  margin-left: 195px;
  cursor: pointer;
}

.zhobo-static-3 {
  width: 72px;
  height: 22px;

  background: #e1e1e1;
  border-radius: 11px;
  font-size: 14px;
  font-family: Songti SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.yuyue_bg-yuyuetop {
  height: 27px;
  background: #adc6ff;
  font-size: 15px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ff9c6e;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
}

//会议议程
.meeting_bg {
  position: absolute;
  top: -46px;
  z-index: -1;
  left: -300px;
  width: 510px;
}

.meeting_bg2 {
  position: absolute;
  bottom: 550px;
  left: -300px;
}

.meeting_bg3 {
  position: absolute;
  bottom: -650px;
  right: 0px;
  z-index: -1;
}

.meeting-title {
  text-align: right;
  font-size: 40px;
  padding-top: 140px;
  padding-bottom: 100px;
}

.meeting-new-cent {
  font-size: 20px;
  line-height: 40px;
  margin: 0px 0px 15px;
  text-align: center;
  // height: 940px;
}

.meeting-title-sty {
  font-size: 28px;
  border-bottom: 10px solid #d3e3ff;
  line-height: 24px;
}

.meeting-title-info {
  display: flex;
  flex-direction: row-reverse;
  height: 190px;
  padding: 20px 0;
  align-items: center;
}

.meeting-title-info img {
  width: 150px;
  height: 190px;
  margin-left: 15px;
}

.info-position {
  margin-bottom: 20px;
  font-size: 16px;
  white-space: nowrap;
}

.info-name {
  text-align: right;
  font-size: 18px;
}

.jiabin-list {
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  padding: 20px 0;
}

.jiabin-item {
  width: 49%;
  display: flex;
  align-items: center;
  padding: 25px 0;
}

.jiabin-item img {
  width: 150px;
  height: 190px;
  margin-right: 15px;
}

.jiabin-item-name {
  font-size: 18px;
}

.jiabin-more {
  color: #000 !important;
  border: 1px solid #000;
  padding: 25px;
  border-radius: 6px;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  padding-left: 100px;
}

.jiabin-more img {
  width: 9px;
  height: 15px;
  margin-left: 100px;
}

//展区
.zhanlan-test-1 {
  margin-left: 20px;
  font-size: 22px;
  margin-bottom: 68px;
  border-radius: 4px;
  border: 1px solid #000;
  width: 450px;
  padding: 25px;
}

.zhanlan-test-2 {
  font-size: 15px;
  letter-spacing: 1px;
  margin-bottom: 70px;
}

.zhanlan-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  margin-top: 54px;
}

/deep/ .zhanlan-item {
  width: 338px;
  // height: 346px;
  background: #ffffff;
  box-shadow: 0px 1px 12px 1px rgba(216, 216, 216, 0.48);
  border-radius: 7px;
  margin-bottom: 32px;
  overflow: hidden;
}
/deep/ .zhanlan-item2 {
  // width: 348px;
  height: 270px;
  background: #3ec1ff;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 17px;
}

/deep/ .zhanlan-name2 {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 28px;
}

/deep/ .zhanlan-cent2 {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
}

/deep/ .zhanlan-botm2 {
  font-size: 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 22px;
  cursor: pointer;
}

/deep/ .zhanlan-name {
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #51565d;
  line-height: 70px;
  // margin-left: 27px;
}

// 配套活动
.huodong-test {
  text-align: right;
  font-size: 22px;
  margin-bottom: 75px;
}

.huodong-test span {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 15px 60px;
}

.peitao-list {
  width: 1000px;
  margin: auto auto;
}

.peitao-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.peitao-item-time {
  width: 188px;
  background: #409effab;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 10px;
  border: 2px solid #999;
}

.peitao-item-liucheng {
  width: 755px;
  background: #409effab;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 10px;
  border: 2px solid #999;
}

.peitao-item-time2 {
  background-image: url(../../assets/images/home/home_bg9.png);
  background-size: 100% 100%;
  width: 188px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
}

.peitao-item-liucheng2 {
  width: 757px;
  height: 100px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 40px;
  white-space: nowrap;
}

//10.11
.about {
  background-image: url(../../assets/images/home/bg-img.png);
  text-align: center;
  padding: 70px 0;
  background-size: 100% 100%;
}

.about-title {
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 25px;
}

.about-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 300px;
}

.about-item {
  font-size: 16px;
  position: relative;
  z-index: 0;
  display: block;
  box-sizing: border-box;
  // width: 100%;
  width: 200px;
  max-width: 240px;
  margin: 0 auto;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 240px;
  background-color: #192f60;
  box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1), 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.06);
}

.about-item img {
  width: 17px;
  height: 15px;
  position: absolute;
  right: 12px;
}

//
.navigation-icon {
  position: fixed;
  right: 30px;
  bottom: 127px;
  z-index: 6000;
  height: 273px;
  background: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 54px;
}

.navigation-icon img {
  width: 30px;
  height: 30px;
}

.navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #666666;
  line-height: 20px;
  position: relative;
}

.navigation-item img {
  width: 40px;
  height: 40px;
}

//
.navigation-icon-mark {
  background-color: rgba(225, 225, 225, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.navigation-icon-cent {
  background-color: #5d9afe;
  z-index: 7000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}

.navigation-icon-title {
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  margin-bottom: 10px;
}

.navigation-icon-cent2 {
  background-color: #5d9afe;
  z-index: 7000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 10px 0;
  border-radius: 4px;
  width: 130px;
  left: 50px;
  bottom: 100px;
  height: 135px;
}

.navigation-icon-cent2 img {
  pointer-events: none;
}

.homePage {
  // background: #181950;
  // overflow-y: auto;
  min-width: 1290px;
  font-family: 宋体 !important;
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

  .seeAll1:hover {
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

.video-tips2 {
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
          color: #256bef;
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          line-height: 30px;
        }
      }

      .liveStatus1 {
        justify-content: center;

        .living {
          color: #256bef;
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          line-height: 30px;
        }
      }

      .liveStatus2 {
        justify-content: center;

        .living {
          color: #256bef;
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          line-height: 30px;
        }
      }

      .liveStatus3 {
        justify-content: center;

        .living {
          color: #256bef;
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

        > span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }

    .listItem:nth-of-type(1) {
      margin-left: 0 !important;
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

        > span {
          cursor: pointer;
        }

        > span:hover {
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

/deep/ .slider-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  // width: 404px;
  // height: 138px;

  // width: 565px;
  height: auto;
  // margin-bottom: 10px;
  // padding: 10px;
}

.yuyueData-item-gs_name {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  line-height: 16px;
  width: 206px;
  text-align: center;
  white-space: normal;
}

.itme-yuyuelist {
  width: 100%;
}

.itm-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // height: 38px;
}

.itm-time {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  line-height: 16px;
  width: 87px;
  text-align: center;
  white-space: normal;
}

.itm-y_yuyue {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  width: 84px;
}

.itm-s_yuyue {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  line-height: 16px;
  width: 50px;
}

.itm-static0 {
  width: 76px;
  height: 20px;
  background: #5d9afe;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  margin-right: 7px;
}

.itm-static1 {
  width: 76px;
  height: 20px;
  background: #ff4d4f;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
}

.itm-static2 {
  width: 76px;
  height: 20px;
  background: #a9a9a9;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
}

/deep/ .slider-pagination-bullet {
  background: rgba(225, 225, 225, 0);
}

.yyjlData {
}

.yyjlData-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 455px;
  margin-bottom: 10px;
}

.yyjlData-info-gs1 {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  line-height: 14px;
  white-space: normal;
  width: 165px;
}

.yyjlData-info-yuyue {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #00b1fc;
  line-height: 14px;
}

.yyjlData-info-gs2 {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  line-height: 14px;
  white-space: normal;
  width: 87px;
}

.yyjlData-info-time {
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #8f92a1;
  line-height: 15px;
  width: 115px;
  white-space: normal;
}

.home-zb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.home-title-bg {
  background-image: url(../../assets/images/home/zhibo_title_bg.png);
  width: 410px;
  height: 38px;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: #4e85c0;
  font-weight: bold;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: 35px;
  margin-top: 120px;
}
// .home-title-bg {
//   background-image: url(../../assets/images/home/zhibo_title_bg.png);
//   width: 144px;
//   height: 36px;
//   background-size: 100% 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 42px;
//   color: #4e85c0;
//   font-weight: bold;
//   font-family: PingFangSC-Medium, PingFang SC;
//   margin-bottom: 35px;
//   margin-top: 120px;
// }

.home-title-bg span {
}

.home_bg5 {
  width: 12%;
  position: absolute;
  right: 0;
  top: -900px;
  z-index: -1;
  opacity: 0.3;
}

.home-zb-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.home-zb-item {
  width: 640px;
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  overflow: hidden;
  margin-right: 20px;
}

.home-zb-item img {
  width: 100%;
}

.home-zb-info {
  margin: 20px;
}

.home-zb-title {
  white-space: nowrap;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #51565d;
  line-height: 36px;
}

.home-zb-info1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.home-zb-time {
  display: flex;
  align-items: center;

  font-size: 21px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 29px;
}

.home-zb-time img {
  width: 35px;
  margin-right: 23px;
}

.home-zb-static {
  width: 129px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #2298ff;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2298ff;
  line-height: 30px;
}

.home-zb-static1 {
  width: 110px;
  height: 39px;
  border-radius: 5px;
  border: 1px solid #ff4d4f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ff4d4f;
  line-height: 30px;
  cursor: pointer;
}

.home-zb-static2 {
  width: 129px;
  height: 46px;
  border-radius: 5px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #999;
  line-height: 30px;
}

.fabu-yugao {
  height: 95px;
  width: 90%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: 0 auto;
}

.xqt-cent {
  width: 546px;
  height: 392px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 0 12px;
}

.xqt-cent-top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 24px 0px 17px 0px;
  border-bottom: 1px solid #ffffff75;
}

.xqt-cent-title {
  font-size: 19px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #9254de;
  line-height: 27px;
}

.xqt-cent-list {
  height: 320px;
  overflow: scroll;
}

.xqt-cent-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 30px 17px 19px;
  border-bottom: 1px solid #ffffff75;
}

.xqt-cent-title2 {
  font-size: 19px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #1f82fe;
  line-height: 27px;
  width: 174px;
  white-space: nowrap;
}

.xqt-cent-number {
  font-size: 19px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #51565d;
  line-height: 27px;
  width: 24px;
  white-space: nowrap;
}

.xqt-cent-time {
  font-size: 17px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #51565d;
  line-height: 27px;
  width: 167px;
  white-space: nowrap;
}

.xqt-cent-list {
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none; // Firefox
}

.xqt-cent-list::-webkit-scrollbar {
  display: none; // Safari and Chrome
}

.home-zhibo-other {
  width: 738px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home-zhibo-other-item {
  width: 360px;
  height: 260px;
  background-image: url(../../assets/images/home/home_zbbg2.png);
  background-size: 100% 100%;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  overflow: hidden;
}

.home-zhibo-other-img img {
  width: 100%;
  height: 191px;
}

.home-zhibo-other-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 17px;
  margin-top: 25px;
}

.home-zhibo-other-time {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #51565d;
  line-height: 22px;
}

.home-zhibo-other-time img {
  width: 22.64px;
  margin-right: 5px;
}

.home-zhibo-other-url {
  width: 43px;
  height: 15px;
  border-radius: 3px;
  border: 1px solid #2298ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2298ff;
}

.home_img_bofang-mark {
  position: fixed;
  top: 50%;
  left: 50%;
  overflow: auto;
  margin: 0;
  z-index: 7000;
  transform: translate(-50%, -50%);
  background-image: url(../../assets/images/home/home_kuang.png);
  background-size: 100% 100%;
  width: 899px;
  height: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.xinwen-bg {
  width: 100%;
  //height: 1072px;
  padding: 50px 0px;
  background: #f5f9fd;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.xinwen-zx-bg {
  //height: 826px;
  background: #ffffff;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  //padding: 20px;
  margin: 20px;
}

.zixun {
  height: 390px;
  background: #ffffff;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 281px;
}

.zixun-item {
  border-bottom: 1px solid #eeeff0;
  padding: 21px 10px 0px 10px;
}

.zixun-title {
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #1c1c1c;
  line-height: 29px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.zixun-title1 {
  width: 61px;
  height: 22px;
  background: rgba(93, 154, 254, 0.17);
  border-radius: 3px;
  border: 1px solid #5d9afe;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #5d9afe;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
}
.zixun-title2 {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #5d9afe;
  line-height: 29px;
  margin-left: 13px;
  cursor: pointer;
}
.zixun-txt {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #8f92a1;
  line-height: 33px;
/*  padding:20px;*/
}
.border-0 {
  margin-bottom: 0px;
  padding-bottom: 0px;
  border-bottom: 0px;
}
.xinwen-shipin-list {
  display: flex;
  align-items: center;
  margin-top: 50px;
  // justify-content: space-around;
}

.xinwen-shipin-item {
  width: 338px;
  // height: 244px;
  background: #ffffff;
  box-shadow: 0px 1px 12px 1px rgba(216, 216, 216, 0.48);
  border-radius: 7px;
  overflow: hidden;
  margin-right: 36px;
  padding : 0px 10px 0px 10px;
  cursor: pointer;
}
.xinwen-shipin-item img {
  width: 100%;
  height: 176px;
}
.xinwen-shipin-cent {
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #51565d;
  line-height: 28px;
  margin: 24px 12px;
  text-align: center;
}
.xinwen-shipin-more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 39px;
  margin-bottom: 10px;
}

.xinwen-shipin-more span {
  width: 119px;
  height: 36px;
  border-radius: 25px;
  border: 1px solid #3ec1ff;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #3ec1ff;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.yqlj-bg {
  background: #ffffff;
  position: relative;
  z-index: 10;
  height: 305px;
  overflow: hidden;
}
.yqlj-bg-img {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

.yqlj-bg-list {
  display: flex;
  flex-flow: wrap;
}

.yqlj-bg-itme {
  // margin-right: 63px;
  // margin-bottom: 35px;
  cursor: pointer;
}

.yqlj-bg-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
}

.yqlj-bg-link {
  width: 650px;
  border-bottom: 2px solid #e4e4e4;
}

.yqlj-bg-link-t {
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 23px;
}

/deep/ .slider-pagination-bullets {
  opacity: 0;
}
</style>
<style>
.vjs-custom-skin > .video-js {
  width: 100%;
  height: 680px !important;
  font-family: 'PingFang SC', 'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI', 'Microsoft YaHei', '微软雅黑', sans-serif;
}

.threeJs {
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
  font-family: 'PingFang SC', 'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI', 'Microsoft YaHei', '微软雅黑', sans-serif;
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

.vjs-custom-skin > .video-js .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
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

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate .vjs-playback-rate-value {
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

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-resolution-button-label {
  display: block;
  line-height: 3em;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
  order: 5;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
  order: 6;
}
.qiye{
  width: 150px;
  text-align: center;
}
</style>
