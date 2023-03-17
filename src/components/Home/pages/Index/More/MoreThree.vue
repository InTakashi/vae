<template>
  <div class="moreouterbox">
    <div class="time">02-01 10:41:53</div>
    <div class="moreinnerbox">
      <div class="imgbox">
        <el-image class="img" :src="url"> </el-image>
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
      text: "过年好！祝福大家在",
      // 头像
      squareUrl: require("../../../../Pictures/index/vae-coming/head-portrait.jpg"),
      // 帖子照片
      url: require("../../../../Pictures/index/vae-coming/share-pictures/2022.02.01.jpg"),
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
  margin-right: 20px;
}

.moreouterbox .img {
  width: 100%;
}

.moreinfo {
  height: 120px;
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

.moreinfo p {
  width: 100px;
  overflow: hidden;
  text-overflow:ellipsis;
}
</style>