<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="First" active>
        <div>
          <b-table striped hover :items="items"></b-table>
        </div>
      </b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      count: 0,
      items: []
    }
  },
  // data() {
  //   return {
  //     // msg: "No Message Received from Node-Red",
  //     obj: {}
  //   };
  // },
  methods: {},

  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Home:", newMsg);
      this.count ++;
      this.items.push({nr: this.count, message: "Some usefull message.... ", datetime: newMsg.payload});
    });
  },
};
</script>

<style scoped>
</style>
