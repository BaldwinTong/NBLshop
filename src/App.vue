<template>
  <div id="app">
    <tabar></tabar>
    <router-view></router-view>
  </div>
</template>
<script>
import Tabar from "./views/tabar";
export default {
  name:'app',
  data() {
    return {};
  },
  methods: {},
  components:{
    Tabar,
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
</style>
