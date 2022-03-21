<template>
  <el-dialog :title="$t('contact.t1')" :visible.sync="visible" width="510px" :before-close="close">
    <el-form class="form" ref="form" :rules="rules" :model="form" :label-position="'left'" label-width="80px">
      <el-form-item :label="$t('contact.t2')" prop="contacts"><el-input v-model="form.contacts" :placeholder="$t('contact.t3')"></el-input></el-form-item>
      <el-form-item :label="$t('contact.t4')" prop="telephone"><el-input v-model="form.telephone" :placeholder="$t('contact.t5')"></el-input></el-form-item>
      <el-form-item :label="$t('contact.t6')" prop="content">
        <el-input type="textarea" v-model="form.content" :autosize="{ minRows: 6, maxRows: 6 }" :placeholder="$t('contact.t7')"></el-input>
      </el-form-item>
      <div class="action"><el-button style="width: 196px" type="primary" round @click="submit">提交</el-button></div>
      <div class="lxfs-list">
        <div class="lxfs-item">电话：0086-536-8789045</div>
        <div class="lxfs-item">传真：0086-536-8789407</div>
        <div class="lxfs-item">邮箱：cjkiexpo@cjkiexpo.org.cn</div>
        <div class="lxfs-item">地址：中国山东省潍坊市胜利东街99号</div>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    var validateInput = (rule, value, callback) => {
      if (value == '') {
        callback(new Error(rule.message));
      }

      if (rule.field == 'telephone') {
        console.log(!/^1[3-9]\d{9}$/.test(value));
        if (!/^1[3-9]\d{9}$/.test(value)) {
          callback(new Error(rule.message));
        }
      }

      callback();
    };
    return {
      rules: {
        contacts: [
          {
            validator: validateInput,
            message: this.$t('contact.t8'),
            trigger: 'blur'
          }
        ],
        telephone: [
          {
            validator: validateInput,
            message: this.$t('contact.t9'),
            trigger: 'blur'
          }
        ],
        content: [
          {
            validator: validateInput,
            message: this.$t('contact.t10'),
            trigger: 'blur'
          }
        ]
      },
      form: {
        contacts: '',
        telephone: '',
        content: ''
      }
    };
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
      this.$refs['form'].resetFields();
    },
    async submit() {
      const valid = await this.$refs['form'].validate();

      if (valid) {
        let base1 = this.$http.adornUrl('/feedback/submit');
        const { data } = await this.$http.post(`${base1}`, this.form);
        if (data.code == 1) {
          this.$message({
            message: data.msg,
            type: 'success'
          });
          this.$emit('update:visible', false);
          this.$refs['form'].resetFields();
        } else {
          this.$message({
            message: data.msg,
            type: 'error'
          });
        }
      } else {
        console.log('error submit!!');
        return false;
      }
    }
  }
};
</script>

<style>
.form {
  padding-left: 20px;
  padding-right: 30px;
  padding-bottom: 23px;
}
.action {
  display: flex;
  justify-content: center;
}
.lxfs-list{
    margin-top: 30px;
}
.lxfs-item{
    line-height: 22px;
    padding: 5px;
    font-size: 14px;
    letter-spacing: 1px;
}
</style>
