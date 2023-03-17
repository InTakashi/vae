<template>
  <div class="outerbox">
    <div class="innerbox">
      <div class="time">2022年02月01日 00:00</div>
      <div class="content-box">
        <p class="tittle">系统消息</p>
        <p class="text">
          【公告】Vae+祝大家2022新年快乐。新的一年健康平安，万事如意！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageOne",
};
</script>

<style scoped>
.outerbox {
  width: 600px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.innerbox {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.time {
  height: 45px;
  line-height: 45px;
  font-size: 13px;
  color: rgb(199, 199, 199);
}

.content-box {
  width: 100%;
  background-color: rgb(250, 250, 250);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tittle{
    width: 92%;
    margin: 20px 0 15px 0 ;
    font-size: 18px;
    font-weight: 600;
}

.text{
    width: 92%;
    margin: 0 0 15px 0;
}
</style>