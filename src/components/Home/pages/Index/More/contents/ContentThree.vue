<template>
  <div class="contentone">
    <div class="conteninnerbox">
      <div class="contentheader">
        <div class="contentheaderleft">
          <el-avatar shape="square" size="large" :src="squareUrl"></el-avatar>
          <span>许嵩</span>
        </div>
        <p>02月01 10:41</p>
      </div>
      <div class="contenttext">
        <p>过年好！祝福大家在新的一年，有诗有酒也有梦,有热爱的事也有热爱的人，有快乐欢腾也有清净自在。打球去喽！</p>
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
      img: [require("../../../../../Pictures/index/vae-coming/share-pictures/2022.02.01.jpg")],
      srcList: [require("../../../../../Pictures/index/vae-coming/share-pictures/2022.02.01.jpg")],
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
  width: 150px;
}

.conteninnerbox .contentimg img {
  width: 100%;
}
</style>