<template>
  <div class="othersbox">
    <div class="header">
      <div class="header-words">
        <p>其他</p>
      </div>
    </div>
    <RenameCard></RenameCard>
  </div>
</template>

<script>
import RenameCard from "./others/RenameCard.vue";

export default {
  name: "OthersVc",
  components: {
    RenameCard,
  },
};
</script>

<style scoped>
* {
  perspective: 800px;
}

.othersbox {
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
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 3px rgb(64, 158, 255);
}

</style>