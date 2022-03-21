<template>
  <div>
    <div class="right_Content">
      <div class="headName">{{ title }}</div>
      <hr />
      <img v-for="img of images" :key="img" :src="img" alt="" srcset="" />
    </div>
  </div>
</template>
<script>
import { formatContent } from "@/utils/index";
export default {
  data() {
    return {
      formatContent: formatContent,
      title: "行业标准",
      images: [],
    };
  },
  methods: {},
  mounted() {
    for (let index = 1; index < 33; index++) {
      this.images.push(`static/images/industryInformation/industryLabel/${index}.jpg`);
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
img{
  width: 100%;
  height: 100%;
}
</style>
