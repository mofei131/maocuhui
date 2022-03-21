<template>
  <el-dialog
    :title="title"
    v-if="visible"
    :visible.sync="visible"
    width="800px"
    :destroy-on-close="true"
    :before-close="close"
  >
    <video
      style="width: 100%; height: 100%"
      :src="url"
      controls
      autoplay
    ></video>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style>
.form {
  padding-left: 20px;
  padding-right: 30px;
  padding-bottom: 23px;
}
.action {
  display: flex;
  justify-content: center;
}
</style>