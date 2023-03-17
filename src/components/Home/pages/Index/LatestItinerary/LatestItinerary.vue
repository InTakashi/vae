<template>
  <div class="LI-outerbox">
    <LatestItineraryHeader></LatestItineraryHeader>
    <div class="content-box">
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

      <a href="javascript:;" @click="drawerseven = true">
        <ItinerarySeven></ItinerarySeven>
      </a>
      <a href="javascript:;" @click="drawereight = true">
        <ItineraryEight></ItineraryEight>
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
        size="30%"
      >
        <ItineraryOneContent></ItineraryOneContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawertwo"
        size="30%"
      >
        <ItineraryTwoContent></ItineraryTwoContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerthree"
        size="30%"
      >
        <ItineraryThreeContent></ItineraryThreeContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerfour"
        size="30%"
      >
        <ItineraryFourContent></ItineraryFourContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerfive"
        size="30%"
      >
        <ItineraryFiveContent></ItineraryFiveContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawersix"
        size="30%"
      >
        <ItinerarySixContent></ItinerarySixContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerseven"
        size="30%"
      >
        <ItinerarySevenContent></ItinerarySevenContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawereight"
        size="30%"
      >
        <ItineraryEightContent></ItineraryEightContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerthree"
        size="30%"
      >
        <ItineraryThreeContent></ItineraryThreeContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerfour"
        size="30%"
      >
        <ItineraryFourContent></ItineraryFourContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawerfive"
        size="30%"
      >
        <ItineraryFiveContent></ItineraryFiveContent>
      </el-drawer>
      <el-drawer
        title="行程介绍"
        direction="ltr"
        :visible.sync="drawersix"
        size="30%"
      >
        <ItinerarySixContent></ItinerarySixContent>
      </el-drawer>
      <SeeMore></SeeMore>
    </div>
  </div>
</template>

<script>
import LatestItineraryHeader from "./LatestItineraryHeader.vue";
import SeeMore from "../SeeMore.vue";
import ItineraryOne from "./ItineraryOne.vue";
import ItineraryTwo from "./ItineraryTwo.vue";
import ItineraryThree from "./ItineraryThree.vue";
import ItineraryFour from "./ItineraryFour.vue";
import ItineraryFive from "./ItineraryFive.vue";
import ItinerarySix from "./ItinerarySix.vue";
import ItinerarySeven from "./ItinerarySeven.vue";
import ItineraryEight from "./ItineraryEight.vue";
import ItineraryOneContent from "./itineraries/ItineraryOneContent.vue";
import ItineraryTwoContent from "./itineraries/ItineraryTwoContent.vue";
import ItineraryThreeContent from "./itineraries/ItineraryThreeContent.vue";
import ItineraryFourContent from "./itineraries/ItineraryFourContent.vue";
import ItineraryFiveContent from "./itineraries/ItineraryFiveContent.vue";
import ItinerarySixContent from "./itineraries/ItinerarySixContent.vue";
import ItinerarySevenContent from "./itineraries/ItinerarySevenContent.vue";
import ItineraryEightContent from "./itineraries/ItineraryEightContent.vue";

export default {
  name: "LatestItinerary",
  data() {
    return {
      drawerone: false,
      drawertwo: false,
      drawerthree: false,
      drawerfour: false,
      drawerfive: false,
      drawersix: false,
      drawerseven: false,
      drawereight: false,
    };
  },

  components: {
    LatestItineraryHeader,
    SeeMore,
    ItineraryOne,
    ItineraryTwo,
    ItineraryThree,
    ItineraryFour,
    ItineraryFive,
    ItinerarySix,
    ItinerarySeven,
    ItineraryEight,
    ItineraryOneContent,
    ItineraryTwoContent,
    ItineraryThreeContent,
    ItineraryFourContent,
    ItineraryFiveContent,
    ItinerarySixContent,
    ItinerarySevenContent,
    ItineraryEightContent,
  },
};
</script>

<style scoped>
.LI-outerbox {
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  overflow: auto;
}

.content-box a {
  perspective: 800px;
}
</style>