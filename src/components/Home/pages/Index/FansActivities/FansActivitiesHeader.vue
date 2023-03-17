<template>
  <div class="header-box">
    <div class="span">歌迷活动</div>
    <a class="more" href="javascript:;" @click="drawer = true"> 更多>> </a>
    <el-drawer
      title="歌迷活动"
      direction="ltr"
      :visible.sync="drawer"
      size="40%"
    >
      <div class="outer-box">
        <div class="inner-box">
          <a href="javascript:;" @click="drawerone = true">
            <ActivityOne></ActivityOne>
          </a>
          <a href="javascript:;" @click="drawertwo = true">
            <ActivityTwo></ActivityTwo>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ActivityThree></ActivityThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ActivityFour></ActivityFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <ActivityFive></ActivityFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <ActivitySix></ActivitySix>
          </a>
          <a href="javascript:;" @click="drawerone = true">
            <ActivityOne></ActivityOne>
          </a>
          <a href="javascript:;" @click="drawertwo = true">
            <ActivityTwo></ActivityTwo>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ActivityThree></ActivityThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ActivityFour></ActivityFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <ActivityFive></ActivityFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <ActivitySix></ActivitySix>
          </a>
          <a href="javascript:;" @click="drawerone = true">
            <ActivityOne></ActivityOne>
          </a>
          <a href="javascript:;" @click="drawertwo = true">
            <ActivityTwo></ActivityTwo>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ActivityThree></ActivityThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ActivityFour></ActivityFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <ActivityFive></ActivityFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <ActivitySix></ActivitySix>
          </a>

          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerone"
            :append-to-body="true"
          >
            <ActivitiesOneContent></ActivitiesOneContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawertwo"
            :append-to-body="true"
          >
            <ActivitiesTwoContent></ActivitiesTwoContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerthree"
            :append-to-body="true"
          >
            <ActivitiesThreeContent></ActivitiesThreeContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerfour"
            :append-to-body="true"
          >
            <ActivitiesFourContent></ActivitiesFourContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerfive"
            :append-to-body="true"
          >
            <ActivitiesFiveContent></ActivitiesFiveContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawersix"
            :append-to-body="true"
          >
            <ActivitiesSixContent></ActivitiesSixContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerone"
            :append-to-body="true"
          >
            <ActivitiesOneContent></ActivitiesOneContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawertwo"
            :append-to-body="true"
          >
            <ActivitiesTwoContent></ActivitiesTwoContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerthree"
            :append-to-body="true"
          >
            <ActivitiesThreeContent></ActivitiesThreeContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerfour"
            :append-to-body="true"
          >
            <ActivitiesFourContent></ActivitiesFourContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerfive"
            :append-to-body="true"
          >
            <ActivitiesFiveContent></ActivitiesFiveContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawersix"
            :append-to-body="true"
          >
            <ActivitiesSixContent></ActivitiesSixContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerone"
            :append-to-body="true"
          >
            <ActivitiesOneContent></ActivitiesOneContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawertwo"
            :append-to-body="true"
          >
            <ActivitiesTwoContent></ActivitiesTwoContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerthree"
            :append-to-body="true"
          >
            <ActivitiesThreeContent></ActivitiesThreeContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerfour"
            :append-to-body="true"
          >
            <ActivitiesFourContent></ActivitiesFourContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawerfive"
            :append-to-body="true"
          >
            <ActivitiesFiveContent></ActivitiesFiveContent>
          </el-drawer>
          <el-drawer
            title="活动介绍"
            direction="ltr"
            :visible.sync="drawersix"
            :append-to-body="true"
          >
            <ActivitiesSixContent></ActivitiesSixContent>
          </el-drawer>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>

import ActivityOne from "./ActivityOne.vue";
import ActivityTwo from "./ActivityTwo.vue";
import ActivityThree from "./ActivityThree.vue";
import ActivityFour from "./ActivityFour.vue";
import ActivityFive from "./ActivityFive.vue";
import ActivitySix from "./ActivitySix.vue";
import ActivitiesOneContent from "./activities/ActivitiesOneContent.vue";
import ActivitiesTwoContent from "./activities/ActivitiesTwoContent.vue";
import ActivitiesThreeContent from "./activities/ActivitiesThreeContent.vue";
import ActivitiesFourContent from "./activities/ActivitiesFourContent.vue";
import ActivitiesFiveContent from "./activities/ActivitiesFiveContent.vue";
import ActivitiesSixContent from "./activities/ActivitiesSixContent.vue";

export default {
  name: "FansActivitiesHeader",
  data() {
    return {
      drawer:false,
      drawerone: false,
      drawertwo: false,
      drawerthree: false,
      drawerfour: false,
      drawerfive: false,
      drawersix: false,
    };
  },

  components: {
    ActivityOne,
    ActivityTwo,
    ActivityThree,
    ActivityFour,
    ActivityFive,
    ActivitySix,
    ActivitiesOneContent,
    ActivitiesTwoContent,
    ActivitiesThreeContent,
    ActivitiesFourContent,
    ActivitiesFiveContent,
    ActivitiesSixContent,
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