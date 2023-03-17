<template>
  <div class="sixthbox">
    <a
      href="javascript:;"
      @click="toSixthcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/sixth.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《青年晚报》</p>
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
  name: "SixthAlbum",
  data() {
    return {
      loading: false,
    };
  },
  
  methods: {
    toSixthcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "sixthcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.sixthbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.sixthbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.sixthbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.sixthbox .imgbox img {
  width: 100%;
}

.sixthbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.sixthbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.sixthbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.sixthbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.sixthbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>