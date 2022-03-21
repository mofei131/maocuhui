<template>
  <div id="pavilionList">
    <div class="commonContent">
      <div class="goBack">
        <span @click="goBack()">
          <img src="../../assets/images/conferenceLive/back.png" alt />
          <span class="backText">{{ $t('back') }}</span>
        </span>
      </div>
    </div>
    <div class="bannerBg">
      <div class="commonContent bannerBox">
        <div class="bannerLeft">
          <ul class="bannerList">
            <li
              v-for="(item,index) in dataList"
              :key="index"
              @click="changValue(index,item.id)"
            >
              <span :class="[index==isActive?'active':'bannerTitle']">{{item.name}}</span>
              <img
                style="position:absolute;right:46px;top: 2px;"
                v-if="index==isActive"
                src="../../assets/images/conferenceLive/bannerBtn.png"
                alt
              />
            </li>
          </ul>
        </div>
        <div class="bannerRight">
          <div class="bannerRightBg"></div>
          <img src="https://file.mepxns.info/weifang-ai-expo/b2c28514891547189fe24250f10bb059.png" alt />
          <span class="toExhibition" @click="toExhibition()">点击进入展馆</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pavilionList",
  data() {
    return {
      dataList: [],
      isActive:0,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      id: "",
      isShow: false,
    };
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    toExhibition(){
       this.$router.push({
        path: "/pavilionDetail",
        query: {
          id: this.id,
        },
      });
    },
    changValue(index, id) {
      this.isActive = index;
      this.id= id
     
    },
    goBack() {
      window.history.back();
    },

    //获取列表数据
    getDataList() {
      this.$http({
        url: this.$http.adornUrl("/stadium/list"),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 1) {
          this.dataList = data.data || [];
          this.id= this.dataList[0].id
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#pavilionList {
  .goBack {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 11px;
      height: 18px;
      margin-right: 14px;
    }
    .backText {
      height: 19px;
      font-size: 20px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #444444;
    }
  }
  .bannerBg {
    width: 100%;
    height: 600px;
    margin-bottom: 50px;
    background: linear-gradient(90deg, #2478e7, #463cb2, #3a36ae, #ac70ee);
    .bannerBox {
      height: 100%;
      display: flex;
      .bannerLeft {
        margin-top: 50px;
        width: 287px;
        height: 500px;
        background: #584db6;
        border-radius: 10px;
        .bannerList {
          margin: 30px 0 0 39px;

          // li:hover {
          //   color: #03e9fa;
          // }
          .active {
            color: #03e9fa !important;
            margin-right: 91px;
          }
          li {
            position: relative;
            height: 20px;
            width: 100%;
            font-size: 20px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            line-height: 20px;
            display: flex;
            margin-bottom: 40px;
            cursor: pointer;
            .bannerTitle {
              display: inline-block;
              font-size: 20px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: #efefef;
              width: 60%;
            }
            img {
              width: 16px;
              height: 18px;
            }
          }
        }
      }
      .bannerRight {
        flex: 1;
        height: 100%;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        padding-top: 50px;
        .bannerRightBg {
          position: absolute;
          z-index: 0;
          top: 100px;
          left: 20%;
          width: 550px;
          height: 400px;
          background: #01edfd;
          border-radius: 100px;
          transform: rotate(-130deg);
        }
        img {
          position: relative;
          z-index: 10;
          width: 720px;
          height: 500px;
          background: #2b46f8;
          border-radius: 10px;
        }
        .toExhibition {
          display: inline-block;
          width: 168px;
          height: 32px;
          line-height: 32px;
          background: #6861fe;
          border-radius: 18px;
          border: 4px solid #ffffff;
          font-size: 18px;
          font-weight: normal;
          color: #ffffff;
          position: absolute;
          right: 155px;
          bottom: 60px;
          z-index: 99;
          cursor: pointer;
        }
      }
    }
  }
}
</style>