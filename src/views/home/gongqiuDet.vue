<template>
  <div class="body">
    <div class="box">
      <div class="top">
        <div class="title">{{dataDet.titile}}</div>
        <div class="flexlist">
          <div class="time">{{dataDet.publishTime}}</div>
          <div class="guanjian">关键词：<span v-if="dataDet.type == 1">求购</span><span v-if="dataDet.type == 2">出售</span></div>
        </div>
        <div class="hui"></div>
      </div>
      <div class="bou" v-html="dataDet.intro">
      </div>
      <div class="bou" v-html="dataDet.contact">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      value:'',
      dataDet:[]
    };
  },

  mounted() {
     let that = this
    console.log(this.$route.query.id)
    this.id = this.$route.query.id
    // this.value = this.$route.query.value
    if(this.$route.query.value == 1){
      this.$http({
        url: this.$http.adornUrl(`/demand/list`),
        method: 'get',
        params: this.$http.adornParams({
          isHighQuality:1,
          pageSize:50
        })
      }).then(({ data }) => {
        for(let i in data.data.list){
          if(data.data.list[i].id == that.id){
            that.dataDet = data.data.list[i]
          }
        }
      });
    }else if(this.$route.query.value == 2){
      this.$http({
        url: this.$http.adornUrl(`/demand/list`),
        method: 'get',
        params: this.$http.adornParams({
          isHighQuality:0,
          pageSize:50
        })
      }).then(({ data }) => {
        // console.log(data.data.list)
        for(let i in data.data.list){
          if(data.data.list[i].id == that.id){
            that.dataDet = data.data.list[i]
          }
        }
      });
    }
  },
  methods: {

  }
};
</script>

<style scoped>
  .bou{
    padding-top: 20px;
    line-height: 32px;
  }
  .hui{
    width: 1140px;
    height: 2px;
    background-color: #828a92;
  }
  .guanjian span{
    color: #1f6bb5;
  }
  .guanjian{
    color: #828a92;
    font-size: 14px;
  }
  .time{
    color: #828a92;
    font-size: 14px;
    margin-right: 20px;
  }
  .flexlist{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .title{
    font-size: 32px;
    /* font-weight: bold; */
    margin-bottom: 20px;
  }
  .box{
    width: 1200px;
    margin: auto;
    background: #fff;
    padding: 40px 20px 40px 20px;
    box-sizing: border-box;
  }
  .body{
    background-color: #f3f4f9;
    padding-top: 40px;
    padding-bottom: 80px;
  }
</style>
