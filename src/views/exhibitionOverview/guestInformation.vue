<template>
  <div class="fontStyle">
    <div class="f-title">第七届中日韩产业博览会开幕式暨<br>2021中日韩产业合作发展论坛</div>
    <!-- 博览会开幕式 -->
    <div class="open-info-title">议程安排</div>
    <!-- 博览会开幕式 end -->
    <!-- 嘉宾致辞 -->
    <div>
      <!-- 开场白 -->
      <div class="open-info-title2">嘉宾致辞</div>
      <!-- 嘉宾信息 -->
      <div class="jb-info" @mouseover="mouseOver4('1')" @mouseleave="leave()">
        <img :style="infoData_index4 == 1 ? 'box-shadow: 0 4px 14px 0 rgba(0,0,0,.3);cursor: pointer;' : ''" src="../../assets/images/home/0.jpg" />
        <div class="jb-infos">
          <div class="link-line"></div>
          <div class="jb-info-pname">
            <span>中国国际贸易促进委员会党组成员、副会长</span>
            <span>卢鹏起</span>
            <span></span>
          </div>
          <div class="link-line"></div>
        </div>
      </div>
<!--      <div class="jb-info" @mouseover="mouseOver4('1')" @mouseleave="leave()">
        <img :style="infoData_index4 == 1 ? 'box-shadow: 0 4px 14px 0 rgba(0,0,0,.3);cursor: pointer;' : ''" src="../../assets/images/home/1.png" />
        <div class="jb-infos">
          <div class="link-line"></div>
          <div class="jb-info-pname">
            <span>中国驻日本大使</span>
            <span>孔铉佑</span>
            <span>(视频致辞)</span>
          </div>
          <div class="link-line"></div>
        </div>
      </div>-->
