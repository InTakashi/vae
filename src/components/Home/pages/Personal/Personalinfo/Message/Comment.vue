<template>
  <div class="Comment-outerbox">
    <el-tabs :tab-position="tabPosition" class="header">
      <el-tab-pane class="innerheader" label="评论我的">
        <el-empty description="还没有人评论我"></el-empty>
      </el-tab-pane>
      <el-tab-pane class="innerheader" label="我评论的">
        <el-empty description="我还没有评论任何人"></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "CommentVc",
  data() {
    return {
      tabPosition: "top",
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header .innerheader {
  width: 660px;
  height: 100%;
}
</style>