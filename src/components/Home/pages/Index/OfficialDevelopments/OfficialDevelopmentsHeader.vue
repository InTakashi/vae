<template>
  <div class="header-box">
    <div class="span">官方动态</div>
    <a class="more" href="javascript:;" @click="drawer = true"> 更多>> </a>
    <el-drawer
      title="官方动态"
      direction="rtl"
      :visible.sync="drawer"
      size="40%"
    >
      <div class="outer-box">
        <div class="inner-box">
          <a href="javascript:;" @click="drawerone = true">
            <NewsOne></NewsOne>
          </a>
          <a href="javascript:;" @click="drawertwo = true">
            <NewsTwo></NewsTwo>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <NewsThree></NewsThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <NewsFour></NewsFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <NewsFive></NewsFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <NewsSix></NewsSix>
          </a>
          <a href="javascript:;" @click="drawerseven = true">
            <NewsSeven></NewsSeven>
          </a>
          <a href="javascript:;" @click="drawereight = true">
            <NewsEight></NewsEight>
          </a>
          <a href="javascript:;" @click="drawernine = true">
            <NewsNine></NewsNine>
          </a>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawerone"
            :append-to-body="true"
          >
            <NewsOneContent></NewsOneContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawertwo"
            :append-to-body="true"
          >
            <NewsTwoContent></NewsTwoContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawerthree"
            :append-to-body="true"
          >
            <NewsThreeContent></NewsThreeContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawerfour"
            :append-to-body="true"
          >
            <NewsFourContent></NewsFourContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawerfive"
            :append-to-body="true"
          >
            <NewsFiveContent></NewsFiveContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawersix"
            :append-to-body="true"
          >
            <NewsSixContent></NewsSixContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawerseven"
            :append-to-body="true"
          >
            <NewsSevenContent></NewsSevenContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawereight"
            :append-to-body="true"
          >
            <NewsEightContent></NewsEightContent>
          </el-drawer>
          <el-drawer
            title="帖子详情"
            direction="rtl"
            :visible.sync="drawernine"
            :append-to-body="true"
          >
            <NewsNineContent></NewsNineContent>
          </el-drawer>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import NewsOne from "./NewsOne.vue";
import NewsTwo from "./NewsTwo.vue";
import NewsThree from "./NewsThree.vue";
import NewsFour from "./NewsFour.vue";
import NewsFive from "./NewsFive.vue";
import NewsSix from "./NewsSix.vue";
import NewsSeven from "./NewsSeven.vue";
import NewsEight from "./NewsEight.vue";
import NewsNine from "./NewsNine.vue";
import NewsOneContent from "./news/NewsOneContent.vue";
import NewsTwoContent from "./news/NewsTwoContent.vue";
import NewsThreeContent from "./news/NewsThreeContent.vue";
import NewsFourContent from "./news/NewsFourContent.vue";
import NewsFiveContent from "./news/NewsFiveContent.vue";
import NewsSixContent from "./news/NewsSixContent.vue";
import NewsSevenContent from "./news/NewsSevenContent.vue";
import NewsEightContent from "./news/NewsEightContent.vue";
import NewsNineContent from "./news/NewsNineContent.vue";

export default {
  name: "OfficialDevelopmentsHeader",
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
    NewsOne,
    NewsTwo,
    NewsThree,
    NewsFour,
    NewsFive,
    NewsSix,
    NewsSeven,
    NewsEight,
    NewsNine,
    NewsOneContent,
    NewsTwoContent,
    NewsThreeContent,
    NewsFourContent,
    NewsFiveContent,
    NewsSixContent,
    NewsSevenContent,
    NewsEightContent,
    NewsNineContent,
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

.outer-box{
  width: 100%;
  display: flex;
  justify-content: center;
}

.header-box .inner-box {
  width: 90%;
}
</style>