<template>
  <div>counter = {{ count }}</div>
  <CounterTwo />
  <button @click="inc">inc</button>
  <button @click="incAsync">inc async</button>
  <button @click="increase({ value: 10 })">inc 10</button>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import CounterTwo from "./counter2.vue";
export default {
  components: {
    CounterTwo,
  },
  name: "App",
  computed: {
    ...mapGetters("numbers", ["count"]),
  },
  methods: {
    // add() {
    //   this.$store.commit("increment");
    // },
    // addSync() {
    //   this.$store.dispatch("incrementAsync"); //add async with actions
    // },
    // addMulti() {
    //   this.$store.commit("increase", { value: 10 }); //add action by mutation
    // },
    // ...mapActions(["increment", "increase", "incrementAsync"]), // use map actions for multi import actions
    ...mapActions("numbers", {
      inc: "increment",
      incAsync: "incrementAsync",
      increase: "increase",
    }), // custom name of actions
  },
};
</script>
