<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe633;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe647;</span>
      输入城市/景点/游玩主题
    </div>
    <div  class="header-right">
     <router-link to="/city">北京</router-link>   
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header{
    width: 100%;
    line-height: 0.88rem;
    background-color: #00bcd4;
    color: #fff;
    font-size: .36rem;
    display: flex;
}

.header-left{
    width: .4rem;
    padding:0 .2rem;
    text-align: center;
    font-weight: bold;
}

.header-search{
    flex: 1;
    background-color: #fff;
    height: .6rem;
    margin:.11rem 0;
    border-radius: .1rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
}

.header-right{
  font-size: .28rem;
  padding: 0 0.2rem ;
}

.header-right a{
  color:#fff;
}

</style>