<!--      <div class="jb-info" @mouseover="mouseOver4('2')" @mouseleave="leave()">
        <img :style="infoData_index4 == 2 ? 'box-shadow: 0 4px 14px 0 rgba(0,0,0,.3);cursor: pointer;' : ''" src="../../assets/images/home/2.png" />
        <div class="jb-infos">
          <div class="link-line"></div>
          <div class="jb-info-pname">
            <span>中国驻韩国大使</span>
            <span>邢海明</span>
            <span>(视频致辞)</span>
          </div>
          <div class="link-line"></div>
        </div>
      </div>-->
    </div>
    <!-- 嘉宾致辞 end -->
    <!-- 启动仪式 -->
    <div style="margin-bottom: 150px;">
      <div class="open-info-title2">中日韩产业合作发展论坛</div>
      <!--      <div class="jie">中日韩产业合作发展论坛</div>-->
      <div class="jie-cent">第一环节：营造开放包容的合作环境，激活创新引领的合作动能，开创互利共赢的合作局面</div>
      <!-- 嘉宾信息 -->
      <div class="infoData-list">
        <div class="infoData-item" style="width: 30%;" v-for="(item, index) in infoData" @mouseover="mouseOver(index)" @mouseleave="leave()">
          <div class="infoData-info">
            <img :style="infoData_index == index ? 'box-shadow: 0 4px 14px 0 rgba(0,0,0,.3);cursor: pointer;' : ''" :src="item.pic" />
            <div class="infoData-pname">
              <span>{{ item.post }}</span>
              <span>{{ item.name }}</span>
            </div>
          </div>
          <!-- <div class="infoData-details">{{ item.details }}{{ item.details2 }}</div> -->
        </div>
      </div>
      <div class="jie-cent margin-t-30">第二环节：促进中日韩智能制造、数字经济、氢能产业、现代农业领域产业合作,分享发展机遇，开拓增长空间</div>
      <!-- 嘉宾信息 -->
      <div class="infoData-list">
        <div class="infoData-item" v-for="(item, index) in infoData2" @mouseover="mouseOver2(index)" @mouseleave="leave()">
          <div class="infoData-info">
            <img :style="infoData_index2 == index ? 'box-shadow: 0 4px 14px 0 rgba(0,0,0,.3);cursor: pointer;' : ''" :src="item.pic" />
            <div class="infoData-pname">
              <span>{{ item.post }}</span>
              <span>{{ item.name }}</span>
            </div>
          </div>
          <!-- <div class="infoData-details">{{ item.details }}{{ item.details2 }}</div> -->
        </div>
      </div>
      <div class="jie-cent margin-t-30">第三环节：推进RCEP及中日韩FTA区域合作进程,维护和强化以规则为基础的多边贸易体制</div>
      <!-- 嘉宾信息 -->
      <div class="infoData-list">
        <div class="infoData-item" v-for="(item, index) in infoData3" @mouseover="mouseOver3(index)" @mouseleave="leave()">
          <div class="infoData-info">
            <img :style="infoData_index3 == index ? 'box-shadow: 0 4px 14px 0 rgba(0,0,0,.3);cursor: pointer;' : ''" :src="item.pic" />
            <div class="infoData-pname">
              <span>{{ item.post }}</span>
              <span>{{ item.name }}</span>
            </div>
          </div>
          <!-- <div class="infoData-details">{{ item.details }}{{ item.details2 }}</div> -->
        </div>
      </div>
    </div>
    <!-- 启动仪式 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoData: [
        {
          pic: 'http://hlstore.yimetal.cn/3.png',
          name: '邱国洪',
          post: '中国前驻韩国大使',
          details:
            '曾任中华人民共和国驻大韩民国特命全权大使,1981年在外交部工作,1983年任中国驻日本大使馆职员、三秘1987年任外交部三秘、二秘,1991年任中国驻日本大使馆二秘、一秘,1995年任外交部一秘、副处长、处长,1998年任中国驻日本大使馆参赞,2001年任中国驻日本大使馆公使,2003年8月任中国驻大阪总领馆总领事,2006年2月任外交部亚洲司副司长,2008年11月任中国驻尼泊尔全权特命大使,2011年4月任任外交部涉外安全司司长 ,2014年1月任中国驻韩国特命全权大使，现已离任。',
          details2: ''
        },
        /*{
          pic: 'http://218.59.142.236/static/img/1.png',
          name: '孔铉佑',
          post: '中国驻日本大使',
          details:
            '毕业于日本九州大学经济系。1984.04  进入日本外务省,1999.11  日本国驻华大使馆 一秘,2004.02  日本国驻芝加哥总领事馆 领事,2008.09  日本外务省亚洲大洋洲局中国和蒙古课 课长辅佐,2008.12  日本外务省亚洲大洋洲局日中经济交流室 首席事务官,2011.11  日本外务省国际关系研究司第三课 分析官,2015.02  日本国驻香港总领事馆 首席领事,2018.02  日本外务省亚洲大洋洲局中国和蒙古第一课 地域调整官,2019.12  日本国驻青岛总领事馆 总领事。',
          details2: ''
        },
        {
          pic: 'http://218.59.142.236/static/img/2.png',
          name: '邢海明',
          post: '中国驻韩国大使',
          details:
            '毕业于日本九州大学经济系。1984.04  进入日本外务省,1999.11  日本国驻华大使馆 一秘,2004.02  日本国驻芝加哥总领事馆 领事,2008.09  日本外务省亚洲大洋洲局中国和蒙古课 课长辅佐,2008.12  日本外务省亚洲大洋洲局日中经济交流室 首席事务官,2011.11  日本外务省国际关系研究司第三课 分析官,2015.02  日本国驻香港总领事馆 首席领事,2018.02  日本外务省亚洲大洋洲局中国和蒙古第一课 地域调整官,2019.12  日本国驻青岛总领事馆 总领事。',
          details2: ''
        },*/
        {
          pic: 'http://hlstore.yimetal.cn/4.png',
          name: '井川原贤',
          post: '日本驻青岛总领馆总领事',
          details:
            '毕业于日本九州大学经济系。1984.04  进入日本外务省,1999.11  日本国驻华大使馆 一秘,2004.02  日本国驻芝加哥总领事馆 领事,2008.09  日本外务省亚洲大洋洲局中国和蒙古课 课长辅佐,2008.12  日本外务省亚洲大洋洲局日中经济交流室 首席事务官,2011.11  日本外务省国际关系研究司第三课 分析官,2015.02  日本国驻香港总领事馆 首席领事,2018.02  日本外务省亚洲大洋洲局中国和蒙古第一课 地域调整官,2019.12  日本国驻青岛总领事馆 总领事。',
          details2: ''
        },
        {
          pic: 'http://hlstore.yimetal.cn/5.png',
          name: '金敬翰',
          post: '韩国驻青岛总领馆总领事',
          details:
            '1990年2月延世大学政治外交系毕业。1990.04 进入外交部 (1990.03 第24届外务考试),1990.10–1992.06 韩国外交部情报文化局情报课课长助理,1992.08-1994.06 日本庆应义塾大学访问研究员,1994.06-1995.06 美国UCSD ICAP课程结业,1995.06-1997.02 韩国外交部亚洲局东北亚一课课长助理,1997.02-2000.02 韩国驻日本大使馆二等书记官,2000.02-2002.02 韩国驻蒙古国大使馆一等书记官,2002.02-2002.12 韩国外交部企划调整室企划财政担当官室首席,2003.01-2003.11 韩国外交部亚洲太平洋局西南亚大洋洲课首席,2003.12-2005.02 韩国外交部亚洲太平洋局东北亚一课首席,2005.03-2008.02 韩国驻旧金山总领事馆领事,2008.03-2008.12 韩国外交部在外国民领事局在外国民保护课课,2009.01-2010.02 韩国外交部企划调整室企划财政担当官,2010.02-2012.08 韩国驻美国大使馆参赞,',
          details2:
            '2012.08-2014.08 韩国驻利比亚大使馆公使衔参赞,2014.10-2016.07 韩国京畿道厅经济室国际协力官,2016.07-2018.02 韩国国会外交统一委员会咨询官,2018.03-2020.12 韩国驻日本大使馆公使,2020.12-现在   韩国驻青岛总领事馆总领事。'
        }
      ],
      infoData2: [

        {
          pic: 'http://218.59.142.236/java/storage/aa20211016103534.png',
          name: '孙少军',
          post: '潍柴动力股份有限公司董事及执行总裁',
          details:
            '潍柴动力股份有限公司董事及执行总裁;1988年加入潍坊柴油机厂,历任潍坊柴油机厂技术中心主任、总工程师,湘火炬汽车集团股份有限公司董事等职。',
          details2: '现任潍柴控股集团有限公司董事,潍柴重机股份有限公司董事;研究员级高级工程师,工学博士,山东省人民政府泰山学者特聘专家。'
        },
        {
          pic: 'http://hlstore.yimetal.cn/7.png',
          name: '大和健一',
          post: '日本三菱日联银行执行董事',
          details:
            '1991年4月 株式会社东京银行入行 八重洲通分行，1995年4月 株式会社东京银行 纽约分行，1998年4月 株式会社东京三菱银行 商品开发部 证券小组，2001年1月 株式会社东京三菱银行 经营企划室 企划组，2004年5月 三菱证券出向，2009年11月 株式会社三菱东京UFJ银行 结构融资部 房地产融资室，2011年9月 株式会社三菱UFJ金融集团出向 财务企划部 次长，2014年5月 株式会社三菱东京UFJ银行 国际企划部 副部长，2016年5月 株式会社三菱东京UFJ银行 香港分行 副分行长，2017年5月 株式会社三菱东京UFJ银行 香港总负责人及香港分行行长，2017年6月 株式会社三菱东京UFJ银行执行董事,香港总负责人及香港分行行长',
          details2:
            '，2018年4月 株式会社三菱UFJ银行执行董事,香港总负责人及香港分行行长，2018年7月 株式会社三菱UFJ银行执行董事,香港总负责人及香港分行行长兼亚洲法人营业统括部长，2019年8月 株式会社三菱UFJ银行执行董事，三菱日联银行(中国)有限公司 董事兼行长'
        },
        {
          pic: 'http://hlstore.yimetal.cn/8.png',
          name: '高熙锡',
          post: '韩国希杰集团中国总部副总裁',
          details: '',
          details2: ''
        },
        {
          pic: 'http://hlstore.yimetal.cn/9.jpg',
          name: '平野雅之',
          post: '日本丸红株式会社中国副总代表',
          details:
            '1985年入职丸红株式会社，曾任丸红本部地球环境项目部副部长、丸红（北京）商业贸易公司成套设备部部长、丸红株式会社海洋事业室室长、丸红（北京）商业贸易公司董事长兼总经理等。现任日本丸红株式会社中国副总代表、丸红（北京）商业贸易有限公司董事长、丸红（青岛）有限公司董事长。',
          details2: ''
        }
      ],
      infoData3: [
        /*{
          pic: 'http://hlstore.yimetal.cn/10.png',
          name: '于风贵',
          post: '山东省贸促会党组书记、会长',
          details: '山东大学儒学高等研究院中国语言文学（中国民间文学）专业文学博士。1984年7月参加工作，现任山东省贸促会会长、党组书记。',
          details2: ''
        },*/
        {
          pic: 'http://hlstore.yimetal.cn/11.png',
          name: '欧渤芊（视频致辞）',
          post: '中日韩合作秘书处秘书长',
          details:
            '曾任中华人民共和国驻格林纳达特命全权大使，1989 - 1990 中华人民共和国外交部科员 ，1990 - 1993 外交部非洲司科员、随员 ，1993 - 1996 驻乌干达共和国大使馆随员、三秘 ，1996 - 2000 外交部非洲司三秘、副处长、处长 ，2000 - 2001 陕西省西安市新城区委常委、副书记 ，2001 - 2003 外交部新闻司参赞 ，2003 - 2007 驻澳大利亚联邦大使馆参赞 ，2007 - 2008 外交部政策研究司参赞 ，2008 - 2012 外交部办公厅副主任 ，2012 - 2017 驻格林纳达大使 ，2017 - 2021 中国人民外交学会副会长 ，2021 - 中日韩合作秘书处秘书长。',
          details2: ''
        },
        {
          pic: 'http://hlstore.yimetal.cn/12.png',
          name: '笠井爚雄（视频致辞）',
          post: '日本国际贸易促进协会理事长',
          details: '',
          details2: ''
        },
        {
          pic: 'http://hlstore.yimetal.cn/13.jpg',
          name: '赵忠秀',
          post: '山东财经大学校长',
          details:
            '经济学博士，教授，博士生导师，享受国务院政府特殊津贴专家。外经济贸易大学党委副书记、副校长；山东财经大学校长、党委副书记。学术兼职：Journal of Chinese Economic and Foreign Trade Studies （Emerald，ISSN: 1754-4408）主编。《财贸经济》编委。全国国际商务专业学位研究生教育指导委员会委员兼秘书长。北京市学位委员会经济学（2组）学科评议组成员。中国世界经济学会副会长。中国国际贸易学会常务理事。中国国际税收研究会理事。商务部“商务时评专家”。International Academy for Global Business and Trade 会长（2009-2011）1988年，本科毕业于北京大学国际经济系，获学士学位；1991年，中共中央党校世界经济专业研究生毕业，获硕士学位；2000年，对外经济贸易大学国际贸易学专业博士研究生毕业，获经济学博士学位。',
          details2:
            '1997年，英国曼彻斯特大学访问学者，2003年，美国密歇根州立大学访问学者。1991年7月，在对外经济贸易大学国际经济贸易学院任教。1997年6月，任对外经济贸易大学国际经济贸易学院副院长，2005年4月，任对外经济贸易大学国际经济贸易学院党总支书记、副院长，2006年1月至2011年7月，任对外经济贸易大学国际经济贸易学院院长。2010年4月至2011年5月，对外经济贸易大学校长助理，2011年3月至2011年9月，兼任对外经济贸易大学人力资源处处长。2011年5月至2018年1月，对外经济贸易大学党委常委、副校长。2018年1月至今，对外经济贸易大学党委副书记、副校长。2018年12月，任山东财经大学校长、党委副书记。'
        }
      ],
      infoData_index: null,
      infoData_index2: null,
      infoData_index3: null,
      infoData_index4: null
    };
  },
  mounted() {
  },

  methods: {
    mouseOver(index){
      this.infoData_index = index
    },
    mouseOver2(index){
      this.infoData_index2 = index
    },
    mouseOver3(index){
      this.infoData_index3 = index
    },
    mouseOver4(index){
      this.infoData_index4 = index
    },
    leave(){
      this.infoData_index = null
      this.infoData_index2 = null
      this.infoData_index3 = null
      this.infoData_index4 = null
    },
  }
};
</script>

