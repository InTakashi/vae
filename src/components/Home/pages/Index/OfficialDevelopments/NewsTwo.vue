<template>
  <div class="N-two-outerbox">
    <div class="img-box">
      <img src="../../../../Pictures/index/officialDynamic/newstwo.jpg" />
    </div>
    <div class="info">
      <p class="tittle">新年福利超多惊喜 虎年好礼送不停</p>
      <p class="content-summary">
        崭新的虎年即将到来！辞旧迎新之际，Vae+准备了奖品和福利送给大家，签名专辑、签名照、购物卡等好礼已经就位！你准备好了不！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsTwo",
  
};
</script>

<style scoped>
.N-two-outerbox {
  width: 420px;
  height: 90px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: rgb(205, 205, 205,0.2);
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
}

.N-two-outerbox:hover {
  background-color: rgb(235, 235, 235);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(229, 229, 229);
}

.img-box {
  width: 75px;
  height: 75px;
}

.img-box img {
  width: 100%;
  border-radius: 12px;
}

.info {
  height: 80px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info p {
  margin: 8px 0;
}
.info .tittle {
  color: rgb(62, 62, 62);
  
  font-weight: 600;
  font-size: 14px;
}
.info .content-summary {
  width: 300px;
  
  color: rgb(139, 139, 139);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>