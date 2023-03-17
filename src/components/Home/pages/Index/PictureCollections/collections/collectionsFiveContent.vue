<template>
  <div class="outerbox">
    <div class="innerbox">
      <ul>
        <li v-for="(items, index) in img" :key="index">
          <el-image 
            class="img"
            :src="items" 
            :preview-src-list="srcList">
          </el-image>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectionsFiveContent",
  data() {
    return {
      img: [
        require("../../../../../Pictures/index/photo-collections/2021June/1.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/2.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/3.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/4.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/5.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/8.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/6.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/7.jpg"),
      ],
      srcList: [
        require("../../../../../Pictures/index/photo-collections/2021June/1.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/2.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/3.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/4.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/5.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/8.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/6.jpg"),
        require("../../../../../Pictures/index/photo-collections/2021June/7.jpg"),
      ],
    };
  },
  
};
</script>

<style scoped>
*{
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
.innerbox ul li .img:hover{
  transform: translateZ(15px);
}

</style>