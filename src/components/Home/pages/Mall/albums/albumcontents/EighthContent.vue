<template>
  <div class="eighthcontent">
    <div class="eighthcontent-innerbox">
      <div class="back">
        <el-page-header
          @back="goBack"
          v-loading.fullscreen="loading"
          content="详情页面"
        >
        </el-page-header>
      </div>
      <div class="eighthalbum">
        <div class="info">
          <div class="imgbox">
            <img src="../../../../../Pictures/mall/albums/eighth.png" />
          </div>
          <div class="text">
            <p class="albumname">专辑名称：《呼吸之野》</p>
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
        <p>2021许嵩最新作品《呼吸之野》，许嵩第8张词曲全创作专辑。</p>
        <p>人生不过一场呼吸。呼吸不停，则生命与思考不止。当人们习惯于蒙上口罩生活，畅快呼吸日渐成为一种奢侈。比这更为奢侈的，是袒露真心的酣畅对谈，是呼吸于野，吐纳心声。</p>
        <p>《呼吸之野》从冷色调里起笔，以自如沉着的笔触，描摹情感与境遇。十首音乐，如十场呼吸冥想般令人全神贯注。许嵩在想象与写实的互照里，在温柔与凛冽的交汇处，在浪漫与生猛的切换中，记述着生活与思考。</p>
        <p>在《呼吸之野》里，古典气质与当代元素浑然一体。许嵩构建了有别于其过往作品的音乐语汇，有承接亦有创新。《呼吸之野》是赤诚、饱满且充满细节的，它能够让人在专注聆听时回归内心深处。</p>
        <p>为拍摄专辑平面相片及音乐录影带，许嵩与二十余人拍摄团队进驻高原上人迹罕至的原始森林。帐篷帘幕外，旷野篝火，雪山江河，独行旅人，构成一幅冷暖交汇的静谧画卷。</p>
        <p>呼，向外输出，吸，向内滋长，一呼一吸间，许嵩始终坚持用作品与听众进行交互。自2009年发行首张专辑至今12年里，许嵩已一人作词、作曲、演唱、制作、策划8张个人专辑以及近50首原创单曲，佳作不断。2019年举办“寻宝游戏”巡回演唱会大获好评后，许嵩折返到潜心创作的生活状态，以新作《呼吸之野》再一次展现了强大的创作能量。</p>
        <p>第二支曲目《假摔》5月10日正式发行</p>
        <p>暴雪天的十字街头，车来人往川流不息，却如临旷野。</p>
        <p>歌里的故事也许是真实发生的生活影像，也许是虚构的文本创作，但究竟是实是虚，就像歌里的“真摔”与“假摔”一样，真假虚实在裁判们心里有自己的答案。而切换到故事里主人公的角度来看，摔过的跟头吃过的苦，只有自己知道，很难期待无关人士的理解。</p>
        <p>《假摔》是印有许嵩独特标记的叙事性写作，极短的篇幅寥寥数笔就勾勒出故事轮廓。如同一个诚恳而又情绪饱满的目击者，把你带去故事里的现场，却不直接留下他的主观评价，只由你自行体会。故事现场的“假摔”与球场、与人生赛场上的“假摔”互为映照，有着极大的玩味空间。</p>
        <p>音乐方面，电子音色铺陈出冰天雪地氛围，生猛鼓点像钝器般无情敲击，副歌的短旋律乐句不断往复，以及电子摇滚曲风经典的节奏型，这些元素共同营造出极寒雪地的麻木感。后半段步步推进至顶点，直到一声放肆呼喊与一声沉闷的“砰”，猛地击中人心后戛然而止。《假摔》既有关怀的温度，也有反思的冷峻，它在冷暖交汇处，不断引发着心里的强降雪。</p>
        <p>第三支曲目《冰柜》5月11日正式发行</p>
        <p>许嵩+黄龄</p>
        <p>当深情与决绝相互碰撞</p>
        <p>既是窜动的电光石火</p>
        <p>也是致命的寒气冰霜</p>
        <p>《冰柜》以惊悚悬疑电影为灵感原点，推演至情感关系的探讨。表层是充满戏剧张力的冷峻叙事，内里是丰富饱满的寓意，内外同步推进。与「惊鸿一面」的黄龄在七年之后再度合唱，默契诠释歌中角色与情感。</p>
        <p>《冰柜》由许嵩创作及制作。迷离的电子乐音色营造出扑朔迷离的诡谲气氛，影像感十足，引人入胜。歌曲在幽微的呼吸声中起始，随后二人交替着不疾不徐地抛出意象，到副歌时揭开面纱，接着以奇诡的Bridge段落，一步步将气氛推至高潮。</p>
        <p>脑海里 记忆与幻想交织 亦真亦幻</p>
        <p>爱在散场之后 才给出关于爱的答案</p>
        <p>——我们把美满 托付「科幻」</p>
        <p>2021许嵩第8张全创作专辑「呼吸之野」</p>
        <p>第四支曲目「科幻」5月13日正式发行</p>
        <p>歌曲从星云浩渺的氛围和隐约的电子频率声里起始，古典气息和R&B节拍梦幻联动，让心神跟随许嵩感而不伤的真挚演绎，飘忽在回忆的宇宙中。</p>
        <p>像一场返璞归真的童梦，像一则年少的浪漫寓言。爱之得失，在他的歌与诗里聚合成辽阔原野。聆听「科幻」，一切都在脑海，一切又都已抛之脑后。</p>
        <p>结尾咚咚的鼓声，如心跳不停，如呼吸不止，如爱一直延续。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EighthContent",
  data() {
    return {
      loading: false,
      tableData: [
        { name: "乌鸦", singer: "许嵩", album: "呼吸之野" },
        { name: "假摔", singer: "许嵩", album: "呼吸之野" },
        { name: "科幻", singer: "许嵩", album: "呼吸之野" },
        { name: "万古", singer: "许嵩", album: "呼吸之野" },
        { name: "冰柜", singer: "许嵩", album: "呼吸之野" },
        { name: "超市", singer: "许嵩", album: "呼吸之野" },
        { name: "隔代", singer: "许嵩", album: "呼吸之野" },
        { name: "野人", singer: "许嵩", album: "呼吸之野" },
        { name: "三尺", singer: "许嵩", album: "呼吸之野" },
        { name: "庞贝", singer: "许嵩", album: "呼吸之野" },
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
.eighthcontent {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.eighthcontent-innerbox {
  width: 90%;
}

.back {
  width: 100%;
  margin-bottom: 50px;
  margin-left: 70px;
}

.eighthcontent .eighthalbum {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.eighthalbum .info {
  width: 300px;
}

.eighthalbum .info .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  
}

.eighthalbum .info .text .albumname {
  font-size: 20px;
}

.eighthalbum .info .text .price {
  display: flex;
  align-items: center;
}

.eighthalbum .info .text .price p span {
  font-size: 12px;
  margin-left: 2px;
}

.eighthalbum .info .text .price img {
  width: 20px;
  margin: 0 8px;
}

.eighthalbum .info .imgbox,
.eighthalbum .info img {
  width: 100%;
}

.eighthalbum .songs {
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