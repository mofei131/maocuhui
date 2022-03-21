<template>
  <div class="right_Content">
    <div class="title">
      尊敬的嘉宾：
    </div>
    <div class="intro">
      感谢您注册“2021中日韩产业博览会”，请按如下步骤完成注册流程：<br>
      1.点击“观众服务”下的“注册/登录”菜单，并填写相关信息，即可注册成为展商会员。
    </div>
    <div class="image">
      <img class="image1" src="../../assets/images/exhibition/gzdl1.png" alt="">
    </div>
    <div class="intro">
      2.在观众注册页内，点击“注册”按钮，进入注册页面，进行手机实名认证后即可完成基本注册。
    </div>
    <div class="red-intro">
      注：如需进行线上签约，需在后台提交营业执照，将“普通观众”升级为“专业观众”
    </div>
    <div class="image">
      <img class="image2" src="../../assets/images/exhibition/gzdl2.png" alt="">
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
  /* width: 780px; */
  width: 100%;
  /* height: 593px; */
}
.image3 {
  width: 780px;
  height: 395px;
}

</style>
