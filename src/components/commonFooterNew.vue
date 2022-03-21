<template>
  <div>
  <div class="footerPage">
    <div class="fotneibox">
      <div class="lianxi">
        <div class="lianxileft">
          <div>CONTACT</div>
          <div>联系我们</div>
        </div>
        <div class="lainxiright">
          US
        </div>
      </div>
      <div class="fangshi">
        <div>传真：0086-536-8789407</div>
        <div>邮箱：cjkiexpo@cjkiexpo.org.cn</div>
        <div>地址：中国山东省潍坊市胜利东街99号</div>
      </div>
      <div class="lxbeijing"></div>
      <div class="phone">PHONE</div>
      <div class="fangshi">
        <div>展览: 0086-536-8789045</div>
        <div>活动: 0086-536-8789042</div>
        <div>外联: 0086-536-8891227</div>
      </div>
      <div class="lxbeijing"></div>
    </div>
  </div>
  <div class="beian">
    <div class="beiantop">中国国际贸易促进委员会潍坊市委员会</div>
    <div class="beianbot">Copyright © 中日韩产业博览会 All Rights Reserved 鲁ICP备17053774号-1</div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cishu: 0
    };
  }
};
</script>
<style lang="scss" scoped>
  .beianbot{
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #0B4181;
    text-align: center;
  }
  .beiantop{
    font-size: 20px;
    font-family: MicrosoftYaHei;
    font-weight: bold;
    color: #0B4181;
    padding-top: 35px;
    margin-bottom: 13px;
    text-align: center;
  }
  .beian{
    width: 100%;
    max-width: 1920px;
    height: 133px;
    background-color: #fff;
    margin: auto;
  }
  .phone{
    font-size: 32px;
    font-family: FranklinGothic;
    font-weight: 800;
    color: #FFFFFF;
  }
  .lxbeijing{
    width: 55px;
    height: 133px;
    background: linear-gradient(70deg, #0B4181 0%, #000 900%);
  }
  .fangshi{
    font-size: 16px;
    font-family: FZLTZHUNHJW;
    font-weight: normal;
    color: #93B5DF;
    line-height: 25px;
  }
  .lainxiright{
    font-size: 49px;
    font-family: FranklinGothic;
    font-weight: 800;
    color: #FFFFFF;
  }
  .lianxileft div:nth-child(2){
    font-size: 21px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
  }
  .lianxileft div:nth-child(1){
    font-size: 16px;
    font-family: FZCCHJW;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
  }
  .lianxi{
    display: flex;
    align-items: center;
  }
  .fotneibox{
    width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .footerPage{
    width: 100%;
    max-width: 1920px;
    height: 133px;
    background: #0B4181;
    margin: auto;
  }
</style>
