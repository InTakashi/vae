<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">播出平台：江苏卫视、优酷等</p>
      <p class="date">演出时间：2021.10.21 21.10</p>
      <p class="timeslot">
        <span class="time">21:10</span>
        <span class="text">至</span>
        <span class="time">23:30</span>
      </p>
      <el-button class="button" disabled>活动已结束</el-button>
      <img src="../../../../../Pictures/index/recentTrips/jiangsu.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItinerarySixContent",
  data() {
    return {
      tittle: "江苏卫视奇妙之旅晚会",
    };
  },
};
</script>

<style scoped>
.outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
}

.innerbox {
  width: 90%;
  display: flex;
  flex-direction: column;
  
  align-items: center;
}

.innerbox .address,
.innerbox .date {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
}

.innerbox .timeslot {
  display: flex;
  justify-content: center;
}

.innerbox .time {
  display: block;
  font-size: 18px;
  font-weight: 600;
}

.innerbox .text {
  display: block;
  font-size: 12px;
  margin: 0 20px;
}

.innerbox .button {
  margin: 30px 0;
  
}

.innerbox img {
  width: 100%;
  margin: 10px 0;
}
</style>