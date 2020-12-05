<template>
  <div class="home-container">
    <!-- 头部 -->
    <Header/>
    <!-- /头部 -->
    <!-- 轮播图 -->
    <swiper class="home-swipter"/>
    <!-- 轮播图 -->
    <!-- icons -->
    <icons/>
    <!-- icons -->
    <localtion/>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Localtion from './components/Localtion'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: { Header, Swiper, Icons, Localtion },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  activated () {},
  methods: {}
}
</script>

<style lang='less' scoped>
.home-swipter {
  margin-top: -1px
}
</style>
