<template>
  <div class="listOfExhibitors">
    <p class="top">
      <span>{{ $t('listOfExhibitors.t1') }}：</span>
      <el-input v-model="keywords" @keyup.enter.native="search">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="search" />
      </el-input>
    </p>
    <div v-loading="loading" style="position: relative;">
      <img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
      <img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
      <p class="title">
        <span>{{ $t('listOfExhibitors.t2') }}</span>
        <span>{{ $t('listOfExhibitors.t3') }}</span>
      </p>
      <p v-for="(i, index) in list" :key="index"  @click="goDet(i)">
        <span class="cursor" style="width: 635px;white-space: nowrap">{{ i.name }}</span>
        <span>{{ i.stadium }}</span>
      </p>
    </div>
    <el-pagination
      class="pagination"
      background
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="total"
      layout="total, prev, pager, next, jumper, slot"
      @size-change="pageSizeChangeHandle"
      @current-change="pageCurrentChangeHandle"
    >
      <el-button style="margin-left:20px;border:1px solid #C0C4CC;color: #606266;" size="mini" @click="getList">{{ $t('listOfExhibitors.t4') }}</el-button>
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      pageSize: 20,
      keywords: null,
      list: [],
      total: 0,
      loading: false
    };
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      return new Promise((r, e) => {
        this.$http.get(`${this.$http.adornUrl('/exhibitor/list')}`, { params: { page: this.page, pageSize: this.pageSize, keywords: this.keywords } } ).then(({ data }) => {
          if (data.code === 1) {
            this.loading = false
            this.list = data.data.list
            this.total = data.data.total
          } else {
            this.loading = false
          }
        }).catch(() => {})
      })
    },
    search() {
      this.page = 1
      this.getList()
    },
    goDet(item) {
      let path ="/businessmanDet";
      this.$router.push({
        path: path,
        query: {
          id: item.id,
        },
      });
    },
    // 分页, 每页条数
    pageSizeChangeHandle(val) {
      this.page = 1;
      this.pageSize = val;
      this.getList();
    },
    // 分页, 当前页
    pageCurrentChangeHandle(val) {
      this.page = val;
      this.getList();
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
.listOfExhibitors {
  margin-top: 90px;
  margin-left: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
  border-radius: 4px 4px 0px 0px;
  width: 895px;
  // height: 821px;
  padding-left: 55px;
  padding-bottom: 35px;
  .top{
    display: flex;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;
    margin-bottom: 20px;
    border-bottom: 2px solid #EFEFEF;
    >span{
      display: block;
      font-size: 24px;
    }
    >.el-input{
      width: 600px;
      /deep/ .el-input__inner{
        border-radius: 30px;
      }
      /deep/ .el-input__suffix{
        right: 20px;
        cursor: pointer;
        .el-icon-search{
          font-size: 24px;
        }
      }
    }
  }
  >div:nth-of-type(1){
    margin-bottom: 30px;
    >p:nth-of-type(1){
      border-bottom: none;
      >span{
        font-size: 20px;
        font-weight: 600;
      }
    }
    >p{
      display: flex;
      border-bottom: 1px solid #DCDCDC;
      .cursor{
        cursor: pointer;
      }

      >span{
        display: block;
        padding: 20px 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #333333;
      }
      >span:nth-of-type(1){
        width: 700px;
      }
      >span:nth-of-type(2){
        flex: 1;
      }
    }
  }
}
</style>
