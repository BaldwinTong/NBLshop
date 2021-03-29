<template>
  <!-- nav -->
  <div class="botNav">
    <div class="item" v-for="item in tarbarList" :key="item.id" @click="clickItem(item.path)">
      <i class="icon" v-if="item.path == $route.path">
        <img :src="item.electIcon" alt="" />
      </i>
      <i class="icon" v-else>
        <img :src="item.icon" alt="" />
      </i>
      <div class="itemTitle" :class="item.path == $route.path?'active':''">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarbarList: [
        {
          id:1,
          title: "首页",
          icon: require("../assets/icon_home_page.png"),
          electIcon: require("../assets/icon_home_color.png"),
          path:'/'
        },
        {
          id:2,
          title: "我的",
          icon: require("../assets/icon_my.png"),
          electIcon: require("../assets/icon_my_color.png"),
          path:'/mine'
        },
        {
          id:3,
          title: "关于",
          icon: require("../assets/icon_my.png"),
          electIcon: require("../assets/icon_my_color.png"),
          path:'/about'
        },
      ],
    };
  },
  methods: {
    clickItem(path) {
      this.$router.push(path);
    },
  },
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

.botNav .active {
  color: #3b83fc;
  font-size: 14px;
}
</style>