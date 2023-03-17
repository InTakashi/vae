<template>
  <div class="SFR-outerbox" v-show="show">
    <a href="javascript:;">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/ToppingPost/showFace.jpg" />
          <span class="username">千金</span>
        </div>
        <span class="time">2019-07-11 17:27</span>
      </div>
      <div class="content-box">
        <p class="tittle">「露个脸」圈规2019版</p>
        <p>1.内容要求：发帖的主题是以show出自己照片为主，每个主题帖最少附 1 张照片；</p>
        <p>*关于自己的照片，如果只发一张照片则必须是露出脸部的照片；如果发多张照片，则必须包含至少一张露出脸部的照片。</p>
        <p>*非本人的照片，如许嵩的照片、风景照、他人照片、表情图等请移步相关频道。</p>
        <p>2.关于热门帖：热门帖由圈主根据帖子质量推选，与评论数和点赞数无关。</p>
        <p>*如想申请热门也可带帖子向圈主自荐。</p>
        <p>3.禁止发布色情等不雅照片，违规将被删帖，严重者将被封号。</p>
        <p>4.不符合圈规会被移帖的哦，如有疑问请联系圈主。</p>
        
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ShowFaceRules",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.SFR-outerbox {
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