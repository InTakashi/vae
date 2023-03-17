<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">演出平台：咪咕音乐直播间</p>
      <p class="date">演出时间：2021.12.25 19:30</p>
      <p class="timeslot">
        <span class="time">19:30</span>
        <span class="text">至</span>
        <span class="time">23:30</span>
      </p>
      <el-button class="button" disabled>活动已结束</el-button>
      <img src="../../../../../Pictures/index/recentTrips/miguhui.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItineraryFiveContent",
  data() {
    return {
      tittle: "动感地带第十五届音乐盛典咪咕汇",
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