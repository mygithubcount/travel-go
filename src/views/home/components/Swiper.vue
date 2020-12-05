<template>
  <div class="home-swiper-container">
    <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item v-for="(image, index) in swipterList" :key="index">
        <img class="swiper-img" :src="image" />
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'Swiper',
  data () {
    return {
      swipterList: [
        'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg'
      ]
    }
  },
  components: { Swipe, SwipeItem },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  activated () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.my-swipe {
  width: 100%;
  height: calc(375px * 320 / 865);
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
// 865 320
.swiper-img {
  width: 100%;
}
</style>
