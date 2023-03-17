<template>
  <div class="thirdbox">
    <a
      href="javascript:;"
      @click="toThirdcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/third.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《苏格拉没有底》</p>
        <div class="price">
          <img src="../../../../Pictures/mall/one.png" />
          <p>600<span>松果</span></p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ThirdAlbum",
  data() {
    return {
      loading: false,
    };
  },
  
  methods: {
    toThirdcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "thirdcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.thirdbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.thirdbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.thirdbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.thirdbox .imgbox img {
  width: 100%;
}

.thirdbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.thirdbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.thirdbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.thirdbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.thirdbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>