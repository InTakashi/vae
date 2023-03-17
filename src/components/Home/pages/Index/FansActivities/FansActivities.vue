<template>
  <div class="FA-outerbox">
    <FansActivitiesHeader></FansActivitiesHeader>
    <div class="content-box">
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
        size="30%"
      >
        <ActivitiesOneContent></ActivitiesOneContent>
      </el-drawer>
      <el-drawer
        title="活动介绍"
        direction="ltr"
        :visible.sync="drawertwo"
        size="30%"
      >
        <ActivitiesTwoContent></ActivitiesTwoContent>
      </el-drawer>
      <el-drawer
        title="活动介绍"
        direction="ltr"
        :visible.sync="drawerthree"
        size="30%"
      >
        <ActivitiesThreeContent></ActivitiesThreeContent>
      </el-drawer>
      <el-drawer
        title="活动介绍"
        direction="ltr"
        :visible.sync="drawerfour"
        size="30%"
      >
        <ActivitiesFourContent></ActivitiesFourContent>
      </el-drawer>
      <el-drawer
        title="活动介绍"
        direction="ltr"
        :visible.sync="drawerfive"
        size="30%"
      >
        <ActivitiesFiveContent></ActivitiesFiveContent>
      </el-drawer>
      <el-drawer
        title="活动介绍"
        direction="ltr"
        :visible.sync="drawersix"
        size="30%"
      >
        <ActivitiesSixContent></ActivitiesSixContent>
      </el-drawer>
      <SeeMore></SeeMore>
    </div>
  </div>
</template>

<script>
import FansActivitiesHeader from "./FansActivitiesHeader.vue";
import SeeMore from "../SeeMore.vue";
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
  name: "FansActivities",
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
    FansActivitiesHeader,
    SeeMore,
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
.FA-outerbox {
  width: 40%;
  height: 460px;
  margin: 0 auto 40px 5%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: -10px 10px 20px rgb(249, 249, 249);
}

.content-box {
  width: 100%;
  height: 409px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  overflow: auto;
}

.content-box a {
  perspective: 800px;
}
</style>