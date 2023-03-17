<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">演出名称：2021最美的夜跨年晚会</p>
      <p class="date">演出平台：哔哩哔哩</p>
      <p class="timeslot">
        <span class="time">20:30</span>
        <span class="text">至</span>
        <span class="time">23:59</span>
      </p>
      <el-button class="button" disabled>活动已结束</el-button>
      <img src="../../../../../Pictures/index/recentTrips/bilibili.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItineraryFourContent",
  data(){
    return{
      tittle:'2021最美的夜跨年晚会'
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