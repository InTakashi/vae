<template>
  <div class="OM-outerbox">
      <MessageOne></MessageOne>
      <MessageTwo></MessageTwo>
      <MessageThree></MessageThree>
      <MessageFour></MessageFour>
      <MessageFive></MessageFive>
      <MessageSix></MessageSix>
      <MessageSeven></MessageSeven>
      <MessageEight></MessageEight>
      <MessageNine></MessageNine>
      <MessageTen></MessageTen>
      <MessageEleven></MessageEleven>
      <MessageTwelve></MessageTwelve>
  </div>
</template>

<script>

import MessageOne from './OfficialMessage/MessageOne.vue'
import MessageTwo from './OfficialMessage/MessageTwo.vue'
import MessageThree from './OfficialMessage/MessageThree.vue'
import MessageFour from './OfficialMessage/MessageFour.vue'
import MessageFive from './OfficialMessage/MessageFive.vue'
import MessageSix from './OfficialMessage/MessageSix.vue'
import MessageSeven from './OfficialMessage/MessageSeven.vue'
import MessageEight from './OfficialMessage/MessageEight.vue'
import MessageNine from './OfficialMessage/MessageNine.vue'
import MessageTen from './OfficialMessage/MessageTen.vue'
import MessageEleven from './OfficialMessage/MessageEleven.vue'
import MessageTwelve from './OfficialMessage/MessageTwelve.vue'

export default {
    name:'OfficialMessage',
    components:{
        MessageOne,
        MessageTwo,
        MessageThree,
        MessageFour,
        MessageFive,
        MessageSix,
        MessageSeven,
        MessageEight,
        MessageNine,
        MessageTen,
        MessageEleven,
        MessageTwelve,
    }
}
</script>

<style scoped>
.OM-outerbox{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>