<template>
  <div class="LI-two-outerbox">
    <p class="date"><span>04-17</span><span>12:00</span></p>
    <p class="tittle">温州演出 — — 楠溪江星巢秘境音乐节</p>
  </div>
</template>

<script>
export default {
  name: "ItineraryTwo",
  
};
</script>

<style scoped>
.LI-two-outerbox {
  width: 190px;
  height: 80px;
  margin: 10px 0;
  border-radius: 20px;
  background-color: rgb(89, 114, 255);
  box-shadow: 0 0 15px rgb(240, 240, 240);
  transition: 200ms;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  color: rgb(255, 255, 255);
}

.LI-two-outerbox:hover {
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