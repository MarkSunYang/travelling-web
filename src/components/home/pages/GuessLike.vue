<template>
  <div class="like">
    <div class="like-top">
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
      />
      猜你喜欢
    </div>

    <ul>
      <li class="like-item border-bottom">
        <div class="like-img">
          <img
            src="https://imgs.qunarzz.com/sight/p0/2108/fd/fdefc8719bcb3031a3.img.jpg_200x200_74767096.jpg"
          />
        </div>
        <div class="like-text">
          <div class="like-title">迪士尼</div>
          <div class="like-message">1314条评论</div>
          <div class="like-map">
            <span class="like-mark">￥<b>18.8</b></span>
            <span class="like-item-map">浦东新区</span>
          </div>
        </div>
      </li>
      <li class="like-item border-bottom">
        <div class="like-img">
          <img
            src="https://imgs.qunarzz.com/sight/p0/2108/fd/fdefc8719bcb3031a3.img.jpg_200x200_74767096.jpg"
          />
        </div>
        <div class="like-text">
          <div class="like-title">迪士尼</div>
          <div class="like-message">1314条评论</div>
          <div class="like-map">
            <span class="like-mark">￥<b>18.8</b></span>
            <span class="like-item-map">浦东新区</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.like {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  background: #fff;
  padding: 0 0.2rem;
}

.like-top {
  padding: 0.2rem 0;
  font-size: 0.32rem;
}

.like-top img {
  width: 0.3rem;
  height: 0.3rem;
}

.like-item {
  position: relative;
  overflow: hidden;
  padding: 0.2rem 0;
}

.like-img {
  float: left;
}

.like-img img {
  width: 2rem;
  height: 2rem;
}

.like-text {
  padding-left: 0.2rem;
  overflow: hidden;
}

.like-title {
  font-size: 0.36rem;
  color: #212121;
  margin-top: 0.4rem;
}

.like-message {
  margin-top: 0.3rem;
  color: #616161;
  font-size: 0.24rem;
}

.like-map {
  margin-top: 0.3rem;
  color: #616161;
  position: relative;
}

.like-mark {
  color: #ff8300;
}

.like-mark b {
  font-size: 0.32rem;
}

.like-item-map {
  position: absolute;
  right: 0rem;
}
</style>