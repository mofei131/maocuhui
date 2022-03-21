<template>
  <div class="news-info-page">
    <div class="commonContent">
      <div class="goBack">
          <span @click="goBack()">
            <img src="../../assets/images/conferenceLive/back.png" alt />
            <span class="backText">{{ $t('back') }}</span>
          </span>
        </div>
      <div class="title">{{ infoData.title }}</div>
      <div class="date" v-if="infoData.createdTime">{{ infoData.createdTime?infoData.createdTime.split(' ')[0]:'' }}</div>
      <div class="content" v-html="infoData.content"></div>
    </div>
    <img src="@/assets/images/conferenceLive/left.png" class="leftBg" />
    <img src="@/assets/images/conferenceLive/right.png" class="rightBg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      infoData: {},
    };
  },
  mounted() {
    this.getNewsInfo();
  },
  methods: {
     goBack() {
      window.history.back();
    },
    getNewsInfo() {
      this.$http({
        url: this.$http.adornUrl(`/news/${this.id}`),
        method: "get",
      }).then(({ data }) => {
        console.log(data);
        this.infoData = data.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.news-info-page {
  min-width: 1290px;
  padding: 30px 0 50px;
  position: relative;
  .leftBg,.rightBg{
    position: absolute;
  }
  .leftBg{
    left: 0;
    bottom: 50px;
  }
  .rightBg{
    right: 0;
    top: 100px;
  }
  .commonContent{
    position: relative;
    z-index: 10;
  }
  .title {
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #fe7d35;
  }
  .date {
    font-size: 16px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #888888;
    text-align: right;
     width: 80%;
    margin: 0 auto;
  }
  .content {
    width: 80%;
    min-height: 300px;
    margin: 0 auto;
    margin-top: 30px;
    line-height: 30px;
  }
}
.goBack {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 80%;
    margin: 0 auto;
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
</style>
<style>
.news-info-page .content p {
  text-indent: 2em;
  color: #333;
  font-size: 16px;
}
</style>
