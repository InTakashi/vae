<template>
  <div class="outerbox clearfix">
      <div class="imgbox">
        <img src="../../../../Pictures/index/photo-collections/2021June/1.jpg"/>
      </div>
      <p>许嵩& “阅世” 2021六月刊 图集</p>
  </div>
</template>

<script>
export default {
  name: "collectionsFive",
  
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
  bottom:60px;
  width: 160px;
  font-size: 20px;
  color: rgb(255, 255, 255);
}

</style>