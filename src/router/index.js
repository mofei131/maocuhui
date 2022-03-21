import Vue from "vue";
import Router from "vue-router";
import store from '@/store'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      //登录
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login")
    },
    {
      //注册
      path: "/register",
      name: "register",
      component: () => import("@/views/register/register")
    },
    {
      path: "/",
      name: "main",
      redirect: { name: "home" },
      component: () => import("@/views/main"),
      children: [
        {
          //搜索内容
          path: "searchDet",
          name: "searchDet",
          component: () => import("@/views/home/searchDet")
        },
        // {
        //   //首页
        //   path: "/home",
        //   name: "home",
        //   component: () => import("@/views/home/home")
        // },
        {
          //duijiehui
          path: "/duijie",
          name: "duijie",
          component: () => import("@/views/home/duijiehui")
        },
        {
          //duijiehui
          path: "/duijieDet",
          name: "duijieDet",
          component: () => import("@/views/home/duijiehuiDet")
        },
        {
          //首页
          path: "/home",
          name: "home",
          component: () => import("@/views/home/homeNew")
        },
        {
          //首页
          path: "/development",
          name: "development",
          component: () => import("@/views/home/developmentZone")
        },
        {
          //首页
          path: "/zone1",
          name: "zone1",
          component: () => import("@/views/home/development1")
        },
        {
          //首页
          path: "/zone2",
          name: "zone2",
          component: () => import("@/views/home/development2")
        },
        {
          //首页
          path: "/zone3",
          name: "zone3",
          component: () => import("@/views/home/development3")
        },
        {
          //首页
          path: "/zone4",
          name: "zone4",
          component: () => import("@/views/home/development4")
        },
        {
          //首页
          path: "/admin",
          name: "admin",
          component: () => import("@/views/admin")
        },
        {
          //嘉宾信息
          path: "/guestInformation",
          name: "guestInformation",
          component: () => import("@/views/exhibitionOverview/guestInformation")
        },
        {
          //问卷
          path: "/wenjuan",
          name: "wenjuan",
          component: () => import("@/views/home/wenjuan")
        },
        {
          //网红潍坊
          path: "/wanghongwf",
          name: "wanghongwf",
          component: () => import("@/views/home/wanghongwf")
        },
        {
          //供求分析
          path: "/gongqiu",
          name: "gongqiu",
          component: () => import("@/views/home/gongqiu"),
        },
        {
          //供求详情
          path: "/gongqiuDet",
          name: "gongqiuDet",
          component: () => import("@/views/home/gongqiuDet")
        },
        {
          //展会概况父页面
          path: "/exhibitionOverview",
          name: "exhibitionOverview",
          component: () =>
            import("@/views/exhibitionOverview/exhibitionOverview"),
          children: [
            {
              //展会概况
              path: "exhibitionGuide",
              name: "ExhibitionOverviewStatic",
              component: () => import("@/views/exhibitionOverview/exhibitionGuide")
            },
            {
              //展会信息
              path: "exhibitionInfo",
              name: "exhibitionInfo",
              component: () => import("@/views/exhibitionOverview/exhibitionInfo")
            },
            {
              //拟邀嘉宾
              path: "inviteGuests",
              name: "inviteGuests",
              component: () => import("@/views/exhibitionOverview/inviteGuests")
            },
            {
              path: "/inviteGuestDetail",
              name: "inviteGuestDetail",
              meta: {
                title: "嘉宾详情"
              },
              component: () => import("@/views/exhibitionOverview/inviteGuestDetail")
            },
            // 10.11 新增嘉宾信息

            {
              //展区分布
              path: "exhibitionDistribution",
              name: "exhibitionDistribution",
              component: () => import("@/views/staticPage")
            },
            {
              //展会信息
              path: "exhibitionOrganization",
              name: "exhibitionOrganization",
              component: () => import("@/views/exhibitionOverview/exhibitionOrganization")
            },
            {
              //交通信息
              path: "traffic",
              name: "traffic",
              component: () => import("@/views/exhibitionOverview/traffic")
            },
            {
              //周边服务
              path: "peripheralServicess",
              name: "peripheralServicess",
              component: () => import("@/views/exhibitionOverview/peripheralServicess")
            },
            {
              //展商名录
              path: "listOfExhibitors",
              name: "listOfExhibitors",
              component: () => import("@/views/exhibitionOverview/listOfExhibitors")
            },
            {
              //管理员登录
              path: "AdministratorLogin",
              name: "AdministratorLogin",
              component: () => import("@/views/exhibitionOverview/commonView")
            }
          ]
        },
        {
          //展商服务
          path: "/exhibitorService",
          name: "ExhibitorService",
          component: () => import("@/views/exhibitorService/exhibitorService"),
          children: [
            {
              //观展导览
              path: "visitProcedure",
              name: "ExhibitorServiceStatic",
              component: () => import("@/views/exhibitorService/visitProcedure")
            },
            {
              //文件下载
              path: "downloadDocument",
              name: "DownloadDocument",
              component: () => import("@/views/exhibitorService/fileDownload")
            }
          ]
        },
        {
          //观众服务
          path: "/audienceService",
          name: "AudienceService",
          component: () => import("@/views/audienceService/audienceService"),
          children: [
            {
              //注册/登录
              path: "/registered",
              name: "Registered",
              component: () => import("@/views/audienceService/fileDownload")
            },
            // {
            //   //观展导览
            //   path: "visitGuide",
            //   name: "AudienceServiceStatic",
            //   component: () => import("@/views/audienceService/visitGuide")
            // },
            {
              //展商查询
              path: "exhibitorInquiry",
              name: "ExhibitorInquiry",
              component: () => import("@/views/exhibitionOverview/listOfExhibitors")
            },
            // {
            //   //合作酒店
            //   path: "partnerHotel",
            //   name: "PartnerHotel",
            //   component: () => import("@/views/audienceService/fileDownload")
            // },
            {
              //参展须知
              path: "downloadDocument",
              name: "AudienceServicedownloadDocument",
              component: () => import("@/views/audienceService/fileDownload")
            }
          ]
        },
        {
          //项目合作
          path: "itemcooperate",
          name: "itemcooperate",
          component: () => import("@/views/audienceService/itemcooperate")
        },
        {
          //记者服务
          path: "/pressService",
          name: "PressService",
          component: () => import("@/views/pressService/pressService"),
          children: [
            {
              //注册/登录
              path: "/logIn",
              name: "logIn",
              component: () => import("@/views/pressService/pressServiceView")
            },
            {
              //注册方式
              path: "/wayToregister",
              name: "wayToregister",
              component: () => import("@/views/pressService/pressServiceView")
            },
            {
              //媒体报道
              path: "pressService",
              name: "pressService",
              component: () => import("@/views/pressService/pressServiceView")
            },
            {
              //新闻通稿
              path: "/pressRelease",
              name: "pressRelease",
              component: () => import("@/views/pressService/pressServiceView")
            }
          ]
        },

        {
          //行业资讯
          path: "/industryInformation",
          name: "industryInformation",
          component: () =>
            import("@/views/industryInformation/industryInformation"),
          children: [
            {
              //行业标准
              path: "industryLabel",
              name: "industryLabel",
              component: () =>
                import("@/views/industryInformation/industryLabel")
            },
            {
              //供需发布
              path: "supplyAndDemandRelease",
              name: "supplyAndDemandRelease",
              component: () =>
                import("@/views/industryInformation/industryLabel")
            },
            {
              //行业数据
              path: "industryData",
              name: "industryData",
              component: () =>
                import("@/views/industryInformation/industryInformationView")
            },
            {
              //行业报道
              path: "industryReport",
              name: "industryReport",
              component: () =>
                import("@/views/industryInformation/industryPolicy")
            },
            {
              //行业政策
              path: "industryPolicy",
              name: "industryPolicy",
              component: () =>
                import("@/views/industryInformation/industryInformationView")
            },
            {
              //行业资讯
              path: "industryInformation",
              name: "industryInformation",
              component: () =>
                import("@/views/industryInformation/industryInformationView")
            },
            {
              //周边服务
              path: "/peripheralServices",
              name: "peripheralServices",
              component: () =>
                import("@/views/industryInformation/industryInformationView")
            }
          ]
        },
        {
          //新闻中心
          path: "/newsCenter",
          name: "newsCenter",
          component: () => import("@/views/newsCenter/newsCenter"),
          children: [
            {
              //情况说明
              path: "descriptionOfTheSituation",
              name: "descriptionOfTheSituation",
              component: () => import("@/views/staticPage")
            },
            {
              //相册分类
              path: "imageSet",
              name: "imageSet",
              component: () => import("@/views/newsCenter/imageSet")
            },
           /* {
              //相册分类
              path: "qualityList",
              name: "qualityList",
              component: () => import("@/views/newsCenter/qualityList")
            },*/
            {
              //相册分类
              path: "quality",
              name: "quality",
              component: () => import("@/views/newsCenter/quality")
            },
            {
              //相册分类
              path: "qualityInfo",
              name: "qualityInfo",
              component: () => import("@/views/newsCenter/qualityInfo")
            },
            {
              //新闻报道
              path: "exhibitionReport",
              name: "exhibitionReport",
              component: () => import("@/views/newsCenter/newsList")
            },
            {
              //展后报告
              path: "PostShowReport",
              name: "PostShowReport",
              component: () => import("@/views/filePreview")
            },
            {
              //媒体报道
              path: "mediaReports",
              name: "mediaReports",
              component: () => import("@/views/newsCenter/newsList")
            },
            {
              //新闻通稿
              path: "pressRelease-news",
              name: "pressRelease-news",
              component: () => import("@/views/newsCenter/newsList")
            },
            {
              //往届回顾
              path: "pastReview",
              name: "pastReview",
              component: () => import("@/views/newsCenter/newsCenterView")
            },
            {
              //现场相册
              path: "livePhotoAlbum",
              name: "livePhotoAlbum",
              component: () => import("@/views/newsCenter/livePhotoAlbum")
            },
            {
              //应用技能大赛
              path: "newsList",
              name: "newsList",
              component: () => import("@/views/newsCenter/mediaNews")
            },
            {
              //应用技能大赛
              path: "skillsCompetition",
              name: "skillsCompetition",
              component: () => import("@/views/newsCenter/newsList")
            },{
              //媒体直通
              path: "reprintedAndMediaReports",
              name: "reprintedAndMediaReports",
              component: () => import("@/views/newsCenter/mediaList")
            },{
              //往届回顾
              path: "pastView",
              name: "pastView",
              component: () => import("@/views/newsCenter/pastView")
            },
          ]
        },
        {
          //会议直播
          path: "/conferenceLive",
          name: "conferenceLive",
          component: () => import("@/views/conferenceLive/conferenceLive"),
          children: [
            {
              //论坛日程
              path: "/schedule",
              name: "schedule",
              component: () => import("@/views/schedule/schedule")
            },
            {
              //活动1
              path: "/conferenceLive1",
              name: "conferenceLive1",
              component: () => import("@/views/conferenceLive/conferenceLive1")
            },
            {
              //活动2
              path: "/conferenceLive2",
              name: "conferenceLive2",
              component: () => import("@/views/conferenceLive/conferenceLive2")
            },
            {
              //活动3
              path: "/conferenceLive3",
              name: "conferenceLive3",
              component: () => import("@/views/conferenceLive/conferenceLive3")
            },
            {
              //活动4
              path: "/conferenceLive4",
              name: "conferenceLive4",
              component: () => import("@/views/conferenceLive/conferenceLive4")
            },
            {
              //活动5
              path: "/conferenceLive5",
              name: "conferenceLive5",
              component: () => import("@/views/conferenceLive/conferenceLive5")
            },
            {
              //活动6
              path: "/conferenceLive6",
              name: "conferenceLive6",
              component: () => import("@/views/conferenceLive/conferenceLive6")
            },
            {
              //活动7
              path: "/conferenceLive7",
              name: "conferenceLive7",
              component: () => import("@/views/conferenceLive/conferenceLive7")
            },
          ]
        },

        {
          //会议日程
          path: "/schedule",
          name: "schedule",
          component: () => import("@/views/schedule/schedule")
        },
        {
          //直播详情
          path: "/liveDetail",
          name: "liveDetail",
          component: () => import("@/views/liveDetail/liveDetail")
        },
        {
          //展馆列表
          path: "/pavilionList",
          name: "pavilionList",
          component: () => import("@/views/pavilionList/pavilionList")
        },
        {
          //展馆详情
          path: "/pavilionDetail",
          name: "pavilionDetail",
          component: () => import("@/views/pavilionDetail/pavilionDetail")
        },
        {
          //展品列表
          path: "/exhibitsList",
          name: "exhibitsList",
          component: () => import("@/views/exhibitsList/exhibitsList")
        },
        {
          path: "/businessmanDet",
          name: "businessmanDet",
          meta: {
            title: "展商详情"
          },
          component: () => import("@/views/exhibition/businessmanDet")
        },
        {
          path: "/exhibitDetil",
          name: "exhibitDetil",
          meta: {
            title: "展品详情"
          },
          component: () => import("@/views/exhibition/exhibitDetil")
        },
        {
          path: "/exhibitionList",
          name: "exhibitionList",
          component: () => import("@/views/exhibition/exhibitionList")
        },
        {
          path: "/exhibitors",
          name: "Exhibitors",
          component: () => import("@/views/fasttrack/exhibitors")
        },
        {
          path: "/audience",
          name: "Audience",
          component: () => import("@/views/fasttrack/audience")
        },
        {
          //新闻详情
          path: "/newsInfo",
          name: "newsInfo",
          component: () => import("@/views/newsCenter/newsInfo")
        },
        {
          //重点
          path: "/emphasisEnterprise",
          name: "emphasisEnterprise",
          component: () => import("@/views/exhibition/emphasisExhibitions")
        },
        {
          //重点
          path: "/emphasisExhibits",
          name: "emphasisExhibits",
          component: () => import("@/views/exhibition/emphasisExhibitions")
        },{
          //报名
          path: "/baoming",
          name: "baoming",
          component: () => import("@/views/home/baoming")
        },{
          //罗南道
          path: "/luonan",
          name: "luonan",
          component: () => import("@/views/home/luonan")
        },{
          //岭湖南
          path: "/linghunan",
          name: "linghunan",
          component: () => import("@/views/home/linghunan")
        },{
          //中马
          path: "/zhongma",
          name: "zhongma",
          component: () => import("@/views/home/zhongma")
        },{
          //中马
          path: "/weifang",
          name: "weifang",
          component: () => import("@/views/home/weifang")
        },{
          //阿联酋
          path: "/arab",
          name: "arab",
          component: () => import("@/views/home/arab")
        }
      ]
    }
  ]
});

router.beforeEach(function (to, from, next) {
  if (from.name !== to.name && (from.path.split('/')[1] !== to.path.split('/')[1])) {
    document.body.scrollIntoView()
  }
  if ((to.path === '/logIn' || to.path === '/login') && from.path !== '/' && from.path !== '/register') {
    if (from.path === '/admin') {
      sessionStorage.setItem('routeHistory', '/home')
    } else {
      sessionStorage.setItem('routeHistory', from.fullPath)
    }
  }

  if (localStorage.getItem('token')) {
    if (store.state.user.info.id) {
      if (to.path === '/logIn' || to.path === '/login') {
        next(`/admin`);
      } else {
        next();
      }
    } else {
      store.dispatch('user/getinfo').then(() => {
        if (to.path === '/logIn' || to.path === '/login') {
          next(`/admin`);
        } else {
          next();
        }
      }).catch(() => {
        localStorage.removeItem('token')
        location.reload()
      })
    }
  } else {
    if (store.state.user.info.id) {
      store.commit('user/SETINFO', {})
    }
    next();
  }
});

export default router;
