<template>
  <div class="sevencontent">
    <div class="sevencontent-innerbox">
      <div class="back">
        <el-page-header
          @back="goBack"
          v-loading.fullscreen="loading"
          content="详情页面"
        >
        </el-page-header>
      </div>
      <div class="sevenalbum">
        <div class="info">
          <div class="imgbox">
            <img src="../../../../../Pictures/mall/albums/seventh.png" />
          </div>
          <div class="text">
            <p class="albumname">专辑名称：《寻宝游戏》</p>
            <div class="price">
              <span>价格：</span>
              <img src="../../../../../Pictures/mall/one.png" />
              <p>600<span>松果</span></p>
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
          2018年许嵩最新作品《寻宝游戏》，许嵩第7张词曲全创作专辑。-21日，在其官方网站十日预售量即突破一万张，可谓树立了独立音乐人的人气典范。
        </p>
        <p>
          你我他她一生在世，寻寻觅觅各有所求，人人心中皆有秘密宝藏。许嵩在《寻宝游戏》中以松弛、真实的笔触书写对生活的体悟以及对世态的思考，寻访人心、玩味世情。
        </p>
        <p>《寻宝游戏》的语言系统中充满着多义与辨证，让读者在聆听的过程中不知不觉沉浸于许嵩构建的这一场头脑游戏，富有诗性与灵气的文字挑战歌词创作新高度。他的文字里时而带着严谨理性的刚硬质地，但细听之下又可体会他的幽默与柔软——这份既刚又柔、亦庄亦谐的矛盾感形成了某种难以言喻的、专属于许嵩的艺术效果。</p>
        <p>
          在《寻宝游戏》里许嵩以极致复古的音乐语言带领听者回到20世纪60-80年代，融合Blues-Rock、Country-Rock、Folk-Rock、Electronic-Rock、Jazz等根源性音乐风格，加以最新锐的制作理念打造当代音乐精品，既复古，又超前。他旧时明月般的老灵魂，总是能找到极其鲜活的表达方式来完成情感与观点的输出。整张专辑音乐类型多元化却又统一于许嵩强大的音乐制作和统筹功力，在听觉层面达到了惊人的一体性。许嵩以松弛自然的演唱方式唱出独属于他的腔调与态度，无可拷贝。音乐里精心设置的诸多细节伏笔也有待听者去开掘玩味，这是《寻宝游戏》所引发的寻宝游戏。
        </p>
        <p>
          《寻宝游戏》的平面相片及音乐录影带拍摄于美国纽约及美国西海岸地区。二十余人团队同许嵩一起出发，海外拍摄花费长达半个月的时间。专辑封面相片拍摄于美国西海岸地区1号公路，牛仔青年，开启寻宝之旅。以橙色为主色的美式唱片装帧，在复古中加入摩登元素，设计考究。专辑曲目《老古董》、《大千世界》、《如约而至》的音乐录影带摄于纽约，由台湾著名MV导演比尔贾执导，影像画面寓意丰富，余味悠长。
        </p>
        <p>
          《寻宝游戏》专辑概念由许嵩一手打造，并且每首曲目的词曲创作、音乐制作均由许嵩独自完成。至今为止许嵩已一人作词、作曲、演唱、制作、策划7张个人专辑，这份成绩与其全方位的音乐才华在华语乐坛是独树一帜的。2018年是许嵩进入公众视野的第十二年，成功发行7张词曲全创作专辑以及近40首原创单曲，勤勉专注于音乐创作；屡获国内外各大华语音乐颁奖典礼奖项，拥有突破十亿次的数字音乐下载量，影响力强大；2017年开启万人巡演，场场爆满座无虚席，从头至尾全程万人大合唱；在斐然的成绩面前，许嵩始终远离喧嚣保持低调姿态，只靠作品说话，在《寻宝游戏》里进一步展现了广阔的音乐视野与深厚的人文积淀。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeventhContent",
  data() {
    return {
      loading: false,
      tableData: [
        { name: "老古董", singer: "许嵩", album: "寻宝游戏" },
        { name: "大千世界", singer: "许嵩", album: "寻宝游戏" },
        { name: "艺术家们", singer: "许嵩", album: "寻宝游戏" },
        { name: "九月清晨", singer: "许嵩", album: "寻宝游戏" },
        { name: "浪", singer: "许嵩", album: "寻宝游戏" },
        { name: "重复重复", singer: "许嵩", album: "寻宝游戏" },
        { name: "明智之举", singer: "许嵩", album: "寻宝游戏" },
        { name: "如约而至", singer: "许嵩", album: "寻宝游戏" },
        { name: "柳成荫", singer: "许嵩", album: "寻宝游戏" },
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
.sevencontent {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.sevencontent-innerbox {
  width: 90%;
}

.back {
  width: 100%;
  margin-bottom: 50px;
  margin-left: 70px;
}

.sevencontent .sevenalbum {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.sevenalbum .info {
  width: 300px;
}

.sevenalbum .info .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  
}

.sevenalbum .info .text .albumname {
  font-size: 20px;
}

.sevenalbum .info .text .price {
  display: flex;
  align-items: center;
}

.sevenalbum .info .text .price p span {
  font-size: 12px;
  margin-left: 2px;
}

.sevenalbum .info .text .price img {
  width: 20px;
  margin: 0 8px;
}

.sevenalbum .info .imgbox,
.sevenalbum .info img {
  width: 100%;
}

.sevenalbum .songs {
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