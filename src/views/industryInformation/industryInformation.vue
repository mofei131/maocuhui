<template>
  <div>
    <!-- <div class="back commonContent" @click="goBack()">{{ $t("back") }}</div> -->
    <img
      class="rotation_img"
      src="https://file.mepxns.info/weifang-ai-expo/d4230203e68a4ea6a4043caecca7f645.jpg"
      alt
    />
    <!-- <div class="exhibitionOverviewName commonContent">行业资讯-记者服务</div> -->
    <hr />
    <div>
      <div class="commonContent eo_none_content">
        <div class="left_Content">
          <div class="exhibition_content">
            <span>{{ $t("industryInformation.nav") }}</span>
            <br />
            <br />
            <span>Industry information</span>
          </div>
          <ul class="exhibitionOverviewUl">
            <li
              v-for="(i, index) in list"
              :key="index"
              :class="{ act: type === i.type }"
              @click="showContent(index)"
            >
              <span>{{ i.name }}</span>
              <img
                v-show="type === i.type"
                class="liRightImg"
                src="../../assets/images/exhibitionOverview/liRightImg.png"
              />
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <Mylogin :visible.sync="visible" />
    <Myfbgx :visible.sync="fbgxVisible" :mytype="1" />
  </div>
</template>
<script>
import Mylogin from "@/views/exhibition/compontent/mylogin";
import Myfbgx from "@/views/exhibition/compontent/fbgx";
export default {
  components: { Mylogin, Myfbgx },
  data() {
    return {
      type: 21,
      fbgxVisible: false,
      visible: false,
    };
  },
  computed: {
    list() {
      return [
        {
          name: this.$t("industryInformation.t1"),
          type: 21,
          url: "/industryInformation/industryLabel",
        },
        {
          name: this.$t("industryInformation.t2"),
          type: 22,
          url: "/industryInformation/industryData",
        },
        {
          name: this.$t("industryInformation.t3"),
          type: 23,
          url: "/industryInformation/industryReport",
        },
        {
          name: this.$t("industryInformation.t4"),
          type: 24,
          url: "/industryInformation/industryPolicy",
        },
        {
          name: this.$t("industryInformation.t5"),
          type: 25,
          url: "/industryInformation/industryInformation",
        },
        {
          name: this.$t("industryInformation.t6"),
          type: 26,
          url: "/industryInformation/supplyAndDemandRelease",
        },
      ];
    },
  },
  watch: {
    $route() {
      this.routeWatch();
    },
  },
  mounted() {
    this.routeWatch();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showContent(index) {
      if (this.type === this.list[index].type) return;
      this.type = this.list[index].type;
      this.$router.push({
        path: this.list[index].url,
      });
    },
    fbgxHandle() {
      this.islogin().then(() => {
        this.fbgxVisible = true;
      });
    },
    islogin() {
      return new Promise((r, e) => {
        if (localStorage.getItem("token")) {
          r();
        } else {
          this.visible = true;
          e();
        }
      });
    },
    routeWatch() {
      for (const index in this.list) {
        if (this.list[index].url === this.$route.path) {
          this.type = this.list[index].type;
        }
      }

      switch (this.type) {
        case 26:
          this.fbgxHandle();
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
.rotation_img {
  width: 100%;
  height: 100%;
  display: block;
}
.exhibitionOverviewName {
  height: 65px;
  line-height: 65px;
  font-size: 20px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: #2f0954;
}
hr {
  margin: 0;
}
.left_Content {
  float: left;
  margin-top: 40px;
  border: 1px solid #ccc;
}
.exhibition_content {
  width: 240px;
  height: 100px;
  text-align: center;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 0;
  box-sizing: border-box;
  background: linear-gradient(90deg, #867df7, #453cb1, #3a35ad, #3a35ad);
}
.exhibition_content span:nth-child(1) {
  font-size: 30px;
}
.exhibition_content span:nth-child(2) {
  font-size: 14px;
}
.exhibitionOverviewUl {
  cursor: pointer;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
}
.exhibitionOverviewUl li {
  width: 200px;
  height: 56px;
  border-radius: 2px;
  margin: 20px auto;
  line-height: 56px;
  padding-left: 38px;
  box-sizing: border-box;
  background: #f5f0f0
    url("../../assets/images/exhibitionOverview/liLeftImg.png") no-repeat;
  background-position: 14px center;
  background-size: 4px 24px;
}
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
}
</style>