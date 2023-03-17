<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">主办方：许嵩全球歌迷会-贵州总会</p>
      <p class="timeslot">
        <span class="time">12:30</span>
        <span class="text">至</span>
        <span class="time">20:00</span>
      </p>
      <div class="content">
          <p>聚会城市：贵州省铜仁市</p>
          <p>预计人数：30人</p>
          <p>聚会时间：2020年1月29日</p>
          <p>集合地点：民族风情园大门口</p>
          <p>预计费用及费用说明：100/人（多退少补），全程AA制（包括聚会期间吃饭、活动、以及横幅制作、购买周边礼品等等费用。）</p>
          <p>活动内容：</p>
          <p>1.下午12:30到13:30，在民族风情园门口集合，请务必在约定时间内到达。</p>
          <p>2.人道的差不多了，组织签到，拍合影照。</p>
          <p>3.之后暂定流程：民族风情园半日游（x小时游）、吃饭、唱K、做游戏（赢专辑签名照周边等）</p>
          <p>活动QQ群：107879381</p>
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
  name: "ActivitiesFiveContent",
  
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

.innerbox .tittle{
    width: 100%;
    margin-bottom: 30px;
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