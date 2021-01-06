<template>
  <!-- nav -->
  <div class="botNav">
    <div class="item" @click="tohome('/')">
      <i class="icon">
        <img src="../assets/icon_home_page.png" alt="" />
      </i>
      <div class="itemTitle">首页</div>
    </div>
    <div class="item"  @click="tomine('Mine')">
      <i class="icon">
        <img src="../assets/icon_my.png" alt="" />
      </i>
      <div class="itemTitle">我的</div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        tohome(path){
            this.$router.push(path);
        },
        tomine(path){
            this.$router.push(path);
        }
    }
};
</script>

<style>
.botNav {
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #d2d2d2;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.botNav .item {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.botNav .icon {
  width: 32px;
  height: 32px;
  display: block;
}

.botNav .icon img {
  width: 100%;
  height: 100%;
}

.botNav .itemTitle {
  color: #c3cbd9;
  font-size: 14px;
}

.active {
  color: #3b83fc;
  font-size: 14px;
}
</style>