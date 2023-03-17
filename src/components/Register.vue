<template>
  <div class="outerbox">
    <div class="innerbox">
      <div class="imgbox">
        <img src="./Pictures/background-image/slogan.jpg" />
      </div>
      <div class="inputbox">
        <el-form
          class="form"
          label-position="right"
          label-width="90px"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item label="手机号：" prop="phone">
            <el-input
              type="text"
              v-model="ruleForm.phone"
              maxlength="11"
              show-word-limit
              autocomplete="off"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              maxlength="12"
              autocomplete="off"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名：" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="生日：" prop="date">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-button
            class="button"
            type="primary"
            round
            size="mini"
            @click="success"
            v-loading.fullscreen.lock="fullscreenLoading"
          >
            注册
          </el-button>
        </el-form>
        <a
          href="javascript:;"
          @click="toLogin"
          v-loading.fullscreen.lock="fullscreenLoading"
          >返回登录页面</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// 引入axios
// import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    const checkPhone = (phone, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (value.length < 11) {
          return callback(new Error("手机号不能少于12位数字"));
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
        phone: "",
        name: "",
        date: "",
        sex: "",
      },
      rules: {
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
      },

      fullscreenLoading: false,
    };
  },

  methods: {
    success() {
      if (
        this.ruleForm.phone != "" ||
        this.ruleForm.pass != "" ||
        this.ruleForm.name != "" ||
        this.ruleForm.date != "" ||
        this.ruleForm.sex != ""
      ) {
        this.$message({
          message: "注册成功，3s后自动返回登录页面",
          type: "success",
        });
        setTimeout(() => {
          this.fullscreenLoading = true;
        }, 1500);
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$router.push({
            name: "login",
          });
        }, 3500);
      } else {
        this.$notify.error({
          title: "错误",
          message: "填写信息不能为空",
        });
      }
    },

    toLogin() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.$router.push({
          name: "login",
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
  background: url("./Pictures/background-image/backgroundimage2.jpg") no-repeat;
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
  width: 270px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.inputbox .form {
  width: 270px;
}

.inputbox .button {
  width: 270px;
}

.inputbox a{
  margin-top: 20px;
  color: rgb(180, 180, 180);
  font-size: 13px;
}
</style>