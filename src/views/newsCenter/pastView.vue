<template>
  <div>
    <div class="right_Content">
     <!-- <div class="headName">{{title}}</div>
      <hr /> -->
      <!-- <div class="mftit">{{ title }}</div>
      <div class="mflanf"></div>
      <div class="mfhuangti"></div> -->
      <div class="titles"><span class="title-texts">{{ title }}</span></div>
      <div style="text-align: center;padding-top: 10px" v-if="videoUrl">
        <video
          width="800px"
          height="600px"
          :src=videoUrl
          controls="controls"
        >您的浏览器不支持 video 标签。</video>
      </div>
      <div class="intros">
        <span v-html="intros" v-if="!isEn"></span>
        <span v-html="introsEn" v-if="isEn"></span>
      </div>
      <div class="font_content">
        <ul class="mediaCoverageUl">
          <li v-for="(item,index) in dataList" :key="index">
            <div class="dociv">
              <img class="contentImg" :src="item.imgUrl" alt />
              <!-- <div class="timeFont">上传时间：{{item.createdTime}}</div> -->
            </div>
          </li>

        </ul>
      </div>
      <div style="padding:50px 0;text-align:center;">
        <el-pagination
          background
          @size-change="sizeChangeHandle"
          @current-change="currentChangeHandle"
          :current-page="pageIndex"
          :page-size="pageSize"
          :total="totalPage"
          layout="total, prev, pager, next, jumper, slot"
        >
        <el-button style="margin-left:20px;border:1px solid #C0C4CC;color: #606266;" size="mini" @click="getDataList">{{ $t('listOfExhibitors.t4') }}</el-button>
      </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pastView',
  data() {
    return {
      title:'往届博览会回顾',
      type: 11,
      pageSize: 12,
      intros:'',
      introsEn:'',
      isEn:false,
      dataList: [],
      videoUrl:'',
      pageIndex: 1,
      totalPage:0,
    };
  },
  watch: {
    $route(to, from) {
      this.titleHandle(to.path)
    }
  },
  mounted() {
    this.type = this.$route.query.type;


    this.titleHandle(this.$route.path);
    this.getHistory();
    if (localStorage.getItem("lang")=="en"){
      this.isEn = true;
    }else {
      this.isEn = false;
    }
    this.changeTitle();
    window.addEventListener("setItemEvent", (e) => {

      if (e.newValue=="en"){
        this.isEn = true;
        this.changeTitle();
      }else {
        this.isEn = false;
        this.changeTitle();
      }
    });
  },
  methods: {
    changeTitle(){
      if (!this.isEn){
        if (this.type=="11"){
          this.title = "第一届中日韩产业博览会回顾"
        }else if (this.type=="12"){
          this.title = "第二届中日韩产业博览会回顾"
        }else if (this.type=="13"){
          this.title = "第三届中日韩产业博览会回顾"
        }else if (this.type=="14"){
          this.title = "第四届中日韩产业博览会回顾"
        }else if (this.type=="15"){
          this.title = "第五届中日韩产业博览会回顾"
        }else if (this.type=="16"){
          this.title = "第六届中日韩产业博览会回顾"
        }
      }else {
        if (this.type=="11"){
          this.title = "The 1st China-Japan-Korea Industries Expo"
        }else if (this.type=="12"){
          this.title = "The 2nd China-Japan-Korea Industries Expo"
        }else if (this.type=="13"){
          this.title = "The 3rd China-Japan-Korea Industries Expo"
        }else if (this.type=="14"){
          this.title = "The 4th China-Japan-Korea Industries Expo"
        }else if (this.type=="15"){
          this.title = "The 5th China-Japan-Korea Industries Expo"
        }else if (this.type=="16"){
          this.title = "The 6th China-Japan-Korea Industries Expo"
        }
      }

    },
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(`/gallery/list`),
        method: "get",
        params: this.$http.adornParams({
          page: this.pageIndex,
          pageSize: this.pageSize,
          type: this.type
        })
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.dataList = data.data.list || [];
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
      });
    },
    getHistory() {
      let base = this.$http.adornUrl("/history");
      this.$http
        .get(`${base}/${this.$route.query.type}`)
        .then(({ data: res }) => {

          this.intros = res.data.intros;
          this.introsEn = res.data.introsEn;
          this.videoUrl = res.data.video;
          if(this.videoUrl){
            this.videoUrl = this.videoUrl.replace("/java/storage","/videosjava")
          }

        })
        .catch(() => {});
    },

    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.type = this.past;
      this.getDataList();
    }, // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    titleHandle(path) {
      this.pageIndex =1
      if (path == "/newsCenter/pastReview") {
        this.title = this.$t('newsCenterView.t1')
        this.type = 2019;
      } else if (path == "/newsCenter/livePhotoAlbum") {
        this.title = this.$t('newsCenterView.t2')
        this.type = 2020;
      }
      this.getDataList();
    }
  }
};
</script>
<style scoped>
  .titles {
    height: 77px;
    border-bottom: 2px solid #7daefe;
    width: 820px;
    display: flex;
    align-items: center;
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
  .mflanf{
    width: 75px;
    height: 6px;
    background: rgba(93, 154, 254, 0.8);
  }
  .mftit{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 700;
    color: #636363;
    line-height: 32px;
    height: 55px;
    display: flex;
    align-items: center;
  }
  .mfhuangti{
    width: 821px;
    border-bottom: 1px solid #D3D3D3;
  }
.right_Content {
  float: left;
  width: 910px;
  margin: 40px 0 0 50px;
}
.contentImg {
  width: 420px;
  height: 240px;
  flex: 0.2;
}
.timeFont {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  background: #000000;
  opacity: 0.6;
  border-radius: 0px 0px 10px 10px;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  line-height: 50px;
}
.mediaCoverageUl {
  display: flex;
  flex-wrap: wrap;
}
.mediaCoverageUl li {
  width: 49%;
  height: auto;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 50px;
  cursor: pointer;
}
.dociv {
  overflow: hidden;
  position: relative;
  width: 420px;
  height: 240px;
  text-align: center;
  border-radius: 10px;
  padding: 0 0 30px 0;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -3px 10px #efe8e8, -3px 0px 10px #efe8e8, 3px 0px 10px #efe8e8,
    0px 3px 10px #efe8e8;
}
.dociv:hover{
  transform: scale(1.05);
}
</style>
