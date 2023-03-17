<template>
  <div class="outerbox">
    <div class="back">
      <el-page-header
        v-loading.fullscreen="loading"
        @back="goBack"
        content="详情页面"
      >
      </el-page-header>
    </div>
    <div class="innerbox">
      <p class="titte">2021许嵩第8张全创作专辑《呼吸之野》5月14日正式发行</p>
      <div class="time">2021-05-14 00:00</div>
      <span>
        人生不过一场呼吸。呼吸不停，则生命与思考不止。当人们习惯于蒙上口罩生活，畅快呼吸日渐成为一种奢侈。比这更为奢侈的，是袒露真心的酣畅对谈，是呼吸于野，吐纳心声。
      </span>
      <span>
        《呼吸之野》从冷色调里起笔，以自如沉着的笔触，描摹情感与境遇。十首音乐，如十场呼吸冥想般令人全神贯注。许嵩在想象与写实的互照里，在温柔与凛冽的交汇处，在浪漫与生猛的切换中，记述着生活与思考。
      </span>
      <span>
        在《呼吸之野》里，古典气质与当代元素浑然一体。许嵩构建了有别于其过往作品的音乐语汇，有承接亦有创新。《呼吸之野》是赤诚、饱满且充满细节的，它能够让人在专注聆听时回归内心深处。
      </span>
      <span>
        为拍摄专辑平面相片及音乐录影带，许嵩与二十余人拍摄团队进驻高原上人迹罕至的原始森林。帐篷帘幕外，旷野篝火，雪山江河，独行旅人，构成一幅冷暖交汇的静谧画卷。
      </span>
      <span>
        呼，向外输出，吸，向内滋长，一呼一吸间，许嵩始终坚持用作品与听众进行交互。自2009年发行首张专辑至今12年里，许嵩已一人作词、作曲、演唱、制作、策划8张个人专辑以及近50首原创单曲，佳作不断。2019年举办“寻宝游戏”巡回演唱会大获好评后，许嵩折返到潜心创作的生活状态，以新作《呼吸之野》再一次展现了强大的创作能量。
      </span>
      <img
        src="../../../../Pictures/index/rotation-pictures/BreathingField.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BreathingField",
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