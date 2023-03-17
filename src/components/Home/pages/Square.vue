<template>
  <div class="Square-outerbox">
    <div class="Square-innerbox">
      <div class="left">
        <SquareNav></SquareNav>
        <ToppingPost></ToppingPost>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SquareNav from "./Square/SquareNav.vue";
import ToppingPost from "./Square/ToppingPost.vue";

export default {
  name: "SquarePage",
  components: {
    SquareNav,
    ToppingPost,
  },

  mounted() {
    this.$router.push({
      name: "squareposts",
    });
  },
};
</script>

<style scoped>
.Square-outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
}

.Square-innerbox {
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.left {
  position: sticky;
  top: 61px;
  width: 400px;
  height: 508px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right {
  width: 720px;
}
</style>