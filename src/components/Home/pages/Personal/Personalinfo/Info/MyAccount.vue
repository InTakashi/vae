<template>
  <div class="MA-outerbox">
    <div class="MA-innerbox">
      <div class="tittle">
        <p>我的账户</p>
      </div>
      <div class="Ma-content">
        <div class="myPinecone">
          <img
            class="outer-img"
            src="../../../../../Pictures/personal/Pinecone/one.png"
          />
          <p class="name" :myPinecone="myPinecone">松果：{{ myPinecone }}</p>
          <div class="buy-pinecones">
            <a href="javascript:;" @click="PineconeVisible = true">购买松果</a>
            <el-dialog
              title="购买松果"
              :visible.sync="PineconeVisible"
              width="30%"
            >
              <div class="pineconeContent">
                <div class="content">
                  <div class="pineconeNum">
                    <img
                      class="firstimg"
                      src="../../../../../Pictures/personal/Pinecone/one.png"
                    />
                    <p :least="least">{{ least }} 颗松果</p>
                  </div>
                  <el-button
                    class="pineconePrice"
                    type="primary"
                    @click="addLeast"
                  >
                    ￥ 6
                  </el-button>
                </div>
                <div class="content">
                  <div class="pineconeNum">
                    <img
                      class="secondimg"
                      src="../../../../../Pictures/personal/Pinecone/two.png"
                    />
                    <p :less="less">{{ less }} 颗松果</p>
                  </div>
                  <el-button
                    class="pineconePrice"
                    type="primary"
                    @click="addLess"
                  >
                    ￥ 30
                  </el-button>
                </div>
                <div class="content">
                  <div class="pineconeNum">
                    <img
                      class="thirdimg"
                      src="../../../../../Pictures/personal/Pinecone/three.png"
                    />
                    <p :more="more">{{ more }} 颗松果</p>
                  </div>
                  <el-button
                    class="pineconePrice"
                    type="primary"
                    @click="addMore"
                  >
                    ￥ 68
                  </el-button>
                </div>
                <div class="content">
                  <div class="pineconeNum">
                    <img
                      class="fourthimg"
                      src="../../../../../Pictures/personal/Pinecone/four.png"
                    />
                    <p :most="most">{{ most }} 颗松果</p>
                  </div>
                  <el-button
                    class="pineconePrice"
                    type="primary"
                    @click="addMost"
                  >
                    ￥ 128
                  </el-button>
                </div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="PineconeVisible = false">取消购买</el-button>
              </span>
            </el-dialog>
          </div>
        </div>

        <div class="mySigninCards">
          <img
            class="outer-img"
            src="../../../../../Pictures/personal/signinCard.jpg"
          />
          <p class="name" :mySigninCards="mySigninCards">
            补签卡：{{ mySigninCards }}
          </p>
          <div class="buy-signinCards">
            <a href="javascript:;" @click="signinCardsVisible = true">
              购买补签卡
            </a>
            <el-dialog
              title="购买补签卡"
              :visible.sync="signinCardsVisible"
              width="30%"
            >
              <div class="signinCardContent">
                <div class="signinCardImage">
                  <img
                    class="inner-img"
                    src="../../../../../Pictures/personal/signinCard.jpg"
                  />
                </div>
                <div class="signinCardNumber">
                  <el-input-number
                    v-model="signinCardNum"
                    :min="1"
                  ></el-input-number>
                </div>
                <div class="signinCardPrice">
                  <span>需要</span>
                  <img
                    src="../../../../../Pictures/personal/Pinecone/one.png"
                  />
                  <span :signinCardNeed="signinCardNeed">{{
                    signinCardNeed
                  }}</span>
                  <p :myPinecone="myPinecone">
                    （剩余
                    <img
                      src="../../../../../Pictures/personal/Pinecone/one.png"
                    />
                    {{ myPinecone }} ）
                  </p>
                </div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="signinCardsVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmPurchaseSignCard">
                  购 买
                </el-button>
              </span>
            </el-dialog>
          </div>
        </div>

        <div class="myRenameCards">
          <img
            class="outer-img"
            src="../../../../../Pictures/personal/renameCard.jpg"
          />
          <p class="name" :myRenameCards="myRenameCards">
            更名卡：{{ myRenameCards }}
          </p>
          <div class="buy-renameCards">
            <a href="javascript:;" @click="renameCardsVisible = true">
              购买更名卡
            </a>
            <el-dialog
              title="购买更名卡"
              :visible.sync="renameCardsVisible"
              width="30%"
            >
              <div class="renameCardContent">
                <div class="renameCardImage">
                  <img
                    class="inner-img"
                    src="../../../../../Pictures/personal/renameCard.jpg"
                  />
                </div>
                <div class="renameCardNumber">
                  <el-input-number
                    v-model="renameCardNum"
                    :min="1"
                  ></el-input-number>
                </div>
                <div class="renameCardPrice">
                  <span>需要</span>
                  <img
                    src="../../../../../Pictures/personal/Pinecone/one.png"
                  />
                  <span :renameCardNeed="renameCardNeed">{{
                    renameCardNeed
                  }}</span>
                  <p :myPinecone="myPinecone">
                    （剩余
                    <img
                      src="../../../../../Pictures/personal/Pinecone/one.png"
                    />
                    {{ myPinecone }} ）
                  </p>
                </div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="renameCardsVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmPurchaseRenameCard">
                  购 买
                </el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      signinCardsVisible: false,
      signinCardNum: 1,
      mySigninCards: 0,

      renameCardsVisible: false,
      renameCardNum: 1,
      myRenameCards: 0,

      PineconeVisible: false,
      myPinecone: 514,
      least: 60,
      less: 310,
      more: 720,
      most: 1368,
    };
  },

  computed: {
    signinCardNeed() {
      const signinCardNeed = this.signinCardNum * 10;
      return signinCardNeed;
    },
    renameCardNeed() {
      const renameCardNeed = this.renameCardNum * 60;
      return renameCardNeed;
    },
  },

  methods: {
    addLeast() {
      this.$confirm("是否确认购买？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "购买成功!",
          });
          setTimeout(() => {
            this.PineconeVisible = false;
            this.myPinecone += this.least;
          }, 500);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买",
          });
        });
    },
    addLess() {
      this.$confirm("是否确认购买？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "购买成功!",
          });
          setTimeout(() => {
            this.PineconeVisible = false;
            this.myPinecone += this.less;
          }, 500);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买",
          });
        });
    },
    addMore() {
      this.$confirm("是否确认购买？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "购买成功!",
          });
          setTimeout(() => {
            this.PineconeVisible = false;
            this.myPinecone += this.more;
          }, 500);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买",
          });
        });
    },
    addMost() {
      this.$confirm("是否确认购买？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "购买成功!",
          });
          setTimeout(() => {
            this.PineconeVisible = false;
            this.myPinecone += this.most;
          }, 500);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买",
          });
        });
    },

    confirmPurchaseSignCard() {
      this.$confirm("是否确认购买？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (this.myPinecone >= this.signinCardNeed) {
            this.$message({
              message: "购买成功",
              type: "success",
            });
            setTimeout(() => {
              this.signinCardsVisible = false;
              this.mySigninCards += this.signinCardNum;
              this.myPinecone -= this.signinCardNeed;
            }, 500);
          } else {
            this.$message({
              message: "松果不足，请前往购买松果",
              type: "warning",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买",
          });
        });
    },

    confirmPurchaseRenameCard() {
      this.$confirm("是否确认购买？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (this.myPinecone >= this.renameCardNeed) {
            this.$message({
              message: "购买成功",
              type: "success",
            });
            setTimeout(() => {
              this.renameCardsVisible = false;
              this.myRenameCards += this.renameCardNum;
              this.myPinecone -= this.renameCardNeed;
            }, 500);
          } else {
            this.$message({
              message: "松果不足，请前往购买松果",
              type: "warning",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消购买",
          });
        });
    },
  },
};
</script>

