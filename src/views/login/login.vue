<template>
  <div class="content">
    <img src="../../assets/images/login/loginBg.png" class="leftBg" />
    <img src="../../assets/images/register/rightBg.png" class="rightBg" />
    <!-- <img
      src="../../assets/images/login/rightBack.png"
      class="rightBack"
      @click="navback()"
      style="cursor: pointer"
    /> -->
    <!-- 登录框 -->
    <div class="loginWrap">
      <p class="myback" @click="navback">
        <span class="back" />{{ $t("back") }}
      </p>
      <div class="title">
<!--        <img src="@/assets/images/exhibition/default.png" class="logo" />-->
        <span>第七届中日韩产业博览会</span>
      </div>
      <div class="chooseWrap">
        <!-- <div :class="{ activeTab: tab == 1 }" @click="changeTab(1)">展商</div>
        <div :class="{ activeTab: tab == 2 }" @click="changeTab(2)">观众</div> -->
        <!-- <div :class="{ activeTab: tab == 3 }" @click="changeTab(3)">
          媒体记者
        </div> -->
      </div>
      <el-form
        :model="form1"
        :rules="rules1"
        ref="inputWrap1"
        class="inputWrap"
        v-if="tab == 1"
      >
        <el-form-item prop="username">
          <span class="redTip">*</span>
          <img src="../../assets/images/login/tel.png" />
          <el-input
            v-model="form1.username"
            class="inputLine"
            maxlength="40"
            :placeholder="$t('login.t1')"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <span class="redTip">*</span>
          <img src="../../assets/images/login/password.png" />
          <img
            v-if="pwdType !== 'password'"
            class="el-link"
            @click="switchPwdShow"
            src="@/assets/images/login/eye.png"
            alt
          />
          <img
            v-else
            class="el-link"
            @click="switchPwdShow"
            src="@/assets/images/login/eye-blind.png"
            alt
          />
          <el-input
            :type="pwdType"
            v-model="form1.password"
            class="inputLine"
            maxlength="20"
            :placeholder="$t('login.t2')"
          ></el-input>
          <el-form-item prop="qrcode">
            <span class="redTip">*</span>
            <img src="../../assets/images/login/password.png" />
            <el-input
              v-model="qrcode"
              class="inputLine"
              placeholder="请输入图形验证码"
            ></el-input>
            <div
              class="erCodeButton"
              @click="getCaptchaCode()"
              style="background: white"
            >
              <img
                :src="captchaCode"
                v-if="captchaCode"
                style="
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                "
              />
            </div>
          </el-form-item>
        </el-form-item>
        <div class="buttonWrap">
          <div class="submitButton" @click="submit('inputWrap1')">
            {{ $t("login.t5") }}
          </div>
          <div class="registerButton" @click="register()">
            {{ $t("login.t6") }}
          </div>
        </div>
      </el-form>
      <!-- 手机登录 -->
      <el-form
        :model="form2"
        :rules="rules2"
        ref="inputWrap2"
        class="inputWrap"
        v-if="tab != 1"
      >
        <el-form-item prop="mobile">
          <span class="redTip">*</span>
          <img src="../../assets/images/login/tel.png" />
          <el-input
            v-model="form2.mobile"
            class="inputLine"
            :placeholder="$t('login.t3')"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="qrcode">
          <span class="redTip">*</span>
          <img src="../../assets/images/login/password.png" />
          <el-input
            v-model="qrcode"
            class="inputLine"
            placeholder="请输入图形验证码"
          ></el-input>
          <div
            class="erCodeButton"
            @click="getCaptchaCode()"
            style="background: white"
          >
            <img
              :src="captchaCode"
              v-if="captchaCode"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              "
            />
          </div>
        </el-form-item> -->
        <el-form-item prop="erCode">
          <span class="redTip">*</span>
          <img src="../../assets/images/login/yanzhengma.png" />
          <el-input
            v-model="form2.erCode"
            class="inputLine"
            :placeholder="$t('login.t4')"
          ></el-input>

          <div class="erCodeButton" @click="getSmsCode()">
            {{ smscodeToast }}
          </div>
        </el-form-item>

        <div class="buttonWrap">
          <div class="submitButton" @click="submit('inputWrap2')">
            {{ $t("login.t5") }}
          </div>
          <div class="registerButton" @click="register()">
            {{ $t("login.t6") }}
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import loginBg from "@/assets/images/login/loginBg.png";
import aes from "@/utils/aes";
export default {
  data() {
    return {
      bgStyle: {
        backgroundImage: `url(${loginBg})`,
      },
      tab: 1,
      form1: {
        username: "",
        password: "",
      },
      form2: {
        mobile: "",
        erCode: "",
      },
      smscodeToast: this.$t("login.t7"),
      qrcode: "",
      captchaCode: "", //验证码地址
      captchaKey: "",
      smscodeId: "",
      pwdType: "password",
    };
  },
  computed: {
    rules1() {
      return {
        username: [
          { required: true, message: this.$t("login.t1"), trigger: "blur" },
        ],
        password: [
          { required: true, message: this.$t("login.t2"), trigger: "blur" },
        ],
      };
    },
    rules2() {
      return {
        mobile: [
          {
            required: true,
            message: this.$t("login.t3"),
            trigger: "blur",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: this.$t("login.t8"),
            trigger: "blur",
          },
        ],
        erCode: [
          {
            required: true,
            message: this.$t("login.t4"),
            trigger: "blur",
          },
        ],
      };
    },
  },
  created() {
    if (this.$route.query.tab) {
      this.changeTab(this.$route.query.tab * 1);
    }
  },
  methods: {
    switchPwdShow() {
      if (this.pwdType == "text") {
        this.pwdType = "password";
      } else {
        this.pwdType = "text";
      }
    },
    changeTab(index) {
      this.tab = index;
      if (index == 1) {
        if (this.$refs["inputWrap2"]) {
          this.$refs["inputWrap2"].clearValidate();
        }
      } else {
        if (this.$refs["inputWrap1"]) {
          this.$refs["inputWrap1"].clearValidate();
        }
        if (this.$refs["inputWrap2"]) {
          this.$refs["inputWrap2"].clearValidate();
        }
      }
      this.form2 = {
        mobile: "",
        erCode: "",
      };
      this.form1 = {
        username: "",
        password: "",
      };
      this.qrcode = "";
      this.captchaKey = "";
      this.smscodeId = "";
      this.getCaptchaCode();
    },
    // 登录
    submit(formName) {
      let postData = {};
      let url = "";
      let password = aes.encrypt(this.form1.password);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.tab == 1) {

            if (!this.qrcode) {
              this.$message({
                message: "请输入图形验证码",
                type: "error",
              });
              return false;
            }

            postData = {
              code: this.qrcode,
              key: this.captchaKey,
              password: password,
              username: this.form1.username,
            };

            url = this.$http.adornUrl(`/user/signIn`);
          } else {
            postData = {
              code: this.form2.erCode,
              id: this.smscodeId,
              mobile: this.form2.mobile,
              type: this.tab,
            };
            url = this.$http.adornUrl(`/user/sms/signIn`);
          }
          this.$http
            .post(url, postData)
            .then(({ data }) => {
              if (data.code == 1) {
                // 给后台使用
                localStorage["token"] = data.data;
                this.$message({
                  message: this.$t("login.t9"),
                  type: "success",
                });
                setTimeout(() => {
                  this.$router.replace({
                    path: "/admin",
                  });
                }, 3000);
              } else {
                this.$message({
                  message: data.msg,
                  type: "error",
                });
              }
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 注册
    register() {
      this.$router.push({
        path: "/register",
        query: {
          tab: this.tab,
        },
      });
    },
    // 获取图形验证码
    getCaptchaCode() {
      this.$http({
        url: this.$http.adornUrl(`/captcha?t=${new Date().getTime()}`),
        method: "get",
      }).then(({ data }) => {
        this.captchaCode = data.data.imageData;
        this.captchaKey = data.data.key;
      });
    },
    navback() {
      this.$router.push({
        path: sessionStorage.getItem("routeHistory") || "/home",
      });
    },
    // 获取手机验证码
    getSmsCode() {
      if (this.smscodeToast != "发送验证码") {
        this.$message({
          message: "验证码已发送",
          type: "error",
        });
        return false;
      }
      if (!/^1[3456789]\d{9}$/.test(this.form2.mobile)) {
        this.$message({
          message: "请输入正确手机号",
          type: "error",
        });
        return false;
      }
      // if (!this.qrcode) {
      //   this.$message({
      //     message: "请输入图形验证码",
      //     type: "error",
      //   });
      //   return false;
      // }
      this.$http
        .post(this.$http.adornUrl(`/user/getSmsCode`), {
          code: this.qrcode,
          // key: this.captchaKey,
          mobile: this.form2.mobile,
          source: 2,
        })
        .then(({ data }) => {
          if (data.code == 1) {
            this.$message({
              message: data.msg,
              type: "success",
            });
            this.smscodeToast = 60;
            this.smscodeId = data.data;
            var timer = setInterval(() => {
              if (this.smscodeToast > 0) {
                this.smscodeToast -= 1;
              } else {
                clearInterval(timer);
                this.smscodeToast = this.$t("login.t7");
              }
            }, 1000);
          } else {
            this.$message({
              message: data.msg,
              type: "error",
            });
          }
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getCaptchaCode();
    if (this.$route.query.tab) {
      this.tab = this.$route.query.tab;
      if (this.tab == 1) {
        this.title = "展商注册";
      } else if (this.tab == 2) {
        this.title = "观众注册";
      } else if (this.tab == 3) {
        this.title = "媒体记者注册";
      }
    }
  },
};
</script>
<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .leftBg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
  }
  .rightBg {
    position: absolute;
    right: 0;
    top: 0;
    width: 7%;
  }
  .rightBack {
    position: absolute;
    right: 2%;
    top: 9%;
    width: 1%;
  }
  .loginWrap {
    position: absolute;
    top: 20%;
    right: 15%;
    .myback {
      position: absolute;
      left: -80px;
      top: -60px;
      font-size: 20px;
      cursor: pointer;
    }
    .title {
      font-size: 34px;
      font-weight: bold;
      color: #343434;
      text-align: center;
      .logo {
        width: 160px;
        vertical-align: middle;
        margin-right: 20px;
      }
      span {
        position: relative;

      }
    }
    .chooseWrap {
      display: flex;
      margin-top: 37px;
      div {
        width: 245px;
        height: 88px;
        background: #a2c0f9;
        border-radius: 5px;
        margin-right: 10px;
        text-align: center;
        line-height: 88px;
        color: white;
        cursor: pointer;

        font-size: 26px;
      }
      .activeTab {
        background: #003694;
      }
    }
    .inputWrap {
      width: 501px;
      margin-top: 30px;
      > div {
        position: relative;
        .redTip {
          color: #f56c6c;
          margin-right: 4px;
          position: absolute;
          left: -20px;
        }
        img {
          width: 25px;
          height: 35px;
          position: absolute;
          top: 25px;
          left: 25px;
          z-index: 99;
        }
        img:nth-of-type(2) {
          width: 30px;
          height: unset;
          position: absolute;
          top: 30px;
          right: 50px;
          left: unset;
          z-index: 99;
        }
        .inputLine {
          // width: 100%;
          // height: 86px;
          // background: #f5f5f5;
          // border-radius: 14px;
          // border: none;
          // margin-bottom: 16px;
          // box-sizing: border-box;
          // padding-left: 80px;
          // font-size: 24px;
          >>> .el-input__inner {
            width: 100%;
            height: 86px;
            background: #f5f5f5;
            border-radius: 14px;
            border: none;
            margin-bottom: 16px;
            box-sizing: border-box;
            padding-left: 80px;
            font-size: 24px;
          }
        }
        .erCodeButton {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 158px;
          height: 84px;
          line-height: 84px;
          background: linear-gradient(178deg, #b7d3fb 0%, #3372f2 100%);
          opacity: 0.8;
          color: white;
          border-radius: 0 14px 14px 0;
          text-align: center;
          font-size: 24px;
          cursor: pointer;
        }
      }
    }
    .buttonWrap {
      margin-top: 60px;
      font-size: 24px;

      .submitButton {
        width: 501px;
        height: 90px;
        background: linear-gradient(178deg, #b7d3fb 0%, #3372f2 100%);
        border-radius: 45px;
        line-height: 90px;
        text-align: center;
        color: white;
        cursor: pointer;
      }
      .registerButton {
        width: 501px;
        text-align: center;
        color: #9a9a9a;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
