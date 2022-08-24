<template>
  <div>
    <navbar></navbar>
    <navbarsec></navbarsec>
    <keep-alive :max="13">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>
// import Vue from "vue";
import navbar from "./NavBar.vue";
import navbarsec from "./NavBarSecondary.vue";

export default {
  name: "app",
  components: {
    navbar,
    navbarsec
  },

  mounted() {},
};
</script>

<style>
h2 {
  font-weight: bold !important;
}
</style>
