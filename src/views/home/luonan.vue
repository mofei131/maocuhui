<template>
  <div>
    <div class="bjbox">
      <div class="waibox">
      <div class="mktit">
        <div class="date">{{ $t('luonan.t2') }}</div>
      </div>
      <div :class="isEn?'hezgx2':'hezgx'">{{ $t('luonan.t1') }}</div>
      </div>
      <div class="mk1box">
        <div class="mk1left">
          <div class="mk1le1">
            <div class="mk1le1shanglan">
              <img src="../../assets/images/duijiehui/luonanpic4.png" />
            </div>
            <div :class="isEn?'mk1le1zhongzi2':'mk1le1zhongzi'">
              {{ $t('luonan.t1') }}
            </div>
            <div class="mk1le1xialan">
              /{{ $t('luonan.t3') }}/
            </div>
          </div>
          <div :class="isEn?'mk1le2_2':'mk1le2'">
            <div>{{ $t('luonan.t4') }}</div>
            <div>{{ $t('luonan.t3') }}</div>
          </div>
          <div class="mk1le3">
            <div class="datianbox">
              <div class="datiancont">
                <div>{{ $t('luonan.t5') }}</div>
                <div :class="isEn?'jsfex2':'jsfex'"><p>○{{ $t('luonan.t6') }}</p><p>{{ $t('luonan.t10') }}</p></div>
                <div :class="isEn?'jsfex2':'jsfex'"><p>○{{ $t('luonan.t7') }}</p><p>{{ $t('luonan.t11') }}</p></div>
                <div :class="isEn?'jsfex2':'jsfex'"><p>○{{ $t('luonan.t8') }}</p><p>{{ $t('luonan.t12') }}</p></div>
                <div :class="isEn?'jsfex2':'jsfex'"><p>○{{ $t('luonan.t9') }}</p><p>{{ $t('luonan.t13') }}</p></div>
              </div>
              <div class="datrianblack"></div>
            </div>
            <div class="jingwen">
              <div class="jingwenleft">
                <div class="baijian"></div>
              </div>
              <div class="jingwenright">
                {{ $t('luonan.t14') }}
              </div>
            </div>
          </div>
        </div>
        <div class="mk1right">
          <div class="k1rgtop">
            <ul>
              <li>
                <div class="sancaiimg">
                  <img src="../../assets/images/duijiehui/luonanpic1.png" />
                </div>
                <div class="k1rgtopnei">
                  <div class="sancaitit">
                    <div class="leftcai"></div>
                    <div :class="isEn?'k1rgtoptit2':'k1rgtoptit'">{{ $t('luonan.t15') }}</div>
                  </div>
                  <div :class="isEn?'k1rgtopcon2':'k1rgtopcon'">
                    <p>{{ $t('luonan.t18') }}</p>
                    <p>{{ $t('luonan.t19') }}</p>
                    <p>{{ $t('luonan.t20') }}</p>
                    <p>{{ $t('luonan.t21') }}</p>
                    <p>{{ $t('luonan.t22') }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="sancaiimg">
                  <img src="../../assets/images/duijiehui/luonanpic2.png" />
                </div>
                <div class="k1rgtopnei">
                  <div class="sancaitit">
                    <div class="leftcai"></div>
                    <div :class="isEn?'k1rgtoptit2':'k1rgtoptit'">{{ $t('luonan.t16') }}</div>
                  </div>
                  <div :class="isEn?'k1rgtopcon2':'k1rgtopcon'">
                    <p>{{ $t('luonan.t23') }}</p>
                    <p>{{ $t('luonan.t24') }}</p>
                    <p>{{ $t('luonan.t25') }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="sancaiimg">
                  <img src="../../assets/images/duijiehui/luonanpic3.png" />
                </div>
                <div class="k1rgtopnei">
                  <div class="sancaitit">
                    <div class="leftcai"></div>
                    <div :class="isEn?'k1rgtoptit2':'k1rgtoptit'">{{ $t('luonan.t17') }}</div>
                  </div>
                  <div :class="isEn?'k1rgtopcon2':'k1rgtopcon'">
                    <p>{{ $t('luonan.t26') }}</p>
                    <p>{{ $t('luonan.t27') }}</p>
                    <p>{{ $t('luonan.t28') }}</p>
                    <p>{{ $t('luonan.t29') }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="yejibox">
            <div class="yejileft">
              <div class="yejileft2">
              <div class="yejimk1">{{ $t('luonan.t3') }}</div>
              <div class="yejimk2"></div>
              <div :class="isEn?'yejimk3_3':'yejimk3'">{{ $t('luonan.t30') }}</div>
              <div :class="isEn?'yejimk3_3':'yejimk3'">{{ $t('luonan.t31') }}</div>
              <div :class="isEn?'yejimk4_4':'yejimk4'">{{ $t('luonan.t32') }}</div>
              <div class="yejimk5">
                <div class="baijian2"></div>
              </div>
              </div>
            </div>
            <div class="yejiright">
              <img src="../../assets/images/duijiehui/p4ic.png" >
            </div>
          </div>
          <img class="gongbao" src="../../assets/images/duijiehui/gongbao.png" >
        </div>
      </div>
      <div class="luonsancai">
        <div :class="isEn?'luoscleft2':'luoscleft'">
          <div :class="isEn?'luoscmk1_1':'luoscmk1'">{{ $t('luonan.t30') }}</div>
          <div :class="isEn?'luoscmk1_1':'luoscmk1'">{{ $t('luonan.t31') }}</div>
          <div class="luoscmk2">{{ $t('luonan.t33') }}</div>
          <div class="luoscmk3">{{ $t('luonan.t36') }}</div>
        </div>
        <div class="luoscright">
          <img src="../../assets/images/duijiehui/b4g.png" >
        </div>
      </div>
      <div class="luonsancai">
        <div :class="isEn?'luoscleft2':'luoscleft'">
          <div :class="isEn?'luoscmk1_1':'luoscmk1'">{{ $t('luonan.t30') }}</div>
          <div :class="isEn?'luoscmk1_1':'luoscmk1'">{{ $t('luonan.t31') }}</div>
          <div class="luoscmk2">{{ $t('luonan.t34') }}</div>
          <div class="luoscmk3">{{ $t('luonan.t37') }}</div>
        </div>
        <div class="luoscright">
          <img src="../../assets/images/duijiehui/b444g.png" >
        </div>
      </div>
      <div class="luonsancai">
        <div :class="isEn?'luoscleft2':'luoscleft'">
          <div :class="isEn?'luoscmk1_1':'luoscmk1'">{{ $t('luonan.t30') }}</div>
          <div :class="isEn?'luoscmk1_1':'luoscmk1'">{{ $t('luonan.t31') }}</div>
          <div class="luoscmk2">{{ $t('luonan.t35') }}</div>
          <div class="luoscmk3">{{ $t('luonan.t38') }}</div>
        </div>
        <div class="luoscright">
          <img src="../../assets/images/duijiehui/44bg.png" >
        </div>
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

export default{
  name: "duijiehui",
  components: {
    Mylogin,
  },
  data(){
    return{
      pageIndex: 1,
      pageSize: 6,
      totalPage: 0,
      visible: false,
      searchValue:'',
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
  .luoscleft2{
        width: 550px;
  }
  .luoscmk1_1{
    font-size: 29px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #000000;
    line-height: 46px;
  }
  .yejimk4_4::-webkit-scrollbar {
      display: none;
  }
  .yejimk4_4{
    font-size: 18px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
    margin-top: 28px;
    width: 278px;
    line-height: 30px;
    height: 226px;
    overflow: scroll;
  }
  .yejimk3_3{
    font-size: 30px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 42px;
  }
  .k1rgtopcon2::-webkit-scrollbar {
      display: none;
  }
  .k1rgtopcon2{
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
    -webkit-line-clamp: 50;
    line-clamp: 9;
    -webkit-box-orient: vertical;
    height: 275px;
    overflow: scroll;
  }
  .k1rgtoptit2{
    font-size: 28px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #2B2B2B;
    margin-left: 10px;
  }
  .mk1le2_2{
    width: 410px;
    height: 156px;
    background-color: #BA8743;
    font-size: 28px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
    padding: 30px 0 0 57px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 50px;
  }
  .mk1le1zhongzi2{
    font-size: 30px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #BB8844;
    text-align: center;
    margin: 20px auto;
    letter-spacing: 2px;
  }
  .hezgx2{
    width: 455px;
    height: 85px;
    background: #FCFCFC;
    -webkit-box-shadow: 0px -5px 0px 0px #4373b4;
    box-shadow: 0px -5px 0px 0px #4373b4;
    font-size: 21px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #4373B4;
    position: relative;
    margin: -40px auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .mk1left{
    background-image: url(../../assets/images/duijiehui/huibai.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .luoscmk1{
    font-size: 54px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #000000;
    line-height: 69px;
  }
  .luoscmk2{
    font-size: 24px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #000000;
    margin-top: 32px;
    margin-bottom: 37px;
  }
  .luoscmk3{
    width: 494px;
    font-size: 18px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #000000;
    line-height: 24px;
  }
  .luoscright img{
    width: 874px;
    height: 440px;
    box-shadow: 0px 0px 10px 3px #333;
  }
  .luonsancai{
    width: 1540px;
    height: 690px;
    margin: auto;
    background-image: url(../../assets/images/duijiehui/lunbbg.png);
    margin-top: 37px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .yejimk5{
    width: 38px;
    height: 38px;
    background-color: rgba(131,144,170,.22);
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
  }
  .yejimk4{
    font-size: 18px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
    margin-top: 39px;
    width: 278px;
    line-height: 30px;
  }
  .yejimk3{
    font-size: 40px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 54px;
  }
  .yejimk2{
    width: 34px;
    height: 4px;
    background: #FFFFFF;
    margin-bottom: 30px;
  }
  .yejimk1{
    font-size: 18px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
    margin-bottom: 25px;
  }
  .yejileft{
    width: 440px;
    height: 590px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-right: 0px;
  }
  .yejiright img{
    width: 650px;
    height: 590px;
  }
  .yejibox{
    display: flex;
    align-items: center;
    width: 1090px;
    margin-top: 37px;
  }
  .jsfex2 p{
    flex-wrap: nowrap;
  }
  .jsfex2{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 12px;
  }
  .jsfex{
    display: flex;
    align-items: flex-start;
  }
  .jsfex p:nth-child(1){
    width: 93px;
    text-align-last: justify;
  }
  .hezgx{
    width: 455px;
    height: 85px;
    background: #FCFCFC;
    box-shadow: 0px -5px 0px 0px #4373B4;
    font-size: 30px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #4373B4;
    position: relative;
    margin: -40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 60px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #FFFFFF;
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
  border-bottom: 2px solid #C88D47;
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
.k1rgtopcon p{
  margin-bottom: 20px;
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
.k1rgtop ul li:nth-child(1){
  background-image: url(../../assets/images/duijiehui/luonanbj1.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.k1rgtop ul li:nth-child(2){
  background-image: url(../../assets/images/duijiehui/luonanbj2.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.k1rgtop ul li:nth-child(3){
  background-image: url(../../assets/images/duijiehui/luonanbj1.png);
  background-repeat: no-repeat;
  background-size: 100%;
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
.k1rgtopnei{
  width: 336px;
  height: 456px;
  /* background-color: #fff; */
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
  background: #D2A15C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #FFFFFF;
}
.baijian2{
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  text-align: center;
}
.baijian{
  width: 20px;
  height: 20px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg);
  text-align: center;
}
.yejileft2{
    width: 440px;
    height: 590px;
    background-image: url(../../assets/images/duijiehui/chadipoc.png);
    padding-top: 56px;
    padding-left: 55px;
    box-sizing: border-box;
    border-right: 0px;
  }
.jingwenleft{
  width: 60px;
  height: 60px;
  background: #C88D47;
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
  margin-top: 229px;
}
.datiancont p span{
  width: 100px;
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
  /* background-color: #F8F8F8; */
  width: 410px;
  height: 650px;
  padding-top: 30px;
  box-sizing: border-box;
}
.mk1le2{
  width: 410px;
  height: 156px;
  background-color: #BA8743;
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
  border: 3px solid #BA8743;
  border-top: 0;
  margin: auto;
  text-align: center;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #BB8844;
}
.mk1le1zhongzi{
  font-size: 30px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #BB8844;
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
  border: 3px solid #BA8743;
  border-bottom: 0;
  margin: auto;
}
.mk1le1{
  width: 410px;
  height: 556px;
  /* background-color: #fff; */
  padding-top: 99px;
  box-sizing: border-box;
}
.waibox{
  width: 844px;
  height: 500px;
  margin-left: 190px;
}
.mktit{
  width: 844px;
  height: 500px;
  background: rgba(67, 115, 180, 0.22);
  box-shadow: 0px 0px 10px 3px #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mk1box{
  width: 1540px;
  margin: auto;
  margin-top: 260px;
  display: flex;
}
.bjbox{
  width: 100%;
  max-width: 1920px;
  background:url("../../assets/images/duijiehui/lnbj.png") no-repeat left top , url("../../assets/images/duijiehui/duijiebj2.png") no-repeat right bottom #25314B;
  background-size: 100% auto, 100% auto;
  margin: auto;
  /* height: 2500px; */
  position: relative;
  z-index: 1;
  padding-top: 190px;
  padding-bottom: 119px;
}
</style>
