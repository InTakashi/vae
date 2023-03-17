<template>
  <div class="WTKR-outerbox" v-show="show">
    <a href="javascript:;">
      <div class="header-box">
        <div class="header">
          <img src="../../../../Pictures/square/ToppingPost/wantToKnow.jpg" />
          <span class="username">时差Vat</span>
        </div>
        <span class="time">2020-09-29 19:41</span>
      </div>
      <div class="content-box">
        <p class="tittle">#想知道💭</p>
        <p>欢迎来到#想知道 话题~💓</p>
        <p>只要你有问题，想发出问号寻求些许答案，欢迎来#想知道#尽情提问！</p>
        <p>或者你是个小机灵，能吞噬问号，给出问题的答案，欢迎来#想知道#大展身手！</p>
        <p>这里有无限的问号，和无数的可能，如果你想知道，就来#想知道#吧~</p>
        <p>主持人@小茹 @桉桉 @时差Vat 等着你的问号轰炸~</p>
        
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "WantToKnowRules",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.WTKR-outerbox {
  width: 100%;
  height: 100%;
  overflow: auto;
  float: left;
}

.header-box {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.header {
  height: 100%;
  width: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(54, 54, 54);
}
.header img {
  height: 80%;
  border-radius: 8px;
}

.time {
  font-size: 14px;
  color: rgb(118, 118, 118);
  margin-right: 10px;
}

.content-box {
  width: 100%;
}

.content-box p {
  font-size: 18px;
  margin: 0 0 10px 10px;
  color: rgb(54, 54, 54);
  line-height: 1.25;
}

.tittle {
  font-size: 22px !important;
  font-weight: 600;
  margin: 20px 0 !important;
}
</style>