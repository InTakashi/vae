<template>
  <div class="fifthbox">
    <a
      href="javascript:;"
      @click="toFifthcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/fifth.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《不如吃茶去》</p>
        <div class="price">
          <img src="../../../../Pictures/mall/one.png" />
          <p>540<span>松果</span></p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FifthAlbum",
  data() {
    return {
      loading: false,
    };
  },
  
  methods: {
    toFifthcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "fifthcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.fifthbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.fifthbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.fifthbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.fifthbox .imgbox img {
  width: 100%;
}

.fifthbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.fifthbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.fifthbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.fifthbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.fifthbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>