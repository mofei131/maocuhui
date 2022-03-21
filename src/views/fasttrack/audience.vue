<template>
  <div class="Audience">
    <Fasttrack :title="$t('audience.t7')" :data="list" />
  </div>
</template>

<script>
import Fasttrack from "./compontent/fasttrack"
export default {
  name: 'Audience',
  components: { Fasttrack },
  data() {
    return {}
  },
  computed: {
    list() {

if (this.$store.state.user.info.type== 2) {
      return [
        {
          img: require("@/assets/images/fasttrack/gz_icon_1.png"),
          tit: this.$t('audience.t1'),
          url: "/register?tab=2"
        },
        {
          img: require("@/assets/images/fasttrack/gz_icon_2.png"),
          tit: this.$t('audience.t2'),
          url: "/logIn?tab=2"
        },
        // {
        //   img: require("@/assets/images/fasttrack/gz_icon_3.png"),
        //   tit: this.$t('audience.t3'),
        //   url: "/audienceService/visitGuide"
        // },
        {
          img: require("@/assets/images/fasttrack/gz_icon_4.png"),
          tit: this.$t('audience.t4'),
          url: "/exhibitionList?type=1"
        },
        {
          img: require("@/assets/images/fasttrack/gz_icon_5.png"),
          tit: this.$t('audience.t5'),
          url: "/conferenceLive"
        },
        {
          img: require("@/assets/images/fasttrack/gz_icon_6.png"),
          tit: this.$t('audience.t6'),
          url: "/pavilionList"
        }
      ]
    } else {
      return [
        {
          img: require("@/assets/images/fasttrack/gz_icon_1.png"),
          tit: this.$t('audience.t1'),
          url: "/register?tab=2"
        },
        // {
        //   img: require("@/assets/images/fasttrack/gz_icon_2.png"),
        //   tit: this.$t('audience.t2'),
        //   url: "/logIn?tab=2"
        // },
        // {
        //   img: require("@/assets/images/fasttrack/gz_icon_3.png"),
        //   tit: this.$t('audience.t3'),
        //   url: "/audienceService/visitGuide"
        // },
        {
          img: require("@/assets/images/fasttrack/gz_icon_4.png"),
          tit: this.$t('audience.t4'),
          url: "/exhibitionList?type=1"
        },
        {
          img: require("@/assets/images/fasttrack/gz_icon_5.png"),
          tit: this.$t('audience.t5'),
          url: "/conferenceLive"
        },
        {
          img: require("@/assets/images/fasttrack/gz_icon_6.png"),
          tit: this.$t('audience.t6'),
          url: "/pavilionList"
        }
      ]
    }


    }
  },
  created() {},
  mounted() {

  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.Audience {
}
</style>
