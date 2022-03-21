<template>
  <div v-if="dialogVisible" class="Zxqt">
    <div>
      <img class="close" src="@/assets/images/exhibition/close.png" alt="" @click="$emit('update:visible', false)">
      <p>{{ $t('zxqt.t1') }}</p>
      <div class="formBox">
        <el-form ref="form" label-position="left" :rules="rules" :model="form" label-width="120px">
          <el-form-item :label="$t('zxqt.t4_')" prop="message" style="border:none">
            <el-input
              class="textarea"
              :rows="5"
              type="textarea"
              v-model="form.message"
              :placeholder="$t('zxqt.t4')"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('zxqt.t6_')" prop="contacts">
            <el-input class="input" v-model="form.contacts" :placeholder="$t('zxqt.t6')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('zxqt.t8_')" prop="telephone">
            <el-input class="input" v-model="form.telephone" :placeholder="$t('zxqt.t8')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('zxqt.t9_')" prop="email">
            <el-input class="input" v-model="form.email" :placeholder="$t('zxqt.t9')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('zxqt.t5_')" prop="companyName">
            <el-input class="input" v-model="form.companyName" :placeholder="$t('zxqt.t5')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('zxqt.t7_')" prop="duty">
            <el-input class="input" v-model="form.duty" :placeholder="$t('zxqt.t7')"></el-input>
          </el-form-item>
          <el-button type="primary" class="submitBtn" @click="onSubmit('form')">{{ $t('zxqt.t3') }}</el-button>
        </el-form>
      </div>

<!--      <div>
        <el-button @click="submit">{{ $t('zxqt.t3') }}</el-button>
      </div>-->
    </div>
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
      message: null,
      form: {
        companyName: "",
        contacts: "",
        duty: "",
        telephone: "",
        email: "",
        message: ""
      }
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
  computed: {
    rules() {
      return {
        message: [{ required: true, message: this.$t('zxqt.t4'), trigger: "blur" }],
        contacts: [
          {
            required: true,
            pattern: /^[\u0391-\uFFE5A-Za-z]+$/,
            message: this.$t('zxqt.t6'),
            trigger: "change"
          }
        ],
        telephone: [
          { required: true, message: this.$t('zxqt.t8'), trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: this.$t('zxqt.t8'),
            trigger: "blur",
          },
        ],
        email: [{ required: true, message: this.$t('zxqt.t9'), trigger: "blur" }],
        companyName: [
          { required: true, message: this.$t('zxqt.t5'), trigger: "blur" },
        ]
      }
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
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let base = this.$http.adornUrl(`/exhibitor/message/send`);
          let params = {
            "companyName": this.form.companyName,
            "contacts": this.form.contacts,
            "duty": this.form.duty,
            "telephone": this.form.telephone,
            "email": this.form.email,
            "message": this.form.message,
            "exhibitorId": this.exhibitorId,
            "exhibitorProductId": this.exhibitorProductId,
            "userId": this.$store.state.user.info.id
          };
          this.$http
            .post(`${base}`, params)
            .then(({ data: res }) => {
              if (res.code == 1) {
                this.$message({
                  message: res.msg,
                  type: "success",
                });
                this.close();
              }
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    close() {
      this.$emit("closeDia", false);
      this.$refs["form"].resetFields();
    },
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
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    position: absolute;
    border-radius: 30px;
    box-shadow: 0px 8px 25px 8px rgba(169, 167, 167, 0.3);
    padding: 40px 60px 20px 60px;
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
        width: 270px;
        height: 50px;
        padding: 0;
        line-height: 50px;
        text-align: center;
        border: none;
        background-color: #2884EC;
        color: #fff;
        border-radius: 25px;
      }
    }
    .formBox {
      text-align: center;
      .submitBtn {
        margin-top: 15px;
        width: 200px;
        height: 50px;
        background: #2783eb;
        border-radius: 25px;
      }
    }
  }
}
</style>
