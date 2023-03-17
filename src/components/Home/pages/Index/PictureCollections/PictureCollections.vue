<template>
  <div class="PC-outerbox">
    <PictureCollectionsHeader></PictureCollectionsHeader>
    <div class="content-box">
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
      <el-drawer
        title="许嵩&国风音乐盛典之新元之夜"
        direction="rtl"
        :visible.sync="drawerone"
        size="30%"
      >
        <collectionsOneContent></collectionsOneContent>
      </el-drawer>
      <el-drawer
        title="许嵩&2021bilibli最美的夜跨年晚会"
        direction="rtl"
        :visible.sync="drawertwo"
        size="30%"
      >
        <collectionsTwoContent></collectionsTwoContent>
      </el-drawer>
      <el-drawer
        title="许嵩&江苏卫视奇妙之旅晚会"
        direction="rtl"
        :visible.sync="drawerthree"
        size="30%"
      >
        <collectionsThreeContent></collectionsThreeContent>
      </el-drawer>
      <el-drawer
        title="许嵩&第十五届音乐盛典咪咕汇"
        direction="rtl"
        :visible.sync="drawerfour"
        size="30%"
      >
        <collectionsFourContent></collectionsFourContent>
      </el-drawer>
      <el-drawer
        title="许嵩& “阅世” 2021六月刊 图集"
        direction="rtl"
        :visible.sync="drawerfive"
        size="30%"
      >
        <collectionsFiveContent></collectionsFiveContent>
      </el-drawer>
      <el-drawer
        title="“我的音乐你听吗” 高清图集"
        direction="rtl"
        :visible.sync="drawersix"
        size="30%"
      >
        <collectionsSixContent></collectionsSixContent>
      </el-drawer>
      <SeeMore></SeeMore>
    </div>
  </div>
</template>

<script>
import PictureCollectionsHeader from "./PictureCollectionsHeader.vue";
import collectionsOne from "./collectionsOne.vue";
import collectionsTwo from "./collectionsTwo.vue";
import collectionsThree from "./collectionsThree.vue";
import collectionsFour from "./collectionsFour.vue";
import collectionsFive from "./collectionsFive.vue";
import collectionsSix from "./collectionsSix.vue";

import collectionsOneContent from "./collections/collectionsOneContent.vue";
import collectionsTwoContent from "./collections/collectionsTwoContent.vue";
import collectionsThreeContent from "./collections/collectionsThreeContent.vue";
import collectionsFourContent from "./collections/collectionsFourContent.vue";
import collectionsFiveContent from "./collections/collectionsFiveContent.vue";
import collectionsSixContent from "./collections/collectionsSixContent.vue";
import SeeMore from "../SeeMore.vue";


export default {
  name: "PictureCollections",
  data() {
    return {
      drawerone: false,
      drawertwo: false,
      drawerthree: false,
      drawerfour: false,
      drawerfive: false,
      drawersix: false,
      
    };
  },

  components: {
    PictureCollectionsHeader,
    collectionsOne,
    collectionsTwo,
    collectionsThree,
    collectionsFour,
    collectionsFive,
    collectionsSix,
    collectionsOneContent,
    collectionsTwoContent,
    collectionsThreeContent,
    collectionsFourContent,
    collectionsFiveContent,
    collectionsSixContent,
    SeeMore,
  },
};
</script>

<style scoped>
.PC-outerbox {
  width: 40%;
  height: 460px;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: -10px 10px 20px rgb(249, 249, 249);
}

.content-box {
  width: 455px;
  height: 409px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
}

.content-box a {
  perspective: 800px;
}
</style>