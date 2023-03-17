<template>
  <div class="nav">
    <div class="app">
      <a href="javascript:;">
        <img src="../Pictures/background-image/logo.webp" />
      </a>
      <div class="QRcode-outerbox">
        <div class="QRcode">
          <div class="QRcode-content">
            <p>下载APP</p>
            <img src="../Pictures/background-image/microQr.png" />
          </div>
          <div class="QRcode-triangle"></div>
        </div>
      </div>
    </div>
    <div class="backtop">
      <a href="javascript:;" @click="backtop">
        <div class="triangle"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightNav",
  methods: {
    backtop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 40px;
}

.app,
.backtop {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}

.nav a {
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgb(211, 211, 211, 0.8);
}

.app img {
  width: 20px;
}

.app a:hover,
.backtop a:hover {
  background-color: rgb(240, 240, 240);
}

.backtop a .triangle {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid rgb(64, 158, 255);
}

.QRcode-outerbox {
  z-index: 100;
  width: 120px;
  height: 120px;
  position: fixed;
  right: -120px;
  bottom: 115px;
  transition: 500ms;
}

.QRcode {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.QRcode .QRcode-triangle {
  width: 0;
  height: 0;
  border-top: solid 8px transparent;
  border-bottom: solid 8px transparent;
  border-left: solid 8px rgb(255, 255, 255);
}

.QRcode .QRcode-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 112px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 15px rgba(225, 225, 225, 0.8);
}
.QRcode .QRcode-content p {
  font-size: 12px;
}

.QRcode .QRcode-content img {
  width: 95px;
}

.app a:hover ~ .QRcode-outerbox {
  right: 70px;
}
</style>