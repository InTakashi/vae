<template>
  <div class="PI-outerbox">
    <div class="header-nav">
      <div class="imagebox">
        <img v-if="imageUrl" :src="imageUrl" />
      </div>
      <el-upload
        class="loadup"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        点击更换头像
      </el-upload>
      <div class="username">
        {{ username }}
      </div>
      <div :class="userSex == '女' ? 'female' : 'male'">
        <i :class="userSex == '女' ? 'el-icon-female' : 'el-icon-male'"></i>
      </div>
      <div class="nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1" @click="toInfo">信息</el-menu-item>
          <el-menu-item index="2" @click="toPosts">帖子</el-menu-item>
          <el-menu-item index="3" @click="toMessage">消息</el-menu-item>
        </el-menu>
      </div>
    </div>

    <div class="PI-content clearfix"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      imageUrl: require("../../../Pictures/index/photo-collections/breathingField/7.jpg"),
      username: "Ya-呀",
      userSex: "女",
      activeIndex: "1",
      loading: false,
    };
  },

  mounted() {
    this.$router.push({
      name: "info",
    });
  },


  methods: {

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    toPosts() {
      this.$router.push({
        name: "personalposts",
      });
    },
    toInfo() {
      this.$router.push({
        name: "info",
      });
    },
    toMessage() {
      this.$router.push({
        name: "message",
      });
    },
  },
};
</script>

<style scoped>
.PI-outerbox {
  height: 100%;
  width: 720px;
  margin-bottom: 100px;
}

.header-nav {
  position: relative;
  margin-top: 100px;
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px rgb(232, 232, 232);
}


.imagebox {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: -60px;
  left: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.7);
}

.imagebox img {
  width: 100%;
}

.header-nav .loadup {
  position: absolute;
  top: 70px;
  left: 245px;
  font-size: 14px;
  color: rgb(149, 149, 149);
  
}

.header-nav .username {
  position: absolute;
  top: 20px;
  left: 260px;
  font-size: 25px;
  
  color: rgb(72, 72, 72);
}

.header-nav .female {
  position: absolute;
  left: 330px;
  top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 20px;
  border-radius: 5px;
  background-color: rgb(246, 94, 175);
}

.header-nav .male {
  position: absolute;
  left: 330px;
  top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 20px;
  border-radius: 5px;
  background-color: rgb(169, 202, 255);
}

.header-nav i {
  color: rgb(255, 255, 255);
}

.header-nav .nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.header-nav .nav .el-menu-demo {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.PI-content {
  width: 100%;
  background-color: #ffffff;
}
</style>