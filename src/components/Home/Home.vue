<template>
  <div class="outerbox">
    <div class="innerbox">
      <div class="headerbox">
        <img src="../Pictures/background-image/vae+.png" />
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item class="navContainer" index="1" @click="toIndex">
            首页
          </el-menu-item>
          <el-menu-item class="navContainer" index="2" @click="toSquare">
            广场
          </el-menu-item>

          <el-menu-item class="navContainer" index="3" @click="toMall">
            周边商城
          </el-menu-item>
          <el-menu-item class="navContainer" index="4" @click="toPersonal">
            个人主页
          </el-menu-item>
        </el-menu>
        <a
          class="el-icon-switch-button"
          href="javascript:;"
          @click="signout"
          v-loading.fullscreen="fullloading"
        >
        </a>
      </div>
      <div class="demo">
        <router-view v-loading="loading"></router-view>
      </div>
    </div>
    <RightNav></RightNav>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from "./Footer.vue";
import RightNav from "./RightNav.vue";

export default {
  name: "HomePage",
  data() {
    return {
      activeIndex: "1",
      loading: false,
      fullloading: false,
    };
  },

  components: {
    FooterNav,
    RightNav,
  },

  mounted() {
    this.$router.push({
      name: "index",
    });
  },

  methods: {
    toIndex() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "index",
        });
      }, 1000);
    },

    toSquare() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "square",
        });
      }, 1000);
    },

    toMall() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "mall",
        });
      }, 1000);
    },

    toPersonal() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          name: "personal",
        });
      }, 1000);
    },

    signout() {
      this.$confirm("是否确认退出当前账号？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.fullloading = true;
          setTimeout(() => {
            this.fullloading = false;
            this.$message({
              type: "success",
              message: "退出成功!",
            });
            this.$router.replace({
              name: "login",
            });
          }, 1000);
        })
        .catch();
    },
  },
};
</script>

<style scoped>
.outerbox {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.outerbox .innerbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.innerbox .headerbox {
  z-index: 100;
  position: sticky;
  top: 0;
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: space-around;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 5px rgb(211, 211, 211);
}

.headerbox img {
  z-index: 100;
  position: absolute;
  left: 30px;
  height: 100%;
}

.headerbox .el-icon-switch-button {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  color: rgb(138, 162, 255);
}

.headerbox .el-icon-switch-button:hover {
  color: rgb(53, 107, 255);
}

.headerbox .navContainer {
  margin: 0 45px;
}

.innerbox .demo {
  width: 100%;
  background-color: rgb(249, 249, 249, 0.8);
}
</style>