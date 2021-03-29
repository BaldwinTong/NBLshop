<template>
  <div id="app">
    <tabar></tabar>
    <router-view></router-view>
  </div>
</template>
<script>
import Tabar from "./components/tabar";
export default {
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
