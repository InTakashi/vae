<template>
  <div class="LI-three-outerbox">
    <p class="date"><span>01-01</span><span>12:00</span></p>
    <p class="tittle">海南演出 — — 国风音乐盛典之新元之夜</p>
  </div>
</template>

<script>
export default {
  name: "ItineraryThree",
};
</script>

<style scoped>
.LI-three-outerbox {
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

.LI-three-outerbox:hover {
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