<template>
  <div class="outerbox">
    <div class="innerbox">
      <div class="imgbox">
        <img src="./Pictures/background-image/slogan.jpg" />
      </div>
      <div class="inputbox">
        <el-form
          class="form"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item label="账号：" prop="account">
            <el-input
              class="account"
              type="text"
              v-model="ruleForm.account"
              maxlength="6"
              show-word-limit
              autocomplete="off"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pass">
            <el-input
              class="password"
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-button
            class="button"
            type="primary"
            round
            size="mini"
            @click="toHome"
            v-loading.fullscreen.lock="fullscreenLoading"
          >
            登录
          </el-button>
          <el-button
            class="button"
            type="primary"
            round
            size="mini"
            @click="toRegister"
            v-loading.fullscreen.lock="fullscreenLoading"
          >
            注册
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    const checkAccount = (account, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (value.length < 6) {
          return callback(new Error("账号不能少于六位数字"));
        } else {
          callback();
        }
      }, 500);
    };

    const validatePass = (pass, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };

    return {

      ruleForm: {
        pass: "",
        account: "",
      },
      rules: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },

      fullscreenLoading: false,
    };
  },

  methods: {
    toHome() {
      if (this.ruleForm.account && this.ruleForm.pass) {
        var A = this.ruleForm.account;
        var P = this.ruleForm.pass;
        if (A == "123456" && P == "123456") {
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
            this.$router.push({
              name: "home",
            });
          }, 1000);
        } else {
          this.$message.error("账号和密码输入错误，请重新输入~");
        }
      } else {
        this.$message.error("请输入账号和密码~");
      }
    },

    toRegister() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.$router.push({
          name: "register",
        });
      }, 500);
    },
  },
};
</script>

<style scoped>
.outerbox {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("./Pictures/background-image/backgroundimage.jpg") no-repeat;
  background-size: 100%;
}

.innerbox {
  display: flex;
  justify-content: space-evenly;
  width: 450px;
  height: 100%;
  float: right;
}

.imgbox {
  display: flex;
  justify-content: center;
  width: 70px;
  overflow: hidden;
}

.imgbox img {
  height: 100%;
}

.inputbox {
  width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.inputbox .form {
  width: 200px;
}

.inputbox .form .password,
.inputbox .form .account {
  width: 200px;
}

.inputbox .button {
  width: 70px;
  margin: 0 15px;
}
</style>