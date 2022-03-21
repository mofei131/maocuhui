<template>
  <div class="StaticPage">
    <div >
      <p>

        <el-image
          style="width: 900px"
          src="http://218.59.142.236:9002/java/storage/0ba068f0377f48cd9588c0ef739c1e84.jpg"
          :preview-src-list="srcList">
        </el-image>
      </p>
    </div>

  </div>
</template>
<script>
export default {
  name: 'StaticPage',
  data() {
    return {
      loading: false,
      id: 0,
      srcList: [
        'http://218.59.142.236:9002/java/storage/0ba068f0377f48cd9588c0ef739c1e84.jpg'
      ],
      html: ''
    };
  },
  watch: {
    $route(val) {
      this.getList()
    }
  },
  mounted() {
     console.log(this.$route.query);

    if (this.$route.query && this.$route.query.id) {
      this.id = this.$route.query.id
    }

    console.log(this.$route.params);

    if (this.$route.params && this.$route.params.id) {
      this.id = this.$route.params.id
    }

    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      return new Promise((r, e) => {
        this.$http.get(`${this.$http.adornUrl('/static/page/detail')}`, { params: { id: this.id } } ).then(({ data }) => {
          if (data.code === 1) {
            this.loading = false
            this.html =  data.data.content
          } else {
            this.loading = false
          }
        }).catch(() => {})
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.StaticPage {
  padding: 50px;
  margin-left: 242px;
}
</style>
