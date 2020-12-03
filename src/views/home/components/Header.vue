<template>
  <div class="home-header-container">
    <div class="header-left">
      <span class="iconfont iconzuo"></span>
    </div>
    <div class="header-middle">
      <span class="iconfont iconsearch"></span>
      <span class="placeholder">输入城市</span>
    </div>
    <div class="header-right">
      <span>北京</span>
      <span class="iconfont iconxiasanjiaoxing"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  components: {},
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  activated () {},
  methods: {}
}
</script>

<style lang='less' scoped>
@import '~@/style/variable.less';

.home-header-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: @headerBgColor;
  color: #fff;
  .header-left {
    width: 20px;
    padding: 0 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .header-right {
    width: 55px;
    font-size: 14px;
    margin: 0 5px;
    span {
      display: inline-block;
      padding: 0 2px;
    }
  }
  .header-middle {
    flex: 1;
    background-color: #fff;
    height: 30px;
    border-radius: 5px;
    color:#e4e7ea;
    font-size: 14px;
    line-height: 30px;
    padding: 0 10px;
    border: none;
    .iconsearch {
      margin-right: 3px;
    };
  }
}
</style>
