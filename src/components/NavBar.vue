<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="rexroth-gray">
      <b-navbar-brand href="#">
        <b-img width="112" left fluid :src="require('../Logo_of_Bosch_Rexroth_AG.png')" class="d-inline-block align-top" alt="Bosch Rexroth logo"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
<!--        <b-navbar-nav>-->
<!--          <b-nav-item to="/" exact :active="$route.name == 'home'">Home</b-nav-item>-->
<!--          <b-nav-item to="/page1" exact :active="$route.name == 'page1'">Page 1</b-nav-item>-->
<!--          <b-nav-item to="/page2" exact :active="$route.name == 'page2'">Page 2</b-nav-item>-->
<!--          <b-nav-item to="/page3" exact :active="$route.name == 'page3'">Page 3</b-nav-item>-->
<!--          <b-nav-item-dropdown text="Page 4" left :class="{ active: $route.path.startsWith('/page4') }">-->
<!--            <b-dropdown-item to="/page4a" exact :active="$route.name == 'page4a'">Page 4a</b-dropdown-item>-->
<!--            <b-dropdown-item to="/page4b" exact :active="$route.name == 'page4b'">Page 4b</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
<!--        </b-navbar-nav>-->

        <b-navbar-nav class="ml-auto">
          <b-nav-text>Date Time</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text>Current Machine</b-nav-text>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--          </b-nav-form>-->

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<!--<template>-->
<!--  <div>-->
<!--    <b-navbar type="dark" variant="dark">-->
<!--      <b-navbar-nav>-->
<!--        <b-nav-text>-->
<!--          <b-icon-lightning-fill animation="fade" style="animation-duration: 1.75s" scale="1.5" class="text-warning"></b-icon-lightning-fill>-->
<!--          <span class="ml-3 mr-5 hvr-buzz-out">Project Name</span>-->
<!--        </b-nav-text>-->
<!--        <b-nav-item to="/" exact :active="$route.name == 'home'">Home</b-nav-item>-->
<!--        <b-nav-item to="/page1" exact :active="$route.name == 'page1'">Page 1</b-nav-item>-->
<!--        <b-nav-item to="/page2" exact :active="$route.name == 'page2'">Page 2</b-nav-item>-->
<!--        <b-nav-item to="/page3" exact :active="$route.name == 'page3'">Page 3</b-nav-item>-->
<!--        <b-nav-item-dropdown text="Page 4" left :class="{ active: $route.path.startsWith('/page4') }">-->
<!--          <b-dropdown-item to="/page4a" exact :active="$route.name == 'page4a'">Page 4a</b-dropdown-item>-->
<!--          <b-dropdown-item to="/page4b" exact :active="$route.name == 'page4b'">Page 4b</b-dropdown-item>-->
<!--        </b-nav-item-dropdown>-->
<!--      </b-navbar-nav>-->
<!--      &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
<!--      <b-navbar-nav class="ml-auto">-->
<!--        <b-nav-item>-->
<!--          &lt;!&ndash; v-b-tooltip.hover.left.v-danger="'Shutdown the device !'" &ndash;&gt;-->
<!--          <b-button-->
<!--            size="sm"-->
<!--            variant="danger"-->
<!--            @click="$bvModal.show('modal-shutdown')"-->
<!--            v-b-tooltip="{ trigger: 'hover', title: 'Shutdown the device', placement: 'left', variant: 'danger' }"-->
<!--            ><b-icon icon="power"></b-icon-->
<!--          ></b-button>-->
<!--        </b-nav-item>-->
<!--      </b-navbar-nav>-->
<!--    </b-navbar>-->

<!--    &lt;!&ndash; Shutdown Modal  &ndash;&gt;-->
<!--    <b-modal id="modal-shutdown" no-fade header-bg-variant="secondary" header-text-variant="light">-->
<!--      <template #modal-header>-->
<!--        <h5>Shutdown</h5>-->
<!--      </template>-->

<!--      <template #default>-->
<!--        <h5>Are you sure you want to power off the device ?</h5>-->
<!--      </template>-->

<!--      <template #modal-footer="{ ok, cancel }">-->
<!--        &lt;!&ndash; Emulate built in modal footer ok and cancel button actions &ndash;&gt;-->
<!--        <b-button-->
<!--          size="sm"-->
<!--          variant="danger"-->
<!--          @click="-->
<!--            shutDown();-->
<!--            ok();-->
<!--          "-->
<!--          >OK</b-button-->
<!--        >-->
<!--        <b-button size="sm" variant="success" @click="cancel()">Cancel</b-button>-->
<!--      </template>-->
<!--    </b-modal>-->
<!--  </div>-->
<!--</template>-->

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
