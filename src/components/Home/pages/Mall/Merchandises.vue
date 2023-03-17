<template>
  <div class="merchandisesbox">
    <div class="header">
      <div class="header-words">
        <p>周边</p>
      </div>
    </div>
    <ClothesFifteen></ClothesFifteen>
    <ClothesFourteen></ClothesFourteen>
    <ClothesThirteen></ClothesThirteen>
    <ClothesTwelve></ClothesTwelve>
    <Hat></Hat>
    <SeaLight></SeaLight>
    <Toy></Toy>
  </div>
</template>

<script>
import ClothesFifteen from "./merchandises/ClothesFifteen.vue";
import ClothesFourteen from "./merchandises/ClothesFourteen.vue";
import ClothesThirteen from "./merchandises/ClothesThirteen.vue";
import ClothesTwelve from "./merchandises/ClothesTwelve.vue";
import Hat from "./merchandises/Hat.vue";
import SeaLight from "./merchandises/SeaLight.vue";
import Toy from "./merchandises/Toy.vue";

export default {
  name: "MerchandiseVc",
  components: {
    ClothesFifteen,
    ClothesFourteen,
    ClothesThirteen,
    ClothesTwelve,
    Hat,
    SeaLight,
    Toy,
  },
};
</script>

<style scoped>
* {
  perspective: 800px;
}

.merchandisesbox {
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