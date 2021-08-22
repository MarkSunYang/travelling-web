<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeLocation></HomeLocation>
  </div>
</template>
<script>
import HomeHeader from "./pages/Header";
import HomeSwiper from "./pages/Swiper";
import HomeIcons from "./pages/Icons";
import HomeLocation from "./pages/Location";

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
  },
};
</script>

<style scoped>
</style>