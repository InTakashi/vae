<template>
  <div class="outerbox">
    <div class="back">
      <el-page-header
        @back="goBack"
        v-loading.fullscreen="loading"
        content="详情页面"
      >
      </el-page-header>
    </div>
    <div class="innerbox">
      <p class="titte">许嵩2022首支单曲「留香」今日上线</p>
      <div class="time">01月29 19:08</div>
      <img src="../../../../Pictures/index/rotation-pictures/liuxiang.jpg" />
      <span>
        生活里那些擦肩而过的美好，比如一首没来及听完的无名好歌，一场没能有下文的邂逅，一幅转瞬即逝的沿途美景……当「你好」和「再见」同步发生，总是让人格外难忘。
      </span>
      <span> 念念不忘，没有回响又怎样？收藏美好，内心花园里余香长留。 </span>
      <span>
        许嵩2022最新创作单曲「留香」，从口语式的设问起始，撷取极其微小的生活场景和感受来描写内心戏，细腻与轻松兼得。歌里的情绪味道也如同歌里那与众不同的香水味，丰富的层次里有浪漫，有些许遗憾，无法笼统概括，却有着长长的后劲。
      </span>
      <img
        src="../../../../Pictures/index/rotation-pictures/content-pictures/liuxiang2.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LiuXiang",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    goBack() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "index",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.outerbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.innerbox {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.back {
  width: 660px;
  margin-bottom: 50px;
}

.innerbox p {
  
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
}

.innerbox .time {
  width: 100%;
  margin-bottom: 40px;
  font-size: 12px;
  color: rgb(189, 189, 189);
}

.innerbox span {
  display: block;
  
  text-indent: 32px;
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 30px;
  width: 100%;
}

.innerbox img {
  width: 100%;
  margin-bottom: 15px;
}
</style>