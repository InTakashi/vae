<template>
  <div class="AiteMe-outerbox">
    <el-tabs :tab-position="tabPosition" class="header">
      <el-tab-pane class="innerheader" label="帖子@我">
        <el-empty description="还没有人@我"></el-empty>
      </el-tab-pane>
      <el-tab-pane class="innerheader" label="评论@我">
        <el-empty description="还没有评论@我"></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "AiteMe",
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