<template>
  <div class="sixcontent">
    <div class="sixcontent-innerbox">
      <div class="back">
        <el-page-header
          @back="goBack"
          v-loading.fullscreen="loading"
          content="详情页面"
        >
        </el-page-header>
      </div>
      <div class="sixalbum">
        <div class="info">
          <div class="imgbox">
            <img src="../../../../../Pictures/mall/albums/sixth.png" />
          </div>
          <div class="text">
            <p class="albumname">专辑名称：《青年晚报》</p>
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
        <p>
          ◆2016年许嵩最新作品《青年晚报》，许嵩第6张词曲全创作专辑。-21日，在其官方网站十日预售量即突破一万张，可谓树立了独立音乐人的人气典范。
        </p>
        <p>
          ◆《青年晚报》，是一个三十而立的青年敞开自己和你面对面交心，也是一家晚报记述着生活的真相和所引发的思考，感性与理性交叠。歌词读来有如摊开一张晚报所看到的版面：社会生活、人生况味、暖心故事、摄影专栏，甚至不缺关于“最佳歌手”的娱乐头条以及“早睡身体好” 的养生大法。闪耀着思维火花的文字，诗性与易读性兼具，偶尔透出冷冷的幽默感，是独属于许嵩的那份亦庄亦谐。
        </p>
        <p>◆《青年晚报》以宽阔的创作视野展现了多元化的音乐风格，而这一切又统一于许嵩的个人特质，丰富而不散乱。较多曲目以电钢、电吉他以及流动的电子乐音色为串联，铺陈出静谧氛围，一如唱片封面中行走在巴黎街头的青年，背靠夕阳，晚报时分。</p>
        <p>
          ◆音乐制作方面，《青年晚报》由许嵩担任音乐总监并包办制作所有曲目。至今为止许嵩已经一人作词、作曲、唱、制作6张个人专辑，“一人包办制”使得他的专辑一贯具有极为强烈的个人风格。编曲及演奏方面，包括AdamLee、蔡廷贵、郑楠、高飞等来自新加坡、北京与台北的著名音乐人友情加盟，为《青年晚报》添彩。
        </p>
        <p>
          ◆唱片的平面资料及《摄影艺术》的音乐录影带拍摄于法国巴黎。十余人团队同许嵩一起从北京出发，海外拍摄共花费长达半个月，由青年摄影家张罗平掌镜，真正实践“摄影艺术”。《雅俗共赏》及《最佳歌手》的音乐录影带由台湾金曲奖最佳导演比尔贾执导，用前卫的影像风格精准呈现歌曲内涵。
        </p>
        <p>
          ◆2016是许嵩进入公众视野的第十年，十年内成功发行6张词曲全创作专辑以及近40首原创单曲，专注创作从未停歇前行的脚步；屡屡获得国内外各大华语音乐颁奖典礼奖项，每张专辑都拥有突破亿万次的数字音乐下载量，影响力持续发酵；从年少成名到引发争论再到才华终受广泛认可，十年里无论身处什么阶段许嵩始终保持低调姿态，而许嵩的庞大歌迷群体也从当初冲动狂热的少年转变为如今以成熟理性青年为主，可谓是共同成长的青春十年。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SixthContent",
  data() {
    return {
      loading: false,
      tableData: [
        { name: "奇谈", singer: "许嵩", album: "青年晚报" },
        { name: "雅俗共赏", singer: "许嵩", album: "青年晚报" },
        { name: "最佳歌手", singer: "许嵩", album: "青年晚报" },
        { name: "幻胖", singer: "许嵩", album: "青年晚报" },
        { name: "摄影艺术", singer: "许嵩", album: "青年晚报" },
        { name: "平行宇宙", singer: "许嵩", album: "青年晚报" },
        { name: "燕归巢", singer: "许嵩", album: "青年晚报" },
        { name: "摆脱", singer: "许嵩", album: "青年晚报" },
        { name: "早睡身体好", singer: "许嵩", album: "青年晚报" },
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
.sixcontent {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.sixcontent-innerbox {
  width: 90%;
}

.back {
  width: 100%;
  margin-bottom: 50px;
  margin-left: 70px;
}

.sixcontent .sixalbum {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.sixalbum .info {
  width: 300px;
}

.sixalbum .info .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  
}

.sixalbum .info .text .albumname {
  font-size: 20px;
}

.sixalbum .info .text .price {
  display: flex;
  align-items: center;
}

.sixalbum .info .text .price p span {
  font-size: 12px;
  margin-left: 2px;
}

.sixalbum .info .text .price img {
  width: 20px;
  margin: 0 8px;
}

.sixalbum .info .imgbox,
.sixalbum .info img {
  width: 100%;
}

.sixalbum .songs {
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