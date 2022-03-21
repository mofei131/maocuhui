<template>
  <div class="box">
    <div class="banner">
      <img src="../../assets/images/home/wh_wf.jpg" />
    </div>
    <div class="ysql">
    <div class="mk1bj">
      <div>
      <div class="banben1" style="top: 404px;left: 186px;" v-if="iss != 0" @click="shenqing(0)">申请展位</div>
      <div class="banben2" style="top: 404px;left: 186px;" v-if="iss == 0"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3" style="top: 404px;left: 186px;" v-if="yshen.indexOf(0) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_1" style="top: 548px;left: 186px;" v-if="iss != 1" @click="shenqing(1)">申请展位</div>
      <div class="banben2_1" style="top: 551px;left: 186px;" v-if="iss == 1"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_1" style="top: 548px;left: 186px;" v-if="yshen.indexOf(1) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 373px;left: 240px;" v-if="iss != 2" @click="shenqing(2)">申请展位</div>
      <div class="banben2_2" style="top: 373px;left: 240px;" v-if="iss == 2"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 373px;left: 240px;" v-if="yshen.indexOf(2) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 428px;left: 240px;" v-if="iss != 3" @click="shenqing(3)">申请展位</div>
      <div class="banben2_2" style="top: 428px;left: 240px;" v-if="iss == 3"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 428px;left: 240px;" v-if="yshen.indexOf(3) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 487px;left: 240px;" v-if="iss != 4" @click="shenqing(4)">申请展位</div>
      <div class="banben2_2" style="top: 487px;left: 240px;" v-if="iss == 4"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 487px;left: 240px;" v-if="yshen.indexOf(4) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_3" style="top: 551px;left: 240px;" v-if="iss != 5" @click="shenqing(5)">申请展位</div>
      <div class="banben2_3" style="top: 551px;left: 240px;" v-if="iss == 5"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_3" style="top: 551px;left: 240px;" v-if="yshen.indexOf(5) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_4" style="top: 663px;left: 196px;" v-if="iss != 6" @click="shenqing(6)">申请展位</div>
      <div class="banben2_4" style="top: 663px;left: 196px;" v-if="iss == 6"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_4" style="top: 663px;left: 196px;" v-if="yshen.indexOf(6) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_5" style="top: 786px;left: 240px;" v-if="iss != 7" @click="shenqing(7)">申请展位</div>
      <div class="banben2_5" style="top: 786px;left: 240px;" v-if="iss == 7"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_5" style="top: 786px;left: 240px;" v-if="yshen.indexOf(7) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 428px;left: 357px;" v-if="iss != 8" @click="shenqing(8)">申请展位</div>
      <div class="banben2_2" style="top: 428px;left: 357px;" v-if="iss == 8"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 428px;left: 357px;" v-if="yshen.indexOf(8) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 487px;left: 357px;" v-if="iss != 9" @click="shenqing(9)">申请展位</div>
      <div class="banben2_2" style="top: 487px;left: 357px;" v-if="iss == 9"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 487px;left: 357px;" v-if="yshen.indexOf(9) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_3" style="top: 551px;left: 357px;" v-if="iss != 10" @click="shenqing(10)">申请展位</div>
      <div class="banben2_3" style="top: 551px;left: 357px;" v-if="iss == 10"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_3" style="top: 551px;left: 357px;" v-if="yshen.indexOf(10) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_3" style="top: 663px;left: 357px;" v-if="iss != 11" @click="shenqing(11)">申请展位</div>
      <div class="banben2_3" style="top: 663px;left: 357px;" v-if="iss == 11"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_3" style="top: 663px;left: 357px;" v-if="yshen.indexOf(11) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 428px;left: 457px;" v-if="iss != 12" @click="shenqing(12)">申请展位</div>
      <div class="banben2_2" style="top: 428px;left: 457px;" v-if="iss == 12"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 428px;left: 457px;" v-if="yshen.indexOf(12) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 487px;left: 457px;" v-if="iss != 13" @click="shenqing(13)">申请展位</div>
      <div class="banben2_2" style="top: 487px;left: 457px;" v-if="iss == 13"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 487px;left: 457px;" v-if="yshen.indexOf(13) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_3" style="top: 551px;left: 457px;" v-if="iss != 14" @click="shenqing(14)">申请展位</div>
      <div class="banben2_3" style="top: 551px;left: 457px;" v-if="iss == 14"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_3" style="top: 551px;left: 457px;" v-if="yshen.indexOf(14) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_3" style="top: 663px;left: 457px;" v-if="iss != 15" @click="shenqing(15)">申请展位</div>
      <div class="banben2_3" style="top: 663px;left: 457px;" v-if="iss == 15"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_3" style="top: 663px;left: 457px;" v-if="yshen.indexOf(15) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_6" style="top: 786px;left: 404px;" v-if="iss != 16" @click="shenqing(16)">申请展位</div>
      <div class="banben2_6" style="top: 786px;left: 404px;" v-if="iss == 16"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_6" style="top: 786px;left: 404px;" v-if="yshen.indexOf(16) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_7" style="top: 672px;left: 562px;" v-if="iss != 17" @click="shenqing(17)">申请展位</div>
      <div class="banben2_7" style="top: 672px;left: 562px;" v-if="iss == 17"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_7" style="top: 672px;left: 562px;" v-if="yshen.indexOf(17) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 453px;right: 444px;" v-if="iss != 18" @click="shenqing(18)">申请展位</div>
      <div class="banben2_2" style="top: 453px;right: 444px;" v-if="iss == 18"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 453px;right: 444px;" v-if="yshen.indexOf(18) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_8" style="top: 524px;right: 421px;" v-if="iss != 19" @click="shenqing(19)">申请展位</div>
      <div class="banben2_8" style="top: 524px;right: 421px;" v-if="iss == 19"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_8" style="top: 524px;right: 421px;" v-if="yshen.indexOf(19) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_9" style="top: 672px;right: 346px;" v-if="iss != 20" @click="shenqing(20)">申请展位</div>
      <div class="banben2_9" style="top: 672px;right: 346px;" v-if="iss == 20"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_9" style="top: 672px;right: 346px;" v-if="yshen.indexOf(20) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_6" style="top: 786px;right: 385px;" v-if="iss != 21" @click="shenqing(21)">申请展位</div>
      <div class="banben2_6" style="top: 786px;right: 385px;" v-if="iss == 21"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_6" style="top: 786px;right: 385px;" v-if="yshen.indexOf(21) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 453px;right: 338px;" v-if="iss != 22" @click="shenqing(22)">申请展位</div>
      <div class="banben2_2" style="top: 453px;right: 338px;" v-if="iss == 22"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 453px;right: 338px;" v-if="yshen.indexOf(22) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_10" style="top: 524px;right: 332px;" v-if="iss != 23" @click="shenqing(23)">申请展位</div>
      <div class="banben2_10" style="top: 524px;right: 332px;" v-if="iss == 23"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_10" style="top: 524px;right: 332px;" v-if="yshen.indexOf(23) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_10" style="top: 589px;right: 332px;" v-if="iss != 24" @click="shenqing(24)">申请展位</div>
      <div class="banben2_10" style="top: 589px;right: 332px;" v-if="iss == 24"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_10" style="top: 589px;right: 332px;" v-if="yshen.indexOf(24) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 398px;right: 221px;" v-if="iss != 25" @click="shenqing(25)">申请展位</div>
      <div class="banben2_2" style="top: 398px;right: 221px;" v-if="iss == 25"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 398px;right: 221px;" v-if="yshen.indexOf(25) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 453px;right: 221px;" v-if="iss != 26" @click="shenqing(26)">申请展位</div>
      <div class="banben2_2" style="top: 453px;right: 221px;" v-if="iss == 26"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 453px;right: 221px;" v-if="yshen.indexOf(26) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 524px;right: 221px;" v-if="iss != 27" @click="shenqing(27)">申请展位</div>
      <div class="banben2_2" style="top: 524px;right: 221px;" v-if="iss == 27"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 524px;right: 221px;" v-if="yshen.indexOf(27) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_2" style="top: 589px;right: 221px;" v-if="iss != 28" @click="shenqing(28)">申请展位</div>
      <div class="banben2_2" style="top: 589px;right: 221px;" v-if="iss == 28"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_2" style="top: 589px;right: 221px;" v-if="yshen.indexOf(28) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_3" style="top: 663px;right: 221px;" v-if="iss != 29" @click="shenqing(29)">申请展位</div>
      <div class="banben2_3" style="top: 663px;right: 221px;" v-if="iss == 29"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_3" style="top: 663px;right: 221px;" v-if="yshen.indexOf(29) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1_5" style="top: 786px;right: 221px;" v-if="iss != 30" @click="shenqing(30)">申请展位</div>
      <div class="banben2_5" style="top: 786px;right: 221px;" v-if="iss == 30"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3_5" style="top: 786px;right: 221px;" v-if="yshen.indexOf(30) > -1">已申请</div>
      </div>
      <div>
      <div class="banben1" style="top: 404px;right: 168px;" v-if="iss != 31" @click="shenqing(31)">申请展位</div>
      <div class="banben2" style="top: 404px;right: 168px;" v-if="iss == 31"><div class="bb2f"><img src="../../assets/images/duijiehui/342aa710.png"><div>选择</div></div></div>
      <div class="banben3" style="top: 404px;right: 168px;" v-if="yshen.indexOf(31) > -1">已申请</div>
      </div>
    </div>
    <div class="mk2" v-if="zhanshow">
      <div class="mk2top">
        <div>展会详情</div>
        <div>A区5排402</div>
        <div>普通展区</div>
      </div>
      <div class="fangan">
        <!-- <div class="faqiy" @click="clickRadio(item,index)" v-for="(item,index) in falist" :key="index">
          <img :class="radioVal==index?'yigen':'yigen2'" :src="item.url" />
          <div class="fadian">
            <img :src="radioVal==index?'http://hlstore.yimetal.cn/2021/yibohui/238ebcce.png':'http://hlstore.yimetal.cn/2021/yibohui/67f12fb3.png'">
            <div>设计方案</div>
          </div>
        </div> -->
        <div class="faqiy" @click="clickRadio(item,index)" v-for="(item,index) in falist" v-if="iss == index && index <2" :key="index">
          <img :class="radioVal==index?'yigen':'yigen2'" :src="item" />
          <div class="fadian">
            <img :src="radioVal==index?'http://hlstore.yimetal.cn/2021/yibohui/238ebcce.png':'http://hlstore.yimetal.cn/2021/yibohui/67f12fb3.png'">
            <div>设计方案</div>
          </div>
        </div>
        <div class="faqiy" @click="clickRadio(item,index)" v-for="(item,index) in falist" v-if="iss == 1 && index<5 && index>2" :key="index">
          <img :class="radioVal==index?'yigen':'yigen2'" :src="item" />
          <div class="fadian">
            <img :src="radioVal==index?'http://hlstore.yimetal.cn/2021/yibohui/238ebcce.png':'http://hlstore.yimetal.cn/2021/yibohui/67f12fb3.png'">
            <div>设计方案</div>
          </div>
        </div>
        <div class="faqiy" @click="clickRadio(item,index)" v-for="(item,index) in falist" v-if="iss == 3 && index>5" :key="index">
          <img :class="radioVal==index?'yigen':'yigen2'" :src="item" />
          <div class="fadian">
            <img :src="radioVal==index?'http://hlstore.yimetal.cn/2021/yibohui/238ebcce.png':'http://hlstore.yimetal.cn/2021/yibohui/67f12fb3.png'">
            <div>设计方案</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mk3">
      <div class="mk3tit">填写信息</div>
      <div class="jiulist">
        <div class="chenghu">
          <div>称呼*</div>
          <select class="sex" v-model="sex" name="fruit">
          	<option value="先生">先生</option>
            <option value="女士">女士</option>
          </select>
        </div>
        <div class="chenghu">
          <div>名字*</div>
          <input type="text" v-model="name" />
        </div>
        <div class="chenghu">
          <div>姓氏*</div>
          <input type="text" v-model="sur" />
        </div>
        <div class="chenghu">
          <div>公司*</div>
          <input type="text" v-model="copm" />
        </div>
        <div class="chenghu">
          <div>邮箱*</div>
          <input type="text" v-model="emily" />
        </div>
        <div class="chenghu">
          <div>国家*</div>
          <select class="sex" v-model="count" name="fruit">
          	<option value="中国">中国</option>
            <option value="日本">日本</option>
            <option value="韩国">韩国</option>
            <option value="马来西亚">马来西亚</option>
          </select>
        </div>
        <div class="chenghu">
          <div>电话国家代码*</div>
          <input type="text" v-model="code" placeholder="+86" />
        </div>
        <div class="chenghu">
          <div>办公室号码*</div>
          <input type="text" v-model="office" />
        </div>
        <div class="chenghu">
          <div>手机号码*</div>
          <input type="text" v-model="mobile" />
        </div>
      </div>
      <div class="zhuyi">注意：提交此表格并不能保证您作为赞助商/参展商参与。所有参与确认均由组织者自行决定。</div>
      <div class="gengxin">提交此表格，即表示您同意被添加到我们的邮件列表中，并收到有关该活动的更新。*</div>
      <div class="youji">
        <img @click="youj = !youj" :src="youj?'http://hlstore.yimetal.cn/2021/yibohui/a14479ca.png':'http://hlstore.yimetal.cn/2021/yibohui/67f12fb3.png'" >
        <div>我同意接收来自 中日韩产业博览会 的邮寄更新。</div>
      </div>
      <div class="zenf">遵守法律</div>
      <div class="dianzhe">与任何其他业务一样，我们必须遵守许多法律和法规。我们将在必要时在必要的范围内使用您的个人数据，以使我们能够遵守这些要求。<span @click="yinsi = !yinsi">在此处</span>阅读我们的隐私政策。</div>
      <div class="fuxian">请阅读、理解并勾选复选框以获得同意。*</div>
      <div class="youji">
        <img @click="youj2 = !youj2" :src="youj2?'http://hlstore.yimetal.cn/2021/yibohui/a14479ca.png':'http://hlstore.yimetal.cn/2021/yibohui/67f12fb3.png'" >
        <div>我已阅读、理解并同意隐私政策。</div>
      </div>
      <div class="btn" @click="tijiao()">提交</div>
    </div>
    </div>
    <div class="yinbox" v-if="yinsi">
      <img src="../../assets/images/exhibition/close.png" @click="yinsi = !yinsi">
    </div>
    <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
  </div>
