<template>
  <div class="seventhbox">
    <a
      href="javascript:;"
      @click="toSeventhcontent"
      v-loading.fullscreen="loading"
    >
      <div class="imgbox">
        <img src="../../../../Pictures/mall/albums/seventh.jpg" />
      </div>
      <div class="info">
        <p class="tittle">《寻宝游戏》</p>
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
  name: "SeventhAlbum",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    toSeventhcontent() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "seventhcontent",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.seventhbox {
  width: 300px;
  height: 200px;
  margin: 10px 0;
  transform: translateY(0px);
  transition: 300ms;
  
}

.seventhbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgb(187, 187, 187);
}

.seventhbox .imgbox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.seventhbox .imgbox img {
  width: 100%;
}

.seventhbox .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: rgb(53, 53, 53);
  background-color: rgb(252, 252, 252);
}

.seventhbox .info .tittle {
  font-size: 20px;
  margin-left: 6px;
}

.seventhbox .info .price {
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.seventhbox .info .price span {
  margin-left: 3px;
  font-size: 12px;
}

.seventhbox .info .price img {
  width: 18px;
  margin-right: 8px;
}
</style>