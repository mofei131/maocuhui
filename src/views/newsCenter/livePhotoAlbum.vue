<template>
  <div>
    <div class="right_Content">
      <!-- <div class="headName">{{title}}</div> -->
      <div class="titles"><span class="title-texts">{{ title }}</span></div>
      <div class="back" @click="back()">返回</div>
      <!-- <hr /> -->
      <div class="font_content">
        <ul class="mediaCoverageUl">
          <li v-for="(item,index) in dataList" :key="index">
            <div class="dociv">
              <img class="contentImg" v-if="item.imgUrl" :src="item.imgUrl" alt />
              <!-- <div class="timeFont">上传时间：{{item.createdTime}}</div> -->
              <video class="contentImg" :preload="auto"
              :poster="videoImg"
               align="center" :controls="true"  :autoplay="false" v-if="item.videoUrl">
                  <source :src="item.videoUrl" type="video/mp4">
                </video>
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
  name: 'livePhotoAlbum',
  data() {
    return {
      title:'精彩瞬间',
      type: 10,
      pageSize: 12,
      dataList: [],
      pageIndex: 1,
      totalPage:0,
    };
  },
  mounted() {
    // this.titleHandle(this.$route.path)
    // console.log(this.$route.params.msgKey)
    this.type = this.$route.params.msgKey
    this.$http({
      url: this.$http.adornUrl(`/gallery/list`),
      method: "get",
      params: this.$http.adornParams({
        page: this.pageIndex,
        pageSize: this.pageSize,
        // type: this.type
        type:this.$route.params.msgKey
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
  computed: {
      player() {
          return this.$refs.videoPlayer.player;
      },
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    // getDataList() {
    //   this.$http({
    //     url: this.$http.adornUrl(`/gallery/list`),
    //     method: "get",
    //     params: this.$http.adornParams({
    //       page: this.pageIndex,
    //       pageSize: this.pageSize,
    //       type: this.type
    //     })
    //   }).then(({ data }) => {
    //     if (data && data.code === 1) {
    //       this.dataList = data.data.list || [];
    //       this.totalPage = data.data.total;
    //     } else {
    //       this.dataList = [];
    //       this.totalPage = 0;
    //     }
    //   });
    // },

    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    }, // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },

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
/* .back{
        color: #2884ec;
  } */
.right_Content {
  float: left;
  width: 910px;
  margin: 40px 0 0 50px;
}
.contentImg {
  width: 280px;
  height: 200px;
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
  width: 33.33%;
  height: auto;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 50px;
  cursor: pointer;
}
.dociv {
  overflow: hidden;
  position: relative;
  width: 280px;
  height: 200px;
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
