<template>
  <div class="header-box">
    <div class="span">图集</div>
    <a class="more" href="javascript:;" @click="drawer = true"> 更多>> </a>
    <el-drawer title="图集" direction="rtl" :visible.sync="drawer" size="40%">
      <div class="outer-box">
        <div class="inner-box">
          <a href="javascript:;" @click="drawerone = true">
            <collectionsOne></collectionsOne>
          </a>
          <a href="javascript:;" @click="drawertwo = true">
            <collectionsTwo></collectionsTwo>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <collectionsThree></collectionsThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <collectionsFour></collectionsFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <collectionsFive></collectionsFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <collectionsSix></collectionsSix>
          </a>
          <a href="javascript:;" @click="drawerseven = true">
            <collectionsSeven></collectionsSeven>
          </a>
          <a href="javascript:;" @click="drawereight = true">
            <collectionsEight></collectionsEight>
          </a>
          <a href="javascript:;" @click="drawernine = true">
            <collectionsNine></collectionsNine>
          </a>
          <el-drawer
            title="许嵩&国风音乐盛典之新元之夜"
            direction="rtl"
            :visible.sync="drawerone"
            :append-to-body="true"
          >
            <collectionsOneContent></collectionsOneContent>
          </el-drawer>
          <el-drawer
            title="许嵩&2021bilibli最美的夜跨年晚会"
            direction="rtl"
            :visible.sync="drawertwo"
            :append-to-body="true"
          >
            <collectionsTwoContent></collectionsTwoContent>
          </el-drawer>
          <el-drawer
            title="许嵩&江苏卫视奇妙之旅晚会"
            direction="rtl"
            :visible.sync="drawerthree"
            :append-to-body="true"
          >
            <collectionsThreeContent></collectionsThreeContent>
          </el-drawer>
          <el-drawer
            title="许嵩&第十五届音乐盛典咪咕汇"
            direction="rtl"
            :visible.sync="drawerfour"
            :append-to-body="true"
          >
            <collectionsFourContent></collectionsFourContent>
          </el-drawer>
          <el-drawer
            title="许嵩& “阅世” 2021六月刊 图集"
            direction="rtl"
            :visible.sync="drawerfive"
            :append-to-body="true"
          >
            <collectionsFiveContent></collectionsFiveContent>
          </el-drawer>
          <el-drawer
            title="“我的音乐你听吗” 高清图集"
            direction="rtl"
            :visible.sync="drawersix"
            :append-to-body="true"
          >
            <collectionsSixContent></collectionsSixContent>
          </el-drawer>
          <el-drawer
            title="许嵩 & “新天龙八部” 图集"
            direction="rtl"
            :visible.sync="drawerseven"
            :append-to-body="true"
          >
            <collectionsSevenContent></collectionsSevenContent>
          </el-drawer>
          <el-drawer
            title="《呼吸之野》高清图集"
            direction="rtl"
            :visible.sync="drawereight"
            :append-to-body="true"
          >
            <collectionsEightContent></collectionsEightContent>
          </el-drawer>
          <el-drawer
            title="《乌鸦》MV高清系列图"
            direction="rtl"
            :visible.sync="drawernine"
            :append-to-body="true"
          >
            <collectionsNineContent></collectionsNineContent>
          </el-drawer>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import collectionsOne from "./collectionsOne.vue";
import collectionsTwo from "./collectionsTwo.vue";
import collectionsThree from "./collectionsThree.vue";
import collectionsFour from "./collectionsFour.vue";
import collectionsFive from "./collectionsFive.vue";
import collectionsSix from "./collectionsSix.vue";
import collectionsSeven from "./collectionsSeven.vue";
import collectionsEight from "./collectionsEight.vue";
import collectionsNine from "./collectionsNine.vue";
import collectionsOneContent from "./collections/collectionsOneContent.vue";
import collectionsTwoContent from "./collections/collectionsTwoContent.vue";
import collectionsThreeContent from "./collections/collectionsThreeContent.vue";
import collectionsFourContent from "./collections/collectionsFourContent.vue";
import collectionsFiveContent from "./collections/collectionsFiveContent.vue";
import collectionsSixContent from "./collections/collectionsSixContent.vue";
import collectionsSevenContent from "./collections/collectionsSevenContent.vue";
import collectionsEightContent from "./collections/collectionsEightContent.vue";
import collectionsNineContent from "./collections/collectionsNineContent.vue";

export default {
  name: "PictureCollectionsHeader",
  data() {
    return {
      drawer: false,
      drawerone: false,
      drawertwo: false,
      drawerthree: false,
      drawerfour: false,
      drawerfive: false,
      drawersix: false,
      drawerseven: false,
      drawereight: false,
      drawernine: false,
    };
  },

  components: {
    collectionsOne,
    collectionsTwo,
    collectionsThree,
    collectionsFour,
    collectionsFive,
    collectionsSix,
    collectionsSeven,
    collectionsEight,
    collectionsNine,
    collectionsOneContent,
    collectionsTwoContent,
    collectionsThreeContent,
    collectionsFourContent,
    collectionsFiveContent,
    collectionsSixContent,
    collectionsSevenContent,
    collectionsEightContent,
    collectionsNineContent,
  },
};
</script>

<style scoped>
.header-box {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgb(202, 202, 202);
}

.header-box .span {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 80px;
  height: 48px;
  font-size: 15px;
  border-bottom: solid 2px rgb(64, 158, 255);
}
.header-box .more {
  position: absolute;
  right: 15px;
  bottom: 10px;
  text-decoration: none;
  font-size: 12px;
  height: 16px;
  color: rgb(150, 150, 150);
}

.outer-box {
  width: 100%;
  display: flex;
  justify-content: center;
}

.header-box .inner-box {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.header-box .inner-box a {
  perspective: 800px;
}
</style>