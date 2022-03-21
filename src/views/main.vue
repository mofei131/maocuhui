<template>
  <div>
    <!-- 头部导航 -->
    <header-nav v-show="homePage"></header-nav>
    <header-nav3 v-show="!homePage"></header-nav3>
    <!-- 内容部分 -->
    <router-view></router-view>
    <!-- 底部 -->
    <commonFooter></commonFooter>
  </div>
</template>
<script>
// import headerNav from '@/components/headerNav'
import headerNav3 from '@/components/headerNav3'
import headerNav from '@/components/headerNavNew'
import commonFooter from '@/components/commonFooterNew'
import router from "@/router"
export default {
  components:{headerNav,headerNav3,commonFooter},
  data() {
    return {
      homePage: true
    };
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        let toPath = val.path
        this.setHomePage(toPath)
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    let path = router.app._route.path
    this.setHomePage(path)
  },
  methods: {
    setHomePage(toPath){
      if(toPath == '/home') {
        this.homePage = true
      } else {
        this.homePage = false
      }
    }
  }
};
</script>
