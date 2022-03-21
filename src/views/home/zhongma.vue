<template>
  <div>
    <div class="height">
      <div class="heightnei">
        <div class="heightleft">
          <img src="../../assets/images/zhongma/logo.jpg" >
        </div>
        <div class="heightright">
          <div class="heriv1">
            <input type="text" :placeholder="$t('zhongma.t11')" />
            <img src="../../assets/images/zhongma/search.png" >
          </div>
          <div class="heriv2">
            <div :class="{ wen: $i18n.locale === 'zh' }" @click="langChangeHandle('zh')">中文</div>
            <div class="wen">/</div>
            <div :class="{ wen: $i18n.locale === 'en' }" @click="langChangeHandle('en')">EN</div>
          </div>
          <div class="heriv3">{{ $t('zhongma.t1') }}</div>
        </div>
      </div>
    </div>
    <div class="zmbanner">
      <img src="../../assets/images/zhongma/zmbanner2.png" >
    </div>
    <!-- <div class="hengbo">
      <ul>
        <li><a>{{ $t('zhongma.t2') }}</a></li>
        <li><a>{{ $t('zhongma.t3') }}</a></li>
        <li><a>{{ $t('zhongma.t4') }}</a></li>
        <li><a>{{ $t('zhongma.t5') }}</a></li>
        <li><a>{{ $t('zhongma.t6') }}</a></li>
        <li><a>{{ $t('zhongma.t7') }}</a></li>
      </ul>
    </div> -->
    <!-- 导航 -->
    <div class="navBox" id="navBox" style="position: absolute;width: 100%;z-index: 101;max-width: 1920px;" :style="searchBarFixed ? 'position:fixed;top:0px' : ''">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
        background-color="#0B4181"
        style="height: 80px;display: flex;align-items: center;justify-content: space-around;padding: 0 100px;margin: auto;"
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
        <el-menu-item index="8-4" @click="stadiumId = ''">
          <router-link to="/gongqiu" active-class="activeClass">供求信息</router-link>
        </el-menu-item>
      </el-menu>
      <!--           观众服务结束       -->
    </div>

    <div class="zmmk1-1" style="background-color: #F0F0F0;width: 1920px;margin: auto;">
      <div class="zmmk1">
        <div class="zmmk1left">
          <div class="zmmk1tit">欢迎来到第十六届</div>
          <div class="zmmk1tit">中国-马来西亚联合商务理事会年会</div>
          <div class="zmmk1cont">{{ $t('zhongma.t9') }}</div>
          <div class="zmmk1btn">开始时间：2月20日</div>
        </div>
        <div class="zmmk1right">
          <img src="../../assets/images/zhongma/zmnianhui.png" >
          <div class="jzbjbtn">进入直播间</div>
        </div>
      </div>
    </div>
    <div class="zmmk4 zmmk6" style="background-color: #F0F0F0!important;">
      <div class="zmmk4tit">年会嘉宾</div>
      <!-- <div class="zmmk4cont">从技术和基础设施领域的行业领导者的智慧中获益。访问来自公共和私营部门的专家的主要融合。</div> -->
      <ul>
        <li>
          <img src="../../assets/images/zhongma/zmmk6png1.png" >
          <div>衣宝廉</div>
          <div class="mk6zhu">驻</div>
          <div class="mk6zhu2">马来西亚大使馆大使</div>
        </li>
        <li>
          <img src="../../assets/images/zhongma/zmmk6png2.png" >
          <div>井川原贤</div>
          <div class="mk6zhu">合伙人 -</div>
          <div class="mk6zhu2">马来西亚重大项目咨询和城市转型基础设施毕马威会计师事务所</div>
        </li>
        <li>
          <img src="../../assets/images/zhongma/zmmk6png3.png" >
          <div>孔铉佑</div>
          <div class="mk6zhu">驻</div>
          <div class="mk6zhu2">马来西亚大使馆大使</div>
        </li>
        <li>
          <img src="../../assets/images/zhongma/zmmk6png4.png" >
          <div>平野雅之</div>
          <div class="mk6zhu">合伙人 -</div>
          <div class="mk6zhu2">马来西亚重大项目咨询和城市转型基础设施毕马威会计师事务所</div>
        </li>
      </ul>
      <div class="mk4btn">查看年会嘉宾</div>
    </div>
    <div class="zmmk1-1" style="background-color: #fff;width: 1920px;margin: auto;">
      <div class="zmmk1" style="background-color: #fff;">
        <div class="zmmk1left">
          <div class="zmmk1tit">欢迎来到中国马来西亚进出口线上交易会</div>
          <div class="zmmk1cont">{{ $t('zhongma.t9') }}</div>
          <div class="zmmk1btn">查看详情</div>
        </div>
        <div class="zmmk1right">
          <img src="../../assets/images/zhongma/zmjiaoyivid.png" >
          <img class="zmplay" src="../../assets/images/zhongma/zmplay.png" />
        </div>
      </div>
    </div>
    <div class="zmmk2">
      <div class="zmmk2box">
        <div class="zmmk2lv1">
          <img src="../../assets/images/zhongma/mk2png1.png" >
        </div>
        <div class="zmmk2lv2">
          <div class="zmmk2tite">Introduction to Malaysian culture</div>
          <div class="zmmk2titc">马来西亚文化介绍</div>
          <div class="zmmk2conbox">
            <img src="../../assets/images/zhongma/mk2jiang.png" >
            <div :class="isEn?'zmmk2cont2':'zmmk2cont'">{{ $t('zhongma.t12') }}</div>
            <div class="zmmk2btn">{{ $t('zhongma.t10') }}</div>
          </div>
        </div>
        <div class="zmmk2lv3">
          <img src="../../assets/images/zhongma/mk2png2.png" >
          <img src="../../assets/images/zhongma/mk2png3.png" >
          <img src="../../assets/images/zhongma/mk2png4.png" >
        </div>
      </div>
    </div>
    <!-- <div class="zmmk3">
      <div :class="isEn?'zmmk3left zmmk3left2':'zmmk3left'">
        <div>{{ $t('zhongma.t13') }}</div>
        <div>{{ $t('zhongma.t14') }}</div>
        <div>{{ $t('zhongma.t15') }}</div>
      </div>
      <div class="zmmk3right">
        <ul>
          <li>
            <div>542</div>
            <div>参展商</div>
          </li>
          <li>
            <div>20000㎡</div>
            <div>展览空间</div>
          </li>
          <li>
            <div>454542</div>
            <div>访客</div>
          </li>
          <li>
            <div>5454件</div>
            <div>展品</div>
          </li>
          </ul>
          <ul>
          <li>
            <div>24</div>
            <div>会议</div>
          </li>
          <li>
            <div>542</div>
            <div>代表</div>
          </li>
          <li>
            <div>215</div>
            <div>国家</div>
          </li>
          <li>
            <div>542</div>
            <div>创业公司</div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="zmmk4">
      <div class="zmmk4tit">欢迎来到中国马来西亚线上交易会</div>
      <div class="zmmk4cont">举办中马智能制造、数字经济、跨境电商、现代农业行业企业对接会，企业组织分工按照展览展示。</div>
      <div class="zmmk4cont">会议直播和回放功能，全程播放中马商事法律合作研讨会。</div>
      <ul>
        <li>
          <img src="../../assets/images/zhongma/mk4png1.png" >
          <div>智能制造对接洽谈会</div>
        </li>
        <li>
          <img src="../../assets/images/zhongma/mk4png2.png" >
          <div>数字经济对接洽谈会</div>
        </li>
        <li>
          <img src="../../assets/images/zhongma/mk4png3.png" >
          <div>跨境电商对接洽谈会</div>
        </li>
        <li>
          <img src="../../assets/images/zhongma/mk4png4.png" >
          <div>现代农业对接洽谈会</div>
        </li>
      </ul>
      <div class="mk4btn">查看全部</div>
    </div>
    <div class="zmmk5">
      <div class="zmmk5tit">3D展馆</div>
      <img class="zmmk5zgimg" src="../../assets/images/zhongma/zmmk5zhanguan.png" />
      <div class="zmmk5tow">
        <div>
          点击前往展洽馆
          <img src="../../assets/images/zhongma/zmweibo.png" >
        </div>
        <div>
          视频解说
          <img src="../../assets/images/zhongma/zmweibo.png" >
        </div>
      </div>
      <div class="zmmk5tishi">您好～ 我是潍宝，将由我来带您参观3D展区。告诉你个小秘密：使用火狐浏览器，体验更佳哦！</div>
    </div>
    <div class="zmmk7">
      <div class="zmmk7tit">论坛直播</div>
      <div class="zmmk7cont">从技术和基础设施领域的行业领导者的智慧中获益。访问来自公共和私营部门的专家的主要融合。</div>
      <div class="zmmk7swiper">
        <swiper class="yyjlData" ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div class="slideleft">
                <img src="../../assets/images/zhongma/zmmk7png1.png" >
              </div>
              <div class="slideright">
                <div class="slidetit">中马智能制造企业对接会</div>
                <div class="slidecont">从技术和基础设施领域的行业领导者的智慧中获益。访问来自公共和私营部门的专家的主要融合。</div>
                <div class="slidebtn">查看详情→</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slideleft">
                <img src="../../assets/images/zhongma/zmmk7png1.png" >
              </div>
              <div class="slideright">
                <div class="slidetit">中马智能制造企业对接会</div>
                <div class="slidecont">从技术和基础设施领域的行业领导者的智慧中获益。访问来自公共和私营部门的专家的主要融合。</div>
                <div class="slidebtn">查看详情→</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slideleft">
                <img src="../../assets/images/zhongma/zmmk7png1.png" >
              </div>
              <div class="slideright">
                <div class="slidetit">中马智能制造企业对接会</div>
                <div class="slidecont">从技术和基础设施领域的行业领导者的智慧中获益。访问来自公共和私营部门的专家的主要融合。</div>
                <div class="slidebtn">查看详情→</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slideleft">
                <img src="../../assets/images/zhongma/zmmk7png1.png" >
              </div>
              <div class="slideright">
                <div class="slidetit">中马智能制造企业对接会</div>
                <div class="slidecont">从技术和基础设施领域的行业领导者的智慧中获益。访问来自公共和私营部门的专家的主要融合。</div>
                <div class="slidebtn">查看详情→</div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="mk7qubu">查看全部</div>
      </div>
    </div>
    <div class="zmmk8">
      <div class="zmmk8tit">登记</div>
      <ul class="zmmk8ul">
        <li>
          <div class="mk8tubiao"></div>
          <div class="mk8ultit">参展商</div>
          <div class="mk8ulcont">申请线上/线下展位</div>
          <div class="mk8ulbtn">去申请</div>
        </li>
        <li>
          <div class="mk8tubiao"></div>
          <div class="mk8ultit">赞助</div>
          <div class="mk8ulcont">成为赞助商/合作伙伴</div>
          <div class="mk8ulbtn">登记</div>
        </li>
        <li>
          <div class="mk8tubiao"></div>
          <div class="mk8ultit">代表</div>
          <div class="mk8ulcont">获得您的会议通行证</div>
          <div class="mk8ulbtn">登记</div>
        </li>
        <li>
          <div class="mk8tubiao"></div>
          <div class="mk8ultit">游客</div>
          <div class="mk8ulcont">立即注册免费入场</div>
          <div class="mk8ulbtn">登记</div>
        </li>
        <li>
          <div class="mk8tubiao"></div>
          <div class="mk8ultit">媒体</div>
          <div class="mk8ulcont">成为媒体合作伙伴</div>
          <div class="mk8ulbtn">登记</div>
        </li>
      </ul>
    </div>
    <div class="zmmk9">
      <div class="zmmk9tit">为什么要参与？</div>
      <div class="zmmk9cont">本届博览会汇聚了来自国际组织、学术机构和私营企业的城市领导和代表，旨在建立智慧城市的知识中心。博览会展示了构成智慧城市智慧城市框架的关键垂直领域，包括建筑、清洁、智能能源、交通、水等。</div>
      <ul>
        <li>
          <div class="mk9huiyaun">
            <img src="../../assets/images/zhongma/mk9icon1.png" >
          </div>
          <div class="mk9hytit">品牌价值</div>
          <div class="mk9hycont">在博览会上展示，
