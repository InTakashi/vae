<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">活动地址：海南陵水富力海洋世界</p>
      <p class="date">活动时间：2022.01.01</p>
      <p class="timeslot">
        <span class="time">12:00</span>
        <span class="text">至</span>
        <span class="time">22:00</span>
      </p>
      <el-button class="button" disabled>活动已结束</el-button>
      <img src="../../../../../Pictures/index/recentTrips/hainan.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItineraryThreeContent",
  data(){
    return{
      tittle:'海南演出 — — 国风音乐盛典之新元之夜'
    }
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
.innerbox .date{
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
}

.innerbox .timeslot{
    display: flex;
    justify-content: center;
}

.innerbox .time{
    display: block;
    font-size: 18px;
    font-weight: 600;
}

.innerbox .text{
    display: block;
    font-size: 12px;
    margin: 0 20px;
}

.innerbox .button {
  margin: 30px 0;
  
}

.innerbox img{
  width: 100%;
  margin: 10px 0;
}

</style>