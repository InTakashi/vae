<template>
  <div class="AV-outerbox">
    <div class="header-box">
      <div class="header">
        <a href="javascript:;" @click="back">
          <div class="el-icon-back"></div>
          <div class="back">返回</div>
        </a>
        <div class="tlttle">有关V</div>
      </div>
      <div class="empty"></div>
    </div>
    <AboutVPostsOne></AboutVPostsOne>
    <AboutVPostsTwo></AboutVPostsTwo>
    <AboutVPostsThree></AboutVPostsThree>
    <AboutVPostsFour></AboutVPostsFour>
    <AboutVPostsFive></AboutVPostsFive>
    <AboutVPostsOne></AboutVPostsOne>
    <AboutVPostsTwo></AboutVPostsTwo>
    <AboutVPostsThree></AboutVPostsThree>
    <AboutVPostsFour></AboutVPostsFour>
    <AboutVPostsFive></AboutVPostsFive>
    <AboutVPostsOne></AboutVPostsOne>
    <AboutVPostsTwo></AboutVPostsTwo>
    <AboutVPostsThree></AboutVPostsThree>
    <AboutVPostsFour></AboutVPostsFour>
    <AboutVPostsFive></AboutVPostsFive>
  </div>
</template>

<script>
import AboutVPostsOne from "./SquarePosts/AboutVPostsOne.vue";
import AboutVPostsTwo from "./SquarePosts/AboutVPostsTwo.vue";
import AboutVPostsThree from "./SquarePosts/AboutVPostsThree.vue";
import AboutVPostsFour from "./SquarePosts/AboutVPostsFour.vue";
import AboutVPostsFive from "./SquarePosts/AboutVPostsFive.vue";

export default {
  name: "AboutV",

  components: {
    AboutVPostsOne,
    AboutVPostsTwo,
    AboutVPostsThree,
    AboutVPostsFour,
    AboutVPostsFive,
  },

  methods: {
    back() {
      this.$parent.$children[1].$children[0].show = true;
      this.$parent.$children[1].$children[1].show = false;
      this.$parent.$children[1].$children[2].show = false;
      this.$parent.$children[1].$children[3].show = false;
      this.$parent.$children[1].$children[4].show = false;
      this.$parent.$children[1].$children[5].show = false;
      this.$parent.$children[1].$children[6].show = false;
      this.$router.push({
        name: "squareposts",
      });
    },
  },
};
</script>

<style scoped>
.AV-outerbox {
  width: 100%;
  
}

.header-box {
  width: 100%;
  background-color: rgb(130, 164, 255);
}

.header {
  display: flex;
  align-items: center;
  height: 50px;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
}

.header a {
  display: flex;
  color: rgb(255, 255, 255);
  margin-right: 40px;
  font-size: 20px;
}

.back {
  margin-left: 10px;
}

.tlttle {
  font-size: 22px;
}

.empty {
  width: 100%;
  height: 40px;
  border-radius: 10px 10px 0 0;
  background-color: rgb(255, 255, 255);
}
</style>