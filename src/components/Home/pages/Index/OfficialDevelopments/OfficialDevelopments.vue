<template>
  <div class="OD-outerbox">
    <OfficialDevelopmentsHeader></OfficialDevelopmentsHeader>
    <div class="content-box">
      <a href="javascript:;" @click="drawerone = true"><NewsOne></NewsOne></a>
      <a href="javascript:;" @click="drawertwo = true"><NewsTwo></NewsTwo></a>
      <a href="javascript:;" @click="drawerthree = true"
        ><NewsThree></NewsThree
      ></a>
      <a href="javascript:;" @click="drawerfour = true"><NewsFour></NewsFour></a>
      <a href="javascript:;" @click="drawerfive = true"><NewsFive></NewsFive></a>
      <a href="javascript:;" @click="drawersix = true"><NewsSix></NewsSix></a>
      <el-drawer
        title="帖子详情"
        direction="rtl"
        :visible.sync="drawerone"
        size="30%"
      >
        <NewsOneContent></NewsOneContent>
      </el-drawer>
      <el-drawer
        title="帖子详情"
        direction="rtl"
        :visible.sync="drawertwo"
        size="30%"
      >
        <NewsTwoContent></NewsTwoContent>
      </el-drawer>
      <el-drawer
        title="帖子详情"
        direction="rtl"
        :visible.sync="drawerthree"
        size="30%"
      >
        <NewsThreeContent></NewsThreeContent>
      </el-drawer>
      <el-drawer
        title="帖子详情"
        direction="rtl"
        :visible.sync="drawerfour"
        size="30%"
      >
        <NewsFourContent></NewsFourContent>
      </el-drawer>
      <el-drawer
        title="帖子详情"
        direction="rtl"
        :visible.sync="drawerfive"
        size="30%"
      >
        <NewsFiveContent></NewsFiveContent>
      </el-drawer>
      <el-drawer
        title="帖子详情"
        direction="rtl"
        :visible.sync="drawersix"
        size="30%"
      >
        <NewsSixContent></NewsSixContent>
      </el-drawer>
      <SeeMore></SeeMore>
    </div>
  </div>
</template>

<script>
import OfficialDevelopmentsHeader from "./OfficialDevelopmentsHeader.vue";
import SeeMore from "../SeeMore.vue";
import NewsOne from "./NewsOne.vue";
import NewsTwo from "./NewsTwo.vue";
import NewsThree from "./NewsThree.vue";
import NewsFour from "./NewsFour.vue";
import NewsFive from "./NewsFive.vue";
import NewsSix from "./NewsSix.vue";
import NewsOneContent from "./news/NewsOneContent.vue";
import NewsTwoContent from "./news/NewsTwoContent.vue";
import NewsThreeContent from "./news/NewsThreeContent.vue";
import NewsFourContent from "./news/NewsFourContent.vue";
import NewsFiveContent from "./news/NewsFiveContent.vue";
import NewsSixContent from "./news/NewsSixContent.vue";

export default {
  name: "OfficialDevelopments",

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
    OfficialDevelopmentsHeader,
    SeeMore,
    NewsOne,
    NewsTwo,
    NewsThree,
    NewsFour,
    NewsFive,
    NewsSix,
    NewsOneContent,
    NewsTwoContent,
    NewsThreeContent,
    NewsFourContent,
    NewsFiveContent,
    NewsSixContent,
  },
};
</script>

<style scoped>
.OD-outerbox {
  width: 40%;
  height: 460px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: -10px 10px 20px rgb(249, 249, 249);
}

.content-box {
  width: 100%;
  height: 409px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
</style>