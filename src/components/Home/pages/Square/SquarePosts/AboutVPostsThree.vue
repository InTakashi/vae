<template>
  <div class="AVPT-outerbox">
    <div class="AVPT-innerbox">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/header.jpg" />
          <span class="username">Ya-呀</span>
        </div>
        <span class="time">2021-08-27 16:00</span>
      </div>
      <div class="content-box">
        <p>最喜欢的九张现场图：</p>
        <ul>
          <li v-for="(src,index) in url" :key="index">
            <el-image
              style="width: 100%"
              :src="src"
              :preview-src-list="srcList"
            >
            </el-image>
          </li>
        </ul>
      </div>
      <div class="category"># 有关V</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutVPostsThree",
  data() {
    return {
      url: [
        require("../../../../Pictures/square/aboutV/2.jpg"),
        require("../../../../Pictures/square/aboutV/3.jpg"),
        require("../../../../Pictures/square/aboutV/4.jpg"),
        require("../../../../Pictures/square/aboutV/5.jpg"),
        require("../../../../Pictures/square/aboutV/6.jpg"),
        require("../../../../Pictures/square/aboutV/7.jpg"),
        require("../../../../Pictures/square/aboutV/8.jpg"),
        require("../../../../Pictures/square/aboutV/9.jpg"),
        require("../../../../Pictures/square/aboutV/10.jpg"),
      ],
      srcList: [
        require("../../../../Pictures/square/aboutV/2.jpg"),
        require("../../../../Pictures/square/aboutV/3.jpg"),
        require("../../../../Pictures/square/aboutV/4.jpg"),
        require("../../../../Pictures/square/aboutV/5.jpg"),
        require("../../../../Pictures/square/aboutV/6.jpg"),
        require("../../../../Pictures/square/aboutV/7.jpg"),
        require("../../../../Pictures/square/aboutV/8.jpg"),
        require("../../../../Pictures/square/aboutV/9.jpg"),
        require("../../../../Pictures/square/aboutV/10.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.AVPT-outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  margin: 5px 0;
}

.AVPT-innerbox {
  width: 95%;
  display: flex;
  flex-direction: column;
}

.header-box {
  width: 100%;
  height: 60px;
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
  margin: 10px 0 30px 0;
}

.content-box p {
  font-size: 18px;
  margin-bottom: 15px;
}

.content-box ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.content-box ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  overflow: hidden;
  margin-bottom: 5px;
}

.category {
  width: 100%;
  color: rgb(102, 117, 255);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>