<style scoped>
.MA-outerbox {
  width: 100%;
  margin: 55px 0;
  display: flex;
  justify-content: center;
}

.MA-innerbox {
  width: 80%;
}

.MA-innerbox .tittle {
  margin-bottom: 35px;
}

.MA-innerbox .tittle p {
  font-weight: 600;
  color: rgb(48, 49, 51);
}

.Ma-content {
  display: flex;
  
}

.Ma-content .name {
  margin: 10px 0;
}

.Ma-content a {
  font-size: 13px;
}

.mySigninCards,
.myPinecone,
.myRenameCards {
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.myPinecone .outer-img {
  height: 100px;
}

.myPinecone .pineconeContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.myPinecone .pineconeContent .content {
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: rgb(248, 250, 255);
  margin-bottom: 10px;
  border-radius: 10px;
  justify-content: space-between;
}

.myPinecone .pineconeContent .content .pineconeNum {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
}

.myPinecone .pineconeContent .content .firstimg {
  height: 30px;
}
.myPinecone .pineconeContent .content .secondimg {
  height: 25px;
}
.myPinecone .pineconeContent .content .thirdimg {
  height: 60px;
}
.myPinecone .pineconeContent .content .fourthimg {
  height: 70px;
}

.myPinecone .pineconeContent .content .pineconePrice {
  height: 35px;
  margin-right: 20px;
}

.mySigninCards .outer-img,
.myRenameCards .outer-img {
  width: 100px;
}

.mySigninCards .buy-signinCards .signinCardContent,
.myRenameCards .buy-renameCards .renameCardContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.mySigninCards .buy-signinCards .signinCardContent .signinCardImage .inner-img,
.myRenameCards .buy-renameCards .renameCardContent .renameCardImage .inner-img {
  width: 150px;
  height: 150px;
  border-radius: 20px;
}

.mySigninCards .buy-signinCards .signinCardContent .signinCardNumber,
.myRenameCards .buy-renameCards .renameCardContent .renameCardNumber {
  margin: 20px 0;
}

.mySigninCards .buy-signinCards .signinCardContent .signinCardPrice,
.myRenameCards .buy-renameCards .renameCardContent .renameCardPrice {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mySigninCards .buy-signinCards .signinCardContent .signinCardPrice span,
.myRenameCards .buy-renameCards .renameCardContent .renameCardPrice span {
  color: rgb(255, 0, 0);
}

.mySigninCards .buy-signinCards .signinCardContent .signinCardPrice p,
.myRenameCards .buy-renameCards .renameCardContent .renameCardPrice p {
  display: flex;
  align-items: center;
}

.mySigninCards .buy-signinCards .signinCardContent .signinCardPrice img,
.myRenameCards .buy-renameCards .renameCardContent .renameCardPrice img {
  width: 15px;
  height: 20px;
  margin: 0 7px;
}
</style>