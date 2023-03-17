<template>
  <div class="TP-outerbox">
    <ChamberlainVc></ChamberlainVc>
    <AboutVRules></AboutVRules>
    <OriginalRules></OriginalRules>
    <ShowFaceRules></ShowFaceRules>
    <WantToKnowRules></WantToKnowRules>
    <LifeRules></LifeRules>
    <BlackFansRules></BlackFansRules>
  </div>
</template>

<script>
import ChamberlainVc from "./ToppingPosts/Chamberlain.vue";
import AboutVRules from "./ToppingPosts/AboutVRules.vue";
import OriginalRules from "./ToppingPosts/OriginalRules.vue";
import ShowFaceRules from "./ToppingPosts/ShowFaceRules.vue";
import WantToKnowRules from "./ToppingPosts/WantToKnowRules.vue";
import LifeRules from "./ToppingPosts/LifeRules.vue";
import BlackFansRules from "./ToppingPosts/BlackFansRules.vue";

export default {
  name: "ToppingPost",
  components: {
    ChamberlainVc,
    AboutVRules,
    OriginalRules,
    ShowFaceRules,
    WantToKnowRules,
    LifeRules,
    BlackFansRules,
  },
};
</script>

<style scoped>
.TP-outerbox {
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  background-color: rgb(255, 255, 255);
  
}
</style>