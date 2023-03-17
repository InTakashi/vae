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
      <p class="titte">许嵩新专首波主打《老古董》今日首发 MV同步震撼上线</p>
      <div class="time">2018-05-14 12:42</div>
      <span>
        今日（5月14日），许嵩新曲《老古董》正式发布，MV同步震撼上线！作为首支曝光曲目，布鲁斯摇滚风的《老古董》为新专辑拉开序幕。本次MV依然由比尔贾先生操刀，参照1960年代美式视觉艺术风格之余加入摩登元素，与歌曲浑然一体！
      </span>
      <span class="weight">
        《老古董》拉开新专辑序幕 哲学思辨搭配布鲁斯摇滚
      </span>
      <span>
        今日（5月14日），许嵩2018年第七张词曲全创作专辑首支曝光曲目《老古董》正式发表。
      </span>
      <img src="../../../../Pictures/index/rotation-pictures/antique.jpg" />
      <span>
        歌词中重复多遍的“老古董”三个字一语多关，多重隐喻之下，许嵩带给听众们的是一场全然新鲜的头脑狂欢——将哲学思辨以诗歌化的语言融于布鲁斯摇滚乐，再现了上世纪60年代Rock
        n
        Roll经典音响效果，十分复古。同时，许嵩还特别置入了擅长运用的“古”筝，在东方古典乐器与西方现代乐器的交织辉映中凸显古乐的历久弥新，呼应歌词主题。
      </span>
      <span class="weight"> 许嵩音乐标配：包办词曲制 多位好友助阵新作 </span>
      <span>
        由许嵩包办作词、作曲、制作，可以说是许嵩音乐的标配，新作《老古董》亦是如此。此外，吉他名家Adam
        Lee、著名古筝演奏家程皓如均为好友的新作助阵，为《老古董》奉上教科书级别的精彩演奏。
      </span>
      <span>
        MV则由台湾金曲奖最佳MV导演比尔贾先生操刀，影像风格与平面设计风格均参考了1960年代美式视觉艺术风格，并在这份复古中再加入摩登元素，与歌曲具有的质感浑然一体！
      </span>
      <span class="weight"> 专注音乐创作 生日奉上新作回礼歌迷 </span>
      <span>
        5月14日，同时也是许嵩的生日。近日，歌迷们为许嵩庆生的活动也如火如荼：在高校拉起横幅，在全国举办百余场生日聚会，刷屏更换生日应援头像，不一而足！对于一直支持许嵩的乐迷们，许嵩也选择用实际行动回馈他们，选择生日当天奉上新作《老古董》，回礼意味十足！
      </span>
      <span>
        近两年，许嵩除了举办一轮万人巡回演唱会之外，几乎将全部时间投入在了第七张个人唱片的独立创作与制作之中。这也让《老古董》领衔的第七张专辑，更加令人期待！
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OldAntique",
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