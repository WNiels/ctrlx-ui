<template>
  <b-container>
    <b-navbar ver toggleable="lg" type="light" variant="rexroth-gray-light">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-text>Recipe<br/><b>Default</b></b-nav-text>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button size="lg">Home</b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button size="lg">Diagnostics</b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button size="lg">Commissioning</b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button size="lg">Settings</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
// import rexroth_logo from '../Logo_of_Bosch_Rexroth_AG.png'

// export default {
//
//   methods: {
//     shutDown() {
//       uibuilder.send({
//         cmd: "shutdown",
//       });
//       console.log("Message sent for Shutdown");
//     },
//   },
// };
</script>

<!--<style scoped>-->
<!--:host /deep/ .dropdown-item.router-link-exact-active,-->
<!--:host /deep/ .dropdown-item:active {-->
<!--  background-color: #a8a8a8 !important;-->
<!--}-->

<!--:host /deep/ .dropdown-item:active {-->
<!--  background-color: #ffc107 !important;-->
<!--}-->

<!--.b-tooltip-danger {-->
<!--  margin-right: 45px !important;-->
<!--}-->
<!--.b-tooltip-info {-->
<!--  margin-right: 5px !important;-->
<!--}-->

<!--:host /deep/ .modal-header {-->
<!--  padding: 0.2rem 1rem !important;-->
<!--}-->

<!--/* Buzz Out */-->
<!--@-webkit-keyframes hvr-buzz-out {-->
<!--  10% {-->
<!--    -webkit-transform: translateX(3px) rotate(2deg);-->
<!--    transform: translateX(3px) rotate(2deg);-->
<!--  }-->
<!--  20% {-->
<!--    -webkit-transform: translateX(-3px) rotate(-2deg);-->
<!--    transform: translateX(-3px) rotate(-2deg);-->
<!--  }-->
<!--  30% {-->
<!--    -webkit-transform: translateX(3px) rotate(2deg);-->
<!--    transform: translateX(3px) rotate(2deg);-->
<!--  }-->
<!--  40% {-->
<!--    -webkit-transform: translateX(-3px) rotate(-2deg);-->
<!--    transform: translateX(-3px) rotate(-2deg);-->
<!--  }-->
<!--  50% {-->
<!--    -webkit-transform: translateX(2px) rotate(1deg);-->
<!--    transform: translateX(2px) rotate(1deg);-->
<!--  }-->
<!--  60% {-->
<!--    -webkit-transform: translateX(-2px) rotate(-1deg);-->
<!--    transform: translateX(-2px) rotate(-1deg);-->
<!--  }-->
<!--  70% {-->
<!--    -webkit-transform: translateX(2px) rotate(1deg);-->
<!--    transform: translateX(2px) rotate(1deg);-->
<!--  }-->
<!--  80% {-->
<!--    -webkit-transform: translateX(-2px) rotate(-1deg);-->
<!--    transform: translateX(-2px) rotate(-1deg);-->
<!--  }-->
<!--  90% {-->
<!--    -webkit-transform: translateX(1px) rotate(0);-->
<!--    transform: translateX(1px) rotate(0);-->
<!--  }-->
<!--  100% {-->
<!--    -webkit-transform: translateX(-1px) rotate(0);-->
<!--    transform: translateX(-1px) rotate(0);-->
<!--  }-->
<!--}-->
<!--@keyframes hvr-buzz-out {-->
<!--  10% {-->
<!--    -webkit-transform: translateX(3px) rotate(2deg);-->
<!--    transform: translateX(3px) rotate(2deg);-->
<!--  }-->
<!--  20% {-->
<!--    -webkit-transform: translateX(-3px) rotate(-2deg);-->
<!--    transform: translateX(-3px) rotate(-2deg);-->
<!--  }-->
<!--  30% {-->
<!--    -webkit-transform: translateX(3px) rotate(2deg);-->
<!--    transform: translateX(3px) rotate(2deg);-->
<!--  }-->
<!--  40% {-->
<!--    -webkit-transform: translateX(-3px) rotate(-2deg);-->
<!--    transform: translateX(-3px) rotate(-2deg);-->
<!--  }-->
<!--  50% {-->
<!--    -webkit-transform: translateX(2px) rotate(1deg);-->
<!--    transform: translateX(2px) rotate(1deg);-->
<!--  }-->
<!--  60% {-->
<!--    -webkit-transform: translateX(-2px) rotate(-1deg);-->
<!--    transform: translateX(-2px) rotate(-1deg);-->
<!--  }-->
<!--  70% {-->
<!--    -webkit-transform: translateX(2px) rotate(1deg);-->
<!--    transform: translateX(2px) rotate(1deg);-->
<!--  }-->
<!--  80% {-->
<!--    -webkit-transform: translateX(-2px) rotate(-1deg);-->
<!--    transform: translateX(-2px) rotate(-1deg);-->
<!--  }-->
<!--  90% {-->
<!--    -webkit-transform: translateX(1px) rotate(0);-->
<!--    transform: translateX(1px) rotate(0);-->
<!--  }-->
<!--  100% {-->
<!--    -webkit-transform: translateX(-1px) rotate(0);-->
<!--    transform: translateX(-1px) rotate(0);-->
<!--  }-->
<!--}-->
<!--.hvr-buzz-out {-->
<!--  display: inline-block;-->
<!--  /* vertical-align: middle; */-->
<!--  -webkit-transform: perspective(1px) translateZ(0);-->
<!--  transform: perspective(1px) translateZ(0);-->
<!--  box-shadow: 0 0 1px rgba(0, 0, 0, 0);-->
<!--}-->
<!--.hvr-buzz-out:hover,-->
<!--.hvr-buzz-out:focus,-->
<!--.hvr-buzz-out:active {-->
<!--  -webkit-animation-name: hvr-buzz-out;-->
<!--  animation-name: hvr-buzz-out;-->
<!--  -webkit-animation-duration: 0.75s;-->
<!--  animation-duration: 0.75s;-->
<!--  -webkit-animation-timing-function: linear;-->
<!--  animation-timing-function: linear;-->
<!--  -webkit-animation-iteration-count: 1;-->
<!--  animation-iteration-count: 1;-->
<!--}-->
<!--</style>-->
