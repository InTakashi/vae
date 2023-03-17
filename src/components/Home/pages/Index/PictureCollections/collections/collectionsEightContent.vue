<template>
  <div class="outerbox">
    <div class="innerbox">
      <ul>
        <li v-for="(items, index) in img" :key="index">
          <el-image class="img" :src="items" :preview-src-list="srcList">
          </el-image>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectionsEightContent",
  data() {
    return {
      img: [
        require("../../../../../Pictures/index/photo-collections/breathingField/1.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/2.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/3.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/4.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/5.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/6.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/7.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/8.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/9.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/10.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/11.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/12.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/13.jpg"),
      ],
      srcList: [
        require("../../../../../Pictures/index/photo-collections/breathingField/1.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/2.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/3.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/4.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/5.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/6.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/7.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/8.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/9.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/10.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/11.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/12.jpg"),
        require("../../../../../Pictures/index/photo-collections/breathingField/13.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
* {
  perspective: 800px;
}

.outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
}

.innerbox {
  width: 90%;
}

.innerbox ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.innerbox ul li{
  width: 50%;
}

.innerbox ul li .img {
  width: 100%;
  transition: 300ms;
}

.innerbox ul li .img:hover {
  transform: translateZ(15px);
}

</style>