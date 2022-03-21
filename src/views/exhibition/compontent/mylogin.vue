<template>
  <div v-if="dialogVisible" class="Mylogin" z-index="auto">
    <div>
      <img
        class="closeIcon"
        src="../../../assets/images/exhibition/close.png"
        @click="close"
      />
      <p>
        <img src="@/assets/images/exhibition/default2.png" alt="" height="100px"/>
        <span>中日韩产业博览会</span>
      </p>
      <p>
        <span :class="{ act: act }" @click="act = 1">展商</span>
        <span :class="{ act: !act }" @click="act = 0">观众</span>
      </p>
      <el-form v-show="act" ref="form1" :model="form1" :rules="rules1">
        <el-form-item prop="username">
          <el-input v-model="form1.username" placeholder="请输入账号" clearable>
            <template slot="prepend">
              <img src="@/assets/images/exhibition/mylogin/phone.png" alt="" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="password-input"
            :type="pwdType"
            v-model="form1.password"
            placeholder="请输入密码"
            clearable
          >
            <template slot="prepend">
              <img src="@/assets/images/exhibition/mylogin/pw.png" alt="" />
            </template>
            <template slot="append">
              <img
                v-if="pwdType == 'password'"
                class="eye el-link"
                @click="switchPwdShow"
                src="@/assets/images/login/eye.png"
                alt
              />
              <img
                v-else
                class="eye el-link"
                @click="switchPwdShow"
                src="@/assets/images/login/eye-blind.png"
                alt
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="qrcode">
          <el-input
            v-model="form1.qrcode"
            class="inputLine"
            placeholder="请输入图形验证码"
            clearable
          >
            <template slot="prepend">
              <img src="@/assets/images/exhibition/mylogin/pw.png" alt="" />
            </template>
            <template slot="append">
              <div class="erCodeButton" @click="getCaptchaCode()">
                <img :src="captchaCode" v-if="captchaCode" />
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-button @click="submit1">登录</el-button>
      </el-form>
      <el-form v-show="!act" ref="form2" :model="form2" :rules="rules2">
        <el-form-item prop="mobile">
          <el-input
            v-model="form2.mobile"
            placeholder="请输入手机号码"
            clearable
          >
            <template slot="prepend">
              <img src="@/assets/images/exhibition/mylogin/phone.png" alt="" />
            </template>
          </el-input>
        </el-form-item>
        <!-- <el-form-item prop="qrcode">
          <el-input v-model="qrcode" class="inputLine" placeholder="请输入图形验证码" clearable >
            <template slot="prepend">
              <img src="@/assets/images/exhibition/mylogin/pw.png" alt="">
            </template>
            <template slot="append">
              <div class="erCodeButton" @click="getCaptchaCode()">
                <img :src="captchaCode" v-if="captchaCode" />
              </div>
            </template>
          </el-input>
        </el-form-item> -->
        <el-form-item prop="code">
          <el-input
            v-model="form2.code"
            placeholder="请输入短信验证码"
            clearable
          >
            <template slot="prepend">
              <img src="@/assets/images/exhibition/mylogin/yzm.png" alt="" />
            </template>
            <template slot="append">
              <el-button :disabled="isdisabled" @click="getCode">{{
                isdisabled ? `${count} s` : "发送验证码"
              }}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-button @click="submit2">登录</el-button>
      </el-form>
    </div>
    <div @click="$emit('update:visible', false)" />
  </div>
</template>

