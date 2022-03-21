<template>
  <div class="filePreview">
    <template v-if="file.url">
      <pdf v-for="i in numPages" :key="i" :page="i" :src="file.url"></pdf>
    </template>
    <div v-else>暂无数据</div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  name: "filePreview",
  components: {
    pdf,
  },
  data() {
    return {
      loading: false,
      name: null,
      numPages: 0,
      file: {},
    };
  },
  watch: {
    $route(val) {
      this.getFileDetail();
    },
  },
  mounted() {
    console.log(this.$route.query);

    if (this.$route.query && this.$route.query.name) {
      this.name = this.$route.query.name;
    }

    console.log(this.$route.params);

    if (this.$route.params && this.$route.params.name) {
      this.name = this.$route.params.name;
    }

    this.getFileDetail();
  },
  methods: {
    getFileDetail() {
      this.loading = true;
      return new Promise((r, e) => {
        this.$http
          .get(`${this.$http.adornUrl("/file/detail")}`, {
            params: {
              name: this.name,
              type: 3,
            },
          })
          .then(({ data }) => {
            if (data.code === 1) {
              this.loading = false;
              this.file = data.data;
              pdf.createLoadingTask(this.file.url).promise.then((pdf) => {
                this.numPages = pdf.numPages;
              });
            } else {
              this.loading = false;
            }
          })
          .catch(() => {});
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.filePreview {
  padding: 50px;
  margin-left: 242px;
}
</style>