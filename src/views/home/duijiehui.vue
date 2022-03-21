<template>
  <div>
    <div class="bjbox">
      <div class="videofelx">
        <div :class="isEn?'mktit2':'mktit'">
          <div>{{ $t('datian.t1') }}</div>
          <div>{{ $t('datian.t2') }}</div>
          <div class="date">2021-12-21</div>
        </div>
        <div class="monig">
         <!-- <button @click="isKorea=true">切换韩文</button> -->
          <div @click="iss = 1">
            <img src="../../assets/images/duijiehui/viedobanner.jpg" />
            <div class="viedotit" v-if="!isKorea">{{ $t('datian.t3') }}</div>
            <div class="viedotit" v-if="isKorea">韩文111</div>
          </div>
          <div @click="iss = 2">
            <img src="../../assets/images/duijiehui/viedobanner2.png" />
            <div class="viedotit" v-if="!isKorea">{{ $t('datian.t4') }}</div>
            <div class="viedotit" v-if="isKorea">韩文222</div>
          </div>
        </div>
      </div>
      <div class="mk1box">
        <div class="mk1left">
          <div class="mk1le1">
            <div class="mk1le1shanglan">
              <img src="../../assets/images/duijiehui/rougui.png" />
            </div>
            <div class="mk1le1zhongzi" v-if="!isKorea">
              {{ $t('datian.t1') }}
            </div>
            <div class="mk1le1zhongzi" v-if="isKorea">
              韩文
            </div>
            <div class="mk1le1xialan" v-if="!isKorea">
              /{{ $t('datian.t5') }}/
            </div>
            <div class="mk1le1xialan" v-if="isKorea">
              /kkkkk/
            </div>
          </div>
          <div :class="isEn?'mk1le2_2':'mk1le2'">
            <div v-if="!isKorea">{{ $t('datian.t6') }}</div>
            <div v-if="isKorea">k0</div>
            <div v-if="!isKorea">{{ $t('datian.t7') }}</div>
            <div v-if="isKorea">k1</div>
          </div>
          <div class="mk1le3">
            <div :class="isEn?'datianbox2':'datianbox'">
              <div :class="isEn?'datiancont2':'datiancont'" v-if="!isKorea">
                {{ $t('datian.t15') }}
              </div>
              <div class="datiancont"  v-if="isKorea">
                Located in the heart of Korea, Daejeon is a central city in terms of transportation, logistics and economy with the most active industrial activities and robust economic development in Korea. Not only a hub city of Northeast Asia, Daejeon is also the best choice for investment in Korea. Daejeon is a central city with the most advanced technologies in the world and its convenient wide-area transportation system allows passengers to reach anywhere in Korea in only 90 minutes. As a major city in the WTA (World Technopolis Alliance), Daejeon cooperates with major countries around the world for growing businesses and global economy through science and technology. We provide all-around comfortable services by adjusting to customer preferences and needs at any time.。
              </div>
              <div class="datrianblack"></div>
            </div>
            <div class="jingwen">
              <div class="jingwenleft">
                <div class="baijian"></div>
              </div>
              <div class="jingwenright" v-if="!isKorea">
                {{ $t('datian.t8') }}
              </div>
              <div class="jingwenright"  v-if="isKorea">
                韩文
              </div>
            </div>
          </div>
        </div>
        <div class="mk1right">
          <div class="k1rgtop">
            <ul>
              <li>
                <div class="sancaiimg">
                  <img src="../../assets/images/duijiehui/sancai4.jpg" />
                </div>
                <div :class="isEn?'k1rgtopnei2':'k1rgtopnei'">
                  <div :class="isEn?'sancaitit2':'sancaitit'">
                    <div class="leftcai"></div>
                    <div :class="isEn?'k1rgtoptit2':'k1rgtoptit'" v-if="!isKorea">{{ $t('datian.t9') }}</div>
                    <div class="k1rgtoptit" v-if="isKorea">k2</div>
                  </div>
                  <div :class="isEn?'k1rgtopcon2':'k1rgtopcon'"  v-if="!isKorea">
                    {{ $t('datian.t16') }}
                  </div>
                  <div class="k1rgtopcon"  v-if="isKorea">
                    222EXPO科学公园是国民科学教育的平台，其宗旨在于纪念93年大田博览会的辉煌成就，发展尖端产业和科学技术，最近开馆的大田EXPO纪念馆和世界EXPO纪念博物馆，不仅陈列有世界第一维多利亚女王的万国旗丝巾，还有其他5,000多件等珍贵纪念品。
                  </div>
                </div>
                <!--                <div class="k1rgtopbot">
                                  <div class="dianriht">
                                    <div class="dijian"></div>
                                    <div class="k1rgtopduo">查看更多</div>
                                  </div>
                                </div>-->
              </li>
              <li>
                <div class="sancaiimg">
                  <img src="../../assets/images/duijiehui/sancai2.png" />
                </div>
                <div :class="isEn?'k1rgtopnei2':'k1rgtopnei'">
                  <div :class="isEn?'sancaitit2':'sancaitit'">
                    <div class="leftcai"></div>
                    <div :class="isEn?'k1rgtoptit2':'k1rgtoptit'" v-if="!isKorea">{{ $t('datian.t10') }}</div>
                    <div class="k1rgtoptit" v-if="isKorea">开k3</div>
                  </div>
                  <div :class="isEn?'k1rgtopcon2':'k1rgtopcon'"  v-if="!isKorea">
                    {{ $t('datian.t17') }}
                  </div>
                  <div class="k1rgtopcon"  v-if="isKorea">
                   333 基础科学研究院是韩国未来创造科学部下属研究机构，是韩国“国际科学商务带”建设项目的一部分，目的在于建设世界一流水平的基础研究科学机构。
                    基础科学研究院主要实施一般研究机构及大学难以实施的纯粹基础研究，例如基于长期重大融合研究及大型设备的大科学研究等。
                  </div>
                </div>
              </li>
              <li>
                <div class="sancaiimg">
                  <img src="../../assets/images/duijiehui/sancai5.jpg" />
                </div>
                <div :class="isEn?'k1rgtopnei2':'k1rgtopnei'">
                  <div :class="isEn?'sancaitit2':'sancaitit'">
                    <div class="leftcai"></div>
                    <div :class="isEn?'k1rgtoptit2':'k1rgtoptit'" v-if="!isKorea">{{ $t('datian.t11') }}</div>
                    <div class="k1rgtoptit" v-if="isKorea">k</div>
                  </div>
                  <div :class="isEn?'k1rgtopcon2':'k1rgtopcon'" v-if="!isKorea">
                    {{ $t('datian.t18') }}
                  </div>
                  <div class="k1rgtopcon" v-if="isKorea">
                   444 KSTAR是韩国大田研究基地国家聚变研究所的超导托卡马克核聚变装置，被称为“韩国太阳”，它是国际热核聚变实验反应堆（ITER）项目的一部分。2020年11月23日，韩国聚变能研究所宣布KSTAR将等离子体在高达1亿度的高温下维持了20秒钟，创造了当时的世界纪录。
                  </div>
                </div>
                <!--                <div class="k1rgtopbot">
                                  <div class="dianriht">
                                    <div class="dijian"></div>
                                    <div class="k1rgtopduo">查看更多</div>
                                  </div>
                                </div>-->
              </li>
            </ul>
          </div>
          <div class="k1rgbot">
            <video width="1090" height="605" controls poster="../../assets/images/duijiehui/fengmian.png">
              <source src="http://cjkiexpo.org.cn/videosjava/datianguangyu.mp4" type="video/mp4">
            </video>
          </div>
          <img class="gongbao" src="../../assets/images/duijiehui/gongbao.png" >
        </div>
      </div>
      <!-- <div class="mk2box">
        <div class="mk2boxtop">
          <div class="mk2bl">
            <div class="mk2topleft" v-for="(item,index) in titlist" @click="caiyong2(item.value)">
              <div :class="caiyong == item.value?'mk2biaoti2':'mk2biaoti'">
                {{ item.title }}
              </div>
            </div>
          </div>
          <div class="mk2topright">
            <input type="text" :placeholder="$t('datian.t12')"  v-model="searchValue"/>
            <img src="../../assets/images/duijiehui/sousuo.png" @click="getYuYueData()">
          </div>
        </div>
        <ul class="cardfen">
          <li class="mk2boxbot" v-for="(item,index) in cardlist">
            <div class="mk2boxcard">
              <div class="mk2jztop">
                <div class="mk2jzleft">
                  <img :src="item.img" >
                </div>
                <div class="mk2jzright"  @click="toPage('/duijiehuiDet?id='+item.id)">
                  <div class="mk2jz1" :title="item.name" style="cursor: pointer">{{item.name}}</div>
                  <div class="mk2jz2">{{ $t('datian.t13') }}:{{item.fenlei}}</div>
                  <div class="mk2jz3">{{item.cont}}</div>
                </div>
              </div>

              <div class="mk2jzbot" @click="newOpen('https://f.wps.cn/w/o0Q1AHM0/')" >{{ $t('datian.t14') }}</div>
            </div>
          </li>
        </ul>
      </div> -->
      <!-- <div style="padding: 50px 0; text-align: center">
        <el-pagination
          background
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-sizes="[6]"
          :page-size="pageSize"
          :total="totalPage"
          layout="total, sizes, prev, pager, next, jumper, slot"
        >
          <el-button
            style="margin-left: 20px; border: 1px solid #c0c4cc; color: #606266"
            size="mini"
            @click="getData"
          >{{ $t("listOfExhibitors.t4") }}</el-button>
        </el-pagination>
      </div> -->
      <div class="szbox">
        <div class="szleft">
          <div class="sztit">创新服务举措 搭建资源平台</div>
          <div class="sztit">中日韩产业博览会线上专场洽谈会正式上线</div>
          <div class="szcont">
            为更好服务企业，提供优质经贸资源，市贸促会创新服务举措，依托中日韩产业博览会，搭建线上专场洽谈会平台。12月21日，作为线上专场洽谈会首场活动—“韩国大田广域市企业专场洽谈会”成功举办。</br>
            本次对接会由潍坊市贸促会、韩国大田广域市政府驻沈阳代表处联合主办，商汇云（潍坊）数字科技有限公司协办，主会场设在潍坊市贸促会会议室。通过前期的登门拜访、电话联系、发送电子邀请函等方式，为大田广域市39家企业精准匹配省内化妆品、保健品、医疗美容、食品等领域企业7家。双方企业通过线上视频会议形式，开展了12场线上一对一对接洽谈。</br>
            本次活动变“线下”为“线上”，实现买家与卖家精准匹配，配备专业翻译人员，极大提高了沟通效率。会上双方企业从产品特征、合作形式、进出口政策、市场开拓等方面进行了深入交流。会后参会企业对洽谈会的创新形式及体验给予了高度评价，山东潍坊百货股份有限公司、泰晶（山东）进出口有限公司、烟台悦林商贸有限公司等企业均表示洽谈会后将进一步与韩方企业探讨开辟新市场，拓展新客户等业务。</br>
            潍坊市贸促会党组书记、会长胡文星在洽谈会开幕致辞中表示，潍坊是一个以制造业闻名的城市，潍坊制造业优势突出，也是韩国电子产品、日用品、化妆品和保健品重要出口市场，真诚希望通过此次专场洽谈会双方建立联系，做成朋友，达成商机。</br>
            韩国大田广域市政府驻沈阳代表处首席代表卢英镐表示，大田广域市非常有幸能与潍坊市举办两市间线上的洽谈会，希望从事销售和流通领域的企业人士在此次洽谈会上能够如愿以偿，双方更多的企业人士关注此次洽谈会，达成更多务实合作成果。</br>
            潍坊市贸促会将以此次活动为契机，进一步完善丰富线上平台，组织多领域多行业专场洽谈会，实现供需精准对接，提升“潍商赋能、潍品出海”能力，更好服务企业，大力开拓国际市场，让潍坊品牌特色产品更快速地走向全球。
          </div>
        </div>
        <div class="szright">
          <img src="../../assets/images/exhibitionOverview/zhgk3.png" />
        </div>
      </div>
      <div class="szbox2">
       <!-- <slider class="yyjlData" :options="options" @slide='slide'>
          <slideritem>
            <img src="../../assets/images/duijiehui/lb1.png" />
            <img src="../../assets/images/duijiehui/lb2.png" />
            <img src="../../assets/images/duijiehui/lb3.png" />
            <img src="../../assets/images/duijiehui/lb4.png" />
          </slideritem>
          <slideritem>
            <img src="../../assets/images/duijiehui/lb5.jpeg" />
            <img src="../../assets/images/duijiehui/lb6.jpeg" />
          </slideritem>
          <slideritem>
            <img src="../../assets/images/duijiehui/lb7.png" />
            <img src="../../assets/images/duijiehui/lb8.png" />
          </slideritem>
          <slideritem>
            <img src="../../assets/images/duijiehui/lb9.png" />
          </slideritem>
        </slider> -->
        <swiper class="yyjlData" ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <img src="../../assets/images/duijiehui/lb1.png" />
              <img src="../../assets/images/duijiehui/lb2.png" />
              <img src="../../assets/images/duijiehui/lb3.png" />
              <img src="../../assets/images/duijiehui/lb4.png" />
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/images/duijiehui/lb5.jpeg" />
              <img src="../../assets/images/duijiehui/lb6.jpeg" />
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/images/duijiehui/lb7.png" />
              <img src="../../assets/images/duijiehui/lb8.png" />
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/images/duijiehui/lb9.png" />
            </swiper-slide>
          </swiper>
      </div>
    </div>
    <Mylogin :visible.sync="visible" />
    <div class="tan">
      <div class="pictxt" @click="ciow">
        <img src="../../assets/images/duijiehui/viedoplay.png" >
        <div>{{ $t('datian.t19') }}</div>
      </div>
      <a class="pictxt" @click="newOpen('http://cjkiexpo.org.cn/java/storage/datian/datianshuoming.pdf')">
        <img src="../../assets/images/duijiehui/worddown.png" >
        <div>{{ $t('datian.t20') }}</div>
      </a>
    </div>
    <div class="video" v-if="vish">
      <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="vish = false" src="../../assets/images/exhibition/close.png" />
      <video width="1090" height="605" controls poster="../../assets/images/duijiehui/fengmian.png">
        <source src="http://cjkiexpo.org.cn/videosjava/datian/datiancaozuo.m4v" type="video/mp4">
      </video>
    </div>
    <div class="video video2" v-if="iss == 1">
      <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="iss = 0" src="../../assets/images/exhibition/close.png" />
      <video controls autoplay>
        <source src="http://cjkiexpo.org.cn/videosjava/datian101.mp4" type="video/mp4">
      </video>
    </div>
    <div class="video" v-if="iss == 2">
      <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="iss = 0" src="../../assets/images/exhibition/close.png" />
      <video width="1090" height="605" controls autoplay>
        <source src="http://cjkiexpo.org.cn/videosjava/datian102.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>