</template>

<script>
  export default{
    data(){
      return{
        iss:-1,
        falist:[
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang001.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang002.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang003.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang004.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang005.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang006.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang007.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang008.png',
          'http://cjkiexpo.org.cn/java/storage/tezhuang/tezhuang009.png'
        ],
        radioVal:-1,
        sex:'先生',
        name:'',
        sur:'',
        copm:'',
        emily:'',
        count:'中国',
        code:'',
        office:'',
        mobile:'',
        youj:true,
        yinsi:false,
        youj2:false,
        yshen:[],
        zhanshow:false,
        zeshu:'',
      }
    },
    mounted() {
      this.getYuYueData()
    },
    methods:{
      tijiao(){
        console.log(this.sex)
        if(!this.name){
          alert('请填写名字')
          return
        }
        if(!this.sur){
          alert('请填写姓氏')
          return
        }
        if(!this.copm){
          alert('请填写公司')
          return
        }
        if(!this.emily){
          alert('请填写邮箱')
          return
        }
        if(!this.office){
          alert('请填写办公室号码')
          return
        }
        if(!this.mobile){
          alert('请填写手机号码')
          return
        }
        if(!this.youj){
          alert('请同意邮件发送')
          return
        }
        if(!this.youj2){
          alert('请同意隐私协议')
          return
        }
        if(!this.iss){
          alert('请选择展位')
          return
        }
        if(!this.zeshu){
          alert('请选择设计方案')
          return
        }
        this.$http({
          url: this.$http.adornUrl(
            `/standapply/save?call=${this.sex}&familyName=${this.sur}&name=${this.name}&company=${this.copm}&post=${this.emily}&country=${this.count}&telCode=${!this.code?'+86':this.code}&tel=${this.office}&mobile=${this.mobile}&applyStandId=${this.iss}&standEffectId=${this.zeshu}`
          ),
          method: 'post'
        }).then(({ data }) => {
          if(data.code == 1){
            alert('预约成功')
          }
        });
      },
      shenqing(e){
        if(e<3){
          this.zhanshow = true
        }
        this.iss = e
        let that = this
        this.$http({
          url: this.$http.adornUrl(
            `/standeffect/list?standId=${this.iss}`
          ),
          method: 'get'
        }).then(({ data }) => {
          if(!data.data.list){
            // that.zhanshow = false
          }else{
            // that.falist = data.data.list
            // that.zhanshow = true
          }
        });
      },
      clickRadio(e,index){
        this.radioVal = index
        this.zeshu = e.seq
      },
      //已经申请的展位
      getYuYueData() {
        let that = this
        this.$http({
          url: this.$http.adornUrl(
            `/standhall/applylist`
          ),
          method: 'get'
        }).then(({ data }) => {
          if(data.data.list.length != 0){
            for(let i in data.data.list){
              that.yshen.push(data.data.list[i].seq)
            }
          }
        });

      },
    }
  }
