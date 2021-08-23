<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeLocation></HomeLocation>
    <HomeHot></HomeHot>
     <HomeLike></HomeLike>
  </div>
</template>
<script>
import HomeHeader from "./pages/Header";
import HomeSwiper from "./pages/Swiper";
import HomeIcons from "./pages/Icons";
import HomeLocation from "./pages/Location";
import HomeHot from "./pages/Hot";
import HomeLike from "./pages/GuessLike";

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeHot,
    HomeLike
  },
};
</script>

<style scoped>
.home {
  background:#D8D8D8;
}
</style>