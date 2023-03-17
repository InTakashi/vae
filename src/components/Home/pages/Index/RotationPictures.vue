<template>
  <div class="RotationPicture">
    <div class="innerbox">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item, index) in img" :key="index">
          <img
            v-loading.fullscreen="loading"
            @click="getMethod(item.method)"
            :src="item.url"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "RotationPicture",
  data() {
    return {
      img: [
        {
          url: require("../../../Pictures/index/rotation-pictures/BreathingField.jpg"),
          method: "Breathingfield",
        },
        {
          url: require("../../../Pictures/index/rotation-pictures/antique.jpg"),
          method: "Antique",
        },
        {
          url: require("../../../Pictures/index/rotation-pictures/liuxiang.jpg"),
          method: "Liuxiang",
        },
        {
          url: require("../../../Pictures/index/rotation-pictures/ruyueerzhi.jpg"),
          method: "Ruyueerzhi",
        },
      ],

      loading: false,
    };
  },

  methods: {
    getMethod(toMethods) {
      this[toMethods]();
    },

    Liuxiang() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "liuxiang",
        });
      }, 1000);
    },

    Breathingfield() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "breathingfield",
        });
      }, 1000);
    },

    Antique() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "oldantique",
        });
      }, 1000);
    },

    Ruyueerzhi() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "ruyueerzhi",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.RotationPicture {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.innerbox {
  width: 90%;
}

img {
  width: 100%;
}
</style>