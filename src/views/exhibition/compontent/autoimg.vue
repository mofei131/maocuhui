<template>
  <img
    ref="imghead"
    class="Autoimg"
    :fit="fit"
    :src="imgHandle(url)"
    :class="{ imgborder: border }"
    :style="{ width, height, objectFit:fit, fontFamily: `object-fit:${fit}` }"
    @click="clickHandle"
  >
</template>

<script>
import objectFitImages from 'object-fit-images'
export default {
  name: 'Autoimg',
  props: {
    url: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    fit: {
      type: String,
      default: 'scale-down'
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    url(val) {
      this.$nextTick(()=> {
        objectFitImages(this.$refs.imghead)
      })
    }
  },
  mounted() {
    objectFitImages(this.$refs.imghead)
  },
  methods: {
    clickHandle(event) {
      this.$emit('click')
    },
    imgHandle(i) {
      if (i === "" || typeof(i) !== 'string' || i.indexOf(",") !==-1 || i.indexOf(".mp4") !==-1 || i.indexOf(".tif") !==-1) {
        return require("@/assets/images/exhibition/default.png");
      } else {
        return i;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.imgborder{
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
}
</style>
