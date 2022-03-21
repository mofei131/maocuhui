<template>
  <iframe id="admin" :src="`/admin?token=${token}`" />
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  created() {
    if (window.localStorage["token"]) {
      this.token = window.localStorage["token"];
    } else {
      // alert("操作异常，请检查是否存在token");
      this.$router.replace({ name: "login" });
    }
  },
};
</script>

<style scoped>
#admin {
  min-height: 100vh;
  width: 100%;
  border: none;
}
</style>
