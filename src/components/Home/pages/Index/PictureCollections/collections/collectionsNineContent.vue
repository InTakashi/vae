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
  name: "collectionsNineContent",
  data() {
    return {
      img: [
        require("../../../../../Pictures/index/photo-collections/crow/1.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/2.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/3.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/4.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/5.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/6.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/7.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/8.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/9.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/10.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/11.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/12.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/13.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/14.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/15.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/16.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/17.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/18.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/19.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/20.jpg"),
      ],
      srcList: [
        require("../../../../../Pictures/index/photo-collections/crow/1.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/2.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/3.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/4.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/5.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/6.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/7.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/8.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/9.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/10.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/11.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/12.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/13.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/14.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/15.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/16.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/17.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/18.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/19.jpg"),
        require("../../../../../Pictures/index/photo-collections/crow/20.jpg"),
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

.innerbox ul li {
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