<template>
  <div class="eighthbox">
    <a
      href="javascript:;"
      @click="toEighthcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/eighth.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《呼吸之野》</p>
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
  name: "EighthAlbum",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    toEighthcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "eighthcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.eighthbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.eighthbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.eighthbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.eighthbox .imgbox img {
  width: 100%;
}

.eighthbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.eighthbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.eighthbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.eighthbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.eighthbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>