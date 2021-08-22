<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperList: [
        { id: "1", url: require("@/assets/images/swiper1.jpg") },
        { id: "2", url: require("@/assets/images/swiper2.jpg") },
        { id: "3", url: require("@/assets/images/swiper3.jpg") },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped>

.header-swiper img{
  width: 100%;
  height: 100%;
}
</style>