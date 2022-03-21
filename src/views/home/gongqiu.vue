<template>
  <div class="body">
    <div class="banner">
      <img src="../../assets/images/home/wh_wf.jpg" />
    </div>
    <div class="mk">
      <div class="title">优质需求</div>
      <div class="bon">
        <div class="bonleft">
          <p>真实客户需求</p>
          <p>海量优质</p>
        </div>
        <div class="bonright">
          <ul class="bonrtop">
            <li class="card" v-for="(item,index) in yzlist" :key="index" v-if="item.type == 1" @click="goTo(item.id,1)">
                <div class="youzhi">
                  <img src="../../assets/images/duijiehui/fire.png" >
                  <p>优质</p>
                </div>
                <div class="cardname" :title="item.titile">{{item.titile}}</div>
                <div class="fenlei">分  类：<span>{{item.category}}</span></div>
              </li>
          </ul>
          <div class="zuixin">最新需求</div>
          <div class="bonrbot">
            <ul class="bonrciyi">
              <li v-for="(item,index) in dataList" v-if="item.type == 1 && index%2 == 0" @click="goTo(item.id,2)">
                <p :title="item.titile">{{item.titile}}</p>
                <p>{{item.category}}</p>
              </li>
            </ul>
            <div class="shuhui"></div>
            <ul class="bonrciyi">
              <li v-for="(item,index) in dataList" v-if="item.type == 1 && index%2 == 1" @click="goTo(item.id,2)">
                <p :title="item.titile">{{item.titile}}</p>
                <p>{{item.category}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mk mk2">
      <div class="title">服务商资源</div>
      <div class="bon">
        <div class="bonleft bonleft2">
          <p>实力资源商</p>
          <p>海量优质</p>
        </div>
        <div class="bonright">
          <ul class="bonrtop">
            <li class="card" v-for="(item,index) in yzlist" :key="index" v-if="item.type == 2" @click="goTo(item.id,1)">
                <div class="youzhi">
                  <img src="../../assets/images/duijiehui/fire.png" >
                  <p>优质</p>
                </div>
                <div class="cardname" :title="item.titile">{{item.titile}}</div>
                <div class="fenlei">分  类：<span>{{item.category}}</span></div>
              </li>
          </ul>
          <div class="zuixin">最新需求</div>
          <div class="bonrbot">
            <ul class="bonrciyi">
              <li v-for="(item,index) in dataList" v-if="index%2 == 0 && item.type == 2" @click="goTo(item.id,2)">
                <p :title="item.titile">{{item.titile}}</p>
                <p>{{item.category}}</p>
              </li>
            </ul>
            <div class="shuhui"></div>
            <ul class="bonrciyi">
              <li v-for="(item,index) in dataList" v-if="index%2 == 1 && item.type == 2" @click="goTo(item.id,2)">
                <p :title="item.titile">{{item.titile}}</p>
                <p>{{item.category}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yzlist:[],
      dataList:[]
    };
  },

  mounted() {
    console.log(6%2)
    this.youzhi()
    this.zuixin()
  },
  methods: {
    goTo(id,value){
      console.log(id)
      this.$router.push({
        path:'gongqiuDet',
        query:{
          id:id,
          value:value
          },
        });
    },
    //优质企业
    youzhi(){
      let that = this
      this.$http({
        url: this.$http.adornUrl(`/demand/list`),
        method: 'get',
        params: this.$http.adornParams({
          isHighQuality:1,
          pageSize:50
        })
      }).then(({ data }) => {
        // console.log(data.data.list)
        that.yzlist = data.data.list
      });
    },
    //最新
    zuixin(){
      let that = this
      this.$http({
        url: this.$http.adornUrl(`/demand/list`),
        method: 'get',
        params: this.$http.adornParams({
          isHighQuality:0,
          pageSize:50
        })
      }).then(({ data }) => {
        console.log(data.data.list)
        that.dataList = data.data.list
      });
    }
  }
};
</script>

<style scoped>
  .mk2{
    padding-bottom: 116px;
  }
  .bonrciyi li p:nth-child(2){
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #164CF6;
  }
  .bonrciyi li p:nth-child(1){
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #161616;
    width: 420px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .bonrciyi li{
    height: 47px;
    width: 525px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E7E7E7;
    cursor: pointer;
  }
  .bonrciyi{
    width: 525px;
    height: 180px;
    overflow:Scroll;
    overflow-x:hidden
  }
  .bonrciyi::-webkit-scrollbar {
      display: none;
  }
  .shuhui{
    width: 1px;
    height: 173px;
    background-color: #979797;
  }
  .bonrbot{
    width: 1090px;
    height: 201px;
    background: #FFFFFF;
    padding: 13px 7px 7px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .zuixin{
    width: 1091px;
    height: 44px;
    background: #FFFFFF;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #161616;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .mk{
    background: #F1F1F1;
  }
  .fenlei span{
    color: #333333;
  }
  .fenlei{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #9A9A9A;
    margin-left: 8px;
  }
  .cardname{
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin: 48px 0 18px 15px;
    width: 220px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .youzhi p{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
  .youzhi img{
    width: 14px;
    height: 19px;
  }
  .youzhi{
    position: absolute;
    top: 0;
    left: 0;
    width: 73px;
    height: 30px;
    background: linear-gradient(90deg, #0231F9 0%, #246EEF 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .card{
    width: 256px;
    height: 133px;
    background: #FFFFFF;
    margin-bottom: 15px;
    position: relative;
    cursor: pointer;
    margin-right: 22px;
  }
  .bonrtop{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1113px;
  }
  .bonright{
    width: 1091px;
  }
  .bonleft p:nth-child(2){
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
  }
  .bonleft p:nth-child(1){
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  .bonleft{
    width: 255px;
    height: 548px;
    background-image: url(../../assets/images/duijiehui/xqtopbj.png);
    background-repeat: no-repeat;
    background-size: 100%;
    padding-left: 19px;
    padding-top: 88px;
    box-sizing: border-box;
  }
  .bonleft2{
    width: 255px;
    height: 548px;
    background-image: url(../../assets/images/duijiehui/xqbotbj.png);
    background-repeat: no-repeat;
    background-size: 100%;
    padding-left: 19px;
    padding-top: 88px;
    box-sizing: border-box;
  }
  .bon{
    display: flex;
    justify-content: space-between;
  }
  .title{
    font-size: 42px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    text-align: center;
    padding-top: 60px;
    margin-bottom: 60px;
  }
  .bon{
    width: 1365px;
    margin: auto;
  }
  .banner img{
    width: 100%;
    max-width: 1920px;
    height: 610px;
    margin-top: 7px;
    margin: auto;
  }
</style>
