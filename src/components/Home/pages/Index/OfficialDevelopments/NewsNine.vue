<template>
  <div class="N-nine-outerbox">
      <div class="img-box">
        <img src="../../../../Pictures/index/officialDynamic/newsnine.jpg" />
      </div>
      <div class="info">
        <p class="tittle">
          许嵩献唱建党100周年青春歌会 一曲《燕归巢》致敬百年征程
        </p>
        <p class="content-summary">
          6月5日19点40分，由中央人民政府驻澳门特别行政区联络办公室宣传文化部
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "NewsNine",
  
};
</script>

<style scoped>

.N-nine-outerbox {
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

.N-nine-outerbox:hover{
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