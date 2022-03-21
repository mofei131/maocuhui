<template>
  <div v-if="showOrder" class="orderBox">
    <div>
      <img class="closeIcon" src="../../../assets/images/exhibition/close.png" @click="close" alt />
      <div class="commonTitleWrap">
        <span class="sx"></span>
        <div class="title">{{ $t('orderDialog.t1') }}</div>
      </div>
      <div class="goodsBox">
        <Autoimg :url="myimgHandle(goods.logoUrl)" :width="'230px'" :height="'128px'" />
        <div class="goodsCount">
          <p class="tit">{{goods.name}}</p>
          <div class="calcBox">
            <img @click="reduceCount()" src="../../../assets/images/exhibition/reduce.png" alt />
            <!-- <span class="num">{{count}}</span> -->
            <el-input-number v-model="count" :min="1" :max="99999" step-strictly :controls="false" />
            <img @click="addCount()" src="../../../assets/images/exhibition/add.png" alt />
          </div>
        </div>
      </div>
      <div class="formBox">
        <el-form ref="form" label-position="left" :rules="rules" :model="form" label-width="200px">
          <el-form-item :label="$t('orderDialog.t2')" prop="price">
            <el-input-number class="input" v-model="form.price" :min="0" :max="999999999.99" :placeholder="$t('orderDialog.t3')" :step="0.01" step-strictly  :controls="false" />
            <!-- <el-input class="input" v-model="form.price" placeholder="请输入期望价格"></el-input> -->
          </el-form-item>
          <el-form-item :label="$t('orderDialog.t4')" prop="name">
            <el-input class="input" v-model="form.name" :placeholder="$t('orderDialog.t5')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('orderDialog.t6')" prop="phone">
            <el-input class="input" v-model="form.phone" :placeholder="$t('orderDialog.t7')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('orderDialog.t8')" prop="companyName">
            <el-input class="input" v-model="form.companyName" :placeholder="$t('orderDialog.t9')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('orderDialog.t10')" prop="remark" style="border:none">
            <el-input
              class="textarea"
              :rows="10"
              type="textarea"
              v-model="form.remark"
              :placeholder="$t('orderDialog.t11')"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="submitBtn" @click="onSubmit('form')">{{ $t('orderDialog.t12') }}</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Autoimg from "@/views/exhibition/compontent/autoimg";
export default {
  components: { Autoimg },
  props: {
    showOrder: {
      type: Boolean,
      default: false,
    },
    goods: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      count: 1,
      form: {
        price: undefined,
        companyName: "",
        name: "",
        phone: "",
        remark: "",
      }
    };
  },
  computed: {
    rules() {
      return {
        name: [
        {
        required: true,
        pattern: /^[\u0391-\uFFE5A-Za-z]+$/,
        message: this.$t('orderDialog.t13'),
        trigger: "change"
        }
        ],
        // name: [
        //   { required: true, message: "请输入联系人姓名", trigger: "blur" },
        // ],
        phone: [
          { required: true, message: this.$t('orderDialog.t7'), trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: this.$t('orderDialog.t14'),
            trigger: "blur",
          },
        ],
        // companyName: [
        //   { required: true, message: "请输入公司名称", trigger: "blur" },
        // ],
        // price: [{ required: true, message: "请输入期望价格", trigger: "blur" }],
        // remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    reduceCount() {
      if (this.count > 1) {
        this.count--;
      } else {
        this.$message({
          message: this.$t('orderDialog.t15'),
          type: "warning",
        });
      }
    },
    addCount() {
      this.count++;
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let base = this.$http.adornUrl("/exhibitor/product/intention/order");
          let params = {
            "company": this.form.companyName,
            "contacts": this.form.name,
            "exhibitorProductId": this.goods.exhibitorProductId,
            "num": this.count,
            "price": this.form.price,
            "remarks": this.form.remark,
            "telephone": this.form.phone
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
    myimgHandle(i) {
      if (i===null||i===''||i===undefined){
        return require('@/assets/images/exhibition/default.png')
      } else {
        var str = ''
        for (const j of (i.split(','))) {
          if (j) {
            str = j
            break
          }
        }
        return str
      }
    }
  },
};
</script>

<style scoped lang="scss">
.orderBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 1200;
  >div{
    width: 1000px;
    background: #ffffff;
    box-shadow: 0px 0px 22px 17px rgba(203, 203, 203, 0.4);
    border-radius: 15px;
    padding: 62px 100px;
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 50px;
    .formBox {
      text-align: center;
      .submitBtn {
        margin-top: 30px;
        width: 370px;
        height: 60px;
        background: #2783eb;
        border-radius: 30px;
      }
    }

    .closeIcon {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 30px;
      top: 30px;
    }
    .goodsBox {
      display: flex;
      margin-bottom: 19px;
      .Autoimg {
        margin-right: 30px;
        border-radius: 6px;
      }
      .goodsCount {
        .tit {
          font-size: 26px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #656565;
          line-height: 50px;
          margin-bottom: 30px;
        }
        .calcBox {
          display: flex;
          align-items: center;
          >.el-input-number{
            width: 80px;
            margin: 0 10px;
          }
          >img{
            cursor: pointer;
          }
        }
        .num {
          margin: 0 20px;
        }
      }
    }
    .commonTitleWrap {
      height: 100px;
      display: flex;
      align-items: center;
      .sx {
        width: 4px;
        height: 32px;
        background: #01edfd;
        border-radius: 2px;
      }
      .title {
        margin-left: 13px;

        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #333333;
      }
    }
  }
  .el-form{
    .el-form-item{
      .el-input-number{
        width: 100%;
        /deep/ .el-input__inner{
          text-align: left;
        }
      }
    }
  }
}
</style>
