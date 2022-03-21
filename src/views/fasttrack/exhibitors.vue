<template>
  <div class="FastExhibitors">
    <Fasttrack :title="$t('exhibitors.t7')" :data="list" />
  </div>
</template>

<script>
import Fasttrack from "./compontent/fasttrack"
export default {
  name: 'FastExhibitors',
  components: { Fasttrack },
  data() {
    return {}
  },
  computed: {
    list() {
      return [
        {
          img: require("@/assets/images/fasttrack/zs_icon_1.png"),
          tit: this.$t('exhibitors.t1'),
          url: "/register?tab=1"
        },
        {
          img: require("@/assets/images/fasttrack/zs_icon_2.png"),
          tit: this.$t('exhibitors.t2'),
          url: "/logIn?tab=1"
        },
        {
          img: require("@/assets/images/fasttrack/zs_icon_3.png"),
          tit: this.$t('exhibitors.t3'),
          url: "/exhibitorService/visitProcedure"
        },
        {
          img: require("@/assets/images/fasttrack/zs_icon_4.png"),
          tit: this.$t('exhibitors.t4'),
          url: "/exhibitionList"
        },
        {
          img: require("@/assets/images/fasttrack/zs_icon_5.png"),
          tit: this.$t('exhibitors.t5'),
          url: "/conferenceLive"
        },
        {
          img: require("@/assets/images/fasttrack/zs_icon_6.png"),
          tit: this.$t('exhibitors.t6'),
          url: ""
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.FastExhibitors {
}
</style>
