<template>
  <div>
    <div class="right_Content">
      <!-- <div class="headName">{{title}}</div>
      <hr /> -->
      <!-- <div class="mftit">{{ title }}</div>
      <div class="mflanf"></div>
      <div class="mfhuangti"></div> -->
      <div class="titles"><span class="title-texts">{{ title }}</span></div>
      <div class="font_content">
        <ul class="mediaCoverageUl">
          <li>
            <div class="dociv">
              <router-link to="/newsCenter/pastView?type=11" class="past">第一届中日韩产业博览会回顾
              <img class="contentImg" src="../../assets/images/pastReview/2015.jpg" alt="第1届中日韩产业博览会" />
              </router-link>
            </div>
          </li>

          <li>
            <div class="dociv">
              <router-link to="/newsCenter/pastView?type=12" class="past">第二届中日韩产业博览会回顾
                <img class="contentImg" src="../../assets/images/pastReview/2016.jpg"  alt="第2届中日韩产业博览会" />
              </router-link>

            </div>
          </li>

          <li>
            <div class="dociv">
              <router-link to="/newsCenter/pastView?type=13" class="past">第三届中日韩产业博览会回顾
                <img class="contentImg" src="../../assets/images/pastReview/2017.jpg" alt />
              </router-link>

            </div>
          </li>

          <li>
            <div class="dociv">
              <router-link to="/newsCenter/pastView?type=14" class="past">第四届中日韩产业博览会回顾
                <img class="contentImg" src="../../assets/images/pastReview/2018.jpg" alt />
              </router-link>

              <!-- <div class="timeFont">上传时间：{{item.createdTime}}</div> -->
            </div>
          </li>

          <li>
            <div class="dociv">
              <router-link to="/newsCenter/pastView?type=15" class="past">第五届中日韩产业博览会回顾
                <img class="contentImg" src="../../assets/images/pastReview/2019.jpg" alt />
              </router-link>

            </div>
          </li>

          <li>
            <div class="dociv">
              <router-link to="/newsCenter/pastView?type=16" class="past">第六届中日韩产业博览会回顾
                <img class="contentImg" src="../../assets/images/pastReview/2020.jpg" alt />
              </router-link>

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
  data() {
    return {
      type: 11,
      title:'',
      pageSize: 12,
      dataList: [],
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
    this.titleHandle(this.$route.path)
  },
  methods: {
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(`/gallery/list`),
        method: "get",
        params: this.$http.adornParams({
          page: this.pageIndex,
          pageSize: this.pageSize,
          type: 1
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

    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
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
.right_Content {
  float: left;
  width: 910px;
  margin: 40px 0 0 50px;
}
.font_content {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #0b1031;
  line-height: 50px;
}

.past{
  vertical-align:middle;
  display:table-cell;
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
  position: center;
  width: 280px;
  height: 200px;
  text-align: center;
  display: table;
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
