<template>
  <div>
    <RotationPicture></RotationPicture>
    <div class="content-box">
      <div class="content-inner-box">
        <VaeComing></VaeComing>
        <OfficialDevelopments></OfficialDevelopments>
        <LatestItinerary></LatestItinerary>
        <PictureCollections></PictureCollections>
        <FansActivities></FansActivities>
      </div>
    </div>
  </div>
</template>

<script>
import RotationPicture from "./Index/RotationPictures.vue";
import VaeComing from "./Index/More/VaeComing.vue";
import OfficialDevelopments from "./Index/OfficialDevelopments/OfficialDevelopments.vue";
import LatestItinerary from "./Index/LatestItinerary/LatestItinerary.vue";
import PictureCollections from "./Index/PictureCollections/PictureCollections.vue";
import FansActivities from "./Index/FansActivities/FansActivities.vue";

export default {
  name: "IndexPage",
  data() {
    return {};
  },

  components: {
    RotationPicture,
    VaeComing,
    OfficialDevelopments,
    LatestItinerary,
    PictureCollections,
    FansActivities,
  },
};
</script>

<style scoped>

.content-box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.content-inner-box {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>