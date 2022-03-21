<template>
  <div v-if="dialogVisible" class="Zxqt">
    <div>
      <img class="close" src="@/assets/images/exhibition/close.png" alt="" @click="$emit('update:visible', false)">
      <p>{{ $t('zxqt.t1') }}</p>
      <el-input v-model="message" :placeholder="$t('zxqt.t2')" type="textarea" :rows="5" />
      <div>
        <el-button @click="submit">{{ $t('zxqt.t3') }}</el-button>
      </div>
    </div>
    <!-- <div @click="$emit('update:visible', false)" /> -->
  </div>
</template>

<script>
export default {
  name: 'Zxqt',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    exhibitorId: {
      type: [String, Number, null],
      default: null
    },
    exhibitorProductId: {
      type: [String, Number, null],
      default: null
    }
  },
  data() {
    return {
      dialogVisible: this.visible,
      message: null
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.message = null
      }
      this.dialogVisible = val
    }
  },
  methods: {
    submit() {
        if (!this.message) {
          this.$message.warning(this.$t('zxqt.t4'))
        } else {
          this.$http.post(this.$http.adornUrl(`/exhibitor/message/send`), {
            exhibitorId: this.exhibitorId,
            exhibitorProductId: this.exhibitorProductId,
            message: this.message,
            userId: this.$store.state.user.info.id
          }).then(({ data }) => {
            if (data.code == 1) {
              this.$message({
                message: data.msg,
                type: "success",
              });
              this.$emit('update:visible', false)
            } else {
              this.$message({
                message: data.msg,
                type: "error",
              });
            }
          }).catch(()=>{})
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.Zxqt{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 1200;
  >div:nth-of-type(2){
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  }
  >div:nth-of-type(1){
    background-color: #fff;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    position: absolute;
    border-radius: 50px;
    box-shadow: 0px 8px 25px 8px rgba(169, 167, 167, 0.3);
    padding: 45px 100px;
    z-index: 11;
    >.close{
      position: absolute;
      right: 30px;
      top: 30px;
    }
    >p{
      font-size: 30px;
      font-weight: bold;
      color: #343434;
      border-left: 5px solid #2884EC;
      padding-left: 30px;
      margin-bottom: 40px;
    }
    >.el-textarea{
      margin-bottom: 50px;
    }
    >div{
      text-align: center;
      >.el-button{
        width: 370px;
        height: 60px;
        padding: 0;
        line-height: 60px;
        text-align: center;
        border: none;
        background-color: #2884EC;
        color: #fff;
        border-radius: 30px;
      }
    }
  }
}
</style>
