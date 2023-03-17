<template>
  <div class="header-box">
    <div class="span">最新行程</div>
    <a class="more" href="javascript:;" @click="drawer = true"> 更多>> </a>
    <el-drawer
      title="最新行程"
      direction="ltr"
      :visible.sync="drawer"
      size="40%"
    >
      <div class="outer-box">
        <div class="inner-box">
          <a href="javascript:;" @click="drawerone = true">
            <ItineraryOne></ItineraryOne>
          </a>
          <a href="javascript:;" @click="drawertwo = true">
            <ItineraryTwo></ItineraryTwo>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ItineraryThree></ItineraryThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ItineraryFour></ItineraryFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <ItineraryFive></ItineraryFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <ItinerarySix></ItinerarySix>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ItineraryThree></ItineraryThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ItineraryFour></ItineraryFour>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ItineraryThree></ItineraryThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ItineraryFour></ItineraryFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <ItineraryFive></ItineraryFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <ItinerarySix></ItinerarySix>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ItineraryThree></ItineraryThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ItineraryFour></ItineraryFour>
          </a>
          <a href="javascript:;" @click="drawerthree = true">
            <ItineraryThree></ItineraryThree>
          </a>
          <a href="javascript:;" @click="drawerfour = true">
            <ItineraryFour></ItineraryFour>
          </a>
          <a href="javascript:;" @click="drawerfive = true">
            <ItineraryFive></ItineraryFive>
          </a>
          <a href="javascript:;" @click="drawersix = true">
            <ItinerarySix></ItinerarySix>
          </a>

          <el-drawer
            title="行程介绍"
            direction="ltr"
            :visible.sync="drawerone"
            :append-to-body="true"
          >
            <ItineraryOneContent></ItineraryOneContent>
          </el-drawer>
          <el-drawer
            title="行程介绍"
            direction="ltr"
            :visible.sync="drawertwo"
            :append-to-body="true"
          >
            <ItineraryTwoContent></ItineraryTwoContent>
          </el-drawer>
          <el-drawer
            title="行程介绍"
            direction="ltr"
            :visible.sync="drawerthree"
            :append-to-body="true"
          >
            <ItineraryThreeContent></ItineraryThreeContent>
          </el-drawer>
          <el-drawer
            title="行程介绍"
            direction="ltr"
            :visible.sync="drawerfour"
            :append-to-body="true"
          >
            <ItineraryFourContent></ItineraryFourContent>
          </el-drawer>
          <el-drawer
            title="行程介绍"
            direction="ltr"
            :visible.sync="drawerfive"
            :append-to-body="true"
          >
            <ItineraryFiveContent></ItineraryFiveContent>
          </el-drawer>
          <el-drawer
            title="行程介绍"
            direction="ltr"
            :visible.sync="drawersix"
            :append-to-body="true"
          >
            <ItinerarySixContent></ItinerarySixContent>
          </el-drawer>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>

import ItineraryOne from "./ItineraryOne.vue";
import ItineraryTwo from "./ItineraryTwo.vue";
import ItineraryThree from "./ItineraryThree.vue";
import ItineraryFour from "./ItineraryFour.vue";
import ItineraryFive from "./ItineraryFive.vue";
import ItinerarySix from "./ItinerarySix.vue";
import ItineraryOneContent from "./itineraries/ItineraryOneContent.vue";
import ItineraryTwoContent from "./itineraries/ItineraryTwoContent.vue";
import ItineraryThreeContent from "./itineraries/ItineraryThreeContent.vue";
import ItineraryFourContent from "./itineraries/ItineraryFourContent.vue";
import ItineraryFiveContent from "./itineraries/ItineraryFiveContent.vue";
import ItinerarySixContent from "./itineraries/ItinerarySixContent.vue";

export default {
  name: "LatestItineraryHeader",
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
    ItineraryOne,
    ItineraryTwo,
    ItineraryThree,
    ItineraryFour,
    ItineraryFive,
    ItinerarySix,
    ItineraryOneContent,
    ItineraryTwoContent,
    ItineraryThreeContent,
    ItineraryFourContent,
    ItineraryFiveContent,
    ItinerarySixContent,
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

.header-box .inner-box a{
  perspective: 800px;
}
</style>