放大您的品牌价值</div>
        </li>
        <li>
          <div class="mk9huiyaun">
            <img src="../../assets/images/zhongma/mk9icon2.png" >
          </div>
          <div class="mk9hytit">连接</div>
          <div class="mk9hycont">在博览会上展示，
放大您的品牌价值</div>
        </li>
        <li>
          <div class="mk9huiyaun">
            <img src="../../assets/images/zhongma/mk9icon3.png" >
          </div>
          <div class="mk9hytit">发现</div>
          <div class="mk9hycont">在博览会上展示，
放大您的品牌价值</div>
        </li>
        <li>
          <div class="mk9huiyaun">
            <img src="../../assets/images/zhongma/mk9icon4.png" >
          </div>
          <div class="mk9hytit">探索</div>
          <div class="mk9hycont">在博览会上展示，
放大您的品牌价值</div>
        </li>
        <li>
          <div class="mk9huiyaun">
            <img src="../../assets/images/zhongma/mk9icon4.png" >
          </div>
          <div class="mk9hytit">学习</div>
          <div class="mk9hycont">在博览会上展示，
放大您的品牌价值</div>
        </li>
        <li>
          <div class="mk9huiyaun">
            <img src="../../assets/images/zhongma/mk9icon4.png" >
          </div>
          <div class="mk9hytit">网络</div>
          <div class="mk9hycont">在博览会上展示，
