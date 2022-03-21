<template>
  <div>
    <div class="right_Content">
      <div class="info-box">

        <div class="titles">
          <div class="title-texts">第七届中日韩产业博览会系列发布</div>
          <div class="title-time"></div>
        </div>

        <div class="richeng">
          <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
          <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          <br>
          <p class="title" style="margin-top: 20px;"  v-if="type0">10月25日&nbsp;&nbsp;吉祥物及标识</p>
          <p class="info1"  v-if="type0">16:30-17:00&nbsp;&nbsp;博览会吉祥物及标识发布会 &nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/fabu001.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="title"  v-if="type1">新产品新项目</p>
          <p class="info1"  v-if="type1">华辰制药产品推介发布&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/product_huachen.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"  v-if="type1">潍柴新能源160KW氢燃料电池发动机发布</p>
<!--          <p class="info1"  v-if="type1">碧陆斯光电新产品发布</p>
          <p class="info1"  v-if="type1">三联家电卡萨帝新产品发布</p>
          <p class="info1"  v-if="type1">爱达医疗欧标和美国FDA认证产品发布</p>
          <p class="info1"  v-if="type1">日本奥唯轮胎标签发布</p>-->
          <p class="info1"  v-if="type1">山竹科技-智慧农业大数据应用发布&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/product_shanzhu.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"  v-if="type1">西安电子科技大学青岛计算机研究院签约</p>
          <p class="title"  v-if="type2">新服务新业态</p>

          <p class="info1"  v-if="type2">北京佳安氢源科技股份有限公司燃料氢气过滤装置"氢可立"产品发布</p>
<!--          <p class="info1"  v-if="type2">必维质量技术服务(上海)有限公司检验检测认证发布</p>-->
          <p class="info1"  v-if="type2">福建顺昌智圣氢能有限公司水氢多功能机产品发布</p>
          <p class="info1"  v-if="type2">成都西部氢能产业园推介会&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/xibuqingneng.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"  v-if="type2">中国出口商品品牌评价业务发布会&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/chukoushangpin.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"  v-if="type2">韩国机械产业振兴会业务推介会</p>
          <p class="info1"  v-if="type2">格兰德免费国际信用认证发布 &nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/qianyue1026003.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"  v-if="type2">潍坊市资本服务中心合作签约&nbsp; <img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/qianyue1026001.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" />&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/qianyue1026002.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
          <p class="info1"  v-if="type2">16:20-16:50&nbsp;&nbsp;绿特国创（潍坊）节能科技有限公司&nbsp;<img
            @click="shipinUrl_show=true; shipinUrl = 'http://cjkiexpo.org.cn/videosjava/product_lvte.mp4'"
            style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
<!--          <p class="title"  v-if="type3">企业预约洽谈发布</p>
          <div  v-for="(item, index) in yuyueData" :key="index" style="padding-top: 10px;padding-left: 30px" >
            <div class="yuyueData-item-gs_name" style="font-weight: bold;font-size: 16px">{{ item.gs_name }}</div>
            <div class="itme-yuyuelist" v-for="(itm, idx) in item.yuyuelist">
              <div class="itm-info">
                <span class="itm-time">{{ itm.time }}</span>
                <span class="itm-y_yuyue">已预约:{{ itm.y_yuyue }}人</span>
                <span class="itm-s_yuyue">剩余:{{ itm.s_yuyue }}人</span>
                <span class="itm-static0" v-if="itm.static == 0" style="cursor: pointer;color: #1d81ff;padding-left: 20px" @click="yuyue(itm)">立即预约</span>
                <span class="itm-static1" v-if="itm.static == 1">已预约</span>
                <span class="itm-static2" v-if="itm.static == 2">已约满</span>
              </div>
            </div>
          </div>-->
          <br>
        </div>

      </div>
    </div>
    <!-- 弹窗视频 -->
    <div v-if="shipinUrl_show" class="home_img_bofang-mark">
      <img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="shipinUrl_show = false"
           src="../../assets/images/exhibition/close.png" />
      <video width="800px" height="450px" style="margin-left: 7px;" controls="controls" :src="shipinUrl"></video>
    </div>
    <Mylogin :visible.sync="visible" />
  </div>
</template>