import Mylogin from "../exhibition/compontent/mylogin";
// import swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';

import { slider, slideritem } from 'vue-concise-slider';
export default{
  name: "duijiehui",
  components: {
    Mylogin,
    // slider,
    // slideritem
  },
  data(){
    return{
      options: {
        // loop: true,
         slidesPerView :'auto',
         spaceBetween : 20,　// 设置slide间的间距
         observer:true,　　　// 异步情况下数据渲染完成，再次初始化轮播图
         observeParents:true, // 异步情况下数据渲染完成，再次初始化轮
        autoplay: 4000,
      },
      swiperOptions: {
        // slidesPerView: 4,
        loop: true,
        autoplay: 4000,
        observer:true,　　　// 异步情况下数据渲染完成，再次初始化轮播图
        observeParents:true, // 异步情况下数据渲染完成，再次初始化轮
      },
      pageIndex: 1,
      pageSize: 6,
      totalPage: 0,
      visible: false,
      searchValue:'',
      isKorea:false,
      lang: this.$route.query.lang,
      cardlist:[
        {
          img:'http://hlstore.yimetal.cn/2021/yibohui/%E5%9B%BE%E5%B1%82%2013@2x.png',
          name:'企业名称',
          fenlei:'化妆品',
          cont:'潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动力是一家企业潍柴动',
        }
      ],
      titlist:[
        {
          id:0,
          title:'全部',
          value:''
        },{
          id:1,
          title:'化妆品',
          value:'化妆品'
        },{
          id:2,
          title:'保健品',
          value:'保健品'
        },{
          id:3,
          title:'医疗美容',
          value:'医疗美容'
        },{
          id:4,
          title:'食品',
          value:'食品'
        },
      ],
      caiyong:'',
      vish:false,
      iss:0,
      isEn:false
    }
  },
  computed: {
     swiper() {
        return this.$refs.mySwiper.swiper
     }
  },
  mounted() {
     this.swiper.slideTo(3, 1000, false)
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
    this.getYuYueData();
    if (this.lang =="en"){
      this.$i18n.locale = this.lang;
      localStorage.setItem('lang', this.lang);
    }
  },
  methods:{
    slide(data) {
      console.log(data.currentPage)
      console.log('隔')
      // if(data.currentPage == 3){
      //   this.yyjlData_sty == 1
      // }else{
      //   this.yyjlData_sty == 0
      // }
      // console.log(this.yuyueData.length)
      // if(data.currentPage < this.yuyueData.length+1){
      //   if (data.currentPage == this.yuyueData.length) {
      //     this.yuyueData_sty = 1;
      //   } else if(data.currentPage < this.yuyueData.length) {
      //     this.yuyueData_sty = 0;
      //   }
      // }else {
      //   data.currentPage = 0
      //   return;
      // }

    },
    // 下载文件
    download(data) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", "文字说明.pdf");

      document.body.appendChild(link);
      link.click();
    },
    ciow(){
      this.vish = !this.vish
    },
    getData(){

    },
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url
      });
    },
    newOpen(url) {
      window.open(url);
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getYuYueData();
    }, // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getYuYueData();
    },
    caiyong2(id){
      this.caiyong = id;
      this.getYuYueData();
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
    getYuYueData() {
      let thht = []
      this.$http({
        url: this.$http.adornUrl(
          `/appointmentTime/list?page=${this.pageIndex}&pageSize=${this.pageSize}&type=${this.caiyong}&companyName=${this.searchValue}`
        ),
        method: 'get'
      }).then(({ data }) => {
        this.totalPage = data.data.total
        if (data && data.code === 1) {
          for (let i = 0; i < data.data.list.length; i++) {
            let flag = 0;
            /*if (data.data.list[i].reserved == data.data.list[i].maximum) {
              flag = 2;
            }*/
            let time = {
              time: data.data.list[i].starttime,
              y_yuyue: data.data.list[i].reserved,
              companyId: data.data.list[i].companyId,
              exhibitorId: data.data.list[i].exhibitorId,
              fenlei: data.data.list[i].type,
              cont: data.data.list[i].intro,
              appId: data.data.list[i].appId,
              id: data.data.list[i].id,
              name: data.data.list[i].companyName,
              img:data.data.list[i].img,
              s_yuyue: data.data.list[i].maximum,
              static: flag
            };
            thht.push(time)
            // this.yuyueData.push(time);
            // this.yuyueData = thht
          }
          this.cardlist = thht
        }
      });

    },
    yuyue2(item){
      this.$notify({
        title: '预约成功',
        message: '您的预约序号是2号',
        type: 'success',
        duration: 0,
        position: 'top-right'
      });
    },
    yuyue(item) {
      this.islogin().then(() => {
        this.$confirm('是否要预约此企业?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          let token = localStorage.getItem('userId');
          this.$http({
            url: this.$http.adornUrl('/appointmentRecord/save'),
            method: 'post',
            data: this.$http.adornData({
              exhibitor3dId: item.companyId,
              userId: token,
              timeType: item.appId,
              exhibitorId: item.exhibitorId
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
  }
}
</script>

<style>
  .slider-container{
   width: 1400px;
    margin: auto;
  }
  .sztit{
    font-size: 24px;
    line-height: 38px;
    padding-left: 15px;
  }
  .swiper-container-horizontal > .slider-pagination-bullets{
    display: none;
  }
  .szright img{
    width: 700px;
    height: 600px;
  }
  .szcont{
    line-height: 32px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 16px;
  }
  .yyjlData .swiper-slide{
    width: 1540px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
  }
  .yyjlData img{
    /* width: 300px; */
    height: 350px;
    margin: 0 20px 0 20px;
  }
  .szbox2{
    width: 1540px;
    height: 690px;
    margin: auto;
    /* background-color: #fff; */
    background-image: url(../../assets/images/duijiehui/duijeibbj.jpg);
    margin-top: 32px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .szbox{
    width: 1540px;
    height: 819px;
    margin: auto;
    /* background-color: #fff; */
    background-image: url(../../assets/images/duijiehui/duijeibbj.jpg);
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
    background-size: 100%;
    background-repeat: no-repeat;
  }
.videofelx{
  display: flex;
  align-items: center;
}
.viedotit{
  text-align: center;
  font-size: 24px;
  /* font-weight: bold; */
  color: #fff;
  margin-top: 20px;
}
.monig img{
  width: 244px;
  height: 200px;
  cursor: pointer;
  border-radius: 15px;
  border: 3px solid #006BFF;
}
.monig{
  display: flex;
  align-items: center;
  width: 540px;
  justify-content: space-between;
  margin-left: 7%;
  margin-top: 40px;
}
.video2{
  left: 40%!important;
}
.video{
  position: fixed;
  top: 20%;
  left: 20%;
  z-index: 100;
}
.tan{
  width: 100px;
  height: 280px;
  border: 5px solid #7DAEFE;
  background-color: #fff;
  border-radius: 8px;
  position: fixed;
  right: 33px;
  bottom: 20%;
  z-index: 100;
}
.pictxt{
  cursor: pointer;
}
.pictxt:nth-child(1){
  margin-top: 38px;
  margin-bottom: 48px;
}
.pictxt div{
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  margin-top: 18px;
  text-align: center;
}
.pictxt img{
  width: 44px;
  height: 44px;
  display: block;
  margin: auto;
}
.date{
  font-size: 32px;
  color: #333;
  letter-spacing: 1px;
}
.el-pagination button{
  background-color: #fff;
}
.el-pagination__jump{
  color: #fff;
}
.el-pagination__total{
  color: #fff;
}
.gongbao{
  position: absolute;
  width: 390px;
  height: 232px;
  top: 40%;
  z-index: -1;
  left: 6%;
}
.mk2jzbot{
  width: 168px;
  height: 37px;
  background: #036BEC;
  border-radius: 19px;
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  cursor: pointer;
}
.mk2jzright{
  margin-left: 16px;
}
.mk2boxbot{
  width: 500px;
  height: 277px;
  background-color: #fff;
  margin-right: 19px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.mk2jztop{
  display: flex;
}
.mk2jz3{
  width: 210px;
  font-size: 14px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #25314B;
  line-height: 24px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
.mk2jz2{
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #333333;
  margin: 14px 0 21px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.mk2jz1{
  width: 210px;
  font-size: 24px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #036BEC;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.mk2jzleft img{
  width: 204px;
  height: 188px;
}
.cardfen{
  display: flex;
  flex-wrap: wrap;
  width: 1559px;
  padding-top: 31px;
}
.mk2topright img{
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 8px;
}
.mk2topright{
  position: relative;
}
.mk2topright input{
  width: 300px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #CBCBCB;
  box-shadow: 0px 1px 4px 0px rgba(56, 56, 56, 0.44);
  padding: 0 33px 0 19px;
  box-sizing: border-box;
}
.mk2biaoti2{
  font-size: 18px;
  padding-bottom: 5px;
  border-bottom: 2px solid #036BEC;
  color: #FFFFFF;
  margin-right: 52px;
  cursor: pointer;
}
.mk2bl{
  display: flex;
}
.mk2topleft{
  display: flex;
}
.mk2boxtop{
  display: flex;
  align-items: center;
  padding-top: 34px;
  padding: 34px 20px 0 11px;
  justify-content: space-between;
}
.mk2biaoti{
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  margin-right: 52px;
  cursor: pointer;
}
.mk2box{
  width: 1540px;
  height: 722px;
  background: #25314B;
  margin: auto;
  margin-top: 30px;
}
.k1rgbot{
  padding-top: 26px;
  box-sizing: border-box;
}
.k1rgtopcon2{
      width: 263px;
      font-size: 18px;
      font-family: Adobe Heiti Std;
      font-weight: normal;
      color: #2B2B2B;
      line-height: 19px;
      margin: auto;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 20;
      line-clamp: 20;
      -webkit-box-orient: vertical;
}
.k1rgtoptit2{
  font-size: 20px;
      font-family: Adobe Heiti Std;
      font-weight: normal;
      color: #2B2B2B;
      margin-left: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
}
.k1rgtoptit{
  font-size: 36px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #2B2B2B;
  margin-left: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.sancaitit2{
  display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: auto;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 0 0 9px 18px;
}
.sancaitit{
  display: flex;
  margin: auto;
  align-items: center;
  margin: 0 0 37px 37px;
}
.k1rgtopduo{
  font-size: 18px;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: #FFFFFF;
  margin-left: 14px;
}
.dijian{
  display:inline-block;
  width:0;
  height:0;
  border-top: 10px solid transparent;
  border-left: 15px solid #fff;
  border-bottom: 10px solid transparent;
}
.dianriht{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 37px;
  padding-top: 30px;
  box-sizing: border-box;
}
.k1rgtopbot{
  width: 334px;
  height: 92px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #FFFFFF;
  cursor: pointer;
  box-sizing: border-box;
}
.k1rgtopcon{
  width: 263px;
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #2B2B2B;
  line-height: 24px;
  margin: auto;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  line-clamp: 9;
  -webkit-box-orient: vertical;
}
.k1rgtop ul li:nth-child(3) .leftcai{
  width: 4px;
  height: 34px;
  background: #4BADB0;
}
.k1rgtop ul li:nth-child(2) .leftcai{
  width: 4px;
  height: 34px;
  background: #4373B4;
}
.k1rgtop ul li:nth-child(1) .leftcai{
  width: 4px;
  height: 34px;
  background: #BF833F;
}
.k1rgtopnei2{
  width: 336px;
  height: 456px;
  background-color: #fff;
  padding-top: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.k1rgtopnei{
  width: 336px;
  height: 456px;
  background-color: #fff;
  padding-top: 64px;
  box-sizing: border-box;
}
.sancaiimg img{
  width: 336px;
  height: 276px;
}
.k1rgtop ul li{
  width: 336px;
}
.k1rgtop ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.mk1right{
  width: 1088px;
  margin-left: 40px;
  position: relative;
}
.jingwenright{
  width: 200px;
  height: 60px;
  background: #4497FF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
}
.baijian{
  width: 20px;
  height: 20px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg);
  text-align: center;
}
.jingwenleft{
  width: 60px;
  height: 60px;
  background: #036BEC;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jingwen{
  display: flex;
  align-items: center;
  margin-top: 35px;
}
.datrianblack{
  width: 36px;
  height: 4px;
  background: #25314B;
  margin-top: 29px;
}
.datiancont2{
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #333333;
  line-height: 20px;
  text-align: justify;
}
.datiancont{
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #333333;
  line-height: 28px;
  text-align: justify;
}
.datianbox2{
  background-color: #fff;
  width: 360px;
  height: 470px;
  background: #FCFCFC;
  -webkit-box-shadow: 0px 1px 4px 0px rgb(168 168 168 / 44%);
  box-shadow: 0px 1px 4px 0px rgb(168 168 168 / 44%);
  margin: auto;
  padding: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.datianbox{
  background-color: #fff;
  width: 360px;
  height: 470px;
  background: #FCFCFC;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.44);
  margin: auto;
  padding: 35px;
  box-sizing: border-box;
}
.mk1le3{
  background-color: #F8F8F8;
  width: 410px;
  height: 650px;
  padding-top: 30px;
  box-sizing: border-box;
}
.mk1le2_2{
  width: 410px;
  height: 156px;
  background-color: #3790FF;
  font-size: 36px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  padding: 3px 0 0 57px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 36px;
}
.mk1le2{
  width: 410px;
  height: 156px;
  background-color: #3790FF;
  font-size: 36px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
  padding: 30px 0 0 57px;
  box-sizing: border-box;
  line-height: 50px;
}
.mk1le1xialan{
  width: 212px;
  height: 50px;
  border: 3px solid #036BEC;
  border-top: 0;
  margin: auto;
  text-align: center;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #3790FF;
}
.mk1le1zhongzi{
  font-size: 30px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #006BFF;
  text-align: center;
  margin: 20px auto;
  letter-spacing: 10px;
}
.mk1le1shanglan img{
  width: 164px;
  height: 200px;
  margin: auto;
  margin-top: 24px;
  display: block;
}
.mk1le1shanglan{
  width: 212px;
  height: 224px;
  border: 3px solid #036BEC;
  border-bottom: 0;
  margin: auto;
}
.mk1le1{
  width: 410px;
  height: 556px;
  background-color: #fff;
  padding-top: 99px;
  box-sizing: border-box;
}
.mktit2{
  width: 600px;
  height: 300px;
  color: #006BFF;
  font-size: 38px;
  text-align: center;
  line-height: 52px;
  background-color: rgba(255,255,255,.8);
  letter-spacing: 4px;
  padding-top: 34px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: 16%;
  border-radius: 14px;
}
.mktit{
  width: 600px;
  height: 300px;
  color: #006BFF;
  font-size: 50px;
  text-align: center;
  line-height: 85px;
  background-color: rgba(255,255,255,.8);
  letter-spacing: 16px;
  padding-top: 34px;
  box-sizing: border-box;
  margin-left: 16%;
  border-radius: 14px;
}
.mk1box{
  width: 1540px;
  margin: auto;
  margin-top: 308px;
  display: flex;
}
.bjbox{
  width: 100%;
  max-width: 1920px;
  background:url("../../assets/images/duijiehui/duijiebj1.png") no-repeat left top , url("../../assets/images/duijiehui/duijiebj2.png") no-repeat right bottom;
  background-size: 100% auto, 100% auto;
  margin: auto;
  /* height: 2500px; */
  position: relative;
  z-index: 1;
  padding-top: 18%;
  padding-bottom: 119px;
}
</style>
