<template>
  <div class="OP-outerbox">
    <div class="OP-innerbox">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/header.jpg" />
          <span class="username">Ya-呀</span>
        </div>
        <span class="time">2021-08-27 16:00</span>
      </div>
      <div class="content-box">
        <p>贫思/新韵/十三支</p>
        <p>作者：我</p>
        <p>盛望恨贫思， 新文撞旧词。</p>
        <p>前人穷妙笔， 后进苦题思。</p>
      </div>
      <div class="category"># 原创圈</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginalPostsFour",
};
</script>

<style scoped>
.OP-outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  margin: 5px 0;
}

.OP-innerbox {
  width: 95%;
  display: flex;
  flex-direction: column;
}

.header-box {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.header {
  height: 100%;
  width: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(54, 54, 54);
}
.header img {
  height: 80%;
  border-radius: 8px;
}

.time {
  font-size: 14px;
  color: rgb(118, 118, 118);
  margin-right: 10px;
}

.content-box {
  width: 100%;
  margin: 10px 0 20px 0;
}

.content-box p {
  font-size: 18px;
  margin: 5px 0;
}

.category {
  width: 100%;
  color: rgb(102, 117, 255);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>