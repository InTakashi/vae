<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">主办方：许嵩全球歌迷会-莆田分会</p>
      <p class="timeslot">
        <span class="time">10:00</span>
        <span class="text">至</span>
        <span class="time">18:00</span>
      </p>
      <p class="preface">
        2020年过去半个月了，是不是无聊了呢，我们决定举办一场线下聚会，重逢甚是久违的老朋友，相逢素未谋面的新伙伴。说不定就能带走几个。
      </p>
      <div class="content">
        <p>城市：福建省莆田市</p>
        <p>预计人数：30人</p>
        <p>聚会时间：2020年1月30日（正月初六）</p>
        <p>集合时间：早上10:00</p>
        <p>集合地点：城厢区万达广场1号门</p>
        <p>聚会地点：城港大道瑞士文化小镇</p>
        <p>预计费用及费用说明：120/人（多退少补）</p>
        <p>
          活动内容：按时到达集合地点集合，买好烧烤物品后，到达场地一起串串烧烤，小景区内有拍照地点，吃完可以一起逛逛，玩玩游戏（紧张刺激的游戏项目等你哟）
        </p>
        <p>本次聚会奖品有签名照专辑明信片海报卡贴！！！</p>
        <p>联系QQ：593627498</p>
        <p>联系微信/电话：18680628408（微信号同电话号码）</p>
        <p>莆田分会群：58767441</p>
        <p>聚会微信群：加微信18680628408（备注聚会）</p>
        <p>不管你在哪，我们等你哟（记得带充电宝哟）</p>
      </div>
      <el-button class="button" disabled>活动已结束</el-button>
      <div class="ps">
        <p>PS:</p>
        <p>1.当日现场签到vae+行程即可获得积分。</p>
        <span class="span">2.签名照专辑明信片海报卡贴等等应有尽有！</span>
        <p>3.给予所有嵩鼠萌最真挚的<span>祝福</span>-2020平安喜乐</p>
        <p>4.感谢你们一如既往的陪伴许嵩，也希望今后一路上还能有你们。</p>
      </div>
      <div class="peroration">
        幸得识卿桃花雨，从此阡陌皆暖春。期待你们的如约而至
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivitiesFourContent",

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

.innerbox .address {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
}

.innerbox .timeslot {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.innerbox .preface {
  width: 100%;
  margin-bottom: 40px;
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

.innerbox .content {
  width: 100%;
}

.innerbox .content p,
.innerbox .ps p {
  margin-bottom: 5px;
}

.innerbox .ps {
  width: 100%;
  margin: 15px;
}

.innerbox .ps span {
  color: rgb(255, 0, 0);
  font-weight: 600;
}

.innerbox .ps .span {
  display: block;
  margin-bottom: 5px;
}

.innerbox .peroration {
  width: 100%;
  margin-bottom: 20px;
}

.innerbox .button {
  margin: 30px 0;
}

</style>