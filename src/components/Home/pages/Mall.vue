<template>
  <div class="mall-outerbox">
    <div class="mall-innerbox">
      <Albums></Albums>
      <Merchandises></Merchandises>
      <Others></Others>
    </div>
  </div>
</template>

<script>
import Albums from "./Mall/Albums.vue";
import Merchandises from "./Mall/Merchandises.vue";
import Others from "./Mall/Others.vue";

export default {
  name: "MallPage",
  components: {
    Albums,
    Merchandises,
    Others,
  },
};
</script>

<style scoped>
.mall-outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
}

.mall-innerbox {
  width: 90%;
}
</style>