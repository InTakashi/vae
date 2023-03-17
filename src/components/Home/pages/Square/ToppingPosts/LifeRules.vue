<template>
  <div class="LR-outerbox" v-show="show">
    <a href="javascript:;">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/ToppingPost/life.jpg" />
          <span class="username">余釋</span>
        </div>
        <span class="time">2021-08-27 16:00</span>
      </div>
      <div class="content-box">
        <p class="tittle">【生活圈】圈规〔2021.08〕</p>
        <p>欢迎各位许嵩的小朋友们来生活圈玩耍鸭！发帖前请仔细阅读圈规哦😉~</p>
        <p>🌟【期待的帖子】:</p>
        <p>身边的琐事、吃喝玩乐、喜怒哀乐、阴晴圆缺等一切大事小事都可以来分享~</p>
        <p>除了下面十条不允许的，其他内容原则上都是可以的😉！</p>
        <p>🚫【欲哭无泪的帖子】:</p>
        <p>1、松子松果、抽奖、中奖、纪念卡、补签、积分、福利、日常任务、充值会员等相关内容请移步【松果圈】；</p>
        <p>2、灌水帖请移步【灌水圈】；</p>
        <p>3、语音帖请移步【语音圈】；</p>
        <p>4、禁止一切求赞、求小红心、求评论、求助攻、求升级、求关注、求（互）喂松果、求宣传、盖楼等行为，一经发现作删帖处理，严重者将作封号处理。</p>
        <p>5、禁止借由Vae+平台宣传推广QQ群、微信群、微博群、公众号、组织、团体、个站、周边店铺、衍生品等一切类似广告的行为。无官方授权，一律视为广告帖，一经发现作删帖处理，严重者将作封号处理。</p>
        <p>6、禁止出售专辑、签名照、门票、相关周边等一切涉及金钱交易的行为，一经发现作删帖处理，严重者将作封号处理。</p>
        <p>7、禁止恶意传播低俗、恶趣味的照片、截图等，一经发现作删帖处理，严重者将作封号处理；举报许嵩主页、拉黑许嵩的帖子将统一删帖处理。</p>
        <p>8、禁止发布未经官方确认的许嵩行程，坚决抵制私生饭行为；禁止发布有关许嵩家人的账号、动态等，尊重许嵩及其家人的生活及隐私。一经发现作删帖处理，严重者将作封号处理。</p>
        <p>9、禁止拉踩其他艺人、引战、人身攻击、挂人等一切恶意行为，一经发现作删帖处理，严重者将作封号处理。请素质发帖回帖，共创文明和谐Vae+。</p>
        <p>10、禁止盗用他人文章、图片等行为，支持原创。</p>
        <p>🌟【关于精华帖】</p>
        <p>1、精华帖由圈主推荐，热门帖由超管从精华帖中推荐，系统不会根据点赞数、评论数上精华。</p>
        <p>2、生活圈精华帖以分享精彩生活为主，支持原创，不刻意追求文字多或图片美，希望能够看到家人们的用心~</p>
        <p>3、自荐请带截图私聊圈主，可参考生活圈热门帖。</p>
        <p>4、暂时不接受他荐。</p>
        <p>因为一个人，爱上一群人，共同生活每一天~</p>
        <p>期待大家的精彩生活哟😉~</p>
        <p>如有其他疑问，请联系圈主：胡小泽、敲丶木、林清茗、余釋</p>
        
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "LifeRules",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.LR-outerbox {
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

.tittle {
  font-size: 22px !important;
  font-weight: 600;
  margin: 20px 0 !important;
}
</style>