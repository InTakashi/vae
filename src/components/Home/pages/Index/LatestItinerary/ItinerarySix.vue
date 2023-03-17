<template>
  <div class="LI-six-outerbox">
    <p class="date"><span>2021-10-21</span><span>21:10</span></p>
    <p class="tittle">江苏卫视奇妙之旅晚会</p>
  </div>
</template>

<script>
export default {
  name: "ItinerarySix",
  
};
</script>

<style scoped>
.LI-six-outerbox {
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

.LI-six-outerbox:hover {
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