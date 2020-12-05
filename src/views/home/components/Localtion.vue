<template>
  <div class="home-localtion-container border-top">
    <div class="location-item border-right">
      <span class="iconfont icondingwei"></span>
      <p>北京大兴</p>
    </div>
    <div class="location-item">
      <span class="iconfont icondiqiu"></span>
      <p>玩水季</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Localtion',
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
.home-localtion-container {
  display: flex;
  align-items: center;
  .location-item {
    flex: 1;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
    color: #333;
    p {
      margin-top: 3px;
    }
  }
}
</style>
