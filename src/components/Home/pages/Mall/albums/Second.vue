<template>
  <div class="secondbox">
    <a
      href="javascript:;"
      @click="toSecondcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/second.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《寻雾启示》</p>
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
  name: "SecondAlbum",
  data() {
    return {
      loading: false,
    };
  },
  
  methods: {
    toSecondcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "secondcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.secondbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.secondbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.secondbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.secondbox .imgbox img {
  width: 100%;
}

.secondbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.secondbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.secondbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.secondbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.secondbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>