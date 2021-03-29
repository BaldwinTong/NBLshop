<template>
  <div class="page">
    <div class="seach">
      <img src="../assets/icon_search@2x.png" alt="放大镜" />
    </div>
    <div class="banner">
      <el-carousel trigger="click" height="138px" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <div class="iconList">
      <img src="../assets/icon_Nearby_stores@2x.png" alt="">
      <img src="../assets/icon_circle@2x.png" alt="">
      <img src="../assets/icon_parents_school@2x.png" alt="">
      <img src="../assets/icon_discount_coupon@2x.png" alt="">
    </div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.page {
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
}
.seach {
  width: 100%;
  height: 36px;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(230, 228, 235, 0.5);
  border-radius: 16px;
}

.seach img {
  width: 24px;
  height: 24px;
  margin-top: 6px;
  margin-left: 16px;
}

/**
  轮播
 */
.banner {
  margin-top: 16px;
}

.el-carousel {
  border-radius: 8px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/**菜单图标 */
.iconList{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.iconList img{
  width: 72px;
  height: 72px;
}
</style>
