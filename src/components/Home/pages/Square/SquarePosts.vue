<template>
  <div class="SP-outerbox">
    <AboutVPostsTwo></AboutVPostsTwo>
    <OriginalPostsThree></OriginalPostsThree>
    <AboutVPostsFive></AboutVPostsFive>
    <WantToKnowPostsOne></WantToKnowPostsOne>
    <BlackFansPostsFive></BlackFansPostsFive>
    <WantToKnowPostsTwo></WantToKnowPostsTwo>
    <OriginalPostsFive></OriginalPostsFive>
    <WantToKnowPostsFour></WantToKnowPostsFour>
    <WantToKnowPostsFive></WantToKnowPostsFive>
    <OriginalPostsOne></OriginalPostsOne>
    <LifePostsThree></LifePostsThree>
    <OriginalPostsFour></OriginalPostsFour>
    <ShowFacePostsOne></ShowFacePostsOne>
    <ShowFacePostsTwo></ShowFacePostsTwo>
    <AboutVPostsOne></AboutVPostsOne>
    <ShowFacePostsThree></ShowFacePostsThree>
    <ShowFacePostsFour></ShowFacePostsFour>
    <BlackFansPostsTwo></BlackFansPostsTwo>
    <ShowFacePostsFive></ShowFacePostsFive>
    <LifePostsOne></LifePostsOne>
    <WantToKnowPostsThree></WantToKnowPostsThree>
    <LifePostsTwo></LifePostsTwo>
    <LifePostsFour></LifePostsFour>
    <AboutVPostsFour></AboutVPostsFour>
    <LifePostsFive></LifePostsFive>
    <BlackFansPostsOne></BlackFansPostsOne>
    <OriginalPostsTwo></OriginalPostsTwo>
    <AboutVPostsThree></AboutVPostsThree>
    <BlackFansPostsThree></BlackFansPostsThree>
    <BlackFansPostsFour></BlackFansPostsFour>
    <div class="button">
      <el-button type="primary" round @click="publish = true">
        发布帖子
      </el-button>
    </div>
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
  </div>
</template>

<script>
import AboutVPostsOne from "./SquarePosts/AboutVPostsOne.vue";
import AboutVPostsTwo from "./SquarePosts/AboutVPostsTwo.vue";
import AboutVPostsThree from "./SquarePosts/AboutVPostsThree.vue";
import AboutVPostsFour from "./SquarePosts/AboutVPostsFour.vue";
import AboutVPostsFive from "./SquarePosts/AboutVPostsFive.vue";
import WantToKnowPostsOne from "./SquarePosts/WantToKnowPostsOne.vue";
import WantToKnowPostsTwo from "./SquarePosts/WantToKnowPostsTwo.vue";
import WantToKnowPostsThree from "./SquarePosts/WantToKnowPostsThree.vue";
import WantToKnowPostsFour from "./SquarePosts/WantToKnowPostsFour.vue";
import WantToKnowPostsFive from "./SquarePosts/WantToKnowPostsFive.vue";
import OriginalPostsOne from "./SquarePosts/OriginalPostsOne.vue";
import OriginalPostsTwo from "./SquarePosts/OriginalPostsTwo.vue";
import OriginalPostsThree from "./SquarePosts/OriginalPostsThree.vue";
import OriginalPostsFour from "./SquarePosts/OriginalPostsFour.vue";
import OriginalPostsFive from "./SquarePosts/OriginalPostsFive.vue";
import ShowFacePostsOne from "./SquarePosts/ShowFacePostsOne.vue";
import ShowFacePostsTwo from "./SquarePosts/ShowFacePostsTwo.vue";
import ShowFacePostsThree from "./SquarePosts/ShowFacePostsThree.vue";
import ShowFacePostsFour from "./SquarePosts/ShowFacePostsFour.vue";
import ShowFacePostsFive from "./SquarePosts/ShowFacePostsFive.vue";
import LifePostsOne from "./SquarePosts/LifePostsOne.vue";
import LifePostsTwo from "./SquarePosts/LifePostsTwo.vue";
import LifePostsThree from "./SquarePosts/LifePostsThree.vue";
import LifePostsFour from "./SquarePosts/LifePostsFour.vue";
import LifePostsFive from "./SquarePosts/LifePostsFive.vue";
import BlackFansPostsOne from "./SquarePosts/BlackFansPostsOne.vue";
import BlackFansPostsTwo from "./SquarePosts/BlackFansPostsTwo.vue";
import BlackFansPostsThree from "./SquarePosts/BlackFansPostsThree.vue";
import BlackFansPostsFour from "./SquarePosts/BlackFansPostsFour.vue";
import BlackFansPostsFive from "./SquarePosts/BlackFansPostsFive.vue";

export default {
  name: "SquarePosts",
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

  components: {
    AboutVPostsOne,
    AboutVPostsTwo,
    AboutVPostsThree,
    AboutVPostsFour,
    AboutVPostsFive,
    WantToKnowPostsOne,
    WantToKnowPostsTwo,
    WantToKnowPostsThree,
    WantToKnowPostsFour,
    WantToKnowPostsFive,
    OriginalPostsOne,
    OriginalPostsTwo,
    OriginalPostsThree,
    OriginalPostsFour,
    OriginalPostsFive,
    ShowFacePostsOne,
    ShowFacePostsTwo,
    ShowFacePostsThree,
    ShowFacePostsFour,
    ShowFacePostsFive,
    LifePostsOne,
    LifePostsTwo,
    LifePostsThree,
    LifePostsFour,
    LifePostsFive,
    BlackFansPostsOne,
    BlackFansPostsTwo,
    BlackFansPostsThree,
    BlackFansPostsFour,
    BlackFansPostsFive,
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
.SP-outerbox {
  width: 100%;
  
}

.button {
  position: fixed;
  bottom: 40px;
  right: 370px;
}

.content-outerbox {
  width: 100%;
}

.content-innerbox {
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>