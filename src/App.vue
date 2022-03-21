<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.commonContent{
  width: 1400px;
  margin: 0 auto;
}
.eo_none_content {
  padding-bottom: 138px;
  overflow: hidden;
}
.headName {
  width: inherit;
  height: 92px;
  padding: 0 0 0 14px;
  line-height: 92px;
  font-size: 30px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: #333333;
  background: url("./assets/images/exhibitionOverview/headNameImg.png")
    no-repeat;
  background-position: 1px center;
  background-size: 4px 32px;
}
.back {
  height: 58px;
  background: url("./assets/images/exhibitionOverview/back.png") no-repeat 10px center;
  line-height: 58px;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  color: #444444;
  cursor: pointer;
  background-size: 11px;
}
.myprompt{
  background-color: #256BEF;
  justify-content: center;
}
.myprompt .el-message__icon{
  color: #fff;
  font-size: 20px;
}
.myprompt .el-message__content{
  color: #fff;
  font-size: 20px;
}
.el-input-group__prepend,.el-input-group__append{
    border: 0;
  }
  .el-select>.el-input{
    border-right: 1px solid #fff!important;
  }
  .el-select>.el-input,.el-input-group__append button.el-button{
    color: #fff;
        background-color: #022475;
        border: 0;

  }
  .el-input-group--append .el-input__inner,.el-input-group__append{
    border: 0;
    background-color: #022475;
    color: #fff;
  }
</style>
