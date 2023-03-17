<template>
  <div class="firstbox">
    <a
      href="javascript:;"
      @click="toFisrtcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/first.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《自定义》</p>
        <div class="price">
          <img src="../../../../Pictures/mall/one.png" />
          <p>500<span>松果</span></p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FisrtAlbum",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    toFisrtcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "fisrtcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.firstbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.firstbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.firstbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.firstbox .imgbox img {
  width: 100%;
}

.firstbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.firstbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.firstbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.firstbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.firstbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>