</script>

<style>
  .box{
    position: relative;
    padding-bottom: 268px;
  }
  .ditu{
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 0;
  }
  .btn{
    width: 185px;
    height: 70px;
    background: #037BC1;
    border-radius: 4px;
    margin-top: 50px;
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .fuxian{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #5E717C;
    margin-top: 46px;
  }
  .yinbox img{
    position: absolute;
        top: 10px;
        right: 10px;
  }
  .yinbox::-webkit-scrollbar {
      display: none;
  }
  .yinbox{
    width: 800px;
    height: 600px;
    position: fixed;
    z-index: 99;
    top: 20%;
    left: 30%;
    overflow: scroll;
    background-color: #fff;
  }
  .dianzhe span{
    color: #66DAB5;
    cursor: pointer;
  }
  .dianzhe{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #5E717C;
    margin-top: 10px;
  }
  .zenf{
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #5E717C;
    margin-top: 47px;
  }
  .youji{
    margin-top: 57px;
    display: flex;
    align-items: center;
  }
  .youji div{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }
  .youji img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  .gengxin{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #5E717C;
    margin-top: 29px;
  }
  .zhuyi{
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #5E717C;
    margin-top: 38px;
  }
  .chenghu{
    margin-bottom: 32px;
  }
  .chenghu div{
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #5E717C;
    margin-bottom: 12px;
  }
  .jiulist{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .chenghu input{
    width: 440px;
    height: 60px;
    background: #F5F8F9;
    border-radius: 2px;
    outline: none;
    border: 0;
    padding: 0 20px 0 16px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    box-sizing: border-box;
  }
  .sex{
    width: 440px;
    height: 60px;
    border-radius: 2px;
    border: 0;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    padding-left: 16px;
    padding-right: 20px;
    box-sizing: border-box;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url(../../assets/images/duijiehui/1ef89959.png) #F5F8F9 400px
    center no-repeat;
    background-size: 18px;
    outline: none;
  }
  .mk3tit{
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin: 56px 0 36px 0;
  }
  .faqiy{
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .fangan{
    width: 1420px;
    /* height: 303px; */
    background: #F9F9F9;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 32px;
    box-sizing: border-box;
  }
  .yigen{
    width: 321px;
    height: 210px;
    border-radius: 4px;
    border: 4px solid #648BFF;
  }
  .yigen2{
    width: 321px;
    height: 210px;
    border-radius: 4px;
  }
  .fadian img{
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
  .fadian{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    padding-top: 25px;
    margin: auto;
  }
  .banben3_10{
    position: absolute;
    width: 83px;
    height: 50px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_10{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 71px;
    height: 38px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_10{
    position: absolute;
    width: 83px;
    height: 50px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_9{
    position: absolute;
    width: 184px;
    height: 81px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_9{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 172px;
    height: 69px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_9{
    position: absolute;
    width: 184px;
    height: 81px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_8{
    position: absolute;
    width: 112px;
    height: 115px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_8{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 100px;
    height: 103px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_8{
    position: absolute;
    width: 112px;
    height: 115px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_7{
    position: absolute;
    width: 261px;
    height: 84px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_7{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 249px;
    height: 72px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_7{
    position: absolute;
    width: 261px;
    height: 84px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_6{
    position: absolute;
    width: 200px;
    height: 54px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_6{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 188px;
    height: 42px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_6{
    position: absolute;
    width: 200px;
    height: 54px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_5{
    position: absolute;
    width: 94px;
    height: 54px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_5{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 82px;
    height: 42px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_5{
    position: absolute;
    width: 94px;
    height: 54px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_4{
    position: absolute;
    width: 138px;
    height: 93px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_4{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 126px;
    height: 81px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_4{
    position: absolute;
    width: 138px;
    height: 93px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .bb2f img{
    width: 15px;
    height: 15px;
    padding: 5px;
  }
  .bb2f{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .banben3_3{
    position: absolute;
    width: 94px;
    height: 93px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_3{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 82px;
    height: 81px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_3{
    position: absolute;
    width: 94px;
    height: 93px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_2{
    position: absolute;
    width: 94px;
    height: 50px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_2{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 82px;
    height: 38px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_2{
    position: absolute;
    width: 94px;
    height: 50px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3_1{
    position: absolute;
    width: 43px;
    height: 96px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    writing-mode: tb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2_1{
    writing-mode: tb;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 31px;
    height: 81px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1_1{
    position: absolute;
    width: 43px;
    height: 93px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    writing-mode: tb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben3{
    position: absolute;
    width: 43px;
    height: 133px;
    background: #C4C4C4;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    writing-mode: tb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .banben2{
    writing-mode: tb;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFA940;
    border: 6px solid #FF834F;
    position: absolute;
    width: 31px;
    height: 121px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    cursor: pointer;
  }
  .banben1{
    position: absolute;
    width: 43px;
    height: 133px;
    background: #69C0FF;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    writing-mode: tb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .mk2top div:nth-child(1){
    font-size: 32px;
    margin-left: 32px;
    margin-right: 54px;
    font-weight: 600;
  }
  .mk2top div{
    margin-right: 20px;
  }
  .mk2top{
    display: flex;
    align-items: center;
    color: #333333;
    font-size: 24px;
    padding-bottom: 25px;
  }
  .ysql{
    width: 1370px;
    margin: auto;
  }
  .mk1bj{
    background-image: url(../../assets/images/duijiehui/04cdfced.png);
    background-size: 100%;
    background-repeat: no-repeat;
    width: 1370px;
    height: 969px;
    margin: auto;
    margin-top: 69px;
    margin-bottom: 54px;
    position: relative;
  }
  .banner{
    max-width: 1920px;
    margin: auto;
  }
  .banner img{
    width: 100%;
    max-width: 1920px;
    height: 610px;
    margin-top: 7px;
    margin: auto;
  }
</style>
