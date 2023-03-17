<template>
  <div class="contentone">
    <div class="conteninnerbox">
      <div class="contentheader">
        <div class="contentheaderleft">
          <el-avatar shape="square" size="large" :src="squareUrl"></el-avatar>
          <span>许嵩</span>
        </div>
        <p>2021-01-18 23:57</p>
      </div>
      <div class="contenttext">
        <p>新歌乐器陆续录制</p>
      </div>
      <div class="contentimg">
        <ul>
          <li v-for="(items, index) in img" :key="index">
            <el-image class="img" :src="items" :preview-src-list="srcList">
            </el-image>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentOne",
  data() {
    return {
      squareUrl: require("../../../../../Pictures/index/vae-coming/head-portrait.jpg"),
      img: [require("../../../../../Pictures/index/vae-coming/share-pictures/2021.08.18.jpg")],
      srcList: [require("../../../../../Pictures/index/vae-coming/share-pictures/2021.08.18.jpg")],
    };
  },
};
</script>

<style scoped>
.contentone {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.conteninnerbox {
  width: 350px;
  height: 100%;
  display: flex;
  
  flex-direction: column;
}

.contentheader,.contenttext{
    margin-bottom: 20px;
}

.conteninnerbox .contentheader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(131, 131, 131);
}
.conteninnerbox .contentheader p{
    font-size: 12px;
}

.conteninnerbox .contentheader .contentheaderleft{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
}

.conteninnerbox .contentimg {
  width: 220px;
}

.conteninnerbox .contentimg img {
  width: 100%;
}
</style>