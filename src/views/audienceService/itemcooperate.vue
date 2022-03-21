<template>
  <div style="position: relative;">
    <div>
      <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span class="mfone">成果展示</span>
            <br />
            <br />
            <span class="mftwo">Achievement display</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <li
              v-for="(item, index) in itemList"
              :key="index"
               v-show="index===0?($store.state.user.info.type?$store.state.user.info.type==1:true):true"
              :class="show == (index+1)?'mfsanyaun':''"
              @click="dianji(index)"
            >
            <div class="nametxt">{{ item.projectName }}</div>
            </li>
          </ul>
        </div>
        <div class="right_Content">
          <div class="title">
            <span class="title-text">第七届中日韩产业博览会重点签约项目</span>
          </div>
          <div class="font_content" style="position: relative;">
            <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
            <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
          </div>
          <div class="neibox"  v-for="(item, index) in itemList" :key="index" v-if="show == index+1">
            <div class="nbtitle">项目名称</div>
            <div class="nbcont">{{item.projectName}}</div>
            <div class="mfhui"></div>
            <div class="nbtitle">项目类型</div>
            <div class="nbcont">{{item.type}}</div>
            <div class="mfhui"></div>
            <div class="nbtitle">合作方</div> 
            <div class="nbcont">市外方：{{item.partnerOut}}</div>
            <div class="nbcont">市内方：{{item.partnerInner}}</div>
            <div class="mfhui"></div>
            <div class="nbtitle">合作方式</div>
            <div class="nbcont">{{item.partnerWay}}</div>
            <div class="nbcont">项目总投资：{{item.investment}}亿元</div>
            <div class="mfhui"></div>
            <div class="nbtitle">提报单位</div>
            <div class="nbcont">{{item.reportUnit}}</div>
            <div class="mfhui"></div>
            <div class="nbtitle">项目内容</div>
            <div class="nbcont">{{item.projectDetail}}</div>
          </div>
        </div>
      </div>
    </div>
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
  </div>
</template>
<script>
import headerNav from '@/components/headerNav3'
export default {
  name: "AudienceService",
  components: { headerNav},
  data() {
    return {
      itemList:[{
        name:'山东海域低流速潮流能水轮机能量捕获与表面防护研发与推广应用',
      },
      {
        name:'潍坊光通讯新材料研究院及低光损波导光刻胶项目',
      },
      {
        name:'舒珍堂全国营销总部暨药业生产基地'
      },{
        name:'九州眼（裸眼3D）制造中心项目'
      }],
      show:1,
    };
  },
  computed:{},
  watch: {

  },
  mounted() {
    this.getDataList()
  },
  methods: {
    //点击切换
    dianji(index){
      this.show = index+1
    },
    //查询合作签约项目
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(
          `/achievement/list`
        ),
        method: "get",
      }).then(({ data }) => {
        console.log(data.data.list)
        this.itemList = data.data.list
      });
    },
  },
};
</script>
<style scoped>
  .neibox{
    position: relative;
    z-index: 10;
  }
  .mfhui{
    width: 821px;
    height: 2px;
    border-bottom: 2px solid #F0F0F0;
    padding-top: 4px;
  }
  .nbcont{
    width: 800px;
    margin-bottom: 8px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636363;
    margin-left: 12px;
    line-height: 22px;
  }
  .nbtitle{
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #333333;
    border-left: 4px solid #7DAEFE;
    padding-left: 8px;
    box-sizing: border-box;
    margin: 12px 0 13px 0;
  }
  .nametxt{
    width: 224px;
    white-space:nowrap;
     overflow:hidden;
     text-overflow:ellipsis;
     text-align: center;
     margin: auto;
  }
.mfsanyaun{
    border-left: 4px solid #5D9AFE;
    background: rgba(93, 154, 254, 0.5) !important;
    box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5) !important;
    font-size: 16px !important;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500 !important;
    color: #FFFFFF !important;
    line-height: 22px !important;
}
.mfone{
  font-size: 24px!important;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #333333;
  line-height: 40px;
}
.mftwo{
  border-radius: 22px;
  border: 1px solid #7DAEFE;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  padding: 6px 15px;
}
.bannerBox{ overflow: hidden;}
.rotation_img {
  width: 100%;
  min-width: 1290px;
  display: block;
}
.exhibitionOverviewName {
  height: 65px;
  line-height: 65px;
  font-size: 20px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: #2f0954;
}
hr {
  margin: 0;
}
.left_Content {
  float: left;
  margin-top: 90px;
  box-shadow: 0px 0px 10px 0px rgb(230 207 207 / 50%);
  border-radius: 6px;
  height: 821px;
  margin-right: 18px;
  margin-left: 10px;
  width: 290px;
}
.exhibition_content {
  /* width: 240px; */
  height: 100px;
  text-align: center;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 0;
  box-sizing: border-box;
  margin-bottom: 33px;
  background: linear-gradient(180deg, rgba(231, 243, 255, 1.0), rgba(225, 225, 255, 0));
  border-radius: 6px;
}
.exhibition_content span:nth-child(1) {
  font-size: 30px;
}
.exhibition_content span:nth-child(2) {
  font-size: 14px;
}
.exhibitionOverviewUl{
  height: 600px;
  overflow-x: hidden;
  overflow-y:scroll;
}
::-webkit-scrollbar{
  width: 0;
}
.exhibitionOverviewUl li{
  width: 285px;
  height: 47px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5);
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #484848;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
}
.ditu{
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
}

.mfsek{
  width: 75px;
  height: 6px;
  background: rgba(93, 154, 254, 0.8);
  position: absolute;
  bottom: 0px;
}
.right_Content{
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  height: 821px;
  padding-left: 55px;
}
.title {
  height: 77px;
  border-bottom: 2px solid #7daefe;
  width: 820px;
  display: flex;
  align-items: center;
}
.title-text {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: bold;
  color: #7DAEFE;
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
.contentImg {
  width: 85px;
  height: 106px;
  flex: 0.2;
}
.timeFont {
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #888;
  margin: 20px 0 26px;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  line-height: 50px;
  width: 820px;
}
.mediaCoverageUl {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 100;
}
.mediaCoverageUl li {
  width: 33.33%;
  height: auto;
  padding: 0 18px;
  box-sizing: border-box;
  margin-top: 50px;
  cursor: pointer;
}
.dociv {
  text-align: center;
  border-radius: 10px;
  padding: 49px 0 30px 0;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -3px 10px #efe8e8, -3px 0px 10px #efe8e8, 3px 0px 10px #efe8e8,
    0px 3px 10px #efe8e8;
}
.dociv:hover{
  transform: scale(1.05);
}
.countFont {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #666666;
  line-height: 26px;
  height: 52px;
  margin: 57px auto 0;
  width: 90%;
  color: #888888;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.downLoad {
  width: 100px;
  height: 40px;
  background: #2884ec;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  margin: 0 auto;
}
</style>
