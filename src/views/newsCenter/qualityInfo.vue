<template>
  <div>
    <div class="right_Content">
     <!-- <div class="headName">{{title}}</div>
      <hr /> -->
      <!-- <div class="mftit">{{ title }}</div>
      <div class="mflanf"></div>
      <div class="mfhuangti"></div> -->
      <div class="titles"><span class="title-texts">{{ title }}</span></div>

      <div class="intros">
        <span v-html="intros"></span>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  name: 'qualityInfo',
  data() {
    return {
      title:'精品推介',
      id: 0,
      type: 11,
      pageSize: 12,
      intros:'',
      dataList: [],
      videoUrl:'',
      pageIndex: 1,
      totalPage:0,
    };
  },

  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.$http({
        url: this.$http.adornUrl(`/quality/${this.id}`),
        method: "get",
        params: this.$http.adornParams({
          id: this.id
        })
      }).then(({ data }) => {
        console.log(data);
        if (data && data.code === 1) {
          this.title = data.data.title;
          this.intros = data.data.intro;
        } else {

        }
      });
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
