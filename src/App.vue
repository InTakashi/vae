<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/basic.css";

export default {
  name: "App",

  // mounted() {
  //   if (this.$route.path == "/") {
  //     this.$router.push({
  //       name: "login",
  //     });
  //   }
  // },
};
</script>