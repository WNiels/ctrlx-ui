<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <navbar></navbar>
      </b-col>
    </b-row>
    <b-row class="text-center" >
      <b-col>
        <navbarsec></navbarsec>
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col cols="1">
        <b-row align-v="start">
          <b-col>
            <b-nav vertical>
              <b-button size="lg">Automatic</b-button>
              <b-button size="lg">Manual</b-button>
              <b-button size="lg">Setup</b-button>
            </b-nav>
          </b-col>
        </b-row>
        <b-row align-v="stretch">
          <b-col></b-col>
        </b-row>
        <b-row align-v="end">
          <b-col>
            <b-button size="lg">Clear Error</b-button></b-col>
        </b-row>
      </b-col>
      <b-col>
          <router-view :key="$route.fullPath"/>
      </b-col>
    </b-row>
  </b-container>
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
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    toast(toaster, append = true) {
      this.counter++
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      })
    }
  },

  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Greetings from App.vue")
      if (newMsg.hasOwnProperty('toast')) {
        console.info("Msg received from Node-RED server in App:", newMsg);
        this.toast(newMsg.toast);
      }
    });
  },
};
</script>

<style lang="scss">

//$primary:       $blue !default;
//$secondary: #c82333;
//$success:       $green !default;
//$info:          $cyan !default;
//$warning:       $yellow !default;
//$danger:        $red !default;
//$light:         $gray-100 !default;
//$dark:          $gray-800 !default;

$theme-colors: (
    "rexroth-gray": #c7ced1,
    "rexroth-gray-light": #ebf3f7
);

@import "../../node_modules/bootstrap/scss/bootstrap.scss";
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

.active {
  background-color: #00cdff !important;
}
// ...
</style>
