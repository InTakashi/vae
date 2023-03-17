<template>
  <div class="SI-outerbox clearfix">
    <div class="blue-background"></div>
    <div class="signin-days">
      <p :successivedays="successivedays">连续签到{{ successivedays }}天</p>
      <p :totaldays="totaldays">总签到{{ totaldays }}天</p>
    </div>
    <div class="signin-button">
      <el-button
        :disabled="disabled"
        :lable="lable"
        plain
        round
        @click="signin"
      >
        {{ lable }}
      </el-button>
    </div>
    <el-calendar class="calendar">
      <template slot="dateCell" slot-scope="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(2).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      totaldays: 0,
      successivedays: 0,
      signinCards: 0,
      disabled: false,
      lable: "点击签到",
    };
  },

  methods: {
    signin() {
      this.successivedays += 1;
      this.totaldays += 1;
      this.$message({
        message: "签到成功",
        type: "success",
      });
      this.disabled = true;
      this.lable = "已签到";
    },
  },
};
</script>

<style scoped>
.is-selected {
  color: #1989fa;
}

.SI-outerbox {
  position: relative;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px 15px 0 0;
}

.blue-background {
  position: absolute;
  width: 100%;
  height: 300px;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(to right, rgb(126, 186, 255), rgb(181, 213, 255));
}

.signin-days {
  z-index: 2;
  display: flex;
  margin-top: 30px;
  width: 300px;
  justify-content: space-evenly;

  color: #ffffff;
}

.signin-button {
  margin: 25px 0;
  z-index: 2;
}

.calendar {
  width: 350px;
  box-shadow: 0 0 2px rgb(191, 191, 191);
  z-index: 0;
  margin-bottom: 20px;
}
</style>