<script>
import Mylogin from '../exhibition/compontent/mylogin';

export default {
  name: "quality",
  components: { Mylogin },
  data() {
    return {
      type: this.$route.query.type,
      type0:false,
      type1:false,
      type2:false,
      visible: false,

      shipinUrl: '',
      shipinUrl_show: false,
      list: [

      ],
      // 预约洽谈
      yuyueData: [],
      yyjlData: [
        {
          gs1: '河南****有限公司',
          gs2: '潍柴动力有限公司',
          time: '10.26 14:00～17:00'
        }
      ],
    }
  },
  created() {
    if (this.type==0){
      this.type0 = true;
    }else if(this.type==1){
      this.type1 = true;
    }else if(this.type==2){
      this.type2 = true;
    }else {
      this.type0 = true;
    }

    this.getYuYueData();

  },
  methods:{
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
        }).then(() => {
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
              this.getYuYueData();
              this.$notify({
                title: '预约成功',
                message: data.msg,
                type: 'success',
                duration: 0,
                position: 'top-right'
              });
            }
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      });
    },

    getYuYueData() {
      this.yuyueData = [];
      this.$http({
        url: this.$http.adornUrl('/appointment/list'),
        method: 'get'
      }).then(({ data }) => {
        if (data && data.code === 1) {
          for (let i = 0; i < data.data.list.length; i++) {
            let exhibitor = {
              gs_name: data.data.list[i].timeType,
              yuyuelist: [],
              id: data.data.list[i].exhibitor3dId
            };
            this.yuyueData.push(exhibitor);
          }
          this.$http({
            url: this.$http.adornUrl('/appointmentTime/list'),
            method: 'get'
          }).then(({ data }) => {
            if (data && data.code === 1) {
              for (let i = 0; i < data.data.list.length; i++) {
                console.log(data.data.list[i]);
                let flag = 0;
                if (data.data.list[i].reserved == data.data.list[i].maximum) {
                  flag = 2;
                }
                console.log(data.data.list[i]);
                let time = {
                  time: data.data.list[i].starttime,
                  y_yuyue: data.data.list[i].reserved,
                  companyId: data.data.list[i].companyId,
                  appId: data.data.list[i].appId,
                  s_yuyue: data.data.list[i].maximum,
                  static: flag
                };
                for (let item of this.yuyueData) {
                  //for of 推荐用在遍历数组
                  if (item.id == data.data.list[i].companyId) {
                    item.yuyuelist.push(time);
                  }
                }
                /*console.log(this.yuyueData);
                let index = this.yuyueData.findIndex((value)=>value.id==data.data.list[i].companyId);
                console.log(this.yuyueData);

                this.yuyueData.splice(index,0,time);*/
              }

              //this.stadiumList = data.data || [];
              console.log(this.yuyueData);
            }
          });
        }
      });
    },
    //跳转页面
    toPage(url) {
      this.$router.push({
        path: url
      });
    },
  }
};
</script>

<style scoped>
.itme-yuyuelist{
  padding: 10px 0 10px 0;
}
.itm-y_yuyue{
  padding: 10px 5px 10px 5px;
}
.content-img-1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.content-img-2 {
  position: absolute;
  right: -64px;
  z-index: 1;
  top: 450px;
}

.titles {
  height: 100px;
  border-bottom: 2px solid #7daefe;
  width: 820px;
  display: flex;
  align-items: center;
  position: relative;
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
.title-time{
  position: absolute;
  right: 0;
  bottom: 7px;
  font-size: 16px;
  text-align: right;
  line-height: 24px;
}
.mffenc div{
  padding: 10px 5px 0px 5px;
  margin-right: 10px;
  cursor: pointer;
  color: #636363;
  line-height: 2;
}


.richeng{
  padding-top: 0;
  color: #636363;
  position: relative;
  width: 820px;
}
.title{
  font-size: 18px;
  padding-left: 30px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  font-weight: bold;
  color: #636363;
  line-height: 26px;
  margin-bottom: 17px;
}
.info1{
  padding-left: 50px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #636363;
  line-height: 24px;
  margin-bottom: 17px;
}

.info-box{
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  padding-left: 55px;
}

.info-text >span{
  padding: 10px 0 10px 0;
  margin:0 25px ;
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
</style>
