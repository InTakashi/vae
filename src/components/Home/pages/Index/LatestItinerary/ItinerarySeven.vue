<template>
  <div class="LI-seven-outerbox">
    <p class="date"><span>2021-10-17</span><span>14:00</span></p>
    <p class="tittle">深圳演出 — — 大鹏音乐嘉年华</p>
  </div>
</template>

<script>
export default {
  name: "ItinerarySeven",
};
</script>

<style scoped>
.LI-seven-outerbox {
  width: 190px;
  height: 80px;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 0 0 15px rgb(240, 240, 240);
  transition: 200ms;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  color: rgb(39, 39, 39);
}

.LI-seven-outerbox:hover {
  transform: translateZ(10px);
}

span {
  font-size: 12px;
  margin-right: 7px;
}

.tittle {
  width: 85%;
  font-size: 14px;
  text-align: center;
}
</style>