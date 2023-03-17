<template>
  <div class="chamberlain-outerbox" v-show="show">
    <a href="javascript:;">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/ToppingPost/chamberlain.jpg" />
          <span class="username">小管家</span>
        </div>
        <span class="time">03月31 13:31</span>
      </div>
      <div class="content-box">
        <p>《2021微博娱乐白皮书》</p>
        <p>许嵩｜《呼吸之野》热门专辑🔥</p>
      </div>
      <div class="img-box">
        <div class="img-innerbox">
          <img
            src="../../../../Pictures/square/ToppingPost/chamberlainPost1.jpg"
          />
        </div>
        <div class="img-innerbox">
          <img
            src="../../../../Pictures/square/ToppingPost/chamberlainPost2.jpg"
          />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ChamberlainVc",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.chamberlain-outerbox {
  width: 100%;
  height: 100%;
  overflow: auto;
  float: left;
}

.header-box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.header {
  height: 100%;
  width: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(54, 54, 54);
}
.header img {
  height: 80%;
  border-radius: 8px;
}

.time {
  font-size: 14px;
  color: rgb(118, 118, 118);
  margin-right: 10px;
}

.content-box {
  width: 100%;
}

.content-box p {
  font-size: 18px;
  margin: 0 0 10px 10px;
  color: rgb(54, 54, 54);
  line-height: 1.25;
}

.img-box {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;
}

.img-innerbox {
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-innerbox img {
  width: 100%;
}
</style>