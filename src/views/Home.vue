<template>
  <div class="home">
    <iframe frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&id=99"></iframe>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script>
// import { vanButton } from "vant";
export default {
  name: "home",
  components: {
    // "van-button": vanButton
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.$api);
    this.test();
  },
  activated() {},
  deactivated() {},
  update() {},
  beforeDestroy() {},
  methods: {
    test() {
      this.$api.test.getVideoServe({ type: "10210001" }).then(res => {
        console.log(res);
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>
<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>