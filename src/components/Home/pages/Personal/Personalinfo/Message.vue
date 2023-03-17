<template>
  <div class="Message-outerbox clearfix">
    <el-tabs :tab-position="tabPosition" class="left-nav">
      <el-tab-pane label="官方消息">
        <OfficialMessage></OfficialMessage>
      </el-tab-pane>
      <el-tab-pane label="@我的"><AiteMe></AiteMe></el-tab-pane>
      <el-tab-pane label="评论"><Comment></Comment></el-tab-pane>
      <el-tab-pane label="赞"><Assist></Assist></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OfficialMessage from "./Message/OfficialMessage.vue";
import AiteMe from "./Message/AiteMe.vue";
import Comment from "./Message/Comment.vue";
import Assist from "./Message/Assist.vue";

export default {
  name: "MessageVc",
  data() {
    return {
      tabPosition: "left",
    };
  },

  components: {
    OfficialMessage,
    AiteMe,
    Comment,
    Assist,
  },
};
</script>

<style scoped>
.left-nav {
  height: 100%;
  margin: 20px 0 0 30px;
}
</style>