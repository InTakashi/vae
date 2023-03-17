<template>
  <div class="N-eight-outerbox">
      <div class="img-box">
        <img src="../../../../Pictures/index/officialDynamic/newseight.jpg" />
      </div>
      <div class="info">
        <p class="tittle">
          许嵩压轴海潮音乐嘉年华 六首连唱点燃全场
        </p>
        <p class="content-summary">
          2021年6月13日，歌手许嵩压轴现身上海海潮音乐嘉年华，不光是带来
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "NewsEight",
 
};
</script>

<style scoped>

.N-eight-outerbox {
  width: 420px;
  height: 90px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: rgb(205, 205, 205,0.2);
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
}

.N-eight-outerbox:hover{
  background-color: rgb(235, 235, 235);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(229, 229, 229);
}

.img-box {
  width: 75px;
  height: 75px;
}

.img-box img {
  width: 100%;
  border-radius: 12px;
}

.info {
  height: 80px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info p {
  margin: 8px 0;
}
.info .tittle {
  color: rgb(62, 62, 62);
  
  font-weight: 600;
  font-size: 14px;
}
.info .content-summary{
  width: 300px;
  
  color: rgb(139, 139, 139);
  font-size: 12px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>