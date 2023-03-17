<template>
  <div class="BFR-outerbox" v-show="show">
    <a href="javascript:;">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/ToppingPost/blackFan.jpg" />
          <span class="username">张菇凉爱着VVcn</span>
        </div>
        <span class="time">2020-04-16 12:56</span>
      </div>
      <div class="content-box">
        <p class="tittle">【嘿粉圈】圈规及热门标准</p>
        <p>进圈请阅读圈规，读完你会发现其实圈规门槛并不高噢～</p>
        <p>1.本圈为娱乐向圈子，发帖的主题以围绕许嵩的段子、PS图片、视频等为主，非原创请标明转载，尊重他人的劳动成果。</p>
        <p>2.本圈遵循爱到深处自然黑的理念，此黑非彼黑，请把握尺度适当玩笑，禁止一切低俗玩笑。</p>
        <p>3.帖子内容仅在于讨论许嵩的， 无玩笑意味或玩笑意味过低的帖子请移步「有关V」 ；</p>
        <p>各种美图app抠图换脸的帖子因趣味性不足，请移步「有关V」，把自己和许嵩抠一起的的发「生活圈」；</p>
        <p>帖子文案需要与配图相关，文案发生活只拿表情包当配图的请移步生活圈；</p>
        <p>用许嵩照片或表情包求赞的请统一发在灌水圈</p>
        <p>（发错圈的话圈主也是会动手帮你移动过去的哦）</p>
        <p>4.本圈禁止事项🚫</p>
        <p>·请勿涉黄、低俗、恶趣味，否则会被删帖</p>
        <p>·给许嵩女性化换装、化妆美颜的帖子统一删除</p>
        <p>·举报许嵩主页、拉黑许嵩的帖子统一删除</p>
        <p>·通过截图或拍摄到的奇怪动作的图片，有损许嵩本人形象的，帖子统一删除</p>
        <p>·尽量不要涉及其他艺人</p>
        <p>本圈以创意为主，希望可以多出现一些让大家眼前一亮的内容。重复重复也可，但更希望各位小伙伴能多多开动脑筋，制造出足够有趣的产物，与大家一起分享快乐。</p>
        <p>5.如有疑问请联系本圈圈主</p>
        <p>张菇凉爱着VVcn（ID：100864）</p>
        <p>杨盼盼V（194813）</p>
        <p>【热门标准】</p>
        <p>1.热门帖必须为你的原创，形式不限，可以为段子、表情包、视频等</p>
        <p>2.段子需富有创意，图片或视频需要具有一定的技术水平</p>
        <p>3.作品风格与内容需在大众可接受范围，不可引起不适</p>
        <p>4.与同一时期已有热门贴题材相似度过高的帖子不建议自荐</p>
        <p>热门自荐请私信本圈圈主</p>
        <p>张菇凉爱着VVcn（100864）</p>
        <p>杨盼盼V（194813）</p>
        
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "BlackFansRules",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.BFR-outerbox {
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
  width: 190px;
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