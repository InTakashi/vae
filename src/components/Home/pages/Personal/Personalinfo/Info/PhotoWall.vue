<template>
  <div class="PW-outerbox">
    <div class="PW-innerbox">
      <div class="tittle">
        <p :length="length">相册（{{ length }}）</p>
      </div>
      <div class="picture">
        <ul>
          <li v-for="(dialogImageUrl, index) in imageArr" :key="index">
            <el-image
              class="srcList"
              :src="dialogImageUrl"
              :preview-src-list="srcList"
            >
            </el-image>
          </li>
        </ul>
        <el-upload
          class="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" />
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoWall",
  data() {
    return {
      imageArr: [
        require("../../../../../Pictures/personal/photo-wall/1.jpg"),
        require("../../../../../Pictures/personal/photo-wall/2.jpg"),
        require("../../../../../Pictures/personal/photo-wall/3.jpg"),
      ],
      srcList: [
        require("../../../../../Pictures/personal/photo-wall/1.jpg"),
        require("../../../../../Pictures/personal/photo-wall/2.jpg"),
        require("../../../../../Pictures/personal/photo-wall/3.jpg"),
      ],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },

  computed: {
    length() {
      const lenght = this.imageArr.length;
      return lenght;
    },
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.PW-outerbox {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.PW-innerbox {
  width: 80%;
}

.PW-innerbox .tittle {
  margin-bottom: 40px;
}

.PW-innerbox .tittle p {
  font-weight: 600;
  color: rgb(48, 49, 51);
}

.PW-innerbox .picture,
.PW-innerbox .picture ul {
  display: flex;
  flex-wrap: wrap;
}

.PW-innerbox .picture ul li {
  width: 150px;
  height: 150px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0px 3px 0px 0;
}

.PW-innerbox .picture ul li .srcList {
  height: 150px;
}
</style>