<template>
  <div class="fourthbox">
    <a
      href="javascript:;"
      @click="toFourthcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/fourth.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《梦游计》</p>
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
  name: "FourthAlbum",
  data() {
    return {
      loading: false,
    };
  },
  
  methods: {
    toFourthcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "fourthcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.fourthbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.fourthbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.fourthbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.fourthbox .imgbox img {
  width: 100%;
}

.fourthbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.fourthbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.fourthbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.fourthbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.fourthbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>