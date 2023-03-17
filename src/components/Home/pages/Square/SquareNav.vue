<template>
  <div class="SN-outerbox">
    <div class="contentbox">
      <a href="javascript:;" @click="aboutV">
        <img src="../../../Pictures/square/aboutV.png" />
        <p>有关V</p>
      </a>
    </div>
    <div class="contentbox">
      <a href="javascript:;" @click="original">
        <img src="../../../Pictures/square/original.png" />
        <p>原创圈</p>
      </a>
    </div>
    <div class="contentbox">
      <a href="javascript:;" @click="showFace">
        <img src="../../../Pictures/square/showFace.png" />
        <p>露个脸</p>
      </a>
    </div>
    <div class="contentbox">
      <a href="javascript:;" @click="wantToKnow">
        <img src="../../../Pictures/square/wantToKnow.png" />
        <p>想知道</p>
      </a>
    </div>
    <div class="contentbox">
      <a href="javascript:;" @click="life">
        <img src="../../../Pictures/square/life.png" />
        <p>生活圈</p>
      </a>
    </div>
    <div class="contentbox">
      <a href="javascript:;" @click="blackFan">
        <img src="../../../Pictures/square/blackFan.png" />
        <p>嘿粉圈</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SquareNav",
  methods: {
    aboutV() {
      this.$parent.$children[1].$children[0].show = false;
      this.$parent.$children[1].$children[1].show = true;
      this.$parent.$children[1].$children[2].show = false;
      this.$parent.$children[1].$children[3].show = false;
      this.$parent.$children[1].$children[4].show = false;
      this.$parent.$children[1].$children[5].show = false;
      this.$parent.$children[1].$children[6].show = false;
      this.$router.push({
        name: "aboutV",
      });
    },
    original() {
      this.$parent.$children[1].$children[0].show = false;
      this.$parent.$children[1].$children[1].show = false;
      this.$parent.$children[1].$children[2].show = true;
      this.$parent.$children[1].$children[3].show = false;
      this.$parent.$children[1].$children[4].show = false;
      this.$parent.$children[1].$children[5].show = false;
      this.$parent.$children[1].$children[6].show = false;
      this.$router.push({
        name: "original",
      });
    },
    showFace() {
      this.$parent.$children[1].$children[0].show = false;
      this.$parent.$children[1].$children[1].show = false;
      this.$parent.$children[1].$children[2].show = false;
      this.$parent.$children[1].$children[3].show = true;
      this.$parent.$children[1].$children[4].show = false;
      this.$parent.$children[1].$children[5].show = false;
      this.$parent.$children[1].$children[6].show = false;
      this.$router.push({
        name: "showface",
      });
    },
    wantToKnow() {
      this.$parent.$children[1].$children[0].show = false;
      this.$parent.$children[1].$children[1].show = false;
      this.$parent.$children[1].$children[2].show = false;
      this.$parent.$children[1].$children[3].show = false;
      this.$parent.$children[1].$children[4].show = true;
      this.$parent.$children[1].$children[5].show = false;
      this.$parent.$children[1].$children[6].show = false;
      this.$router.push({
        name: "wanttoknow",
      });
    },
    life() {
      this.$parent.$children[1].$children[0].show = false;
      this.$parent.$children[1].$children[1].show = false;
      this.$parent.$children[1].$children[2].show = false;
      this.$parent.$children[1].$children[3].show = false;
      this.$parent.$children[1].$children[4].show = false;
      this.$parent.$children[1].$children[5].show = true;
      this.$parent.$children[1].$children[6].show = false;
      this.$router.push({
        name: "life",
      });
    },
    blackFan() {
      this.$parent.$children[1].$children[0].show = false;
      this.$parent.$children[1].$children[1].show = false;
      this.$parent.$children[1].$children[2].show = false;
      this.$parent.$children[1].$children[3].show = false;
      this.$parent.$children[1].$children[4].show = false;
      this.$parent.$children[1].$children[5].show = false;
      this.$parent.$children[1].$children[6].show = true;
      this.$router.push({
        name: "blackfans",
      });
    },
  },
};
</script>

<style scoped>
.SN-outerbox {
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  
}

.contentbox {
  display: flex;
  justify-content: center;
  width: 120px;
  height: 80px;
}

.contentbox a {
  height: 100%;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.contentbox a img {
  width: 50px;
}

.contentbox a p {
  color: rgb(59, 59, 59);
  font-size: 14px;
}
</style>