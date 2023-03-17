<template>
  <div class="Personal-outerbox">
    <div class="Personal-innerbox">
      <PersonalInfo></PersonalInfo>
      <PersonalRight></PersonalRight>
    </div>
  </div>
</template>

<script>

import PersonalInfo from './Personal/PersonalInfo.vue'
import PersonalRight from './Personal/PersonalRight.vue'

export default {
    name:'PersonalPage',
    components:{
      PersonalInfo,
      PersonalRight,
    },
}
</script>

<style scoped>
.Personal-outerbox{
  width: 100%;
  display: flex;
  justify-content: center;
}

.Personal-innerbox{
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>