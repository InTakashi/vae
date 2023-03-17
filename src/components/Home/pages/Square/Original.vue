<template>
  <div class="OV-outerbox">
    <div class="header-box">
      <div class="header">
        <a href="javascript:;" @click="back">
          <div class="el-icon-back"></div>
          <div class="back">返回</div>
        </a>
        <div class="tlttle">原创圈</div>
      </div>
      <div class="empty"></div>
    </div>
    <OriginalPostsOne></OriginalPostsOne>
    <OriginalPostsTwo></OriginalPostsTwo>
    <OriginalPostsThree></OriginalPostsThree>
    <OriginalPostsFour></OriginalPostsFour>
    <OriginalPostsFive></OriginalPostsFive>
    <OriginalPostsOne></OriginalPostsOne>
    <OriginalPostsTwo></OriginalPostsTwo>
    <OriginalPostsThree></OriginalPostsThree>
    <OriginalPostsFour></OriginalPostsFour>
    <OriginalPostsFive></OriginalPostsFive>
    <OriginalPostsOne></OriginalPostsOne>
    <OriginalPostsTwo></OriginalPostsTwo>
    <OriginalPostsThree></OriginalPostsThree>
    <OriginalPostsFour></OriginalPostsFour>
    <OriginalPostsFive></OriginalPostsFive>
  </div>
</template>

<script>
import OriginalPostsOne from "./SquarePosts/OriginalPostsOne.vue";
import OriginalPostsTwo from "./SquarePosts/OriginalPostsTwo.vue";
import OriginalPostsThree from "./SquarePosts/OriginalPostsThree.vue";
import OriginalPostsFour from "./SquarePosts/OriginalPostsFour.vue";
import OriginalPostsFive from "./SquarePosts/OriginalPostsFive.vue";

export default {
  name: "OriginalVc",

  components: {
    OriginalPostsOne,
    OriginalPostsTwo,
    OriginalPostsThree,
    OriginalPostsFour,
    OriginalPostsFive,
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
.OV-outerbox {
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