<template>
  <div class="LV-outerbox">
    <div class="header-box">
      <div class="header">
        <a href="javascript:;" @click="back">
          <div class="el-icon-back"></div>
          <div class="back">返回</div>
        </a>
        <div class="tlttle">生活圈</div>
      </div>
      <div class="empty"></div>
    </div>
    <LifePostsOne></LifePostsOne>
    <LifePostsTwo></LifePostsTwo>
    <LifePostsThree></LifePostsThree>
    <LifePostsFour></LifePostsFour>
    <LifePostsFive></LifePostsFive>
    <LifePostsOne></LifePostsOne>
    <LifePostsTwo></LifePostsTwo>
    <LifePostsThree></LifePostsThree>
    <LifePostsFour></LifePostsFour>
    <LifePostsFive></LifePostsFive>
    <LifePostsOne></LifePostsOne>
    <LifePostsTwo></LifePostsTwo>
    <LifePostsThree></LifePostsThree>
    <LifePostsFour></LifePostsFour>
    <LifePostsFive></LifePostsFive>
    <LifePostsOne></LifePostsOne>
    <LifePostsTwo></LifePostsTwo>
    <LifePostsThree></LifePostsThree>
    <LifePostsFour></LifePostsFour>
    <LifePostsFive></LifePostsFive>
  </div>
</template>

<script>
import LifePostsOne from "./SquarePosts/LifePostsOne.vue";
import LifePostsTwo from "./SquarePosts/LifePostsTwo.vue";
import LifePostsThree from "./SquarePosts/LifePostsThree.vue";
import LifePostsFour from "./SquarePosts/LifePostsFour.vue";
import LifePostsFive from "./SquarePosts/LifePostsFive.vue";

export default {
  name: "LifeVc",

  components: {
    LifePostsOne,
    LifePostsTwo,
    LifePostsThree,
    LifePostsFour,
    LifePostsFive,
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
.LV-outerbox {
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