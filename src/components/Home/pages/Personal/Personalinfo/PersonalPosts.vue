<template>
  <div class="Posts-outerbox">
    <el-empty description="这里什么也看不到哦~">
      <el-button type="primary" round @click="publish = true">
        发布帖子
      </el-button>
      <el-drawer
        title="发布帖子 ^^"
        :before-close="handleClose"
        :visible.sync="publish"
        direction="ttb"
        size="100%"
        custom-class="demo-drawer"
        ref="drawer"
      >
        <div class="content-outerbox">
          <div class="content-innerbox">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="你想要说些什么..."
              v-model="textarea"
            >
            </el-input>

            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </div>
        <div class="demo-drawer__content">
          <div class="demo-drawer__footer">
            <el-button @click="cancelForm">取 消</el-button>
            <el-button
              type="primary"
              @click="$refs.drawer.closeDrawer()"
              :loading="loading"
              >{{ loading ? "发布中 ..." : "发布" }}</el-button
            >
          </div>
        </div>
      </el-drawer>
    </el-empty>
  </div>
</template>

<script>
export default {
  name: "PostsVc",
  data() {
    return {
      publish: false,
      loading: false,
      timer: null,

      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },

  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要发布吗？")
        .then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(() => {});
    },

    cancelForm() {
      this.loading = false;
      this.publish = false;
      clearTimeout(this.timer);
    },
  },
};
</script>

<style scoped>
.content-outerbox {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
}

.content-innerbox{
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>