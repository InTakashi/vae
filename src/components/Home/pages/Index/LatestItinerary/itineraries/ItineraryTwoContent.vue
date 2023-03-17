<template>
  <div class="outerbox">
    <div class="innerbox">
      <p class="address">演出地点：温州市楠溪江滩地音乐公园</p>
      <p class="date">活动时间：2022.04.17</p>
      <p class="timeslot">
        <span class="time">12:00</span>
        <span class="text">至</span>
        <span class="time">23:00</span>
      </p>
      <el-button
        class="button"
        type="primary"
        @click="outerVisible = true"
        :disabled="disabled"
        :text="text"
        >{{ text }}</el-button
      >
      <el-dialog :visible.sync="outerVisible">
        <div class="info">
          <div class="input">
            <el-input v-model="name" placeholder="请输入姓名"></el-input>
          </div>
          <div class="input">
            <el-input
              v-model="phone"
              placeholder="请输入电话"
              maxlength="11"
              show-word-limit
            ></el-input>
          </div>
        </div>
        <el-dialog width="20%" :visible.sync="innerVisible" append-to-body>
          <div class="signup">报名成功！期待你的到来~</div>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="checkinfo">提交</el-button>
        </div>
      </el-dialog>
      <img src="../../../../../Pictures/index/recentTrips/wenzhou.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItineraryTwoContent",
  data() {
    return {
      tittle: "温州演出 — — 楠溪江星巢秘境音乐节",

      outerVisible: false,
      innerVisible: false,
      name: "",
      phone: "",

      text: "我要报名",
      disabled: false,
    };
  },
  methods: {
    checkinfo() {
      if (this.name != "" && this.phone != "") {
        this.innerVisible = true;
        setTimeout(() => {
          this.outerVisible = false;
          this.innerVisible = false;
          this.disabled = true;
          this.text = "已报名";
        }, 1000);
      } else {
        this.$message.error("请填写完所有信息");
      }
    },
  },
};
</script>

<style scoped>
.outerbox {
  width: 100%;
  display: flex;
  justify-content: center;
}

.innerbox {
  width: 90%;
  display: flex;
  flex-direction: column;
  
  align-items: center;
}

.innerbox .address,
.innerbox .date {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
}

.innerbox .timeslot {
  display: flex;
  justify-content: center;
}

.innerbox .time {
  display: block;
  font-size: 18px;
  font-weight: 600;
}

.innerbox .text {
  display: block;
  font-size: 12px;
  margin: 0 20px;
}

.innerbox .button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  margin: 30px 0;
  color: rgb(255, 255, 255);
  
  background-color: rgb(64, 158, 255);
}

.innerbox .info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.innerbox .info .input {
  width: 300px;
  margin: 10px 0;
}

.innerbox img {
  width: 100%;
  margin: 10px 0;
}
</style>