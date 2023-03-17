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
      <p class="titte">许嵩新曲《如约而至》发布 专辑名《寻宝游戏》曝光</p>
      <div class="time">2018-06-13 13:00</div>
      <span>
        6月12日，许嵩2018第七张词曲全创作专辑第三支曲目《如约而至》发布，专辑名《寻宝游戏》正式曝光！曲目以Folk-Rock风格呈现出许嵩对“时间”“爱”以及死生之事的体味与思考。今日，《如约而至》MV正式上线，许嵩在MV中扮演留学生，少年感十足。
      </span>
      <img
        src="../../../../Pictures/index/rotation-pictures/content-pictures/ruyueerzhi1.jpg"
      />
      <span class="weight">
        许嵩新曲《如约而至》发布 Folk-Rock传递“爱”的思考
      </span>
      <span>
        昨日（6月12日），许嵩2018第七张词曲全创作专辑第三支曲目《如约而至》发布。曲目一经发布，许嵩立即登顶QQ音乐巅峰人气榜，歌曲评论再创8分钟破万的惊人成绩。
      </span>
      <span>
        《如约而至》依旧由许嵩包办词曲创作及担任音乐制作人，以Folk-Rock的曲风来呈现。曲目旋律回归至简，如水般流淌。Blues-Rock风格的鼓律动明快有力，在节奏摆荡中消解了歌词里隐含的沉重，达到了举重若轻的效果。
      </span>
      <span>
        许嵩对这首作品的演唱也天然无雕饰，如同面对面的轻语，传递出内心深处的宁静与释然：“过去、当下、未来未必确有其界限，或许爱能穿越时间、抵达永远。”作品以诗歌化的凝练语言传达出许嵩对于“时间”、“爱”、以及死生之事的体味与思考。
      </span>
      <span class="weight">《如约而至》MV上线 “老地方”选址草莓园致敬摇滚 </span>
      <span>
        今日（6月13日），《如约而至》MV正式上线，MV由台湾著名导演比尔贾执导，于美国纽约拍摄。片中将歌词里的“老地方”选址为约翰·列侬的纪念地——草莓园；歌曲中演奏的电吉他是摇滚乐传奇人物约翰·列侬在beatles乐队期间所用吉他的相同版本，以此致敬这位摇滚巨匠以及摇滚乐的黄金年代。
      </span>
      <span>
        MV剧本方面，导演另辟蹊径，将本身格局宽阔的歌词文本以具像化的爱情片段来表现，以小见大。许嵩在片中扮演起留学生，少年感十足。清淡而疏离的影像故事契合了音乐本身云淡风轻的基调，有克制的传情达意，拒绝煽情。
      </span>
      <span class="weight"> 许嵩2018第七辑《寻宝游戏》专辑名曝光 </span>
      <span>
        与此同时，许嵩2018第七辑专辑名《寻宝游戏》曝光！日前，新专辑两波主打曲目《老古董》、《大千世界》相继发布，以复古曲风、极抓人的旋律引来试听热潮，席卷各大音乐榜单，蝉联新歌榜冠军多日。同时，两首曲目以不同视角审视世界，其中的哲学思辨更引发热议，优质乐评不断涌现。这场头脑风暴游戏，听众们玩得不亦乐乎！
      </span>
      <span>
        透过《老古董》、《大千世界》、《如约而至》的曲风可以窥见，第七张专辑是以摇滚乐为基底来传达许嵩对于爱、和平、社会百态以及对自我的思考。短短一个月内，三支主打曲接连曝光，这样的快节奏让人应接不暇，同时更加期待专辑《寻宝游戏》的“如约而至”！
      </span>
      <img
        src="../../../../Pictures/index/rotation-pictures/content-pictures/ruyueerzhi2.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RuyueErzhi",
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

.innerbox .weight {
  font-weight: 600;
  text-indent: 0px;
  margin: 30px 0;
}

.innerbox img {
  width: 100%;
  margin-bottom: 15px;
}
</style>