<script>
export default {
  name: "Mylogin",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (!this.form2.id) {
        callback(new Error("请填写正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: this.visible,
      act: 1,
      form1: {},
      rules1: {
        username: [{ required: true, message: "请填写账号", trigger: "blur" }],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        qrcode: [
          { required: true, message: "请填写图形验证码", trigger: "blur" },
        ],
      },
      form2: {},
      rules2: {
        mobile: [
          { required: true, message: "请填写手机号码", trigger: "blur" },
        ],
        code: [
          { required: true, message: "请填写验证码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
      },
      isdisabled: false,
      count: null,
      timer: null,
      qrcode: null,
      captchaCode: null,
      captchaKey: null,
      pwdType: "password",
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.initform1();
      }
      this.dialogVisible = val;
    },
    act(val) {
      if (val) {
        this.initform1();
      } else {
        // this.getCaptchaCode()
        this.initform2();
      }
    },
  },
  methods: {
    close() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
    },
    switchPwdShow() {
      if (this.pwdType == "text") {
        this.pwdType = "password";
      } else {
        this.pwdType = "text";
      }
    },
    initform1() {
      this.getCaptchaCode();
      this.form1 = {
        password: null,
        username: null,
        qrcode: null,
      };
    },
    initform2() {
      this.form2 = {
        mobile: null,
        code: null,
        type: 1,
        id: sessionStorage.getItem("codeId") || null,
      };
    },
    // 获取图形验证码
    getCaptchaCode() {
      this.$http({
        url: this.$http.adornUrl(`/captcha`),
        method: "get",
      }).then(({ data }) => {
        this.captchaCode = data.data.imageData;
        this.captchaKey = data.data.key;
      });
    },
    getCode() {
      if (!this.form2.mobile) {
        this.$message.warning("请填写手机号码");
        // } else if (!this.qrcode) {
        //   this.$message.warning('请填写图形验证码')
      } else {
        this.countDown();
        this.$http
          .post(this.$http.adornUrl(`/user/getSmsCode`), {
            // code: this.qrcode,
            // key: this.captchaKey,
            mobile: this.form2.mobile,
            source: 2,
          })
          .then(({ data }) => {
            if (data.code == 1) {
              this.form2.id = data.data;
              sessionStorage.setItem("codeId", data.data);
            } else {
              this.$message.warning(data.msg);
              this.isdisabled = false;
              clearInterval(this.timer);
              this.timer = null;
            }
          })
          .catch(() => {
            this.isdisabled = false;
            clearInterval(this.timer);
            this.timer = null;
          });
      }
    },
    countDown() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.isdisabled = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.isdisabled = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    submit1() {
      this.$refs.form1.validate((v) => {
        if (v) {
          const params = {
            ...this.form1,
            key: this.captchaKey,
            code: this.form1.qrcode,
          };

          this.$http
            .post(this.$http.adornUrl(`/user/signIn`), params)
            .then(({ data }) => {
              console.log(data.data);
              let res = data.data;
              console.log(res);
              let arr = res.split(",");
              console.log(arr);
              if (data.code == 1) {
                this.$message({
                  message: `登录成功`,
                  type: "success",
                });
                this.$store.dispatch("user/getinfo");
                localStorage["token"] = arr[0];
                localStorage["userId"] = arr[1];
                this.$emit("update:visible", false);
              } else {
                this.$message({
                  message: data.msg,
                  type: "error",
                });
              }
            })
            .catch(() => {});
        }
      });
    },
    submit2() {
      this.$refs.form2.validate((v) => {
        if (v) {
          this.$http
            .post(this.$http.adornUrl(`/user/sms/signIn`), this.form2)
            .then(({ data }) => {
              if (data.code == 1) {
                let res = data.data;
                console.log(res);
                let arr = res.split(",");
                console.log(arr);
                this.$message({
                  message: `登录成功`,
                  type: "success",
                });
                this.$store.dispatch("user/getinfo");
                localStorage["token"] = arr[0];
                localStorage["userId"] = arr[1];
                this.$emit("update:visible", false);
              } else {
                this.$message({
                  message: data.msg,
                  type: "error",
                });
              }
            })
            .catch(() => {});
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Mylogin {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 1200;
  > div:nth-of-type(1) {
    background-color: #fff;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 480px;
    position: absolute;
    border-radius: 50px;
    box-shadow: 0px 8px 25px 8px rgba(169, 167, 167, 0.3);
    padding: 60px 100px;
    z-index: 6000;
    .closeIcon {
      width: 30px;
      height: 30px;
      position: absolute;
      z-index: 1;
      cursor: pointer;
      right: 30px;
      top: 30px;
    }
    > p:nth-of-type(1) {
      display: flex;
      padding-right: 10px;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      position: relative;
      > img {
        display: block;
        width: 100px;
        margin-right: -20px;
        position: absolute;
        left: 10px;
      }
      > span {
        display: block;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        font-size: 34px;
        font-weight: bold;
        color: #343434;
        text-align: left;
        position: relative;
        z-index: 1;
      }
    }
    > p:nth-of-type(2) {
      display: flex;
      margin-bottom: 40px;
      > span {
        display: block;
        width: calc(50% - 4px);
        text-align: center;
        padding: 32px;
        background-color: #a2c0f9;
        border-radius: 6px;
        color: #fff;
        font-size: 26px;
        cursor: pointer;
        letter-spacing: 10px;
      }
      > span:nth-of-type(1) {
        margin-right: 8px;
      }
      .act {
        background-color: #003694;
      }
    }
    .el-form {
      .el-form-item {
        margin-bottom: 40px;
      }
      /deep/ .el-input-group__prepend {
        > img {
          width: 28px;
        }
      }
      /deep/ .el-input-group__append {
        .el-button {
          background: linear-gradient(178deg, #b7d3fb 0%, #3372f2 100%);
          color: #fff;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          font-size: 24px;
          line-height: normal;
          height: 80px;
          width: 160px;
          padding-left: 0;
          padding-right: 0;
          border: none;
        }
        .erCodeButton {
          width: 160px;
          margin: -10px -20px;
          > img {
            width: 100%;
          }
        }
      }
      /deep/ .el-input__inner {
        background-color: #f5f5f5;
        height: 80px;
        line-height: 80px;
        font-size: 24px;
      }
      > .el-button {
        width: 100%;
        border: none;
        border-radius: 60px;
        color: #fff;
        padding: 40px 0;
        font-size: 30px;
        letter-spacing: 10px;
        background: linear-gradient(178deg, #b7d3fb 0%, #3372f2 100%);
      }
      .password-input {
        .eye {
          width: 30px;
        }
      }
    }
  }
  > div:nth-of-type(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  }
}
</style>