放大您的品牌价值</div>
        </li>
      </ul>
    </div>
    <div class="zmmk10">
      <div class="zmmk10tit">
        合作伙伴
      </div>
      <div class="yqlj-bg-list">
        <div class="yqlj-bg-itme" v-for="(item, index) in enterpriseLogos" :key="index"><img :src="item.logo" /></div>
      </div>
    </div>
    <div class="footer">
      <div class="fotcont">中国际贸易促进委员会潍坊市委员会<span>|</span>电话：0086-536-8789045(展览) 0086-536-8891227(联络)<span>|</span>传真：0086-536-8789407<span>|</span>邮箱：cjkiexpo@cjkiexpo.org.cn<span>|</span>地址：中国山东省潍坊市胜利东街99号</div>
      <div class="foothui"></div>
      <div class="footzui">Copyright © 中日韩产业博览会 All Rights Reserved 鲁ICP备17053774号-1</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 2,
          loop: true,
          autoplay: 4000,
        },
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
        isEn:false,
      }
    },
    mounted() {
      this.getYuYueData();
      if (localStorage.getItem("lang")=="en"){
        this.isEn = true;
      }else {
        this.isEn = false;
      }
      if (this.lang =="en"){
        this.$i18n.locale = this.lang;
        localStorage.setItem('lang', this.lang);
      }
      window.addEventListener("setItemEvent", (e) => {

        if (e.newValue=="en"){
          this.isEn = true;
        }else {
          this.isEn = false;
        }
      });
      if (this.lang =="en"){
        this.$i18n.locale = this.lang;
        localStorage.setItem('lang', this.lang);
      }
    },
    methods:{
      langChangeHandle(lang) {
        this.$i18n.locale = lang;
        localStorage.setItem('lang', lang);
        if (lang =="en"){
          this.isEn = true;
        }else {
          this.isEn = false;
        }
      },
    }
  }
