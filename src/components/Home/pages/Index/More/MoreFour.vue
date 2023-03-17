<template>
  <div class="moreouterbox">
    <div class="time">2021-11-04 12:43:36</div>
    <div class="moreinnerbox">
      <div class="imgbox">
        <el-image class="img" :src="url"> </el-image>
        <div class="number">6</div>
      </div>
      <div class="moreinfo">
        <div class="moreheadportrait">
          <el-avatar shape="square" size="small" :src="squareUrl"></el-avatar>
          <span>许嵩</span>
        </div>
        <p class="text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreOne",
  data() {
    return {
      text: "最近",
      // 头像
      squareUrl: require("../../../../Pictures/index/vae-coming/head-portrait.jpg"),
      // 帖子照片
      url: require("../../../../Pictures/index/vae-coming/share-pictures/2021.11.04.1.jpg"),
    };
  },
};
</script>

<style scoped>
.moreouterbox {
  display: flex;
  width: 100%;
  height: 150px;
  position: relative;
  justify-content: center;
  
  color: #000;
}

.moreouterbox .time {
  font-size: 12px;
  color: rgb(180, 180, 180);
  position: absolute;
  right: 15px;
  bottom: 10px;
  font-family: "Times New Roman";
}

.moreinnerbox {
  display: flex;
  align-items: center;
  width: 260px;
  margin-top: 10px;
}

.moreouterbox .imgbox {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin-right: 20px;
}

.moreouterbox .img {
  width: 100%;
}

.moreouterbox .imgbox .number{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  right: 0;
  bottom: 0;
  border-radius: 10px 0 0 0;
  color: rgb(255, 255, 255);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 600;
  background-color: rgb(0, 0, 0,0.5);
}

.moreinfo {
  height: 120px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.moreinfo .moreheadportrait {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.moreinfo .moreheadportrait span {
  margin-left: 10px;
}
</style>