<template>
  <div class="SI-outerbox">
    <el-descriptions
      class="margin-top"
      title="个人信息"
      :column="1"
      :size="size"
    >
      <template slot="extra">
        <el-button size="small" @click="changeInfoVisible = true">
          修改信息
        </el-button>
        <el-dialog
          title="修改信息"
          :visible.sync="changeInfoVisible"
          width="30%"
        >
          <div class="changeInfo">
            <div class="infoInput">
              <span>昵称：</span>
              <el-input
                v-model="newusername"
                :placeholder="username + '（请使用更名卡进行更改）'"
                :disabled="true"
              ></el-input>
            </div>
            <div class="infoInput">
              <span>手机号：</span>
              <el-input
                type="text"
                :placeholder="userphone"
                v-model="newuserphone"
                maxlength="11"
                show-word-limit
              >
              </el-input>
            </div>
            <div class="infoInput">
              <span>城市：</span>
              <el-input
                v-model="newusercity"
                :placeholder="usercity"
              ></el-input>
            </div>
            <div class="infoInput">
              <span>生日：</span>
              <el-date-picker
                v-model="newuserbirth"
                type="date"
                :placeholder="userbirth"
              >
              </el-date-picker>
            </div>
            <div class="infoInput">
              <span>性别：</span>
              <el-radio-group v-model="newusersex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </div>
            <div class="infoInput">
              <span>个性签名：</span>
              <el-input
                type="textarea"
                :placeholder="usersignature"
                v-model="newusersignature"
                maxlength="30"
                show-word-limit
              >
              </el-input>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="changeInfoVisible = false">取 消</el-button>
            <el-button type="primary" @click="changeInfo"> 确 定 </el-button>
          </span>
        </el-dialog>
        &nbsp;
        <el-button size="small" @click="changePassVisible = true">
          修改密码
        </el-button>
        <el-dialog
          title="修改密码"
          :visible.sync="changePassVisible"
          width="30%"
        >
          <div class="changePass">
            <div class="passInput">
              <span>旧密码：</span>
              <el-input
                placeholder="请输入旧密码"
                v-model="oldpass"
                show-password
              ></el-input>
            </div>
            <div class="passInput">
              <span>新密码：</span>
              <el-input
                placeholder="请输入新密码"
                v-model="newpass"
                show-password
              ></el-input>
            </div>
            <div class="passInput">
              <span>确认新密码：</span>
              <el-input
                placeholder="请再次输入新密码"
                v-model="checknewpass"
                show-password
              ></el-input>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="changePassVisible = false">取 消</el-button>
            <el-button type="primary" @click="changePass"> 确 定 </el-button>
          </span>
        </el-dialog>
      </template>
      <el-descriptions-item label="昵称" :username="username">
        {{ username }}
      </el-descriptions-item>
      <el-descriptions-item label="手机号" :userphone="userphone">
        {{ userphone }}
      </el-descriptions-item>
      <el-descriptions-item label="性别" :usersex="usersex">
        {{ usersex }}
      </el-descriptions-item>
      <el-descriptions-item label="生日" :userbirth="userbirth">
        {{ userbirth }}
      </el-descriptions-item>
      <el-descriptions-item label="城市" :usercity="usercity">
        {{ usercity }}
      </el-descriptions-item>
      <el-descriptions-item label="个性签名" :usersignature="usersignature">
        {{ usersignature }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "SpecificInfo",

  data() {
    return {
      size: "",
      username: "Ya-呀",
      userphone: "18100000000",
      usersex: "女",
      userbirth: "2000-08-01",
      usercity: "江西 南昌",
      usersignature: "世上无难事，只要肯登攀。",

      changePassVisible: false,
      oldpass: "",
      newpass: "",
      checknewpass: "",

      changeInfoVisible: false,
      newusername: "",
      newuserphone: "",
      newusercity: "",
      newuserbirth: "",
      newusersex: "",
      newusersignature: "",
    };
  },

  computed: {
    getTime() {
      var date = this.newuserbirth;
      var y = date.getFullYear();
      var m =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return y + "-" + m + "-" + d;
    },
  },

  methods: {
    changeInfo() {
      console.log(this.$parent.$parent);
      this.$confirm("是否确认修改？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
          setTimeout(() => {
            this.changeInfoVisible = false;
            this.userphone = this.newuserphone;
            this.usercity = this.newusercity;
            this.userbirth = this.getTime;
            this.usersignature = this.newusersignature;
            this.usersex = this.newusersex;
            this.$parent.$parent.userSex = this.newusersex;
          }, 500);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
    },

    changePass() {
      if (this.oldpass != "" && this.newpass != "" && this.checknewpass != "") {
        if (this.newpass == this.checknewpass) {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
          setTimeout(() => {
            this.changePassVisible = false;
          }, 500);
        } else {
          this.$message.error("两次新密码输入不一致");
        }
      } else {
        this.$message({
          message: "请填写密码",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style scoped>
.SI-outerbox {
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
}

.margin-top {
  width: 80%;
}

.changeInfo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.changeInfo .infoInput {
  width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.changeInfo .infoInput span {
  width: 70px;
}

.changePass {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.changePass .passInput {
  width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.changePass .passInput span {
  width: 100px;
}
</style>