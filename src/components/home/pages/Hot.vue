<template>
  <div class="hot">
    <div class="hot-top" >
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
      />
      <span>本周热门榜单</span>
      <span class="hot-title">热门榜单></span>
    </div>
    <ul class="hot-list" >
      <li class="hot-item" v-for="item in hotList" :key="item.id">
      <img :src="item.url" />
      <p>{{item.title}}</p>
      <p><span class="hot-mark">￥20</span>起</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotList: [
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
        {
          id: "1",
          url: "https://imgs.qunarzz.com/sight/p0/2108/f0/f056016ae6b7c3fa3.img.jpg_250x250_4d49e2ac.jpg",
          title: "故宫",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hot {
  background-color: #fff;
  font-size: 0.28rem;
  margin-top: 0.2rem;
}

.hot-top {
  padding: 0.2rem;
}

.hot img {
  width: 0.3rem;
  height: 0.3rem;
}

.hot-top span {
  color: #212121;
  font-size: 0.32rem;
}

.hot-title {
  position: absolute;
  right: 0.2rem;
  color: #616161;
}

.hot-list {
  overflow-x: scroll;
  white-space: nowrap;
  overflow-y: hidden;
}

.hot-item {
  padding: 0.2rem;
  width: 2rem;
  height: 2rem;
  display: inline-block;
}

.hot-item img {
  width: 100%;
  height: 100%;
}

.hot-item p {
  margin-top: 0.1rem;
  text-align: center;
}
.hot-item p .hot-mark {
  color: #ff8300;
  font-size: 0.32rem;
}
</style>