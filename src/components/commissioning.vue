<template>
  <div>
    <b-card no-body>
      <b-tabs pills card end>
        <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
        <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "page2",
  data() {
    return {
      // msg: "No Message Received from Node-Red",
    };
  },
  methods: {},

  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Page2:", newMsg);
    });
  },
};
</script>

<style scoped>
</style>
