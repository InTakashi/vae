<template>
  <div class="outerbox">
      <p class="date"><span>2020-01-30</span><span>11:00</span></p>
      <p class="tittle">歌迷聚会 - 伊犁站</p>
  </div>
</template>

<script>
export default {
  name: "ActivityTwo",
  
};
</script>

<style scoped>
.outerbox {
  width: 190px;
  height: 80px;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 0 0 15px rgb(240, 240, 240);
  transition: 300ms;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: rgb(39, 39, 39);
}


.outerbox:hover{
  transform: translateZ(10px);
}

span{
  font-size: 12px;
  margin-right: 7px;
}

</style>