<style>
.fontStyle {
  font-family: 宋体;
  text-align: center;
  width: 1289px;
  margin: 0 auto;
}
.f-title{
  font-size: 50px;
  margin-top: 90px;
}
.open-info-title {
  display: block;
  margin-top: 70px;
  padding: 15px 0;
  border: 2px solid #d3e3ff;
  line-height: 1;
  font-size: 36px;
  margin-bottom: 100px;
}
.open-info-title2 {
  font-size: 32px;
  border-bottom: 10px solid #d3e3ff;
  line-height: 9px;
  margin-bottom: 60px;
  text-align: left;
}
.jb-info {
  padding-bottom: 120px;
}
.jb-info img {
  height: 300px;
  margin-bottom: 60px;
  border-radius: 4px;
  margin-top: 60px;
}
.jb-infos {
  display: flex;
  align-items: center;
}
.link-line {
  border-bottom: 1px solid #d3e3ff;
  height: 1px;
  width: 50%;
}
.jb-info-pname {
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  line-height: 40px;
  padding: 0 20px;
}
.jie {
  padding-bottom: 30px;
  font-size: 28px;
}
.jie-cent {
  display: inline-block;
  text-align: left;
  line-height: 2;
  font-size: 20px;
  width: 100%;
}
.infoData-list {
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-between;
}
.infoData-item {
  margin-top: 60px;
  width: 48%;
  text-align: left;
}
.infoData-item img {
  height: 223px;
  margin-right: 25px;
  border-radius: 4px;
}
.infoData-info {
  display: flex;
  margin-bottom: 25px;
  align-items: flex-end;
}
.infoData-pname {
  display: flex;
  flex-direction: column;
  line-height: 30px;
}
.infoData-details {
  line-height: 1.8;
  font-size: 14px;
  font-family: 宋体;
  letter-spacing: 1px;
}
.margin-t-30 {
  margin-top: 100px;
}
</style>
