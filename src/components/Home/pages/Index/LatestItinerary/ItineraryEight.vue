<template>
  <div class="LI-eight-outerbox">
    <p class="date"><span>2021-6-20</span><span>20:00</span></p>
    <p class="tittle">B站夏日毕业歌会2021</p>
  </div>
</template>

<script>
export default {
  name: "ItineraryEight",
};
</script>

<style scoped>
.LI-eight-outerbox {
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

.LI-eight-outerbox:hover {
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