<template>
  <div class="Assist-outerbox">
    <el-tabs :tab-position="tabPosition" class="header">
      <el-tab-pane class="innerheader" label="赞我的">
        <el-empty description="还没有人赞我"></el-empty>
      </el-tab-pane>
      <el-tab-pane class="innerheader" label="我赞的">
        <el-empty description="我还没有赞任何人"></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "AssistVc",
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