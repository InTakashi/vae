<template>
  <div class="AVR-outerbox" v-show="show">
    <a href="javascript:;">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/ToppingPost/aboutV.jpg" />
          <span class="username">许恋翼v</span>
        </div>
        <span class="time">2021-06-07 09:52</span>
      </div>
      <div class="content-box">
        <p class="tittle">「有关V」圈规</p>
        <p>1.本圈只讨论Vae，无关帖子作移帖或删帖处理；</p>
        <p>2.禁止一切求赞主页、帖子、互赞、互点小红心、互喂松果等行为；</p>
        <p>3.禁止发布广告，宣传QQ群，微信群，微信号等；</p>
        <p>4.禁止盗用他人图片；</p>
        <p>5.禁止灌水，禁止出售专辑，演唱会门票，周边以及禁止一切金钱交易；</p>
        <p>6.素质发帖回帖，文明用语，共创和谐Vae+；</p>
        <p>7.精华帖子由圈主设置，系统不会由帖子点赞数上精华；</p>
        <p>8.热门帖子由超管设置，从精华帖子里面选出。</p>
        <p>如需推荐上精华，请带上帖子截图私信本圈圈主:许恋翼v（ID:101483）</p>
        <p>「有关V」祝全体V亲发帖愉快！欢迎常来本圈子发帖回帖！</p>
        <p>支持许嵩正能量，从你我做起！</p>
        <p>音乐纯粹，爱V绝对！</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "AboutVRules",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.AVR-outerbox {
  width: 100%;
  height: 100%;
  overflow: auto;
  float: left;
}

.header-box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.header {
  height: 100%;
  width: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(54, 54, 54);
}
.header img {
  height: 80%;
  border-radius: 8px;
}

.time {
  font-size: 14px;
  color: rgb(118, 118, 118);
  margin-right: 10px;
}

.content-box {
  width: 100%;
}

.content-box p {
  font-size: 18px;
  margin: 0 0 10px 10px;
  color: rgb(54, 54, 54);
  line-height: 1.25;
}

.tittle{
  font-size: 22px !important;
  font-weight: 600;
  margin: 20px 0 !important;
}
</style>