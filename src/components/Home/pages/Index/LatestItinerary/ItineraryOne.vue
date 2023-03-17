<template>
  <div class="LI-one-outerbox">
    <p class="date"><span>05-03</span><span>12:00</span></p>
    <p class="tittle">南京演出 — — 森林音乐狂欢节</p>
  </div>
</template>

<script>
export default {
  name: "ItineraryOne",
  
};
</script>

<style scoped>

.LI-one-outerbox {
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

.LI-one-outerbox:hover {
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