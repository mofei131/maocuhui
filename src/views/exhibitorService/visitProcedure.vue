<template>
  <div class="right_Content">
    <div class="title">
      尊敬的参展企业：
    </div>
    <div class="intro">
      感谢您注册“2021中日韩产业博览会”，请按如下步骤完成注册流程：<br>
      1.点击“展商服务”下的“注册/登录”菜单，并填写相关信息，即可注册成为展商会员。
    </div>
    <div class="image">
      <img class="image1" src="../../assets/images/exhibition/czlc1.png" alt="">
    </div>
    <div class="intro">
      2.在展商注册页内，请按要求填写或上传内容。
    </div>
    <div class="red-intro">
      注：提交“营业执照”及“联系人名片”后系统将自动识别相关信息，待展商申请人确认后点击“注册”按钮即可进入下一步
    </div>
    <div class="image">
      <img class="image2" src="../../assets/images/exhibition/czlc2.png" alt="">
    </div>
    <div class="intro">
      3．提交完全部材料后，等待2-3个工作日，经后台审核通过后会以短信通知注册手机号，即可进行平台展示内容的提交和修改。
    </div>
    <div class="image">
      <img class="image3" src="../../assets/images/exhibition/czlc3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "exhibitionInfo"
}
</script>

<style scoped>

.right_Content{
  padding: 50px;
  margin-left: 242px;
}
.title {
  width: 144px;
  height: 18px;
  margin: 15px 0;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #222222;
}
.intro {
  margin-top: 15px;
  width: 598px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #222222;
  line-height: 30px;
}
.red-intro {
  width: 800px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FF782C;
  line-height: 14px;
}
.image {
  width: 800px;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  background: #F5F5F5;
}
.image1 {
  width: 780px;
  height: 240px;
}
.image2 {
  width: 780px;
  height: 593px;
}
.image3 {
  width: 780px;
  height: 395px;
}

</style>
