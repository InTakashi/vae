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
        <p>我们都目睹了他的陨落</p>
        <p>我们常把通过窗口望去的食物并名为月亮</p>
        <p>常把黑色的天空称做夜</p>
        <p>他就诞生在遥远的遥远之外</p>
        <p>直到人们的心愿捕获了他</p>
        <p>以许下的愿望作为交换的条件</p>
        <p>换他茫茫无知的坠落在人间</p>
        <p>斑驳的死去</p>
        <p>我们低下头回忆</p>
        <p>你为谁祈愿</p>
        <p>我们流下泪呢喃</p>
        <p>谁为你牵挂</p>
      </div>
      <div class="category"># 原创圈</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginalPostsFive",
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