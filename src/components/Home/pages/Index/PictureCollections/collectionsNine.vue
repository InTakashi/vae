<template>
  <div class="outerbox">
      <div class="imgbox">
        <img src="../../../../Pictures/index/photo-collections/crow/2.jpg"/>
      </div>
      <p>《乌鸦》MV高清系列图</p>
  </div>
</template>

<script>
export default {
  name: "collectionsNine",
  
};
</script>

<style scoped>

.outerbox{
  width: 200px;
  position: relative;
  margin: 10px 0;
  transition: 300ms;
}

.outerbox:hover{
  transform: translateZ(5px);
}

.imgbox,
.imgbox img{
  width: 100%;
  border-radius: 20px;
}

p{
  
  position: absolute;
  left: 20px;
  bottom:40px;
  width: 160px;
  font-size: 20px;
  color: rgb(255, 255, 255);
}

</style>