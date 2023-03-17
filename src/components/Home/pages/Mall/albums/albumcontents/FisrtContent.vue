<template>
  <div class="firstcontent">
    <div class="firstcontent-innerbox">
      <div class="back">
        <el-page-header
          @back="goBack"
          v-loading.fullscreen="loading"
          content="详情页面"
        >
        </el-page-header>
      </div>
      <div class="firstalbum">
        <div class="info">
          <div class="imgbox">
            <img src="../../../../../Pictures/mall/albums/first.png" />
          </div>
          <div class="text">
            <p class="albumname">专辑名称：《自定义》</p>
            <div class="price">
              <span>价格：</span>
              <img src="../../../../../Pictures/mall/one.png" />
              <p>500<span>松果</span></p>
            </div>
            <el-button type="primary" round @click="buy"> 立即购买 </el-button>
          </div>
        </div>
        <div class="songs">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="音乐名称" width="240">
            </el-table-column>
            <el-table-column prop="singer" label="歌手" width="120">
            </el-table-column>
            <el-table-column prop="album" label="专辑"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="introduction">
        <div class="tittle">专辑介绍</div>
        <p>
          Vae（许嵩）首张独立创制专辑《自定义》，2009年1月10日正式发行。近年来在网络上凭借多首原创作品及独特个人气质一直人气高涨的Vae，包揽了《自定义》的作词、作曲、编曲、演奏、制作乃至录音、混音等一切工作。2009年12月11-21日，在其官方网站十日预售量即突破一万张，可谓树立了独立音乐人的人气典范。
        </p>
        <p>
          22岁的Vae，在他的《自定义》里彻头彻尾的实现了自己主宰音乐，定义自我。有如此独当一面的能力的华语歌手本就不多，其中用四个月就能从无到有的交出这样一张优秀唱片的人更少，而交出之后有这么多人趋之若鹜的热议和支持而不是孤芳自赏——并且，这一切都是在没有经纪公司宣传推广的前提下，实在可以说是稀奇了。
        </p>
        <p>我们也向你诚意推荐这张风格独特、听感舒适的《自定义》。</p>
        <p>
          独立营造每一个音乐细节，使得整张专辑充满了浓郁的个人气息。Vae冷色调的感情逻辑贯穿始终，复古和流行碰撞的旋律线条随处可见，全方位的音乐能力展露锋芒。《内线》、《多余的解释》、《如果当时》、《坏孩子》、《城府》等曲目，有强烈的叙事感与自嘲意味，加上若隐若现的黑色幽默，和当下热门大碟里或甜腻或悲痛或忧伤或劲爆的音乐都不同的是，《自定义》里每首作品都好比一出悲喜剧——难以对其定义，难以给其归类，但又有血有肉，惹人玩味。这样既让人有听头、又让人有想头，既有流行潜力、又保持了创作个性的华语歌曲确实为数不多。
        </p>
        <p>
          《自定义》的感情色彩是灰色的，暗涌的回忆与潜藏的自我调侃交替更迭，在情绪处理上有着超越年龄的成熟和细腻。创作者Vae也似乎压根没有打算让整张专辑的曲风变化多端，摆成一道拼盘——如果几年后《自定义》还被很多人提起，那么这一点一定是个重要因素——风格上的协调性被驾驭的极为出色，但又绝对让人一遍听下来就记得住每首歌的特质。歌词题材方面，亦在小范围内做了大文章，回归情歌本质，以内心体验和情感故事为主，不过也有如《内线》这样涉及杀手暗战的边缘题材让人耳目一新。音乐制作方面，Vae简洁而soft的音乐编配安静舒适，个人辨识度与耐听度很高。当捧着歌词册聆听与玩味《自定义》一遍之后，相信你能感知到它独特的音乐份量。
        </p>
        <p>
          没有商品化的定位和包装，没有企宣团队的策划和炒作，这张独立唱片也没有像很多初次发片的新人一样为了标榜独特而去大肆玩弄风格流派上的概念。不过，以Vae的网络知名度而言，虽然是初次发片但也算不得新人了。这张自居一格的《自定义》，蕴含着让人欣喜的极大可能。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FisrtContent",
  data() {
    return {
      loading: false,
      tableData: [
        { name: "如果当时", singer: "许嵩", album: "自定义" },
        { name: "多余的解释", singer: "许嵩", album: "自定义" },
        { name: "有何不可", singer: "许嵩", album: "自定义" },
        { name: "坏孩子", singer: "许嵩", album: "自定义" },
        { name: "清明雨上", singer: "许嵩", album: "自定义" },
        { name: "城府", singer: "许嵩", album: "自定义" },
        { name: "认错", singer: "许嵩", album: "自定义" },
        { name: "内线", singer: "许嵩", album: "自定义" },
        { name: "星座书上", singer: "许嵩", album: "自定义" },
      ],
    };
  },

  methods: {
    goBack() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "mall",
        });
      }, 1000);
    },

    buy() {
      this.$alert("十分抱歉，暂无此功能。", "通知", {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>

<style scoped>
.firstcontent {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.firstcontent-innerbox {
  width: 90%;
}

.back {
  width: 100%;
  margin-bottom: 50px;
  margin-left: 70px;
}

.firstcontent .firstalbum {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.firstalbum .info {
  width: 300px;
}

.firstalbum .info .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  
}

.firstalbum .info .text .albumname {
  font-size: 20px;
}

.firstalbum .info .text .price {
  display: flex;
  align-items: center;
}

.firstalbum .info .text .price p span {
  font-size: 12px;
  margin-left: 2px;
}

.firstalbum .info .text .price img {
  width: 20px;
  margin: 0 8px;
}

.firstalbum .info .imgbox,
.firstalbum .info img {
  width: 100%;
}

.firstalbum .songs {
  width: 500px;
}

.introduction {
  width: 100%;
  
}

.introduction .tittle {
  font-size: 20px;
  margin: 20px 0;
}

.introduction p {
  width: 100%;
  margin: 10px 0;
  text-indent: 32px;
  line-height: 20px;
}
</style>