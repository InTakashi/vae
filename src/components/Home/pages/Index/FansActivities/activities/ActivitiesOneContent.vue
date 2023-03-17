<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">主办方：许嵩全球歌迷会-钦州分会</p>
      <p class="timeslot">
        <span class="time">13:00</span>
        <span class="text">至</span>
        <span class="time">20:00</span>
      </p>
      <div class="content">
          <p>城市：广西钦州</p>
          <p>预计人数：10人</p>
          <p>聚会时间：2020年1月30日</p>
          <p>集合时间：下午一点</p>
          <p>集合地点：钦州市海豚音KTV（钦州市钦南区扬帆大道8号长融世贸广场）</p>
          <p>预计费用：50/人</p>
          <p>费用说明：包厢、礼物等</p>
          <p>活动QQ群：100826587</p>
          <p>活动内容：唱歌、玩游戏、抽奖</p>
      </div>
      <el-button class="button" disabled>活动已结束</el-button>
      <div class="ps">
          <p>PS:</p>
          <p>1.当日现场签到即可获得积分，累计5场以下活动就可以获得珍贵勋章！</p>
          <p>2.所有分会均可以申请聚会，可将具体活动内容按照以上格式发送至省会长申请。</p>
          <p>3.务必注意安全！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivitiesOneContent",

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

.innerbox .address{
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
}

.innerbox .timeslot{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
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

.innerbox .content{
    width: 100%;
}

.innerbox .content p,
.innerbox .ps p{
    margin-bottom: 5px;
}

.innerbox .ps{
    width: 100%;
    margin: 20px;
    color: rgb(255, 0, 0);
}

.innerbox .button {
  margin: 30px 0;
  
}

</style>