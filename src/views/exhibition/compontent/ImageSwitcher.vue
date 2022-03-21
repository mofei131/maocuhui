<template>
  <div class="ImageSwitcher">
    <Autoimg :url="imgsHandle.length!==0?imgsHandle[actIndex]:''" :width="'320px'" :height="'320px'" />
    <div class="right">
      <div :style="{transform: `translateY(-${actlist}px)`}">
        <Autoimg v-for="(i, index) in imgsHandle" :key="index" :url="i" :width="'72px'" :height="'72px'" @click="actIndex=index" />
      </div>
      <span v-show="imgsHandle.length>4" @click="topHandle()"><i class="el-icon-arrow-up" /></span>
      <span v-show="imgsHandle.length>4" @click="bottomHandle()"><i class="el-icon-arrow-down" /></span>
    </div>
  </div>
</template>

<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
export default {
  name: 'ImageSwitcher',
  components: { Autoimg },
  props: {
    imgs: {
      type: [String, null],
      default: ''
    }
  },
  data() {
    return {
      actIndex: 0,
      actlist: 0
    }
  },
  computed: {
    imgsHandle() {
      var arr = []
      if (this.imgs) {
        for(const i of this.imgs.split(',')) {
          if (i) {
            arr.push(i)
          }
        }
      } else {
        arr = [require('@/assets/images/exhibition/default.png')]
      }
      return arr
    },
    actList() {
      var arr = []
      for(let i=this.actIndex;i<(this.actIndex+4);i++){
        arr.push(this.imgsHandle[i])
      }
      return arr
    }
  },
  mounted() {
  },
  methods: {
    topHandle() {
      if (this.imgsHandle.length>4) {
        this.actlist-=80
        if (this.actlist<0) {
          this.actlist = 0
        }
      }
    },
    bottomHandle() {
      if (this.imgsHandle.length>4) {
        this.actlist+=80
        if (this.actlist>(80*(this.imgsHandle.length - 4))) {
          this.actlist = (this.imgsHandle.length - 4)*80
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ImageSwitcher {
  display: flex;
  >.Autoimg{
    margin-right: 8px;
    cursor: pointer;
  }
  >.right{
    width: 72px;
    height: 320px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    >div{
      >.Autoimg{
        margin-bottom: 11px;
        cursor: pointer;
      }
      >.Autoimg:nth-last-of-type(1){
        margin-bottom: 0;
      }
    }
    >span{
      display: block;
      position: absolute;
      cursor: pointer;
      width: 100%;
      text-align: center;
      background-color: rgba(0, 0, 0, .3);
      color: #fff;
      left: 0;
    }
    >span:nth-of-type(1){
      top: 0;
    }
    >span:nth-of-type(2){
      bottom: 0;
    }
  }
}
</style>
