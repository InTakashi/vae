<template>
  <div class="albumsbox">
    <div class="header">
      <div class="header-words">
        <p>签名专辑</p>
      </div>
    </div>
    <First></First>
    <Second></Second>
    <Third></Third>
    <Fourth></Fourth>
    <Fifth></Fifth>
    <Sixth></Sixth>
    <Seventh></Seventh>
    <Eighth></Eighth>
  </div>
</template>

<script>
import First from "./albums/First.vue";
import Second from "./albums/Second.vue";
import Third from "./albums/Third.vue";
import Fourth from "./albums/Fourth.vue";
import Fifth from "./albums/Fifth.vue";
import Sixth from "./albums/Sixth.vue";
import Seventh from "./albums/Seventh.vue";
import Eighth from "./albums/Eighth.vue";

export default {
  name: "AlbumVc",
  components: {
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth,
  },
};
</script>

<style scoped>
* {
  perspective: 800px;
}

.albumsbox {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 30px 0;
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}

.header .header-words {
  width: 94%;
  height: 100%;
  border-bottom: solid 1px rgb(201, 201, 201);
}

.header .header-words p {
  
  font-size: 20px;
  height: 94%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 3px rgb(64,158,255);
}
</style>