</script>

<style>
  .zmplay{
    width: 44px!important;
    height: 44px!important;
    position: absolute;
    top: 156px;
    left: 277px;
    cursor: pointer;
  }
  .jzbjbtn{
    width: 116px;
    height: 28px;
    background: linear-gradient(45deg, #2556BF 0%, #6C54DE 100%);
    border-radius: 2px;
    opacity: 0.94;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 224px;
    left: 242px;
    z-index: 1;
    cursor: pointer;
  }
  .zmmk1right{
    position: relative;
  }
  .swiper-pagination-bullet-active{
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border: 2px solid #991D8A!important;
    opacity: 1!important;
  }
  .swiper-pagination-bullet{
    width: 18px;
    height: 18px;
    border: 2px solid #A2A2A2;
    padding: 2px;
    box-sizing: border-box;
    opacity: 1!important;
  }
  .yqlj-bg-list {
    display: flex;
    flex-flow: wrap;
    margin-top: 50px;
    width: 1360px;
    margin: auto;
    margin-bottom: 45px;
  }

  .yqlj-bg-itme {
    cursor: pointer;
  }
  .zmmk10tit{
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2B2A33;
    margin-bottom: 28px;
    text-align: center;
  }
  .zmmk10{
    width: 1920px;
    margin: auto;
    background-color: #fff;
    padding-top: 100px;
  }
  .footzui{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
  }
  .foothui{
    width: 1400px;
    height: 3px;
    background-color: #68686E;
    margin: auto;
    margin-bottom: 20px;
  }
  .fotcont span{
    margin: 0 10px 0 10px;
  }
  .fotcont{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 60px;
  }
  .footer{
    width: 1920px;
    margin: auto;
    background-color: #101131;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .mk9hycont{
    width: 144px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2B2A33;
    line-height: 25px;
    margin: auto;
  }
  .mk9hytit{
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 700;
    color: #2B2A33;
    margin-bottom: 12px;
    text-align: center;
  }
  .mk9huiyaun img{
    width: 79px;
    height: 87px;
  }
  .mk9huiyaun{
    width: 123px;
    height: 123px;
    background: #F1F1F1;
    border-radius: 123px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .zmmk9 ul li{
    width: 179px;
    height: 305px;
    background: #FFFFFF;
    padding-top: 30px;
  }
  .zmmk9 ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    margin: auto;
  }
  .zmmk9cont{
    width: 1200px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2B2A33;
    line-height: 33px;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
  }
  .zmmk9tit{
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2B2A33;
    text-align: center;
    margin-bottom: 30px;
  }
  .zmmk9{
    width: 1920px;
    background: #F1F1F1;
    margin: auto;
    padding: 50px 0 74px 0;
  }
  .mk8ulcont{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2B2A33;
    text-align: center;
  }
  .mk8ultit{
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 700;
    color: #2B2A33;
    padding: 20px 0 12px 0;
    text-align: center;
  }
  .zmmk8ul li:hover{
    width: 200px;
    height: 300px;
    box-shadow: 0 0 0px 0px #fff;
    padding-top: 30px;
    box-sizing: border-box;
    border: 2px solid #CC85C7;
  }
  .zmmk8ul li{
    width: 200px;
    height: 300px;
    box-shadow: 0 0 10px 0px #999;
    padding-top: 30px;
    box-sizing: border-box;
  }
  .mk8ulbtn{
    width: 80px;
    height: 46px;
    background: #777777;
    border-radius: 2px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    cursor: pointer;
  }
  .zmmk8ul li:hover .mk8ulbtn{
    width: 80px;
    height: 46px;
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border-radius: 2px;
  }
  .zmmk8ul li:nth-child(5):hover .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon5_1.png);
  }
  .zmmk8ul li:nth-child(5) .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon5.png);
    background-repeat: no-repeat;
    background-size: 100%;

  }
  .zmmk8ul li:nth-child(4):hover .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon4_1.png);
  }
  .zmmk8ul li:nth-child(4) .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon4.png);
    background-repeat: no-repeat;
    background-size: 100%;

  }
  .zmmk8ul li:nth-child(3):hover .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon3_1.png);
  }
  .zmmk8ul li:nth-child(3) .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon3.png);
    background-repeat: no-repeat;
    background-size: 100%;

  }
  .zmmk8ul li:nth-child(2):hover .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon2_1.png);
  }
  .zmmk8ul li:nth-child(2) .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon2.png);
    background-repeat: no-repeat;
    background-size: 100%;

  }
  .zmmk8ul li:nth-child(1):hover .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon1_1.png);
  }
  .zmmk8ul li:nth-child(1) .mk8tubiao{
    background: url(../../assets/images/zhongma/mk8icon1.png);
    background-repeat: no-repeat;
    background-size: 100%;

  }
  .mk8tubiao{
    width: 80px;
    height: 80px;
    margin: auto;
  }
  .zmmk8ul{
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 32px 0 120px 0;
  }
  .zmmk8tit{
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 700;
    color: #2B2A33;
    text-align: center;
  }
  .zmmk8{
    width: 1920px;
    margin: auto;
    padding-top: 100px;
  }
  .swiper-pagination{
    padding-top: 75px;
  }
  .mk7qubu{
    width: 566px;
    height: 60px;
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border-radius: 4px;
    margin: auto;
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
    cursor: pointer;
  }
  .slidebtn{
    width: 153px;
    height: 46px;
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border-radius: 2px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .slidecont{
    width: 229px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 28px;
    padding: 25px 0 40px 0;
    box-sizing: border-box;
  }
  .slidetit{
    width: 168px;
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 40px;
  }
  .yyjlData .swiper-slide{
    display: flex;
    justify-content: space-around;
  }
  .slideleft img{
    width: 282px;
    height: 341px;
  }
  .yyjlData{
    width: 1200px;
    margin: auto;
    padding-top: 65px;
    padding-bottom: 95px;
  }
  .zmmk7cont{
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
  }
  .zmmk7tit{
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    padding-top: 46px;
    margin-bottom: 30px;
    text-align: center;
  }
  .zmmk7{
    width: 1920px;
    margin: auto;
    background: url(../../assets/images/zhongma/zmmk7bj.png);
    background-size: 100%;
    background-repeat: no-repeat;
    padding-bottom: 47px;
  }
  .zmmk6 ul li div{
    text-align: start!important;
    margin-bottom: 9px;
  }
  .mk6zhu,.mk6zhu2{
    font-size: 20px!important;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400!important;
    color: #2B2A33!important;
    margin-top: 0!important;
    line-height: 28px!important;
    width: 250px;
  }
  .zmmk6{
    width: 1920px;
    margin: auto;
    background: #fff!important;
    padding-bottom: 76px;
  }
  .zmmk5tishi{
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #222222;
    margin-left: 378px;
    margin-top: 40px;
  }
  .zmmk5tow img{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 13px;
    right: 13px;
    margin: auto;
  }
  .zmmk5tow div{
    width: 220px;
    height: 46px;
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border-radius: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 16px;
    font-family: PingFangTC-Medium, PingFangTC;
    font-weight: 500;
    color: #FFFFFF;
    cursor: pointer;
  }
  .zmmk5tow{
    width: 780px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 94px;
    margin: auto;
  }
  .zmmk5zgimg{
    width: 598px;
    height: 396px;
    margin: auto;
    display: block;
  }
  .zmmk5tit{
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2B2A33;
    padding: 45px 0 61px 0;
    text-align: center;
  }
  .zmmk5{
    width: 1920px;
    margin: auto;
    background-image: url(../../assets/images/zhongma/zmmk5bj.png);
    background-repeat: no-repeat;
    background-size: 100%;
    padding-bottom: 39px;
  }
  .mk4btn{
    cursor: pointer;
    width: 566px;
    height: 60px;
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border-radius: 4px;
    margin: auto;
    margin-top: 76px;
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .zmmk4 ul li div{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-top: 41px;
    letter-spacing: 1px;
    text-align: center;
  }
  .zmmk4 ul li img{
    width: 280px;
    height: 374px;
  }
  .zmmk4 ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1198px;
    margin: auto;
    margin-top: 33px;
  }
  .zmmk4cont{
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #51565D;
    line-height: 22px;
  }
  .zmmk4tit{
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    letter-spacing: 1px;
    padding: 68px 0 25px 0;
    box-sizing: border-box;
    text-align: center;
  }
  .zmmk4{
    width: 1920px;
    margin: auto;
    background: linear-gradient(to bottom, #FAFAFA 0%, #FAFAFA 10%, #fff 0%, #fff 100%);
    padding-bottom: 76px;
  }
  .zmmk3{
    display: flex;
  }
  .zmmk3right{
    padding-top: 124px;
    margin-left: -120px;
    position: relative;
    z-index: 2;
  }
  .zmmk3right ul li{
    margin-bottom: 57px;
  }
  .zmmk3right ul:nth-child(2) li:nth-child(2n-1){
    width: 207px;
    height: 135px;
    background: rgba(255,255,255,.6);
  }
  .zmmk3right ul:nth-child(2) li:nth-child(2n){
    width: 207px;
    height: 135px;
    background: rgba(0,0,0,.8);
  }
  .zmmk3right ul:nth-child(1) li:nth-child(2n){
    width: 207px;
    height: 135px;
    background: rgba(255,255,255,.6);
  }
  .zmmk3right ul:nth-child(2) li:nth-child(2n-1) div:nth-child(1){
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 50px;
    letter-spacing: 1px;
    padding-top: 31px;
    box-sizing: border-box;
    text-align: center;
  }
  .zmmk3right ul:nth-child(2) li:nth-child(2n-1) div:nth-child(2){
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 22px;
    text-align: center;
  }
  .zmmk3right ul:nth-child(1) li:nth-child(2n) div:nth-child(1){
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 50px;
    letter-spacing: 1px;
    padding-top: 31px;
    box-sizing: border-box;
    text-align: center;
  }
  .zmmk3right ul:nth-child(1) li:nth-child(2n) div:nth-child(2){
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 22px;
    text-align: center;
  }
  .zmmk3right ul:nth-child(2) li:nth-child(2n) div:nth-child(1){
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
    padding-top: 31px;
    box-sizing: border-box;
  }
  .zmmk3right ul:nth-child(2) li:nth-child(2n) div:nth-child(2){
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    text-align: center;
  }
  .zmmk3right ul:nth-child(1) li:nth-child(2n-1) div:nth-child(1){
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
    padding-top: 31px;
    box-sizing: border-box;
  }
  .zmmk3right ul:nth-child(1) li:nth-child(2n-1) div:nth-child(2){
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    text-align: center;
  }
  .zmmk3right ul:nth-child(1) li:nth-child(2n-1){
    width: 207px;
    height: 135px;
    background: rgba(0,0,0,.8);
  }
  .zmmk3right ul{
    width: 916px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .zmmk3left div:nth-child(3){
    width: 144px;
    height: 38px;
    background: #000000;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
  }
  .zmmk3left2 div:nth-child(2){
    width: 200px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    margin: 19px 0 12px 0;
  }
  .zmmk3left div:nth-child(2){
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    margin: 19px 0 12px 0;
  }
  .zmmk3left div:nth-child(1){
    width: 112px;
    height: 184px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 46px;
    letter-spacing: 1px;
  }
  .zmmk3left{
    width: 693px;
    height: 551px;
    background: url(../../assets/images/zhongma/mk3cc.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 64px;
    padding: 138px 0 0 295px;
    box-sizing: border-box;
  }
  .zmmk3{
    width: 1920px;
    margin: auto;
    background: url(../../assets/images/zhongma/mk3bj.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .zmmk2lv3{
    padding-left: 29px;
  }
  .zmmk2lv3 img{
    width: 164px;
    height: 122px;
    margin-bottom: 6px;
  }
  .zmmk2btn{
    width: 140px;
    height: 39px;
    background: #A798FF;
    border-radius: 2px;
    border: 3px solid #D7C9FF;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .zmmk2conbox img{
    width: 32px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 29px;
  }
  .zmmk2cont2{
    width: 580px;
    height: 165px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #888888;
    line-height: 33px;
    margin: auto;
    padding-top: 21px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .zmmk2cont{
    width: 555px;
    height: 165px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #888888;
    line-height: 33px;
    margin: auto;
    padding-top: 64px;
    box-sizing: border-box;
  }
  .zmmk2conbox{
    position: relative;width: 609px;
    height: 290px;
    background: #FFFFFF;
    border-radius: 6px;
    z-index: 1;
    margin-left: -72px;
    box-sizing: border-box;
    margin-top: 16px;
  }
  .zmmk2titc{
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #666666;
    line-height: 50px;
    letter-spacing: 2px;
    padding-left: 36px;
    box-sizing: border-box;
  }
  .zmmk2tite{
    font-size: 18px;
    font-family: SignPainter-HouseScript, SignPainter;
    font-weight: normal;
    color: #D5D5D5;
    letter-spacing: 5px;
    padding: 18px 0 13px 36px;
    /* box-sizing: border-box; */
  }
  .zmmk2lv1 img{
    width: 451px;
    height: 356px;
  }
  .zmmk2box{
    width: 1200px;
    margin: auto;
    padding: 103px 0 98px 0;
    box-sizing: border-box;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }
  .zmmk2{
    width: 1920px;
    margin: auto;
    background-color: #F0F0F0;
  }
  .zmmk1right img{
    width: 599px;
    height: 356px;
  }
  .zmmk1btn{
    cursor: pointer;
    width: 170px;
    height: 39px;
    background: linear-gradient(45deg, #6928D1 0%, #FC1233 100%);
    border-radius: 2px;
    border: 1px solid #979797;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .zmmk1cont{
    width: 562px;
    height: 211px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #51565D;
    line-height: 22px;
    margin-top: 25px;
  }
  .zmmk1tit{
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 40px;
  }
  .zmmk1{
    width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 140px;
    padding-bottom: 70px;
    background-color: #F0F0F0;
  }
  .hengbo ul li a{
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #E8E8E8;
    height: 59px;
    cursor: pointer;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
  }
  .hengbo ul{
    width: 1060px;
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
  .hengbo{
    width: 1920px;
    margin: auto;
    background-color: #000;
    height: 59px;
  }
  .zmbanner img{
    width: 1920px;
    margin: auto;
    display: block;
  }
  .heriv3{
    margin-left: 44px;
    font-size: 15px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    width: 105px;
    height: 30px;
    background: linear-gradient(48deg, #6928D1 0%, #FC1233 100%);
    border-radius: 89px;
    border: 1px solid #979797;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wen{
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #C91969;
    cursor: pointer;
  }
  .heriv2 div{
    cursor: pointer;
  }
  .heriv2{
    display: flex;
    align-items: center;
    margin-left: 44px;
    width: 80px;
    justify-content: space-between;
    font-size: 14px;
  }
  .heightright{
    display: flex;
    align-items: center;
  }
  .heriv1 img{
    position: absolute;
    top: 6px;
    right: 12px;
    width: 23px;
    height: 23px;
  }
  .heriv1{
    position: relative;
  }
  .heriv1 input{
    width: 224px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 1px solid #DDDDDD;
    color: #666666;
    font-size: 14px;
    padding: 0 30px 0 12px;
  }
  .heightleft img{
    width: 182px;
    height: 84px;
  }
  .heightnei{
    width: 1200px;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .height{
    width: 100%;
    max-width: 1920px;
    height: 100px;
    margin: auto;
    background-color: #fff;
  }
  .headerWrap,.footerPage,.beian{
    display: none;
  }
  .homePage {
    min-width: 1290px;
    font-family: 宋体 !important;
  }
  .el-menu-item a{
    color: #fff;
  }
</style>
