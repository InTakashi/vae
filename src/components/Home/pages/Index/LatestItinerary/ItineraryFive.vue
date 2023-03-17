<template>
  <div class="LI-five-outerbox">
    <p class="date"><span>2021-12-25</span><span>19:30</span></p>
    <p class="tittle">动感地带第十五届音乐盛典咪咕汇</p>
  </div>
</template>

<script>
export default {
  name: "ItineraryFive",
  
};
</script>

<style scoped>
.LI-five-outerbox {
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

.LI-five-outerbox:hover {
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