<template>
  <div class="VC-outerbox">
    <div class="innerbox">
      <div class="topbox">
        <div class="span">许嵩来了</div>
        <a href="javascript:;" @click="drawer = true"> 更多>> </a>
        <el-drawer
          title="许嵩来了"
          direction="ltr"
          :visible.sync="drawer"
          size="50%"
        >
          <div class="innerdrawerbox">
            <el-button class="content" @click="innerDrawerone = true">
              <MoreOne></MoreOne>
            </el-button>
            <el-button class="content" @click="innerDrawertwo = true">
              <MoreTwo></MoreTwo>
            </el-button>
            <el-button class="content" @click="innerDrawerthree = true">
              <MoreThree></MoreThree>
            </el-button>
            <el-button class="content" @click="innerDrawerfour = true">
              <MoreFour></MoreFour>
            </el-button>
            <el-button class="content" @click="innerDrawerfive = true">
              <MoreFive></MoreFive>
            </el-button>
            <el-button class="content" @click="innerDrawersix = true">
              <MoreSix></MoreSix>
            </el-button>
            <el-drawer
              title="帖子详情"
              direction="ltr"
              :append-to-body="true"
              :visible.sync="innerDrawerone"
            >
              <ContentOne></ContentOne>
            </el-drawer>
            <el-drawer
              title="帖子详情"
              direction="ltr"
              :append-to-body="true"
              :visible.sync="innerDrawertwo"
            >
              <ContentTwo></ContentTwo>
            </el-drawer>
            <el-drawer
              title="帖子详情"
              direction="ltr"
              :append-to-body="true"
              :visible.sync="innerDrawerthree"
            >
              <ContentThree></ContentThree>
            </el-drawer>
            <el-drawer
              title="帖子详情"
              direction="ltr"
              :append-to-body="true"
              :visible.sync="innerDrawerfour"
            >
              <ContentFour></ContentFour>
            </el-drawer>
            <el-drawer
              title="帖子详情"
              direction="ltr"
              :append-to-body="true"
              :visible.sync="innerDrawerfive"
            >
              <ContentFive></ContentFive>
            </el-drawer>
            <el-drawer
              title="帖子详情"
              direction="ltr"
              :append-to-body="true"
              :visible.sync="innerDrawersix"
            >
              <ContentSix></ContentSix>
            </el-drawer>
          </div>
        </el-drawer>
      </div>
      
      <div class="contentbox">
        <div class="info">
          <div class="headportrait">
            <el-avatar
              shape="square"
              size="medium"
              :src="squareUrl"
            ></el-avatar>
            <span>许嵩</span>
            <div class="time">02-05 08:49:36</div>
          </div>
          <p class="text">{{ text }}</p>
        </div>
        <div class="imgbox">
          <el-image class="img" :src="url" :preview-src-list="srcList">
          </el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreOne from "./MoreOne.vue";
import MoreTwo from "./MoreTwo.vue";
import MoreThree from "./MoreThree.vue";
import MoreFour from "./MoreFour.vue";
import MoreFive from "./MoreFive.vue";
import MoreSix from "./MoreSix.vue";

import ContentOne from "./contents/ContentOne.vue";
import ContentTwo from "./contents/ContentTwo.vue";
import ContentThree from "./contents/ContentThree.vue";
import ContentFour from "./contents/ContentFour.vue";
import ContentFive from "./contents/ContentFive.vue";
import ContentSix from "./contents/ContentSix.vue";

export default {
  name: "VaeComing",
  data() {
    return {
      text: "初五早，动起来",
      // 头像
      squareUrl: require("../../../../Pictures/index/vae-coming/head-portrait.jpg"),
      // 帖子照片
      url: require("../../../../Pictures/index/vae-coming/share-pictures/2022.02.05.jpg"),
      srcList: [
        require("../../../../Pictures/index/vae-coming/share-pictures/2022.02.05.jpg"),
      ],

      drawer: false,
      
      innerDrawerone: false,
      innerDrawertwo: false,
      innerDrawerthree: false,
      innerDrawerfour: false,
      innerDrawerfive: false,
      innerDrawersix: false,
    };
  },

  components: {
    MoreOne,
    MoreTwo,
    MoreThree,
    MoreFour,
    MoreFive,
    MoreSix,
    ContentOne,
    ContentTwo,
    ContentThree,
    ContentFour,
    ContentFive,
    ContentSix,
  },
};
</script>

<style scoped>
.VC-outerbox {
  width: 40%;
  height: 460px;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 30px rgb(241, 241, 241);
}


.innerbox {
  width: 100%;
}

.innerbox .topbox {
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgb(202, 202, 202);
}

.innerbox .topbox .span {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 80px;
  height: 48px;
  font-size: 15px;
  border-bottom: solid 2px rgb(64,158,255);
}
.innerbox .topbox a {
  position: absolute;
  right: 15px;
  bottom: 10px;
  text-decoration: none;
  font-size: 12px;
  height: 16px;
  color: rgb(150, 150, 150);
}

.topbox .innerdrawerbox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.topbox .innerdrawerbox .content {
  display: block;
  width: 300px;
  height: 180px;
  margin: 10px 0;
  border-radius: 20px;
}

.contentbox {
  display: flex;
  flex-direction: column;
  height: 400px;
}

.contentbox .info .headportrait {
  display: flex;
  align-items: center;
  position: relative;
  margin: 20px 0 20px 10px;
}

.contentbox .info .headportrait span {
  font-size: 14px;
  color: rgb(100, 100, 100);
  margin-left: 10px;
}

.contentbox .info .headportrait .time {
  font-size: 12px;
  color: rgb(180, 180, 180);
  position: absolute;
  right: 25px;
  font-family: "Times New Roman";
}

.contentbox .info p {
  margin-top: 30px;
  font-family: "STXINGKA";
  color: rgb(66, 66, 66);
  margin: 0 0 20px 30px;
}

.contentbox .imgbox {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-left: 100px;
  border-radius: 10px;
}

.contentbox .img {
  width: 100%;
}
</style>