<template>
  <div class="home-icon-container">
    <div class="icons-item" v-for="(icon, index) in icons" :key="index">
      <img :src="icon.url" alt="">
      <p>{{ icon.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      icons: [
        {
          url: require('@/assets/home/wenquan.png'),
          title: '温泉'
        },
        {
          url: require('@/assets/home/huaxueyundon.png'),
          title: '滑雪运动'
        },
        {
          url: require('@/assets/home/wanlonhuaxuechang.png'),
          title: '万龙滑雪场'
        },
        {
          url: require('@/assets/home/tiantanggonyuan.png'),
          title: '天坛公园'
        }
      ]
    }
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
.icons-item {
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  float: left;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 14px;
    color: #121212;
    margin-top: 5px;
  }
}
</style>
