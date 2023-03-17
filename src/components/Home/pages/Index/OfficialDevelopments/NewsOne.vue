<template>
  <div class="N-one-outerbox">
    <div class="img-box">
      <img src="../../../../Pictures/index/officialDynamic/newsone.jpg" />
    </div>
    <div class="info">
      <p class="tittle">
        横扫多个主流音乐榜单 许嵩《呼吸之野》“年度专辑”实至名归
      </p>
      <p class="content-summary">
        近日，各大主流音乐平台接连发布了2021年度音乐榜单，其中，
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsOne",
  
};
</script>

<style scoped>
.N-one-outerbox {
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

.N-one-outerbox:hover {
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
.info .content-summary {
  width: 300px;
  
  color: rgb(139, 139, 139);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>