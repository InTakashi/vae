<template>
  <div class="PR-outerbox">
      <SignIn></SignIn>
  </div>
</template>

<script>

import SignIn from './PersonalRight/Signin/SignIn.vue'
export default {
    name:'PersonalRight',
    components:{
        SignIn,
    }
}
</script>

<style scoped>
.PR-outerbox{
    width: 400px;
}
</style>