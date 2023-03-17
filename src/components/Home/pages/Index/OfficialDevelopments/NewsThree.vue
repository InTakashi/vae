<template>
  <div class="N-three-outerbox">
    <div class="img-box">
      <img src="../../../../Pictures/index/officialDynamic/newsthree.png" />
    </div>
    <div class="info">
      <p class="tittle">许嵩2022首支单曲「留香」今日上线</p>
      <p class="content-summary">
        生活里那些擦肩而过的美好，比如一首没来及听完的无名好歌，一场没能有下文的邂逅，一幅转瞬即逝的沿途美景……当「你好」和「再见」同步发生，总是让人格外难忘。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsThree",
};
</script>

<style scoped>
.N-three-outerbox {
  width: 420px;
  height: 90px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: rgb(205, 205, 205, 0.2);
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
}

.N-three-outerbox:hover {
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
  height: 120px;
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
.info .content-summary {
  width: 300px;
  
  color: rgb(139, 139, 139);
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>