<template>
  <div class="secondcontent">
    <div class="secondcontent-innerbox">
      <div class="back">
        <el-page-header
          @back="goBack"
          v-loading.fullscreen="loading"
          content="详情页面"
        >
        </el-page-header>
      </div>
      <div class="secondalbum">
        <div class="info">
          <div class="imgbox">
            <img src="../../../../../Pictures/mall/albums/second.png" />
          </div>
          <div class="text">
            <p class="albumname">专辑名称：《寻雾启示》</p>
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
        <p>这是他的第二张演唱专辑</p>
        <p>是他的第二张词作品集</p>
        <p>是他的第二张曲作品集</p>
        <p>是他的第二张录音混音作品集</p>
        <p>是他的第二张独立策划、独立发行专辑……</p>
        <p>首张专辑《自定义》横空出世时，大家认为，那是个性,而《寻雾启示》再次单枪来袭时，大家知道，这是秉性。</p>
        <p>2009，2008，2007……你可能在街头听过许嵩的歌，在各种音乐排行榜上见过许嵩这个名字，看到过年轻人一脸兴奋的讨论着“Vae”、“自定义”，但你不一定知道，这不是什么唱片公司打榜、宣传所产生的效果，而是完全靠着乐迷口口相传的力量，这股力量已经延续了近三个年头，并且正在持续蔓延中。</p>
        <p>他拒绝签约唱片公司，独立完成个人专辑的创作、制作及发行。他绝对是内地近年来网络人气最高的独立音乐人，没有之一。他是内地乐坛的一个异数。</p>
        <p>2010年1月发行的最新作品《寻雾启示》是他的个人第二辑。和2009年1月发行的首张专辑《自定义》一样，他一人担任了整张唱片的作词、作曲及制作人——大到整张专辑的风格定位，小到每一首歌的和声编配、乐器音色选用、录音混音，大大小小所有环节都在他掌控之中。</p>
        <p>听许嵩的创作，总能让人体会到前所未有的音乐灵感，总能让人在细枝末节处找到直击人心的感动。在这张《寻雾启示》中，刚柔并济的曲风搭配、率性洒脱的行文作词，自居一格的演唱方式，都让人感受到一种无可拷贝的气场。这是一张游走在「复古 / 新锐」、「嬉皮 / 深情」、「回忆 / 现实」、「深度 / 流传度」之间的作品，对以上要素恰到好处的分寸把握，再一次证明了23岁的他已经拥有强大制片功力。</p>
        <p>乍听到“寻雾启示”这个名字，还以为是寻物启事。其实，我们每个人都在生活中寻找着，又在寻找中生活着；身边很多看似美丽的事物和雾一样，看得见却让人抓不住；所谓人生的进阶与历练，可能正是要在经历得失与悲喜之后，方能得到启示。</p>
        <p>听《寻雾启示》，是非常容易陷入某种情绪的。你要知道，音乐一旦对了味，俘获人心的力量有多大。</p>
        <p>01.叹服 词/曲：许嵩</p>
        <p>招牌式黑色作品。爱情里的所有忠诚与信仰化作一片雾气，让天下多少有情人在一路追寻过后，只留下阵阵唏嘘。</p>
        <p>02.灰色头像 词/曲：许嵩</p>
        <p>当一段本身已足够伤感的回忆被挖掘到了极致，却发现所有的回忆竟是一团雾，一场梦……充满回忆感的吉他滑音、电钢solo，慵懒而不失弹性的深情演绎，是为慢板抒情R&B之上品。</p>
        <p>03.我无所谓 词/曲：许嵩</p>
        <p>玩世不恭却又透出几分认真的一首RAP，那种嬉皮劲儿是能让人会心一笑的。</p>
        <p>04.庐州月 词/曲：许嵩</p>
        <p>作者化身一位古代出仕者，思考着功名利禄的虚妄、感叹着物是人非的苍凉、抒发着远离故乡的怅惘，可谓各种细腻熔于一炉。慢板的6/8R&B节奏引领出一个个章节，一幅幅古典画面自然而然呈现在你眼前。</p>
        <p>05.不煽情 词/曲：许嵩</p>
        <p>名为不煽情，但却很是煽动人心的一首叙事小品。许嵩从头至尾采用了口语对话的笔法，极富表现力的双吉他演奏陪伴着歌声，描摹出一场爱情的淡然落幕。</p>
        <p>06.我们的恋爱是对生命的严重浪费 词/曲：许嵩</p>
        <p>歌名很长很直白，歌曲也非常直截了当。热烈却不轻浮的Rock编曲以及随性奔放的演唱都很令人惊艳，亦让人领略到许嵩的多面。</p>
        <p>07.白马非马 词/曲：许嵩</p>
        <p>以哲学命题为名展开思考。大胆采用纯钢琴伴奏+几近清唱的混音方式，细枝末节如此凸显，连每一声换息都牵动人心。</p>
        <p>08.单人旅途 词/曲：许嵩</p>
        <p>失恋者快意洒脱的单身宣言，往往都带着些酸；“自由”不过就是一团雾，一个幌子，远远看起来很美，真正身处其间拥有了，却又觉着寂寞。这首中板R&B里面的情味比起它里面的转音，更为复杂。</p>
        <p>09.在那不遥远的地方 词/曲：许嵩</p>
        <p>梦想就在不遥远的地方——虽然，在得到之前，我们并不能确定它是否是幻想。电子音色与中国民乐混搭、开阔大气的词风、行云流水般的光滑人声、多层次对话式和声恰到好处的运用，组成了这首极具实验性的跨界混搭励志曲。</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "SecondContent",
  data() {
    return {
      loading: false,
      tableData: [
        { name: "叹服", singer: "许嵩", album: "寻雾启示" },
        { name: "灰色头像", singer: "许嵩", album: "寻雾启示" },
        { name: "我无所谓", singer: "许嵩", album: "寻雾启示" },
        { name: "庐州月", singer: "许嵩", album: "寻雾启示" },
        { name: "不煽情", singer: "许嵩", album: "寻雾启示" },
        { name: "我们的恋爱是对生命的严重浪费", singer: "许嵩", album: "寻雾启示" },
        { name: "白马非马", singer: "许嵩", album: "寻雾启示" },
        { name: "单人旅途", singer: "许嵩", album: "寻雾启示" },
        { name: "在那不遥远的地方", singer: "许嵩", album: "寻雾启示" },
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
.secondcontent {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.secondcontent-innerbox {
  width: 90%;
}

.back {
  width: 100%;
  margin-bottom: 50px;
  margin-left: 70px;
}

.secondcontent .secondalbum {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.secondalbum .info {
  width: 300px;
}

.secondalbum .info .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 150px;
  
}

.secondalbum .info .text .albumname {
  font-size: 20px;
}

.secondalbum .info .text .price {
  display: flex;
  align-items: center;
}

.secondalbum .info .text .price p span {
  font-size: 12px;
  margin-left: 2px;
}

.secondalbum .info .text .price img {
  width: 20px;
  margin: 0 8px;
}

.secondalbum .info .imgbox,
.secondalbum .info img {
  width: 100%;
}

.secondalbum .songs {
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