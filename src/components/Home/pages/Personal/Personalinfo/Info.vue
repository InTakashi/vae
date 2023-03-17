<template>
  <div class="Info-outerbox clearfix">
    <SpecificInfo></SpecificInfo>
    <MyAccount></MyAccount>
    <PhotoWall></PhotoWall>
  </div>
</template>

<script>

import SpecificInfo from './Info/SpecificInfo.vue'
import MyAccount from './Info/MyAccount.vue'
import PhotoWall from './Info/PhotoWall.vue'

export default {
  name: "InfoVc",
  components:{
    SpecificInfo,
    MyAccount,
    PhotoWall,
  }
  
};
</script>

<style scoped>
.Info-outerbox {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

</style>