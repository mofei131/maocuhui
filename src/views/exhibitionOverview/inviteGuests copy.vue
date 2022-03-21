<template>
  <div>
    <div class="right_Content">
      <!-- <div class="headName">拟邀嘉宾</div> -->
       <div class="titles"><span class="title-texts">拟邀嘉宾</span></div>
      <!-- <div class="mflan"></div>
      <div class="mfhui"></div> -->
      <!-- <hr /> -->
      <div class="font_content" style="margin-top: 20px;">
        <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
        <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
<!--        <ul class="GuestsListUl">
          <li v-for="(item,index) in dataList" :key="index">
            <div class="dociv">
              <img class="contentImg" :src="item.headUrl" alt />
            </div>
          </li>
        </ul>-->
        <!-- 原先结构布局 -->
        <!-- <ul class="GuestsListUl">
          <li
            class="listItem"
            v-for="(item, index) in dataList"
            :key="index"
            @click="toDet(item.id)"
          >
            <img class="headPortrait" :src="item.headUrl" alt />
            <div class="name">{{ item.name }}</div>
            <div class="position"><span :title="item.position">{{ item.position }}</span></div>
          </li>
        </ul> -->

        <ul class="mfli-list">
          <li class="mfli" v-for="(item, index) in dataList" :key="index" @click="toDet(item.id)">
            <!-- <div class="mfhuang"></div> -->
            <div class="mfjia">
              <div class="mfright">
                <img :src="item.headUrl" />
              </div>
              <div class="mfleft">
                <div class="mftop">{{item.name}}</div>
                <div class="mftop">{{item.position}}</div>
                <!-- <div class="mfbot">{{item.intro}}</div> -->
              </div>
            </div>
            <div class="mfhui"></div>
          </li>
        </ul>
      </div>
      <!-- <div style="padding:50px 0;text-align:center;">
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
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'inviteGuests',
  data() {
    return {
      title:'拟邀嘉宾',
      type: null,
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
    // console.log(this.$route.name)
    this.getDataList();
  },
  methods: {
     getDataList() {
      this.$http({
        url: this.$http.adornUrl(`/guest/list`),
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
    titleHandle(path) {
      this.pageIndex =1
      // this.getDataList();
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.type = this.past;
      // this.getDataList();
    }, // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      // this.getDataList();
    },
    toDet(id) {
      this.$router.push({
        path: "/inviteGuestDetail",
        query: { id: id },
      });
    }
  }
};
</script>
<style lang="scss" scoped>
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
  .mfhui{
    // width: 896px;
    // border-bottom: 1px solid #EEEFF0;
    // margin-bottom: 40px;
  }
  .mflan{
    width: 75px;
    height: 6px;
    background: rgba(93, 154, 254, 0.8);
  }
  .mfhui{
    // width: 896px;
    // border-bottom: 1px solid #EEEFF0;
  }
  .headName{
    font-size: 19px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 26px;
    height: 55px;
    text-align: start;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .mfli-list{
    display: flex;
    flex-flow: wrap;
    width: 820px;
    justify-content: space-between;
  }
  .mfli{
    cursor: pointer;
    width: 49%;
  }
  .mftop{
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1C1C1C;
    // text-align: right;
    line-height: 48px;
  }
  .mfbot{
    text-align: right;
     text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 300px;
      margin-top: 20px;
  }
  .mfleft{
    // margin-right: 120px;
    // width: 320px;
    // margin-bottom: 40px;
  }
  .mfright img{
    width: 120px;
    margin-right: 20px;
    // height: 160px;
  }
  .mfjia{
    display: flex;
    // justify-content: center;
    // margin-bottom: 40px;
    position: relative;
    z-index: 1;
    box-shadow: 0px 0px 10px 0px #eee;
    height: 163px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    border-radius: 4px;
  }
  .mfhuang{
        content: '';
        display: block;
        position: relative;
        right: 0;
        bottom: 3px;
        left: 0;
        height: 7px;
        background: #CCFD04;
        z-index: -1;
        width: 100%;
        top: -38px;
  }
  .mfname{
        position: relative;
        margin-bottom: 30px;
        padding: 0 .7em;
        line-height: 1.4;
        font-size: 28px;
        z-index: 1;
  }
.right_Content {
  // float: left;
  // width: 910px;
  // margin: 40px 0 0 50px;
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  // height: 821px;
  padding-left: 55px;
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
  position: relative;
}
.GuestsListUl {
  transition: all 0.2s;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;

  .listItem {
    width: 186px;
    // margin: 20 12px;
    // width: calc(25% - 50px);
    // margin: 10px 25px 90px;
    height: 166px;
    margin: 25px auto;
    background: #ecf5ff;
    border-radius: 10px;
    border: 1px dotted;
    text-align: center;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1, 1.1);
    }

    .headPortrait {
      width: 80px;
      height: 80px;
      margin-top: -40px;
      border-radius: 10px;
    }

    .name {
      font-size: 24px;
      font-family: SourceHanSansSC;
      font-weight: bold;
      color: #333333;
      margin: 5px 0 5px;
    }

    .position {
      height: 50px;
      padding: 0 5px;
      font-size: 16px;
      line-height: 19px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
    .listItem:nth-of-type(1){
      margin-left: 0!important;
    }
  }
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
