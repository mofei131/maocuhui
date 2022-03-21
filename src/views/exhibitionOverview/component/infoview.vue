<template>
  <div class="infoview">
    <div v-for="(i, index) of list" :key="index">
      <p><span>·</span>{{ i.title }}</p>
      <div>
        <span v-for="(j,index1) of i.content" :key="index1" :class="{twoline: i.type===2}">{{ j }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Infoview',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.infoview{
  >div{
    margin-bottom: 20px;
    >p{
      color: #fff;
      background: linear-gradient(90deg, #877FF6 0%, #3C38AD 100%);
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      line-height: 34px;
      padding: 7px 0 7px 32px;
      >span{
        margin-right: 14px;
      }
    }
    >div{
      padding: 17px 16px 0;
      background-color: #F5F5F5;
      >span{
        display: inline-block;
        padding: 0 16px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #222222;
        line-height: 36px;
        margin-bottom: 17px;

      }
      >span:nth-of-type(3) {
        border-right: none;
      }
      >span:nth-last-of-type(1) {
        border-right: none;
      }
      >.twoline{
        border-right: none;
        width: calc(50% - 32px);
      }
    }
  }
}
</style>
