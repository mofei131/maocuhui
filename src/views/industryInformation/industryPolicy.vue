<template>
  <div>
    <div class="right_Content">
      <div class="headName">{{ title }}</div>
      <hr />
      <ul class="mediaCoverageUl">
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="toPage(item.url)"
        >
          <div class="mediaCoverage_font">
            <div>
              <span>{{ item.title }}</span>
            </div>
            <div class="more">更多>></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { formatContent } from "@/utils/index";
export default {
  data() {
    return {
      formatContent: formatContent,
      title: "行业报道",
      dataList: [
        {
          code: "N202",
          url: "http://m.elecfans.com/article/1335138.html",
          title: "未来物联网的10种发展趋势",
        },
        {
          code: "N203",
          url: "https://new.qq.com/omn/20201021/20201021A03BAG00.html",
          title: "物联网和人工智能结合互惠共存 赋能更多意义",
        },
        {
          code: "N214",
          url:
            "https://baijiahao.baidu.com/s?id=1681054956594238630&wfr=spider&for=pc",
          title: "瞭望丨以智能制造为主攻方向实现更高质量发展",
        },
        {
          code: "N215",
          url: "http://finance.eastmoney.com/a/202010211671326651.html",
          title: "智能制造装备需求日益增强 中国将是最大的智能制造解决方案市场",
        },
        {
          code: "N216",
          url:
            "https://baijiahao.baidu.com/s?id=1681139367048659222&wfr=spider&for=pc",
          title: "打造VR+智能制造生态——新松VR研究院新品在全球工业互联网大会布",
        },
        {
          code: "N217",
          url: "https://new.qq.com/rain/a/20201020A03XNG00",
          title: "挑战智能制造 要从“看不到的转型”下手",
        },
        {
          code: "N220",
          url: "http://www.robot-china.com/news/202010/21/64249.html",
          title: "智能制造行业：国内工业机器人产量增速+51.4%",
        },
        {
          code: "N222",
          url:
            "https://baijiahao.baidu.com/s?id=1681046602894580462&wfr=spider&for=pc",
          title: "“鼎新”带动“革故”，智能制造助力高质量发展超越",
        },
        {
          code: "N223",
          url:
            "https://baijiahao.baidu.com/s?id=1680317904117658147&wfr=spider&for=pc",
          title: "智能制造发展的新趋势与新挑战",
        },
        {
          code: "N229",
          url:
            "https://baijiahao.baidu.com/s?id=1681111895044799183&wfr=spider&for=pc",
          title:
            "华为探索智慧城市建设之路——打造城市智能生命体，共创城市美好生活",
        },
        {
          code: "N230",
          url: "https://news.e23.cn/shandong/2020-10-22/2020A2200010.html",
          title:
            "山东加快推进新型智慧城市建设 到2025年力争打造3个以上五星级标杆城市",
        },
        {
          code: "N231",
          url: "http://www.chinajsb.cn/html/202010/21/14574.html",
          title:
            "中国城市科学研究会智慧城市联合实验室首席科学家 万碧玉：让中国标准引领世界潮流",
        },
        {
          code: "N238",
          url: "http://www.d1net.com/scity/industry/567174.html",
          title: "无人机将在未来的智慧城市中扮演重要角色",
        },
        {
          code: "N239",
          url:
            "https://baijiahao.baidu.com/s?id=1681056142700756801&wfr=spider&for=pc",
          title: "巨匠智慧城市：开放与合作将成智慧城市未来发展关键推动力",
        },
        {
          code: "N242",
          url: "http://www.paoku.com.cn/tech/2020/1020/65922.html",
          title: "共享数字红利 智慧生活触手可及",
        },
        {
          code: "N244",
          url:
            "https://baijiahao.baidu.com/s?id=1681048287616082245&wfr=spider&for=pc",
          title: "以智慧显示为核心 TCL为用户打造全场景智慧生活体验",
        },
        {
          code: "N247",
          url:
            "https://baijiahao.baidu.com/s?id=1681054438154262226&wfr=spider&for=pc",
          title: "OPPO大举进军智能生活，高性价比智能奢华才是“好饭不怕晚”",
        },
        {
          code: "N248",
          url:
            "https://baijiahao.baidu.com/s?id=1680353877711348255&wfr=spider&for=pc",
          title: "5G赋能数字中国“点亮”智慧生活",
        },
        {
          code: "N249",
          url:
            "https://baijiahao.baidu.com/s?id=1680321491392302170&wfr=spider&for=pc",
          title: "让老小区变得更智慧，让老居民乐享新生活",
        },
        {
          code: "N250",
          url:
            "https://baijiahao.baidu.com/s?id=1680564635241825278&wfr=spider&for=pc",
          title:
            "帮助老年人更好地融入智能生活——破解老年人面临的“数字门槛”实地调查",
        },
        {
          code: "N251",
          url:
            "https://baijiahao.baidu.com/s?id=1680529057563560313&wfr=spider&for=pc",
          title: "2020年中国国际信息通信展在京召开 中国联通展现智慧新生活",
        },
        {
          code: "N252",
          url:
            "https://baijiahao.baidu.com/s?id=1678036147721899735&wfr=spider&for=pc",
          title: "终端背后的智慧生活版图之争：荣耀、苹果上演智能手表大战",
        },
        {
          code: "N253",
          url:
            "https://baijiahao.baidu.com/s?id=1678046299403110240&wfr=spider&for=pc",
          title: "百度世界2020：小度“破圈”引领智能生活新形态，让科技照进现实",
        },
        {
          code: "N254",
          url:
            "https://baijiahao.baidu.com/s?id=1677867828190085746&wfr=spider&for=pc",
          title: "华为HarmonyOS 2.0来了 全场景智慧生活近在眼前",
        },
        {
          code: "N256",
          url:
            "https://baijiahao.baidu.com/s?id=1681225263512253310&wfr=spider&for=pc",
          title: "5G为智慧农业发展加速",
        },
        {
          code: "N257",
          url: "https://new.qq.com/omn/20201021/20201021A0DE9700.html",
          title: "行业观察｜智慧农业是农业发展的新方向",
        },
        {
          code: "N258",
          url:
            "https://baijiahao.baidu.com/s?id=1681308378653807529&wfr=spider&for=pc",
          title:
            "权威发布丨山东鼓励支持发展乡村产业新模式新业态 加快推进济南青岛潍坊智慧农业试验区建设",
        },
        {
          code: "N261",
          url: "https://new.qq.com/rain/a/20201020a09eqj00",
          title: "不用羡慕外国农业了，云南传来好消息，中国智慧农业正在到来",
        },
        {
          code: "N263",
          url:
            "https://baijiahao.baidu.com/s?id=1680406657219249557&wfr=spider&for=pc",
          title: "新型智慧农业 绿色安全生产",
        },
        {
          code: "N265",
          url:
            "https://baijiahao.baidu.com/s?id=1681141048111031690&wfr=spider&for=pc",
          title: "高科技助力农业腾飞！植保无人机为“智慧农业”插上了“翅膀”",
        },
        {
          code: "N269",
          url:
            "https://baijiahao.baidu.com/s?id=1679856542725672876&wfr=spider&for=pc",
          title: "中国的拼多多转向智慧农业来促进疫情后增长",
        },
        {
          code: "N271",
          url:
            "https://baijiahao.baidu.com/s?id=1680005824821239867&wfr=spider&for=pc",
          title: "道济农业丨浙江力量！乌镇智慧农业携四大板块拥军强国",
        },
        {
          code: "N272",
          url:
            "https://baijiahao.baidu.com/s?id=1680567203891150100&wfr=spider&for=pc",
          title: "谷歌“X实验室”再推智慧农业新项目，曾诞生无人车、送货无人机",
        },
        {
          code: "N276",
          url: "https://new.qq.com/rain/a/20201012A07DQZ00",
          title: "利用物联网技术构建智慧农业，改造1亿亩盐碱地种植海水稻",
        },
        {
          code: "N278",
          url:
            "https://baijiahao.baidu.com/s?id=1677887404561287764&wfr=spider&for=pc",
          title: "山东寿光：智慧农业科技园创新提升“寿光模式”",
        },
        {
          code: "N281",
          url:
            "https://baijiahao.baidu.com/s?id=1680968805607155644&wfr=spider&for=pc",
          title: "工业机器人替换人工作业的优势？众力机器人助力企业提升效益",
        },
        {
          code: "N284",
          url:
            "https://baijiahao.baidu.com/s?id=1651919295501297451&wfr=spider&for=pc",
          title: "阿里云张建锋：工业互联网不是工业自动化",
        },
        {
          code: "N290",
          url: "https://new.qq.com/rain/a/20201022A0GL2B00",
          title: "当机器人服务渐成标配，智慧酒店是走向跨越还是步入歧途？",
        },
        {
          code: "N293",
          url: "http://news.yesky.com/hotnews/458/716989958.shtml",
          title: "建筑行业新趋势：建筑工地”智慧大脑”惊艳智慧城市应用展",
        },
        {
          code: "N296",
          url: "http://m.elecfans.com/article/1340932.html",
          title: "智能制造已是大势所趋，企业应共同推进智能制造的产业落地。",
        },
        {
          code: "N299",
          url:
            "https://baijiahao.baidu.com/s?id=1677890781124174266&wfr=spider&for=pc",
          title: "百度世界2020联合央视呈现：AI影响生活，开启万物智能",
        },
        {
          code: "N317",
          url: "https://tech.china.com/article/20200924/092020_612018.html",
          title: "华为云发布物联网生态工作台，加速物联网技术与企业业务融合",
        },
        {
          code: "N320",
          url: "https://www.sohu.com/a/426605260_119038",
          title: "【2020·指尖城市】礼嘉智慧公园：智慧生活 未来触手可及 ",
        },
        {
          code: "N328",
          url:
            "https://baijiahao.baidu.com/s?id=1680314300850336575&wfr=spider&for=pc",
          title: "高新区科技局领导到汇金海智慧农业研究院专题考察调研",
        },
        {
          code: "N332",
          url:
            "https://baijiahao.baidu.com/s?id=1680613377791120649&wfr=spider&for=pc",
          title: "物联网将是企业未来的基配",
        },
        {
          code: "N335",
          url:
            "https://baijiahao.baidu.com/s?id=1681127199383670827&wfr=spider&for=pc",
          title: "光谷物联港：物联网商业崛起，凭何成为商业模式新宠？",
        },
        {
          code: "N336",
          url: "http://www.fubaore.com/loushi/2020/1021/102020_26098.html",
          title: "有恒科技赋能“物联网+智能”回收，打造再生资源回收新模式",
        },
        {
          code: "N340",
          url:
            "https://baijiahao.baidu.com/s?id=1681299868159141233&wfr=spider&for=pc",
          title: "5G+物联网，如何拥抱医疗健康？健康物联网产业沙龙给你答案",
        },
        {
          code: "N344",
          url:
            "https://baijiahao.baidu.com/s?id=1681211448650324338&wfr=spider&for=pc",
          title: "全国首家市域物联网运营中心在沪启用，共布设510万余个传感设备",
        },
        {
          code: "N345",
          url: "https://new.qq.com/omn/20201022/20201022A0EBDN00.html",
          title: "中国移动已形成成熟物联网方案助力酒店运营新模式",
        },
        {
          code: "N348",
          url:
            "https://baijiahao.baidu.com/s?id=1681301784122717959&wfr=spider&for=pc",
          title: "中国首个卫星物联网“行云工程”完成首阶段建设",
        },
        {
          code: "N376",
          url: "https://www.fromgeek.com/daily/1044-352798.html",
          title: "这台无接触、高效率送餐机器人备受央视好评",
        },
        {
          code: "N378",
          url:
            "http://it.enorth.com.cn/system/2020/10/19/050569608.shtml?utm_source=ufqinews",
          title: "当人工智能遇上服务机器人 机器人被赋予了人类的“灵魂”",
        },
        {
          code: "N381",
          url: "https://news.pconline.com.cn/1378/13788846.html",
          title: "这个救援机器人在被扔出来后能像猫一样平稳着陆",
        },
        {
          code: "N382",
          url: "http://www.abi.com.cn/news/htmfiles/2020-10/230649.shtml",
          title: "大疆重新上路：想让所有的机器人都心明眼亮有智慧 ",
        },
        {
          code: "N383",
          url: "https://www.sohu.com/a/426268090_118778",
          title: "双目摄像头！AI物体识别！石头扫地机器人T7 Pro避障更聪明 ",
        },
        {
          code: "N385",
          url:
            "https://baijiahao.baidu.com/s?id=1681230887859007780&wfr=spider&for=pc",
          title: "这个25万刀一台的人形机器人Digit正在更多产业取代人类！",
        },
        {
          code: "N388",
          url:
            "https://baijiahao.baidu.com/s?id=1681231494833928834&wfr=spider&for=pc",
          title: "2019年中国消防机器人市场规模分析：未来市场需求前景广阔",
        },
        {
          code: "N389",
          url: "http://www.xhyb.net.cn/news/jd/2020/1021/102020_131280.html",
          title: "斯坦德首款移动复合消毒机器人赋能自动化防疫消杀",
        },
        {
          code: "N392",
          url:
            "https://baijiahao.baidu.com/s?id=1681217483568957639&wfr=spider&for=pc",
          title: "全球前沿技术趋势：脑机接口、软体机器人、基因编辑等在列",
        },
        {
          code: "N393",
          url: "https://tech.ifeng.com/c/80lT7pNUDN2",
          title: "实在智能携手国家电网打造“明婺机器人”，开启智慧人力资源2.0",
        },
        {
          code: "N397",
          url:
            "https://baijiahao.baidu.com/s?id=1681232959598759037&wfr=spider&for=pc",
          title: "叠香槟塔/跳机械舞/装风扇……快来看“机器人”现场battle!",
        },
        {
          code: "N398",
          url: "https://dy.163.com/article/FPHUCKI00514A1CA.html",
          title: "库卡中国举行新品发布会！多款自主研发机器人亮相",
        },
      ],
    };
  },
  methods: {
    //跳转页面
    toPage(url) {
      window.open(url)
    }
  },
};
</script>
<style scoped>
.right_Content {
  float: left;
  width: 960px;
  margin: 40px 0 0 50px;
}
.contentImg {
  width: 200px;
  height: 140px;
}
.timeFont {
  float: right;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #888888;
}

.mediaCoverageUl {
  padding: 20px 0;
}
.mediaCoverageUl li {
  display: flex;
  padding: 20px 0;
}
.mediaCoverage_font {
  flex: 1;
  margin-left: 32px;
}
.mediaCoverage_font div:nth-child(1) {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #fe7e36;
  line-height: 40px;
}
.newsConten {
  margin: 0 0 21px 0;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  line-height: 28px;
  height: 56px;
  color: #888888;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.more {
  height: 13px;
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #2884ec;
  line-height: 24px;
  float: right;
  cursor: pointer;
}
</style>
