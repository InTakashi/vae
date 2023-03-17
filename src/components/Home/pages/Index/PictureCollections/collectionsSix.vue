<template>
  <div class="outerbox">
      <div class="imgbox">
        <img src="../../../../Pictures/index/photo-collections/listenToMyMusic/5.jpg"/>
      </div>
      <p>“我的音乐你听吗” 高清图集</p>
  </div>
</template>

<script>
export default {
  name: "collectionsSix",
  
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