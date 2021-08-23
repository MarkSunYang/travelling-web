<template>
  <div class="icons">
    <div v-for="item in places" :key="item.id" class="icon-item">
      <img :src="item.url" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {
          id: "1",
          name: "故宫",
          url: require("@/assets/images/theImperialPalace.png"),
        },
        {
          id: "2",
          name: "八达岭",
          url: require("@/assets/images/Badaling.png"),
        },
        {
          id: "3",
          name: "文化古迹",
          url: require("@/assets/images/historicsite.png"),
        },
        {
          id: "4",
          name: "天坛",
          url: require("@/assets/images/TempleofHeaven.png"),
        },
      ],
    };
  },
};
</script>

<style  scoped>
.icons{
  width: 100%;
}
.icon-item {
  width: 25%;
  height: 0;
  background-color: #fff;
  float: left;
  padding-bottom: 25%;
}

.icon-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.1rem;
}
.icon-item p {
  margin-top: 0.1rem;
  color: #212121;
  font-size: 0.28rem;
  text-align: center;
}
</style>