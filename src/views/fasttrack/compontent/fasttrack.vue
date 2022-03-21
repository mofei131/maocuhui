<template>
  <div class="FastTrack">
    <div class="goback clickItem" @click="prev()">
      <img src="@/assets/images/exhibition/back.png" alt />
      {{ $t('back') }}
    </div>
    <p>{{ title }}</p>
    <div class="mybox">
      <a v-for="(i, index) in data" :key="index" @click="linkto(i)">
        <img :src="i.img">
        <p>{{ i.tit }}</p>
        <p>
          <span>{{ $t('exhibitors.t8') }}</span>
          <img src="@/assets/images/fasttrack/icon-fast@2x.png">
        </p>
      </a>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      top="40vh"
      width="956px">
      <p>
        <span>{{ $t('exhibitors.t6') }}</span>
        <span v-clipboard:copy="copys" v-clipboard:success="copy">{{ copys }}</span>
        <span v-clipboard:copy="copys" v-clipboard:success="copy">{{ $t('exhibitors.t9') }}</span>
      </p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'FastTrack',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      copys: 'http://www2.weifang-ai-expo.mepxns.info/#/register?tab=1'
      // copys: 'http://www.weifang.mepxns.info:9999/#/register?tab=1'
    };
  },
  created() {},
  mounted() {},
  methods: {
    prev() {
      this.$router.go(-1);
    },
    linkto(i) {
      if (i.tit === this.$t('exhibitors.t6')) {
        this.dialogVisible = true
      } else if (i.tit === this.$t('audience.t6')) {
        window.open("http://3d.weifang.mepxns.info:9999/threejs/whole.html")
      } else {
        if (i.url) {
          this.$router.push(i.url)
        }
      }
    },
    copy() {
      this.$message.success(this.$t('exhibitors.t10'))
    }
  }
};
</script>

<style lang="scss" scoped>
.FastTrack {
  width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  .goback {
    cursor: pointer;
    width: 1200px;
    padding: 17px 0;
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #434343;
    margin: 0 auto;
    img {
      width: 11px;
      height: 18px;
    }
  }
  >p{
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 19px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #343434;
    position: relative;
  }
  >p::before{
    content: '';
    display: block;
    border-radius: 2px;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #01EDFD;
  }
  >.mybox{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
    >a{
      display: block;
      width: 280px;
      margin-right: 26px;
      padding: 44px 20px 44px 50px;
      box-shadow: 0px 0px 20px 5px rgba(204, 204, 204, 0.1);
      border-radius: 10px;
      margin-bottom: 20px;
      cursor: pointer;
      >img{
        width: 60px;
      }
      >p:nth-of-type(1) {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #666666;
        line-height: 51px;
      }
      >p:nth-of-type(2){
        text-align: right;
        >span{
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #BCBCBC;
        }
        >img{
          display: none;
          width: 19px;
        }
      }
    }
    >a:hover{
      background-color: #DEFDFF;
      >p:nth-of-type(2){
        >img{
          display: inline-block;
        }
        >span{
          display: none;
        }
      }
    }
  }
  .el-dialog__wrapper{
    /deep/ .el-dialog{
      border-radius: 20px;
      /deep/ .el-dialog__header{
        display: none;
      }
      /deep/ .el-dialog__body{
        text-align: center;
        >p{
          >span{
            font-size: 20px;
            font-family: Source Han Sans CN;
            line-height: 50px;
          }
          >span:nth-of-type(1){
            font-weight: 600;
            color: #333333;
          }
          >span:nth-of-type(2){
            font-weight: 400;
            color: #666666;
            cursor: pointer;
            margin: 0 36px 0 80px;
          }
          >span:nth-of-type(3){
            font-weight: 400;
            color: #03E9FA;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
