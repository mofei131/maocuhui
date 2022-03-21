<template>
  <div v-if="dialogVisible" class="Fbgx">
    <div style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);height: 80%;margin: 0">
      <img class="close" src="@/assets/images/exhibition/close.png" alt="" @click="$emit('update:visible', false)">
      <p>{{ $t('fbgx.t1') }}</p>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px" style="height: 80%;overflow-y: auto">
        <el-form-item :label="$t('fbgx.t2')" prop="imgUrls">
          <Myimgsupload :imgurl.sync="form.imgUrls" :visible="dialogVisible" />
        </el-form-item>
        <el-form-item prop="description">
          <el-input v-model="form.description" :placeholder="$t('fbgx.t3')" type="textarea" clearable />
        </el-form-item>
        <el-form-item :label="$t('fbgx.t4')" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio v-if="$store.state.user.info.type==2" border :label="1">{{ $t('fbgx.t5') }}</el-radio>
            <el-radio border :label="2">{{ $t('fbgx.t6') }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('fbgx.t7')" prop="categoryId">
          <el-select v-model="form.categoryId" @change="dataChange('categoryId')" :placeholder="`${$t('fbgx.t8')}${$t('fbgx.t7')}`" style="width:100%;" clearable>
            <el-option v-for="(i, index) in option" :key="index" :value="i.id" :label="i.name" />
          </el-select>
        </el-form-item>
        <el-form-item :label="`${$t('fbgx.t9')}（¥）`" prop="expectedPrice">
          <el-input v-model="form.expectedPrice" class="input_type"
            @change="expectedPriceFunc" placeholder="0-999999999"></el-input>
        </el-form-item>
        <el-form-item :label="$t('fbgx.t10')" prop="num">
          <el-input-number v-model.number="form.num" :min="0" :max="999999999" placeholder="0-999999999" :step="1" step-strictly  :controls="false" />
        </el-form-item>
        <el-form-item :label="$t('fbgx.t11')" prop="address">
          <el-input v-model="form.address" :placeholder="$t('fbgx.t12')" clearable />
        </el-form-item>
        <el-form-item :label="$t('fbgx.t13')" prop="email">
          <el-input v-model="form.email" :placeholder="`${$t('fbgx.t14')}${$t('fbgx.t13')}`" clearable />
        </el-form-item>
        <el-form-item :label="$t('fbgx.t15')" prop="contacts">
          <el-input v-model="form.contacts" :placeholder="`${$t('fbgx.t14')}${$t('fbgx.t15')}`" clearable />
        </el-form-item>
        <el-form-item :label="$t('fbgx.t16')" prop="telephone">
          <!-- <el-input-number v-model="form.telephone" :min="0" :max="99999999999" placeholder="请填写联系方式" :step="1" step-strictly  :controls="false" /> -->
          <el-input v-model="form.telephone" :placeholder="`${$t('fbgx.t14')}${$t('fbgx.t16')}`" clearable />
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="submit">{{ $t('fbgx.t4') }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Myimgsupload from '@/views/exhibition/compontent/imgsupload'
export default {
  name: 'Fbgx',
  components: { Myimgsupload },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mytype: {
      type: Number,
      default: 0
    }
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (!this.form2.id) {
        callback(new Error('请填写正确的验证码'));
      } else {
        callback();
      }
    }
        let toLongLength = (rule, value, callback) => {
      if (value != '' && value !== null&&value!==undefined) {
      let f = parseFloat(value)
      let s = value.toString()
      let rs = s.indexOf('.')
      let error1 = true
      let error2 = true
      let error3 = true
      let error4 = true
      let error5 = true
      let value1 = JSON.stringify(value)
      // let arr = '012'
      // console.log(value1,value1.substring(0, 1),value1.substring(1, 2) != '.')
      if (value1.substring(1, 2) === '0' && value1.substring(2, 3) !== '.') {
      callback(new Error('心理价位不能以0开头'))
      error1 = false
      }
      if (isNaN(value)) {
      callback(new Error('请输入数字'))
      error2 = false
      }
      if (rs < 0) { if (value - 1000000000> 0) {
        callback(new Error('心理价位不能超过十亿'))
        error3 = false
        }
        } else {

        if (value - 1000000000 > 0) {
        this.fieldMessage.chance.estimatedSalesAmount = 999999999.99
        callback(new Error('心理价位不能超过十亿'))

        error4 = false
        } else if (s.slice(s.indexOf('.'), s.length - 1).length > 2) {
        callback(new Error('心理价位最多为2位小数'))
        error5 = false
        }
        }
        if (error1 && error2 && error3 && error4 && error5) {
        this.passTestMoney = true
        callback()

        } else {
        this.passTestMoney = false
        }

        } else {
        callback(new Error('请填写心理价位'))
        }
        }

    return {
      dialogVisible: this.visible,
      form: {},
      rules: {
        expectedPrice: [{
        required: true,
        validator: toLongLength,
        trigger: 'blur'
        }],
        categoryId: [{ required: true, message: '请选择类别', trigger: 'blur' }],
        num: [{ required: true, message: '请填写数量', trigger: 'blur' }],
        // address: [{ required: true, message: '请填写地区', trigger: 'blur' }],
        description: [{ required: true, message: '请填写文字描述', trigger: 'blur' }],
        contacts: [
        {
          required: true,
        pattern: /^[\u0391-\uFFE5A-Za-z]+$/,
        message: "联系人只能输入中英文",
        trigger: "change"
        }
        ],

         email: [
         {
         pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
         message: "请输入正确的邮箱地址",
         trigger: "change"
         }
         ],
        telephone: [{ required: true, message: '请填写联系方式', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "请输入正确格式的联系方式！",
            trigger: "blur",
          }]
      },
      option: []
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.initform()
        this.category()
      }
      this.dialogVisible = val
    }
  },
  methods: {
    // toDecimal2(x) {
    // let f = parseFloat(x)
    // if (isNaN(f)) {
    // return ''
    // }
    // // f = Math.round(x * 100) / 100;
    // let s = x.toString()
    // let rs = s.indexOf('.')
    // if (rs < 0) { rs=s.length s +='.' } while (s.length <=rs + 2) { s +='0' } // if(s>1000000000){
    //   // s = 999999999.99
    //   // }
    //   return s // string
    //   },
    dataChange(val) {
    this.$refs.form.clearValidate(val)
    },
      expectedPriceFunc(val) {
      this.form.expectedPrice = this.toDecimal2(val)
      },
      toDecimal2(x) {
      let f = parseFloat(x)
      if (isNaN(f)) {
      return ''
      }
      // f = Math.round(x * 100) / 100;
      let s = x.toString()
      let rs = s.indexOf('.')
      if (rs < 0) {
        rs=s.length
        s +='.'
        }
        while (s.length <=rs + 2) {
          s +='0'
          } // if(s>1000000000){
        // s = 999999999.99
        // }
        return s // string
        },
    initform() {
      this.form = {
        imgUrls: null,
        description: null,
        type: 2,
        categoryId: null,
        expectedPrice: undefined,
        num: undefined,
        address: null,
        email: null,
        contacts: null,
        telephone: null
      }
    },
    category() {
      return new Promise((r, e) => {
        this.$http.get(this.$http.adornUrl(`/category/list?type=${this.mytype}`)).then(({ data }) => {
          console.log(data)
          this.option = data.data
        })
      })
    },
    submit() {
      this.$refs.form.validate((v) => {
        if (v) {
          var data = {
            ...this.form,
            userId: this.$store.state.user.info.id
          }
          this.$http.post(this.$http.adornUrl(`/supply/demand/publish`), data).then(({ data }) => {
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
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Fbgx{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1200;
  /*overflow: scroll;*/
  overflow-x: hidden;
  >div:nth-of-type(1){
    background-color: #fff;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    position: absolute;
    border-radius: 50px;
    box-shadow: 0px 8px 25px 8px rgba(169, 167, 167, 0.3);
    padding: 60px 100px;
    z-index: 11;
    margin-bottom: 100px;
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
    .input_type /deep/ .el-input__inner {
    // width: 290px;
    height: 32px;
    line-height: 32px;
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
}
</style>
