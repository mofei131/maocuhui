<template>
  <div class="bannerBox">
    <el-carousel :height="bannerHeight + 'px'" arrow="never">
      <el-carousel-item v-for="(item,index) in bannerData" :key="index">
       <img class="bannerImg" :src="item.imgUrl" alt />
<!--        <img class="bannerImg" src="http://218.59.142.236:9002/" alt />-->
      </el-carousel-item>
    </el-carousel>
<!--    <div class="menuBox" :style="{top: topStatus?`calc(85 vh - 180px)`:(bannerHeight*0.76+'px')}">
      <div class="menuItem" @click="toPage('/exhibitors')">
        <img style="width:26px;height:22px" src="../assets/images/menu/zs_icon.png" alt />
        <div class="menuText">{{ $t('banner.t1') }}</div>
      </div>
      <div class="menuItem" @click="toPage('/audience')">
        <img style="width:30px;height:26px" src="../assets/images/menu/gz_icon.png" alt />
        <div class="menuText">{{ $t('banner.t2') }}</div>
      </div>
      <div class="menuItem" @click="goThreejsLink()">
        <img style="width:28px;height:28px" src="../assets/images/menu/zt_icon.png" alt />
        <div class="menuText">{{ $t('banner.t3') }}</div>
      </div>
      <div class="menuItem" @click="goVRLink()">
        <img style="width:28px;height:28px" src="../assets/images/menu/vr_icon.png" alt />
        <div class="menuText">{{ $t('banner.t4') }}</div>
      </div>
      <div class="menuItem" @click="toPage('/conferenceLive')">
        <img style="width:28px;height:24px" src="../assets/images/menu/zb_icon.png" alt />
        <div class="menuText">{{ $t('banner.t5') }}</div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerData: [],
      clientWidth: document.body.offsetWidth ,
      clientHeight: document.documentElement.clientHeight,
      timer: false
    };
  },
  computed: {
    bannerHeight(){
      // return this.clientWidth<1290?725:(this.clientWidth*0.565)
      return this.clientWidth<1290?625:(this.clientWidth*0.435)
    },
    topStatus() {
      return this.clientHeight - 85 < this.bannerHeight
    }
  },
  watch:{
    screenWidth(val){
    // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if(!this.timer){
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function(){
          // 打印screenWidth变化的值
          // console.log(that.screenWidth)
          that.timer = false
        },400)
      }
    }
  },
  mounted() {
    this.getDataList();

    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.offsetWidth
        that.clientWidth = window.screenWidth
        window.screenHeight = document.documentElement.clientHeight
        that.clientHeight = window.screenHeight
      })()
    }
  },
　　//注销window.onresize事件
  destroyed(){
    window.onresize = null;
  },
  methods: {
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(`/banner/list`),
        method: "get",
      }).then(({ data }) => {
        this.bannerData = data.data;
      });
    },
    toPage(url) {
      this.$router.push({
        path: url,
      });
    },
    goThreejsLink() {
      window.open("http://3d.weifang.mepxns.info:9999/threejs/whole.html")
    },
    goVRLink() {
      window.open("https://www.3dqiye.com/anli/vre/wlw/index.html")
    }
  }
};
</script>
<style lang="scss" scoped>
.bannerImg {
  padding-top: 10px;
  padding-bottom: 20px;
  width: 100%;
  //height: 600px;
 // height: 100%;
}
/deep/.el-carousel .el-carousel__indicators {
  display: none !important;
}
.bannerBox {
  position: relative;
  min-width: 1290px;
  text-align: center;
  height: 840px;
  .menuBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(85vh - 180px);
    width: 500px;
    height: 90px;
    // background: rgba(255, 255, 255, 0.6);
    background: rgba(24, 25, 80, 0.8);
    // background: #181950;
    border-radius: 10px;
    z-index: 100;
    display: flex;
    justify-content: center;
    .menuItem {
      width: 60px;
      height: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      cursor: pointer;
      .menuText {
        color: #fff;
        font-size: 12px;
        margin-top: 20px;
      }
    }
    .menuItem:hover {
      background: linear-gradient(0deg, #00eeff00, #00eeffa8, #00f0ff);
    }
  }
}
</style>
