<template>
  <div class="fifthcontent">
    <div class="fifthcontent-innerbox">
      <div class="back">
        <el-page-header
          @back="goBack"
          v-loading.fullscreen="loading"
          content="详情页面"
        >
        </el-page-header>
      </div>
      <div class="fifthalbum">
        <div class="info">
          <div class="imgbox">
            <img src="../../../../../Pictures/mall/albums/fifth.png" />
          </div>
          <div class="text">
            <p class="albumname">专辑名称：《不如吃茶去》</p>
            <div class="price">
              <span>价格：</span>
              <img src="../../../../../Pictures/mall/one.png" />
              <p>540<span>松果</span></p>
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
        <p>关于爱恨情仇的道理，关于人生的感悟，我们说了那么多，也听了那么多，最后又如何？</p>
        <p>有诗云:空持百千偈，不如吃茶去。这是前人流传下来的禅机，是许嵩心向往之的怡然与从容，更是他第五张全创作专辑希望传达的生活态度。</p>
        <p>大千世界，多得是想不通的事，多得是猜不透的心，多得是看不透的人。不如不想，不如不猜，不如不看，不如寄情山水，不如快意人生，不如，吃茶去。——许嵩</p>
        <p>在前四张全创作专辑收获了一长串的乐坛奖项与听众认可之后，许嵩对待演艺工作依然保持着若即若离的状态，为创作留足空间与时间。近两年的时光，除了常规演出之外，他选择了将生活的大部分内容转向旅行，读书，进修，创作摄影随笔集，以及创作制作本张专辑。“不如吃茶去”像一句随性的口头禅，而这份悠游自在，正是他真实的生活状态。他是音乐人之中的文人，还是文人之中的音乐人，或许这些定义对他而言已不重要。他的平和、干净、低调，是经过了时间检验的个人特质，这样的个性注定与娱乐绝缘，但又恰恰是乐迷最为欣赏的特质。本辑中充满中国古典气息的词作再次展现了许嵩强大的笔力与深厚的古典文学修养。近两年许嵩常在大山大河间旅居，所到一处觉得清凉自在了，就小住十天半月，吃茶，读书，抚琴，会友，呼吸山岚清气，远离喧闹的都市文明，以更为清净的心去体悟生活，由此创作出一系列清润如茶的音乐作品。本辑中有诸多精彩佳句均是在幽居之时的灵光闪现。当回到北京，回到严谨的工作状态时，他第五次掌控全局，身兼本专辑音乐总监、全部词曲的创作者、制作人的身份，更亲力亲为操刀编曲与混音工作。从创作词曲开始，到编曲、监制编曲，再到现场录制各样乐器，完成混音与母带制作，每首作品平均包含两百多轨乐器素材，总计近两千轨，均由许嵩一手包办制作，在工作室内醉心本辑制作的总时间超过一千五百小时，全身心为音乐注入情感和能量。</p>
        <p>《不如吃茶去》是充满碰撞火花的一体：东方的清音雅乐，西方的律动节奏，交织并进；披着古色古香的外套，内里却是一颗极为现代的精神内核；既书写怡然洒脱的态度，也不掩内心的感伤离愁，生活五味熔于一炉。遣词造句是许嵩式的美学，不经意间抖落的词趣与禅机耐人寻味。你眼前浮现的是一个老成的少年，有故事，但绝不沧桑，他低吟浅唱着把他的故事讲给你听，无论故事是悲或喜，都讲得饶有情致，作者的迷人之处也恰在这里。这样的音乐让人难于定义，它像是属于从今天到过去几百年中的任何一个时段：古典与流行交织，让听者在不知不觉间忘却了所处的时代。</p>
        <p>作为一张穿梭古今的作品，《不如吃茶去》集结了多位优秀的中国民乐演奏家：古筝、竹笛、箫、尺八、埙、古琴、二胡、马头琴等乐器，各路大师以教材级别的绝妙演奏为专辑增光添彩。但精彩并未到此为止，许嵩在本辑中的乐思并不停步于中国民乐，而是以丰富多元的音乐语言表达专辑概念。于是，我们在《弹指一挥间》中聆听中国国家交响乐团恢宏而深沉的弦乐演奏；在《梧桐灯》里邂逅世界上最古老的乐器都都克笛 （Duduk）如泣如诉的天籁之音，与Trip-Hop节奏融为一体；《等到烟火清凉》着意于氛围渲染，渐进铺陈情绪，高潮充满震撼力，八字唱词禅意深远；《山水之间》里一段古筝与爵士吉他齐奏，行云流水般交相辉映，演奏技巧在流行乐中甚为罕见；《隐隐约约》将迷幻的电子音色与马头琴、失真吉他奇妙混搭，氛围诡谲奇异,彰显许嵩卓绝的编曲想象力；《惊鸿一面》与魅力歌姬黄龄深情演绎令人心向往之的古典式爱情；《宇宙之大》以印度传统乐器西塔尔琴作点缀，营造虚空幻境；《有桃花》加入传统民歌采样，温馨小曲令人动容……随处可见的精妙构思匠心独运，加上华语乐坛顶级阵容的编曲搭档们倾力助阵，《不如吃茶去》注定成为不可错过的精品佳作。</p>
        <p>在音乐之外，本辑的MV由台湾著名导演黄中平先生操刀。MV拍摄生涯超过二十年、拍摄过数百位歌星的他破天荒接下了同一张专辑中的三首MV拍摄工作以及部分摄影工作，上山下海旅途奔波长达数十日，背负超大的工作量只为完美呈现许嵩作品中超凡脱俗的意境。本辑的内页写真则由知名摄影家张罗平先生拍摄，作为曾与许嵩多次合作的伙伴，张罗平的摄影精准展现许嵩的个性特质。本辑的装帧设计则邀请到曾入围格莱美奖的台湾顶级设计师萧青阳老师出手，简约大气的设计风格毫无造作修饰，贴合专辑返璞归真的音乐主题。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FifthContent",
  data() {
    return {
      loading: false,
      tableData: [
        { name: "等到烟火清凉", singer: "许嵩", album: "不如吃茶去" },
        { name: "山水之间", singer: "许嵩", album: "不如吃茶去" },
        { name: "七夕", singer: "许嵩", album: "不如吃茶去" },
        { name: "有桃花", singer: "许嵩", album: "不如吃茶去" },
        { name: "惊鸿一面", singer: "许嵩", album: "不如吃茶去" },
        { name: "隐隐约约", singer: "许嵩", album: "不如吃茶去" },
        { name: "宇宙之大", singer: "许嵩", album: "不如吃茶去" },
        { name: "梧桐灯", singer: "许嵩", album: "不如吃茶去" },
        { name: "弹指一挥间", singer: "许嵩", album: "不如吃茶去" },
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
.fifthcontent {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.fifthcontent-innerbox {
  width: 90%;
}

.back {
  width: 100%;
  margin-bottom: 50px;
  margin-left: 70px;
}

.fifthcontent .fifthalbum {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.fifthalbum .info {
  width: 300px;
}

.fifthalbum .info .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  
}

.fifthalbum .info .text .albumname {
  font-size: 20px;
}

.fifthalbum .info .text .price {
  display: flex;
  align-items: center;
}

.fifthalbum .info .text .price p span {
  font-size: 12px;
  margin-left: 2px;
}

.fifthalbum .info .text .price img {
  width: 20px;
  margin: 0 8px;
}

.fifthalbum .info .imgbox,
.fifthalbum .info img {
  width: 100%;
}

.fifthalbum .songs {
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