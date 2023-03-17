<template>
  <div class="footer">
    <div class="innerbox">
      <div class="imgbox">
        <img src="../Pictures/background-image/logo.webp" />
      </div>
      <div class="textbox">
        <h2>联系我们</h2>
        <p>邮箱地址：vaestudio@hotmail.com</p>
        <p>联系电话：010-65281860</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  mounted() {
    this.$router.push({
      name: "login",
    });
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top: 1px solid rgb(199, 199, 199);
}

.innerbox {
  display: flex;
  justify-content: space-around;
  width: 350px;
}

.imgbox {
  height: 60px;
}
.imgbox img {
  height: 100%;
}

.textbox h2 {
  margin-bottom: 10px;
  color: rgb(150, 150, 150);
}

.textbox p {
  margin-top: 5px;
}

.textbox p {
  color: rgb(180, 180, 180);
  font-size: 12px;
}
</style>