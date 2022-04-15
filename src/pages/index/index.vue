<template>
  <view>
    <u-swiper :list="swiperList"></u-swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swiperList: []
    }
  },
  onLoad() {
    this.getSwiper();
  },
  methods: {
    async getSwiper() {
      let swiperList = []
      let res = await this.$http.get("swiper")
      for (let v in res) {
        swiperList[v] = res[v].imgurl
      }
      this.swiperList = swiperList
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}
.text-area {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
